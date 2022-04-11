import { Group } from "../common/group";
import { BouncerType, TypeState, TypeTags } from "../common/type";
import { skyland, treehouse } from "../normal/destination";
import { joystickPhysical, joystickVirtual } from "../normal/gaming";
import { sapphire } from "../normal/jewels";
import { greenie, shamrock } from "../normal/misc";
import {
  fireMystery,
  iceMystery,
  earthMystery,
  waterMystery,
  airMystery,
  electricMystery,
  voidMystery,
  mystery,
} from "../normal/mystery";
import { virtualYellow, virtualGoldenrod, virtualDandelion } from "../normal/virtual";
import { briefcase, catapult, crossbow, theHammer } from "../normal/weapons";
import { otherBouncersGroup } from "./_index";

export const RetiredBouncerGroup = new Group({ name: "Retired Bouncers" }).addParent(
  otherBouncersGroup
);

export class RetiredBouncerType extends BouncerType {
  override template(): this {
    super.template();
    return this.setGroup(RetiredBouncerGroup).addTag(TypeTags.BouncerRetired);
  }
}

export const retiredUnicorn = new RetiredBouncerType("Retired Unicorn", 1535)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerRetired)
  .addBouncerLandsOn(greenie, shamrock);
export const retiredLeprechaun = new RetiredBouncerType("Retired Leprechaun", 1536)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerRetired)
  .addBouncerLandsOn(greenie, shamrock);
export const retiredDragon = new RetiredBouncerType("Retired Dragon", 1537)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerRetired)
  .addBouncerLandsOn(greenie, fireMystery);
export const retiredYeti = new RetiredBouncerType("Retired Yeti", 1538)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerRetired)
  .addBouncerLandsOn(greenie, iceMystery);
export const retiredFaun = new RetiredBouncerType("Retired Faun", 1539)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerRetired)
  .addBouncerLandsOn(greenie, earthMystery);
export const retiredHydra = new RetiredBouncerType("Retired Hydra", 1540)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerRetired)
  .addBouncerLandsOn(greenie, waterMystery);
export const retiredMermaid = new RetiredBouncerType("Retired Mermaid", 1541)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerRetired)
  .addBouncerLandsOn(
    greenie,
    waterMystery,
    type => type.hasTags(TypeTags.TypeJewel) && type.state === TypeState.Physical
  );
export const retiredPegasus = new RetiredBouncerType("Retired Pegasus", 1542)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerRetired)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    airMystery,
    electricMystery,
    voidMystery
  );
export const retiredCyclops = new RetiredBouncerType("Retired Cyclops", 1543)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerRetired)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeJewel) && type.munzee_id !== 148);
export const retiredFairy = new RetiredBouncerType("Retired Fairy", 2051)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerRetired)
  .addBouncerLandsOn(greenie, airMystery, mystery);
export const retiredBanshee = new RetiredBouncerType("Retired Banshee", 2052)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerRetired)
  .addBouncerLandsOn(
    greenie,
    shamrock,
    airMystery,
    type => type.hasTags(TypeTags.VirtualColourBlack),
    type => type.hasTags(TypeTags.VirtualColourGreen)
  );
export const zombieTuli = new RetiredBouncerType("Zombie Tuli", 2053)
  .addTags(TypeTags.BouncerPC, TypeTags.BouncerPCZombie, TypeTags.BouncerRetired)
  .addBouncerLandsOn(greenie, fireMystery);
export const zombieVesi = new RetiredBouncerType("Zombie Vesi", 2054)
  .addTags(TypeTags.BouncerPC, TypeTags.BouncerPCZombie, TypeTags.BouncerRetired)
  .addBouncerLandsOn(greenie, waterMystery);
export const zombieMuru = new RetiredBouncerType("Zombie Muru", 2055)
  .addTags(TypeTags.BouncerPC, TypeTags.BouncerPCZombie, TypeTags.BouncerRetired)
  .addBouncerLandsOn(greenie, earthMystery);
export const zombieElekter = new RetiredBouncerType("Zombie Elekter", 2819)
  .addTags(TypeTags.BouncerPC, TypeTags.BouncerPCZombie, TypeTags.BouncerRetired)
  .addBouncerLandsOn(skyland, type => type.hasTags(TypeTags.TypeVirtual), electricMystery);
export const zombiePuffle = new RetiredBouncerType("Zombie Puffle", 2822)
  .addTags(TypeTags.BouncerPC, TypeTags.BouncerPCZombie, TypeTags.BouncerRetired)
  .addBouncerLandsOn(skyland, type => type.hasTags(TypeTags.TypeVirtual), airMystery);
export const zombieMagnetus = new RetiredBouncerType("Zombie Magnetus", 2820)
  .addTags(TypeTags.BouncerPC, TypeTags.BouncerPCZombie, TypeTags.BouncerRetired)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    greenie,
    airMystery,
    type => type.hasTags(TypeTags.VirtualColourBlue),
    type => type.hasTags(TypeTags.VirtualColourRed),
    waterMystery,
    joystickVirtual,
    joystickPhysical,
    virtualYellow,
    virtualGoldenrod,
    virtualDandelion
  );
export const zombiePimedus = new RetiredBouncerType("Zombie Pimedus", 2821)
  .addTags(TypeTags.BouncerPC, TypeTags.BouncerPCZombie, TypeTags.BouncerRetired)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    greenie,
    type => type.hasTags(TypeTags.TypeReseller),
    type => type.hasTags(TypeTags.TypeZodiacChinese),
    sapphire,
    briefcase,
    theHammer,
    crossbow,
    catapult
  );
export const retiredNymph = new RetiredBouncerType("Retired Nymph", 2818)
  .addTags(TypeTags.BouncerMyth, TypeTags.BouncerRetired)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    greenie,
    earthMystery,
    type => type.hasTags(TypeTags.VirtualColourBrown),
    type => type.hasTags(TypeTags.VirtualColourBlack),
    type => type.hasTags(TypeTags.VirtualColourGreen)
  );
export const phantomFlatRob = new RetiredBouncerType("Phantom Flat Rob", 2817).addTags(
  TypeTags.BouncerPC,
  TypeTags.BouncerFlatPhantom,
  TypeTags.BouncerRetired
);
export const phantomFlatMatt = new RetiredBouncerType("Phantom Flat Matt", 2816).addTags(
  TypeTags.BouncerPC,
  TypeTags.BouncerFlatPhantom,
  TypeTags.BouncerRetired
);
export const phantomFlatLou = new RetiredBouncerType("Phantom Flat Lou").addTags(
  TypeTags.BouncerPC,
  TypeTags.BouncerFlatPhantom,
  TypeTags.BouncerRetired
);
