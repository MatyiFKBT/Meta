import chalk from "chalk";
import { Group } from "./group";
import { LegacyType } from "./legacy";

export enum TypeState {
  Physical = 0x01,
  Virtual = 0x02,
  Bouncer = 0x03,
  Locationless = 0x04,
}

export enum TypePointsType {
  Split = 0x01,
}

export interface TypePoints {
  deploy?: number;
  capture?: number;
  capon?: number;
  type?: TypePointsType;
  split?: number;
  min?: number;
  interval?: number;
}

export enum TypeHidden {
  All = 0x01,
  Inventory = 0x02,
  Bouncers = 0x03,
  Capture = 0x04,
  Deploy = 0x05,
}

export enum TypeTags {
  // Type Tags
  TypeEvent = 0x00,
  TypeEventCustom = 0x01,
  TypeEventStandard = 0x02,

  TypeWeapon = 0x03,
  TypeWeaponClan = 0x04,
  TypeWeaponZeeops = 0x05,

  TypeZodiac = 0x06,
  TypeZodiacWestern = 0x07,
  TypeZodiacChinese = 0x08,
  TypeZodiacEgyptian = 0x09,

  TypeMystery = 0x0a,
  TypeMysteryElemental = 0x0b,

  TypeReseller = 0x0c,
  TypeResellerRetired = 0x0d,

  TypePOI = 0x0e,
  TypeDestination = 0x0f,
  TypeGaming = 0x10,
  TypeJewel = 0x11,
  TypeFlat = 0x12,
  TypeTrail = 0x13,
  TypeTourism = 0x14,
  TypeSeasonal = 0x15,
  TypeUnique = 0x16,
  TypeVirtual = 0x17,

  TypePersonal = 0x18,
  TypeSocial = 0x19,
  TypeUniversal = 0x1a,

  // Bouncer Tags
  BouncerPC = 0x1b,
  BouncerPCS1 = 0x1c,
  BouncerPCS2 = 0x1d,
  BouncerPCEscaped = 0x1e,
  BouncerPCZombie = 0x1f,
  BouncerPCFunfinity = 0x20,
  BouncerPCGleaming = 0x21,
  BouncerPCStageless = 0x22,
  BouncerPCStage1 = 0x23,
  BouncerPCStage2 = 0x24,
  BouncerPCStage3 = 0x25,
  BouncerMyth = 0x26,
  BouncerMythOriginal = 0x27,
  BouncerMythClassical = 0x28,
  BouncerMythMirror = 0x29,
  BouncerMythModern = 0x2a,
  BouncerMythAlterna = 0x2b,
  BouncerMythVariant = 0x2c,
  BouncerRetired = 0x2d,
  BouncerFlat = 0x2e,
  BouncerFlatPhantom = 0x2f,
  BouncerEvolution = 0x30,
  BouncerTPOB = 0x31,
  BouncerTPOBBabyAnimal = 0x32,
  BouncerNomad = 0x33,
  BouncerSeasonal = 0x34,
  BouncerSeasonal2022 = 0x79,
  BouncerSeasonal2021 = 0x35,
  BouncerSeasonal2020 = 0x36,
  BouncerSeasonal2019 = 0x37,
  BouncerSeasonal2018 = 0x38,
  BouncerSeasonal2017 = 0x39,
  BouncerSeasonal2016 = 0x3a,
  BouncerSeasonal2015 = 0x3b,
  BouncerSeasonalLegacy = 0x3c,
  Bouncer = 0x3d,

  // Bouncer Host Tags
  BouncerHostPC = 0x3e,
  BouncerHostPCEscaped = 0x3f,
  BouncerHostPCZombie = 0x40,
  BouncerHostPCFunfinity = 0x41,
  BouncerHostPCGleaming = 0x42,
  BouncerHostPCStage1 = 0x43,
  BouncerHostPCStage2 = 0x44,
  BouncerHostPCStage3 = 0x45,
  BouncerHostMyth = 0x46,
  BouncerHostMythOriginal = 0x47,
  BouncerHostMythClassical = 0x48,
  BouncerHostMythMirror = 0x49,
  BouncerHostMythModern = 0x4a,
  BouncerHostMythAlterna = 0x4b,
  BouncerHostMythVariant = 0x4c,
  BouncerHostRetired = 0x4d,
  BouncerHostFlat = 0x4e,
  BouncerHostEvolution = 0x4f,
  BouncerHostTPOB = 0x50,
  BouncerHostTPOBBabyAnimal = 0x51,
  BouncerHostSeasonal = 0x52,
  BouncerHostSeasonal2021 = 0x53,
  BouncerHostSeasonal2020 = 0x54,
  BouncerHostSeasonal2019 = 0x55,
  BouncerHostSeasonal2018 = 0x56,
  BouncerHostSeasonal2017 = 0x57,
  BouncerHostSeasonalLegacy = 0x58,
  BouncerHost = 0x59,

