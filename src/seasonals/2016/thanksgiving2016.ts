import { Year2016SeasonalBouncerType, Year2016SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const thanksgiving2016Group = new Year2016SeasonalGroup({
  name: "Thanksgiving 2016",
  starts: "2016-00-00T00:00:00-05:00",
  ends: "2016-00-00T00:00:00-05:00",
});

export const thanksgiving2018 = new Year2016SeasonalBouncerType("Thanksgiving 2016", 724)
  .setIcon("thanksgiving2016")
  .addGroup(thanksgiving2016Group)
  .addBouncerLandsOn(greenie);
