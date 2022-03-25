import { Year2014SeasonalBouncerType, Year2014SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const guyFawkesDay2014Group = new Year2014SeasonalGroup({
  name: "Guy Fawkes Day 2014",
  starts: "2014-00-00T00:00:00-05:00",
  ends: "2014-00-00T00:00:00-05:00",
});

export const guyFawkesDay = new Year2014SeasonalBouncerType("Guy Fawkes Day", 166)
  .addGroup(guyFawkesDay2014Group)
  .addBouncerLandsOn(greenie);
