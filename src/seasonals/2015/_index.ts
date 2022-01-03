import { TypeTags } from "../../common/type";
import { SeasonalBouncerType, SeasonalGroup, SeasonalScatterType, SeasonalType } from "../_index";

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
  override template(): this {
    super.template();
    return this.seasonalYear(2015);
  }
}
