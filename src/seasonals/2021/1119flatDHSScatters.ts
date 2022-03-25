import { Year2021SeasonalScatterType, Year2021SeasonalGroup } from "./_index";

export const flatDHSScattersGroup = new Year2021SeasonalGroup({
  name: "Flat DHS Scatters",
  starts: "2021-11-19T15:00:00-05:00",
  ends: "2021-11-22T23:59:00-05:00",
});

export const flatFinderTape = new Year2021SeasonalScatterType("Flat Finder Tape", 3405)
  .addGroup(flatDHSScattersGroup)
  .standalone();
export const specterDirectorTape = new Year2021SeasonalScatterType("Specter Director Tape", 3406)
  .addGroup(flatDHSScattersGroup)
  .standalone();
export const qRetaceousCampTape = new Year2021SeasonalScatterType("QRetaceous Camp Tape", 3407)
  .addGroup(flatDHSScattersGroup)
  .standalone();
export const backtoZeeFutureTape = new Year2021SeasonalScatterType("Back to Zee Future Tape", 3408)
  .addGroup(flatDHSScattersGroup)
  .standalone();
