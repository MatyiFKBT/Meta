import { eventGroup, EventType } from "./_index";
import { Group } from "../../src/common/group";

export const year2013EventsGroup = new Group({
  name: "2013 Events",
}).addParent(eventGroup);

export class Year2013EventType extends EventType {
  override template(): this {
    super.template();
    return this.addGroup(year2013EventsGroup);
  }
}

export const euroAmbassador = new Year2013EventType("Euro Ambassador", 30);
export const missMichigan = new Year2013EventType("Miss Michigan", 33);
export const munzeeMadness2 = new Year2013EventType("Munzee Madness 2", 35);
export const washingtonParks = new Year2013EventType("Washington Parks", 38);
export const europeEvent = new Year2013EventType("Europe Event", 41);
export const europeEventRobje64 = new Year2013EventType("Europe Event robje64", 42);
export const europeEventZeusi = new Year2013EventType("Europe Event Zeusi", 43);
export const europeEventPappapad = new Year2013EventType("Europe Event PappaPad", 44);
export const garlicBreathAfterParty = new Year2013EventType("Garlic Breath After Party", 49);
export const teamMunzeeCanada = new Year2013EventType("Team Munzee Canada", 74);
export const newEngland = new Year2013EventType("New England", 77);
export const robVisitsDeutschland = new Year2013EventType("Rob visits Deutschland", 79);
