import { Year2013SeasonalGroup, Year2013SeasonalType } from "./_index";

export const movember2013Group = new Year2013SeasonalGroup({
  name: "RMH Virtuals 2014",
  starts: "2014-00-00T00:00:00-05:00",
  ends: "2014-00-00T00:00:00-05:00",
});

export const movember = new Year2013SeasonalType("Movember", 76)
  .addGroup(movember2013Group)
  .virtual();
