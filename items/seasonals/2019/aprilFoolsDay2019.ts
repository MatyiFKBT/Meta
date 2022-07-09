import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const aprilFoolsDay2019Group = new Year2019SeasonalGroup({
  name: "April Fools' Day 2019",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const flatFish = new Year2019SeasonalBouncerType("Flat Fish", 1845)
  .addGroup(aprilFoolsDay2019Group)
  .addBouncerLandsOn(greenie);
export const redHerring = new Year2019SeasonalBouncerType("Red Herring", 1846)
  .addGroup(aprilFoolsDay2019Group)
  .addBouncerLandsOn(greenie);
