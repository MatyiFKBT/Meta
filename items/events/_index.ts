import { Type, TypeHidden, TypeTags } from "../../src/common/type";
import { Group } from "../../src/common/group";
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
