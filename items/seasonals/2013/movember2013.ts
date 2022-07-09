import { Year2013SeasonalGroup, Year2013SeasonalType } from "./_index";

export const movember2013Group = new Year2013SeasonalGroup({
  name: "Movember 2013",
  starts: "2013-00-00T00:00:00-05:00",
  ends: "2013-00-00T00:00:00-05:00",
});

export const movember = new Year2013SeasonalType("Movember", 76)
  .addGroup(movember2013Group)
  .virtual();