  // Card Tags
  Card = 0x5a,
  CardOpen = 0x5b,
  Card2020 = 0x5c,
  Card2020HCCC = 0x5d,
  Card2021 = 0x5e,
  Card2021VCCC = 0x5f,
  Card2021BCCC = 0x77,

  // Evolution
  Evolution = 0x60,
  EvolutionFarm = 0x61,
  EvolutionEducation = 0x62,
  EvolutionNature = 0x63,
  EvolutionReseller = 0x64,
  EvolutionGeneric = 0x65,

  // Virtual Colours
  VirtualColourPink = 0x66,
  VirtualColourLouPink = 0x67,
  VirtualColourGreen = 0x68,
  VirtualColourRed = 0x69,
  VirtualColourBlue = 0x6a,
  VirtualColourBlack = 0x6b,
  VirtualColourBrown = 0x6c,

  // Scatter Tags
  Scatter = 0x6d,
  ScatterStandalone = 0x6e,

  // Destination Tags
  DestinationRooms = 0x73,
  DestinationRoom = 0x74,
  DestinationBouncer = 0x75,
  DestinationTemporary = 0x76,

  // Other Tags
  Credit = 0x6f,
  Other = 0x70,
  Redeemable = 0x78,

  // Function Tags
  FunctionSwap = 0x71,
  FunctionBlast = 0x72,
}
// Latest: BouncerSeasonal2022 = 0x79,

export interface TypeMeta {
  capture_radius?: number;

  evolution_stage?: number;
  evolution_base?: number;

  destination_size?: number;
  destination_star_level?: number;
  destination_room_of?: number;
  destination_temporary?: boolean;

  bouncer_duration?: number;
  bouncer_lands_on?: TypeReference[];
  bouncer_base?: string;

  host_types?: TypeReference[];

  scatter_duration?: number;
  scatter_lands_on?: TypeReference[];

  scatterer_types?: TypeReference[];
  scatterer_min?: number;
  scatterer_max?: number;
  scatterer_radius?: number;
}

export interface TypePoints {
  deploy?: number;
  capture?: number;
  capon?: number;
  type?: TypePointsType;
  split?: number;
  min?: number;
  interval?: number;
}

export interface TypeOptions {
  name: string;
  icons?: string[];
  human_id?: string;
  munzee_id?: number;
  state?: TypeState;
  groups?: Group[];
  points?: TypePoints;
  tags?: TypeTags[];
  hidden?: TypeHidden[];
  meta?: TypeMeta;
}

export interface TypeData {
  name: string;
  icons?: string[];
  id: number;
  human_id?: string;
  munzee_id?: number;
  state?: TypeState;
  groups?: (number | string)[];
  points?: TypePoints;
  tags?: TypeTags[];
  hidden?: TypeHidden[];
  meta?: TypeMeta;
}

export type TypeReference = number | Type | ((type: Type) => boolean);

export class Type {
  static latestId = 0;
  static nextId() {
    return this.latestId++;
  }
  public file: string | undefined;
  // Munzee Name
  private data_name: string;
  // Munzee Icons
  private data_icons: string[];
  // CuppaZee ID
  private data_id: number;
  // CuppaZee Human ID
  private data_human_id: string;
  // Munzee ID
  private data_munzee_id?: number;
  // State - `physical`/`virtual`/`bouncer`/`locationless`
  private data_state: TypeState;
  // Groups
  private data_groups: Set<Group>;
  // Points Data
  private data_points?: TypePoints;
  // Type Tags
  private data_tags: Set<TypeTags>;
  // Type Hidden
  private data_hidden: Set<TypeHidden>;
  // Type Meta
  private data_meta: TypeMeta;

  constructor(name: string, munzee_id?: number);
  constructor(parameters: TypeOptions);
  constructor(parameters: TypeOptions | string, munzee_id?: number) {
    const options = typeof parameters === "string" ? { name: parameters, munzee_id } : parameters;
    this.data_name = options.name;
    this.data_icons = options.icons ?? [options.name.toLowerCase().replace(/\s+/g, "")];
    this.data_id = Type.nextId();
    this.data_human_id = options.human_id ?? options.name.toLowerCase().replace(/\s/g, "_");
    this.data_munzee_id = options.munzee_id;
    this.data_state = options.state!;
    this.data_groups = new Set(options.groups ?? []);
    this.data_points = options.points;
    this.data_tags = new Set(options.tags ?? []);
    this.data_hidden = new Set(options.hidden ?? []);
    this.data_meta = options.meta ?? {};
    this.template();
  }

