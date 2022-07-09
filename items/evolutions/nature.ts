import { EvolutionTypeSet, Type, TypeHidden, TypeTags } from "../../src/common/type";
import { Group } from "../../src/common/group";
import { evoGroup } from "./_index";

export const NatureEvolutionGroup = new Group({ name: "Nature Evolutions" }).addParent(evoGroup);

export class NatureEvolutionType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([NatureEvolutionGroup]).addTags(
      TypeTags.Evolution,
      TypeTags.EvolutionNature
    );
  }
}

export const tulipSeed = new NatureEvolutionType("Tulip Seed", 1775)
  .physical()
  .setEvolutionStage(1);
tulipSeed.setEvolutionBase(tulipSeed);
export const tulipGermination = new NatureEvolutionType("Tulip Germination", 1776)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(tulipSeed);
export const tulipGrowth = new NatureEvolutionType("Tulip Growth", 1777)
  .physical()
  .setEvolutionStage(3)
  .setEvolutionBase(tulipSeed);
export const tulipBud = new NatureEvolutionType("Tulip Bud", 1778)
  .physical()
  .setEvolutionStage(4)
  .setEvolutionBase(tulipSeed);
export const tulip = new NatureEvolutionType("Tulip", 1761)
  .physical()
  .addHidden(TypeHidden.Capture, TypeHidden.Deploy)
  .setEvolutionStage(5)
  .setEvolutionBase(tulipSeed);
export const blueTulipBlossom = new NatureEvolutionType("Blue Tulip Blossom", 1779)
  .physical()
  .setEvolutionStage(5)
  .setEvolutionBase(tulipSeed);
export const pinkTulipBlossom = new NatureEvolutionType("Pink Tulip Blossom", 1780)
  .physical()
  .setEvolutionStage(5)
  .setEvolutionBase(tulipSeed);
export const whiteTulipBlossom = new NatureEvolutionType("White Tulip Blossom", 1781)
  .physical()
  .setEvolutionStage(5)
  .setEvolutionBase(tulipSeed);

export const tulipEvos = new EvolutionTypeSet(
  [
    tulipSeed,
    tulipGermination,
    tulipGrowth,
    tulipBud,
    tulip,
    blueTulipBlossom,
    pinkTulipBlossom,
    whiteTulipBlossom,
  ],
  1
);

export const roseSeed = new NatureEvolutionType("Rose Seed", 1782).physical().setEvolutionStage(1);
roseSeed.setEvolutionBase(roseSeed);
export const roseGermination = new NatureEvolutionType("Rose Germination", 1783)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(roseSeed);
export const roseGrowth = new NatureEvolutionType("Rose Growth", 1784)
  .physical()
  .setEvolutionStage(3)
  .setEvolutionBase(roseSeed);
export const roseBud = new NatureEvolutionType("Rose Bud", 1785)
  .physical()
  .setEvolutionStage(4)
  .setEvolutionBase(roseSeed);
export const rose = new NatureEvolutionType("Rose", 1760)
  .physical()
  .addHidden(TypeHidden.Capture, TypeHidden.Deploy)
  .setEvolutionStage(5)
  .setEvolutionBase(roseSeed);
export const redRoseBlossom = new NatureEvolutionType("Red Rose Blossom", 1786)
  .physical()
  .setEvolutionStage(5)
  .setEvolutionBase(roseSeed);
export const violetRoseBlossom = new NatureEvolutionType("Violet Rose Blossom", 1787)
  .physical()
  .setEvolutionStage(5)
  .setEvolutionBase(roseSeed);
export const whiteRoseBlossom = new NatureEvolutionType("White Rose Blossom", 1788)
  .physical()
  .setEvolutionStage(5)
  .setEvolutionBase(roseSeed);
export const yellowRoseBlossom = new NatureEvolutionType("Yellow Rose Blossom", 1789)
  .physical()
  .setEvolutionStage(5)
  .setEvolutionBase(roseSeed);

export const roseEvos = new EvolutionTypeSet(
  [
    roseSeed,
    roseGermination,
    roseGrowth,
    roseBud,
    rose,
    redRoseBlossom,
    violetRoseBlossom,
    whiteRoseBlossom,
    yellowRoseBlossom,
  ],
  1
);

