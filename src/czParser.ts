import nearley from "nearley";
import grammar from "./grammar";
import fs from "node:fs";
import { Database } from "./database";
import { ScatterType, Type, TypeHidden, TypeState, TypeTags } from "./items/type";
import { Group } from "./items/group";
import { CZPropertyItem, CZPropertySet } from "./czProperties";
import { checkType } from "./build";

type BuilderItem = {
  item: "builder";
  type: string;
  properties: Property[];
  for?: For[];
};

type TemplateItem = {
  item: "template";
  type: string;
  items: BuilderItem[];
};

type Item = BuilderItem | TemplateItem;

interface For {
  values: string[];
  properties?: Property[];
}

export enum Operation {
  Equals = "=",
  Plus = "+",
  Minus = "-",
}

export interface Property {
  key: string;
  value: string[];
  operation: Operation;
}

class CZFileParser {
  private fileName: string;
  private lastGroup: Group | null = null;
  private database: Database;

  constructor(fileName: string, database: Database) {
    this.fileName = fileName;
    this.database = database;
  }

  runBaseTemplate(properties: CZPropertySet) {
    const id = properties.get("id").at(-1);
    const type = new Type(properties.get("name").at(-1)!, id ? Number(id) : undefined);

    if (properties.properties.some(i => i.exclude.length > 0)) {
      throw new Error("Remove found in Base template");
    }
    for (const property of properties.properties) {
      switch (property.key) {
        case "name":
        case "id":
          break;
        case "tags":
          type.setTags(
            property.include.map(i => {
              const tag = (TypeTags as unknown as Record<string, TypeTags>)[i];
              if (tag === undefined) {
                throw new Error(`Unknown tag ${i}`);
              }
              return tag;
            })
          );
          break;
        case "hidden":
          type.setHidden(
            property.include.map(i => {
              const hiddenTag = (TypeHidden as unknown as Record<string, TypeHidden>)[i];
              if (hiddenTag === undefined) {
                throw new Error(`Unknown hidden tag ${i}`);
              }
              return hiddenTag;
            })
          );
          break;
        case "state":
          if (property.include.length > 1) {
            throw new Error("Multiple state found in Base template");
          }
          type.setState(
            property.include.map(i => {
              const stateTag = (TypeState as unknown as Record<string, TypeState>)[i];
              if (stateTag === undefined) {
                throw new Error(`Unknown state tag ${i}`);
              }
              return stateTag;
            })[0]
          );
          break;
        case "groups":
          type.setGroups(property.references);
          break;
        case "standalone":
          ScatterType.prototype.standalone.bind(type)();
          break;
        default:
          throw new Error(`Unknown Base property ${property.key}`);
      }
    }
    if (this.lastGroup && type.refed_groups.length === 0) {
      type.addGroup(this.lastGroup);
    }
    this.database.types.add(type);
    checkType(this.fileName, type);
  }

  runGroupTemplate(properties: CZPropertySet) {
    const group = new Group({
      name: properties.get("name").at(-1)!,
    });
    if (properties.properties.some(i => i.exclude.length > 0)) {
      throw new Error("Remove found in Group template");
    }
    for (const property of properties.properties) {
      switch (property.key) {
        case "name":
          break;
        case "seasonal.year":
          group.setSeasonalYear(property.requiredNumber);
          break;
        case "seasonal.start":
          group.setSeasonalStart(property.requiredString);
          break;
        case "seasonal.end":
          group.setSeasonalEnd(property.requiredString);
          break;
        case "parents":
          group.setParents(property.references);
          break;
        default:
          throw new Error(`Unknown Group property ${property.key}`);
      }
    }
    this.lastGroup = group;
    this.database.groups.add(group);
  }
}

export class CZParser {
  private grammarInstance = nearley.Grammar.fromCompiled(grammar);

  private templates = new Map<string, TemplateItem>();
  private builders = new Map<string, BuilderItem[]>();

  constructor(files: string[]) {
    for (const file of files) {
      const parser = new nearley.Parser(this.grammarInstance);
      parser.feed(fs.readFileSync(file, "utf8"));
      if (parser.results.length !== 1) {
        if (parser.results.length === 0) {
          throw new Error(`Invalid syntax in file: ${file}`);
        }
        throw new Error(`Invalid syntax in file: ${file} (ambiguous, multiple results)`);
      }
      const items: Item[] = parser.results[0];
      const builderItems: BuilderItem[] = [];

      for (const item of items) {
        if (item.item === "builder") {
          builderItems.push(item);
        } else if (item.item === "template") {
          this.templates.set(item.type, item);
        }
      }

      this.builders.set(file, builderItems);
    }
  }

  runFileBuilders(file: string, database: Database) {
    const builderItems = this.builders.get(file);
    if (!builderItems) {
      throw new Error(`CZ File has not been loaded: ${file}`);
    }
    const fileParser = new CZFileParser(file, database);
    for (const builderItem of builderItems) {
      this.runBuilder(builderItem, fileParser);
    }
  }

  private flattenProperties(
    item: Pick<BuilderItem, "properties" | "for">,
    withProperties?: CZPropertySet
  ) {
    const propertiesList = [];
    let index = 0;
    let usedProperties: Set<CZPropertyItem> | undefined = undefined;

    const forItems: [Property[], CZPropertySet][] = [];

    for (const f of item.for ?? [{ values: [] }]) {
      const used = usedProperties as Set<CZPropertyItem> | undefined;
      const forProperties = new CZPropertySet(
        f.values.map((i, n) => ({
          key: `${n + 1}`,
          value: [i],
          operation: Operation.Equals,
        })),
        new CZPropertySet(withProperties?.properties ?? []),
        index,
        used
      );
      usedProperties = forProperties.usedProperties;

      forItems.push([
        f.properties ?? [],
        new CZPropertySet([...forProperties.properties, ...(withProperties?.properties ?? [])]),
      ]);
      index++;
    }

    index = 0;

    for (const forItem of forItems) {
      propertiesList.push(
        new CZPropertySet(
          // Base Properties
          [...item.properties, ...forItem[0]],
          // Applied Properties
          forItem[1],
          index,
          usedProperties
        )
      );
      usedProperties = propertiesList[propertiesList.length - 1].usedProperties;
      index++;
    }
    return propertiesList;
  }

  private runBuilder(builderItem: BuilderItem, fileParser: CZFileParser) {
    const propertiesList = this.flattenProperties(builderItem);
    for (const properties of propertiesList) {
      this.runTemplate(builderItem.type, properties, fileParser);
    }
  }

  private runTemplate(templateName: string, properties: CZPropertySet, fileParser: CZFileParser) {
    if (`run${templateName}Template` in fileParser) {
      (fileParser as unknown as Record<string, (properties: CZPropertySet) => void>)[
        `run${templateName}Template`
      ](properties);
      return;
    }
    const template = this.templates.get(templateName);
    if (!template) {
      throw new Error(`Template ${templateName} not found`);
    }
    for (const item of template.items) {
      const itemPropertiesList = this.flattenProperties(item, properties);
      for (const itemProperties of itemPropertiesList) {
        this.runTemplate(item.type, itemProperties, fileParser);
      }
    }
  }
}
