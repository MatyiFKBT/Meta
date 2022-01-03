import { LegacyAccessory, LegacyCategory } from "./legacy";

export interface GroupOptions {
  name: string;
  id?: string;
}

export interface GroupData {
  id: number | string;
  name: string;
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
  id: number | string = null!;
  icon: string = null!;
  name: string;
  parents: Group[] = [];
  seasonal?: GroupSeasonalProperties;
  accessories: GroupAccessory[] = [];

  constructor(options: GroupOptions) {
    this.name = options.name;
    this.id = options.id ?? Group.nextId();
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
      name: this.name,
      seasonal: this.seasonal,
      parents: this.parents.map(i => i.id),
    };
  }

  toLegacyJSON(): LegacyCategory {
    return {
      name: this.name,
      id: this.id.toString(),
      icon: this.icon,
      seasonal: this.seasonal
        ? {
            year: this.seasonal.year,
            start: new Date(this.seasonal.starts).valueOf(),
            end: new Date(this.seasonal.ends).valueOf(),
          }
        : undefined,
      parents: this.parents.map(i => i.id.toString()),
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