  get name(): string {
    return this.data_name;
  }

  get icons(): string[] {
    return this.data_icons;
  }

  get id(): number {
    return this.data_id;
  }

  get human_id(): string {
    return this.data_human_id;
  }

  get munzee_id(): number | undefined {
    return this.data_munzee_id;
  }

  get groups(): Group[] {
    return [...this.data_groups];
  }

  get state(): TypeState {
    return this.data_state;
  }

  get points(): TypePoints | undefined {
    return this.data_points;
  }

  get tags(): TypeTags[] {
    return [...this.data_tags];
  }

  get hidden(): TypeHidden[] {
    return [...this.data_hidden];
  }

  get meta(): TypeMeta {
    return this.data_meta;
  }

  setName(name: string): this {
    this.data_name = name;
    return this;
  }

  addIcons(...icons: (string | string[])[]): this {
    this.data_icons.push(...icons.flat());
    return this;
  }
  addIcon = this.addIcons;

  setIcons(...icons: (string | string[])[]): this {
    this.data_icons = icons.flat();
    return this;
  }
  setIcon = this.setIcons;

  setHumanId(humanId: string): this {
    this.data_human_id = humanId;
    return this;
  }

  setMunzeeId(munzee_id: number | undefined): this {
    this.data_munzee_id = munzee_id;
    return this;
  }

  addGroups(...groups: (Group | Group[])[]): this {
    for (const group of groups.flat()) {
      this.data_groups.add(group);
    }
    return this;
  }
  addGroup = this.addGroups;

  setGroups(...groups: (Group | Group[])[]): this {
    this.data_groups = new Set(groups.flat());
    return this;
  }
  setGroup = this.setGroups;

  setState(state: TypeState): this {
    this.data_state = state;
    return this;
  }

  physical() {
    return this.setState(TypeState.Physical);
  }
  virtual() {
    return this.setState(TypeState.Virtual);
  }
  locationless() {
    return this.setState(TypeState.Locationless);
  }

  setPoints(points: TypePoints | undefined): this {
    this.data_points = points;
    return this;
  }

  removeTags(...tags: (TypeTags | TypeTags[])[]): this {
    for (const tag of tags.flat()) {
      this.data_tags.delete(tag);
    }
    return this;
  }

  addTags(...tags: (TypeTags | TypeTags[])[]): this {
    for (const tag of tags.flat()) {
      this.data_tags.add(tag);
    }
    return this;
  }
  addTag = this.addTags;

  hasTags(...tags: (TypeTags | TypeTags[])[]): boolean {
    return tags.flat().every(tag => this.data_tags.has(tag));
  }

  setTags(...tags: (TypeTags | TypeTags[])[]): this {
    this.data_tags = new Set(tags.flat());
    return this;
  }
  setTag = this.setTags;

  addHidden(...hiddenList: (TypeHidden | TypeHidden[])[]): this {
    for (const hidden of hiddenList.flat()) {
      this.data_hidden.add(hidden);
    }
    return this;
  }

  setHidden(...hidden: (TypeHidden | TypeHidden[])[]): this {
    this.data_hidden = new Set(hidden.flat());
    return this;
  }

  setMeta(meta: TypeMeta): this {
    this.data_meta = meta;
    return this;
  }

  scattererDistance(distance: number): this {
    this.data_meta.scatterer_radius = distance;
    return this;
  }

  scattererScatters(...types: (TypeReference | TypeReference[])[]): this {
    this.meta.scatterer_types ??= [];
    this.meta.scatterer_types.push(...types.flat());
    return this;
  }

  destinationSize(size: number): this {
    this.meta.destination_size = size;
    return this;
  }

  destinationStarLevel(starLevel: number): this {
    this.meta.destination_star_level = starLevel;
    return this;
  }

  destinationRoomOf(type: Type): this {
    this.meta.destination_room_of = type.id;
    return this;
  }

  addBouncerLandsOn(...types: (TypeReference | TypeReference[])[]): this {
    this.meta.bouncer_lands_on ??= [];
    this.meta.bouncer_lands_on.push(...types.flat());
    return this;
  }

  setBouncerLandsOn(...types: (TypeReference | TypeReference[])[]): this {
    this.meta.bouncer_lands_on = types.flat();
    return this;
  }

