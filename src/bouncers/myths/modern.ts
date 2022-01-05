import { Group } from "../../common/group";
import { BouncerHostType, BouncerType, ScatterType, TypeTags } from "../../common/type";
import { skyland, treehouse } from "../../normal/destination";
import { aquamarine, citrine, pinkDiamond, topaz } from "../../normal/jewels";
import { greenie } from "../../normal/misc";
import { airMystery, electricMystery, fireMystery, waterMystery } from "../../normal/mystery";
import {
  virtualAsparagus,
  virtualBlack,
  virtualBlue,
  virtualBlueGreen,
  virtualBlueViolet,
  virtualBurntOrange,
  virtualCadetBlue,
  virtualCerulean,
  virtualDandelion,
  virtualGold,
  virtualGoldenrod,
  virtualGray,
  virtualGreenYellow,
  virtualIndigo,
  virtualOliveGreen,
  virtualOrange,
  virtualPacificBlue,
  virtualSilver,
  virtualSpringGreen,
  virtualTimberwolf,
  virtualYellow,
  virtualYellowGreen,
} from "../../normal/virtual";
import { bouncersGroup } from "../_index";

export const ModernMythGroup = new Group({ name: "Modern Myths" }).addParent(bouncersGroup);

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
export const poseidonHost = new ModernMythHostType("Poseidon Host")
  .physical()
  .addHostTypeOf(poseidon);
export const poseidonVirtualHost = new ModernMythHostType("Poseidon Virtual Host")
  .virtual()
  .addHostTypeOf(poseidon);

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
export const aphroditeHost = new ModernMythHostType("Aphrodite Host")
  .physical()
  .addHostTypeOf(aphrodite);
export const aphroditeVirtualHost = new ModernMythHostType("Aphrodite Virtual Host")
  .setIcons("aphrodite_virtual_host", "aphroditevirtualhost")
  .virtual()
  .addHostTypeOf(aphrodite);

// Hades
export const bident = new ModernMythScatterType("Bident").standalone();
export const firestarter = new ModernMythScatterType("Firestarter").standalone();
export const hades = new ModernMythType("Hades", 2994)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    greenie,
    fireMystery,
    virtualTimberwolf,
    virtualSilver,
    virtualGray,
    virtualBlack,
    virtualBlueViolet,
    virtualBlue,
    virtualCadetBlue,
    virtualBlueGreen,
    virtualPacificBlue,
    virtualCerulean,
    virtualIndigo,
    citrine
  )
  .scattererScatters(bident, firestarter);
export const hadesHost = new ModernMythHostType("Hades Host").physical().addHostTypeOf(hades);
export const hadesVirtualHost = new ModernMythHostType("Hades Virtual Host")
  .virtual()
  .addHostTypeOf(hades);

// Zeus
export const lightningBolt = new ModernMythScatterType("Lightning Bolt").standalone();
export const multimeter = new ModernMythScatterType("Multimeter").standalone();
export const zeus = new ModernMythType("Zeus", 3421)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    greenie,
    topaz,
    electricMystery,
    virtualAsparagus,
    virtualOliveGreen,
    virtualYellowGreen,
    virtualGreenYellow,
    virtualSpringGreen,
    virtualGold,
    virtualYellow,
    virtualGoldenrod,
    virtualDandelion,
    virtualOrange,
    virtualBurntOrange
  )
  .scattererScatters(lightningBolt, multimeter);
export const zeusHost = new ModernMythHostType("Zeus Host").physical().addHostTypeOf(zeus);
export const zeusVirtualHost = new ModernMythHostType("Zeus Virtual Host")
  .virtual()
  .addHostTypeOf(zeus);
