import { Year2021SeasonalPOBType, Year2021SeasonalGroup } from "./_index";

export const babyPandaGroup = new Year2021SeasonalGroup({
  name: "Baby Panda",
  starts: "2021-05-21T12:00:00-05:00",
  ends: "2021-07-20T23:59:00-05:00",
});

export const babyPanda = new Year2021SeasonalPOBType("Baby Panda", 3054).addGroup(babyPandaGroup);
export const albinoBabyPanda = new Year2021SeasonalPOBType("Albino Baby Panda", 3055).addGroup(
  babyPandaGroup
);
