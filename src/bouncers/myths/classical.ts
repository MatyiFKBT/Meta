import { Group } from "../../common/group";
import { BouncerHostType, BouncerType, TypeTags } from "../../common/type";
import { lionCub } from "../../evolutions/education";
import { farmer } from "../../evolutions/farm";
import { skyland, treehouse } from "../../normal/destination";
import { rps } from "../../normal/gaming";
import { greenie, shamrock } from "../../normal/misc";
import {
  earthMystery,
  waterMystery,
  airMystery,
  electricMystery,
  voidMystery,
  iceMystery,
  fireMystery,
} from "../../normal/mystery";
import { bouncersGroup } from "../_index";

export const ClassicalMythGroup = new Group({ name: "Classical Myths" }).addParent(bouncersGroup);

export class ClassicalMythType extends BouncerType {
  override template(): this {
    super.template();
    return this.setGroup(ClassicalMythGroup).addTag(
      TypeTags.BouncerMyth,
      TypeTags.BouncerMythClassical
    );
  }
}

export class ClassicalMythHostType extends BouncerHostType {
  override template(): this {
    super.template();
    return this.setGroup(ClassicalMythGroup).addTag(
      TypeTags.BouncerHostMyth,
      TypeTags.BouncerHostMythClassical
    );
  }
}

// Faun
export const faun = new ClassicalMythType("Faun", 853).addBouncerLandsOn(
  treehouse,
  greenie,
  earthMystery
);
export const centaurFaun = new ClassicalMythType("Centaur Faun", 1997)
  .addTag(TypeTags.BouncerMythVariant)
  .addBouncerLandsOn(skyland, treehouse, greenie, earthMystery, type =>
    type.hasTags(TypeTags.TypeWeaponClan)
  );
export const krampusFaun = new ClassicalMythType("Krampus Faun", 1998)
  .addTag(TypeTags.BouncerMythVariant)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    greenie,
    earthMystery,
    iceMystery,
    type => type.meta.evolution_base === farmer.id
  );
export const faunHost = new ClassicalMythHostType("Faun Host", 854)
  .physical()
  .addHostTypeOf(faun, centaurFaun, krampusFaun);
export const faunVirtualHost = new ClassicalMythHostType("Faun Virtual Host", 2000)
  .virtual()
  .addHostTypeOf(faun, centaurFaun, krampusFaun);

// Hydra
export const hydra = new ClassicalMythType("Hydra", 953).addBouncerLandsOn(
  treehouse,
  greenie,
  waterMystery
);
export const cerberusHydra = new ClassicalMythType("Cerberus Hydra", 2252)
  .addTag(TypeTags.BouncerMythVariant)
  .addBouncerLandsOn(treehouse, greenie, waterMystery, fireMystery);
export const cthulhuHydra = new ClassicalMythType("Cthulhu Hydra", 2253)
  .addTag(TypeTags.BouncerMythVariant)
  .addBouncerLandsOn(skyland, treehouse, greenie, waterMystery, airMystery, voidMystery);
export const hydraHost = new ClassicalMythHostType("Hydra Host", 954)
  .physical()
  .addHostTypeOf(hydra, cerberusHydra, cthulhuHydra);
export const hydraVirtualHost = new ClassicalMythHostType("Hydra Virtual Host")
  .virtual()
  .addHostTypeOf(hydra, cerberusHydra, cthulhuHydra);

// Pegasus
export const pegasus = new ClassicalMythType("Pegasus", 1100).addBouncerLandsOn(
  skyland,
  type => type.hasTags(TypeTags.TypeVirtual),
  airMystery,
  electricMystery,
  voidMystery
);
export const griffinPegasus = new ClassicalMythType("Griffin Pegasus", 1995)
  .addTag(TypeTags.BouncerMythVariant)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    greenie,
    type => type.hasTags(TypeTags.TypeJewel),
    airMystery,
    type => type.meta.evolution_base === lionCub.id
  );
export const alicornPegasus = new ClassicalMythType("Alicorn Pegasus", 1996)
  .addTag(TypeTags.BouncerMythVariant)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    type => type.hasTags(TypeTags.TypeVirtual),
    airMystery,
    shamrock
  );
export const nightmarePegasus = new ClassicalMythType("Nightmare Pegasus").addTag(
  TypeTags.BouncerMythVariant
);
export const pegasusHost = new ClassicalMythHostType("Pegasus Host", 1101)
  .virtual()
  .addHostTypeOf(pegasus, griffinPegasus, alicornPegasus, nightmarePegasus);
export const pegasusPhysicalHost = new ClassicalMythHostType("Pegasus Physical Host", 1999)
  .physical()
  .addHostTypeOf(pegasus, griffinPegasus, alicornPegasus, nightmarePegasus);

// Cyclops
export const cyclops = new ClassicalMythType("Cyclops", 1168).addBouncerLandsOn(
  skyland,
  treehouse,
  type => type.hasTags(TypeTags.TypeJewel) && type.munzee_id !== 148
);
export const minotaurCyclops = new ClassicalMythType("Minotaur Cyclops", 2477)
  .addTag(TypeTags.BouncerMythVariant)
  .addBouncerLandsOn(
    treehouse,
    greenie,
    type => type.hasTags(TypeTags.TypeJewel),
    type => type.hasTags(TypeTags.TypeWeaponClan),
    rps
  );
export const balorCyclops = new ClassicalMythType("Balor Cyclops", 2478)
  .addTag(TypeTags.BouncerMythVariant)
  .addBouncerLandsOn(treehouse, greenie, shamrock, electricMystery);
export const cyclopsHost = new ClassicalMythHostType("Cyclops Host", 1169)
  .physical()
  .addHostTypeOf(cyclops, minotaurCyclops, balorCyclops);
export const cyclopsVirtualHost = new ClassicalMythHostType("Cyclops Virtual Host", 1170)
  .virtual()
  .addHostTypeOf(cyclops, minotaurCyclops, balorCyclops);
