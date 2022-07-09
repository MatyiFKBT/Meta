import { eventGroup, EventType } from "./_index";
import { Group } from "../../src/common/group";

export const year2014EventsGroup = new Group({
  name: "2014 Events",
}).addParent(eventGroup);

export class Year2014EventType extends EventType {
  override template(): this {
    super.template();
    return this.addGroup(year2014EventsGroup);
  }
}

export const parisCacheBash = new Year2014EventType("Paris Cache Bash", 93);
export const mm3 = new Year2014EventType("MM3", 95);
export const mm3Event = new Year2014EventType("MM3 event", 96);
export const dinner = new Year2014EventType("Dinner", 98);
export const unicorn = new Year2014EventType("Original Unicorn", 100).setIcon("unicorn");
export const awfc5k = new Year2014EventType("AWFC 5k", 122);
export const geowoodstock2014 = new Year2014EventType("Geowoodstock 2014", 124);
export const foodtruckfrenzy = new Year2014EventType("FoodTruckFrenzy", 125);
export const mwmb = new Year2014EventType("MWMB", 126);
export const spacecoast = new Year2014EventType("Spacecoast", 128);
export const obiCal = new Year2014EventType("Obi Cal", 129);
export const butte = new Year2014EventType("Butte", 130);
export const eaa = new Year2014EventType("EAA", 132);
export const n1111Days = new Year2014EventType("1111 days", 136);
export const robsReturn = new Year2014EventType("Rob's Return", 137).addIcon("robsreturn");
export const n2ndEuropeEvent = new Year2014EventType("2nd Europe Event", 138);
export const munzillaEvent = new Year2014EventType("Munzilla Event", 139);
export const socalMunzeecon = new Year2014EventType("SoCal MunzeeCon", 141);
export const worldsCollideSeattle = new Year2014EventType("Worlds Collide Seattle", 142);
export const massMunzeeMania2014 = new Year2014EventType("Mass Munzee Mania 2014", 143);
export const kalispell2014 = new Year2014EventType("Kalispell 2014", 144);
export const gchr2014 = new Year2014EventType("GCHR 2014", 145);
export const hhme = new Year2014EventType("HHME", 147);
export const rheinischerStammtischIv = new Year2014EventType("Rheinischer Stammtisch IV", 149);
export const springtimeScrounge2014 = new Year2014EventType("Springtime Scrounge 2014", 150);
export const munzeeween2014 = new Year2014EventType("Munzeeween 2014", 151);
export const berlin2014 = new Year2014EventType("Berlin 2014", 152);
export const firstOfMany = new Year2014EventType("First Of Many", 153);
export const ummg2014 = new Year2014EventType("UMMG 2014", 154);
export const owloween = new Year2014EventType("Owloween", 155);
export const bigLittleEvent2014 = new Year2014EventType("Big Little Event 2014", 156);
export const worldsCollideVegas = new Year2014EventType("Worlds Collide Vegas", 158);
export const camporee2014 = new Year2014EventType("Camporee 2014", 159);
export const jerseyArtsQuest2014 = new Year2014EventType("Jersey Arts Quest 2014", 160);
export const spaceCoastMunzeefest = new Year2014EventType("Space Coast MunzeeFest", 163);
export const duckDynasty2014 = new Year2014EventType("Duck Dynasty 2014", 164);
export const chestnutGhostWalk = new Year2014EventType("Chestnut Ghost Walk", 165);
export const midwestMunzeeMadness2014 = new Year2014EventType("Midwest Munzee Madness 2014", 167);
export const turkeyTrot2014 = new Year2014EventType("Turkey Trot 2014", 168);
export const munzeetreffenInBerlin2014 = new Year2014EventType("Munzeetreffen in Berlin 2014", 169);
export const frisian = new Year2014EventType("Frisian", 172);
export const kingsBridge = new Year2014EventType("Kings Bridge", 173);
export const sonoranDesertShowdown = new Year2014EventType("Sonoran Desert Showdown", 174);
export const cappingTheCoast2014 = new Year2014EventType("Capping The Coast 2014", 175);
export const moojahunt = new Year2014EventType("Moojahunt", 176);
export const luxembourgGreetzBerlin2014 = new Year2014EventType(
  "Luxembourg greetz Berlin 2014",
  177
);
export const cookieCrumbles2014 = new Year2014EventType("Cookie Crumbles 2014", 178);
export const merryMunzmas2014 = new Year2014EventType("Merry Munzmas 2014", 179);
export const bearyMerryMunzmas2014 = new Year2014EventType("Beary Merry Munzmas 2014", 180);
export const missionBay2014 = new Year2014EventType("Mission Bay 2014", 182);
export const wdw2014 = new Year2014EventType("WDW 2014", 183);
export const wintertraumStuttgart = new Year2014EventType("Wintertraum Stuttgart", 184);
export const gluehweinAmDom = new Year2014EventType("Gluehwein am Dom", 185);
