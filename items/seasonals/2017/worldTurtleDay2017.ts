import { Year2017SeasonalBouncerType, Year2017SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const worldTurtleDay2017Group = new Year2017SeasonalGroup({
  name: "World Turtle Day 2017",
  starts: "2017-00-00T00:00:00-05:00",
  ends: "2017-00-00T00:00:00-05:00",
});

export const worldTurtleDay2017 = new Year2017SeasonalBouncerType("World Turtle Day 2017", 1008)
  .addGroup(worldTurtleDay2017Group)
  .addBouncerLandsOn(greenie);
