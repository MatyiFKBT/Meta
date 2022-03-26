import { Group } from "../../common/group";
import { TypeTags } from "../../common/type";
import {
  SeasonalBouncerType,
  seasonalGroup,
  SeasonalGroup,
  SeasonalGroupOptions,
  SeasonalScatterType,
  SeasonalType,
} from "../_index";

export const year2013SeasonalGroup = new Group({
  name: "2013 Seasonal Specials",
}).addParent(seasonalGroup);

export class Year2013SeasonalBouncerType extends SeasonalBouncerType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerSeasonalLegacy);
  }
}

export class Year2013SeasonalScatterType extends SeasonalScatterType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2013SeasonalType extends SeasonalType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2013SeasonalGroup extends SeasonalGroup {
  constructor(options: SeasonalGroupOptions) {
    super({ year: 2013, ...options });
  }
  override template(): this {
    super.template();
    return this.addParent(year2013SeasonalGroup);
  }
}
