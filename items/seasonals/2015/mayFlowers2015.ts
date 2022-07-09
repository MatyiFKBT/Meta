import { Year2015SeasonalBouncerType, Year2015SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const mayFlowers2015Group = new Year2015SeasonalGroup({
  name: "May Flowers [2015]",
  starts: "2015-00-00T00:00:00-05:00",
  ends: "2015-00-00T00:00:00-05:00",
});

export const mayFlowers = new Year2015SeasonalBouncerType("May Flowers", 234)
  .addGroup(mayFlowers2015Group)
  .addBouncerLandsOn(greenie);
