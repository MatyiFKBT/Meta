import { Year2013SeasonalGroup, Year2013SeasonalType } from "./_index";

export const quadFrog2013Group = new Year2013SeasonalGroup({
  name: "Quad Frog 2013",
  starts: "2013-00-00T00:00:00-05:00",
  ends: "2013-00-00T00:00:00-05:00",
});

export const quadFrog = new Year2013SeasonalType("Quad Frog", 78)
  .addGroup(quadFrog2013Group)
  .physical();
