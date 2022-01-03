import { Year2015SeasonalBouncerType, Year2015SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const halloween2015Group = new Year2015SeasonalGroup({
  name: "Halloween 2015",
  starts: "2015-00-00T00:00:00-05:00",
  ends: "2015-00-00T00:00:00-05:00",
});

export const frankensteinBody = new Year2015SeasonalBouncerType("Frankenstein Body", 357)
  .addGroup(halloween2015Group)
  .addBouncerLandsOn(greenie);
export const frankensteinArm = new Year2015SeasonalBouncerType("Frankenstein Arm", 355)
  .addGroup(halloween2015Group)
  .addBouncerLandsOn(greenie);
export const frankensteinHead = new Year2015SeasonalBouncerType("Frankenstein Head", 358)
  .addGroup(halloween2015Group)
  .addBouncerLandsOn(greenie);
export const frankensteinLeg = new Year2015SeasonalBouncerType("Frankenstein Leg", 356)
  .addGroup(halloween2015Group)
  .addBouncerLandsOn(greenie);
export const creepyBag = new Year2015SeasonalBouncerType("Creepy Bag", 354)
  .addGroup(halloween2015Group)
  .addBouncerLandsOn(greenie);
