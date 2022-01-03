import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";
import { TypeTags } from "../../common/type";
import { eggs, farmer, family, farmerandWife } from "../../evolutions/farm";
import { aquamarine } from "../../normal/jewels";
import { waterMystery, mystery } from "../../normal/mystery";
import { battleAxe, longsword } from "../../normal/weapons";

export const worldSushiDayIngredientsGroup = new Year2020SeasonalGroup({
  name: "World Sushi Day Ingredients",
  starts: "2020-06-18T12:00:00-05:00",
  ends: "2020-07-08T23:59:00-05:00",
});

export const cucumber = new Year2020SeasonalBouncerType("Cucumber", 2512)
  .addGroup(worldSushiDayIngredientsGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    eggs,
    farmer,
    farmerandWife,
    family
  );
export const friedEgg = new Year2020SeasonalBouncerType("Fried Egg", 2513)
  .addGroup(worldSushiDayIngredientsGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    eggs,
    farmer,
    farmerandWife,
    family
  );
export const pufferFish = new Year2020SeasonalBouncerType("Puffer Fish", 2516)
  .addGroup(worldSushiDayIngredientsGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    eggs,
    farmer,
    farmerandWife,
    family
  );
export const rice = new Year2020SeasonalBouncerType("Rice", 2517)
  .addGroup(worldSushiDayIngredientsGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    eggs,
    farmer,
    farmerandWife,
    family
  );
export const roe = new Year2020SeasonalBouncerType("Roe", 2518)
  .addGroup(worldSushiDayIngredientsGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    eggs,
    farmer,
    farmerandWife,
    family
  );
export const salmon = new Year2020SeasonalBouncerType("Salmon", 2519)
  .addGroup(worldSushiDayIngredientsGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    eggs,
    farmer,
    farmerandWife,
    family
  );
export const nori = new Year2020SeasonalBouncerType("Nori", 2514)
  .addGroup(worldSushiDayIngredientsGroup)
  .addBouncerLandsOn(waterMystery, mystery, aquamarine, longsword, battleAxe);
export const prawn = new Year2020SeasonalBouncerType("Prawn", 2515)
  .addGroup(worldSushiDayIngredientsGroup)
  .addBouncerLandsOn(waterMystery, mystery, aquamarine, longsword, battleAxe);
export const tuna = new Year2020SeasonalBouncerType("Tuna", 2520)
  .addGroup(worldSushiDayIngredientsGroup)
  .addBouncerLandsOn(waterMystery, mystery, aquamarine, longsword, battleAxe);
