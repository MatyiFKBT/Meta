import { Year2012SeasonalBouncerType, Year2012SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const birthday2012Group = new Year2012SeasonalGroup({
  name: "Birthday 2012",
  starts: "2012-00-00T00:00:00-05:00",
  ends: "2012-00-00T00:00:00-05:00",
});

export const birthday2012 = new Year2012SeasonalBouncerType("Birthday", 17)
  .addGroup(birthday2012Group)
  .addBouncerLandsOn(greenie);
