import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const valentinesDay2019Group = new Year2019SeasonalGroup({
  name: "Valentine's Day 2019",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const heavenlyHammock = new Year2019SeasonalBouncerType("Heavenly Hammock", 1762)
  .addGroup(valentinesDay2019Group)
  .addBouncerLandsOn(greenie);
export const greenThrowbackCandyHeart = new Year2019SeasonalBouncerType(
  "Green Throwback Candy Heart",
  1764
)
  .addGroup(valentinesDay2019Group)
  .addBouncerLandsOn(greenie);
export const yellowThrowbackCandyHeart = new Year2019SeasonalBouncerType(
  "Yellow Throwback Candy Heart",
  1763
)
  .addGroup(valentinesDay2019Group)
  .addBouncerLandsOn(greenie);
export const orangeThrowbackCandyHeart = new Year2019SeasonalBouncerType(
  "Orange Throwback Candy Heart",
  1765
)
  .addGroup(valentinesDay2019Group)
  .addBouncerLandsOn(greenie);
export const redThrowbackCandyHeart = new Year2019SeasonalBouncerType(
  "Red Throwback Candy Heart",
  1766
)
  .addGroup(valentinesDay2019Group)
  .addBouncerLandsOn(greenie);
