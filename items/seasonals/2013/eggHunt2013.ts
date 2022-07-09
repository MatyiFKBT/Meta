import { Year2013SeasonalBouncerType, Year2013SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const eggHunt2013Group = new Year2013SeasonalGroup({
  name: "Egg Hunt 2013",
  starts: "2013-00-00T00:00:00-05:00",
  ends: "2013-00-00T00:00:00-05:00",
});

export const eggHunt = new Year2013SeasonalBouncerType("Egg Hunt", 37)
  .addGroup(eggHunt2013Group)
  .addBouncerLandsOn(greenie);
