import { Year2018SeasonalBouncerType, Year2018SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const valentinesDay2018Group = new Year2018SeasonalGroup({
  name: "Valentine's Day 2018",
  starts: "2018-00-00T00:00:00-05:00",
  ends: "2018-00-00T00:00:00-05:00",
});

export const heartCapper1 = new Year2018SeasonalBouncerType("Heart Capper 1", 1235)
  .addGroup(valentinesDay2018Group)
  .addBouncerLandsOn(greenie);
export const heartCapper2 = new Year2018SeasonalBouncerType("Heart Capper 2", 1236)
  .addGroup(valentinesDay2018Group)
  .addBouncerLandsOn(greenie);
export const heartWrangler1 = new Year2018SeasonalBouncerType("Heart Wrangler 1", 1233)
  .addGroup(valentinesDay2018Group)
  .addBouncerLandsOn(greenie);
export const heartWrangler2 = new Year2018SeasonalBouncerType("Heart Wrangler 2", 1234)
  .addGroup(valentinesDay2018Group)
  .addBouncerLandsOn(greenie);
