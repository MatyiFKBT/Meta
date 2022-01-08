import {
  Year2021SeasonalBouncerType,
  Year2021SeasonalScatterType,
  Year2021SeasonalGroup,
} from "./_index";
import { TypeState, TypeTags } from "../../common/type";
import { lilySeed, roseSeed, tulipSeed } from "../../evolutions/nature";
import { joystickVirtual, surprise } from "../../normal/gaming";
import { greenie } from "../../normal/misc";
import { mystery } from "../../normal/mystery";
import { poiLibrary, poiUniqueAttraction, poiWildlife } from "../../normal/places";
import { safariTruck } from "../../evolutions/education";

export const womensHistoryMonthGroup = new Year2021SeasonalGroup({
  name: "Women's History Month",
  starts: "2021-02-25T12:00:00-05:00",
  ends: "2021-03-14T23:59:00-05:00",
});

export const ameliaEarhart = new Year2021SeasonalBouncerType("Amelia Earhart")
  .addGroup(womensHistoryMonthGroup)
  .addBouncerLandsOn(greenie, mystery);
export const fridaKahlo = new Year2021SeasonalBouncerType("Frida Kahlo")
  .addGroup(womensHistoryMonthGroup)
  .addBouncerLandsOn(
    greenie,
    type =>
      type.hasTags(TypeTags.EvolutionNature) &&
      [roseSeed.id, tulipSeed.id, lilySeed.id].includes(type.meta.evolution?.base ?? 0)
  );
export const hedyLamarr = new Year2021SeasonalBouncerType("Hedy Lamarr")
  .addGroup(womensHistoryMonthGroup)
  .addBouncerLandsOn(
    greenie,
    type => type.hasTags(TypeTags.TypeJewel) && type.state === TypeState.Physical
  );
export const mayaAngelou = new Year2021SeasonalBouncerType("Maya Angelou")
  .addGroup(womensHistoryMonthGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), poiLibrary, surprise);
export const janeGoodall = new Year2021SeasonalBouncerType("Jane Goodall")
  .addGroup(womensHistoryMonthGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    poiWildlife,
    type => type.meta.evolution?.base === safariTruck.id
  );
export const margaretHamilton = new Year2021SeasonalBouncerType("Margaret Hamilton")
  .addGroup(womensHistoryMonthGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    poiUniqueAttraction,
    joystickVirtual
  );
export const flightPin = new Year2021SeasonalScatterType("Flight Pin")
  .addGroup(womensHistoryMonthGroup)
  .standalone();
export const palette = new Year2021SeasonalScatterType("Palette")
  .addGroup(womensHistoryMonthGroup)
  .standalone();
export const filmReel = new Year2021SeasonalScatterType("Film Reel")
  .addGroup(womensHistoryMonthGroup)
  .standalone();
export const poem = new Year2021SeasonalScatterType("Poem")
  .addGroup(womensHistoryMonthGroup)
  .standalone();
export const chimpanzee = new Year2021SeasonalScatterType("Chimpanzee")
  .addGroup(womensHistoryMonthGroup)
  .standalone();
export const rocket = new Year2021SeasonalScatterType("Rocket")
  .addGroup(womensHistoryMonthGroup)
  .standalone();
