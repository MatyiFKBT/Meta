import { Year2014SeasonalBouncerType, Year2014SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const pinatas2014Group = new Year2014SeasonalGroup({
  name: "Pinatas 2014",
  starts: "2014-00-00T00:00:00-05:00",
  ends: "2014-00-00T00:00:00-05:00",
});

export const pinataDrop = new Year2014SeasonalBouncerType("Pinata Drop", 133)
  .addGroup(pinatas2014Group)
  .addBouncerLandsOn(greenie);
export const pinataMint = new Year2014SeasonalBouncerType("Pinata Mint", 134)
  .addGroup(pinatas2014Group)
  .addBouncerLandsOn(greenie);
export const pinataLollipop = new Year2014SeasonalBouncerType("Pinata Lollipop", 135)
  .addGroup(pinatas2014Group)
  .addBouncerLandsOn(greenie);
