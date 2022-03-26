import { BouncerHostType, BouncerType, TypeHidden, TypeTags } from "../common/type";
import { treehouse, skyland } from "../normal/destination";
import { greenie, trailMunzee } from "../normal/misc";
import { earthMystery, waterMystery } from "../normal/mystery";
import {
  farmer,
  farmerandWife,
  family,
  garden,
  field,
  carrotPlant,
  cornStalk,
  goldenCarrotPlant,
  peasPlant,
  tomatoPlant,
  pottedPlant,
} from "./farm";
import { virtualRainbow } from "../normal/virtual";
import { seaweed, canoe, safariTruck, muscleCar } from "./education";
import {
  carnationSeed,
  lilySeed,
  NatureEvolutionGroup,
  NatureEvolutionType,
  roseSeed,
  tulipSeed,
} from "./nature";
import { TPOBHostType } from "../bouncers/tpobs";

export class NatureEvolutionBouncerHostType extends BouncerHostType {
  override template(): this {
    super.template();
    return this.setGroup([NatureEvolutionGroup]).addTags(
      TypeTags.Evolution,
      TypeTags.EvolutionNature,
      TypeTags.BouncerHostEvolution,
      TypeTags.BouncerHostTPOB
    );
  }
}
export class NatureEvolutionBouncerType extends BouncerType {
  override template(): this {
    super.template();
    return this.setGroup([NatureEvolutionGroup]).addTags(
      TypeTags.Evolution,
      TypeTags.EvolutionNature,
      TypeTags.BouncerEvolution,
      TypeTags.BouncerTPOB
    );
  }
}

// Butterfly
export const butterflyEgg = new NatureEvolutionType("Butterfly Egg", 1836)
  .physical()
  .setEvolutionStage(1);
butterflyEgg.setEvolutionBase(butterflyEgg);
export const caterpillar = new NatureEvolutionType("Caterpillar", 1837)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(butterflyEgg);
export const chrysalis = new NatureEvolutionType("Chrysalis", 1838)
  .physical()
  .setEvolutionStage(3)
  .setEvolutionBase(butterflyEgg);
export const hatchedChrysalis = new NatureEvolutionType("Hatched Chrysalis", 1839)
  .physical()
  .setEvolutionStage(4)
  .setEvolutionBase(butterflyEgg);
export const butterfly = new NatureEvolutionBouncerType("Butterfly", 1830)
  .addHidden(TypeHidden.Capture, TypeHidden.Deploy, TypeHidden.Bouncers)
  .addBouncerLandsOn(
    skyland,
    farmer,
    farmerandWife,
    family,
    pottedPlant,
    garden,
    field,
    peasPlant,
    carrotPlant,
    goldenCarrotPlant,
    tomatoPlant,
    cornStalk,
    type =>
      [tulipSeed.id, roseSeed.id, carnationSeed.id, lilySeed.id].includes(
        type.meta.evolution?.base ?? -1
      ) && (type.meta.evolution?.stage || 0) >= 3,
    type => type.hasTags(TypeTags.TypeSeasonal),
    trailMunzee,
    greenie,
    virtualRainbow
  )
  .setEvolutionStage(5)
  .setEvolutionBase(butterflyEgg);
export const morphoButterfly = new NatureEvolutionBouncerType("Morpho Butterfly", 1840)
  .addBouncerLandsOn(
    skyland,
    farmer,
    farmerandWife,
    family,
    pottedPlant,
    garden,
    field,
    peasPlant,
    carrotPlant,
    goldenCarrotPlant,
    tomatoPlant,
    cornStalk,
    type =>
      [tulipSeed.id, roseSeed.id, carnationSeed.id, lilySeed.id].includes(
        type.meta.evolution?.base ?? -1
      ) && (type.meta.evolution?.stage || 0) >= 3,
    type => type.hasTags(TypeTags.TypeSeasonal),
    trailMunzee,
    greenie,
    virtualRainbow
  )
  .setEvolutionStage(5)
  .setEvolutionBase(butterflyEgg);
export const monarchButterfly = new NatureEvolutionBouncerType("Monarch Butterfly", 1841)
  .addBouncerLandsOn(
    skyland,
    farmer,
    farmerandWife,
    family,
    pottedPlant,
    garden,
    field,
    peasPlant,
    carrotPlant,
    goldenCarrotPlant,
    tomatoPlant,
    cornStalk,
    type =>
      [tulipSeed.id, roseSeed.id, carnationSeed.id, lilySeed.id].includes(
        type.meta.evolution?.base ?? -1
      ) && (type.meta.evolution?.stage || 0) >= 3,
    type => type.hasTags(TypeTags.TypeSeasonal),
    trailMunzee,
    greenie,
    virtualRainbow
  )
  .setEvolutionStage(5)
  .setEvolutionBase(butterflyEgg);
