import { Year2018SeasonalBouncerType, Year2018SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const internationalYogaDayGroup = new Year2018SeasonalGroup({
  name: "International Yoga Day",
  starts: "2018-00-00T00:00:00-05:00",
  ends: "2018-00-00T00:00:00-05:00",
});

export const cobraYogaPose = new Year2018SeasonalBouncerType("Cobra Yoga Pose", 1374)
  .addGroup(internationalYogaDayGroup)
  .addBouncerLandsOn(greenie);
export const downwardDogYogaPose = new Year2018SeasonalBouncerType("Downward Dog Yoga Pose", 1375)
  .addGroup(internationalYogaDayGroup)
  .addBouncerLandsOn(greenie);
export const lotusYogaPose = new Year2018SeasonalBouncerType("Lotus Yoga Pose", 1376)
  .addGroup(internationalYogaDayGroup)
  .addBouncerLandsOn(greenie);
export const warriorIIYogaPose = new Year2018SeasonalBouncerType("Warrior II Yoga Pose", 1377)
  .addGroup(internationalYogaDayGroup)
  .addBouncerLandsOn(greenie);
