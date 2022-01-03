import { Year2018SeasonalBouncerType, Year2018SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const towelDay2018Group = new Year2018SeasonalGroup({
  name: "Towel Day 2018",
  starts: "2018-00-00T00:00:00-05:00",
  ends: "2018-00-00T00:00:00-05:00",
});

export const hitchhiker = new Year2018SeasonalBouncerType("Hitchhiker", 1352)
  .setIcon("hitchhiker2018")
  .addGroup(towelDay2018Group)
  .addBouncerLandsOn(greenie);
export const towelDay2018 = new Year2018SeasonalBouncerType("Towel Day 2018", 1351)
  .addGroup(towelDay2018Group)
  .addBouncerLandsOn(greenie);