export const limeButterfly = new NatureEvolutionBouncerType("Lime Butterfly", 1842)
  .addBouncerLandsOn(
    skyland,
    farmer,
    farmerandWife,
    family,
    pottedPlant,
    garden,
    field,
    peasPlant,
    carrotPlant,
    goldenCarrotPlant,
    tomatoPlant,
    cornStalk,
    type =>
      [tulipSeed.id, roseSeed.id, carnationSeed.id, lilySeed.id].includes(
        type.meta.evolution?.base ?? -1
      ) && (type.meta.evolution?.stage || 0) >= 3,
    type => type.hasTags(TypeTags.TypeSeasonal),
    trailMunzee,
    greenie,
    virtualRainbow
  )
  .setEvolutionStage(5)
  .setEvolutionBase(butterflyEgg);
export const butterflyHost = new TPOBHostType("Butterfly Host", 1843)
  .physical()
  .addBouncerHostType(butterfly, morphoButterfly, monarchButterfly, limeButterfly);
export const butterflyVirtualHost = new TPOBHostType("Butterfly Virtual Host", 1844)
  .virtual()
  .addBouncerHostType(butterfly, morphoButterfly, monarchButterfly, limeButterfly);

// Frog
export const frogEgg = new NatureEvolutionType("Frog Egg", 2106).physical().setEvolutionStage(1);
frogEgg.setEvolutionBase(frogEgg);
export const tadpole = new NatureEvolutionType("Tadpole", 2107)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(frogEgg);
export const pollywog = new NatureEvolutionType("Pollywog", 2108)
  .physical()
  .setEvolutionStage(3)
  .setEvolutionBase(frogEgg);
export const froglet = new NatureEvolutionType("Froglet", 2109)
  .physical()
  .setEvolutionStage(4)
  .setEvolutionBase(frogEgg);
export const frog = new NatureEvolutionBouncerType("Frog", 2067)
  .addHidden(TypeHidden.Capture, TypeHidden.Deploy, TypeHidden.Bouncers)
  .addBouncerLandsOn(
    muscleCar,
    type =>
      [seaweed.id, canoe.id, safariTruck.id].includes(type.meta.evolution?.base ?? -1) &&
      (type.meta.evolution?.stage || 0) >= 3,
    earthMystery,
    waterMystery,
    trailMunzee,
    greenie,
    type => type.hasTags(TypeTags.VirtualColourGreen)
  )
  .setEvolutionStage(5)
  .setEvolutionBase(frogEgg);
export const treeFrog = new NatureEvolutionBouncerType("Tree Frog", 2110)
  .addBouncerLandsOn(
    skyland,
    muscleCar,
    type =>
      [seaweed.id, canoe.id, safariTruck.id].includes(type.meta.evolution?.base ?? -1) &&
      (type.meta.evolution?.stage || 0) >= 3,
    earthMystery,
    waterMystery,
    trailMunzee,
    greenie,
    type => type.hasTags(TypeTags.VirtualColourGreen)
  )
  .setEvolutionStage(5)
  .setEvolutionBase(frogEgg);
export const poisonDartFrog = new NatureEvolutionBouncerType("Poison Dart Frog", 2111)
  .addBouncerLandsOn(
    skyland,
    muscleCar,
    type =>
      [seaweed.id, canoe.id, safariTruck.id].includes(type.meta.evolution?.base ?? -1) &&
      (type.meta.evolution?.stage || 0) >= 3,
    earthMystery,
    waterMystery,
    trailMunzee,
    greenie,
    type => type.hasTags(TypeTags.VirtualColourGreen)
  )
  .setEvolutionStage(5)
  .setEvolutionBase(frogEgg);
export const tomatoFrog = new NatureEvolutionBouncerType("Tomato Frog", 2112)
  .addBouncerLandsOn(
    skyland,
    muscleCar,
    type =>
      [seaweed.id, canoe.id, safariTruck.id].includes(type.meta.evolution?.base ?? -1) &&
      (type.meta.evolution?.stage || 0) >= 3,
    earthMystery,
    waterMystery,
    trailMunzee,
    greenie,
    type => type.hasTags(TypeTags.VirtualColourGreen)
  )
  .setEvolutionStage(5)
  .setEvolutionBase(frogEgg);
