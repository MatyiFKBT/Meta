import { Year2013SeasonalBouncerType, Year2013SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const goldNCoins2013Group = new Year2013SeasonalGroup({
  name: "Goldn Coins 2013",
  starts: "2013-00-00T00:00:00-05:00",
  ends: "2013-00-00T00:00:00-05:00",
});

export const goldNCoins2013 = new Year2013SeasonalBouncerType("Goldn Coins", 31)
  .addGroup(goldNCoins2013Group)
  .addBouncerLandsOn(greenie);
