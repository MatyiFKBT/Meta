import { TypeHidden } from "../../common/type";
import {
  Year2022SeasonalGroup,
  Year2022SeasonalBouncerType,
  Year2022SeasonalScatterType,
} from "./_index";

export const marchFourthGroup = new Year2022SeasonalGroup({
  name: "March Fourth",
  starts: "2022-05-04T12:00:00-05:00",
  ends: "2022-05-12T23:59:00-05:00",
});

export const zee3p0 = new Year2022SeasonalBouncerType("ZEE-3P0").addGroup(marchFourthGroup);
export const zee3p0Scraps = new Year2022SeasonalBouncerType("ZEE-3P0 Scraps")
  .addGroup(marchFourthGroup)
  .addHidden(TypeHidden.Bouncers);
export const tinTopper = new Year2022SeasonalScatterType("Tin Topper")
  .addGroup(marchFourthGroup)
  .standalone();

export const arf2d2 = new Year2022SeasonalBouncerType("ARF2D2").addGroup(marchFourthGroup);
export const swampyArf2d2 = new Year2022SeasonalBouncerType("Swampy ARF2D2")
  .addGroup(marchFourthGroup)
  .addHidden(TypeHidden.Bouncers);
export const leashsaber = new Year2022SeasonalScatterType("Leashsaber")
  .addGroup(marchFourthGroup)
  .standalone();
