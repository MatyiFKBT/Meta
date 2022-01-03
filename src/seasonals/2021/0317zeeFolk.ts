import { Year2021SeasonalBouncerType, Year2021SeasonalGroup } from "./_index";

export const zeeFolkGroup = new Year2021SeasonalGroup({
  name: "Zee Folk",
  starts: "2021-03-17T00:00:00-05:00",
  ends: "2021-03-31T23:59:00-05:00",
});

export const zeeFolk = new Year2021SeasonalBouncerType("Zee Folk").addGroup(zeeFolkGroup);
