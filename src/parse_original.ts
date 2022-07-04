import nearley from "nearley";
import grammar from "./grammar";
import fs from "node:fs";
import { Database } from "./database";
import { Type } from "./common/type";
import { Year2022SeasonalBouncerType, Year2022SeasonalGroup } from "./seasonals/2022/_index";
import { Group } from "./common/group";
import { checkType } from "./build";

export enum ItemType {
  Type = "type",
  Group = "group",
}

export interface Item {
  item: ItemType;
  type: string;
  properties: Property[];
  for?: For[];
}

export interface For {
  values: string[];
  properties?: Property[];
}

export interface Property {
  key: string;
  value: string[];
  operation: string;
}

const grammarInstance = nearley.Grammar.fromCompiled(grammar);

const typeMap: { [key: string]: typeof Type } = {
  Seasonal2022Bouncer: Year2022SeasonalBouncerType,
};

const typePropertyMap: { [key: string]: (this: Type, value: string[]) => void } = {};

const groupMap: { [key: string]: typeof Group } = {
  Seasonal2022: Year2022SeasonalGroup,
};

const groupPropertyMap: { [key: string]: (this: Group, value: string[]) => void } = {
  start([start]) {
    this.setSeasonalStart(start);
  },
  end([end]) {
    this.setSeasonalEnd(end);
  },
  year([year]) {
    this.setSeasonalYear(Number(year));
  },
};

function optionalNumber(value: string | undefined): number | undefined {
  if (!value) {
    return undefined;
  }
  return Number(value);
}

function getPropertyValue(property: Property, values: string[]): string[];
function getPropertyValue(property: Property | undefined, values: string[]): string[] | undefined;
function getPropertyValue(property: Property | undefined, values: string[]): string[] | undefined {
  if (!property) {
    return undefined;
  }
  return property.value.map(i => (i.startsWith("$") ? values[Number(i.slice(1)) - 1] : i));
}

export function parseCZFile(database: Database, file: string) {
  const parser = new nearley.Parser(grammarInstance);
  parser.feed(fs.readFileSync(file, "utf8"));
  const items = parser.results[0] as Item[];

  let latestGroup: Group | null = null;

  for (const item of items) {
    if (item.item === ItemType.Type) {
      if (!typeMap[item.type]) {
        console.error(`Unknown type: ${item.type}`);
        process.exit(1);
      }
      for (const f of item.for ?? [
        {
          values: [],
        },
      ]) {
        const properties = [...item.properties, ...(f.properties ?? [])];
        const type = new typeMap[item.type](
          getPropertyValue(
            properties
              .slice()
              .reverse()
              .find(i => i.key === "name")!,
            f.values
          )[0],
          optionalNumber(
            getPropertyValue(
              properties
                .slice()
                .reverse()
                .find(i => i.key === "id"),
              f.values
            )?.[0]
          )
        );
        for (const property of properties) {
          if (property.key === "name" || property.key === "id") continue;
          const key = `${property.operation === "=" ? "" : property.operation}${property.key}`;
          if (typePropertyMap[key]) {
            typePropertyMap[key].bind(type)(property.value);
          } else {
            console.error(`Unknown property: ${key}`);
            process.exit(1);
          }
        }
        if (type.groups.length === 0) {
          if (!latestGroup) {
            console.error(`No group specified for type: ${type.name}`);
            process.exit(1);
          }
          type.addGroup(latestGroup);
        }
        database.types.add(type);
        checkType(file, type);
      }
    } else if (item.item === ItemType.Group) {
      if (!groupMap[item.type]) {
        console.error(`Unknown group type: ${item.type}`);
        process.exit(1);
      }
      for (const f of item.for ?? [
        {
          values: [],
        },
      ]) {
        const properties = [...item.properties, ...(f.properties ?? [])];
        const group = new groupMap[item.type]({
          name: getPropertyValue(
            properties
              .slice()
              .reverse()
              .find(i => i.key === "name")!,
            f.values
          )[0],
        });
        for (const property of properties) {
          if (property.key === "name") continue;
          const key = `${property.operation === "=" ? "" : property.operation}${property.key}`;
          if (groupPropertyMap[key]) {
            groupPropertyMap[key].bind(group)(property.value);
          } else {
            console.error(`Unknown group property: ${key}`);
            process.exit(1);
          }
        }
        database.groups.add(group);
        latestGroup = group;
      }
    }
  }
}
