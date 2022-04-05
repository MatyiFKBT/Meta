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

export const limestonePetRock = new Year2022SeasonalBouncerType("Limestone Pet Rock").addGroup(
  petRocksGroup
);
export const sandstonePetRock = new Year2022SeasonalBouncerType("Sandstone Pet Rock").addGroup(
  petRocksGroup
);

export const lightWoodPaintbrush = new Year2022SeasonalScatterType("Light Wood Paintbrush")
  .standalone()
  .addGroup(petRocksGroup);
export const darkWoodPaintbrush = new Year2022SeasonalScatterType("Dark Wood Paintbrush")
  .addGroup(petRocksGroup)
  .standalone();

export const greenPaintBucket = new Year2022SeasonalScatterType("Green Paint Bucket")
  .standalone()
  .addGroup(petRocksGroup);
export const orangePaintBucket = new Year2022SeasonalScatterType("Orange Paint Bucket")
  .standalone()
  .addGroup(petRocksGroup);
export const purplePaintBucket = new Year2022SeasonalScatterType("Purple Paint Bucket")
  .standalone()
  .addGroup(petRocksGroup);
export const aquamarinePaintBucket = new Year2022SeasonalScatterType("Aquamarine Paint Bucket")
  .standalone()
  .addGroup(petRocksGroup);

// export const petRockResultSet = new TypeSet();

// const petRockResults: [string, number?, string?][] = [];

// for (const result of petRockResults) {
//   const type = new Year2022SeasonalScatterType(result[0], result[1])
//     .addGroup(petRocksGroup)
//     .addHidden(TypeHidden.Bouncers);
//   if (result[2]) {
//     type.setIcon(result[2]);
//   }
//   petRockResultSet.add(type);
// }
