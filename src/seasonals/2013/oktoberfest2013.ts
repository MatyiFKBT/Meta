import { Year2013SeasonalBouncerType, Year2013SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const oktoberfest2013Group = new Year2013SeasonalGroup({
  name: "Oktoberfest 2013",
  starts: "2013-00-00T00:00:00-05:00",
  ends: "2013-00-00T00:00:00-05:00",
});

export const bierkrug = new Year2013SeasonalBouncerType("Bierkrug", 54)
  .addGroup(oktoberfest2013Group)
  .addBouncerLandsOn(greenie);
export const brezel = new Year2013SeasonalBouncerType("Brezel", 55)
  .addGroup(oktoberfest2013Group)
  .addBouncerLandsOn(greenie);
export const lederhosen = new Year2013SeasonalBouncerType("Lederhosen", 56)
  .addGroup(oktoberfest2013Group)
  .addBouncerLandsOn(greenie);
