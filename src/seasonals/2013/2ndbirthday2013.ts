import { Year2013SeasonalBouncerType, Year2013SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const secondBirthday2013Group = new Year2013SeasonalGroup({
  name: "2nd Birthday 2013",
  starts: "2013-00-00T00:00:00-05:00",
  ends: "2013-00-00T00:00:00-05:00",
});

export const secondBirthday = new Year2013SeasonalBouncerType("2nd Birthday", 45)
  .addGroup(secondBirthday2013Group)
  .addBouncerLandsOn(greenie);
