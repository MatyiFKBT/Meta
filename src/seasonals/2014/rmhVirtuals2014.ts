import { Year2014SeasonalGroup, Year2014SeasonalType } from "./_index";

export const rmhVirtuals2014Group = new Year2014SeasonalGroup({
  name: "RMH Virtuals 2014",
  starts: "2014-00-00T00:00:00-05:00",
  ends: "2014-00-00T00:00:00-05:00",
});

export const rmhVirtual = new Year2014SeasonalType("RMH Virtual", 123)
  .addGroup(rmhVirtuals2014Group)
  .virtual();
