import { Year2021SeasonalPOBType, Year2021SeasonalGroup } from "./_index";

export const babyElephantsGroup = new Year2021SeasonalGroup({
  name: "Baby Elephants",
  starts: "2021-08-01T00:00:00-05:00",
  ends: "2021-09-30T23:59:00-05:00",
});

export const blueBabyElephant = new Year2021SeasonalPOBType("Blue Baby Elephant", 3221).addGroup(
  babyElephantsGroup
);
export const pinkBabyElephant = new Year2021SeasonalPOBType("Pink Baby Elephant", 3222).addGroup(
  babyElephantsGroup
);
export const grayBabyElephant = new Year2021SeasonalPOBType("Gray Baby Elephant", 3220).addGroup(
  babyElephantsGroup
);
