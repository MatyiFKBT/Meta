import { Year2016SeasonalBouncerType, Year2016SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const leapDay2016Group = new Year2016SeasonalGroup({
  name: "Leap Day 2016",
  starts: "2016-00-00T00:00:00-05:00",
  ends: "2016-00-00T00:00:00-05:00",
});

export const leapDay2016 = new Year2016SeasonalBouncerType("Leap Day 2016", 429)
  .addGroup(leapDay2016Group)
  .addBouncerLandsOn(greenie);
