import { TypeSet } from "../../common/type";
import { Year2022SeasonalGroup, Year2022SeasonalBouncerType } from "./_index";

export const hotDogzGroup = new Year2022SeasonalGroup({
  name: "Hot Dogz",
  starts: "2022-06-09T12:00:00-05:00",
  ends: "2022-07-04T23:59:00-05:00",
});

export const hotDogIngredientsSet = new TypeSet();
for (const type of [
  ["Hot Dog Buns", 3776],
  ["Hot Dogs", 3777],
  ["Ketchup", 3778],
  ["Cheese", 3780],
  ["Brown Sos", 3782],
  ["Bratwurst", 3783],
  ["Mustard", 3784],
  ["Vegan Banger", 3785],
  ["Chili"],
  ["Pickles"],
] as const) {
  hotDogIngredientsSet.add(
    new Year2022SeasonalBouncerType(type[0], type[1]).addGroup(hotDogzGroup)
  );
}