export const frogHost = new TPOBHostType("Frog Host", 2113)
  .physical()
  .addBouncerHostType(frog, treeFrog, poisonDartFrog, tomatoFrog);
export const frogVirtualHost = new TPOBHostType("Frog Virtual Host", 2114)
  .virtual()
  .addBouncerHostType(frog, treeFrog, poisonDartFrog, tomatoFrog);

// Jellyfish
export const planulaLarva = new NatureEvolutionType("Planula Larva", 2462)
  .virtual()
  .addHidden()
  .setEvolutionStage(1);
planulaLarva.setEvolutionBase(planulaLarva);
export const polyp = new NatureEvolutionType("Polyp", 2463)
  .virtual()
  .setEvolutionStage(2)
  .setEvolutionBase(planulaLarva);
export const polypwithBulbs = new NatureEvolutionType("Polyp with Bulbs", 2464)
  .virtual()
  .setEvolutionStage(3)
  .setEvolutionBase(planulaLarva);
export const ephyraLarva = new NatureEvolutionType("Ephyra Larva", 2465)
  .virtual()
  .setEvolutionStage(4)
  .setEvolutionBase(planulaLarva);
export const jellyfish = new NatureEvolutionBouncerType("Jellyfish")
  .addHidden(TypeHidden.Capture, TypeHidden.Deploy, TypeHidden.Inventory, TypeHidden.Bouncers)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    type => [seaweed.id, canoe.id, safariTruck.id].includes(type.meta.evolution?.base ?? -1),
    earthMystery,
    waterMystery,
    greenie,
    type => type.hasTags(TypeTags.VirtualColourGreen)
  )
  .setEvolutionStage(5)
  .setEvolutionBase(planulaLarva);
export const boxJellyfish = new NatureEvolutionBouncerType("Box Jellyfish", 2466)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    type => [seaweed.id, canoe.id, safariTruck.id].includes(type.meta.evolution?.base ?? -1),
    earthMystery,
    waterMystery,
    greenie,
    type => type.hasTags(TypeTags.VirtualColourGreen)
  )
  .setEvolutionStage(5)
  .setEvolutionBase(planulaLarva);
export const goldenJellyfish = new NatureEvolutionBouncerType("Golden Jellyfish", 2467)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    type => [seaweed.id, canoe.id, safariTruck.id].includes(type.meta.evolution?.base ?? -1),
    earthMystery,
    waterMystery,
    greenie,
    type => type.hasTags(TypeTags.VirtualColourGreen)
  )
  .setEvolutionStage(5)
  .setEvolutionBase(planulaLarva);
export const pBJellyfish = new NatureEvolutionBouncerType("PB & Jellyfish", 2468)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    type => [seaweed.id, canoe.id, safariTruck.id].includes(type.meta.evolution?.base ?? -1),
    earthMystery,
    waterMystery,
    greenie,
    type => type.hasTags(TypeTags.VirtualColourGreen)
  )
  .setEvolutionStage(5)
  .setEvolutionBase(planulaLarva);
export const jellyfishHost = new TPOBHostType("Jellyfish Host", 2469)
  .physical()
  .addBouncerHostType(jellyfish, boxJellyfish, goldenJellyfish, pBJellyfish);
export const jellyfishVirtualHost = new TPOBHostType("Jellyfish Virtual Host", 2470)
  .virtual()
  .addBouncerHostType(jellyfish, boxJellyfish, goldenJellyfish, pBJellyfish);

// Turtle

export const turtleEgg = new NatureEvolutionType("Turtle Egg", 2453).physical().setEvolutionStage(1);
turtleEgg.setEvolutionBase(turtleEgg);
export const turtleHatchling = new NatureEvolutionType("Turtle Hatchling", 2454)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(turtleEgg);
export const juvenileTurtle = new NatureEvolutionType("Juvenile Turtle", 2455)
  .physical()
  .setEvolutionStage(3)
  .setEvolutionBase(turtleEgg);
export const adultTurtle = new NatureEvolutionType("Adult Turtle", 2456)
  .physical()
  .setEvolutionStage(4)
  .setEvolutionBase(turtleEgg);
export const turtle = new NatureEvolutionBouncerType("Turtle")
  .addHidden(TypeHidden.Capture, TypeHidden.Deploy, TypeHidden.Bouncers)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    type => [seaweed.id, canoe.id, safariTruck.id].includes(type.meta.evolution?.base ?? -1),
    earthMystery,
    waterMystery,
    greenie,
    type => type.hasTags(TypeTags.VirtualColourGreen)
  )
  .setEvolutionStage(5)
  .setEvolutionBase(turtleEgg);
