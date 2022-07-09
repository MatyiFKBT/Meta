import { greenie, shamrock } from "../../normal/misc";
import { earthMystery } from "../../normal/mystery";
import {
  Year2020SeasonalBouncerType,
  Year2020SeasonalScatterType,
  Year2020SeasonalGroup,
} from "./_index";

export const rainbowTrail2020Group = new Year2020SeasonalGroup({
  name: "Rainbow Trail 2020",
  starts: "2020-03-17T13:00:00-05:00",
  ends: "2020-03-31T23:59:00-05:00",
});

export const rainbowTrail = new Year2020SeasonalBouncerType("Rainbow Trail", 2394)
  .addGroup(rainbowTrail2020Group)
  .addBouncerLandsOn(greenie, shamrock, earthMystery);
export const redZED = new Year2020SeasonalScatterType("Red ZED", 2395)
  .addGroup(rainbowTrail2020Group)
  .standalone();
export const orangeZED = new Year2020SeasonalScatterType("Orange ZED", 2396)
  .addGroup(rainbowTrail2020Group)
  .standalone();
export const yellowZED = new Year2020SeasonalScatterType("Yellow ZED", 2397)
  .addGroup(rainbowTrail2020Group)
  .standalone();
export const greenZED = new Year2020SeasonalScatterType("Green ZED", 2398)
  .addGroup(rainbowTrail2020Group)
  .standalone();
export const blueZED = new Year2020SeasonalScatterType("Blue ZED", 2399)
  .addGroup(rainbowTrail2020Group)
  .standalone();
export const indigoZED = new Year2020SeasonalScatterType("Indigo ZED", 2400)
  .addGroup(rainbowTrail2020Group)
  .standalone();
export const violetZED = new Year2020SeasonalScatterType("Violet ZED", 2401)
  .addGroup(rainbowTrail2020Group)
  .standalone();
