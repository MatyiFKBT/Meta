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
export const squashedSpyderbot = new MechType("Squashed Spyderbot", 2590).addHidden(
  TypeHidden.Bouncers
);
export const lASERShark = new MechType("L.A.S.E.R. Shark", 2875)
  .setIcon("lasershark")
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeMysteryElemental),
    type => type.hasTags(TypeTags.TypeWeaponZeeops)
  );
export const goldenLASERShark = new MechType("Golden L.A.S.E.R. Shark", 2954)
  .setIcon("goldenlasershark")
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeMysteryElemental),
    type => type.hasTags(TypeTags.TypeWeaponZeeops),
    premium
  );
export const arcticLASERShark = new MechType("Arctic L.A.S.E.R. Shark", 3051)
  .setIcon("arcticlasershark")
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeMysteryElemental),
    type => type.hasTags(TypeTags.TypeWeaponZeeops),
    joystickPhysical,
    joystickVirtual
  );
export const geoLoggersRUMBot = new MechType("GeoLoggers RUMBot", 3101).addBouncerLandsOn(
  greenie,
  type => type.hasTags(TypeTags.TypeReseller),
  type => type.meta.evolution?.base === coin.id,
  type => type.hasTags(TypeTags.TypeVirtual),
  skyland,
  treehouse
);
export const goldnCoinsRUMBot = new MechType("Gold'n Coins RUMBot", 3100).addBouncerLandsOn(
  greenie,
  type => type.hasTags(TypeTags.TypeReseller),
  type => type.meta.evolution?.base === coin.id,
  type => type.hasTags(TypeTags.TypeVirtual),
  skyland,
  treehouse
);
export const nEGSRUMBot = new MechType("NEGS RUMBot", 3102).addBouncerLandsOn(
  greenie,
  type => type.hasTags(TypeTags.TypeReseller),
  type => type.meta.evolution?.base === coin.id,
  type => type.hasTags(TypeTags.TypeVirtual),
  skyland,
  treehouse
);
export const sCGSRUMBot = new MechType("SCGS RUMBot", 3103).addBouncerLandsOn(
  greenie,
  type => type.hasTags(TypeTags.TypeReseller),
  type => type.meta.evolution?.base === coin.id,
  type => type.hasTags(TypeTags.TypeVirtual),
  skyland,
  treehouse
);
export const mechaniC4K3 = new MechType("MechaniC4K3", 3124);
export const crumbledMechaniC4K3 = new MechType("Crumbled MechaniC4K3", 3125).addHidden(
  TypeHidden.Bouncers
);

export const sC4RAB = new MechScatterType("SC4RAB").standalone();
export const s4RC0PH4GUS = new MechType("S4RC0PH4GUS", 3170);
export const mUMM33 = new MechType("MUMM33", 3171).scattererScatters(sC4RAB);
export const mONK3Y = new MechType("MONK3Y", 3307);
export const priM8 = new MechType("PriM8", 3308);
export const kiNGC0G = new MechType("KiNG C0G", 3309);
export const kiNGC0GCrushed = new MechType("KiNG C0G Crushed", 3310);

export const botwurst = new MechScatterType("Botwurst", 3319).standalone();
export const steinBot = new MechType("SteinBot", 3317).scattererScatters(botwurst);
export const emptySteinBot = new MechType("Empty SteinBot")
  .setIcon("steinbotempty")
  .addHidden(TypeHidden.Bouncers);

export const dronut = new MechScatterType("Dronut", 3322).standalone();
export const carafeBorg = new MechType("CarafeBorg", 3320).scattererScatters(dronut);
export const emptyCarafeBorg = new MechType("Empty CarafeBorg", 3321)
  .setIcon("carafeborgempty")
  .addHidden(TypeHidden.Bouncers);

export const flamingPumpkin = new MechScatterType("Flaming Pumpkin", 3325).standalone();
export const h3ADL3SSH0RS3MAN = new MechType("H3ADL3SS H0RS3MAN", 3323).scattererScatters(
  flamingPumpkin
);
export const smashedH3ADL3SSH0RS3MAN = new MechType("Smashed H3ADL3SS H0RS3MAN", 3324)
  .setIcon("h3adl3ssh0rs3mansmashed")
  .addHidden(TypeHidden.Bouncers);

export const lOC04LMOTIVE = new MechType("LOC04LMOTIVE", 3419);
export const lOC04LMOTIVEOverheated = new MechType("LOC04LMOTIVE Overheated", 3420);

export const wR3NCH = new MechScatterType("WR3NCH", 3522).standalone();
export const gWRENCH = new MechType("GWRENCH", 3520).scattererScatters(wR3NCH);
export const gWRENCHCombusted = new MechType("GWRENCH Combusted", 3521).addHidden(
  TypeHidden.Bouncers
);

export const n1NJ4ST4R = new MechScatterType("N1NJ4 ST4R", 3416).standalone();
export const tR33T0PP3R = new MechType("TR33 T0PP3R", 3414).scattererScatters(n1NJ4ST4R);
export const tR33T0PP3RTakeoff = new MechType("TR33 T0PP3R Takeoff", 3415).addHidden(
  TypeHidden.Bouncers
);

export const sn0wBomb = new MechScatterType("SN0W Bomb", 3572).standalone();
export const abominableSN0WMachine = new MechType(
  "Abominable SN0W Machine",
  3570
).scattererScatters(sn0wBomb);
export const abominableSN0WMachineFrostbitten = new MechType(
  "Abominable SN0W Machine Frostbitten"
).addHidden(TypeHidden.Bouncers);
