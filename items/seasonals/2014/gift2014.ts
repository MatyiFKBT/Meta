import { Year2014SeasonalBouncerType, Year2014SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const gift2014Group = new Year2014SeasonalGroup({
  name: "2014 Gifts",
  starts: "2014-00-00T00:00:00-05:00",
  ends: "2014-00-00T00:00:00-05:00",
});

export const gift2014 = new Year2014SeasonalBouncerType("Gift 2014", 181)
  .addGroup(gift2014Group)
  .addBouncerLandsOn(greenie);
export const redGift = new Year2014SeasonalBouncerType("Red Gift", 189)
  .addGroup(gift2014Group)
  .addBouncerLandsOn(greenie);
