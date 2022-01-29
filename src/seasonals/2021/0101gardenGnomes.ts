import {
  Year2021SeasonalPOBType,
  Year2021SeasonalScatterType,
  Year2021SeasonalGroup,
} from "./_index";
import { TypeTags } from "../../common/type";
import { calf, cow, milk, bacon, pig, piglet } from "../../evolutions/farm";
import { bagofCoins, coin, treasureChest } from "../../evolutions/reseller";
import { treehouse, skyland } from "../../normal/destination";
import { greenie, premium } from "../../normal/misc";
import { iceMystery, airMystery, fireMystery } from "../../normal/mystery";
import { crossbow } from "../../normal/weapons";
import {
  poiDrinkDepot,
  poiEntertainment,
  poiPlayPark,
  poiSports,
  poiTransportation,
} from "../../normal/places";
import { onyx, pinkDiamond } from "../../normal/jewels";
import { flatLou } from "../../normal/flats";
import { firstWheel, muscleCar, pennyFarthingBike } from "../../evolutions/education";
import { joystickVirtual, urbanFit } from "../../normal/gaming";
import { bouncersGroup } from "../../bouncers/_index";

export const gardenGnomesGroup = new Year2021SeasonalGroup({
  name: "Garden Gnomes",
  starts: "2021-01-01T00:00:00-06:00",
  ends: "3000-12-31T23:59:00-06:00",
}).addParent(bouncersGroup);

export const gardenGnome = new Year2021SeasonalPOBType("Garden Gnome", 2775)
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), greenie);
export const iceHockeyGardenGnome = new Year2021SeasonalPOBType("Ice Hockey Garden Gnome", 2776)
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    iceMystery,
    treehouse,
    skyland
  );
export const archeryGardenGnome = new Year2021SeasonalPOBType("Archery Garden Gnome", 2777)
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    crossbow,
    treehouse,
    skyland
  );
export const basketballGardenGnome = new Year2021SeasonalPOBType("Basketball Garden Gnome", 2778)
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    airMystery,
    treehouse,
    skyland
  );
export const runningGardenGnome = new Year2021SeasonalPOBType("Running Garden Gnome", 2779)
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    urbanFit,
    treehouse,
    skyland
  );
export const aussieExplorerGardenGnome = new Year2021SeasonalPOBType("Aussie Explorer Garden Gnome")
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    type => type.hasTags(TypeTags.TypeReseller) && !type.hasTags(TypeTags.Scatter),
    treehouse,
    skyland
  );
export const goldMinerGardenGnome = new Year2021SeasonalPOBType("Gold Miner Garden Gnome")
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    type => type.hasTags(TypeTags.TypeReseller) && !type.hasTags(TypeTags.Scatter),
    treehouse,
    skyland,
    coin,
    bagofCoins,
    treasureChest
  );
export const queensGuardsmanGardenGnome = new Year2021SeasonalPOBType(
  "Queen's Guardsman Garden Gnome"
)
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    type => type.hasTags(TypeTags.TypeReseller) && !type.hasTags(TypeTags.Scatter),
    treehouse,
    skyland
  );
export const astronautGardenGnome = new Year2021SeasonalPOBType("Astronaut Garden Gnome", 2894)
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    type => type.hasTags(TypeTags.TypeReseller) && !type.hasTags(TypeTags.Scatter),
    treehouse,
    skyland
  );
export const soccerGardenGnome = new Year2021SeasonalPOBType("Soccer Garden Gnome")
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), greenie, onyx, treehouse, skyland);
export const skateboardingGardenGnome = new Year2021SeasonalPOBType("Skateboarding Garden Gnome")
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    poiPlayPark,
    treehouse,
    skyland
  );
export const baseballGardenGnome = new Year2021SeasonalPOBType("Baseball Garden Gnome")
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    poiSports,
    treehouse,
    skyland
  );
export const awardShowGardenGnome = new Year2021SeasonalPOBType("Award Show Garden Gnome", 3090)
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    premium,
    poiEntertainment,
    poiDrinkDepot,
    treehouse,
    skyland
  );
export const cricketGardenGnome = new Year2021SeasonalPOBType("Cricket Garden Gnome")
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    calf,
    cow,
    milk,
    treehouse,
    skyland
  );
