import nearley from "nearley";
import grammar from "./grammar";
import fs from "node:fs";
import { Database } from "./database";
import { Type, TypeState } from "./common/type";
import { Group } from "./common/group";

export type NewItem = {
  item: "new";
  type: string;
  properties: Property[];
  for?: For[];
};

export type TemplateItem = {
  item: "template";
  type: string;
  items: NewItem[];
};

export type Item = NewItem | TemplateItem;

export interface For {
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

export class PropertyItem {
  key: string;
  value: string[];
  operation: Operation;

  constructor(key: string, value: string[], operation: Operation) {
    this.key = key;
    this.value = value;
    this.operation = operation;
  }

  withProperties(properties: PropertySet) {
    const value = this.value.map(v => {
      if (v.startsWith("$")) {
        const property = properties.get(v.slice(1), Operation.Equals)[0];
        if (!property) {
          throw new Error(`Property ${v} not found`);
        }
        return property.value[0];
      }
      return v.replace(/\$\([^)]+\)/g, i => {
        const property = properties.get(i.slice(2, -1), Operation.Equals)[0];
        if (!property) {
          throw new Error(`Property ${i} not found`);
        }
        return property.value[0];
      });
    });
    return new PropertyItem(this.key, value, this.operation);
  }

  get string() {
    return this.value[0];
  }

  get number() {
    return this.value[0] ? Number(this.value[0]) : undefined;
  }
}

export class PropertySet {
  properties: PropertyItem[];

  constructor(properties: Property[]) {
    this.properties = properties.map(i => new PropertyItem(i.key, i.value, i.operation));
  }

  withProperties(properties: PropertySet) {
    return new PropertySet(this.properties.map(i => i.withProperties(properties)));
  }

  get(key: string, operation: Operation = Operation.Equals): PropertyItem[] {
    return this.properties.filter(i => i.key === key && i.operation === operation);
  }

  has(key: string, operation: Operation = Operation.Equals): boolean {
    return this.properties.some(i => i.key === key && i.operation === operation);
  }
}

export type BuilderFunction = (database: Database, properties: PropertySet) => void;

const grammarInstance = nearley.Grammar.fromCompiled(grammar);

export function createTemplateMap(): Map<string, BuilderFunction> {
  const map = new Map<string, BuilderFunction>();
  map.set("Base", (database, properties) => {
    const type = new Type(
      properties.get("name")[0].value[0],
      properties.has("id") ? Number(properties.get("id")[0].value[0]) : undefined
    );

    for (const property of properties.properties) {
      switch (property.key) {
        case "name":
          break;
        case "state":
          type.setState(TypeState.Bouncer);
          break;
      }
    }

    database.types.add(type);
  });
  map.set("Group", (database, properties) => {
    const nameProperty = properties.get("name")[0];
    if (!nameProperty) {
      throw new Error("Missing parameter $name");
    }
    const group = new Group({
      name: nameProperty.value[0],
    });

    for (const property of properties.properties) {
      switch (property.key) {
        case "name":
          break;
        case "seasonalYear":
          group.setSeasonalYear(property.number!);
          break;
        case "seasonalStart":
          group.setSeasonalStart(property.string);
          break;
        case "seasonalEnd":
          group.setSeasonalEnd(property.string);
          break;
      }
    }
    database.groups.add(group);
  });
  return map;
}

export function parseCZFile(file: string): Item[] {
  const parser = new nearley.Parser(grammarInstance);
  parser.feed(fs.readFileSync(file, "utf8"));
  return parser.results[0] as Item[];
}

export function loadTemplates(templateMap: Map<string, BuilderFunction>, templates: Item[]) {
  for (const template of templates) {
    if (template.type === "new") continue;
    if (template.item === "template") {
      templateMap.set(template.type, (database, properties) => {
        for (const item of template.items) {
          const typeTemplate = templateMap.get(item.type);
          if (!typeTemplate) {
            throw new Error(`Could not find template ${item.type}`);
          }
          for (const f of item.for ?? [{ values: [] }]) {
            const itemProperties = [
              ...(f.properties?.some(i => i.key === "...rest") ? item.properties : []),
              ...(f.properties?.some(i => i.key === "...rest") ? properties.properties : []),
              ...(f.properties ?? []).filter(i => i.key !== "...rest"),
              ...f.values.map((v, n) => ({
                key: (n + 1).toString(),
                value: [v],
                operation: Operation.Equals,
              })),
            ];
            typeTemplate(
              database,
              new PropertySet(
                itemProperties.map(i => new PropertyItem(i.key, i.value, i.operation))
              ).withProperties(properties)
            );
          }
        }
      });
    }
  }
}
