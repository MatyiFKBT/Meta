import { eventGroup, EventType } from "./_index";
import { Group } from "../../src/items/group";

export const year2012EventsGroup = new Group({
  name: "2012 Events",
}).addParent(eventGroup);

export class Year2012EventType extends EventType {
  override template(): this {
    super.template();
    return this.addGroup(year2012EventsGroup);
  }
}

export const moga = new Year2012EventType("MOGA", 12);
export const landmachtdagen = new Year2012EventType("Landmachtdagen", 14);
export const meetAndGreetNetherlands = new Year2012EventType("Meet and Greet Netherlands", 16);
export const minnesotaMeetup = new Year2012EventType("Minnesota Meetup", 18);
export const canadaSwarm = new Year2012EventType("Canada SWARM", 19);
export const h2oklan100k = new Year2012EventType("H2OKlan 100K", 20);
export const marineDays = new Year2012EventType("Marine Days", 21);
export const hamburgBbq = new Year2012EventType("Hamburg BBQ", 23);
export const waMunzeeEvent = new Year2012EventType("WA Munzee Event", 24);
export const stLouisCarRace = new Year2012EventType("St Louis Car Race", 26);
