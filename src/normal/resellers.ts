import { Group } from "../common/group";
import { TypeTags, TypeHidden, Type, ScatterType } from "../common/type";
import { normalGroup } from "./_index";

export class ResellerType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([resellerGroup]).addTag(TypeTags.TypeReseller);
  }
}

export class ResellerScatterType extends ScatterType {
  override template(): this {
    super.template();
    return this.setGroup([resellerGroup]).addTag(TypeTags.TypeReseller);
  }
}

export const resellerGroup = new Group({ name: "Resellers" }).addParent(normalGroup);

export const munzeeMadnessReseller = new ResellerType("Munzee Madness Reseller", 510)
  .addIcon("munzeemadness")
  .physical();
export const geoStuffReseller = new ResellerType("GeoStuff Reseller", 511)
  .addIcon("geostuff")
  .physical()
  .addHidden(TypeHidden.Inventory);
export const geoHobbiesReseller = new ResellerType("GeoHobbies Reseller", 512)
  .addIcon("geohobbies")
  .physical()
  .addHidden(TypeHidden.Inventory);
export const dDCardsReseller = new ResellerType("DDCards Reseller", 513)
  .addIcon("ddcards")
  .physical()
  .addHidden(TypeHidden.Inventory);
export const negsReseller = new ResellerType("NEGS Reseller", 514).addIcon("negs").physical();
export const geoLoggersReseller = new ResellerType("GeoLoggers Reseller", 515)
  .addIcon("geologgers")
  .physical();
export const mMCocoaBeachReseller = new ResellerType("MM Cocoa Beach Reseller", 516)
  .physical()
  .addHidden(TypeHidden.Inventory);
export const rujaReseller = new ResellerType("Ruja Reseller", 550)
  .physical()
  .addHidden(TypeHidden.Inventory);
export const laupeReseller = new ResellerType("Laupe Reseller", 601)
  .physical()
  .addHidden(TypeHidden.Inventory);
export const scgsReseller = new ResellerType("SCGS Reseller", 696).physical();

export const scgsResellerPackage = new ResellerScatterType(
  "SCGS Reseller Package",
  2893
).standalone();
export const virtualSCGSReseller = new ResellerType("Virtual SCGS Reseller", 2889)
  .virtual()
  .scattererScatters(scgsResellerPackage);

export const goldNCoinResellerPackage = new ResellerScatterType(
  "Gold'n Coins Reseller Package",
  2890
)
  .addIcon("goldncoinsresellerpackage")
  .standalone();
export const virtualGoldNCoinsReseller = new ResellerType("Virtual Gold'n Coins Reseller", 2886)
  .addIcon("virtual_gold'n_coins_reseller")
  .virtual()
  .scattererScatters(goldNCoinResellerPackage);

export const negsResellerPackage = new ResellerScatterType(
  "NEGS Reseller Package",
  2891
).standalone();
export const virtualNEGSReseller = new ResellerType("Virtual NEGS Reseller", 2887)
  .virtual()
  .scattererScatters(negsResellerPackage);

export const geoLoggersResellerPackage = new ResellerScatterType(
  "GeoLoggers Reseller Package",
  2892
).standalone();
export const virtualGeoLoggersReseller = new ResellerType("Virtual GeoLoggers Reseller", 2888)
  .virtual()
  .scattererScatters(geoLoggersResellerPackage);
