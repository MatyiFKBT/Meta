import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";
import { TypeTags } from "../../../src/items/type";
import { greenie, premium } from "../../normal/misc";
import { mystery } from "../../normal/mystery";
import { mace } from "../../normal/weapons";

export const leapDay2020Group = new Year2020SeasonalGroup({
  name: "Leap Day 2020",
  starts: "2020-02-28T12:00:00-06:00",
  ends: "2020-03-03T10:00:00-06:00",
});

export const hZeeWellsTimeMachine = new Year2020SeasonalBouncerType(
  "H. Zee. Wells' Time Machine",
  2363
)
  .addGroup(leapDay2020Group)
  .addBouncerLandsOn(greenie, premium, mace, mystery);
export const zeeloreonTimeTraveler = new Year2020SeasonalBouncerType(
  "Zeeloreon Time Traveler",
  2364
)
  .addGroup(leapDay2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const tARDYTimeTraveler = new Year2020SeasonalBouncerType("TARDY Time Traveler", 2365)
  .addGroup(leapDay2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
