import { TypeSet } from "../../common/type";
import { Year2022SeasonalScatterType, Year2022SeasonalGroup } from "./_index";

export const flatRobScattersGroup = new Year2022SeasonalGroup({
  name: "Flat Rob Scatters",
  starts: "2022-01-14T12:00:00-05:00",
  ends: "2022-01-16T23:59:00-05:00",
});

export const flatRobScatters = new TypeSet(
  ["Munzee Cap", "Bucket Hat", "Fedora", "Snow Hat"].map(name =>
    new Year2022SeasonalScatterType(name).addGroup(flatRobScattersGroup).standalone()
  )
);