export const seaTurtle = new NatureEvolutionBouncerType("Sea Turtle", 2476)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    type => [seaweed.id, canoe.id, safariTruck.id].includes(type.meta.evolution?.base ?? -1),
    earthMystery,
    waterMystery,
    greenie,
    type => type.hasTags(TypeTags.VirtualColourGreen)
  )
  .setEvolutionStage(5)
  .setEvolutionBase(turtleEgg);
export const snappingTurtle = new NatureEvolutionBouncerType("Snapping Turtle", 2457)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    type => [seaweed.id, canoe.id, safariTruck.id].includes(type.meta.evolution?.base ?? -1),
    earthMystery,
    waterMystery,
    greenie,
    type => type.hasTags(TypeTags.VirtualColourGreen)
  )
  .setEvolutionStage(5)
  .setEvolutionBase(turtleEgg);
export const taekwondoTortoise = new NatureEvolutionBouncerType("Taekwondo Tortoise", 2458)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    type => [seaweed.id, canoe.id, safariTruck.id].includes(type.meta.evolution?.base ?? -1),
    earthMystery,
    waterMystery,
    greenie,
    type => type.hasTags(TypeTags.VirtualColourGreen)
  )
  .setEvolutionStage(5)
  .setEvolutionBase(turtleEgg);
export const turtleHost = new TPOBHostType("Turtle Host", 2459)
  .physical()
  .addBouncerHostType(turtle, seaTurtle, snappingTurtle, taekwondoTortoise);
export const turtleVirtualHost = new TPOBHostType("Turtle Virtual Host", 2460)
  .virtual()
  .addBouncerHostType(turtle, seaTurtle, snappingTurtle, taekwondoTortoise);

// Bee
export const beeEggs = new NatureEvolutionType("Bee Eggs", 2877).physical().setEvolutionStage(1);
beeEggs.setEvolutionBase(beeEggs);
export const beeLarvae = new NatureEvolutionType("Bee Larvae", 2878)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(beeEggs);
export const beePupae = new NatureEvolutionType("Bee Pupae", 2879)
  .physical()
  .setEvolutionStage(3)
  .setEvolutionBase(beeEggs);
export const emptyHoneycomb = new NatureEvolutionType("Empty Honeycomb", 2880)
  .physical()
  .setEvolutionStage(4)
  .setEvolutionBase(beeEggs);
export const bee = new NatureEvolutionBouncerType("Bee")
  .addHidden(TypeHidden.Capture, TypeHidden.Deploy, TypeHidden.Bouncers)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    type =>
      [tulipSeed.id, roseSeed.id, lilySeed.id, carnationSeed.id].includes(
        type.meta.evolution?.base ?? -1
      ),
    earthMystery,
    greenie,
    type => type.hasTags(TypeTags.TypeVirtual)
  )
  .setEvolutionStage(5)
  .setEvolutionBase(beeEggs);
export const honeyBee = new NatureEvolutionBouncerType("Honey Bee", 2881)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    type =>
      [tulipSeed.id, roseSeed.id, lilySeed.id, carnationSeed.id].includes(
        type.meta.evolution?.base ?? -1
      ),
    earthMystery,
    greenie,
    type => type.hasTags(TypeTags.TypeVirtual)
  )
  .setEvolutionStage(5)
  .setEvolutionBase(beeEggs);
export const queenBee = new NatureEvolutionBouncerType("Queen Bee", 2882)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    type =>
      [tulipSeed.id, roseSeed.id, lilySeed.id, carnationSeed.id].includes(
        type.meta.evolution?.base ?? -1
      ),
    earthMystery,
    greenie,
    type => type.hasTags(TypeTags.TypeVirtual)
  )
  .setEvolutionStage(5)
  .setEvolutionBase(beeEggs);
export const wallaBee = new NatureEvolutionBouncerType("WallaBee", 2883)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    type =>
      [tulipSeed.id, roseSeed.id, lilySeed.id, carnationSeed.id].includes(
        type.meta.evolution?.base ?? -1
      ),
    earthMystery,
    greenie,
    type => type.hasTags(TypeTags.TypeVirtual)
  )
  .setEvolutionStage(5)
  .setEvolutionBase(beeEggs);
export const beeVirtualHost = new TPOBHostType("Bee Virtual Host", 2885)
  .virtual()
  .addBouncerHostType(bee, honeyBee, queenBee, wallaBee);
export const beeHost = new TPOBHostType("Bee Host", 2884)
  .physical()
  .addBouncerHostType(bee, honeyBee, queenBee, wallaBee);
