import { TypeHidden } from "../../common/type";
import {
  Year2022SeasonalGroup,
  Year2022SeasonalBouncerType,
  Year2022SeasonalScatterType,
} from "./_index";

export const mayThe4th2022Group = new Year2022SeasonalGroup({
  name: "May the 4th 2022",
  starts: "2022-05-04T12:00:00-05:00",
  ends: "2022-05-12T23:59:00-05:00",
});

export const zee3p0 = new Year2022SeasonalBouncerType("ZEE-3P0").addGroup(mayThe4th2022Group);
export const zee3p0Scraps = new Year2022SeasonalBouncerType("ZEE-3P0 Scraps")
  .addGroup(mayThe4th2022Group)
  .addHidden(TypeHidden.Bouncers);
export const tinTopper = new Year2022SeasonalScatterType("Tin Topper")
  .addGroup(mayThe4th2022Group)
  .standalone();

export const arf2d2 = new Year2022SeasonalBouncerType("ARF2D2").addGroup(mayThe4th2022Group);
export const swampyArf2d2 = new Year2022SeasonalBouncerType("Swampy ARF2D2")
  .addGroup(mayThe4th2022Group)
  .addHidden(TypeHidden.Bouncers);
export const leashsaber = new Year2022SeasonalScatterType("Leashsaber")
  .addGroup(mayThe4th2022Group)
  .standalone();
