import { Year2016SeasonalGroup, Year2016SeasonalType } from "./_index";

export const bcaPins2016Group = new Year2016SeasonalGroup({
  name: "BCA Pins 2016",
  starts: "2016-08-12T00:00:00-05:00",
  ends: "2016-12-31T00:00:00-05:00",
});

export const bcaPin = new Year2016SeasonalType("BCA Pin", 687).addGroup(bcaPins2016Group).virtual();
