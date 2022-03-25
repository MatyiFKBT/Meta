import { Year2021SeasonalScatterType, Year2021SeasonalGroup } from "./_index";

export const discGolfScattersGroup = new Year2021SeasonalGroup({
  name: "Disc Golf Scatters",
  starts: "2021-08-06T15:00:00-05:00",
  ends: "2021-08-09T23:59:00-05:00",
});

export const putterDisc = new Year2021SeasonalScatterType("Putter Disc", 3223)
  .addGroup(discGolfScattersGroup)
  .standalone();
export const midRangeDisc = new Year2021SeasonalScatterType("Mid-Range Disc", 3224)
  .addGroup(discGolfScattersGroup)
  .standalone();
export const driverDisc = new Year2021SeasonalScatterType("Driver Disc", 3225)
  .addGroup(discGolfScattersGroup)
  .standalone();
