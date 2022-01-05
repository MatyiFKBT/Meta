import { Group } from "../common/group";
import { Type, TypeHidden } from "../common/type";

export class OtherType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([otherGroup])
      .locationless()
      .addHidden(TypeHidden.Capture, TypeHidden.Deploy);
  }
}

export const otherGroup = new Group({ name: "Others", human_id: "other" });

export const zeeCred = new OtherType("ZeeCred");
export const rover = new OtherType("Rover");
export const cuppazeewafflephoto = new OtherType("cuppazee__wafflephoto");
export const pearagentmystery = new OtherType("pearagentmystery");
export const pineagentmystery = new OtherType("pineagentmystery");
