import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const sheSaidYESGroup = new Year2019SeasonalGroup({
  name: "She Said YES",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const sheSaidYESPhysical = new Year2019SeasonalBouncerType("She Said YES - Physical", 2121)
  .addGroup(sheSaidYESGroup)
  .addBouncerLandsOn(greenie);
export const sheSaidYESVirtual = new Year2019SeasonalBouncerType("She Said YES - Virtual", 2122)
  .addGroup(sheSaidYESGroup)
  .addBouncerLandsOn(greenie);
