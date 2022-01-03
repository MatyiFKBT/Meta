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
export const orangePartyHat = new Year2021SeasonalScatterType("Orange Party Hat")
  .addGroup(christmasCrackersGroup)
  .standalone();
export const greenPartyHat = new Year2021SeasonalScatterType("Green Party Hat")
  .addGroup(christmasCrackersGroup)
  .standalone();
export const bluePartyHat = new Year2021SeasonalScatterType("Blue Party Hat")
  .addGroup(christmasCrackersGroup)
  .standalone();
export const purplePartyHat = new Year2021SeasonalScatterType("Purple Party Hat")
  .addGroup(christmasCrackersGroup)
  .standalone();
export const yellowPartyHat = new Year2021SeasonalScatterType("Yellow Party Hat")
  .addGroup(christmasCrackersGroup)
  .standalone();
export const redPartyHat = new Year2021SeasonalScatterType("Red Party Hat")
  .addGroup(christmasCrackersGroup)
  .standalone();
export const unicornPartyHat = new Year2021SeasonalScatterType("Unicorn Party Hat")
  .addGroup(christmasCrackersGroup)
  .standalone();
export const jollyBeans = new Year2021SeasonalScatterType("Jolly Beans")
  .addGroup(christmasCrackersGroup)
  .standalone();
export const snowflakeSticker = new Year2021SeasonalScatterType("Snowflake Sticker")
  .addGroup(christmasCrackersGroup)
  .standalone();
export const miniOrnament = new Year2021SeasonalScatterType("Mini Ornament")
  .addGroup(christmasCrackersGroup)
  .standalone();
export const festiveCandy = new Year2021SeasonalScatterType("Festive Candy")
  .addGroup(christmasCrackersGroup)
  .standalone();
export const elfShoeLaces = new Year2021SeasonalScatterType("Elf Shoe Laces")
  .addGroup(christmasCrackersGroup)
  .standalone();
export const lightBulbNecklace = new Year2021SeasonalScatterType("Light Bulb Necklace")
  .addGroup(christmasCrackersGroup)
  .standalone();
export const snowSprayDeodorant = new Year2021SeasonalScatterType("Snow Spray Deodorant")
  .addGroup(christmasCrackersGroup)
  .standalone();
export const holidayHairGel = new Year2021SeasonalScatterType("Holiday Hair Gel")
  .addGroup(christmasCrackersGroup)
  .standalone();
export const bubbly = new Year2021SeasonalScatterType("Bubbly")
  .addGroup(christmasCrackersGroup)
  .standalone();
export const chocolateFireworks = new Year2021SeasonalScatterType("Chocolate Fireworks")
  .addIcons("_empty_", "")
  .addGroup(christmasCrackersGroup)
  .standalone();