export const footballGardenGnome = new Year2021SeasonalPOBType("Football Garden Gnome")
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    bacon,
    pig,
    piglet,
    treehouse,
    skyland
  );
export const cyclingGardenGnome = new Year2021SeasonalPOBType("Cycling Garden Gnome")
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    pinkDiamond,
    flatLou,
    firstWheel,
    pennyFarthingBike,
    muscleCar,
    poiTransportation,
    treehouse,
    skyland
  );
export const eSportsGardenGnome = new Year2021SeasonalPOBType("eSports Garden Gnome")
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    joystickVirtual,
    treehouse,
    skyland
  );
export const skiingGardenGnome = new Year2021SeasonalPOBType("Skiing Garden Gnome")
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    type => type.hasTags(TypeTags.TypeSeasonal),
    treehouse,
    skyland
  );
export const stoneGardenGnome = new Year2021SeasonalPOBType("Stone Garden Gnome", 3429)
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), greenie);
export const newYearsEveGardenGnome = new Year2021SeasonalPOBType(
  "New Years Eve Garden Gnome",
  3427
)
  .addGroup(gardenGnomesGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    greenie,
    fireMystery,
    treehouse,
    skyland
  );
export const gnomeHockeyHelmet = new Year2021SeasonalScatterType("Gnome Hockey Helmet", 2802)
  .addGroup(gardenGnomesGroup)
  .standalone();
export const gnomeArcheryHood = new Year2021SeasonalScatterType("Gnome Archery Hood", 2803)
  .addGroup(gardenGnomesGroup)
  .standalone();
export const gnomeNogginNet = new Year2021SeasonalScatterType("Gnome Noggin Net", 2804)
  .addGroup(gardenGnomesGroup)
  .standalone();
export const gnomeMinerHat = new Year2021SeasonalScatterType("Gnome Miner Hat")
  .addGroup(gardenGnomesGroup)
  .standalone();
export const gnomeExplorerHat = new Year2021SeasonalScatterType("Gnome Explorer Hat")
  .addGroup(gardenGnomesGroup)
  .standalone();
export const gnomeBearSkinHat = new Year2021SeasonalScatterType("Gnome Bear Skin Hat")
  .addGroup(gardenGnomesGroup)
  .standalone();
export const gnomeAstronautHelmet = new Year2021SeasonalScatterType("Gnome Astronaut Helmet", 2895)
  .addGroup(gardenGnomesGroup)
  .standalone();
export const gnomeHeadphones = new Year2021SeasonalScatterType("Gnome Headphones", 2805)
  .addGroup(gardenGnomesGroup)
  .standalone();
export const gnomeHeaderHat = new Year2021SeasonalScatterType("Gnome Header Hat", 2806)
  .addGroup(gardenGnomesGroup)
  .standalone();
export const gnomeHeelflipHat = new Year2021SeasonalScatterType("Gnome Heelflip Hat", 2807)
  .addGroup(gardenGnomesGroup)
  .standalone();
export const gnomeCatchersCap = new Year2021SeasonalScatterType("Gnome Catcher's Cap", 2808)
  .addGroup(gardenGnomesGroup)
  .standalone();
export const n10thMunzeeBirthdayHat = new Year2021SeasonalScatterType(
  "10th Munzee Birthday Hat",
  3091
)
  .addGroup(gardenGnomesGroup)
  .standalone();
export const gnomeClubCap = new Year2021SeasonalScatterType("Gnome Club Cap")
  .addGroup(gardenGnomesGroup)
  .standalone();
export const gnomeTouchdownTopper = new Year2021SeasonalScatterType("Gnome Touchdown Topper")
  .addGroup(gardenGnomesGroup)
  .standalone();
export const cyclingCasquette = new Year2021SeasonalScatterType("Cycling Casquette", 2811)
  .addGroup(gardenGnomesGroup)
  .standalone();
export const gnomeGamingHeadset = new Year2021SeasonalScatterType("Gnome Gaming Headset")
  .addGroup(gardenGnomesGroup)
  .standalone();
export const gnomeToqueTopper = new Year2021SeasonalScatterType("Gnome Toque Topper", 2813)
  .addGroup(gardenGnomesGroup)
  .standalone();
export const gnomeCountdownCap = new Year2021SeasonalScatterType("Gnome Countdown Cap", 3428)
  .addGroup(gardenGnomesGroup)
  .standalone();
