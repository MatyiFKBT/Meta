// import { Group } from "../../src/items/group";
// import { BouncerType, ScatterType, Type, TypeTags } from "../../src/items/type";

import { homeGroup } from "../../base";
import { Group } from "../../../src/items/group";
import { TypeTags } from "../../../src/items/type";
import {
  SeasonalBouncerType,
  SeasonalPOBType,
  SeasonalGroup,
  SeasonalScatterType,
  SeasonalType,
  seasonalGroup,
  SeasonalGroupOptions,
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
  constructor(options: SeasonalGroupOptions) {
    super({ year: 2022, ...options });
  }
  override template(): this {
    super.template();
    return this.addParent(year2022SeasonalGroup);
  }
}
