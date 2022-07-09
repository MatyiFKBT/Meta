import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";
import { TypeTags } from "../../../src/items/type";
import { treehouse, skyland } from "../../normal/destination";
import { greenie } from "../../normal/misc";
import { earthMystery } from "../../normal/mystery";

export const munzees9thBirthdayGroup = new Year2020SeasonalGroup({
  name: "Munzee's 9th Birthday",
  starts: "2020-07-09T12:00:00-05:00",
  ends: "2020-08-09T23:59:00-05:00",
});

export const redWaterBalloon = new Year2020SeasonalBouncerType("Red Water Balloon", 2545)
  .addGroup(munzees9thBirthdayGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const greenWaterBalloon = new Year2020SeasonalBouncerType("Green Water Balloon", 2546)
  .addGroup(munzees9thBirthdayGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const blueWaterBalloon = new Year2020SeasonalBouncerType("Blue Water Balloon", 2547)
  .addGroup(munzees9thBirthdayGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const yellowWaterBalloon = new Year2020SeasonalBouncerType("Yellow Water Balloon", 2548)
  .addGroup(munzees9thBirthdayGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const campCapALotFlag = new Year2020SeasonalBouncerType("Camp Cap-A-Lot Flag", 2549)
  .addGroup(munzees9thBirthdayGroup)
  .addBouncerLandsOn(greenie, earthMystery, treehouse, skyland, type =>
    type.hasTags(TypeTags.TypeVirtual)
  );
export const campQRantineFlag = new Year2020SeasonalBouncerType("Camp QRantine Flag", 2550)
  .addGroup(munzees9thBirthdayGroup)
  .addBouncerLandsOn(greenie, earthMystery, treehouse, skyland, type =>
    type.hasTags(TypeTags.TypeVirtual)
  );
export const campFrEEZFlag = new Year2020SeasonalBouncerType("Camp FrEEZ Flag", 2551)
  .addGroup(munzees9thBirthdayGroup)
  .addBouncerLandsOn(greenie, earthMystery, treehouse, skyland, type =>
    type.hasTags(TypeTags.TypeVirtual)
  );
export const campKenneZeeFlag = new Year2020SeasonalBouncerType("Camp KenneZee Flag", 2552)
  .addGroup(munzees9thBirthdayGroup)
  .addBouncerLandsOn(greenie, earthMystery, treehouse, skyland, type =>
    type.hasTags(TypeTags.TypeVirtual)
  );
