import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const saintPatricksDay2019Group = new Year2019SeasonalGroup({
  name: "Saint Patrick's Day 2019",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const potoGold = new Year2019SeasonalBouncerType("Pot o' Gold", 1825)
  .addGroup(saintPatricksDay2019Group)
  .addBouncerLandsOn(greenie);
export const wallaWeeFella = new Year2019SeasonalBouncerType("WallaWee Fella", 1826)
  .addGroup(saintPatricksDay2019Group)
  .addBouncerLandsOn(greenie);
