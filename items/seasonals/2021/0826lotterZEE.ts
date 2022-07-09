import {
  Year2021SeasonalBouncerType,
  Year2021SeasonalScatterType,
  Year2021SeasonalGroup,
} from "./_index";
import { TypeHidden } from "../../../src/items/type";

export const lotterZEEGroup = new Year2021SeasonalGroup({
  name: "LotterZEE",
  starts: "2021-08-26T12:00:00-05:00",
  ends: "2021-09-23T23:59:00-05:00",
});

export const physicalLotterZEEBallMachine = new Year2021SeasonalBouncerType(
  "Physical LotterZEE Ball Machine",
  3262
).addGroup(lotterZEEGroup);
export const virtualLotterZEEBallMachine = new Year2021SeasonalBouncerType(
  "Virtual LotterZEE Ball Machine",
  3273
).addGroup(lotterZEEGroup);
export const lotterZEEBall1 = new Year2021SeasonalScatterType("LotterZEE Ball 1", 3263)
  .addGroup(lotterZEEGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const lotterZEEBall2 = new Year2021SeasonalScatterType("LotterZEE Ball 2", 3264)
  .addGroup(lotterZEEGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const lotterZEEBall3 = new Year2021SeasonalScatterType("LotterZEE Ball 3", 3265)
  .addGroup(lotterZEEGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const lotterZEEBall4 = new Year2021SeasonalScatterType("LotterZEE Ball 4", 3266)
  .addGroup(lotterZEEGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const lotterZEEBall5 = new Year2021SeasonalScatterType("LotterZEE Ball 5", 3267)
  .addGroup(lotterZEEGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const lotterZEEBall6 = new Year2021SeasonalScatterType("LotterZEE Ball 6", 3268)
  .addGroup(lotterZEEGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const lotterZEEBall7 = new Year2021SeasonalScatterType("LotterZEE Ball 7", 3269)
  .addGroup(lotterZEEGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const lotterZEEBall8 = new Year2021SeasonalScatterType("LotterZEE Ball 8", 3270)
  .addGroup(lotterZEEGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
export const lotterZEEBall9 = new Year2021SeasonalScatterType("LotterZEE Ball 9", 3271)
  .addGroup(lotterZEEGroup)
  .standalone()
  .addHidden(TypeHidden.Bouncers);
