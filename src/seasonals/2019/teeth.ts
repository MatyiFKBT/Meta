import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const teethGroup = new Year2019SeasonalGroup({
  name: "Teeth",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const whiteTooth = new Year2019SeasonalBouncerType("White Tooth", 2124)
  .setIcon("whitetooth2019")
  .addGroup(teethGroup)
  .addBouncerLandsOn(greenie);
export const goldTooth = new Year2019SeasonalBouncerType("Gold Tooth", 2125)
  .setIcon("goldtooth2019")
  .addGroup(teethGroup)
  .addBouncerLandsOn(greenie);
export const diamondTooth = new Year2019SeasonalBouncerType("Diamond Tooth", 2126)
  .setIcon("diamondtooth2019")
  .addGroup(teethGroup)
  .addBouncerLandsOn(greenie);
