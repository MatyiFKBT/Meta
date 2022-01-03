import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const n8MateGroup = new Year2019SeasonalGroup({
  name: "8 Mate",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const n8Mate = new Year2019SeasonalBouncerType("8 Mate", 2073)
  .addGroup(n8MateGroup)
  .addBouncerLandsOn(greenie);
