import { Year2016SeasonalBouncerType, Year2016SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const aprilShowers2016Group = new Year2016SeasonalGroup({
  name: "April Showers [2016]",
  starts: "2016-00-00T00:00:00-05:00",
  ends: "2016-00-00T00:00:00-05:00",
});

export const raindrop = new Year2016SeasonalBouncerType("Raindrop", 496)
  .addGroup(aprilShowers2016Group)
  .addBouncerLandsOn(greenie);
