import { Year2018SeasonalGroup, Year2018SeasonalType } from "./_index";

export const earthDay2018Group = new Year2018SeasonalGroup({
  name: "Earth Day 2018",
  starts: "2018-00-00T00:00:00-05:00",
  ends: "2018-00-00T00:00:00-05:00",
});

export const earthDay2018Tree = new Year2018SeasonalType("Earth Day 2018 Tree", 1289)
  .addGroup(earthDay2018Group)
  .virtual();
export const earthDay2018Seed = new Year2018SeasonalType("Earth Day 2018 Seed", 1290)
  .addGroup(earthDay2018Group)
  .virtual();
export const earthDay2018Seedling = new Year2018SeasonalType("Earth Day 2018 Seedling", 1291)
  .addGroup(earthDay2018Group)
  .virtual();
