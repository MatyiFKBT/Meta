import { Group, GroupData, GroupDatabase } from "./common/group";
import { LegacyData } from "./common/legacy";
import { TypeData, TypeDatabase } from "./common/type";

export interface DatabaseData {
  types: (TypeData & { icons: string[]; id: string })[];
  groups: GroupData[];
}

export interface CompactDatabaseData {
  types: TypeData[];
  groups: GroupData[];
}

export class Database {
  types: TypeDatabase;
  groups: GroupDatabase;

  constructor() {
    this.types = new TypeDatabase();
    this.groups = new GroupDatabase();
  }

  generateGroupIcon(group: Group): string[] {
    const types = this.types.types.filter(i => i.groups.includes(group));
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

  toJSON(compact?: false): DatabaseData;
  toJSON(compact: true): CompactDatabaseData;
  toJSON(compact?: boolean): CompactDatabaseData | DatabaseData {
    if (compact) {
      return {
        types: this.types.types.map(i => i.toJSON(true)),
        groups: this.groups.groups.map(i => i.toJSON()),
      };
    }
    return {
      types: this.types.types.map(i => i.toJSON()),
      groups: this.groups.groups.map(i => i.toJSON()),
    };
  }

  toCZM(compact?: boolean): string {
    return `-t\n${this.types.types.map(i => i.toCZM(compact)).join("\n")}\n-g\n${this.groups.groups
      .map(i => i.name)
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
