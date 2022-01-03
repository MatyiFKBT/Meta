import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";
import { TypeTags } from "../../common/type";
import { flatLou } from "../../normal/flats";

export const louRoll2020Group = new Year2020SeasonalGroup({
  name: "Lou Roll 2020",
  starts: "2020-03-31T11:11:00-05:00",
  ends: "2020-04-13T23:11:00-05:00",
});

export const louRoll = new Year2020SeasonalBouncerType("Lou Roll", 2411)
  .addGroup(louRoll2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), flatLou);
