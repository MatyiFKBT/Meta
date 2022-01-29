import { Group } from "../common/group";
import { BouncerType, ScatterType, TypeHidden, TypeSet, TypeState, TypeTags } from "../common/type";
import { greenie } from "../normal/misc";
import { mystery } from "../normal/mystery";
import { briefcase, nightVisionGoggles } from "../normal/weapons";
import { bouncersGroup } from "./_index";

export const NomadGroup = new Group({ name: "Nomads" }).addParent(bouncersGroup);

export class NomadType extends BouncerType {
  override template(): this {
    super.template();
    return this.setGroup(NomadGroup).addTag(TypeTags.BouncerNomad);
  }
}

export class NomadScatterType extends ScatterType {
  override template(): this {
    super.template();
    return this.setGroup(NomadGroup);
  }
}

export const nomad = new NomadType("Nomad", 296).addBouncerLandsOn(greenie);
export const nomadVirtual = new NomadType("Nomad Virtual", 297).addBouncerLandsOn(type =>
  type.hasTags(TypeTags.TypeVirtual)
);
export const nomadMystery = new NomadType("Nomad Mystery", 521).addBouncerLandsOn(mystery);
export const jewelThiefNomad = new NomadType("Jewel Thief Nomad", 822).addBouncerLandsOn(
  type => type.hasTags(TypeTags.TypeJewel) && type.state === TypeState.Physical
);
export const bellhopNomad = new NomadType("Bellhop Nomad", 823).addBouncerLandsOn(
  type =>
    type.hasTags(TypeTags.TypeDestination) &&
    type.hasTags(TypeTags.DestinationRooms) &&
    type.state === TypeState.Physical
);
export const pirateNomad = new NomadType("Pirate Nomad", 824).addBouncerLandsOn(type =>
  type.hasTags(TypeTags.TypeReseller)
);
export const warriorNomad = new NomadType("Warrior Nomad", 999).addBouncerLandsOn(
  type => type.hasTags(TypeTags.TypeWeaponClan) && type.state === TypeState.Physical
);
export const travelerNomad = new NomadType("Traveler Nomad", 1580).addBouncerLandsOn(type =>
  type.hasTags(TypeTags.TypePOI)
);
export const seasonalNomad = new NomadType("Seasonal Nomad", 1637).addBouncerLandsOn(
  type => type.hasTags(TypeTags.TypeSeasonal) && type.state === TypeState.Physical
);
export const virtualFlatNomad = new NomadType("Virtual Flat Nomad", 1691).addBouncerLandsOn(
  type => type.hasTags(TypeTags.TypeFlat) && type.state === TypeState.Virtual
);
export const coupeChampionNomad = new NomadType("Coupe Champion Nomad", 2074).addBouncerLandsOn(
  greenie
);

export const coupeChampions = new TypeSet()
  .add(
    new Array(23)
      .fill(0)
      .map((_, i) => i + 1)
      .map(i => new NomadType(`Coupe Champions #${i}`, 2075 + i - 1))
  )
  .each(type => type.addHidden(TypeHidden.Bouncers).addBouncerLandsOn(greenie));

export const virtualZeeCretAgentNomad = new NomadType(
  "Virtual ZeeCret Agent Nomad",
  2641
).addBouncerLandsOn(nightVisionGoggles);
export const zeeCretAgentNomad = new NomadType("ZeeCret Agent Nomad", 2640).addBouncerLandsOn(
  briefcase
);
export const virtualGamingNomad = new NomadType("Virtual Gaming Nomad", 2658).addBouncerLandsOn(
  type =>
    type.hasTags(TypeTags.TypeGaming) &&
    !type.hasTags(TypeTags.Scatter) &&
    type.state === TypeState.Virtual
);
export const gamingNomad = new NomadType("Gaming Nomad", 2657).addBouncerLandsOn(
  type =>
    type.hasTags(TypeTags.TypeGaming) &&
    !type.hasTags(TypeTags.Scatter) &&
    type.state === TypeState.Physical
);
export const virtualJewelThiefNomad = new NomadType(
  "Virtual Jewel Thief Nomad",
  2654
).addBouncerLandsOn(type => type.hasTags(TypeTags.TypeJewel) && type.state === TypeState.Virtual);
export const virtualWarriorNomad = new NomadType("Virtual Warrior Nomad", 2656).addBouncerLandsOn(
  type => type.hasTags(TypeTags.TypeWeaponClan) && type.state === TypeState.Virtual
);
export const virtualBellhopNomad = new NomadType("Virtual Bellhop Nomad").addBouncerLandsOn(
  type => type.hasTags(TypeTags.TypeDestination) && type.state === TypeState.Virtual
);

export const killerMask = new NomadScatterType("Killer Mask", 3242).standalone();
export const jason4ZeesNomad = new NomadType("Jason 4Zees Nomad", 3241)
  .addIcon("jason4zees")
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeFlat) && type.state === TypeState.Virtual);
