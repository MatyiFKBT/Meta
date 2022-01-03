import { Year2021SeasonalGroup, Year2021SeasonalScatterType } from "./_index";
import { TypeHidden } from "../../common/type";

export const munzee10thBirthdayGroup = new Year2021SeasonalGroup({
  name: "Munzee 10th Birthday",
  starts: "2021-07-01T00:00:00-05:00",
  ends: "2021-07-31T23:59:00-05:00",
});

export const chocolatePegasus = new Year2021SeasonalScatterType("Chocolate Pegasus")
  .addGroup(munzee10thBirthdayGroup)
  .standalone();
export const goldenChocolatePegasus = new Year2021SeasonalScatterType("Golden Chocolate Pegasus")
  .addGroup(munzee10thBirthdayGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const cupcakeSprinkles = new Year2021SeasonalScatterType("Cupcake Sprinkles")
  .addGroup(munzee10thBirthdayGroup)
  .standalone();
export const goldenUnicornSprinkles = new Year2021SeasonalScatterType("Golden Unicorn Sprinkles")
  .addGroup(munzee10thBirthdayGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const stopwatch = new Year2021SeasonalScatterType("Stopwatch")
  .addGroup(munzee10thBirthdayGroup)
  .standalone();
export const goldenStopwatch = new Year2021SeasonalScatterType("Golden Stopwatch")
  .addGroup(munzee10thBirthdayGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
