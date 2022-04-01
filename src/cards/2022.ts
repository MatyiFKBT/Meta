import { Group } from "../common/group";
import { ScatterType, TypeTags } from "../common/type";
import { CardType } from "./index";
import { cardsGroup } from "./_index";

export const Year2022CardGroup = new Group({ name: "2022 Cards" }).addParent(cardsGroup);

export class Year2022CardType extends CardType {
  override template(): this {
    super.template();
    return this.setGroup([Year2022CardGroup]).addTag(TypeTags.Card2022);
  }
}
export class Year2022CardScatterType extends ScatterType {
  override template(): this {
    super.template();
    return this.setGroup([Year2022CardGroup]);
  }
}

export const year2022EventCard = new Year2022CardType("2022 Event Card", 3552);
export const shamRockinCard = new Year2022CardType("Sham-Rockin Card", 3638);

export const fantasticFatherCard = new Year2022CardType("Fantastic Father Card", 3667);
export const magnificentMotherCard = new Year2022CardType("Magnificent Mother Card", 3668);

export const gardenFlamingoCard = new Year2022CardType("Garden Flamingo Card", 3669);
