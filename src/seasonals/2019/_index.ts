import { Group } from "../../common/group";
import { TypeTags } from "../../common/type";
import {
  SeasonalBouncerType,
  seasonalGroup,
  SeasonalGroup,
  SeasonalScatterType,
  SeasonalType,
} from "../_index";

export const year2019SeasonalGroup = new Group({
  name: "2019 Seasonal Specials",
}).addParent(seasonalGroup);

export class Year2019SeasonalBouncerType extends SeasonalBouncerType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerSeasonal2019);
  }
}

export class Year2019SeasonalScatterType extends SeasonalScatterType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2019SeasonalType extends SeasonalType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2019SeasonalGroup extends SeasonalGroup {
  override template(): this {
    super.template();
    return this.seasonalYear(2019).addParent(year2019SeasonalGroup);
  }
}
