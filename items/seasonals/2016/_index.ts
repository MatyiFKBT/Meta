import { Group } from "../../../src/items/group";
import { TypeTags } from "../../../src/items/type";
import {
  SeasonalBouncerType,
  seasonalGroup,
  SeasonalGroup,
  SeasonalGroupOptions,
  SeasonalScatterType,
  SeasonalType,
} from "../_index";

export const year2016SeasonalGroup = new Group({
  name: "2016 Seasonal Specials",
}).addParent(seasonalGroup);

export class Year2016SeasonalBouncerType extends SeasonalBouncerType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerSeasonal2016);
  }
}

export class Year2016SeasonalScatterType extends SeasonalScatterType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2016SeasonalType extends SeasonalType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2016SeasonalGroup extends SeasonalGroup {
  constructor(options: SeasonalGroupOptions) {
    super({ year: 2016, ...options });
  }
  override template(): this {
    super.template();
    return this.addParent(year2016SeasonalGroup);
  }
}
