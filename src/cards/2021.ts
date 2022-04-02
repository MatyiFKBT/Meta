import { Group } from "../common/group";
import { ScatterType, TypeHidden, TypeSet, TypeTags } from "../common/type";
import { CardType } from "./index";
import { cardsGroup } from "./_index";

export const Year2021CardGroup = new Group({ name: "2021 Cards" }).addParent(cardsGroup);

export class Year2021CardType extends CardType {
  override template(): this {
    super.template();
    return this.setGroup([Year2021CardGroup]).addTag(TypeTags.Card2021);
  }
}
export class Year2021CardScatterType extends ScatterType {
  override template(): this {
    super.template();
    return this.setGroup([Year2021CardGroup]);
  }
}

export const motivationalMessageCard1 = new Year2021CardType("Motivational Message Card 1", 2830);
export const motivationalMessageCard2 = new Year2021CardType("Motivational Message Card 2", 2831);
export const motivationalMessageCard3 = new Year2021CardType("Motivational Message Card 3", 2832);
export const motivationalMessageCard4 = new Year2021CardType("Motivational Message Card 4", 2833);
export const marchintoMayEventCard = new Year2021CardType(
  "March into May Event Card",
  2936
).setIcons("march_into_may_event_card", "marchintomayeventcard");
export const greenCheersCard = new Year2021CardType("Green Cheers Card", 2944);
export const kissMeImIrishCard = new Year2021CardType("Kiss Me I'm Irish Card", 2945).addIcons(
  "kiss_me_im_irish_card",
  "kissmeimirishcard"
);
export const luckyCharmCard = new Year2021CardType("Lucky Charm Card", 2946);
export const easterBasketCard = new Year2021CardType("Easter Basket Card", 2982);
export const pinkEasterEggCard = new Year2021CardType("Pink Easter Egg Card", 2985);
export const blueEasterEggCard = new Year2021CardType("Blue Easter Egg Card", 2984);
export const greenEasterEggCard = new Year2021CardType("Green Easter Egg Card", 2983);
export const easterBunnyCard = new Year2021CardType("Easter Bunny Card", 2986);
export const easterChickCard = new Year2021CardType("Easter Chick Card", 2987);
export const thinkingofYouCard = new Year2021CardType("Thinking of You Card", 3000);
export const knockKnockJokeCard = new Year2021CardType("Knock Knock Joke Card", 3001);
export const its5OClockSomewhereCard = new Year2021CardType(
  "It's 5 O' Clock Somewhere Card",
  3003
).addIcons("its_5_oclock_somewhere_card", "its5oclocksomewherecard");
export const wishIWasHereCard = new Year2021CardType("Wish I Was Here Card", 3002);
export const lifeIsGoodCard = new Year2021CardType("Life Is Good Card", 3004);
export const stayHome2021Card = new Year2021CardType("Stay Home 2021 Card", 3009);
export const picturePerfectCard = new Year2021CardType("Picture Perfect Card", 3010);
export const goodLuckCard = new Year2021CardType("Good Luck Card", 3231);
export const luckyRabbitsFootCard = new Year2021CardType("Lucky Rabbit's Foot Card", 3232);
export const breakaLegCard = new Year2021CardType("Break a Leg Card", 3234);
export const badLuckCard = new Year2021CardType("Bad Luck Card", 3233);
export const halloween2021Card = new Year2021CardType("Halloween 2021 Card", 3304);
export const sweetTreatsCard = new Year2021CardType("Sweet Treats Card", 3305);

export const trick = new Year2021CardScatterType("Trick", 3329)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const treat = new Year2021CardScatterType("Treat", 3328)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const trickorTreat = new Year2021CardScatterType("Trick or Treat")
  .standalone()
  .addHidden(TypeHidden.Capture);
export const trickorTreatCard = new Year2021CardType("Trick or Treat Card", 3326).scattererScatters(
  trickorTreat
);

export const frankensteinCard = new Year2021CardType("Frankenstein Card", 3330);
export const mummyCard = new Year2021CardType("Mummy Card", 3331);
export const vampireCard = new Year2021CardType("Vampire Card", 3332);
export const werewolfCard = new Year2021CardType("Werewolf Card", 3333);
export const shortStoryCard = new Year2021CardType("Short Story Card", 3403);
export const songaboutYouCard = new Year2021CardType("Song about You Card", 3404);
export const thankfulforYouCard = new Year2021CardType("Thankful for You Card", 3410);
export const lettertoSantaCard = new Year2021CardType("Letter to Santa Card", 3411);
export const christmasEvent2021Card = new Year2021CardType("Christmas Event 2021 Card", 3402);
export const christmasCrackerCard = new Year2021CardType("Christmas Cracker Card", 3454);

export const daysOfChristmasCards = new TypeSet(
  new Array(12)
    .fill(0)
    .map(
      (_, i) =>
        new Year2021CardType(
          `${i + 1}${["st", "nd", "rd"][i] ?? "th"} Day of Christmas Card`,
          i + 3531
        )
    )
);
