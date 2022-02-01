import {
  Year2021SeasonalBouncerType,
  Year2021SeasonalScatterType,
  Year2021SeasonalGroup,
} from "./_index";

export const tongueTiedSpecialsGroup = new Year2021SeasonalGroup({
  name: "Tongue Tied Specials",
  starts: "2021-10-06T00:00:00-05:00",
  ends: "2021-10-31T23:59:00-05:00",
});

export const megaMouthful = new Year2021SeasonalBouncerType("Mega Mouthful", 3392).addGroup(
  tongueTiedSpecialsGroup
);
export const tongueTwister = new Year2021SeasonalBouncerType("Tongue Twister", 3393).addGroup(
  tongueTiedSpecialsGroup
);
export const woodchuckWood = new Year2021SeasonalScatterType("Woodchuck Wood", 3394)
  .addGroup(tongueTiedSpecialsGroup)
  .standalone();
export const babyBubbles = new Year2021SeasonalScatterType("Baby Bubbles", 3395)
  .addGroup(tongueTiedSpecialsGroup)
  .standalone();
export const sheShells = new Year2021SeasonalScatterType("She Shells")
  .addGroup(tongueTiedSpecialsGroup)
  .standalone();
export const freshFish = new Year2021SeasonalScatterType("Fresh Fish")
  .addGroup(tongueTiedSpecialsGroup)
  .standalone();
export const pickledPeppers = new Year2021SeasonalScatterType("Pickled Peppers")
  .addGroup(tongueTiedSpecialsGroup)
  .standalone();
export const rawGoods = new Year2021SeasonalScatterType("Raw Goods")
  .addGroup(tongueTiedSpecialsGroup)
  .standalone();
export const irishWristwatch = new Year2021SeasonalScatterType("Irish Wristwatch", 3396)
  .addGroup(tongueTiedSpecialsGroup)
  .standalone();
export const botterButter = new Year2021SeasonalScatterType("Botter Butter")
  .addGroup(tongueTiedSpecialsGroup)
  .standalone();
