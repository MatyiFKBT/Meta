import {
  Year2021SeasonalBouncerType,
  Year2021SeasonalScatterType,
  Year2021SeasonalGroup,
} from "./_index";

export const aprilFoolsGroup = new Year2021SeasonalGroup({
  name: "April Fools",
  starts: "2021-04-01T12:00:00-05:00",
  ends: "2021-04-30T23:59:00-05:00",
});

export const bagofTricks = new Year2021SeasonalBouncerType("Bag of Tricks", 2974).addGroup(
  aprilFoolsGroup
);
export const sackofSurprises = new Year2021SeasonalBouncerType("Sack of Surprises").addGroup(
  aprilFoolsGroup
);
export const squirtingFlower = new Year2021SeasonalScatterType("Squirting Flower", 2975)
  .addGroup(aprilFoolsGroup)
  .standalone();
export const sneezingPowder = new Year2021SeasonalScatterType("Sneezing Powder", 2976)
  .addGroup(aprilFoolsGroup)
  .standalone();
export const canofSnakes = new Year2021SeasonalScatterType("Can of Snakes")
  .addGroup(aprilFoolsGroup)
  .standalone();
export const spiderGum = new Year2021SeasonalScatterType("Spider Gum")
  .addGroup(aprilFoolsGroup)
  .standalone();
export const whoopeeCushion = new Year2021SeasonalScatterType("Whoopee Cushion")
  .addGroup(aprilFoolsGroup)
  .standalone();
export const buzzerRing = new Year2021SeasonalScatterType("Buzzer Ring")
  .addGroup(aprilFoolsGroup)
  .standalone();
