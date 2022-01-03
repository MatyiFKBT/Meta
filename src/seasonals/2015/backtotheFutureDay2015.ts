import { Year2015SeasonalBouncerType, Year2015SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const backtotheFutureDay2015Group = new Year2015SeasonalGroup({
  name: "Back to the Future Day [2015]",
  starts: "2015-00-00T00:00:00-05:00",
  ends: "2015-00-00T00:00:00-05:00",
});

export const backtotheFutureDay = new Year2015SeasonalBouncerType("Back to the Future Day", 346)
  .addGroup(backtotheFutureDay2015Group)
  .addBouncerLandsOn(greenie);
