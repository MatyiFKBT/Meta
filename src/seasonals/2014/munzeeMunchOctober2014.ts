import {
  Year2014SeasonalBouncerType,
  Year2014SeasonalGroup,
  Year2014SeasonalScatterType,
} from "./_index";
import { greenie } from "../../normal/misc";

export const munzeeMunchOctober2014Group = new Year2014SeasonalGroup({
  name: "Munzee Munch October 2014",
  starts: "2014-00-00T00:00:00-05:00",
  ends: "2014-00-00T00:00:00-05:00",
});

export const powerPellet = new Year2014SeasonalBouncerType("Power Pellet", 161)
  .addGroup(munzeeMunchOctober2014Group)
  .addBouncerLandsOn(greenie);
export const munzeeMunch = new Year2014SeasonalScatterType("Ghost", 162)
  .addGroup(munzeeMunchOctober2014Group)
  .physical();
