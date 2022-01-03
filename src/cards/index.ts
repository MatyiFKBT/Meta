import { Group } from "../common/group";
import { Type, TypeTags } from "../common/type";

export const CardGroup = new Group({ name: "Cards" });

export class CardType extends Type {
  override template() {
    super.template();
    return this.virtual().addTag(TypeTags.Card).addGroup(CardGroup);
  }
}
