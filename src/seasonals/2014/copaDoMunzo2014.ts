import { Year2014SeasonalBouncerType, Year2014SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const copaDoMunzo2014Group = new Year2014SeasonalGroup({
  name: "Copa Do Munzo 2014",
  starts: "2014-00-00T00:00:00-05:00",
  ends: "2014-00-00T00:00:00-05:00",
});

export const copaDoMunzo = new Year2014SeasonalBouncerType("Copa Do Munzo", 127)
  .addGroup(copaDoMunzo2014Group)
  .addBouncerLandsOn(greenie);
