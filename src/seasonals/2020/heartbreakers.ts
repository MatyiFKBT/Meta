import {
  Year2020SeasonalBouncerType,
  Year2020SeasonalGroup,
  Year2020SeasonalPOBType,
} from "./_index";

export const heartbreakersGroup = new Year2020SeasonalGroup({
  name: "Heartbreakers 2020",
  starts: "2020-02-01T00:00:00-05:00",
  ends: "2020-03-31T23:59:00-05:00",
});

export const redHeartbreaker = new Year2020SeasonalPOBType("Red Heartbreaker", 2351).addGroup(
  heartbreakersGroup
);
export const pinkHeartbreaker = new Year2020SeasonalBouncerType("Pink Heartbreaker", 2352).addGroup(
  heartbreakersGroup
);
export const yellowHeartbreaker = new Year2020SeasonalBouncerType(
  "Yellow Heartbreaker",
  2353
).addGroup(heartbreakersGroup);
export const greenHeartbreaker = new Year2020SeasonalBouncerType(
  "Green Heartbreaker",
  2360
).addGroup(heartbreakersGroup);
