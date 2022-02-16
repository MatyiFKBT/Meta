import { Group } from "../common/group";
import { TypeHidden, TypeTags } from "../common/type";
import { CardType } from "./index";
import { cardsGroup } from "./_index";

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
export const valentinesMailbox = new Year2022VMailboxCardType("V-Mailbox", 3594).addIcon(
  "v-mailcard"
);
export const loveBugCard = new Year2022VMailboxCardType("Love Bug Card", 3595);
export const youGiveMeLifeCard = new Year2022VMailboxCardType("You Give Me Life Card", 3596);
