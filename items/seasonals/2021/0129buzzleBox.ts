import {
  Year2021SeasonalBouncerType,
  Year2021SeasonalScatterType,
  Year2021SeasonalGroup,
} from "./_index";
import { TypeState, TypeTags } from "../../../src/common/type";
import { greenie } from "../../normal/misc";
import { joystickPhysical } from "../../normal/gaming";

export const buzzleBoxGroup = new Year2021SeasonalGroup({
  name: "Buzzle Box",
  starts: "2021-01-29T00:00:00-06:00",
  ends: "2021-02-21T23:59:00-06:00",
});

export const buzzleBox = new Year2021SeasonalBouncerType("Buzzle Box", 2856)
  .addGroup(buzzleBoxGroup)
  .addBouncerLandsOn(
    greenie,
    joystickPhysical,
    type => type.hasTags(TypeTags.TypeMystery) && type.state === TypeState.Physical
  );
export const redBuzzlePiece1 = new Year2021SeasonalScatterType("Red Buzzle Piece 1", 2857)
  .addGroup(buzzleBoxGroup)
  .standalone();
export const redBuzzlePiece2 = new Year2021SeasonalScatterType("Red Buzzle Piece 2", 2858)
  .addGroup(buzzleBoxGroup)
  .standalone();
export const redBuzzlePiece3 = new Year2021SeasonalScatterType("Red Buzzle Piece 3", 2859)
  .addGroup(buzzleBoxGroup)
  .standalone();
export const redBuzzlePiece4 = new Year2021SeasonalScatterType("Red Buzzle Piece 4", 2860)
  .addGroup(buzzleBoxGroup)
  .standalone();
export const greenBuzzlePiece1 = new Year2021SeasonalScatterType("Green Buzzle Piece 1", 2861)
  .addGroup(buzzleBoxGroup)
  .standalone();
export const greenBuzzlePiece2 = new Year2021SeasonalScatterType("Green Buzzle Piece 2", 2862)
  .addGroup(buzzleBoxGroup)
  .standalone();
export const greenBuzzlePiece3 = new Year2021SeasonalScatterType("Green Buzzle Piece 3", 2863)
  .addGroup(buzzleBoxGroup)
  .standalone();
export const greenBuzzlePiece4 = new Year2021SeasonalScatterType("Green Buzzle Piece 4", 2864)
  .addGroup(buzzleBoxGroup)
  .standalone();
export const yellowBuzzlePiece1 = new Year2021SeasonalScatterType("Yellow Buzzle Piece 1", 2865)
  .addGroup(buzzleBoxGroup)
  .standalone();
export const yellowBuzzlePiece2 = new Year2021SeasonalScatterType("Yellow Buzzle Piece 2", 2866)
  .addGroup(buzzleBoxGroup)
  .standalone();
export const yellowBuzzlePiece3 = new Year2021SeasonalScatterType("Yellow Buzzle Piece 3", 2867)
  .addGroup(buzzleBoxGroup)
  .standalone();
export const yellowBuzzlePiece4 = new Year2021SeasonalScatterType("Yellow Buzzle Piece 4", 2868)
  .addGroup(buzzleBoxGroup)
  .standalone();
