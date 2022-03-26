import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";
import { TypeTags } from "../../common/type";
import { greenie } from "../../normal/misc";
import {
  airMystery,
  electricMystery,
  mystery,
  fireMystery,
  earthMystery,
  waterMystery,
  iceMystery,
} from "../../normal/mystery";
import { flatRob, flatMatt, flatLou, flatHammock } from "../../normal/flats";

export const deathlyDeeZertGroup = new Year2020SeasonalGroup({
  name: "Deathly DeeZert",
  starts: "2020-10-27T12:00:00-05:00",
  ends: "2020-11-15T23:59:00-05:00",
});

export const creepyCauldron = new Year2020SeasonalBouncerType("Creepy Cauldron", 2630)
  .addGroup(deathlyDeeZertGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    airMystery,
    electricMystery,
    flatRob,
    flatMatt,
    flatLou,
    flatHammock
  );
export const pumpkinPail = new Year2020SeasonalBouncerType("Pumpkin Pail", 2635)
  .addGroup(deathlyDeeZertGroup)
  .addBouncerLandsOn(greenie, mystery, fireMystery, earthMystery, waterMystery, iceMystery);
export const mummyMacaron = new Year2020SeasonalBouncerType("Mummy Macaron", 2631)
  .addGroup(deathlyDeeZertGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    airMystery,
    electricMystery,
    flatRob,
    flatMatt,
    flatLou,
    flatHammock
  );
export const pumpkinPop = new Year2020SeasonalBouncerType("Pumpkin Pop", 2632)
  .addGroup(deathlyDeeZertGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    airMystery,
    electricMystery,
    flatRob,
    flatMatt,
    flatLou,
    flatHammock
  );
export const bloodSucker = new Year2020SeasonalBouncerType("Blood Sucker", 2633)
  .addGroup(deathlyDeeZertGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    airMystery,
    electricMystery,
    flatRob,
    flatMatt,
    flatLou,
    flatHammock
  );
export const rock = new Year2020SeasonalBouncerType("Rock", 2634)
  .addGroup(deathlyDeeZertGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    airMystery,
    electricMystery,
    flatRob,
    flatMatt,
    flatLou,
    flatHammock
  );
export const bonbonBat = new Year2020SeasonalBouncerType("Bonbon Bat", 2636)
  .addGroup(deathlyDeeZertGroup)
  .addBouncerLandsOn(greenie, mystery, fireMystery, earthMystery, waterMystery, iceMystery);
export const frappenstein = new Year2020SeasonalBouncerType("Frappenstein", 2637)
  .addGroup(deathlyDeeZertGroup)
  .addBouncerLandsOn(greenie, mystery, fireMystery, earthMystery, waterMystery, iceMystery);
export const booBrownie = new Year2020SeasonalBouncerType("Boo Brownie", 2638)
  .addGroup(deathlyDeeZertGroup)
  .addBouncerLandsOn(greenie, mystery, fireMystery, earthMystery, waterMystery, iceMystery);
export const toothbrush = new Year2020SeasonalBouncerType("Toothbrush", 2639)
  .addGroup(deathlyDeeZertGroup)
  .addBouncerLandsOn(greenie, mystery, fireMystery, earthMystery, waterMystery, iceMystery);
