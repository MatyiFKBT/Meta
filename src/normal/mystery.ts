import { Group } from "../common/group";
import { TypeTags, Type, ScatterType, TypeSet } from "../common/type";
import { normalGroup } from "./_index";

export class MysteryType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([mysteryGroup]).addTag(TypeTags.TypeMystery);
  }
}

export class ElementalMysteryType extends MysteryType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.TypeMysteryElemental);
  }
}

export class ElementalMysteryScatterType extends ScatterType {
  override template(): this {
    super.template();
    return this.setGroup([mysteryGroup]).addTags(
      TypeTags.TypeMystery,
      TypeTags.TypeMysteryElemental
    );
  }
}

export const mysteryGroup = new Group({ name: "Mysteries" }).addParent(normalGroup);

export const mystery = new MysteryType(
  "Mystery",
  280
).physical(); /*.points({"deploy":60,"type":"TypePointsType.Split","split":80,"min":20})*/

export const fire = new ElementalMysteryScatterType("Fire", 560).physical();
export const fireMystery = new ElementalMysteryType("Fire Mystery", 532)
  .physical()
  .scattererScatters(
    fire
  ); /*.points({"deploy":50,"type":"TypePointsType.Split","split":60,"min":10,"interval":5})*/

export const frozenGreenie = new ElementalMysteryScatterType("Frozen Greenie", 697).physical();
export const iceMystery = new ElementalMysteryType("Ice Mystery", 651)
  .physical()
  .scattererScatters(
    frozenGreenie
  ); /*.points({"deploy":50,"type":"TypePointsType.Split","split":60,"min":5,"interval":5})*/

export const earthMysteryScatters = new TypeSet()
  .add(new ElementalMysteryScatterType("Red Apple", 2404).standalone())
  .add(new ElementalMysteryScatterType("Cherry Blossom", 2405).standalone())
  .add(new ElementalMysteryScatterType("Peach", 2530).standalone())
  .add(new ElementalMysteryScatterType("Pear", 2531).standalone())
  .add(new ElementalMysteryScatterType("Pecan", 2603).standalone())
  .add(new ElementalMysteryScatterType("Acorn", 2604).standalone())
  .add(new ElementalMysteryScatterType("Dead Branch").standalone())
  .add(new ElementalMysteryScatterType("Cardinal Feather").standalone());
export const tree = new ElementalMysteryScatterType("Tree", 2403)
  .physical()
  .scattererScatters(earthMysteryScatters);
export const earthMystery = new ElementalMysteryType("Earth Mystery", 851)
  .physical()
  .scattererScatters(
    tree
  ); /*.points({"deploy":50,"type":"TypePointsType.Split","split":60,"min":5,"interval":5})*/

export const waterDroplet = new ElementalMysteryScatterType("Water Droplet", 1021).physical();
export const waterMystery = new ElementalMysteryType("Water Mystery", 1020)
  .physical()
  .scattererScatters(
    waterDroplet
  ); /*.points({"deploy":50,"type":"TypePointsType.Split","split":60,"min":5,"interval":5})*/

export const goldenFeather = new ElementalMysteryScatterType("Golden Feather", 1088).standalone();
export const feather = new ElementalMysteryScatterType("Feather", 1087)
  .standalone()
  .scattererScatters(goldenFeather);
export const airMystery = new ElementalMysteryType("Air Mystery", 1086)
  .virtual()
  .scattererScatters(
    feather
  ); /*.points({"deploy":50,"type":"TypePointsType.Split","split":60,"min":5,"interval":5})*/

export const charge = new ElementalMysteryScatterType("Charge", 2392).standalone();
export const electricMystery = new ElementalMysteryType("Electric Mystery", 2391)
  .virtual()
  .scattererScatters(
    charge
  ); /*.points({"deploy":50,"type":"TypePointsType.Split","split":60,"min":10,"interval":5})*/

export const blackHoleItems = new TypeSet()
  .add(
    ["Planet", "Spaceship", "Meteor", "Satellite", "Lost Key"].map(name =>
      new ElementalMysteryScatterType(name).standalone()
    )
  )
  .add(new ElementalMysteryScatterType("Lost Sock").physical());
export const blackHole = new ElementalMysteryScatterType("Black Hole")
  .virtual()
  .scattererScatters(blackHoleItems);
export const voidMystery = new ElementalMysteryType("Void Mystery")
  .virtual()
  .scattererScatters(
    blackHole
  ); /*.points({"deploy":50,"type":"TypePointsType.Split","split":60,"min":10,"interval":5})*/
