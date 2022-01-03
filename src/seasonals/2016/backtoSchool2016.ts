import { Year2016SeasonalBouncerType, Year2016SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const backtoSchool2016Group = new Year2016SeasonalGroup({
  name: "Back to School 2016",
  starts: "2016-00-00T00:00:00-05:00",
  ends: "2016-00-00T00:00:00-05:00",
});

export const backtoSchool2016 = new Year2016SeasonalBouncerType("Back to School 2016", 650)
  .addGroup(backtoSchool2016Group)
  .addBouncerLandsOn(greenie);
