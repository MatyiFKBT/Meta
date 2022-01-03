import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const ninjaBreadMen2019Group = new Year2019SeasonalGroup({
  name: "Ninja-Bread Men 2019",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const shurikenNinjaBreadMan = new Year2019SeasonalBouncerType(
  "Shuriken Ninja-Bread Man",
  2259
)
  .addGroup(ninjaBreadMen2019Group)
  .addBouncerLandsOn(greenie);
export const saiNinjaBreadMan = new Year2019SeasonalBouncerType("Sai Ninja-Bread Man", 2258)
  .addGroup(ninjaBreadMen2019Group)
  .addBouncerLandsOn(greenie);
export const nunchuckNinjaBreadMan = new Year2019SeasonalBouncerType(
  "Nunchuck Ninja-Bread Man",
  2257
)
  .addGroup(ninjaBreadMen2019Group)
  .addBouncerLandsOn(greenie);
export const katanaNinjaBreadMan = new Year2019SeasonalBouncerType("Katana Ninja-Bread Man", 2256)
  .addGroup(ninjaBreadMen2019Group)
  .addBouncerLandsOn(greenie);
