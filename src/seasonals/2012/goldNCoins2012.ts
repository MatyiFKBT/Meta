import { Year2012SeasonalBouncerType, Year2012SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const goldNCoins2012Group = new Year2012SeasonalGroup({
  name: "Goldn Coins 2012",
  starts: "2012-00-00T00:00:00-05:00",
  ends: "2012-00-00T00:00:00-05:00",
});

export const goldNCoins2012 = new Year2012SeasonalBouncerType("Goldn Coins", 31)
  .addGroup(goldNCoins2012Group)
  .addBouncerLandsOn(greenie);
