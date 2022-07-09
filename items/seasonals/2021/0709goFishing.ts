import {
  Year2021SeasonalBouncerType,
  Year2021SeasonalScatterType,
  Year2021SeasonalGroup,
} from "./_index";
import { TypeTags, TypeHidden } from "../../../src/items/type";
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

export const freshwaterFishingPole = new Year2021SeasonalBouncerType(
  "Freshwater Fishing Pole",
  3173
)
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
export const saltwaterFishingPole = new Year2021SeasonalBouncerType("Saltwater Fishing Pole", 3174)
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
export const smelt = new Year2021SeasonalScatterType("Smelt", 3180)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const rainbowTrout = new Year2021SeasonalScatterType("Rainbow Trout", 3181)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const tinCan = new Year2021SeasonalScatterType("Tin Can", 3177)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const boot = new Year2021SeasonalScatterType("Boot", 3178)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const gar = new Year2021SeasonalScatterType("Gar", 3182)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const pike = new Year2021SeasonalScatterType("Pike", 3183)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const tire = new Year2021SeasonalScatterType("Tire", 3179)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const koi = new Year2021SeasonalScatterType("Koi", 3184)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const nessie = new Year2021SeasonalScatterType("Nessie", 3185)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const kingMackerel = new Year2021SeasonalScatterType("King Mackerel", 3190)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const bonefish = new Year2021SeasonalScatterType("Bonefish", 3191)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const driftwood = new Year2021SeasonalScatterType("Driftwood", 3187)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const canRings = new Year2021SeasonalScatterType("Can Rings", 3186)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const yellowfinTuna = new Year2021SeasonalScatterType("Yellowfin Tuna", 3195)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const messageinaBottle = new Year2021SeasonalScatterType("Message in a Bottle", 3189)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const redSnapper = new Year2021SeasonalScatterType("Red Snapper", 3193)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const zebraTurkeyfish = new Year2021SeasonalScatterType("Zebra Turkeyfish", 3192)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const marlin = new Year2021SeasonalScatterType("Marlin", 3194)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const lifePreserver = new Year2021SeasonalScatterType("Life Preserver", 3188)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const seaSerpent = new Year2021SeasonalScatterType("Sea Serpent", 3196)
  .addGroup(goFishingGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
