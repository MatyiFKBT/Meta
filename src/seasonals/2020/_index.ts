import { Group } from "../../common/group";
import { TypeTags } from "../../common/type";
import {
  SeasonalBouncerType,
  SeasonalPOBType,
  SeasonalGroup,
  SeasonalScatterType,
  SeasonalType,
  seasonalGroup,
  SeasonalGroupOptions,
} from "../_index";

export const year2020SeasonalGroup = new Group({
  name: "2020 Seasonal Specials",
}).addParent(seasonalGroup);

export class Year2020SeasonalBouncerType extends SeasonalBouncerType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerSeasonal2020);
  }
}

export class Year2020SeasonalPOBType extends SeasonalPOBType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerSeasonal2020);
  }
}

export class Year2020SeasonalScatterType extends SeasonalScatterType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2020SeasonalType extends SeasonalType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2020SeasonalGroup extends SeasonalGroup {
  constructor(options: SeasonalGroupOptions) {
    super({ year: 2020, ...options });
  }
  override template(): this {
    super.template();
    return this.addParent(year2020SeasonalGroup);
  }
}
