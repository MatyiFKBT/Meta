import { Group } from "../../../src/common/group";
import { TypeTags } from "../../../src/common/type";
import {
  SeasonalBouncerType,
  seasonalGroup,
  SeasonalGroup,
  SeasonalGroupOptions,
  SeasonalScatterType,
  SeasonalType,
} from "../_index";

export const year2017SeasonalGroup = new Group({
  name: "2017 Seasonal Specials",
}).addParent(seasonalGroup);

export class Year2017SeasonalBouncerType extends SeasonalBouncerType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerSeasonal2017);
  }
}

export class Year2017SeasonalScatterType extends SeasonalScatterType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2017SeasonalType extends SeasonalType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2017SeasonalGroup extends SeasonalGroup {
  constructor(options: SeasonalGroupOptions) {
    super({ year: 2017, ...options });
  }
  override template(): this {
    super.template();
    return this.addParent(year2017SeasonalGroup);
  }
}
