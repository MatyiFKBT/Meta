import { Year2015SeasonalGroup, Year2015SeasonalType } from "./_index";

export const year2015HeartsGroup = new Year2015SeasonalGroup({
  name: "2015 Hearts",
  starts: "2015-00-00T00:00:00-05:00",
  ends: "2015-00-00T00:00:00-05:00",
});

export const year2015HeartYellow = new Year2015SeasonalType("2015 Heart Yellow", 196)
  .addGroup(year2015HeartsGroup)
  .virtual();
export const year2015HeartGreen = new Year2015SeasonalType("2015 Heart Green", 197)
  .addGroup(year2015HeartsGroup)
  .virtual();
export const year2015HeartOrange = new Year2015SeasonalType("2015 Heart Orange", 198)
  .addGroup(year2015HeartsGroup)
  .virtual();
export const year2015HeartPink = new Year2015SeasonalType("2015 Heart Pink", 199)
  .addGroup(year2015HeartsGroup)
  .virtual();
