import { Group } from "../common/group";
import { TypeHidden, TypeTags } from "../common/type";
import { CardType } from "./index";
import { cardsGroup } from "./_index";

export const Year2020CardGroup = new Group({ name: "2020 Cards" }).addParent(cardsGroup);

export class Year2020CardType extends CardType {
  override template(): this {
    super.template();
    return this.addHidden(TypeHidden.Inventory)
      .setGroup([Year2020CardGroup])
      .addTag(TypeTags.Card2020);
  }
}

export const earthDayCard1 = new Year2020CardType("Earth Day Card 1", 2422);
export const earthDayCard2 = new Year2020CardType("Earth Day Card 2", 2423);
export const earthDayCard3 = new Year2020CardType("Earth Day Card 3", 2424);
export const stayHomeCard = new Year2020CardType("Stay Home Card", 2425);
export const hammercornCard = new Year2020CardType("Hammercorn Card", 2430);
export const clanWarCard = new Year2020CardType("Clan War Card", 2431);
export const worldLaughterDayCard = new Year2020CardType("World Laughter Day Card", 2433);
export const safeTravelsCard = new Year2020CardType("Safe Travels Card", 2451);
export const mayFlowersCard = new Year2020CardType("May Flowers Card", 2500);
export const worldOceanDayCard = new Year2020CardType("World Ocean Day Card", 2529);
export const couchPotatoCard = new Year2020CardType("Couch Potato Card", 2571).setIcons(
  "couch_potato_card",
  "couchpotatocard"
);
export const freezFlagCard = new Year2020CardType("FrEEZ Flag Card", 2572).addIcon(
  "freez_flag_card"
);
export const campMunzeeCard = new Year2020CardType("Camp Munzee Card", 2581).addIcon(
  "camp_munzee_card"
);
export const selfDestructCard = new Year2020CardType("Self Destruct Card", 2606);
export const halloweenCard = new Year2020CardType("Halloween Card", 2623);
export const killThemWithKindnessCard = new Year2020CardType("Kill Them with Kindness Card", 2691);
export const christmasEvent2020Card = new Year2020CardType("Christmas Event 2020 Card", 2624);
