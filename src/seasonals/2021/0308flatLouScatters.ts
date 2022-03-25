import { Year2021SeasonalScatterType, Year2021SeasonalGroup } from "./_index";

export const flatLouScattersGroup = new Year2021SeasonalGroup({
  name: "Flat Lou Scatters",
  starts: "2021-03-08T12:00:00-05:00",
  ends: "2021-03-31T23:59:00-05:00",
});

export const waterBottle = new Year2021SeasonalScatterType("Water Bottle", 2935)
  .addGroup(flatLouScattersGroup)
  .standalone();
