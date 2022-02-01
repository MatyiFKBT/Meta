import { Year2021SeasonalScatterType, Year2021SeasonalGroup, Year2021SeasonalType } from "./_index";
import { TypeHidden } from "../../common/type";

export const timeCapzuleGroup = new Year2021SeasonalGroup({
  name: "Time Capzule",
  starts: "2021-08-02T12:00:00-05:00",
  ends: "2022-05-31T23:59:00-05:00",
});

export const timeCapzule = new Year2021SeasonalType("Time Capzule", 2653)
  .addGroup(timeCapzuleGroup)
  .virtual()
  .addHidden(TypeHidden.Deploy, TypeHidden.Bouncers);
export const n2011MunzeeMemoreezCoinz = new Year2021SeasonalScatterType(
  "2011 Munzee Memoreez: Coinz"
)
  .addGroup(timeCapzuleGroup)
  .standalone()
  .addHidden(TypeHidden.Deploy);
export const n2012MunzeeMemoreezBlastz = new Year2021SeasonalScatterType(
  "2012 Munzee Memoreez: Blastz"
)
  .addGroup(timeCapzuleGroup)
  .standalone()
  .addHidden(TypeHidden.Deploy);
export const n2013MunzeeMemoreezClanz = new Year2021SeasonalScatterType(
  "2013 Munzee Memoreez: Clanz"
)
  .addGroup(timeCapzuleGroup)
  .standalone()
  .addHidden(TypeHidden.Deploy);
export const n2014MunzeeMemoreezPakz = new Year2021SeasonalScatterType("2014 Munzee Memoreez: Pakz")
  .addGroup(timeCapzuleGroup)
  .standalone()
  .addHidden(TypeHidden.Deploy);
export const n2015MunzeeMemoreezFriendz = new Year2021SeasonalScatterType(
  "2015 Munzee Memoreez: Friendz"
)
  .addGroup(timeCapzuleGroup)
  .standalone()
  .addHidden(TypeHidden.Deploy);
export const n2016MunzeeMemoreezRootz = new Year2021SeasonalScatterType(
  "2016 Munzee Memoreez: Rootz",
  3215
)
  .addGroup(timeCapzuleGroup)
  .standalone()
  .addHidden(TypeHidden.Deploy);
export const n2017MunzeeMemoreezMovez = new Year2021SeasonalScatterType(
  "2017 Munzee Memoreez: Movez",
  3216
)
  .addGroup(timeCapzuleGroup)
  .standalone()
  .addHidden(TypeHidden.Deploy);
