import { Year2022SeasonalGroup, Year2022SeasonalBouncerType } from "./_index";
import { TypeTags, TypeSet } from "../../../src/common/type";
import { greenie } from "../../normal/misc";
import { battleAxe } from "../../normal/weapons";
import {
  airMystery,
  electricMystery,
  fireMystery,
  iceMystery,
  voidMystery,
} from "../../normal/mystery";
import { pigChineseZodiac } from "../../normal/zodiacs";
import {
  bacon,
  calf,
  chick,
  chicken,
  cow,
  eggs,
  milk,
  pig,
  piglet,
  tomato,
  tomatoPlant,
  tomatoSeed,
} from "../../evolutions/farm";
import { flatHammock, flatLou, flatMatt, flatRob } from "../../normal/flats";

export const pizzaMyHeartGroup = new Year2022SeasonalGroup({
  name: "Pizza My Heart",
  starts: "2022-02-09T12:00:00-05:00",
  ends: "2022-03-06T23:59:00-05:00",
});

const toppings: [name: string, physical: boolean, munzeeId?: number][] = [
  ["Pizza Base", true, 3581],
  ["Tomato Paste", false, 3582],
  ["Grated Cheese", false, 3583],
  ["Pepperoni", true, 3584],
  ["Ham", true, 3585],
  ["Chicken Topping", true, 3586],
  ["Pineapple Chunks", true, 3587],
  ["Spicy Beef", true, 3588],
  ["Mushrooms", false, 3589],
  ["Cut Peppers", false, 3590],
  ["Jalapenos", false, 3591],
  ["Olives", false, 3592],
  ["Red Onions", false, 3593],
];

export const toppingSet = new TypeSet();
for (const [toppingName, toppingPhysical, toppingId] of toppings) {
  const topping = new Year2022SeasonalBouncerType(toppingName, toppingId).addGroup(
    pizzaMyHeartGroup
  );
  if (toppingPhysical) {
    topping.addBouncerLandsOn(
      greenie,
      battleAxe,
      fireMystery,
      iceMystery,
      pigChineseZodiac,
      // Bacon Set
      bacon,
      pig,
      piglet,
      // Milk Set
      milk,
      cow,
      calf,
      // Tomato Set
      tomato,
      tomatoPlant,
      tomatoSeed
    );
  } else {
    topping.addBouncerLandsOn(
      type => type.hasTags(TypeTags.TypeVirtual),
      flatRob,
      flatMatt,
      flatLou,
      flatHammock,
      airMystery,
      electricMystery,
      voidMystery,
      // Eggs Set
      eggs,
      chicken,
      chick
    );
  }
  toppingSet.add(topping);
}
