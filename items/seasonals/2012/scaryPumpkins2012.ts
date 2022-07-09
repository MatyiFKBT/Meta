import { Year2012SeasonalBouncerType, Year2012SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const scaryPumpkins2012Group = new Year2012SeasonalGroup({
  name: "Scary Pumpkins 2012",
  starts: "2012-00-00T00:00:00-05:00",
  ends: "2012-00-00T00:00:00-05:00",
});

export const scaryPumpkin = new Year2012SeasonalBouncerType("Scary Pumpkin", 28)
  .addGroup(scaryPumpkins2012Group)
  .addBouncerLandsOn(greenie);
