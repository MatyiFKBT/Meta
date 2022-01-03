import { Year2021SeasonalPOBType, Year2021SeasonalGroup } from "./_index";
import { TypeTags } from "../../common/type";
import { treehouse } from "../../normal/destination";
import { greenie } from "../../normal/misc";
import { earthMystery, iceMystery } from "../../normal/mystery";

export const hamiltonHamzeeGroup = new Year2021SeasonalGroup({
  name: "Hamilton Hamzee",
  starts: "2021-01-21T00:00:00-06:00",
  ends: "2021-03-15T23:59:00-06:00",
});

export const hamiltonHamzee = new Year2021SeasonalPOBType("Hamilton Hamzee", 2850)
  .addGroup(hamiltonHamzeeGroup)
  .addBouncerLandsOn(treehouse, greenie, earthMystery, iceMystery, type =>
    type.hasTags(TypeTags.TypeSeasonal)
  );
