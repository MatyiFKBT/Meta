import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const pinPointsGroup = new Year2019SeasonalGroup({
  name: "PinPoints",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const pinPointsPhysical = new Year2019SeasonalBouncerType("PinPoints Physical", 1928)
  .addGroup(pinPointsGroup)
  .addBouncerLandsOn(greenie);
export const pinPointsVirtual = new Year2019SeasonalBouncerType("PinPoints Virtual", 1927)
  .addGroup(pinPointsGroup)
  .addBouncerLandsOn(greenie);
