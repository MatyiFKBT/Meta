import { Year2017SeasonalBouncerType, Year2017SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const flatDayThe13th2017Group = new Year2017SeasonalGroup({
  name: "Flat Day the 13th 2017",
  starts: "2017-00-00T00:00:00-05:00",
  ends: "2017-00-00T00:00:00-05:00",
});

export const flatDayThe13th = new Year2017SeasonalBouncerType("Flat Day The 13th", 1144)
  .addGroup(flatDayThe13th2017Group)
  .addBouncerLandsOn(greenie);
