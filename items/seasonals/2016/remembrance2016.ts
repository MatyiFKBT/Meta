import { Year2016SeasonalBouncerType, Year2016SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const remembrance2016Group = new Year2016SeasonalGroup({
  name: "Remembrance [2016]",
  starts: "2016-00-00T00:00:00-05:00",
  ends: "2016-00-00T00:00:00-05:00",
});

export const remembrance = new Year2016SeasonalBouncerType("Remembrance", 722)
  .addGroup(remembrance2016Group)
  .addBouncerLandsOn(greenie);
