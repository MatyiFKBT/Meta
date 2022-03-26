import { Year2013SeasonalBouncerType, Year2013SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const christmas2013Group = new Year2013SeasonalGroup({
  name: "2013 Christmas Specials",
  starts: "2013-00-00T00:00:00-05:00",
  ends: "2013-00-00T00:00:00-05:00",
});

export const coal = new Year2013SeasonalBouncerType("Coal", 81)
  .addGroup(christmas2013Group)
  .addBouncerLandsOn(greenie);
export const menorah = new Year2013SeasonalBouncerType("Menorah", 82)
  .addGroup(christmas2013Group)
  .addBouncerLandsOn(greenie);
export const christmasTree = new Year2013SeasonalBouncerType("Christmas Tree", 83)
  .addGroup(christmas2013Group)
  .addBouncerLandsOn(greenie);
export const christmasPickle = new Year2013SeasonalBouncerType("Christmas Pickle", 84)
  .addGroup(christmas2013Group)
  .addBouncerLandsOn(greenie);
export const woodenShoe = new Year2013SeasonalBouncerType("Wooden Shoe", 85)
  .addGroup(christmas2013Group)
  .addBouncerLandsOn(greenie);
export const stocking = new Year2013SeasonalBouncerType("Stocking", 86)
  .addGroup(christmas2013Group)
  .addBouncerLandsOn(greenie);
export const wreath = new Year2013SeasonalBouncerType("Wreath", 87)
  .addGroup(christmas2013Group)
  .addBouncerLandsOn(greenie);
export const snowman = new Year2013SeasonalBouncerType("Snowman", 88)
  .addGroup(christmas2013Group)
  .addBouncerLandsOn(greenie);
export const gingerbreadMan = new Year2013SeasonalBouncerType("Gingerbread Man", 89)
  .addGroup(christmas2013Group)
  .addBouncerLandsOn(greenie);
export const candyCane2013 = new Year2013SeasonalBouncerType("Candy Cane 2013", 90)
  .addGroup(christmas2013Group)
  .addBouncerLandsOn(greenie);
export const christmasGift = new Year2013SeasonalBouncerType("Christmas Gift", 91)
  .addGroup(christmas2013Group)
  .addBouncerLandsOn(greenie);
export const santa = new Year2013SeasonalBouncerType("Santa", 92)
  .addGroup(christmas2013Group)
  .addBouncerLandsOn(greenie);
