import { Year2013SeasonalBouncerType, Year2013SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const emg2013Group = new Year2013SeasonalGroup({
  name: "EMG 2013",
  starts: "2013-00-00T00:00:00-05:00",
  ends: "2013-00-00T00:00:00-05:00",
});

export const emg = new Year2013SeasonalBouncerType("EMG", 39)
  .addGroup(emg2013Group)
  .addBouncerLandsOn(greenie);
