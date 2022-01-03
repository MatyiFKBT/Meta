import { Group } from "../common/group";
import { TypeHidden, TypeTags } from "../common/type";
import { CardType } from "./index";
import { cardsGroup } from "./_index";

export const Year2021VCCCCardGroup = new Group({ name: "2021 VCCC Cards" }).addParent(cardsGroup);

export class Year2021VCCCCardType extends CardType {
  override template(): this {
    super.template();
    return this.addHidden(TypeHidden.Inventory)
      .setGroup([Year2021VCCCCardGroup])
      .addTag(TypeTags.Card2021VCCC);
  }
}
export const valentinesMailbox = new Year2021VCCCCardType("Valentines Mailbox", 2650);
export const valentineCard = new Year2021VCCCCardType("Valentine Card", 2834);
export const cherubCard = new Year2021VCCCCardType("Cherub Card", 2835);
export const teddyBearCard = new Year2021VCCCCardType("Teddy Bear Card", 2836);
export const heartShapedBoxCard = new Year2021VCCCCardType("Heart Shaped Box Card", 2837);
export const chocolateCard = new Year2021VCCCCardType("Chocolate Card", 2838);
export const zeecretAdmirerCard = new Year2021VCCCCardType("Zeecret Admirer Card", 2839);
export const highFiveCard = new Year2021VCCCCardType("High Five Card", 2840);
export const roseCard = new Year2021VCCCCardType("Rose Card", 2841);
export const groupHugCard = new Year2021VCCCCardType("Group Hug Card", 2842);
export const bandaidzCard = new Year2021VCCCCardType("Bandaidz Card", 2843);
export const bFFCard = new Year2021VCCCCardType("BFF Card", 2844);
export const diamondRingCard = new Year2021VCCCCardType("Diamond Ring Card", 2845);
export const kissCard = new Year2021VCCCCardType("Kiss Card", 2846);
export const soulmateCard = new Year2021VCCCCardType("Soulmate Card", 2847);
