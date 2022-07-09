import { Year2017SeasonalBouncerType, Year2017SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const worldDiabetesDay2017Group = new Year2017SeasonalGroup({
  name: "World Diabetes Day 2017",
  starts: "2017-00-00T00:00:00-05:00",
  ends: "2017-00-00T00:00:00-05:00",
});

export const worldDiabetesDay2017 = new Year2017SeasonalBouncerType("World Diabetes Day 2017", 1163)
  .addGroup(worldDiabetesDay2017Group)
  .addBouncerLandsOn(greenie);
