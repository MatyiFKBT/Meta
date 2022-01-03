import { Year2018SeasonalBouncerType, Year2018SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const piDay2018Group = new Year2018SeasonalGroup({
  name: "Pi Day 2018",
  starts: "2018-00-00T00:00:00-05:00",
  ends: "2018-00-00T00:00:00-05:00",
});

export const piDay2018 = new Year2018SeasonalBouncerType("Pi Day 2018", 1259)
  .addGroup(piDay2018Group)
  .addBouncerLandsOn(greenie);
