import { Year2013SeasonalBouncerType, Year2013SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const rose2013Group = new Year2013SeasonalGroup({
  name: "Rose 2013",
  starts: "2013-00-00T00:00:00-05:00",
  ends: "2013-00-00T00:00:00-05:00",
});

export const rose2013 = new Year2013SeasonalBouncerType("Rose 2013", 34)
  .addGroup(rose2013Group)
  .addBouncerLandsOn(greenie);
