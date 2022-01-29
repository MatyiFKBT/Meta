import { Year2022SeasonalGroup, Year2022SeasonalBouncerType } from "./_index";
import { TypeTags, TypeSet } from "../../common/type";
import { greenie } from "../../normal/misc";

export const nationalHatDayGroup = new Year2022SeasonalGroup({
  name: "National Hat Day",
  starts: "2022-01-14T12:00:00-05:00",
  ends: "2022-02-06T23:59:00-05:00",
});

const hats: [string, number?][] = [
  ["Chef Hat", 3558],
  ["Beret", 3559],
  ["Safari Hat"],
  ["Cowboy Hat"],
  ["Deer Stalker Hat", 3567],
  ["Pinwheel Hat"],
  ["Snow Trapper Hat"],
  ["Top Hat"],
  ["Bee Antennae", 3563],
  ["Captain Hat"],
  ["Raccoon Skin Cap"],
  ["Trucker Cap", 3562],
];

export const hatSet = new TypeSet();
for (const [hatName, hatId] of hats) {
  hatSet.add(
    new Year2022SeasonalBouncerType(hatName, hatId).addGroup(nationalHatDayGroup).addBouncerLandsOn(
      greenie,
      type => type.hasTags(TypeTags.TypeReseller) && !type.hasTags(TypeTags.Scatter),
      type => type.hasTags(TypeTags.TypeVirtual),
      type => type.hasTags(TypeTags.TypeFlat)
    )
  );
}
