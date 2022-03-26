import { Year2014SeasonalBouncerType, Year2014SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const australiaDay2014Group = new Year2014SeasonalGroup({
  name: "Australia Day 2014",
  starts: "2014-00-00T00:00:00-05:00",
  ends: "2014-00-00T00:00:00-05:00",
});

export const australiaDay = new Year2014SeasonalBouncerType("Australia Day", 94)
  .addGroup(australiaDay2014Group)
  .addBouncerLandsOn(greenie);
