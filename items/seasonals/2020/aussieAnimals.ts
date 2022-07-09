import { Year2020SeasonalGroup, Year2020SeasonalPOBType } from "./_index";

export const aussieAnimalsGroup = new Year2020SeasonalGroup({
  name: "Aussie Animals",
  starts: "2020-01-16T00:00:00-05:00",
  ends: "2020-04-30T23:59:00-05:00",
});

export const kangarooAussieAnimal = new Year2020SeasonalPOBType(
  "Kangaroo Aussie Animal",
  2333
).addGroup(aussieAnimalsGroup);
export const koalaAussieAnimal = new Year2020SeasonalPOBType("Koala Aussie Animal", 2334).addGroup(
  aussieAnimalsGroup
);
