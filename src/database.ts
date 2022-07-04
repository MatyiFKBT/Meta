import { create } from "xmlbuilder2";
import { XMLBuilder } from "xmlbuilder2/lib/interfaces";
import { Group, GroupData, GroupDatabase } from "./common/group";
import { LegacyData } from "./common/legacy";
import { TypeData, TypeDatabase, TypeTags } from "./common/type";

export interface FullDatabaseData {
  types: (TypeData & { icons: string[]; id: string })[];
  groups: GroupData[];
}

export interface DatabaseData {
  types: (Omit<TypeData, "details"> & { icons: string[]; id: string })[];
  groups: GroupData[];
}

export interface CompactDatabaseData {
  types: Omit<TypeData, "details">[];
  groups: GroupData[];
}

export class Database {
  types: TypeDatabase;
  groups: GroupDatabase;

  constructor() {
    this.types = new TypeDatabase();
    this.types._db = this;
    this.groups = new GroupDatabase();
  }

  generateGroupIcon(group: Group): string[] {
    const allTypes = this.types.types.filter(i => i.groups.includes(group));

    let types = allTypes.filter(i => !i.hasTags(TypeTags.BouncerHost));

    if (types.length < 3) {
      types = allTypes;
    }

    const groups = this.groups.groups.filter(i => i.parents.includes(group));

    if (types.length && groups.length) {
      // Types AND Groups
      if (types.length >= 2) {
        return [types[0].icons[0], types[types.length - 1].icons[0], groups[0].icons[0]];
      } else if (types.length === 1 && groups.length >= 2) {
        return [types[0].icons[0], groups[0].icons[0], groups[1].icons[0]];
      } else if (groups[0].icons[1]) {
        return [types[0].icons[0], groups[0].icons[0], groups[0].icons[1]];
      } else {
        return [types[0].icons[0], groups[0].icons[0]];
      }
    } else if (types.length) {
      // Types Only
      if (types.length >= 3) {
        return [
          types[0].icons[0],
          types[Math.floor((types.length - 1) / 2)].icons[0],
          types[types.length - 1].icons[0],
        ];
      } else {
        return types.map(i => i.icons[0]);
      }
    } else if (groups.length) {
      // Groups Only
      if (groups.length >= 3) {
        return [
          groups[0].icons[0],
          groups[Math.floor((groups.length - 1) / 2)].icons[0],
          groups[groups.length - 1].icons[0],
        ];
      } else if (groups.length === 2) {
        if (groups[0].icons.length >= 2) {
          return [groups[0].icons[0], groups[0].icons[1], groups[1].icons[0]];
        } else if (groups[1].icons.length >= 2) {
          return [groups[0].icons[0], groups[1].icons[0], groups[1].icons[1]];
        } else {
          return [groups[0].icons[0], groups[1].icons[0]];
        }
      } else {
        return groups[0].icons;
      }
    }
    return [""];
  }

  generateGroupIcons() {
    for (let i = 0; i < 5; i++) {
      for (const group of this.groups.groups) {
        if (!group.icons) {
          if (this.groups.groups.some(i => i.parents.includes(group) && !i.icons) && i !== 4)
            continue;
          const icons = this.generateGroupIcon(group);
          if (icons.length) {
            group.icons = icons;
          }
        }
      }
    }
  }

  toJSON(variant?: "regular"): DatabaseData;
  toJSON(variant: "compact"): CompactDatabaseData;
  toJSON(variant: "full"): FullDatabaseData;
  toJSON(
    variant?: "compact" | "regular" | "full"
  ): CompactDatabaseData | DatabaseData | FullDatabaseData {
    if (variant === "full") {
      return {
        types: this.types.types.map(i => i.toJSON("full")),
        groups: this.groups.groups.map(i => i.toJSON("full")),
      };
    }
    if (variant === "compact") {
      return {
        types: this.types.types.map(i => i.toJSON("compact")),
        groups: this.groups.groups.map(i => i.toJSON()),
      };
    }
    return {
      types: this.types.types.map(i => i.toJSON()),
      groups: this.groups.groups.map(i => i.toJSON()),
    };
  }

  toXML(compact?: boolean): XMLBuilder {
    const root = create().ele("meta");
    const typesRoot = root.ele("types");
    for (const type of this.types.types) {
      type.addToXML(typesRoot, compact);
    }
    const groupsRoot = root.ele("groups");
    for (const group of this.groups.groups) {
      group.addToXML(groupsRoot);
    }
    return root;
  }

  toCZM(compact?: boolean): string {
    return `-t\n${this.types.types.map(i => i.toCZM(compact)).join("\n")}\n-g\n${this.groups.groups
      .map(i => i.toCZM(compact))
      .join("\n")}`;
  }

  toLegacyJSON(): LegacyData {
    return {
      types: this.types.types.map(i => i.toLegacyJSON()),
      categories: this.groups.groups.map(i => i.toLegacyJSON()),
      events: [],
    };
  }

  toLegacyJSONSorted(): LegacyData {
    return {
      types: this.types.types
        .map(i => i.toLegacyJSON())
        .sort((a, b) => ([a.name, b.name].sort()[0] === a.name ? -1 : 1)),
      categories: this.groups.groups
        .map(i => i.toLegacyJSON())
        .sort((a, b) => ([a.name, b.name].sort()[0] === a.name ? -1 : 1)),
      events: [],
    };
  }
}
