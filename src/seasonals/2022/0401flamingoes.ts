import { Year2022SeasonalGroup, Year2022SeasonalScatterType } from "./_index";

export const flamingoesGroup = new Year2022SeasonalGroup({
  name: "Flamingoes",
  starts: "2022-04-01T0:00:00-05:00",
  ends: "2022-04-02T23:59:00-05:00",
});

export const plasticGardenFlamingo = new Year2022SeasonalScatterType(
  "Plastic Garden Flamingo",
  3670
)
  .virtual()
  .addGroup(flamingoesGroup);

export const anotherPlasticGardenFlamingo = new Year2022SeasonalScatterType(
  "Another Plastic Garden Flamingo",
  3671
)
  .virtual()
  .addGroup(flamingoesGroup);

export const hiddenPlasticGardenFlamingo = new Year2022SeasonalScatterType(
  "Hidden Plastic Garden Flamingo"
)
  .virtual()
  .addGroup(flamingoesGroup);
