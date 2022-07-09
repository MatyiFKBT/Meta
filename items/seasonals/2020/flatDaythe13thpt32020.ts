import { greenie } from "../../normal/misc";
import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";

export const flatDaythe13thpt32020Group = new Year2020SeasonalGroup({
  name: "Flat Day the 13th pt.3 2020",
  starts: "2020-03-12T13:00:00-05:00",
  ends: "2020-03-17T13:00:00-05:00",
});

export const tHERETURN = new Year2020SeasonalBouncerType("THE RETURN", 2393)
  .addGroup(flatDaythe13thpt32020Group)
  .addBouncerLandsOn(greenie);
