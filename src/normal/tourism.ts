import { Group } from "../common/group";
import { TypeTags, Type, TypeHidden } from "../common/type";
import { normalGroup } from "./_index";

export class TourismType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([tourismGroup])
      .addTags(TypeTags.TypeTourism, TypeTags.TypeUnique)
      .addHidden(TypeHidden.Inventory, TypeHidden.Deploy)
      .virtual();
  }
}

export const tourismGroup = new Group({ name: "Tourism" }).addParent(normalGroup);

export const internationElles = new TourismType("InternationElles", 2046).physical();
export const internationEllesVirtual = new TourismType("InternationElles Virtual", 2047);
export const tXHistoricalLocation = new TourismType("TX Historical Location", 682);
export const fLHistoricalLocation = new TourismType("FL Historical Location", 1474);
export const cAHistoricalLocation = new TourismType("CA Historical Location", 1475);
export const worldHeritageHistoricalLocation = new TourismType(
  "World Heritage Historical Location",
  1489
);
export const greatBritainIconicLocation = new TourismType("Great Britain Iconic Location", 1552);
export const czechRepublicIconicLocation = new TourismType("Czech Republic Iconic Location", 1767);
export const slovakiaIconicLocation = new TourismType("Slovakia Iconic Location", 1768);
export const washingtonIconicLocation = new TourismType("Washington Iconic Location", 1831);
export const newHampshireIconicLocation = new TourismType("New Hampshire Iconic Location", 2196);
export const newMexicoIconicLocation = new TourismType("New Mexico Iconic Location", 2197);
export const minnesotaIconicLocation = new TourismType("Minnesota Iconic Location", 2587);
export const australiaIconicLocation = new TourismType("Australia Iconic Location", 1744);
export const mHQFlatMatt = new TourismType("MHQ Flat Matt", 1006);
export const mHQFlatRob = new TourismType("MHQ Flat Rob", 1007);
export const towerBridgeFlatLou = new TourismType("Tower Bridge Flat Lou", 1343);
export const gettysburgFlatHammock = new TourismType("Gettysburg Flat Hammock", 1582);

export const getFitMunzeeTrail = new TourismType("Get Fit Munzee Trail", 1115);
export const garfieldStatue = new TourismType("Garfield Statue", 1019);
export const coexist = new TourismType("Coexist", 216);
export const waywardNation = new TourismType("Wayward Nation", 46);
export const whompNation = new TourismType("Whomp Nation", 47);
export const iceBucket = new TourismType("Ice Bucket", 146);
