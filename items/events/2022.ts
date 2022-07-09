import { eventGroup, EventType } from "./_index";
import { Group } from "../../src/common/group";

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
export const azAfternoon = new Year2022EventType("Arizona Triple Play - Afternoon (Out #3)", 3665);
export const azLunch = new Year2022EventType("Arizona Triple Play - Lunch (Out #2)", 3666);
export const flGolfVsMunzees = new Year2022EventType("FL - Golf vs Munzee", 3694);
export const sunlightInSpring = new Year2022EventType("Sunlight in Spring", 3695);
export const palmurannanAlla = new Year2022EventType("Palmurannan Alla", 3696);
export const weSurvivedTaxDay2022 = new Year2022EventType("We Survived Tax Day 2022", 3713);
export const curiosiTea6 = new Year2022EventType("CuriosiTea 6", 3722);
export const prattvillePopUpEvent = new Year2022EventType("Prattville Pop Up Event", 3723);
export const munzeeMania2022Friday = new Year2022EventType("Munzee Mania 2022 - Friday", 3738);
export const munzeeMania2022SaturdayMorning = new Year2022EventType(
  "Munzee Mania 2022 - Saturday Morning",
  3740
);
export const munzeeMania2022MainEvent = new Year2022EventType(
  "Munzee Mania 2022 - Main Event",
  3739
);
export const munzeeMania2022Sunday = new Year2022EventType("Munzee Mania 2022 - Sunday", 3741);
export const celebrateArmedForcesDayAtDevens = new Year2022EventType(
  "Celebrate Armed Forces Day at Devens",
  3794
);
