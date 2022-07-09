import { Group } from "../../src/common/group";
import { TypeHidden, TypeTags } from "../../src/common/type";
import { cardsGroup, CardType } from "./index";

export const Year2021BCCCCardGroup = new Group({ name: "2021 BCCC Cards" }).addParent(cardsGroup);

export class Year2021BCCCCardType extends CardType {
  override template(): this {
    super.template();
    return this.addHidden(TypeHidden.Inventory)
      .setGroup([Year2021BCCCCardGroup])
      .addTag(TypeTags.Card2021BCCC);
  }
}

export const n10thBirthdayMailbox = new Year2021BCCCCardType("10th Birthday Mailbox", 2651);
export const awardsShowInvitationCard = new Year2021BCCCCardType(
  "Awards Show Invitation Card",
  3130
);
export const tinFoilHatCard = new Year2021BCCCCardType("Tin Foil Hat Card", 3131);
export const swagBagCard = new Year2021BCCCCardType("Swag Bag Card", 3132);
export const commemorativeNapkinCard = new Year2021BCCCCardType("Commemorative Napkin Card", 3133);
export const sweetRideCard = new Year2021BCCCCardType("Sweet Ride Card", 3134);
export const greenCarpetCard = new Year2021BCCCCardType("Green Carpet Card", 3135);
export const pegasusPiñataCard = new Year2021BCCCCardType("Pegasus Piñata Card", 3136).setIcons(
  "pegasuspinatacard",
  "pegasuspiñatacard"
);
export const raffleTicketCard = new Year2021BCCCCardType("Raffle Ticket Card", 3137);
export const wrongWinnerCard = new Year2021BCCCCardType("Wrong Winner Card", 3138);
export const replacementShoeCard = new Year2021BCCCCardType("Replacement Shoe Card", 3139);
export const suitCard = new Year2021BCCCCardType("Suit Card", 3140);
export const dressCard = new Year2021BCCCCardType("Dress Card", 3141);
export const goldPlatedWrenchCard = new Year2021BCCCCardType("Gold-Plated Wrench Card", 3142);
export const unicornCupcakeCard = new Year2021BCCCCardType("Unicorn Cupcake Card", 3143);
export const bouncerCard = new Year2021BCCCCardType("Bouncer Card", 3144);
export const cutleryCard = new Year2021BCCCCardType("Cutlery Card", 3145);
export const microphoneCard = new Year2021BCCCCardType("Microphone Card", 3146);
export const orchestraCard = new Year2021BCCCCardType("Orchestra Card", 3147);
export const teleprompterTypoCard = new Year2021BCCCCardType("Teleprompter Typo Card", 3148);
export const centerPieceCard = new Year2021BCCCCardType("Center Piece Card", 3149);
export const fineChinaCard = new Year2021BCCCCardType("Fine China Card", 3150);
export const paparazziCard = new Year2021BCCCCardType("Paparazzi Card", 3151);
export const confettiCard = new Year2021BCCCCardType("Confetti Card", 3152);
export const cameraCard = new Year2021BCCCCardType("Camera Card", 3153);
export const trophyCard = new Year2021BCCCCardType("Trophy Card", 3154);
export const commericalBreakCard = new Year2021BCCCCardType("Commercial Break Card", 3155);
export const showHostCard = new Year2021BCCCCardType("Show Host Card", 3156);
export const seatingArrangementCard = new Year2021BCCCCardType("Seating Arrangement Card", 3157);
export const toastCard = new Year2021BCCCCardType("Toast Card", 3158);
export const winnersBouquetCard = new Year2021BCCCCardType("Winners Bouquet Card", 3159);
export const n1000HoursCard = new Year2021BCCCCardType("1000 Hours Card", 3160);
