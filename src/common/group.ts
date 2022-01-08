import { XMLBuilder } from "xmlbuilder2/lib/interfaces";
import { LegacyAccessory, LegacyCategory } from "./legacy";

export interface GroupOptions {
  name: string;
  human_id?: string;
  icons?: string[];
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
  legacyAccessories: LegacyAccessory[] = [];

  constructor(options: GroupOptions) {
    this.name = options.name;
    this.human_id = options.human_id?.toString() ?? options.name.replace(/\s+/g, "_").toLowerCase();
    if (options.icons) this.icons = options.icons;
    this.template();
  }

  addParent(parent: Group) {
    this.parents.push(parent);
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  template(): void {}

  toCZM(compact?: boolean): string {
    const data = [`d${this.id.toString(36)}`, `n${this.name}`];

    data.push(`o${this.icons.join(".")}`);

    if (!compact || this.human_id !== this.name.toLowerCase().replace(/\s/g, "_"))
      data.push(`i${this.human_id}`);

    if (this.seasonal) {
      data.push(`sy${this.seasonal.year.toString(36)}`);
      data.push(`ss${new Date(this.seasonal.starts).valueOf().toString(36)}`);
      data.push(`se${new Date(this.seasonal.starts).valueOf().toString(36)}`);
    }

    if (this.parents.length > 0)
      data.push(`p${this.parents.map(i => i.id.toString(36)).join(".")}`);

    return data.join("|");
  }

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
      accessories: this.legacyAccessories.length > 0 ? this.legacyAccessories : undefined,
    };
  }

  addToXML(xml: XMLBuilder): void {
    const group = xml.ele("group", { att: "val" });
    group.att("id", this.id.toString());
    group.att("human_id", this.human_id);
    group.ele("name").txt(this.name);
    for (const icon of this.icons) {
      group.ele("icon").txt(icon);
    }
    if (this.seasonal) {
      const seasonal = group.ele("seasonal");
      seasonal.ele("year").txt(this.seasonal.year?.toString());
      seasonal.ele("start").txt(this.seasonal.starts);
      seasonal.ele("end").txt(this.seasonal.ends);
    }
    for (const parent of this.parents) {
      group.ele("parent").txt(parent.id.toString());
    }
  }

  addLegacyAccessories(accessories: (LegacyAccessory | LegacyAccessory[])[]): this {
    this.legacyAccessories.push(...accessories.flat());
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
