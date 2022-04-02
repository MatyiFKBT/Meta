import { Group } from "../common/group";
import { BouncerHostType, BouncerType, TypeTags } from "../common/type";
import { skyland, treehouse } from "../normal/destination";
import { flatLou, flatMatt, flatRob } from "../normal/flats";
import { diamond, pinkDiamond } from "../normal/jewels";
import { shamrock } from "../normal/misc";
import { earthMystery, fireMystery, iceMystery, waterMystery } from "../normal/mystery";
import { poiAirport, poiSports, poiTransportation } from "../normal/places";
import { bouncersGroup } from "./_index";

export const FancyFlatGroup = new Group({ name: "Fancy Flats" }).addParent(bouncersGroup);

export class FancyFlatType extends BouncerType {
  override template(): this {
    super.template();
    return this.setGroup(FancyFlatGroup).addTag(TypeTags.BouncerFlat);
  }
}
export class FancyFlatHostType extends BouncerHostType {
  override template(): this {
    super.template();
    return this.setGroup(FancyFlatGroup).addTag(TypeTags.BouncerHostFlat);
  }
}

export const beachFlatRob = new FancyFlatType("Beach Flat Rob", 1705)
  .addTag(TypeTags.VirtualColourGreen)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.VirtualColourGreen))
  .addBouncerLandsOn(iceMystery)
  .addBouncerLandsOn(flatRob);
export const coldFlatRob = new FancyFlatType("Cold Flat Rob", 1706)
  .addTag(TypeTags.VirtualColourGreen)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.VirtualColourGreen))
  .addBouncerLandsOn(waterMystery)
  .addBouncerLandsOn(flatRob);
export const tuxFlatRob = new FancyFlatType("Tux Flat Rob", 1707)
  .addTag(TypeTags.VirtualColourGreen)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.VirtualColourGreen))
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeJewel))
  .addBouncerLandsOn(flatRob);

export const fancyFlatRobHost = new FancyFlatHostType("Fancy Flat Rob Host", 1708)
  .physical()
  .addBouncerHostType(beachFlatRob, coldFlatRob, tuxFlatRob);
export const fancyFlatRobVirtualHost = new FancyFlatHostType("Fancy Flat Rob Virtual Host", 1709)
  .virtual()
  .addBouncerHostType(beachFlatRob, coldFlatRob, tuxFlatRob);

export const matterUpFlatMatt = new FancyFlatType("Matt'er Up Flat Matt", 1985)
  .addIcon("matterupflatmatt")
  .addTag(TypeTags.VirtualColourRed)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.VirtualColourRed))
  .addBouncerLandsOn(poiSports, diamond)
  .addBouncerLandsOn(flatMatt);
export const faceOffFlatMatt = new FancyFlatType("Face-Off Flat Matt", 1986)
  .addTag(TypeTags.VirtualColourRed)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.VirtualColourRed))
  .addBouncerLandsOn(poiSports, iceMystery)
  .addBouncerLandsOn(flatMatt);
export const footyFlatMatt = new FancyFlatType("Footy Flat Matt", 1987)
  .addTag(TypeTags.VirtualColourRed)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.VirtualColourRed))
  .addBouncerLandsOn(poiSports, earthMystery)
  .addBouncerLandsOn(flatMatt);

export const fancyFlatMattHost = new FancyFlatHostType("Fancy Flat Matt Host", 1988)
  .physical()
  .addBouncerHostType(matterUpFlatMatt, faceOffFlatMatt, footyFlatMatt);
export const fancyFlatMattVirtualHost = new FancyFlatHostType("Fancy Flat Matt Virtual Host", 1989)
  .virtual()
  .addBouncerHostType(matterUpFlatMatt, faceOffFlatMatt, footyFlatMatt);

export const internationEllesFlatLou = new FancyFlatType("InternationElles Flat Lou", 2625)
  .addTag(TypeTags.VirtualColourLouPink)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.VirtualColourLouPink))
  .addBouncerLandsOn(shamrock, flatRob, poiAirport, poiTransportation, treehouse, skyland)
  .addBouncerLandsOn(flatLou);
export const teamGBFlatLou = new FancyFlatType("Team GB Flat Lou", 2626)
  .addTag(TypeTags.VirtualColourLouPink)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.VirtualColourLouPink))
  .addBouncerLandsOn(fireMystery, flatRob, poiAirport, poiTransportation, treehouse, skyland)
  .addBouncerLandsOn(flatLou);
export const polkaDotFlatLou = new FancyFlatType("Polka Dot Flat Lou", 2627)
  .addTag(TypeTags.VirtualColourLouPink)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.VirtualColourLouPink))
  .addBouncerLandsOn(pinkDiamond, flatRob, poiAirport, poiTransportation, treehouse, skyland)
  .addBouncerLandsOn(flatLou);

export const fancyFlatLouHost = new FancyFlatHostType("Fancy Flat Lou Host", 2628)
  .physical()
  .addBouncerHostType(internationEllesFlatLou, teamGBFlatLou, polkaDotFlatLou);
export const fancyFlatLouVirtualHost = new FancyFlatHostType("Fancy Flat Lou Virtual Host", 2629)
  .virtual()
  .addBouncerHostType(internationEllesFlatLou, teamGBFlatLou, polkaDotFlatLou);
