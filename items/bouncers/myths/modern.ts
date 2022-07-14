import { Group } from "../../../src/items/group";
import { BouncerHostType, BouncerType, ScatterType, TypeTags } from "../../../src/items/type";
import { skyland, treehouse } from "../../normal/destination";
import { aquamarine, citrine, pinkDiamond, topaz } from "../../normal/jewels";
import { greenie } from "../../normal/misc";
import { airMystery, electricMystery, fireMystery, waterMystery } from "../../normal/mystery";
import { mythsGroup } from "../_index";
import { CZReference } from "../../../src/czProperties";

export const ModernMythGroup = new Group({ name: "Modern Myths" }).addParent(mythsGroup);

export class ModernMythType extends BouncerType {
  override template(): this {
    super.template();
    return this.setGroup(ModernMythGroup).addTag(TypeTags.BouncerMyth, TypeTags.BouncerMythModern);
  }
}

export class ModernMythScatterType extends ScatterType {
  override template(): this {
    super.template();
    return this.setGroup(ModernMythGroup);
  }
}

export class ModernMythHostType extends BouncerHostType {
  override template(): this {
    super.template();
    return this.setGroup(ModernMythGroup).addTag(
      TypeTags.BouncerHostMyth,
      TypeTags.BouncerHostMythModern
    );
  }
}

// Poseidon
export const trident = new ModernMythScatterType("Trident", 2527).standalone();
export const lifebuoy = new ModernMythScatterType("Lifebuoy", 2528).standalone();
export const poseidon = new ModernMythType("Poseidon", 2524)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    greenie,
    waterMystery,
    type => type.hasTags(TypeTags.VirtualColourBlue),
    aquamarine
  )
  .scattererScatters(trident, lifebuoy);
export const poseidonHost = new ModernMythHostType("Poseidon Host", 2525)
  .physical()
  .addBouncerHostType(poseidon);
export const poseidonVirtualHost = new ModernMythHostType("Poseidon Virtual Host", 2526)
  .virtual()
  .addBouncerHostType(poseidon);

// Aphrodite
export const glasses = new ModernMythScatterType("Glasses", 2579).standalone();
export const shellPhone = new ModernMythScatterType("Shell-Phone", 2580).standalone();
export const aphrodite = new ModernMythType("Aphrodite", 2576)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    greenie,
    airMystery,
    type => type.hasTags(TypeTags.VirtualColourPink),
    pinkDiamond
  )
  .scattererScatters(glasses, shellPhone);
export const aphroditeHost = new ModernMythHostType("Aphrodite Host", 2577)
  .physical()
  .addBouncerHostType(aphrodite);
export const aphroditeVirtualHost = new ModernMythHostType("Aphrodite Virtual Host", 2578)
  .setIcons("aphrodite_virtual_host", "aphroditevirtualhost")
  .virtual()
  .addBouncerHostType(aphrodite);

// Hades
export const bident = new ModernMythScatterType("Bident", 2997).standalone();
export const firestarter = new ModernMythScatterType("Firestarter", 2998).standalone();
export const hades = new ModernMythType("Hades", 2994)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    greenie,
    fireMystery,
    new CZReference("Virtual Timberwolf"),
    new CZReference("Virtual Silver"),
    new CZReference("Virtual Gray"),
    new CZReference("Virtual Black"),
    new CZReference("Virtual Blue Violet"),
    new CZReference("Virtual Blue"),
    new CZReference("Virtual Cadet Blue"),
    new CZReference("Virtual Blue Green"),
    new CZReference("Virtual Pacific Blue"),
    new CZReference("Virtual Cerulean"),
    new CZReference("Virtual Indigo"),
    citrine
  )
  .scattererScatters(bident, firestarter);
export const hadesHost = new ModernMythHostType("Hades Host", 2995)
  .physical()
  .addBouncerHostType(hades);
export const hadesVirtualHost = new ModernMythHostType("Hades Virtual Host", 2996)
  .virtual()
  .addBouncerHostType(hades);

// Zeus
export const lightningBolt = new ModernMythScatterType("Lightning Bolt", 3422).standalone();
export const multimeter = new ModernMythScatterType("Multimeter", 3423).standalone();
export const zeus = new ModernMythType("Zeus", 3421)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    greenie,
    topaz,
    electricMystery,
    new CZReference("Virtual Asparagus"),
    new CZReference("Virtual Olive Green"),
    new CZReference("Virtual Yellow Green"),
    new CZReference("Virtual Green Yellow"),
    new CZReference("Virtual Spring Green"),
    new CZReference("Virtual Gold"),
    new CZReference("Virtual Yellow"),
    new CZReference("Virtual Goldenrod"),
    new CZReference("Virtual Dandelion"),
    new CZReference("Virtual Orange"),
    new CZReference("Virtual Burnt Orange")
  )
  .scattererScatters(lightningBolt, multimeter);
export const zeusHost = new ModernMythHostType("Zeus Host", 3424)
  .physical()
  .addBouncerHostType(zeus);
export const zeusVirtualHost = new ModernMythHostType("Zeus Virtual Host", 3425)
  .virtual()
  .addBouncerHostType(zeus);
