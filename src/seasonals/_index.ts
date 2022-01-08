import { homeGroup } from "../base";
import { Group, GroupOptions, GroupSeasonalProperties } from "../common/group";
import { BouncerType, ScatterType, Type, TypeHidden, TypeTags } from "../common/type";

export const seasonalGroup = new Group({
  name: "Seasonal Specials",
}).addParent(homeGroup);

export class SeasonalBouncerType extends BouncerType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerSeasonal).addHidden(TypeHidden.Deploy);
  }
}

export class SeasonalPOBType extends BouncerType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerSeasonal, TypeTags.BouncerTPOB);
  }
}

export class SeasonalScatterType extends ScatterType {
  override template(): this {
    super.template();
    return this;
  }
}

export class SeasonalType extends Type {
  override template(): this {
    super.template();
    return this.addHidden(TypeHidden.Inventory, TypeHidden.Deploy);
  }
}

export type SeasonalGroupOptions = GroupOptions & Partial<GroupSeasonalProperties>;
export class SeasonalGroup extends Group {
  constructor(options: SeasonalGroupOptions) {
    super(options);
    this.seasonal = {
      year: options.year!,
      starts: options.starts!,
      ends: options.ends!,
    };
  }

  override template(): this {
    super.template();
    return this;
  }

  seasonalYear(year: number): this {
    this.seasonal ??= {} as GroupSeasonalProperties;
    this.seasonal.year = year;
    return this;
  }

  seasonalStarts(starts: string): this {
    this.seasonal ??= {} as GroupSeasonalProperties;
    this.seasonal.starts = starts;
    return this;
  }

  seasonalEnds(ends: string): this {
    this.seasonal ??= {} as GroupSeasonalProperties;
    this.seasonal.ends = ends;
    return this;
  }
}
