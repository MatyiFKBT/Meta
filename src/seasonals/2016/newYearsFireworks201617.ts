import { Year2016SeasonalBouncerType, Year2016SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const newYearsFireworks201617Group = new Year2016SeasonalGroup({
  name: "New Years Fireworks 2016/17",
  starts: "2016-00-00T00:00:00-05:00",
  ends: "2016-00-00T00:00:00-05:00",
});

export const firework = new Year2016SeasonalBouncerType("Firework", 765)
  .setIcon("firework2016")
  .addGroup(newYearsFireworks201617Group)
  .addBouncerLandsOn(greenie);
export const ignitedFirework = new Year2016SeasonalBouncerType("Ignited Firework", 766)
  .setIcon("ignitedfirework2016")
  .addGroup(newYearsFireworks201617Group)
  .addBouncerLandsOn(greenie);
