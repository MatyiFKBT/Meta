import { Year2018SeasonalBouncerType, Year2018SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const worldPhotoDayGroup = new Year2018SeasonalGroup({
  name: "World Photo Day",
  starts: "2018-00-00T00:00:00-05:00",
  ends: "2018-00-00T00:00:00-05:00",
});

export const worldPhotoDay = new Year2018SeasonalBouncerType("World Photo Day", 1519)
  .setIcon("worldphotoday2018")
  .addGroup(worldPhotoDayGroup)
  .addBouncerLandsOn(greenie);
