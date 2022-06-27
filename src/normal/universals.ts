import { Group } from "../common/group";
import { Type, TypeHidden, TypeTags } from "../common/type";
import { normalGroup } from "./_index";

export const UniversalGroup = new Group({ name: "Universals" }).addParent(normalGroup);

export class UniversalType extends Type {
  override template(): this {
    super.template();
    return this.addHidden(TypeHidden.Inventory)
      .addGroup(UniversalGroup)
      .addTag(TypeTags.TypeUniversal)
      .locationless();
  }
}

export const universalBash = new UniversalType("Universal Bash", 2588).setIcons(
  "universal_bash",
  "universalbash"
);
export const n10thBirthdayUniversal = new UniversalType("10th Birthday Universal", 3092).setIcons(
  "universal_10th_birthday",
  "10thbirthdayuniversal"
);
export const wonder11andUniversal = new UniversalType("Wonder11and Universal").setIcons(
  "universal_wonder11and",
  "wonder11anduniversal"
);
