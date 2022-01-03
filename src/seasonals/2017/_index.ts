import { TypeTags } from "../../common/type";
import { SeasonalBouncerType, SeasonalGroup, SeasonalScatterType, SeasonalType } from "../_index";

// TODO: Pre-2017 categories

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
  override template(): this {
    super.template();
    return this.seasonalYear(2017);
  }
}
