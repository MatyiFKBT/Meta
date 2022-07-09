import { Group } from "../../src/common/group";
import { ScatterType, TypeHidden, TypeTags } from "../../src/common/type";
import { cardsGroup, CardType } from "./index";

export const Year2022VMailboxCardGroup = new Group({ name: "2022 V-Mailbox Cards" }).addParent(
  cardsGroup
);

export class Year2022VMailboxCardType extends CardType {
  override template(): this {
    super.template();
    return this.addHidden(TypeHidden.Inventory)
      .setGroup([Year2022VMailboxCardGroup])
      .addTag(TypeTags.Card2022VMailbox);
  }
}
export class Year2022VMailboxScatterType extends ScatterType {
  override template(): this {
    super.template();
    return this.addHidden(TypeHidden.Inventory).standalone().setGroup([Year2022VMailboxCardGroup]);
  }
}
export const valentinesMailbox = new Year2022VMailboxCardType("V-Mailbox", 3574);
export const vMailCard = new Year2022VMailboxCardType("V-Mail Card", 3594);
export const loveBugCard = new Year2022VMailboxCardType("Love Bug Card", 3595);
export const youGiveMeLifeCard = new Year2022VMailboxCardType("You Give Me Life Card", 3596);
export const pokeCard = new Year2022VMailboxCardType("Poke Card", 3597);
export const cuteCodeCard = new Year2022VMailboxCardType("Cute Code Card", 3598);
export const msMunchMan = new Year2022VMailboxScatterType("Ms. Munch-Man", 3609);
export const justMyTypeCard = new Year2022VMailboxCardType("Just My Type Card", 3599);
export const strongConnectionCard = new Year2022VMailboxCardType("Strong Connection Card", 3600);
export const trashCard = new Year2022VMailboxCardType("Trash Card", 3601);
export const friendRequestCard = new Year2022VMailboxCardType("Friend Request Card", 3602);
export const winkCard = new Year2022VMailboxCardType("Wink Card", 3603);
export const player2Card = new Year2022VMailboxCardType("Player 2 Card", 3604);
export const pixelHeartCard = new Year2022VMailboxCardType("Pixel Heart Card", 3605);
export const dmCard = new Year2022VMailboxCardType("DM Card", 3606);
export const heartEyesEmojiCard = new Year2022VMailboxCardType("Heart Eyes Emoji Card", 3607);
export const youCompleteMeCard = new Year2022VMailboxCardType("You Complete Me Card", 3608);
export const pixelCupid = new Year2022VMailboxScatterType("Pixel Cupid", 3610);
