import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";
import { TypeTags } from "../../common/type";
import { egg } from "../../evolutions/education";
import { calf, cow, milk, piglet, pig, bacon, chick, chicken } from "../../evolutions/farm";
import { greenie } from "../../normal/misc";

export const nationalWaffleDayGroup = new Year2020SeasonalGroup({
  name: "National Waffle Day",
  starts: "2020-08-24T12:00:00-05:00",
  ends: "2020-09-14T23:59:00-05:00",
});

export const belgianWaffle = new Year2020SeasonalBouncerType("Belgian Waffle", 2583)
  .addGroup(nationalWaffleDayGroup)
  .addBouncerLandsOn(greenie, calf, cow, milk, piglet, pig, bacon);
export const stroopwafel = new Year2020SeasonalBouncerType("Stroopwafel", 2584)
  .addGroup(nationalWaffleDayGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), chick, chicken, egg);
