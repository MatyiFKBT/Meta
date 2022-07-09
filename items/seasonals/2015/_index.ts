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

export const year2015SeasonalGroup = new Group({
  name: "2015 Seasonal Specials",
}).addParent(seasonalGroup);

export class Year2015SeasonalBouncerType extends SeasonalBouncerType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerSeasonal2015);
  }
}

export class Year2015SeasonalScatterType extends SeasonalScatterType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2015SeasonalType extends SeasonalType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2015SeasonalGroup extends SeasonalGroup {
  constructor(options: SeasonalGroupOptions) {
    super({ year: 2015, ...options });
  }
  override template(): this {
    super.template();
    return this.addParent(year2015SeasonalGroup);
  }
}
