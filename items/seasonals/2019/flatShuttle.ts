import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const flatShuttleGroup = new Year2019SeasonalGroup({
  name: "Flat Shuttle",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const flatShuttle = new Year2019SeasonalBouncerType("Flat Shuttle", 2068)
  .addGroup(flatShuttleGroup)
  .addBouncerLandsOn(greenie);
export const flatFlybyRob = new Year2019SeasonalBouncerType("Flat Flyby Rob", 2069)
  .addGroup(flatShuttleGroup)
  .addBouncerLandsOn(greenie);
export const flatFlybyMatt = new Year2019SeasonalBouncerType("Flat Flyby Matt", 2070)
  .addGroup(flatShuttleGroup)
  .addBouncerLandsOn(greenie);
export const flatFlybyLou = new Year2019SeasonalBouncerType("Flat Flyby Lou", 2071)
  .addGroup(flatShuttleGroup)
  .addBouncerLandsOn(greenie);
export const flatFlybyHammock = new Year2019SeasonalBouncerType("Flat Flyby Hammock", 2072)
  .addGroup(flatShuttleGroup)
  .addBouncerLandsOn(greenie);
