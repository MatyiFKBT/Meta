import { Group } from "../../common/group";
import { TypeTags } from "../../common/type";
import {
  SeasonalBouncerType,
  SeasonalPOBType,
  SeasonalGroup,
  SeasonalScatterType,
  SeasonalType,
  seasonalGroup,
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
  override template(): this {
    super.template();
    return this.seasonalYear(2020).addParent(year2020SeasonalGroup);
  }
}
