import { Year2018SeasonalBouncerType, Year2018SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const talklikeaPirateDay2018Group = new Year2018SeasonalGroup({
  name: "Talk like a Pirate Day 2018",
  starts: "2018-00-00T00:00:00-05:00",
  ends: "2018-00-00T00:00:00-05:00",
});

export const cargoShip = new Year2018SeasonalBouncerType("Cargo Ship", 1526)
  .addGroup(talklikeaPirateDay2018Group)
  .addBouncerLandsOn(greenie);
export const treasureShip = new Year2018SeasonalBouncerType("Treasure Ship", 1527)
  .addGroup(talklikeaPirateDay2018Group)
  .addBouncerLandsOn(greenie);
export const ghostShip = new Year2018SeasonalBouncerType("Ghost Ship", 1528)
  .addGroup(talklikeaPirateDay2018Group)
  .addBouncerLandsOn(greenie);
