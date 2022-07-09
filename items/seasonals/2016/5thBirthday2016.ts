import { Year2016SeasonalBouncerType, Year2016SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const n5thBirthday2016Group = new Year2016SeasonalGroup({
  name: "5th Birthday [2016]",
  starts: "2016-00-00T00:00:00-05:00",
  ends: "2016-00-00T00:00:00-05:00",
});

export const n5thBirthday = new Year2016SeasonalBouncerType("5th Birthday", 576)
  .addGroup(n5thBirthday2016Group)
  .addBouncerLandsOn(greenie);
export const n5thBirthdayGift = new Year2016SeasonalBouncerType("5th Birthday Gift", 577)
  .addGroup(n5thBirthday2016Group)
  .addBouncerLandsOn(greenie);
