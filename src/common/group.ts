import { LegacyAccessory, LegacyCategory } from "./legacy";

export interface GroupOptions {
  name: string;
  human_id?: string;
}

export interface GroupData {
  id: number;
  name: string;
  human_id: string;
  icons: string[];
  seasonal?: GroupSeasonalProperties;
  parents: (number | string)[];
}

export interface GroupSeasonalProperties {
  year: number;
  starts: string;
  ends: string;
}

export enum GroupAccessoryType {
  Button = 1,
}

export interface GroupButton {
  type: GroupAccessoryType.Button;
  label: string;
  translation_key?: string;
  link: string;
  color: string;
}

export type GroupAccessory = GroupButton;

export class Group {
  static latestId = 0;
  static nextId() {
    return this.latestId++;
  }
  id: number = Group.nextId();
  icons: string[] = null!;
  name: string;
  human_id: string;
  parents: Group[] = [];
  seasonal?: GroupSeasonalProperties;
  accessories: GroupAccessory[] = [];

  constructor(options: GroupOptions) {
    this.name = options.name;
    this.human_id = options.human_id?.toString() ?? options.name.replace(/\s+/g, "_").toLowerCase();
    this.template();
  }

  addParent(parent: Group) {
    this.parents.push(parent);
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  template(): void {}

  toJSON(): GroupData {
    return {
      id: this.id,
      human_id: this.human_id,
      icons: this.icons,
      name: this.name,
      seasonal: this.seasonal,
      parents: this.parents.map(i => i.id),
    };
  }

  toLegacyJSON(): LegacyCategory {
    return {
      name: this.name,
      id: this.human_id,
      icon: this.icons[0],
      seasonal: this.seasonal
        ? {
            year: this.seasonal.year,
            start: new Date(this.seasonal.starts).valueOf(),
            end: new Date(this.seasonal.ends).valueOf(),
          }
        : undefined,
      parents: this.parents.map(i => i.human_id),
      accessories:
        this.accessories.length > 0 ? (this.accessories as LegacyAccessory[]) : undefined,
    };
  }

  addAccessories(accessories: (GroupAccessory | GroupAccessory[])[]): this {
    this.accessories.push(...accessories.flat());
    return this;
  }
}

export class GroupDatabase {
  private data: Group[];

  constructor() {
    this.data = [];
  }

  public add(...groups: (Group[] | Group)[]): this {
    this.data.push(...groups.flat());
    return this;
  }

  public get(id: number): Group | undefined {
    return this.data.find(group => group.id === id);
  }

  get groups(): Group[] {
    return this.data;
  }
}
