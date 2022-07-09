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

export const year2012SeasonalGroup = new Group({
  name: "2012 Seasonal Specials",
}).addParent(seasonalGroup);

export class Year2012SeasonalBouncerType extends SeasonalBouncerType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerSeasonalLegacy);
  }
}

export class Year2012SeasonalScatterType extends SeasonalScatterType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2012SeasonalType extends SeasonalType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2012SeasonalGroup extends SeasonalGroup {
  constructor(options: SeasonalGroupOptions) {
    super({ year: 2012, ...options });
  }
  override template(): this {
    super.template();
    return this.addParent(year2012SeasonalGroup);
  }
}
