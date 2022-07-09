import { Year2012SeasonalBouncerType, Year2012SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const candyCorn2012Group = new Year2012SeasonalGroup({
  name: "Candy Corn 2012",
  starts: "2012-00-00T00:00:00-05:00",
  ends: "2012-00-00T00:00:00-05:00",
});

export const candyCorn2012 = new Year2012SeasonalBouncerType("Candy Corn 2012", 27)
  .addGroup(candyCorn2012Group)
  .addBouncerLandsOn(greenie);
