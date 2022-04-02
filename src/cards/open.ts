import { Group } from "../common/group";
import { TypeTags } from "../common/type";
import { CardType } from "./index";
import { cardsGroup } from "./_index";

export const OpenCardGroup = new Group({ name: "Open Cards" }).addParent(cardsGroup);

export class OpenCardType extends CardType {
  override template(): this {
    super.template();
    return this.setGroup([OpenCardGroup]).addTag(TypeTags.CardOpen);
  }
}

export const getWellCard = new OpenCardType("Get Well Card", 2421);
export const birthdayCard = new OpenCardType("Birthday Card", 2420);
export const thankYouCard = new OpenCardType("Thank You Card", 2432);
export const howdyCard = new OpenCardType("Howdy Card", 2450);
export const congratsCard = new OpenCardType("Congrats Card", 2495);
export const sorryCard = new OpenCardType("Sorry Card", 2496);
export const sorryCard1 = new OpenCardType("Sorry Card 1", 2497);
export const sorryCard2 = new OpenCardType("Sorry Card 2", 2498);
export const sorryCard3 = new OpenCardType("Sorry Card 3", 2499);
export const summerCard = new OpenCardType("Summer Card", 2532).addIcon("summer_card");
export const winterCard = new OpenCardType("Winter Card", 2533).addIcon("winter_card");
export const eventCard = new OpenCardType("Event Card", 2542);
export const fallCard = new OpenCardType("Fall Card", 2602).addIcon("fall_card");
export const springCard = new OpenCardType("Spring Card", 2601).addIcon("spring_card");
export const techIssuesCard = new OpenCardType("Tech Issues Card", 2622);

// Reseller Cards
export const geoLoggersResellerCard = new OpenCardType("GeoLoggers Reseller Card", 3011)
  .setIcon("geologgersresellergreetingcard")
  .addTag(TypeTags.TypeReseller);
export const goldNCoinsResellerCard = new OpenCardType("Gold'n Coins Reseller Card", 3012)
  .setIcon("gold'ncoinsresellergreetingcard")
  .addIcon("goldncoinsresellergreetingcard")
  .addTag(TypeTags.TypeReseller);
export const negsResellerCard = new OpenCardType("NEGS Reseller Card", 3013)
  .setIcon("negsresellergreetingcard")
  .addTag(TypeTags.TypeReseller);
export const scgsResellerCard = new OpenCardType("SCGS Reseller Card", 3014)
  .setIcon("scgsresellergreetingcard")
  .addTag(TypeTags.TypeReseller);

export const roadWarriorsCard = new OpenCardType("Road Warriors Card", 3518);
export const adventureSeekersCard = new OpenCardType("Adventure Seekers Card", 3519);
