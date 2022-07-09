import { Group } from "../../src/common/group";
import { TypeTags, Type, TypeHidden } from "../../src/common/type";
import { normalGroup } from "./_index";

export class VirtualType extends Type {
  override template(): this {
    super.template();
    this.setIcon(this.name.toLowerCase().replace(/\s/g, "_"))
      .setGroup([virtualGroup])
      .addTag(TypeTags.TypeVirtual)
      .virtual();
    if (this.name !== "Virtual") {
      this.addHidden(TypeHidden.Inventory);
    }
    return this;
  }
}

export const virtualGroup = new Group({ name: "Virtuals", human_id: "virtual" }).addParent(
  normalGroup
);

export const virtual = new VirtualType("Virtual", 1409);
export const virtualRainbow = new VirtualType("Virtual Rainbow", 1410);
export const virtualTimberwolf = new VirtualType("Virtual Timberwolf", 1411).addTag(
  TypeTags.VirtualColourBlack
);
export const virtualSilver = new VirtualType("Virtual Silver", 1412).addTag(
  TypeTags.VirtualColourBlack
);
export const virtualGray = new VirtualType("Virtual Gray", 1413).addTag(
  TypeTags.VirtualColourBlack
);
export const virtualBlack = new VirtualType("Virtual Black", 1414).addTag(
  TypeTags.VirtualColourBlack
);
export const virtualOrchid = new VirtualType("Virtual Orchid", 1415).addTag(
  TypeTags.VirtualColourPink
);
export const virtualWisteria = new VirtualType("Virtual Wisteria", 1416);
export const virtualPurpleMountainsMajesty = new VirtualType(
  "Virtual Purple Mountains Majesty",
  1417
);
export const virtualViolet = new VirtualType("Virtual Violet", 1418);
export const virtualPlum = new VirtualType("Virtual Plum", 1419);
export const virtualBlueViolet = new VirtualType("Virtual Blue Violet", 1420).addTag(
  TypeTags.VirtualColourBlue
);
export const virtualBlue = new VirtualType("Virtual Blue", 1421).addTag(TypeTags.VirtualColourBlue);
export const virtualCadetBlue = new VirtualType("Virtual Cadet Blue", 1423).addTag(
  TypeTags.VirtualColourBlue
);
export const virtualPeriwinkle = new VirtualType("Virtual Periwinkle", 1424).addTag(
  TypeTags.VirtualColourBlue
);
export const virtualCornflower = new VirtualType("Virtual Cornflower", 1425).addTag(
  TypeTags.VirtualColourBlue
);
export const virtualBlueGreen = new VirtualType("Virtual Blue Green", 1426).addTag(
  TypeTags.VirtualColourBlue
);
export const virtualPacificBlue = new VirtualType("Virtual Pacific Blue", 1427).addTag(
  TypeTags.VirtualColourBlue
);
export const virtualCerulean = new VirtualType("Virtual Cerulean", 1428).addTag(
  TypeTags.VirtualColourBlue
);
export const virtualRobinEggBlue = new VirtualType("Virtual Robin Egg Blue", 1429).addTag(
  TypeTags.VirtualColourBlue
);
export const virtualIndigo = new VirtualType("Virtual Indigo", 1430).addTag(
  TypeTags.VirtualColourBlue
);
export const virtualTurquoiseBlue = new VirtualType("Virtual Turquoise Blue", 1431).addTag(
  TypeTags.VirtualColourBlue
);
export const virtualSeaGreen = new VirtualType("Virtual Sea Green", 1432).addTag(
  TypeTags.VirtualColourGreen
);
export const virtualGrannySmithApple = new VirtualType("Virtual Granny Smith Apple", 1433).addTag(
  TypeTags.VirtualColourGreen
);
export const virtualGreen = new VirtualType("Virtual Green", 1434).addTag(
  TypeTags.VirtualColourGreen
);
export const virtualForestGreen = new VirtualType("Virtual Forest Green", 1435).addTag(
  TypeTags.VirtualColourGreen
);
export const virtualAsparagus = new VirtualType("Virtual Asparagus", 1436).addTag(
  TypeTags.VirtualColourGreen
);
export const virtualOliveGreen = new VirtualType("Virtual Olive Green", 1437).addTag(
  TypeTags.VirtualColourGreen
);
export const virtualYellowGreen = new VirtualType("Virtual Yellow Green", 1438).addTag(
  TypeTags.VirtualColourGreen
);
export const virtualGreenYellow = new VirtualType("Virtual Green Yellow", 1439).addTag(
  TypeTags.VirtualColourGreen
);
export const virtualSpringGreen = new VirtualType("Virtual Spring Green", 1440).addTag(
  TypeTags.VirtualColourGreen
);
export const virtualGold = new VirtualType("Virtual Gold", 1441);
export const virtualYellow = new VirtualType("Virtual Yellow", 1442);
export const virtualGoldenrod = new VirtualType("Virtual Goldenrod", 1443);
export const virtualDandelion = new VirtualType("Virtual Dandelion", 1444);
export const virtualOrange = new VirtualType("Virtual Orange", 1445);
export const virtualBurntOrange = new VirtualType("Virtual Burnt Orange", 1446);
export const virtualMelon = new VirtualType("Virtual Melon", 1448).addTag(
  TypeTags.VirtualColourPink
);
export const virtualPink = new VirtualType("Virtual Pink", 1449).addTags(
  TypeTags.VirtualColourPink,
  TypeTags.VirtualColourLouPink
);
export const virtualCarnationPink = new VirtualType("Virtual Carnation Pink", 1450).addTags(
  TypeTags.VirtualColourPink,
  TypeTags.VirtualColourLouPink
);
export const virtualMauvelous = new VirtualType("Virtual Mauvelous", 1451).addTags(
  TypeTags.VirtualColourPink,
  TypeTags.VirtualColourLouPink
);
export const virtualSalmon = new VirtualType("Virtual Salmon", 1452).addTags(
  TypeTags.VirtualColourPink,
  TypeTags.VirtualColourLouPink
);
export const virtualTickleMePink = new VirtualType("Virtual Tickle Me Pink", 1453).addTags(
  TypeTags.VirtualColourPink,
  TypeTags.VirtualColourLouPink
);
export const virtualMagenta = new VirtualType("Virtual Magenta", 1454).addTags(
  TypeTags.VirtualColourPink,
  TypeTags.VirtualColourLouPink
);
export const virtualWildStrawberry = new VirtualType("Virtual Wild Strawberry", 1455).addTags(
  TypeTags.VirtualColourPink,
  TypeTags.VirtualColourLouPink
);
export const virtualVioletRed = new VirtualType("Virtual Violet Red", 1456).addTags(
  TypeTags.VirtualColourPink,
  TypeTags.VirtualColourLouPink
);
export const virtualRedViolet = new VirtualType("Virtual Red Violet", 1457).addTags(
  TypeTags.VirtualColourPink,
  TypeTags.VirtualColourLouPink
);
export const virtualApricot = new VirtualType("Virtual Apricot", 1458);
export const virtualPeach = new VirtualType("Virtual Peach", 1459);
export const virtualMacaroniandCheese = new VirtualType("Virtual Macaroni and Cheese", 1460);
export const virtualTan = new VirtualType("Virtual Tan", 1461);
export const virtualBurntSienna = new VirtualType("Virtual Burnt Sienna", 1462);
export const virtualBittersweet = new VirtualType("Virtual Bittersweet", 1463).addTag(
  TypeTags.VirtualColourRed
);
export const virtualRedOrange = new VirtualType("Virtual Red Orange", 1464).addTag(
  TypeTags.VirtualColourRed
);
export const virtualScarlet = new VirtualType("Virtual Scarlet", 1465).addTag(
  TypeTags.VirtualColourRed
);
export const virtualRed = new VirtualType("Virtual Red", 1466).addTag(TypeTags.VirtualColourRed);
export const virtualBrickRed = new VirtualType("Virtual Brick Red", 1467).addTag(
  TypeTags.VirtualColourRed
);
export const virtualMahogany = new VirtualType("Virtual Mahogany", 1468).addTags(
  TypeTags.VirtualColourRed,
  TypeTags.VirtualColourBrown
);
export const virtualChestnut = new VirtualType("Virtual Chestnut", 1469).addTag(
  TypeTags.VirtualColourBrown
);
export const virtualTumbleweed = new VirtualType("Virtual Tumbleweed", 1470).addTag(
  TypeTags.VirtualColourBrown
);
export const virtualRawSienna = new VirtualType("Virtual Raw Sienna", 1471).addTag(
  TypeTags.VirtualColourBrown
);
export const virtualBrown = new VirtualType("Virtual Brown", 1473).addTag(
  TypeTags.VirtualColourBrown
);
