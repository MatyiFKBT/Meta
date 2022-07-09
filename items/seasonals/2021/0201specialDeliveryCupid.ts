import {
  Year2021SeasonalPOBType,
  Year2021SeasonalScatterType,
  Year2021SeasonalGroup,
} from "./_index";
import { TypeTags } from "../../../src/common/type";
import { treehouse, skyland } from "../../normal/destination";
import { greenie } from "../../normal/misc";
import { fireMystery, airMystery } from "../../normal/mystery";
import { poiPostOffice } from "../../normal/places";

export const specialDeliveryCupidGroup = new Year2021SeasonalGroup({
  name: "Special Delivery Cupid",
  starts: "2021-02-01T00:00:00-06:00",
  ends: "2021-02-28T23:59:00-06:00",
});

export const specialDeliveryCupid = new Year2021SeasonalPOBType("Special Delivery Cupid", 2851)
  .addGroup(specialDeliveryCupidGroup)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    greenie,
    fireMystery,
    airMystery,
    poiPostOffice,
    type => type.hasTags(TypeTags.TypeVirtual),
    type => type.hasTags(TypeTags.TypeReseller),
    type => type.hasTags(TypeTags.TypeSeasonal)
  );
export const heartArrow = new Year2021SeasonalScatterType("Heart Arrow", 2852)
  .addGroup(specialDeliveryCupidGroup)
  .standalone();
