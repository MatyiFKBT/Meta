import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";
import { TypeTags } from "../../common/type";
import { greenie } from "../../normal/misc";

export const n2020VisionGroup = new Year2020SeasonalGroup({
  name: "20/20 Vision",
  starts: "2020-01-02T15:00:00-06:00",
  ends: "2020-12-31T23:59:00-06:00",
});

export class N2020VisionType extends Year2020SeasonalBouncerType {
  template(): this {
    super.template();
    return this.setIcon(this.icons[0] + "2020vision");
  }
}

export const spectacularSpectacles = new N2020VisionType("Spectacular Spectacles", 2282)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(greenie);
export const theKingsSunglasses = new N2020VisionType("The King's Sunglasses", 2283)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const weldingGoggles = new N2020VisionType("Welding Goggles", 2284)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(greenie);
export const flipGlasses = new N2020VisionType("Flip Glasses", 2285)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const skiGoggles = new N2020VisionType("Ski Goggles", 2286)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(greenie);
export const theatreBinoculars = new N2020VisionType("Theatre Binoculars", 2287)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const jokeGlasses = new N2020VisionType("Joke Glasses", 2288)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(greenie);
export const n3DGlasses = new N2020VisionType("3D Glasses", 2289)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const viewfinder = new N2020VisionType("Viewfinder", 2290)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(greenie);
export const vRGoggles = new N2020VisionType("VR Goggles", 2291)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const jewelerLoupe = new N2020VisionType("Jeweler Loupe", 2292)
  .addIcon("jewelerloupe2020glasses")
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(greenie);
export const aviator = new N2020VisionType("Aviator", 2293)
  .addIcon("aviators2020vision")
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const summerShades = new N2020VisionType("Summer Shades", 2294)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(greenie);
export const partyGlasses = new N2020VisionType("Party Glasses", 2295)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const brokenGlasses = new N2020VisionType("Broken Glasses", 2296)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(greenie);
export const emeraldCityGlasses = new N2020VisionType("Emerald City Glasses", 2297)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const peaceGlasses = new N2020VisionType("Peace Glasses", 2298)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(greenie);
export const huntingGlasses = new N2020VisionType("Hunting Glasses", 2299)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const catEyeGlasses = new N2020VisionType("Cat-Eye Glasses", 2300)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(greenie);
export const disguiseGlasses = new N2020VisionType("Disguise Glasses", 2301)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const microscopeGlasses = new N2020VisionType("Microscope Glasses", 2302)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(greenie);
export const memeGlasses = new N2020VisionType("Meme Glasses", 2303)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const glowintheDarkGlasses = new N2020VisionType("Glow in the Dark Glasses", 2304)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(greenie);
export const eclipseGlasses = new N2020VisionType("Eclipse Glasses", 2305)
  .addGroup(n2020VisionGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
