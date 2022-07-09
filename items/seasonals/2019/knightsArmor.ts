import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const knightsArmorGroup = new Year2019SeasonalGroup({
  name: "Knight's Armor",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const knightsHelmet = new Year2019SeasonalBouncerType("Knight's Helmet", 2139)
  .setIcon("knight'shelmet2019")
  .addGroup(knightsArmorGroup)
  .addBouncerLandsOn(greenie);
export const knightsRightGauntlet = new Year2019SeasonalBouncerType("Knight's Right Gauntlet", 2141)
  .setIcon("knight'srightgauntlet2019")
  .addGroup(knightsArmorGroup)
  .addBouncerLandsOn(greenie);
export const knightsLeftGauntlet = new Year2019SeasonalBouncerType("Knight's Left Gauntlet", 2140)
  .setIcon("knight'sleftgauntlet2019")
  .addGroup(knightsArmorGroup)
  .addBouncerLandsOn(greenie);
export const knightsBreastplate = new Year2019SeasonalBouncerType("Knight's Breastplate", 2142)
  .setIcon("knight'sbreastplate2019")
  .addGroup(knightsArmorGroup)
  .addBouncerLandsOn(greenie);
export const knightsLeftBoot = new Year2019SeasonalBouncerType("Knight's Left Boot", 2143)
  .setIcon("knight'sleftboot2019")
  .addGroup(knightsArmorGroup)
  .addBouncerLandsOn(greenie);
export const knightsRightBoot = new Year2019SeasonalBouncerType("Knight's Right Boot", 2144)
  .setIcon("knight'srightboot2019")
  .addGroup(knightsArmorGroup)
  .addBouncerLandsOn(greenie);
