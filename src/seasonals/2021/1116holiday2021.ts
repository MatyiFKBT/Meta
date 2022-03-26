import { Year2021SeasonalScatterType, Year2021SeasonalGroup, Year2021SeasonalType } from "./_index";
import { TypeHidden } from "../../common/type";

export const holiday2021Group = new Year2021SeasonalGroup({
  name: "Holiday 2021",
  starts: "2021-11-16T12:00:00-05:00",
  ends: "2021-12-31T23:59:00-05:00",
});

export const sirPrizeSanta = new Year2021SeasonalType("Sir Prize Santa", 2652)
  .addGroup(holiday2021Group)
  .virtual()
  .addHidden(TypeHidden.Deploy, TypeHidden.Bouncers);
export const gumDrop = new Year2021SeasonalScatterType("Gum Drop", 3430)
  .addGroup(holiday2021Group)
  .standalone()
  .addHidden(TypeHidden.Deploy);
export const candyCane = new Year2021SeasonalScatterType("Candy Cane", 3431)
  .addGroup(holiday2021Group)
  .standalone()
  .addHidden(TypeHidden.Deploy);
export const marshmallow = new Year2021SeasonalScatterType("Marshmallow", 3432)
  .addGroup(holiday2021Group)
  .standalone()
  .addHidden(TypeHidden.Deploy);
export const christmasCookie = new Year2021SeasonalScatterType("Christmas Cookie", 3433)
  .addGroup(holiday2021Group)
  .standalone()
  .addHidden(TypeHidden.Deploy);
