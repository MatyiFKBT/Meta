import { Year2011SeasonalBouncerType, Year2011SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const gold2011Group = new Year2011SeasonalGroup({
  name: "Gold 2011",
  starts: "2011-00-00T00:00:00-05:00",
  ends: "2011-00-00T00:00:00-05:00",
});

export const gold2011 = new Year2011SeasonalBouncerType("Gold", 1)
  .addGroup(gold2011Group)
  .addBouncerLandsOn(greenie);
