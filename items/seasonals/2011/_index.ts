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

export const year2011SeasonalGroup = new Group({
  name: "2011 Seasonal Specials",
}).addParent(seasonalGroup);

export class Year2011SeasonalBouncerType extends SeasonalBouncerType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerSeasonalLegacy);
  }
}

export class Year2011SeasonalScatterType extends SeasonalScatterType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2011SeasonalType extends SeasonalType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2011SeasonalGroup extends SeasonalGroup {
  constructor(options: SeasonalGroupOptions) {
    super({ year: 2011, ...options });
  }
  override template(): this {
    super.template();
    return this.addParent(year2011SeasonalGroup);
  }
}
