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
export const valentinesMailbox = new Year2022VMailboxCardType("V-Mailbox", 3574);
