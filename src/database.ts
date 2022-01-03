import { GroupData, GroupDatabase } from "./common/group";
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

  generateGroupIcons() {
    for (let i = 0; i < 5; i++) {
      for (const group of this.groups.groups) {
        if (!group.icon) {
          group.icon =
            group.icon ??
            this.types.types.find(i => i.groups.includes(group))?.icons[0] ??
            this.groups.groups.find(i => i.parents.includes(group))?.icon ??
            (i === 4 ? "" : undefined);
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
