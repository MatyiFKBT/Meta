import nearley from "nearley";
import grammar from "./grammar";
import fs from "node:fs";
import { Database } from "./database";
import { Type, TypeHidden, TypeState, TypeTags } from "./common/type";
import { Group } from "./common/group";
import { CZPropertySet } from "./czProperties";

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

//
// class PropertyItem {
//   add: string[] = [];
//   remove: string[] = [];
//   reset = false;
//
//   key: string;
//
//   constructor(key: string) {
//     this.key = key;
//   }
//
//   merge(other: PropertyItem) {
//     if (other.reset) {
//       this.reset = true;
//       this.add = other.add;
//       this.remove = other.remove;
//     } else {
//       this.remove = this.remove.filter(v => !other.add.includes(v));
//       this.add.push(...other.add);
//       this.add = this.add.filter(v => !other.remove.includes(v));
//       this.remove.push(...other.remove);
//     }
//   }
//
//   mergeAdd(add: string[]) {
//     this.remove = this.remove.filter(v => !add.includes(v));
//     this.add.push(...add);
//   }
//
//   mergeRemove(remove: string[]) {
//     this.add = this.add.filter(v => !remove.includes(v));
//     this.remove.push(...remove);
//   }
//
//   static fromProperty(property: Property) {
//     const item = new PropertyItem(property.key);
//     if (property.operation === Operation.Equals) {
//       item.reset = true;
//       item.add = property.value;
//     } else if (property.operation === Operation.Plus) {
//       item.add = property.value;
//     } else if (property.operation === Operation.Minus) {
//       item.remove = property.value;
//     }
//     return item;
//   }
//
//   clone() {
//     const value = new PropertyItem(this.key);
//     value.add = this.add;
//     value.remove = this.remove;
//     value.reset = this.reset;
//     return value;
//   }
//
//   apply(properties: PropertySet, unusedProperties: Set<PropertyItem>) {
//     const item = this.clone();
//     for (const value of this.add) {
//       if (value.startsWith("$")) {
//         const property = properties.get(value.slice(1));
//         if (!property) {
//           throw new Error(`Property ${value} not found`);
//         }
//         unusedProperties.delete(property);
//         property.reset = false;
//         item.merge(property);
//         item.add = item.add.filter(v => v !== value);
//       } else if (value.match(/\$\([^)]+\)/g)) {
//         const replaceValue = value.replace(/\$\([^)]+\)/g, i => {
//           const property = properties.get(i.slice(2, -1));
//           if (!property) {
//             throw new Error(`Property ${i} not found`);
//           }
//           unusedProperties.delete(property);
//           return property.add[0];
//         });
//         item.add = item.add.map(v => (v === value ? replaceValue : v));
//       }
//     }
//     return item;
//   }
//
//   get string() {
//     if (!this.add[0]) {
//       throw new Error(`No property ${this.key}`);
//     }
//     return this.add[0];
//   }
//
//   get number() {
//     if (!this.add[0]) {
//       throw new Error(`No property ${this.key}`);
//     }
//     return Number(this.add[0]);
//   }
// }
//
// class PropertySet {
//   private propertiesMap: Map<string, PropertyItem> = new Map();
//
//   public get(key: string): PropertyItem {
//     const property = this.propertiesMap.get(key);
//     if (!property) {
//       throw new Error(`Property ${key} not found`);
//     }
//     return property;
//   }
//
//   public has(key: string) {
//     return this.propertiesMap.has(key);
//   }
//
//   public add(property: Property | PropertyItem) {
//     let propertyItem = this.propertiesMap.get(property.key);
//     if (!propertyItem) {
//       propertyItem = new PropertyItem(property.key);
//       this.propertiesMap.set(property.key, propertyItem);
//     }
//     const item = "operation" in property ? PropertyItem.fromProperty(property) : property;
//     propertyItem.merge(item);
//   }
//
//   constructor(properties: Property[] | PropertySet | PropertyItem[]) {
//     if ("propertiesMap" in properties) {
//       for (const [key, value] of properties.propertiesMap.entries()) {
//         this.propertiesMap.set(key, value.clone());
//       }
//       return;
//     }
//     for (const property of properties) {
//       this.add(property);
//     }
//   }
//
//   applyFrom(properties: PropertySet) {
//     const baseProperties = new PropertySet(this);
//     const unusedProperties = new Set<PropertyItem>([...properties.propertiesMap.values()]);
//     for (const property of baseProperties.propertiesMap.values()) {
//       baseProperties.propertiesMap.set(property.key, property.apply(properties, unusedProperties));
//     }
//
//     const restProperty = baseProperties.has("...rest") ? baseProperties.get("...rest") : undefined;
//     if (restProperty?.string === "true") {
//       baseProperties.propertiesMap.delete(restProperty.key);
//       for (const property of unusedProperties) {
//         baseProperties.add(property);
//       }
//     }
//
//     return baseProperties;
//   }
//
//   get properties(): PropertyItem[] {
//     return [...this.propertiesMap.values()];
//   }
// }

