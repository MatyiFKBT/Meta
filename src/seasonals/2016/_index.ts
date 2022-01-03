import { TypeTags } from "../../common/type";
import { SeasonalBouncerType, SeasonalGroup, SeasonalScatterType, SeasonalType } from "../_index";

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
  override template(): this {
    super.template();
    return this.seasonalYear(2016);
  }
}
