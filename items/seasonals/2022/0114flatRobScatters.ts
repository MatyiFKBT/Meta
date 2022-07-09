import { TypeSet } from "../../../src/common/type";
import { Year2022SeasonalScatterType, Year2022SeasonalGroup } from "./_index";

export const flatRobScattersGroup = new Year2022SeasonalGroup({
  name: "Flat Rob Scatters",
  starts: "2022-01-14T12:00:00-05:00",
  ends: "2022-01-16T23:59:00-05:00",
});

export const flatRobScatters = new TypeSet(
  (
    [
      ["Munzee Cap", 3554],
      ["Bucket Hat", 3555],
      ["Fedora", 3556],
      ["Snow Hat", 3557],
    ] as const
  ).map(([name, id]) =>
    new Year2022SeasonalScatterType(name, id).addGroup(flatRobScattersGroup).standalone()
  )
);
