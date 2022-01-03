import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const zeesterEggsGroup = new Year2019SeasonalGroup({
  name: "Zeester Eggs",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const whiteEgg = new Year2019SeasonalBouncerType("White Egg", 1890)
  .addGroup(zeesterEggsGroup)
  .addBouncerLandsOn(greenie);
export const blueEgg = new Year2019SeasonalBouncerType("Blue Egg", 1891)
  .addGroup(zeesterEggsGroup)
  .addBouncerLandsOn(greenie);
export const redEgg = new Year2019SeasonalBouncerType("Red Egg", 1892)
  .addGroup(zeesterEggsGroup)
  .addBouncerLandsOn(greenie);
export const yellowEgg = new Year2019SeasonalBouncerType("Yellow Egg", 1893)
  .addGroup(zeesterEggsGroup)
  .addBouncerLandsOn(greenie);
export const hatchedWhiteEgg = new Year2019SeasonalBouncerType("Hatched White Egg", 1894)
  .addGroup(zeesterEggsGroup)
  .addBouncerLandsOn(greenie);
export const hatchedBlueEgg = new Year2019SeasonalBouncerType("Hatched Blue Egg", 1895)
  .addGroup(zeesterEggsGroup)
  .addBouncerLandsOn(greenie);
export const hatchedRedEgg = new Year2019SeasonalBouncerType("Hatched Red Egg", 1896)
  .addGroup(zeesterEggsGroup)
  .addBouncerLandsOn(greenie);
export const hatchedYellowEgg = new Year2019SeasonalBouncerType("Hatched Yellow Egg", 1897)
  .addGroup(zeesterEggsGroup)
  .addBouncerLandsOn(greenie);
