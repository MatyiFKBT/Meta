import {
  Year2022SeasonalGroup,
  Year2022SeasonalBouncerType,
  Year2022SeasonalScatterType,
} from "./_index";

export const petRocksGroup = new Year2022SeasonalGroup({
  name: "Pet Rocks",
  starts: "2022-04-04T12:00:00-05:00",
  ends: "2022-04-17T23:59:00-05:00",
});

export const limestonePetRock = new Year2022SeasonalBouncerType(
  "Limestone Pet Rock",
  3677
).addGroup(petRocksGroup);
export const sandstonePetRock = new Year2022SeasonalBouncerType(
  "Sandstone Pet Rock",
  3678
).addGroup(petRocksGroup);

export const lightWoodPaintbrush = new Year2022SeasonalScatterType("Light Wood Paintbrush", 3679)
  .standalone()
  .addGroup(petRocksGroup);
export const darkWoodPaintbrush = new Year2022SeasonalScatterType("Dark Wood Paintbrush", 3680)
  .addGroup(petRocksGroup)
  .standalone();

export const greenPaintBucket = new Year2022SeasonalScatterType("Green Paint Bucket", 3681)
  .standalone()
  .addGroup(petRocksGroup);
export const orangePaintBucket = new Year2022SeasonalScatterType("Orange Paint Bucket", 3682)
  .standalone()
  .addGroup(petRocksGroup);
export const purplePaintBucket = new Year2022SeasonalScatterType("Purple Paint Bucket", 3683)
  .standalone()
  .addGroup(petRocksGroup);
export const aquamarinePaintBucket = new Year2022SeasonalScatterType(
  "Aquamarine Paint Bucket",
  3684
)
  .standalone()
  .addGroup(petRocksGroup);
