import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";
import { TypeTags, TypeHidden, TypeState } from "../../../src/items/type";
import { egg } from "../../evolutions/education";
import { eggs } from "../../evolutions/farm";
import { greenie } from "../../normal/misc";

export const wallaEggZGroup = new Year2020SeasonalGroup({
  name: "Walla EggZ",
  starts: "2020-11-24T12:00:00-05:00",
  ends: "2020-12-15T23:59:00-05:00",
});

export const wallaJoyEgg = new Year2020SeasonalBouncerType("Walla Joy Egg")
  .addGroup(wallaEggZGroup)
  .addHidden(TypeHidden.Capture)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    eggs,
    type => type.hasTags(TypeTags.TypeGaming) && type.state === TypeState.Virtual
  );
export const wallaSurpriseEgg = new Year2020SeasonalBouncerType("Walla Surprise Egg")
  .addGroup(wallaEggZGroup)
  .addHidden(TypeHidden.Capture)
  .addBouncerLandsOn(
    greenie,
    egg,
    type => type.hasTags(TypeTags.TypeGaming) && type.state === TypeState.Physical
  );
export const chocolateHoneycombs = new Year2020SeasonalBouncerType("Chocolate Honeycombs", 2714)
  .addGroup(wallaEggZGroup)
  .addHidden(TypeHidden.Bouncers);
export const greenUnicornToyRocker = new Year2020SeasonalBouncerType(
  "Green Unicorn Toy Rocker",
  2710
)
  .addGroup(wallaEggZGroup)
  .addHidden(TypeHidden.Bouncers);
export const mixedCandy = new Year2020SeasonalBouncerType("Mixed Candy", 2709)
  .addGroup(wallaEggZGroup)
  .addHidden(TypeHidden.Bouncers);
export const miniBubbles = new Year2020SeasonalBouncerType("Mini Bubbles", 2712)
  .addGroup(wallaEggZGroup)
  .addHidden(TypeHidden.Bouncers);
export const popperToy = new Year2020SeasonalBouncerType("Popper Toy", 2707)
  .addGroup(wallaEggZGroup)
  .addHidden(TypeHidden.Bouncers);
export const gummyWallaBees = new Year2020SeasonalBouncerType("Gummy WallaBees", 2713)
  .addGroup(wallaEggZGroup)
  .addHidden(TypeHidden.Bouncers);
export const plasticDinosaur = new Year2020SeasonalBouncerType("Plastic Dinosaur", 2708)
  .addGroup(wallaEggZGroup)
  .addHidden(TypeHidden.Bouncers);
export const pinkUnicornToyRocker = new Year2020SeasonalBouncerType("Pink Unicorn Toy Rocker", 2715)
  .addGroup(wallaEggZGroup)
  .addHidden(TypeHidden.Bouncers);
