import { Year2022SeasonalGroup, Year2022SeasonalBouncerType } from "./_index";
import { TypeTags, TypeSet } from "../../common/type";
import { greenie } from "../../normal/misc";

export const nationalHatDayGroup = new Year2022SeasonalGroup({
  name: "National Hat Day",
  starts: "2022-01-14T12:00:00-05:00",
  ends: "2022-02-06T23:59:00-05:00",
});

const hats = [
  "Chef Hat",
  "Beret",
  "Safari Hat",
  "Cowboy Hat",
  "Deer Stalker Hat",
  "Pinwheel Hat",
  "Snow Trapper Hat",
  "Top Hat",
  "Bee Antennae",
  "Captain Hat",
  "Raccoon Skin Cap",
  "Trucker Cap",
];

export const hatSet = new TypeSet();
for (const hatName of hats) {
  hatSet.add(
    new Year2022SeasonalBouncerType(hatName).addGroup(nationalHatDayGroup).addBouncerLandsOn(
      greenie,
      type => type.hasTags(TypeTags.TypeReseller) && !type.hasTags(TypeTags.Scatter),
      type => type.hasTags(TypeTags.TypeVirtual),
      type => type.hasTags(TypeTags.TypeFlat)
    )
  );
}
