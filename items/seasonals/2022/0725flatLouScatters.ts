import { TypeSet } from "../../../src/items/type";
import { Year2022SeasonalScatterType, Year2022SeasonalGroup } from "./_index";

export const flatLouScattersGroup = new Year2022SeasonalGroup({
  name: "Flat Lou Scatters for Tour de France",
  starts: "2022-07-25T12:00:00-05:00",
  ends: "2022-07-31T23:59:00-05:00",
});

export const flatLouScatters = new TypeSet(
  (
    [
      ["Grapes", 3921],
      ["Wedge of Cheese", 3922],
      ["Baguette", 3923],
      ["Champagne Bottle", 3924],
    ] as [string, number?][]
  ).map(([name, id]) =>
    new Year2022SeasonalScatterType(name, id).addGroup(flatLouScattersGroup).standalone()
  )
);
