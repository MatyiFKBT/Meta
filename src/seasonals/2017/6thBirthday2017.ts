import { Year2017SeasonalBouncerType, Year2017SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const n6thBirthday2017Group = new Year2017SeasonalGroup({
  name: "6th Birthday [2017]",
  starts: "2017-00-00T00:00:00-05:00",
  ends: "2017-00-00T00:00:00-05:00",
});

export const n6thBirthdayBANG = new Year2017SeasonalBouncerType("6th Birthday BANG", 1025)
  .addGroup(n6thBirthday2017Group)
  .addBouncerLandsOn(greenie);
export const n6thBirthdayPOW = new Year2017SeasonalBouncerType("6th Birthday POW", 1024)
  .addGroup(n6thBirthday2017Group)
  .addBouncerLandsOn(greenie);
export const n6thBirthdayBAM = new Year2017SeasonalBouncerType("6th Birthday BAM", 1023)
  .addGroup(n6thBirthday2017Group)
  .addBouncerLandsOn(greenie);
export const spectacular6thBirthdaySpecial = new Year2017SeasonalBouncerType(
  "Spectacular 6th Birthday Special",
  1022
)
  .addGroup(n6thBirthday2017Group)
  .addBouncerLandsOn(greenie);
