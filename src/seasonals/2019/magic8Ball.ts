import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const magic8BallGroup = new Year2019SeasonalGroup({
  name: "Magic 8 Ball",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const magic8BallU00BF = new Year2019SeasonalBouncerType("Magic 8 Ball - ???\\U00BF??", 2014)
  .addGroup(magic8BallGroup)
  .addBouncerLandsOn(greenie);
export const magic8BallExpecttheUnexpected = new Year2019SeasonalBouncerType(
  "Magic 8 Ball - Expect the Unexpected!",
  2013
)
  .addGroup(magic8BallGroup)
  .addBouncerLandsOn(greenie);
export const magic8BallGrowtheMap = new Year2019SeasonalBouncerType(
  "Magic 8 Ball - Grow the Map!",
  2015
)
  .addGroup(magic8BallGroup)
  .addBouncerLandsOn(greenie);
export const magic8BallNope = new Year2019SeasonalBouncerType("Magic 8 Ball - Nope", 2016)
  .addGroup(magic8BallGroup)
  .addBouncerLandsOn(greenie);
export const magic8Ball1000Hours = new Year2019SeasonalBouncerType(
  "Magic 8 Ball - 1000 Hours",
  2018
)
  .addGroup(magic8BallGroup)
  .addBouncerLandsOn(greenie);
export const magic8BallThisisfine = new Year2019SeasonalBouncerType(
  "Magic 8 Ball - This is fine",
  2017
)
  .addGroup(magic8BallGroup)
  .addBouncerLandsOn(greenie);
export const magic8BallAskRob = new Year2019SeasonalBouncerType("Magic 8 Ball - Ask Rob", 2011)
  .addGroup(magic8BallGroup)
  .addBouncerLandsOn(greenie);
export const magic8BallBlameScott = new Year2019SeasonalBouncerType(
  "Magic 8 Ball - Blame Scott",
  2012
)
  .addGroup(magic8BallGroup)
  .addBouncerLandsOn(greenie);
