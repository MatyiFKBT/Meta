import { Type, TypeHidden, TypeTags } from "../../src/items/type";
import { Group } from "../../src/items/group";
import { homeGroup } from "../base";

export const eventGroup = new Group({
  name: "Events",
}).addParent(homeGroup);

export class EventType extends Type {
  override template(): this {
    super.template();
    return this.physical()
      .addTags(TypeTags.TypeEvent, TypeTags.TypeEventCustom)
      .addHidden(TypeHidden.Deploy, TypeHidden.Inventory);
  }
}
