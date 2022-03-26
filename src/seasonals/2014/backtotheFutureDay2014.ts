import { Year2014SeasonalBouncerType, Year2014SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const more2014Group = new Year2014SeasonalGroup({
  name: "More 2014 Specials",
  starts: "2014-00-00T00:00:00-05:00",
  ends: "2014-00-00T00:00:00-05:00",
});

export const icedOver = new Year2014SeasonalBouncerType("Iced Over", 186)
  .addGroup(more2014Group)
  .addBouncerLandsOn(greenie);
export const moreLove = new Year2014SeasonalBouncerType("More Love", 187)
  .addGroup(more2014Group)
  .addBouncerLandsOn(greenie);
export const moreKick = new Year2014SeasonalBouncerType("More Kick", 188)
  .addGroup(more2014Group)
  .addBouncerLandsOn(greenie);
