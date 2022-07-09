import { Year2015SeasonalBouncerType, Year2015SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const aprilFoolsDay2015Group = new Year2015SeasonalGroup({
  name: "April Fool's Day 2015",
  starts: "2015-00-00T00:00:00-05:00",
  ends: "2015-00-00T00:00:00-05:00",
});

export const sillyman = new Year2015SeasonalBouncerType("Sillyman", 220)
  .addGroup(aprilFoolsDay2015Group)
  .addBouncerLandsOn(greenie);
