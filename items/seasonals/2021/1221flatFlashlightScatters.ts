import { Year2021SeasonalScatterType, Year2021SeasonalGroup } from "./_index";

export const flatFlashlightScatters = new Year2021SeasonalGroup({
  name: "Flat Flashlight Scatters",
  starts: "2021-12-21T12:00:00-05:00",
  ends: "2021-12-26T23:59:00-05:00",
});

export const theMunzeesFlashlight = new Year2021SeasonalScatterType("The Munzees Flashlight", 3526)
  .standalone()
  .addGroup(flatFlashlightScatters);
export const deezcoBallFlashlight = new Year2021SeasonalScatterType("Deezco Ball Flashlight", 3527)
  .standalone()
  .addGroup(flatFlashlightScatters);
export const lightzaberFlashlight = new Year2021SeasonalScatterType("Lightzaber Flashlight", 3528)
  .standalone()
  .addGroup(flatFlashlightScatters);
export const zailorMoonFlashlight = new Year2021SeasonalScatterType("Zailor Moon Flashlight", 3529)
  .standalone()
  .addGroup(flatFlashlightScatters);
