import { Year2021SeasonalBouncerType, Year2021SeasonalGroup } from "./_index";

export const bowTiesGroup = new Year2021SeasonalGroup({
  name: "Bow Ties",
  starts: "2021-08-18T12:00:00-05:00",
  ends: "2021-08-29T23:59:00-05:00",
});

export const picnicBowTie = new Year2021SeasonalBouncerType("Picnic Bow Tie", 3252).addGroup(
  bowTiesGroup
);
export const redBowTie = new Year2021SeasonalBouncerType("Red Bow Tie", 3253).addGroup(
  bowTiesGroup
);
export const starBowTie = new Year2021SeasonalBouncerType("Star Bow Tie", 3254).addGroup(
  bowTiesGroup
);
export const tuxBowTie = new Year2021SeasonalBouncerType("Tux Bow Tie", 3255).addGroup(
  bowTiesGroup
);
export const checkerboardBowTie = new Year2021SeasonalBouncerType(
  "Checkerboard Bow Tie",
  3256
).addGroup(bowTiesGroup);
export const heartBowTie = new Year2021SeasonalBouncerType("Heart Bow Tie", 3257).addGroup(
  bowTiesGroup
);
export const plaidBowTie = new Year2021SeasonalBouncerType("Plaid Bow Tie", 3258).addGroup(
  bowTiesGroup
);
export const stripedBowTie = new Year2021SeasonalBouncerType("Striped Bow Tie", 3259).addGroup(
  bowTiesGroup
);
