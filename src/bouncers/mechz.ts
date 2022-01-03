import { Group } from "../common/group";
import { BouncerType, ScatterType, TypeHidden, TypeTags } from "../common/type";
import { coin } from "../evolutions/reseller";
import { skyland, treehouse } from "../normal/destination";
import { joystickPhysical, joystickVirtual } from "../normal/gaming";
import { premium, greenie } from "../normal/misc";
import { bouncersGroup } from "./_index";

export const MechGroup = new Group({ name: "MechZ" }).addParent(bouncersGroup);

export class MechType extends BouncerType {
  override template(): this {
    super.template();
    return this.setGroup(MechGroup).addTag(TypeTags.BouncerTPOB);
  }
}
export class MechScatterType extends ScatterType {
  override template(): this {
    super.template();
    return this.setGroup(MechGroup);
  }
}

export const spyderbot = new MechType("Spyderbot", 2589);
export const squashedSpyderbot = new MechType("Squashed Spyderbot").addHidden(TypeHidden.Bouncers);
export const lASERShark = new MechType("L.A.S.E.R. Shark", 2875)
  .setIcon("lasershark")
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeMysteryElemental),
    type => type.hasTags(TypeTags.TypeWeaponZeeops)
  );
export const goldenLASERShark = new MechType("Golden L.A.S.E.R. Shark")
  .setIcon("goldenlasershark")
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeMysteryElemental),
    type => type.hasTags(TypeTags.TypeWeaponZeeops),
    premium
  );
export const arcticLASERShark = new MechType("Arctic L.A.S.E.R. Shark")
  .setIcon("arcticlasershark")
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeMysteryElemental),
    type => type.hasTags(TypeTags.TypeWeaponZeeops),
    joystickPhysical,
    joystickVirtual
  );
export const geoLoggersRUMBot = new MechType("GeoLoggers RUMBot").addBouncerLandsOn(
  greenie,
  type => type.hasTags(TypeTags.TypeReseller),
  type => type.meta.evolution_base === coin.id,
  type => type.hasTags(TypeTags.TypeVirtual),
  skyland,
  treehouse
);
export const goldnCoinsRUMBot = new MechType("Gold'n Coins RUMBot").addBouncerLandsOn(
  greenie,
  type => type.hasTags(TypeTags.TypeReseller),
  type => type.meta.evolution_base === coin.id,
  type => type.hasTags(TypeTags.TypeVirtual),
  skyland,
  treehouse
);
export const nEGSRUMBot = new MechType("NEGS RUMBot").addBouncerLandsOn(
  greenie,
  type => type.hasTags(TypeTags.TypeReseller),
  type => type.meta.evolution_base === coin.id,
  type => type.hasTags(TypeTags.TypeVirtual),
  skyland,
  treehouse
);
export const sCGSRUMBot = new MechType("SCGS RUMBot").addBouncerLandsOn(
  greenie,
  type => type.hasTags(TypeTags.TypeReseller),
  type => type.meta.evolution_base === coin.id,
  type => type.hasTags(TypeTags.TypeVirtual),
  skyland,
  treehouse
);
export const mechaniC4K3 = new MechType("MechaniC4K3");
export const crumbledMechaniC4K3 = new MechType("Crumbled MechaniC4K3").addHidden(
  TypeHidden.Bouncers
);

export const sC4RAB = new MechScatterType("SC4RAB").standalone();
export const s4RC0PH4GUS = new MechType("S4RC0PH4GUS");
export const mUMM33 = new MechType("MUMM33").scattererScatters(sC4RAB);
export const mONK3Y = new MechType("MONK3Y");
export const priM8 = new MechType("PriM8");
export const kiNGC0G = new MechType("KiNG C0G");
export const kiNGC0GCrushed = new MechType("KiNG C0G Crushed");

export const botwurst = new MechScatterType("Botwurst").standalone();
export const steinBot = new MechType("SteinBot").scattererScatters(botwurst);
export const emptySteinBot = new MechType("Empty SteinBot")
  .setIcon("steinbotempty")
  .addHidden(TypeHidden.Bouncers);

export const dronut = new MechScatterType("Dronut").standalone();
export const carafeBorg = new MechType("CarafeBorg").scattererScatters(dronut);
export const emptyCarafeBorg = new MechType("Empty CarafeBorg")
  .setIcon("carafeborgempty")
  .addHidden(TypeHidden.Bouncers);

export const flamingPumpkin = new MechScatterType("Flaming Pumpkin").standalone();
export const h3ADL3SSH0RS3MAN = new MechType("H3ADL3SS H0RS3MAN").scattererScatters(flamingPumpkin);
export const smashedH3ADL3SSH0RS3MAN = new MechType("Smashed H3ADL3SS H0RS3MAN")
  .setIcon("h3adl3ssh0rs3mansmashed")
  .addHidden(TypeHidden.Bouncers);

export const lOC04LMOTIVE = new MechType("LOC04LMOTIVE");
export const lOC04LMOTIVEOverheated = new MechType("LOC04LMOTIVE Overheated");

export const wR3NCH = new MechScatterType("WR3NCH").standalone();
export const gWRENCH = new MechType("GWRENCH").scattererScatters(wR3NCH);
export const gWRENCHCombusted = new MechType("GWRENCH Combusted");

export const n1NJ4ST4R = new MechScatterType("N1NJ4 ST4R").standalone();
export const tR33T0PP3R = new MechType("TR33 T0PP3R").scattererScatters(n1NJ4ST4R);
export const tR33T0PP3RTakeoff = new MechType("TR33 T0PP3R Takeoff");