export const lilySeed = new NatureEvolutionType("Lily Seed", 1790).physical().setEvolutionStage(1);
lilySeed.setEvolutionBase(lilySeed);
export const lilyGermination = new NatureEvolutionType("Lily Germination", 1791)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(lilySeed);
export const lilyGrowth = new NatureEvolutionType("Lily Growth", 1792)
  .physical()
  .setEvolutionStage(3)
  .setEvolutionBase(lilySeed);
export const lilyBud = new NatureEvolutionType("Lily Bud", 1793)
  .physical()
  .setEvolutionStage(4)
  .setEvolutionBase(lilySeed);
export const lily = new NatureEvolutionType("Lily", 1774)
  .physical()
  .addHidden(TypeHidden.Capture, TypeHidden.Deploy)
  .setEvolutionStage(5)
  .setEvolutionBase(lilySeed);
export const pinkLilyBlossom = new NatureEvolutionType("Pink Lily Blossom", 1794)
  .physical()
  .setEvolutionStage(5)
  .setEvolutionBase(lilySeed);
export const violetLilyBlossom = new NatureEvolutionType("Violet Lily Blossom", 1795)
  .physical()
  .setEvolutionStage(5)
  .setEvolutionBase(lilySeed);
export const whiteLilyBlossom = new NatureEvolutionType("White Lily Blossom", 1796)
  .physical()
  .setEvolutionStage(5)
  .setEvolutionBase(lilySeed);

export const lilyEvos = new EvolutionTypeSet(
  [
    lilySeed,
    lilyGermination,
    lilyGrowth,
    lilyBud,
    lily,
    pinkLilyBlossom,
    violetLilyBlossom,
    whiteLilyBlossom,
  ],
  1
);

export const carnationSeed = new NatureEvolutionType("Carnation Seed", 1798)
  .virtual()
  .addHidden()
  .setEvolutionStage(1);
carnationSeed.setEvolutionBase(carnationSeed);
export const carnationGermination = new NatureEvolutionType("Carnation Germination", 1799)
  .virtual()
  .setEvolutionStage(2)
  .setEvolutionBase(carnationSeed);
export const carnationGrowth = new NatureEvolutionType("Carnation Growth", 1800)
  .virtual()
  .setEvolutionStage(3)
  .setEvolutionBase(carnationSeed);
export const carnationBud = new NatureEvolutionType("Carnation Bud", 1801)
  .virtual()
  .setEvolutionStage(4)
  .setEvolutionBase(carnationSeed);
export const carnation = new NatureEvolutionType("Carnation", 1797)
  .virtual()
  .addHidden(TypeHidden.All)
  .setEvolutionStage(5)
  .setEvolutionBase(carnationSeed);
export const pinkCarnationBlossom = new NatureEvolutionType("Pink Carnation Blossom", 1802)
  .virtual()
  .setEvolutionStage(5)
  .setEvolutionBase(carnationSeed);
export const redCarnationBlossom = new NatureEvolutionType("Red Carnation Blossom", 1803)
  .virtual()
  .setEvolutionStage(5)
  .setEvolutionBase(carnationSeed);
export const violetCarnationBlossom = new NatureEvolutionType("Violet Carnation Blossom", 1804)
  .virtual()
  .setEvolutionStage(5)
  .setEvolutionBase(carnationSeed);
export const whiteCarnationBlossom = new NatureEvolutionType("White Carnation Blossom", 1805)
  .virtual()
  .setEvolutionStage(5)
  .setEvolutionBase(carnationSeed);
export const yellowCarnationBlossom = new NatureEvolutionType("Yellow Carnation Blossom", 1806)
  .virtual()
  .setEvolutionStage(5)
  .setEvolutionBase(carnationSeed);

export const carnationEvos = new EvolutionTypeSet(
  [
    carnationSeed,
    carnationGermination,
    carnationGrowth,
    carnationBud,
    carnation,
    pinkCarnationBlossom,
    redCarnationBlossom,
    violetCarnationBlossom,
    whiteCarnationBlossom,
    yellowCarnationBlossom,
  ],
  1
);