// class PropertyItem {
//   key: string;
//   value: string[];
//   operation: Operation;
//
//   constructor(key: string, value: string[], operation: Operation) {
//     this.key = key;
//     this.value = value;
//     this.operation = operation;
//   }
//
//   withProperties(properties: PropertySet, usedProperties: Set<string>) {
//     const value = this.value.flatMap(v => {
//       if (v.startsWith("$")) {
//         const property = properties.get(v.slice(1), this.operation)[0];
//         if (!property) {
//           throw new Error(`Property ${v} not found`);
//         }
//         usedProperties.add(v.slice(1) + "=");
//         return property.value;
//       }
//       return v.replace(/\$\([^)]+\)/g, i => {
//         const property = properties.get(i.slice(2, -1), Operation.Equals)[0];
//         if (!property) {
//           throw new Error(`Property ${i} not found`);
//         }
//         usedProperties.add(i.slice(2, -1) + "=");
//         return property.value[0];
//       });
//     });
//     return new PropertyItem(this.key, value, this.operation);
//   }
//
//   get string() {
//     return this.value[0];
//   }
//
//   get number() {
//     return this.value[0] ? Number(this.value[0]) : undefined!;
//   }
// }
//
// class PropertySet {
//   properties: PropertyItem[];
//
//   constructor(properties: Property[]) {
//     this.properties = properties.map(
//       property => new PropertyItem(property.key, property.value, property.operation)
//     );
//   }
//
//   withProperties(properties: PropertySet | PropertyItem[]) {
//     const propertiesSet =
//       properties instanceof PropertySet ? properties : new PropertySet(properties);
//     const usedProperties = new Set<string>();
//     const newProperties = new PropertySet(
//       this.properties.map(i => i.withProperties(propertiesSet, usedProperties))
//     );
//
//     if (newProperties.get("...rest")) {
//       newProperties.properties = newProperties.properties.filter(
//         i => i.key !== "...rest"
//       );
//       for (const property of propertiesSet.properties) {
//         if (!usedProperties.has(property.key + property.operation)) {
//           newProperties.properties.push(property);
//         }
//       }
//     }
//
//     return newProperties;
//   }
//
//   get(key: string, operation: Operation = Operation.Equals): PropertyItem[] {
//     return this.properties.filter(i => i.key === key && i.operation === operation);
//   }
//
//   has(key: string, operation: Operation = Operation.Equals): boolean {
//     return this.properties.some(i => i.key === key && i.operation === operation);
//   }
// }

class CZFileParser {
  private lastGroup: Group | null = null;
  private database: Database;

  constructor(database: Database) {
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
        default:
          throw new Error(`Unknown Base property ${property.key}`);
      }
    }
    if (this.lastGroup && type.refed_groups.length === 0) {
      type.addGroup(this.lastGroup);
    }
    this.database.types.add(type);
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
        case "seasonalYear":
          group.setSeasonalYear(property.number);
          break;
        case "seasonalStart":
          group.setSeasonalStart(property.string);
          break;
        case "seasonalEnd":
          group.setSeasonalStart(property.string);
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
    const fileParser = new CZFileParser(database);
    for (const builderItem of builderItems) {
      this.runBuilder(builderItem, fileParser);
    }
  }

  private flattenProperties(
    item: Pick<BuilderItem, "properties" | "for">,
    withProperties?: CZPropertySet
  ) {
    const propertiesList = [];
    for (const f of item.for ?? [{ values: [] }]) {
      propertiesList.push(
        new CZPropertySet(
          // Base Properties
          [...item.properties, ...(f.properties ?? [])],
          // Applied Properties
          new CZPropertySet([
            ...new CZPropertySet(
              f.values.map((i, n) => ({
                key: `${n + 1}`,
                value: [i],
                operation: Operation.Equals,
              }))
            ).properties,
            ...(withProperties?.properties ?? []),
          ])
        )
      );
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
