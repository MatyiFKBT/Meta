import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const christmas2019Group = new Year2019SeasonalGroup({
  name: "Christmas 2019",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const kringlesCowboyHat = new Year2019SeasonalBouncerType("Kringle's Cowboy Hat", 2309)
  .addGroup(christmas2019Group)
  .addBouncerLandsOn(greenie);
export const loneStarTreeTopper = new Year2019SeasonalBouncerType("Lone Star Tree Topper", 2310)
  .addGroup(christmas2019Group)
  .addBouncerLandsOn(greenie);
export const silverSpurs = new Year2019SeasonalBouncerType("Silver Spurs", 2311)
  .addGroup(christmas2019Group)
  .addBouncerLandsOn(greenie);
export const christmasCactus = new Year2019SeasonalBouncerType("Christmas Cactus", 2312)
  .addGroup(christmas2019Group)
  .addBouncerLandsOn(greenie);
export const bootScootinStocking = new Year2019SeasonalBouncerType("Boot Scootin' Stocking", 2313)
  .addGroup(christmas2019Group)
  .addBouncerLandsOn(greenie);
export const stateShapedOrnament = new Year2019SeasonalBouncerType("State Shaped Ornament", 2314)
  .addGroup(christmas2019Group)
  .addBouncerLandsOn(greenie);
export const canoFakeSnow = new Year2019SeasonalBouncerType("Can o' Fake Snow", 2315)
  .addGroup(christmas2019Group)
  .addBouncerLandsOn(greenie);
export const festiveFootball = new Year2019SeasonalBouncerType("Festive Football", 2316)
  .addGroup(christmas2019Group)
  .addBouncerLandsOn(greenie);
export const gingerbreadBarn = new Year2019SeasonalBouncerType("Gingerbread Barn", 2317)
  .addGroup(christmas2019Group)
  .addBouncerLandsOn(greenie);
export const bluebonnetMistletoe = new Year2019SeasonalBouncerType("Bluebonnet Mistletoe", 2318)
  .addGroup(christmas2019Group)
  .addBouncerLandsOn(greenie);
export const santasSaddle = new Year2019SeasonalBouncerType("Santa's Saddle", 2319)
  .addGroup(christmas2019Group)
  .addBouncerLandsOn(greenie);
export const nacogdochesNutcracker = new Year2019SeasonalBouncerType("Nacogdoches Nutcracker", 2320)
  .addGroup(christmas2019Group)
  .addBouncerLandsOn(greenie);
