// import { Group } from "../common/group";
// import { BouncerType, ScatterType, Type, TypeTags } from "../common/type";

import { homeGroup } from "../../base";
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

export const year2022SeasonalGroup = new Group({
  name: "2022 Seasonal Specials",
})
  .addParent(seasonalGroup)
  .addParent(homeGroup);

export class Year2022SeasonalBouncerType extends SeasonalBouncerType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerSeasonal2022);
  }
}

export class Year2022SeasonalPOBType extends SeasonalPOBType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerSeasonal2022);
  }
}

export class Year2022SeasonalScatterType extends SeasonalScatterType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2022SeasonalType extends SeasonalType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2022SeasonalGroup extends SeasonalGroup {
  override template(): this {
    super.template();
    return this.seasonalYear(2022).addParent(year2022SeasonalGroup);
  }
}
