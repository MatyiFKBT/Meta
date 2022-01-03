import { Year2018SeasonalBouncerType, Year2018SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const zombieOutbreakGroup = new Year2018SeasonalGroup({
  name: "Zombie Outbreak",
  starts: "2018-00-00T00:00:00-05:00",
  ends: "2018-00-00T00:00:00-05:00",
});

export const zombieOutbreak = new Year2018SeasonalBouncerType("Zombie Outbreak", 1589)
  .setIcon("zombieoutbreak2018")
  .addGroup(zombieOutbreakGroup)
  .addBouncerLandsOn(greenie);
