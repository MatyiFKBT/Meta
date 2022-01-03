import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const origamiDay2019Group = new Year2019SeasonalGroup({
  name: "Origami Day 2019",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const origamiBoat = new Year2019SeasonalBouncerType("Origami Boat", 2248)
  .addGroup(origamiDay2019Group)
  .addBouncerLandsOn(greenie);
export const origamiButterfly = new Year2019SeasonalBouncerType("Origami Butterfly", 2249)
  .addGroup(origamiDay2019Group)
  .addBouncerLandsOn(greenie);
export const origamiCrane = new Year2019SeasonalBouncerType("Origami Crane", 2246)
  .addGroup(origamiDay2019Group)
  .addBouncerLandsOn(greenie);
export const origamiLily = new Year2019SeasonalBouncerType("Origami Lily", 2247)
  .addGroup(origamiDay2019Group)
  .addBouncerLandsOn(greenie);
