import { Year2015SeasonalBouncerType, Year2015SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const n4thBirthday2015Group = new Year2015SeasonalGroup({
  name: "4th Birthday [2015]",
  starts: "2015-00-00T00:00:00-05:00",
  ends: "2015-00-00T00:00:00-05:00",
});

export const n4thBirthday = new Year2015SeasonalBouncerType("4th Birthday", 265)
  .addGroup(n4thBirthday2015Group)
  .addBouncerLandsOn(greenie);
export const n4thBirthdayCakeStrawberry = new Year2015SeasonalBouncerType(
  "4th Birthday Cake Strawberry",
  268
)
  .addGroup(n4thBirthday2015Group)
  .addBouncerLandsOn(greenie);
export const n4thBirthdayCakeVanilla = new Year2015SeasonalBouncerType(
  "4th Birthday Cake Vanilla",
  269
)
  .addGroup(n4thBirthday2015Group)
  .addBouncerLandsOn(greenie);
export const n4thBirthdayCakeTurtle = new Year2015SeasonalBouncerType(
  "4th Birthday Cake Turtle",
  266
)
  .addGroup(n4thBirthday2015Group)
  .addBouncerLandsOn(greenie);
export const n4thBirthdayCakeChocolate = new Year2015SeasonalBouncerType(
  "4th Birthday Cake Chocolate",
  267
)
  .addGroup(n4thBirthday2015Group)
  .addBouncerLandsOn(greenie);
