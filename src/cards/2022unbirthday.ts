import { Group } from "../common/group";
import { ScatterType, TypeHidden, TypeTags } from "../common/type";
import { cardsGroup, CardType } from "./index";

export const Year2022UnBirthdayMailboxCardGroup = new Group({
  name: "2022 UnBirthday Mailbox Cards",
}).addParent(cardsGroup);

export class Year2022UnBirthdayMailboxCardType extends CardType {
  override template(): this {
    super.template();
    return this.addHidden(TypeHidden.Inventory)
      .setGroup([Year2022UnBirthdayMailboxCardGroup])
      .addTag(TypeTags.Card2022UnBirthdayMailbox);
  }
}
export class Year2022UnBirthdayScatterType extends ScatterType {
  override template(): this {
    super.template();
    return this.addHidden(TypeHidden.Inventory)
      .standalone()
      .setGroup([Year2022UnBirthdayMailboxCardGroup]);
  }
}

export const unbirthdayMailbox = new Year2022UnBirthdayMailboxCardType("UnBirthday Mailbox", 3745);
