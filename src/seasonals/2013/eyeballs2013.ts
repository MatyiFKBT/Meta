import { Year2013SeasonalBouncerType, Year2013SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const eyeballs2013Group = new Year2013SeasonalGroup({
  name: "Eyeballs 2013",
  starts: "2013-00-00T00:00:00-05:00",
  ends: "2013-00-00T00:00:00-05:00",
});

export const eyeball = new Year2013SeasonalBouncerType("Eyeball", 75)
  .addGroup(eyeballs2013Group)
  .addBouncerLandsOn(greenie);
