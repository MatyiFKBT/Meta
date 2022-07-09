import { Year2012SeasonalBouncerType, Year2012SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const easter2012Group = new Year2012SeasonalGroup({
  name: "Easter 2012",
  starts: "2012-00-00T00:00:00-05:00",
  ends: "2012-00-00T00:00:00-05:00",
});

export const easter2012 = new Year2012SeasonalBouncerType("Easter", 11)
  .addGroup(easter2012Group)
  .addBouncerLandsOn(greenie);
