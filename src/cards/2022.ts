import { Group } from "../common/group";
import { ScatterType, TypeTags } from "../common/type";
import { cardsGroup, CardType } from "./index";

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

export const munzPakApril2022Card = new Year2022CardType("MunzPak April 2022 Card", 3672);
export const munzPakMay2022Card = new Year2022CardType("MunzPak May 2022 Card", 3714);
export const munzPakJune2022Card = new Year2022CardType("MunzPak June 2022 Card", 3755);

export const crystalBallCard = new Year2022CardType("Crystal Ball Card", 3235);
