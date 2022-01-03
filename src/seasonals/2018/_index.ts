import { Group } from "../../common/group";
import { TypeTags } from "../../common/type";
import {
  SeasonalBouncerType,
  seasonalGroup,
  SeasonalGroup,
  SeasonalScatterType,
  SeasonalType,
} from "../_index";

export const year2018SeasonalGroup = new Group({
  name: "2018 Seasonal Specials",
}).addParent(seasonalGroup);

export class Year2018SeasonalBouncerType extends SeasonalBouncerType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerSeasonal2018);
  }
}

export class Year2018SeasonalScatterType extends SeasonalScatterType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2018SeasonalType extends SeasonalType {
  override template(): this {
    super.template();
    return this;
  }
}

export class Year2018SeasonalGroup extends SeasonalGroup {
  override template(): this {
    super.template();
    return this.seasonalYear(2018).addParent(year2018SeasonalGroup);
  }
}
