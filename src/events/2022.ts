import { eventGroup, EventType } from "./_index";
import { Group } from "../common/group";

export const year2022EventsGroup = new Group({
  name: "2022 Events",
}).addParent(eventGroup);

export class Year2022EventType extends EventType {
  override template(): this {
    super.template();
    return this.addGroup(year2022EventsGroup);
  }
}

export const movingToFlorida = new Year2022EventType("Moving to Florida!", 3573);
export const beignetsMunzeesForBreakfast = new Year2022EventType(
  "Beignets & Munzees for Breakfast",
  3578
);
export const harryPottersBirthdayParty2022 = new Year2022EventType(
  "Harry Potters Birthday Party 2022",
  3579
);
export const ssshSomeoneIsHavingAPalindromeBirthday = new Year2022EventType(
  "Sssh... Someone is having a palindrome Birthday",
  3632
);
export const munzeeMadness11FridayEveningEvent = new Year2022EventType(
  "Munzee Madness 11 - Friday Evening Event",
  3633
);
export const munzeeMadness11SaturdayDinnerEvent = new Year2022EventType(
  "Munzee Madness 11 - Saturday Dinner Event",
  3634
);
export const munzeeMadness11SaturdayAfternoonEvent = new Year2022EventType(
  "Munzee Madness 11 - Saturday Afternoon Event",
  3635
);
export const munzeeMadness11SaturdayLunchEvent = new Year2022EventType(
  "Munzee Madness 11 - Saturday Lunch Event",
  3636
);
export const munzeeMadness11SaturdayMorningEvent = new Year2022EventType(
  "Munzee Madness 11 - Saturday Morning Event",
  3637
);
export const txAfterTheChallenge = new Year2022EventType("TX - After the Challenge", 3664);
