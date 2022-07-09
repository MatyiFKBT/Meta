import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const monsterNomadsGroup = new Year2019SeasonalGroup({
  name: "Monster Nomads",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const frankensteinFingers = new Year2019SeasonalBouncerType("Frankenstein Fingers", 2230)
  .setIcon("frankenstein'shand")
  .addGroup(monsterNomadsGroup)
  .addBouncerLandsOn(greenie);
export const werewolfpaw = new Year2019SeasonalBouncerType("Werewolf paw", 2229)
  .addGroup(monsterNomadsGroup)
  .addBouncerLandsOn(greenie);
export const mummyMitt = new Year2019SeasonalBouncerType("Mummy Mitt", 2228)
  .setIcon("mummyhand")
  .addGroup(monsterNomadsGroup)
  .addBouncerLandsOn(greenie);
