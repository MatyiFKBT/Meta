import { Year2018SeasonalBouncerType, Year2018SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const flatDaythe13thPartIIGroup = new Year2018SeasonalGroup({
  name: "Flat Day the 13th Part II",
  starts: "2018-00-00T00:00:00-05:00",
  ends: "2018-00-00T00:00:00-05:00",
});

export const meanie = new Year2018SeasonalBouncerType("Meanie", 1320)
  .addGroup(flatDaythe13thPartIIGroup)
  .addBouncerLandsOn(greenie);
export const maskedFlatMatt = new Year2018SeasonalBouncerType("Masked Flat Matt", 1319)
  .addGroup(flatDaythe13thPartIIGroup)
  .addBouncerLandsOn(greenie);
