import { Year2017SeasonalBouncerType, Year2017SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const christmas2017Group = new Year2017SeasonalGroup({
  name: "Christmas 2017",
  starts: "2017-00-00T00:00:00-05:00",
  ends: "2017-00-00T00:00:00-05:00",
});

export const christmas2017Sun = new Year2017SeasonalBouncerType("Christmas 2017 Sun", 1198)
  .addGroup(christmas2017Group)
  .addBouncerLandsOn(greenie);
export const christmas2017Snowflake = new Year2017SeasonalBouncerType(
  "Christmas 2017 Snowflake",
  1197
)
  .addGroup(christmas2017Group)
  .addBouncerLandsOn(greenie);
