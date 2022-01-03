import { Year2020SeasonalPOBType, Year2020SeasonalGroup } from "./_index";
import { TypeTags } from "../../common/type";
import { skyland, treehouse } from "../../normal/destination";
import { greenie } from "../../normal/misc";
import { airMystery, earthMystery, waterMystery } from "../../normal/mystery";
import { poiCampground } from "../../normal/places";

export const campCrittersGroup = new Year2020SeasonalGroup({
  name: "Camp Critters",
  starts: "2020-08-01T00:00:00-05:00",
  ends: "2020-09-31T23:59:00-05:00",
});

export const babyFox = new Year2020SeasonalPOBType("Baby Fox", 2561)
  .addIcon("undefined")
  .addGroup(campCrittersGroup)
  .addBouncerLandsOn(
    skyland,
    type => type.hasTags(TypeTags.TypeVirtual),
    airMystery,
    poiCampground
  );
export const babyMoose = new Year2020SeasonalPOBType("Baby Moose", 2560)
  .addGroup(campCrittersGroup)
  .addBouncerLandsOn(treehouse, greenie, earthMystery, waterMystery);
export const babySquirrel = new Year2020SeasonalPOBType("Baby Squirrel", 2559)
  .addGroup(campCrittersGroup)
  .addBouncerLandsOn(
    treehouse,
    greenie,
    earthMystery,
    waterMystery,
    skyland,
    type => type.hasTags(TypeTags.TypeVirtual),
    airMystery,
    poiCampground
  );
export const bearCub = new Year2020SeasonalPOBType("Bear Cub", 2558)
  .addGroup(campCrittersGroup)
  .addBouncerLandsOn(
    treehouse,
    greenie,
    earthMystery,
    waterMystery,
    skyland,
    type => type.hasTags(TypeTags.TypeVirtual),
    airMystery,
    poiCampground
  );
