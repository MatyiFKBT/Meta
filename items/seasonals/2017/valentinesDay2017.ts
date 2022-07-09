import { Year2017SeasonalBouncerType, Year2017SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const valentinesDay2017Group = new Year2017SeasonalGroup({
  name: "Valentine's Day 2017",
  starts: "2017-00-00T00:00:00-05:00",
  ends: "2017-00-00T00:00:00-05:00",
});

export const darkChocolate2017 = new Year2017SeasonalBouncerType("Dark Chocolate 2017", 834)
  .addGroup(valentinesDay2017Group)
  .addBouncerLandsOn(greenie);
export const cherryChocolate2017 = new Year2017SeasonalBouncerType("Cherry Chocolate 2017", 833)
  .addGroup(valentinesDay2017Group)
  .addBouncerLandsOn(greenie);
export const coconutChocolate2017 = new Year2017SeasonalBouncerType("Coconut Chocolate 2017", 832)
  .addGroup(valentinesDay2017Group)
  .addBouncerLandsOn(greenie);
export const boxofChocolates2017 = new Year2017SeasonalBouncerType("Box of Chocolates 2017", 831)
  .addGroup(valentinesDay2017Group)
  .addBouncerLandsOn(greenie);
