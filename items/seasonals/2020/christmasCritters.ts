import { Year2020SeasonalGroup, Year2020SeasonalPOBType } from "./_index";
import { TypeTags } from "../../../src/common/type";
import { skyland, treehouse } from "../../normal/destination";
import { greenie } from "../../normal/misc";
import { waterMystery, electricMystery, iceMystery } from "../../normal/mystery";

export const christmasCrittersGroup = new Year2020SeasonalGroup({
  name: "Christmas Critters",
  starts: "2020-11-01T00:00:00-05:00",
  ends: "2020-12-31T23:59:00-05:00",
});

export const babyHippo = new Year2020SeasonalPOBType("Baby Hippo", 2648)
  .addGroup(christmasCrittersGroup)
  .addBouncerLandsOn(treehouse, greenie, waterMystery);
export const babyAlpaca = new Year2020SeasonalPOBType("Baby Alpaca", 2649)
  .addGroup(christmasCrittersGroup)
  .addBouncerLandsOn(skyland, type => type.hasTags(TypeTags.TypeVirtual), electricMystery);
export const babyReindeer = new Year2020SeasonalPOBType("Baby Reindeer", 2647)
  .addGroup(christmasCrittersGroup)
  .addBouncerLandsOn(treehouse, greenie, iceMystery, skyland, type =>
    type.hasTags(TypeTags.TypeVirtual)
  );
