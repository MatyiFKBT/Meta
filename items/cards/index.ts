import { homeGroup } from "../base";
import { Group } from "../../src/common/group";
import { Type, TypeTags } from "../../src/common/type";

export const cardsGroup = new Group({ name: "Cards" }).addParent(homeGroup);

export class CardType extends Type {
  override template() {
    super.template();
    return this.virtual().addTag(TypeTags.Card).addGroup(cardsGroup);
  }
}
