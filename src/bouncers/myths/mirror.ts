import { Group } from "../../common/group";
import { BouncerHostType, BouncerType, TypeState, TypeTags } from "../../common/type";
import {
  tomatoSeed,
  cornSeed,
  goldenCarrotSeed,
  carrotSeed,
  peasSeed,
  farmer,
  tomato,
} from "../../evolutions/farm";
import { tulipSeed, roseSeed, lilySeed, carnationSeed } from "../../evolutions/nature";
import { skyland, treehouse } from "../../normal/destination";
import { greenie, shamrock } from "../../normal/misc";
import {
  mystery,
  earthMystery,
  voidMystery,
  airMystery,
  fireMystery,
  waterMystery,
} from "../../normal/mystery";
import { virtual } from "../../normal/virtual";
import { bouncersGroup } from "../_index";

export const MirrorMythGroup = new Group({ name: "Mirror Myths" }).addParent(bouncersGroup);

export class MirrorMythType extends BouncerType {
  override template(): this {
    super.template();
    return this.setGroup(MirrorMythGroup).addTag(TypeTags.BouncerMyth, TypeTags.BouncerMythMirror);
  }
}

export class MirrorMythHostType extends BouncerHostType {
  override template(): this {
    super.template();
    return this.setGroup(MirrorMythGroup).addTag(
      TypeTags.BouncerHostMyth,
      TypeTags.BouncerHostMythMirror
    );
  }
}

// Mermaid
export const mermaid = new MirrorMythType("Mermaid", 1378).addBouncerLandsOn(
  treehouse,
  greenie,
  waterMystery,
  type => type.hasTags(TypeTags.TypeJewel) && type.state === TypeState.Physical
);
export const hotSpringMermaid = new MirrorMythType("Hot Spring Mermaid", 1648)
  .addTag(TypeTags.BouncerMythVariant)
  .addBouncerLandsOn(treehouse, greenie, waterMystery, fireMystery);
export const melusineMermaid = new MirrorMythType("Melusine Mermaid", 1649)
  .addTag(TypeTags.BouncerMythVariant)
  .addBouncerLandsOn(skyland, treehouse, greenie, waterMystery, airMystery);
export const merryMermaid = new MirrorMythType("Merry Mermaid").addTag(TypeTags.BouncerMythVariant);
export const mermaidHost = new MirrorMythHostType("Mermaid Host", 1379)
  .physical()
  .addHostTypeOf(mermaid, hotSpringMermaid, melusineMermaid, merryMermaid);
export const mermaidVirtualHost = new MirrorMythHostType("Mermaid Virtual Host", 1650)
  .virtual()
  .addHostTypeOf(mermaid, hotSpringMermaid, melusineMermaid, merryMermaid);

// Fairy
export const fairy = new MirrorMythType("Fairy", 1544).addBouncerLandsOn(
  skyland,
  treehouse,
  greenie,
  airMystery,
  mystery
);
export const dryadFairy = new MirrorMythType("Dryad Fairy", 1602)
  .addTag(TypeTags.BouncerMythVariant)
  .addBouncerLandsOn(skyland, treehouse, greenie, airMystery, earthMystery);
export const wildfireFairy = new MirrorMythType("Wildfire Fairy", 1603)
  .addTag(TypeTags.BouncerMythVariant)
  .addBouncerLandsOn(skyland, treehouse, greenie, airMystery, fireMystery);
export const fairyHost = new MirrorMythHostType("Fairy Host", 1545)
  .physical()
  .addHostTypeOf(fairy, dryadFairy, wildfireFairy);
export const fairyVirtualHost = new MirrorMythHostType("Fairy Virtual Host", 1546)
  .virtual()
  .addHostTypeOf(fairy, dryadFairy, wildfireFairy);

// Banshee
export const banshee = new MirrorMythType("Banshee", 1827).addBouncerLandsOn(
  skyland,
  treehouse,
  greenie,
  shamrock,
  airMystery,
  voidMystery,
  type => type.hasTags(TypeTags.VirtualColourBlack),
  type => type.hasTags(TypeTags.VirtualColourGreen)
);
export const harpyBanshee = new MirrorMythType("Harpy Banshee", 2254)
  .addTag(TypeTags.BouncerMythVariant)
  .addBouncerLandsOn(skyland, treehouse, greenie, shamrock, airMystery, type =>
    type.hasTags(TypeTags.TypeJewel)
  );
export const witchBanshee = new MirrorMythType("Witch Banshee", 2255)
  .addTag(TypeTags.BouncerMythVariant)
  .addBouncerLandsOn(skyland, treehouse, greenie, airMystery, voidMystery, fireMystery, type =>
    [
      tomatoSeed.id,
      cornSeed.id,
      goldenCarrotSeed.id,
      carrotSeed.id,
      peasSeed.id,
      farmer.id,
      tulipSeed.id,
      roseSeed.id,
      lilySeed.id,
      carnationSeed.id,
    ].includes(type.meta.evolution_base ?? -1)
  );
export const bansheeHost = new MirrorMythHostType("Banshee Host", 1828)
  .physical()
  .addHostTypeOf(banshee, harpyBanshee, witchBanshee);
export const bansheeVirtualHost = new MirrorMythHostType("Banshee Virtual Host", 1829)
  .virtual()
  .addHostTypeOf(banshee, harpyBanshee, witchBanshee);

// Nymph
export const nymph = new MirrorMythType("Nymph", 2118).addBouncerLandsOn(
  skyland,
  treehouse,
  greenie,
  earthMystery,
  type => type.hasTags(TypeTags.VirtualColourBrown),
  type => type.hasTags(TypeTags.VirtualColourBlack),
  type => type.hasTags(TypeTags.VirtualColourGreen)
);
export const vampireNymph = new MirrorMythType("Vampire Nymph", 2479)
  .addTag(TypeTags.BouncerMythVariant)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    greenie,
    earthMystery,
    voidMystery,
    type => type.hasTags(TypeTags.VirtualColourRed),
    type => type.hasTags(TypeTags.VirtualColourGreen),
    tomato,
    type => type.meta.evolution_base === farmer.id
  );
export const elfNymph = new MirrorMythType("Elf Nymph", 2480)
  .addTag(TypeTags.BouncerMythVariant)
  .addBouncerLandsOn(
    treehouse,
    greenie,
    earthMystery,
    type => type.hasTags(TypeTags.TypeWeaponClan),
    type => type.hasTags(TypeTags.VirtualColourGreen),
    virtual
  );
export const snowQueen = new MirrorMythType("Snow Queen").addTag(TypeTags.BouncerMythVariant);
export const nymphHost = new MirrorMythHostType("Nymph Host", 2119)
  .physical()
  .addHostTypeOf(nymph, vampireNymph, elfNymph, snowQueen);
export const nymphVirtualHost = new MirrorMythHostType("Nymph Virtual Host", 2120)
  .virtual()
  .addHostTypeOf(nymph, vampireNymph, elfNymph, snowQueen);
