import { Year2013SeasonalBouncerType, Year2013SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const bacon2013Group = new Year2013SeasonalGroup({
  name: "Bacon 2013",
  starts: "2013-00-00T00:00:00-05:00",
  ends: "2013-00-00T00:00:00-05:00",
});

export const theBacon = new Year2013SeasonalBouncerType("The Bacon", 51)
  .addGroup(bacon2013Group)
  .addBouncerLandsOn(greenie);
