import { Year2014SeasonalGroup, Year2014SeasonalType } from "./_index";

export const puzzleHearts2014Group = new Year2014SeasonalGroup({
  name: "RMH Virtuals 2014",
  starts: "2014-00-00T00:00:00-05:00",
  ends: "2014-00-00T00:00:00-05:00",
});

export const puzzleHeart = new Year2014SeasonalType("Puzzle Heart", 102)
  .addGroup(puzzleHearts2014Group)
  .virtual();
