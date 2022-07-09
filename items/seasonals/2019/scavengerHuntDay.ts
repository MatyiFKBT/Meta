import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const scavengerHuntDayGroup = new Year2019SeasonalGroup({
  name: "Scavenger Hunt Day",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const scavengerHuntDayCompass = new Year2019SeasonalBouncerType(
  "Scavenger Hunt Day Compass",
  1942
)
  .addGroup(scavengerHuntDayGroup)
  .addBouncerLandsOn(greenie);
export const scavengerHuntDayTelescope = new Year2019SeasonalBouncerType(
  "Scavenger Hunt Day Telescope",
  1943
)
  .addGroup(scavengerHuntDayGroup)
  .addBouncerLandsOn(greenie);
export const scavengerHuntDayMagnifyingGlass = new Year2019SeasonalBouncerType(
  "Scavenger Hunt Day Magnifying Glass",
  1944
)
  .addGroup(scavengerHuntDayGroup)
  .addBouncerLandsOn(greenie);
export const scavengerHuntDayShovel = new Year2019SeasonalBouncerType(
  "Scavenger Hunt Day Shovel",
  1945
)
  .addGroup(scavengerHuntDayGroup)
  .addBouncerLandsOn(greenie);
