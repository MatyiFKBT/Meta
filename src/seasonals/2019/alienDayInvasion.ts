import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const alienDayInvasionGroup = new Year2019SeasonalGroup({
  name: "Alien Day Invasion",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const uFO = new Year2019SeasonalBouncerType("UFO", 1917)
  .addGroup(alienDayInvasionGroup)
  .addBouncerLandsOn(greenie);
export const uFOVirtual = new Year2019SeasonalBouncerType("UFO Virtual", 1918)
  .addGroup(alienDayInvasionGroup)
  .addBouncerLandsOn(greenie);
export const alienEgg = new Year2019SeasonalBouncerType("Alien Egg", 1915)
  .addGroup(alienDayInvasionGroup)
  .addBouncerLandsOn(greenie);
export const alienPotato = new Year2019SeasonalBouncerType("Alien Potato", 1916)
  .addGroup(alienDayInvasionGroup)
  .addBouncerLandsOn(greenie);
