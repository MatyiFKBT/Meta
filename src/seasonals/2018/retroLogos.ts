import { Year2018SeasonalBouncerType, Year2018SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const retroLogosGroup = new Year2018SeasonalGroup({
  name: "Retro Logos",
  starts: "2018-00-00T00:00:00-05:00",
  ends: "2018-00-00T00:00:00-05:00",
});

export const n2018MunzeeLogo = new Year2018SeasonalBouncerType("2018 Munzee Logo", 1636)
  .addGroup(retroLogosGroup)
  .addBouncerLandsOn(greenie);
export const n2015MunzeeLogo = new Year2018SeasonalBouncerType("2015 Munzee Logo", 1635)
  .addGroup(retroLogosGroup)
  .addBouncerLandsOn(greenie);
export const n2014MunzeeLogo = new Year2018SeasonalBouncerType("2014 Munzee Logo", 1634)
  .addGroup(retroLogosGroup)
  .addBouncerLandsOn(greenie);
export const n2013MunzeeLogo = new Year2018SeasonalBouncerType("2013 Munzee Logo", 1633)
  .addGroup(retroLogosGroup)
  .addBouncerLandsOn(greenie);
export const n2011MunzeeLogo = new Year2018SeasonalBouncerType("2011 Munzee Logo", 1632)
  .addGroup(retroLogosGroup)
  .addBouncerLandsOn(greenie);
