import { Year2016SeasonalBouncerType, Year2016SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const getOutside2016Group = new Year2016SeasonalGroup({
  name: "Get Outside 2016",
  starts: "2016-00-00T00:00:00-05:00",
  ends: "2016-00-00T00:00:00-05:00",
});

export const getOutside2016 = new Year2016SeasonalBouncerType("Get Outside 2016", 568)
  .addGroup(getOutside2016Group)
  .addBouncerLandsOn(greenie);