  setEvolutionStage(stage: number): this {
    this.meta.evolution_stage = stage;
    if (stage > 1) {
      this.addHidden(TypeHidden.Deploy);
    }
    return this;
  }

  setEvolutionBase(base: Type): this {
    this.meta.evolution_base = base.id;
    return this;
  }

  addHostTypeOf(...types: (TypeReference | TypeReference[])[]): this {
    this.meta.host_types ??= [];
    this.meta.host_types.push(...types.flat());
    return this;
  }

  setHostTypeOf(...types: (TypeReference | TypeReference[])[]): this {
    this.meta.host_types = types.flat();
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  template(): void {}

  toCZM(compact?: boolean): string {
    const data = [`d${this.data_id.toString(36)}`, `n${this.data_name}`];

    const metaCompress: { [K in keyof TypeMeta]?: (value: NonNullable<TypeMeta[K]>) => string } = {
      scatterer_types: v => `mst${v.map(t => t.toString(36)).join(",")}`,
      bouncer_lands_on: v => `mbl${v.map(t => t.toString(36)).join(",")}`,
      destination_room_of: v => `mdr${v.toString(36)}`,
      destination_star_level: v => `mdl${v.toString(36)}`,
      destination_size: v => `mds${v.toString(36)}`,
      evolution_base: v => `meb${v.toString(36)}`,
      evolution_stage: v => `mes${v.toString(36)}`,
      host_types: v => `mht${v.map(t => t.toString(36)).join(",")}`,
    };

    const icons = this.data_icons.join(".");
    if (!compact || icons !== this.data_name.toLowerCase().replace(/\s+/g, ""))
      data.push(`o${icons}`);

    if (!compact || this.data_human_id !== this.data_name.toLowerCase().replace(/\s/g, "_"))
      data.push(`i${this.data_human_id}`);

    if (this.data_munzee_id !== undefined) data.push(`z${this.data_munzee_id.toString(36)}`);

    if (this.data_state) data.push(`s${this.data_state.toString(36)}`);

    if (this.data_groups) data.push(`g${[...this.data_groups].map(i => i.id).join(".")}`);

    if (this.data_points) data.push(`p${JSON.stringify(this.data_points)}`);

    if (this.data_tags.size > 0)
      data.push(`t${[...this.data_tags].map(i => i.toString(36)).join(".")}`);

    if (this.data_hidden.size > 0)
      data.push(`h${[...this.data_hidden].map(i => i.toString(36)).join(".")}`);

    const meta: Partial<TypeMeta> = {};

    for (const key of Object.keys(this.data_meta) as (keyof TypeMeta)[]) {
      if (metaCompress[key]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.push((metaCompress[key] as any)(this.data_meta[key]));
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        meta[key] = this.data_meta[key] as any;
      }
    }

    if (Object.keys(meta).length > 0) data.push(`x${JSON.stringify(meta)}`);

    return data.join("|");
  }

  toJSON(compact?: false): TypeData & { icons: string[]; human_id: string };
  toJSON(compact: true): TypeData;
  toJSON(compact?: boolean): TypeData {
    const data: TypeData = {
      name: this.data_name,
      id: this.data_id,
    };

    if (!compact || this.data_icons.join(".") !== this.data_name.toLowerCase().replace(/\s+/g, ""))
      data.icons = this.data_icons;

    if (!compact || this.data_human_id !== this.data_name.toLowerCase().replace(/\s/g, "_"))
      data.human_id = this.data_human_id;

    if (this.data_munzee_id !== undefined) data.munzee_id = this.data_munzee_id;

    if (this.data_state) data.state = this.data_state;

    if (this.data_groups) data.groups = [...this.data_groups].map(i => i.id);

    if (this.data_points) data.points = this.data_points;

    if (this.data_tags.size > 0) data.tags = [...this.data_tags];

    if (this.data_hidden.size > 0) data.hidden = [...this.data_hidden];

    if (Object.keys(this.data_meta).length > 0) data.meta = this.data_meta;

    return data;
  }

  toLegacyJSON(): LegacyType {
    return {
      name: this.data_name,
      icons: this.data_icons,
      id: this.data_id.toString(),
      state: this.data_state,
      category: this.groups[this.groups.length - 1].human_id.toString(),
      tags: [...this.data_tags],
      hidden: [...this.data_hidden],
      meta:
        Object.keys(this.meta).length > 0
          ? {
              bouncer_duration: this.meta.bouncer_duration,
              bouncer_lands_on: this.meta.bouncer_lands_on?.map(i => i.toString()),
              evolution_base: this.meta.evolution_base?.toString(),
              scatterer_radius: this.meta.scatterer_radius,
              scatterer_types: this.meta.scatterer_types?.map(i => i.toString()),
              scatterer_min: this.meta.scatterer_min,
              scatterer_max: this.meta.scatterer_max,
              host_types: this.meta.host_types?.map(i => i.toString()),
              destination_size: this.meta.destination_size,
              destination_star_level: this.meta.destination_star_level,
              destination_room_of: this.meta.destination_room_of?.toString(),
              destination_temporary: this.meta.destination_temporary,
              scatter_duration: this.meta.scatter_duration,
              evolution_stage: this.meta.evolution_stage,
            }
          : undefined,
      munzee_id: this.data_munzee_id,
      group: undefined,
    };
  }
}

export class BouncerType extends Type {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.Bouncer)
      .setState(TypeState.Bouncer)
      .addHidden(TypeHidden.Inventory);
  }
}

