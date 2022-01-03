import {
  Year2020SeasonalScatterType,
  Year2020SeasonalGroup,
  Year2020SeasonalPOBType,
} from "./_index";

export const christmas2020Group = new Year2020SeasonalGroup({
  name: "Christmas 2020",
  starts: "2020-12-01T00:00:00-05:00",
  ends: "3020-12-31T23:59:00-05:00",
});

export const cyborgSanta = new Year2020SeasonalPOBType("Cyborg Santa", 2695).addGroup(
  christmas2020Group
);
export const cybersaurusRex = new Year2020SeasonalPOBType("Cybersaurus Rex", 2696).addGroup(
  christmas2020Group
);
export const gingerMechMan = new Year2020SeasonalPOBType("GingerMech Man", 2703).addGroup(
  christmas2020Group
);
export const gingerSnappedMan = new Year2020SeasonalPOBType("GingerSnapped Man", 2730).addGroup(
  christmas2020Group
);
export const reinDroid = new Year2020SeasonalPOBType("ReinDroid", 2735).addGroup(
  christmas2020Group
);
export const fleetingReinDroid = new Year2020SeasonalPOBType("Fleeting ReinDroid", 2736).addGroup(
  christmas2020Group
);
export const rUD01PH = new Year2020SeasonalPOBType("RUD01PH", 2737).addGroup(christmas2020Group);
export const fleetingRUD01PH = new Year2020SeasonalPOBType("Fleeting RUD01PH", 2738).addGroup(
  christmas2020Group
);
export const n31F = new Year2020SeasonalPOBType("31F", 2739).addGroup(christmas2020Group);
export const krampBot = new Year2020SeasonalPOBType("KrampBot", 2740).addGroup(christmas2020Group);
export const pixelPresent = new Year2020SeasonalScatterType("Pixel Present", 2704)
  .addGroup(christmas2020Group)
  .standalone();
export const snowball = new Year2020SeasonalScatterType("Snowball", 2697)
  .addGroup(christmas2020Group)
  .standalone();
export const rainbowSnowcone = new Year2020SeasonalScatterType("Rainbow Snowcone", 2699)
  .addGroup(christmas2020Group)
  .standalone();
export const christmaZTree = new Year2020SeasonalScatterType("ChristmaZ Tree", 2700)
  .addGroup(christmas2020Group)
  .standalone();
export const christmaZPickle = new Year2020SeasonalScatterType("ChristmaZ Pickle", 2702)
  .addGroup(christmas2020Group)
  .standalone();
