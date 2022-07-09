import { Year2017SeasonalBouncerType, Year2017SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const internationalLeftHandersDay2017Group = new Year2017SeasonalGroup({
  name: "International Left-Handers Day [2017]",
  starts: "2017-00-00T00:00:00-05:00",
  ends: "2017-00-00T00:00:00-05:00",
});

export const leftHandedThumbsUp = new Year2017SeasonalBouncerType("Left-Handed Thumbs Up", 1106)
  .addGroup(internationalLeftHandersDay2017Group)
  .addBouncerLandsOn(greenie);
export const internationalLeftiesDay2017 = new Year2017SeasonalBouncerType(
  "International Lefties Day 2017",
  1105
)
  .addGroup(internationalLeftHandersDay2017Group)
  .addBouncerLandsOn(greenie);