export class BouncerHostType extends Type {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerHost).addHidden(TypeHidden.Inventory, TypeHidden.Deploy);
  }

  override virtual = () => {
    super.virtual();
    if (
      this.icons[0] === this.name.toLowerCase().replace(/\s+/g, "") &&
      this.icons[0].endsWith("virtualhost")
    ) {
      this.icons[0] = this.name.toLowerCase().replace(/\s/g, "_");
    }
    return this;
  };
}

export class ScatterType extends Type {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.Scatter).addHidden(TypeHidden.Inventory, TypeHidden.Deploy);
  }

  standalone() {
    return this.virtual()
      .addTag(TypeTags.ScatterStandalone)
      .setHidden(this.hidden.filter(i => i !== TypeHidden.Deploy));
  }
}

export class TypeDatabase {
  private data: Set<Type>;
  private referencesResolved = false;

  constructor() {
    this.data = new Set();
  }

  public add(...types: (Type[] | Type)[]): this {
    if (this.referencesResolved)
      throw new Error("Cannot add types after references have been resolved");
    for (const type of types.flat().map(i => {
      if (!i.name) throw new Error(`Type ${JSON.stringify(i)} must have a name`);
      if (!i.state) throw new Error(`Type ${i.name} must have a state`);
      return i;
    })) {
      this.data.add(type);
    }
    return this;
  }

  public get(id: string | number): Type | undefined {
    return [...this.data].find(type => type.id === id || type.human_id === id);
  }

  get types(): Type[] {
    return [...this.data];
  }

  private resolveReference(type: Type, ref: TypeReference): number[] {
    if (typeof ref === "number") return [ref];
    if (ref instanceof Type) return [ref.id];
    const types = this.types.filter(ref);
    if (types.length === 0)
      console.warn(
        chalk.gray`[{yellow WARN}] ${
          type.file
        }: Could not resolve reference ${ref.toString()} for ${type.name}`
      );
    return types.map(i => i.id);
  }

  public resolveReferences(): void {
    if (this.referencesResolved) throw new Error("References have already been resolved");
    this.referencesResolved = true;
    for (const type of this.types) {
      if (type.meta.scatterer_types) {
        type.meta.scatterer_types = type.meta.scatterer_types
          .map(i => this.resolveReference(type, i))
          .flat();
      }
      if (type.meta.scatter_lands_on) {
        type.meta.scatter_lands_on = type.meta.scatter_lands_on
          .map(i => this.resolveReference(type, i))
          .flat();
      }
      if (type.meta.bouncer_lands_on) {
        type.meta.bouncer_lands_on = type.meta.bouncer_lands_on
          .map(i => this.resolveReference(type, i))
          .flat();
      }
      if (type.meta.host_types) {
        type.meta.host_types = type.meta.host_types.map(i => this.resolveReference(type, i)).flat();
      }
      delete type.file;
    }
  }
}

export class TypeSet<T extends Type = Type> extends Array<T> {
  constructor(array?: T[]) {
    super();
    if (array) this.push(...array);
  }

  public add(...types: (T[] | T)[]): this {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.push(...(types.flat() as any));
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  each(callbackfn: (value: T, index: number, array: T[]) => T, thisArg?: any): this {
    this.forEach(callbackfn, thisArg);
    return this;
  }
}

export class EvolutionTypeSet<T extends Type = Type> extends TypeSet<T> {
  constructor(array?: T[]) {
    super(array);
  }

  public add(...types: (T[] | T)[]): this {
    super.add(...types);
    if (this.length > 0) {
      this.sort((a, b) => (a.meta.evolution_stage ?? 0) - (b.meta.evolution_stage ?? 0));
      this.forEach(i => {
        i.setEvolutionBase(this[0]);
      });
    }
    return this;
  }
}
