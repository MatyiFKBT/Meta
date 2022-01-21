import { Year2022SeasonalGroup, Year2022SeasonalBouncerType } from "./_index";
import { TypeTags } from "../../common/type";
import { greenie } from "../../normal/misc";

export const nationalHatDayGroup = new Year2022SeasonalGroup({
  name: "National Hat Day",
  starts: "2022-01-14T12:00:00-05:00",
  ends: "2022-02-06T23:59:00-05:00",
});

export const chefHat = new Year2022SeasonalBouncerType("Chef Hat")
  .addGroup(nationalHatDayGroup)
  .addBouncerLandsOn(
    greenie,
    type => type.hasTags(TypeTags.TypeReseller) && !type.hasTags(TypeTags.Scatter),
    type => type.hasTags(TypeTags.TypeVirtual),
    type => type.hasTags(TypeTags.TypeFlat)
  );
export const beret = new Year2022SeasonalBouncerType("Beret")
  .addGroup(nationalHatDayGroup)
  .addBouncerLandsOn(
    greenie,
    type => type.hasTags(TypeTags.TypeReseller) && !type.hasTags(TypeTags.Scatter),
    type => type.hasTags(TypeTags.TypeVirtual),
    type => type.hasTags(TypeTags.TypeFlat)
  );
export const safariHat = new Year2022SeasonalBouncerType("Safari Hat")
  .addGroup(nationalHatDayGroup)
  .addBouncerLandsOn(
    greenie,
    type => type.hasTags(TypeTags.TypeReseller) && !type.hasTags(TypeTags.Scatter),
    type => type.hasTags(TypeTags.TypeVirtual),
    type => type.hasTags(TypeTags.TypeFlat)
  );
export const cowboyHat = new Year2022SeasonalBouncerType("Cowboy Hat")
  .addGroup(nationalHatDayGroup)
  .addBouncerLandsOn(
    greenie,
    type => type.hasTags(TypeTags.TypeReseller) && !type.hasTags(TypeTags.Scatter),
    type => type.hasTags(TypeTags.TypeVirtual),
    type => type.hasTags(TypeTags.TypeFlat)
  );
export const deerStalkerHat = new Year2022SeasonalBouncerType("Deer Stalker Hat")
  .addGroup(nationalHatDayGroup)
  .addBouncerLandsOn(
    greenie,
    type => type.hasTags(TypeTags.TypeReseller) && !type.hasTags(TypeTags.Scatter),
    type => type.hasTags(TypeTags.TypeVirtual),
    type => type.hasTags(TypeTags.TypeFlat)
  );
export const pinWheelHat = new Year2022SeasonalBouncerType("Pin Wheel Hat")
  .addGroup(nationalHatDayGroup)
  .addBouncerLandsOn(
    greenie,
    type => type.hasTags(TypeTags.TypeReseller) && !type.hasTags(TypeTags.Scatter),
    type => type.hasTags(TypeTags.TypeVirtual),
    type => type.hasTags(TypeTags.TypeFlat)
  );
export const snowTrapperHat = new Year2022SeasonalBouncerType("Snow Trapper Hat")
  .addGroup(nationalHatDayGroup)
  .addBouncerLandsOn(
    greenie,
    type => type.hasTags(TypeTags.TypeReseller) && !type.hasTags(TypeTags.Scatter),
    type => type.hasTags(TypeTags.TypeVirtual),
    type => type.hasTags(TypeTags.TypeFlat)
  );
export const topHat = new Year2022SeasonalBouncerType("Top Hat")
  .addGroup(nationalHatDayGroup)
  .addBouncerLandsOn(
    greenie,
    type => type.hasTags(TypeTags.TypeReseller) && !type.hasTags(TypeTags.Scatter),
    type => type.hasTags(TypeTags.TypeVirtual),
    type => type.hasTags(TypeTags.TypeFlat)
  );
