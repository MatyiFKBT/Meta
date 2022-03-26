import {
  Year2021SeasonalBouncerType,
  Year2021SeasonalScatterType,
  Year2021SeasonalGroup,
} from "./_index";
import { TypeHidden } from "../../common/type";

export const christmasCrackersGroup = new Year2021SeasonalGroup({
  name: "Christmas Crackers",
  starts: "2021-12-07T12:00:00-05:00",
  ends: "2022-01-02T23:59:00-05:00",
});

export const hollyChristmasCracker = new Year2021SeasonalBouncerType("Holly Christmas Cracker")
  .addGroup(christmasCrackersGroup)
  .addHidden(TypeHidden.Capture);
export const jollyChristmasCracker = new Year2021SeasonalBouncerType("Jolly Christmas Cracker")
  .addGroup(christmasCrackersGroup)
  .addHidden(TypeHidden.Capture);
export const orangePartyHat = new Year2021SeasonalScatterType("Orange Party Hat", 3460)
  .addGroup(christmasCrackersGroup)
  .standalone();
export const greenPartyHat = new Year2021SeasonalScatterType("Green Party Hat", 3461)
  .addGroup(christmasCrackersGroup)
  .standalone();
export const bluePartyHat = new Year2021SeasonalScatterType("Blue Party Hat", 3462)
  .addGroup(christmasCrackersGroup)
  .standalone();
export const purplePartyHat = new Year2021SeasonalScatterType("Purple Party Hat", 3463)
  .addGroup(christmasCrackersGroup)
  .standalone();
export const yellowPartyHat = new Year2021SeasonalScatterType("Yellow Party Hat", 3464)
  .addGroup(christmasCrackersGroup)
  .standalone();
export const redPartyHat = new Year2021SeasonalScatterType("Red Party Hat", 3465)
  .addGroup(christmasCrackersGroup)
  .standalone();
export const unicornPartyHat = new Year2021SeasonalScatterType("Unicorn Party Hat", 3466)
  .addGroup(christmasCrackersGroup)
  .standalone();
export const jollyBeans = new Year2021SeasonalScatterType("Jolly Beans", 3468)
  .addGroup(christmasCrackersGroup)
  .standalone();
export const snowflakeSticker = new Year2021SeasonalScatterType("Snowflake Sticker", 3472)
  .addGroup(christmasCrackersGroup)
  .standalone();
export const miniOrnament = new Year2021SeasonalScatterType("Mini Ornament", 3473)
  .addGroup(christmasCrackersGroup)
  .standalone();
export const festiveCandy = new Year2021SeasonalScatterType("Festive Candy", 3467)
  .addGroup(christmasCrackersGroup)
  .standalone();
export const elfShoeLaces = new Year2021SeasonalScatterType("Elf Shoe Laces", 3474)
  .addGroup(christmasCrackersGroup)
  .standalone();
export const lightBulbNecklace = new Year2021SeasonalScatterType("Light Bulb Necklace", 3469)
  .addGroup(christmasCrackersGroup)
  .standalone();
export const snowSprayDeodorant = new Year2021SeasonalScatterType("Snow Spray Deodorant", 3475)
  .addGroup(christmasCrackersGroup)
  .standalone();
export const holidayHairGel = new Year2021SeasonalScatterType("Holiday Hair Gel", 3470)
  .addGroup(christmasCrackersGroup)
  .standalone();
export const bubbly = new Year2021SeasonalScatterType("Bubbly", 3471)
  .addGroup(christmasCrackersGroup)
  .standalone();
export const chocolateFireworks = new Year2021SeasonalScatterType("Chocolate Fireworks", 3476)
  .addIcons("_empty_", "")
  .addGroup(christmasCrackersGroup)
  .standalone();
