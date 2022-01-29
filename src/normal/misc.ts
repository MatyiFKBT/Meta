import { Group } from "../common/group";
import { TypeTags, TypeHidden, Type, ScatterType } from "../common/type";
import { normalGroup } from "./_index";

export class MiscType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([miscGroup]);
  }
}

export class MiscScatterType extends ScatterType {
  override template(): this {
    super.template();
    return this.setGroup([miscGroup]);
  }
}

export const miscGroup = new Group({ name: "Misc", human_id: "misc" }).addParent(normalGroup);

export const greenie = new MiscType("Greenie", 0)
  .setIcons("munzee", "greenie", "normal", "standard")
  .physical(); /*.points({"deploy":19,"capture":20,"capon":11})*/
export const premium = new MiscType(
  "Premium",
  13
).physical(); /*.points({"deploy":200,"capon":50,"capture":50})*/
export const social = new MiscType("Social", 32)
  .locationless()
  .addTag(TypeTags.TypeSocial)
  .addHidden(TypeHidden.Inventory);
export const eventPin = new MiscType("Event Pin", 60)
  .physical()
  .addTags(TypeTags.TypeEvent, TypeTags.TypeEventStandard)
  .addHidden(TypeHidden.Inventory);
export const trailMunzee = new MiscType("Trail Munzee", 190)
  .setIcon("trail")
  .physical()
  .addTag(TypeTags.TypeTrail);
export const personalMunzee = new MiscType("Personal Munzee", 200)
  .addIcon("personal")
  .locationless()
  .addTag(TypeTags.TypePersonal)
  .addHidden(
    TypeHidden.Inventory
  ); /*.points({"deploy":10,"type":"TypePointsType.Split","split":50,"min":10})*/
export const eventIndicator = new MiscType("Event Indicator", 294)
  .physical()
  .addTags(TypeTags.TypeEvent, TypeTags.TypeEventStandard)
  .addHidden(TypeHidden.Inventory);
export const virtualTrail = new MiscType("Virtual Trail", 390)
  .setIcon("virtual_trail")
  .virtual()
  .addTag(TypeTags.TypeTrail);
export const shamrock = new MiscType("Shamrock", 441).physical();
export const eventTrail = new MiscType("Event Trail", 600)
  .virtual()
  .addTags(TypeTags.TypeEvent, TypeTags.TypeEventStandard, TypeTags.TypeTrail)
  .addHidden(TypeHidden.Inventory);
export const premiumPersonal = new MiscType("Premium Personal", 1107)
  .locationless()
  .addTag(TypeTags.TypePersonal)
  .addHidden(
    TypeHidden.Inventory
  ); /*.points({"deploy":25,"type":"TypePointsType.Split","split":100,"min":20})*/
export const springSeasonal = new MiscType("Spring Seasonal", 1135)
  .setIcon("springseasonalmunzee")
  .physical()
  .addTag(TypeTags.TypeSeasonal)
  .addHidden(TypeHidden.Inventory);
export const summerSeasonal = new MiscType("Summer Seasonal", 1136)
  .setIcon("summerseasonalmunzee")
  .physical()
  .addTag(TypeTags.TypeSeasonal)
  .addHidden(TypeHidden.Inventory);
export const fallSeasonal = new MiscType("Fall Seasonal", 1137)
  .setIcon("fallseasonalmunzee")
  .physical()
  .addTag(TypeTags.TypeSeasonal)
  .addHidden(TypeHidden.Inventory);
export const winterSeasonal = new MiscType("Winter Seasonal", 1138)
  .setIcon("winterseasonalmunzee")
  .physical()
  .addTag(TypeTags.TypeSeasonal)
  .addHidden(TypeHidden.Inventory);
export const seasonal = new MiscType("Seasonal", 1139)
  .physical()
  .addTag(TypeTags.TypeSeasonal)
  .addHidden(TypeHidden.Capture, TypeHidden.Deploy);
export const temporaryVirtual = new MiscType("Temporary Virtual", 1245)
  .addIcon("tempvirt")
  .virtual(); /*.points({"deploy":30,"type":"TypePointsType.Split","split":75,"min":25})*/
export const qRewzee = new MiscType("QRewzee", 1880)
  .physical()
  .addHidden(TypeHidden.Inventory, TypeHidden.Deploy);
export const renovation = new MiscType("Renovation", 2390)
  .locationless()
  .addHidden(TypeHidden.Inventory, TypeHidden.Deploy);
export const sleepZee = new MiscType("SleepZee", 2744)
  .virtual()
  .addHidden(TypeHidden.Inventory, TypeHidden.Deploy);

export const goldenFourLeafClover = new MiscScatterType("Golden Four Leaf Clover", 2943)
  .addIcon("goldenclover")
  .standalone();
export const cloverLeaf = new MiscScatterType("Clover Leaf", 2942)
  .standalone()
  .scattererScatters(goldenFourLeafClover);
export const virtualShamrock = new MiscType("Virtual Shamrock", 2941)
  .virtual()
  .scattererScatters(cloverLeaf);

export const sweetTreats = new MiscScatterType("Sweet Treats", 3306).standalone();
export const goldenTicket = new MiscType("Golden Ticket", 3303)
  .physical()
  .scattererScatters(sweetTreats);
