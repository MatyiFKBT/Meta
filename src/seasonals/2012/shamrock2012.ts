import { Year2012SeasonalBouncerType, Year2012SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const shamrock2012Group = new Year2012SeasonalGroup({
  name: "Shamrock 2012",
  starts: "2012-00-00T00:00:00-05:00",
  ends: "2012-00-00T00:00:00-05:00",
});

export const shamrock2012 = new Year2012SeasonalBouncerType("Shamrock 2012", 9)
  .addGroup(shamrock2012Group)
  .addBouncerLandsOn(greenie);
