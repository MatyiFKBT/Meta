import {
  Year2021SeasonalBouncerType,
  Year2021SeasonalScatterType,
  Year2021SeasonalGroup,
} from "./_index";
import { TypeTags } from "../../common/type";
import { tractor } from "../../evolutions/farm";
import { greenie, shamrock } from "../../normal/misc";
import { fireMystery } from "../../normal/mystery";
import { poiTransportation } from "../../normal/places";
import { flatLou } from "../../normal/flats";
import { firstWheel } from "../../evolutions/education";
import { pinkDiamond } from "../../normal/jewels";

export const worldBicycleDay2021Group = new Year2021SeasonalGroup({
  name: "World Bicycle Day 2021",
  starts: "2021-06-02T12:00:00-05:00",
  ends: "2021-06-30T23:59:00-05:00",
});

export const championChopper = new Year2021SeasonalBouncerType("Champion Chopper")
  .addGroup(worldBicycleDay2021Group)
  .addBouncerLandsOn(greenie, shamrock, fireMystery, pinkDiamond, tractor);
export const unicornUnicycle = new Year2021SeasonalBouncerType("Unicorn Unicycle")
  .addGroup(worldBicycleDay2021Group)
  .addBouncerLandsOn(greenie, shamrock, fireMystery, pinkDiamond, tractor);
export const toyTrike = new Year2021SeasonalBouncerType("Toy Trike", 3061)
  .addGroup(worldBicycleDay2021Group)
  .addBouncerLandsOn(
    i => i.hasTags(TypeTags.TypeVirtual),
    flatLou,
    poiTransportation,
    i => i.meta.evolution?.base === firstWheel.id
  );
export const bicentennialBicycle = new Year2021SeasonalBouncerType("Bicentennial Bicycle")
  .addGroup(worldBicycleDay2021Group)
  .addBouncerLandsOn(
    i => i.hasTags(TypeTags.TypeVirtual),
    flatLou,
    poiTransportation,
    i => i.meta.evolution?.base === firstWheel.id
  );
export const tandemTwins = new Year2021SeasonalBouncerType("Tandem Twins")
  .addGroup(worldBicycleDay2021Group)
  .addBouncerLandsOn(
    i => i.hasTags(TypeTags.TypeVirtual),
    flatLou,
    poiTransportation,
    i => i.meta.evolution?.base === firstWheel.id
  );
export const startingLine = new Year2021SeasonalScatterType("Starting Line", 3063)
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const midway = new Year2021SeasonalScatterType("Midway", 3064)
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n1stPlaceBicentennialBicycle = new Year2021SeasonalScatterType(
  "1st Place Bicentennial Bicycle"
)
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n1stPlaceToyTrike = new Year2021SeasonalScatterType("1st Place Toy Trike")
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n1stPlaceChampionChopper = new Year2021SeasonalScatterType(
  "1st Place Champion Chopper"
)
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n1stPlaceUnicornUnicycle = new Year2021SeasonalScatterType(
  "1st Place Unicorn Unicycle"
)
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n1stPlaceTandemTwins = new Year2021SeasonalScatterType("1st Place Tandem Twins")
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n1stPlaceFlatLou = new Year2021SeasonalScatterType("1st Place Flat Lou")
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n2ndPlaceBicentennialBicycle = new Year2021SeasonalScatterType(
  "2nd Place Bicentennial Bicycle"
)
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n2ndPlaceToyTrike = new Year2021SeasonalScatterType("2nd Place Toy Trike")
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n2ndPlaceChampionChopper = new Year2021SeasonalScatterType(
  "2nd Place Champion Chopper"
)
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n2ndPlaceUnicornUnicycle = new Year2021SeasonalScatterType(
  "2nd Place Unicorn Unicycle"
)
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n2ndPlaceTandemTwins = new Year2021SeasonalScatterType("2nd Place Tandem Twins")
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n2ndPlaceFlatLou = new Year2021SeasonalScatterType("2nd Place Flat Lou")
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n3rdPlaceBicentennialBicycle = new Year2021SeasonalScatterType(
  "3rd Place Bicentennial Bicycle"
)
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n3rdPlaceToyTrike = new Year2021SeasonalScatterType("3rd Place Toy Trike", 3086)
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n3rdPlaceChampionChopper = new Year2021SeasonalScatterType(
  "3rd Place Champion Chopper"
)
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n3rdPlaceUnicornUnicycle = new Year2021SeasonalScatterType(
  "3rd Place Unicorn Unicycle"
)
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n3rdPlaceTandemTwins = new Year2021SeasonalScatterType("3rd Place Tandem Twins")
  .addGroup(worldBicycleDay2021Group)
  .standalone();
export const n3rdPlaceFlatLou = new Year2021SeasonalScatterType("3rd Place Flat Lou")
  .addGroup(worldBicycleDay2021Group)
  .standalone();
