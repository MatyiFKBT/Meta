import { Year2012SeasonalBouncerType, Year2012SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const texas2012Group = new Year2012SeasonalGroup({
  name: "Texas 2012",
  starts: "2012-00-00T00:00:00-05:00",
  ends: "2012-00-00T00:00:00-05:00",
});

export const texas2012 = new Year2012SeasonalBouncerType("Texas", 8)
  .addGroup(texas2012Group)
  .addBouncerLandsOn(greenie);
