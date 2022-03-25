import { Year2011SeasonalBouncerType, Year2011SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const doublePointWeekend2011Group = new Year2011SeasonalGroup({
  name: "Double Point Weekend 2011",
  starts: "2011-00-00T00:00:00-05:00",
  ends: "2011-00-00T00:00:00-05:00",
});

export const doublePointWeekend2011 = new Year2011SeasonalBouncerType("Double Point Weekend", 2)
  .addGroup(doublePointWeekend2011Group)
  .addBouncerLandsOn(greenie);
