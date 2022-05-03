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
  "2011 Munzee Memoreez: Coinz",
  3210
)
  .addGroup(timeCapzuleGroup)
  .standalone()
  .addHidden(TypeHidden.Deploy);
export const n2012MunzeeMemoreezBlastz = new Year2021SeasonalScatterType(
  "2012 Munzee Memoreez: Blastz",
  3211
)
  .addGroup(timeCapzuleGroup)
  .standalone()
  .addHidden(TypeHidden.Deploy);
export const n2013MunzeeMemoreezClanz = new Year2021SeasonalScatterType(
  "2013 Munzee Memoreez: Clanz",
  3212
)
  .addGroup(timeCapzuleGroup)
  .standalone()
  .addHidden(TypeHidden.Deploy);
export const n2014MunzeeMemoreezPakz = new Year2021SeasonalScatterType(
  "2014 Munzee Memoreez: Pakz",
  3213
)
  .addGroup(timeCapzuleGroup)
  .standalone()
  .addHidden(TypeHidden.Deploy);
export const n2015MunzeeMemoreezFriendz = new Year2021SeasonalScatterType(
  "2015 Munzee Memoreez: Friendz",
  3214
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
export const n2018MunzeeMemoreezLogoz = new Year2021SeasonalScatterType(
  "2018 Munzee Memoreez: Logoz",
  3217
)
  .addGroup(timeCapzuleGroup)
  .standalone()
  .addHidden(TypeHidden.Deploy);
export const n2019MunzeeMemoreezMapz = new Year2021SeasonalScatterType(
  "2019 Munzee Memoreez: Mapz",
  3218
)
  .addGroup(timeCapzuleGroup)
  .standalone()
  .addHidden(TypeHidden.Deploy);
export const n2020MunzeeMemoreezFirez = new Year2021SeasonalScatterType(
  "2020 Munzee Memoreez: Firez",
  3219
)
  .addGroup(timeCapzuleGroup)
  .standalone()
  .addHidden(TypeHidden.Deploy);
