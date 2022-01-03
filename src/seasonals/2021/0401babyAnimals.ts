import { Year2021SeasonalPOBType, Year2021SeasonalGroup } from "./_index";

export const babyAnimalsGroup = new Year2021SeasonalGroup({
  name: "Baby Animals",
  starts: "2021-04-01T00:00:00-05:00",
  ends: "2021-05-31T23:59:00-05:00",
});

export const dogePup = new Year2021SeasonalPOBType("Doge Pup").addGroup(babyAnimalsGroup);
export const ittyBittyKitty = new Year2021SeasonalPOBType("Itty Bitty Kitty").addGroup(
  babyAnimalsGroup
);
export const babyMonkey = new Year2021SeasonalPOBType("Baby Monkey").addGroup(babyAnimalsGroup);
