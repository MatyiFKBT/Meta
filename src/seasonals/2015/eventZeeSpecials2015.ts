import { Year2015SeasonalBouncerType, Year2015SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const eventZeeSpecials2015Group = new Year2015SeasonalGroup({
  name: "EventZee Specials [2015]",
  starts: "2015-00-00T00:00:00-05:00",
  ends: "2015-00-00T00:00:00-05:00",
});

export const eventZee = new Year2015SeasonalBouncerType("EventZee", 202)
  .addGroup(eventZeeSpecials2015Group)
  .addBouncerLandsOn(greenie);
