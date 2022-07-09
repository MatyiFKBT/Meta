import { Year2021SeasonalGroup, Year2021SeasonalScatterType } from "./_index";
import { TypeHidden } from "../../../src/items/type";

export const munzee10thBirthdayGroup = new Year2021SeasonalGroup({
  name: "Munzee 10th Birthday",
  starts: "2021-07-01T00:00:00-05:00",
  ends: "2021-07-31T23:59:00-05:00",
});

export const chocolatePegasus = new Year2021SeasonalScatterType("Chocolate Pegasus", 3161)
  .addGroup(munzee10thBirthdayGroup)
  .standalone();
export const goldenChocolatePegasus = new Year2021SeasonalScatterType(
  "Golden Chocolate Pegasus",
  3163
)
  .addGroup(munzee10thBirthdayGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const cupcakeSprinkles = new Year2021SeasonalScatterType("Cupcake Sprinkles", 3164)
  .addGroup(munzee10thBirthdayGroup)
  .standalone();
export const goldenUnicornSprinkles = new Year2021SeasonalScatterType(
  "Golden Unicorn Sprinkles",
  3166
)
  .addGroup(munzee10thBirthdayGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const stopwatch = new Year2021SeasonalScatterType("Stopwatch", 3167)
  .addGroup(munzee10thBirthdayGroup)
  .standalone();
export const goldenStopwatch = new Year2021SeasonalScatterType("Golden Stopwatch", 3169)
  .addGroup(munzee10thBirthdayGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
