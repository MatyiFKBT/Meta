import { Year2018SeasonalBouncerType, Year2018SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const baconDay2018Group = new Year2018SeasonalGroup({
  name: "Bacon Day 2018",
  starts: "2018-00-00T00:00:00-05:00",
  ends: "2018-00-00T00:00:00-05:00",
});

export const americanBacon = new Year2018SeasonalBouncerType("American Bacon", 1523)
  .addGroup(baconDay2018Group)
  .addBouncerLandsOn(greenie);
export const internationalBacon = new Year2018SeasonalBouncerType("International Bacon", 1524)
  .addGroup(baconDay2018Group)
  .addBouncerLandsOn(greenie);
export const flyingPig = new Year2018SeasonalBouncerType("Flying Pig", 1522)
  .addGroup(baconDay2018Group)
  .addBouncerLandsOn(greenie);
