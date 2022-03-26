import { Year2012SeasonalBouncerType, Year2012SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const endOfTheWorld2012Group = new Year2012SeasonalGroup({
  name: "End of the World 2012",
  starts: "2012-00-00T00:00:00-05:00",
  ends: "2012-00-00T00:00:00-05:00",
});

export const endOfTheWorld2012 = new Year2012SeasonalBouncerType("End of the World", 29)
  .addGroup(endOfTheWorld2012Group)
  .addBouncerLandsOn(greenie);
