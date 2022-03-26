import { Year2011SeasonalBouncerType, Year2011SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const texas2011Group = new Year2011SeasonalGroup({
  name: "Texas 2011",
  starts: "2011-00-00T00:00:00-05:00",
  ends: "2011-00-00T00:00:00-05:00",
});

export const texas2011 = new Year2011SeasonalBouncerType("Texas", 8)
  .addGroup(texas2011Group)
  .addBouncerLandsOn(greenie);
