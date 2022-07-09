import { Year2017SeasonalBouncerType, Year2017SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const aprilFoolsDay2017Group = new Year2017SeasonalGroup({
  name: "April Fool's Day 2017",
  starts: "2017-00-00T00:00:00-05:00",
  ends: "2017-00-00T00:00:00-05:00",
});

export const thePrankster = new Year2017SeasonalBouncerType("The Prankster", 863)
  .addGroup(aprilFoolsDay2017Group)
  .addBouncerLandsOn(greenie);
