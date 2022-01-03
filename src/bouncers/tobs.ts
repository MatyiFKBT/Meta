import { Group } from "../common/group";
import { BouncerHostType, BouncerType, TypeTags } from "../common/type";
import {
  amethyst,
  aquamarine,
  citrine,
  diamond,
  emerald,
  onyx,
  pinkDiamond,
  ruby,
  sapphire,
  topaz,
} from "../normal/jewels";
import { greenie, premium, shamrock } from "../normal/misc";
import {
  airMystery,
  earthMystery,
  fireMystery,
  iceMystery,
  mystery,
  voidMystery,
  waterMystery,
} from "../normal/mystery";
import { virtualGold, virtualYellow, virtualDandelion, virtualGoldenrod } from "../normal/virtual";
import { mace, longsword, crossbow, battleAxe, theHammer } from "../normal/weapons";
import { bouncersGroup } from "./_index";

export const TOBGroup = new Group({ name: "Team Owned Bouncers" }).addParent(bouncersGroup);

export class TOBType extends BouncerType {
  override template(): this {
    super.template();
    return this.setGroup(TOBGroup);
  }
}

export class TOBHostType extends BouncerHostType {
  override template(): this {
    super.template();
    return this.setGroup(TOBGroup);
  }
}

export const rainbowUnicorn = new TOBType("Rainbow Unicorn", 1118)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerMythAlterna, TypeTags.BouncerMythOriginal)
  .addBouncerLandsOn(greenie, shamrock);
export const gnomeLeprechaun = new TOBType("Gnome Leprechaun", 1151)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerMythAlterna, TypeTags.BouncerMythOriginal)
  .addBouncerLandsOn(greenie, shamrock, earthMystery);
export const iceDragon = new TOBType("Ice Dragon", 1164)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerMythAlterna, TypeTags.BouncerMythOriginal)
  .addBouncerLandsOn(greenie, fireMystery, iceMystery);
export const sasquatchYeti = new TOBType("Sasquatch Yeti", 1210)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerMythAlterna, TypeTags.BouncerMythOriginal)
  .addBouncerLandsOn(greenie, iceMystery, earthMystery);
export const firePegasus = new TOBType("Fire Pegasus", 1229)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerMythAlterna, TypeTags.BouncerMythClassical)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), airMystery, fireMystery);
export const cherub = new TOBType("Cherub", 1237)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerMythAlterna, TypeTags.BouncerMythClassical)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), airMystery, earthMystery);
export const ogre = new TOBType("Ogre", 1268)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerMythAlterna, TypeTags.BouncerMythClassical)
  .addBouncerLandsOn(
    greenie,
    type => type.hasTags(TypeTags.TypeJewel),
    mace,
    longsword,
    battleAxe,
    theHammer,
    crossbow
  );
export const chimera = new TOBType("Chimera", 1329)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerMythAlterna, TypeTags.BouncerMythClassical)
  .addBouncerLandsOn(
    greenie,
    type => type.hasTags(TypeTags.TypeVirtual),
    shamrock,
    type => type.hasTags(TypeTags.TypeMysteryElemental),
    type => type.hasTags(TypeTags.TypeJewel),
    type => type.hasTags(TypeTags.TypeWeaponClan)
  );
export const siren = new TOBType("Siren", 1485)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerMythAlterna, TypeTags.BouncerMythMirror)
  .addBouncerLandsOn(greenie, waterMystery, iceMystery);
export const fairyGodmother = new TOBType("Fairy Godmother", 1630)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerMythAlterna, TypeTags.BouncerMythMirror)
  .addBouncerLandsOn(
    greenie,
    mystery,
    type => type.hasTags(TypeTags.TypeVirtual),
    airMystery,
    type => type.hasTags(TypeTags.TypeJewel)
  );
export const hadavale = new TOBType("Hadavale", 1745)
  .addTags(TypeTags.BouncerPC, TypeTags.BouncerPCEscaped)
  .addBouncerLandsOn(
    iceMystery,
    premium,
    shamrock,
    mystery,
    type => type.hasTags(TypeTags.TypeReseller),
    type => type.meta.evolution_stage === 1,
    airMystery
  );
export const gorgon = new TOBType("Gorgon", 1929)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerMythAlterna, TypeTags.BouncerMythMirror)
  .addBouncerLandsOn(
    greenie,
    premium,
    shamrock,
    type => type.hasTags(TypeTags.TypeZodiacWestern),
    type => type.hasTags(TypeTags.TypeJewel),
    virtualGold,
    virtualYellow,
    virtualGoldenrod,
    virtualDandelion
  );
export const motherEarth = new TOBType("Mother Earth", 2337)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerMythAlterna, TypeTags.BouncerMythMirror)
  .addBouncerLandsOn(
    greenie,
    shamrock,
    voidMystery,
    type => type.hasTags(TypeTags.TypeMysteryElemental),
    type => type.hasTags(TypeTags.VirtualColourBrown),
    type => type.hasTags(TypeTags.VirtualColourGreen)
  );
export const vikerkaar = new TOBType("Vikerkaar", 2716)
  .addTags(TypeTags.BouncerPC, TypeTags.BouncerPCEscaped)
  .addBouncerLandsOn(
    earthMystery,
    fireMystery,
    airMystery,
    diamond,
    ruby,
    aquamarine,
    topaz,
    pinkDiamond,
    sapphire,
    citrine,
    onyx,
    amethyst,
    emerald
  );

export const firePegasusPhysicalHost = new TOBHostType("Fire Pegasus Physical Host", 1232)
  .physical()
  .addTags(
    TypeTags.BouncerHostMyth,
    TypeTags.BouncerHostMythAlterna,
    TypeTags.BouncerHostMythClassical
  );
export const cherubVirtualHost = new TOBHostType("Cherub Virtual Host", 1238)
  .virtual()
  .addTags(
    TypeTags.BouncerHostMyth,
    TypeTags.BouncerHostMythAlterna,
    TypeTags.BouncerHostMythClassical
  );
export const ogreHost = new TOBHostType("Ogre Host", 1269)
  .physical()
  .addTags(
    TypeTags.BouncerHostMyth,
    TypeTags.BouncerHostMythAlterna,
    TypeTags.BouncerHostMythClassical
  );
export const ogreVirtualHost = new TOBHostType("Ogre Virtual Host", 1270)
  .virtual()
  .addTags(
    TypeTags.BouncerHostMyth,
    TypeTags.BouncerHostMythAlterna,
    TypeTags.BouncerHostMythClassical
  );
export const chimeraVirtualHost = new TOBHostType("Chimera Virtual Host", 1330)
  .virtual()
  .addTags(
    TypeTags.BouncerHostMyth,
    TypeTags.BouncerHostMythAlterna,
    TypeTags.BouncerHostMythClassical
  );
export const hadavaleHost = new TOBHostType("Hadavale Host", 1746)
  .physical()
  .addTags(TypeTags.BouncerHostPC, TypeTags.BouncerHostPCEscaped);
export const hadavaleVirtualHost = new TOBHostType("Hadavale Virtual Host", 1747)
  .virtual()
  .addTags(TypeTags.BouncerHostPC, TypeTags.BouncerHostPCEscaped);
