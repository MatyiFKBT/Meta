import { Year2017SeasonalBouncerType, Year2017SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const groundhogDay2017Group = new Year2017SeasonalGroup({
  name: "Groundhog Day 2017",
  starts: "2017-00-00T00:00:00-05:00",
  ends: "2017-00-00T00:00:00-05:00",
});

export const groundhogDay2017 = new Year2017SeasonalBouncerType("Groundhog Day 2017", 821)
  .addGroup(groundhogDay2017Group)
  .addBouncerLandsOn(greenie);
