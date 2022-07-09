import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const bensonGroup = new Year2019SeasonalGroup({
  name: "Benson",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const bouncingBenson = new Year2019SeasonalBouncerType("Bouncing Benson", 1847)
  .addGroup(bensonGroup)
  .addBouncerLandsOn(greenie);
export const floatingBenson = new Year2019SeasonalBouncerType("Floating Benson", 1848)
  .addGroup(bensonGroup)
  .addBouncerLandsOn(greenie);
