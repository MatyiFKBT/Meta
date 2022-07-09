import { Year2015SeasonalBouncerType, Year2015SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const texasIndependenceDay2015Group = new Year2015SeasonalGroup({
  name: "Texas Independence Day [2015]",
  starts: "2015-00-00T00:00:00-05:00",
  ends: "2015-00-00T00:00:00-05:00",
});

export const texasIndependence = new Year2015SeasonalBouncerType("Texas Independence", 206)
  .addGroup(texasIndependenceDay2015Group)
  .addBouncerLandsOn(greenie);
