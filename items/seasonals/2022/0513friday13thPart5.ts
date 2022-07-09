import { Year2022SeasonalGroup, Year2022SeasonalBouncerType } from "./_index";

export const flatDayPt3Group = new Year2022SeasonalGroup({
  name: "Flat Day the 13th Part 5",
  starts: "2022-05-13T12:00:00-05:00",
  ends: "2022-05-29T23:59:00-05:00",
});

export const openUmbrella = new Year2022SeasonalBouncerType("Open Umbrella", 3731).addGroup(
  flatDayPt3Group
);
export const cursedChange = new Year2022SeasonalBouncerType("Cursed Change", 3732).addGroup(
  flatDayPt3Group
);
export const spilledSalt = new Year2022SeasonalBouncerType("Spilled Salt", 3733).addGroup(
  flatDayPt3Group
);
export const brokenMirror = new Year2022SeasonalBouncerType("Broken Mirror", 3734).addGroup(
  flatDayPt3Group
);
export const ladder = new Year2022SeasonalBouncerType("Ladder", 3735).addGroup(flatDayPt3Group);
export const hotelKey = new Year2022SeasonalBouncerType("Hotel Key", 3736).addGroup(
  flatDayPt3Group
);
export const chopsticks = new Year2022SeasonalBouncerType("Chopsticks", 3737).addGroup(
  flatDayPt3Group
);
