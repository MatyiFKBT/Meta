import {
  Year2021SeasonalBouncerType,
  Year2021SeasonalScatterType,
  Year2021SeasonalGroup,
} from "./_index";
import { TypeTags, TypeHidden } from "../../common/type";
import { seaweed, shark, fish, submarine, canoe, motorboat } from "../../evolutions/education";
import { aquamarine, sapphire } from "../../normal/jewels";
import { greenie } from "../../normal/misc";
import { mystery, waterMystery } from "../../normal/mystery";
import { aquarius, pisces } from "../../normal/zodiacs";
import { poiBeach } from "../../normal/places";

export const goFishingGroup = new Year2021SeasonalGroup({
  name: "Go Fishing",
  starts: "2021-07-09T12:00:00-05:00",
  ends: "2021-08-08T23:59:00-05:00",
});

export const freshwaterFishingPole = new Year2021SeasonalBouncerType("Freshwater Fishing Pole")
  .addGroup(goFishingGroup)
  .addBouncerLandsOn(
    greenie,
    mystery,
    waterMystery,
    aquamarine,
    aquarius,
    pisces,
    seaweed,
    shark,
    fish
  );
export const saltwaterFishingPole = new Year2021SeasonalBouncerType("Saltwater Fishing Pole")
  .addGroup(goFishingGroup)
  .addBouncerLandsOn(
    i => i.hasTags(TypeTags.VirtualColourBlue),
    sapphire,
    submarine,
    canoe,
    motorboat,
    poiBeach
  );
export const redFishingBobber = new Year2021SeasonalScatterType("Red Fishing Bobber")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Capture);
export const greenFishingBobber = new Year2021SeasonalScatterType("Green Fishing Bobber")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Capture);
export const smelt = new Year2021SeasonalScatterType("Smelt")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const rainbowTrout = new Year2021SeasonalScatterType("Rainbow Trout")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const tinCan = new Year2021SeasonalScatterType("Tin Can")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const boot = new Year2021SeasonalScatterType("Boot")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const gar = new Year2021SeasonalScatterType("Gar")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const pike = new Year2021SeasonalScatterType("Pike")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const tire = new Year2021SeasonalScatterType("Tire")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const koi = new Year2021SeasonalScatterType("Koi")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const nessie = new Year2021SeasonalScatterType("Nessie")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const kingMackerel = new Year2021SeasonalScatterType("King Mackerel")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const bonefish = new Year2021SeasonalScatterType("Bonefish")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const driftwood = new Year2021SeasonalScatterType("Driftwood")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const canRings = new Year2021SeasonalScatterType("Can Rings")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const yellowfinTuna = new Year2021SeasonalScatterType("Yellowfin Tuna")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const messageinaBottle = new Year2021SeasonalScatterType("Message in a Bottle")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const redSnapper = new Year2021SeasonalScatterType("Red Snapper")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const zebraTurkeyfish = new Year2021SeasonalScatterType("Zebra Turkeyfish")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const marlin = new Year2021SeasonalScatterType("Marlin")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const lifePreserver = new Year2021SeasonalScatterType("Life Preserver")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const seaSerpent = new Year2021SeasonalScatterType("Sea Serpent")
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
