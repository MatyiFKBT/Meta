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
export const beretHat = new Year2022SeasonalBouncerType("Beret Hat")
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
