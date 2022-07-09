import { eventGroup, EventType } from "./_index";
import { Group } from "../../src/items/group";

export const year2015EventsGroup = new Group({
  name: "2015 Events",
}).addParent(eventGroup);

export class Year2015EventType extends EventType {
  override template(): this {
    super.template();
    return this.addGroup(year2015EventsGroup);
  }
}

export const suncoast2015 = new Year2015EventType("Suncoast 2015", 191);
export const australiaDay2015 = new Year2015EventType("Australia Day 2015", 192);
export const aussieRob = new Year2015EventType("Aussie Rob", 193);
export const munzeeBowl2015 = new Year2015EventType("Munzee Bowl 2015", 194);
export const ancientMarketKingston2015 = new Year2015EventType("Ancient Market Kingston 2015", 195);
export const qrazyTurnsOne = new Year2015EventType("QRazy turns one", 201);
export const fromSpacecoastWithLove = new Year2015EventType("From Spacecoast With Love", 203);
export const wisconsin2015 = new Year2015EventType("Wisconsin 2015", 204);
export const loveInTheAir = new Year2015EventType("Love In The Air", 205);
export const mmiv = new Year2015EventType("MMIV", 207);
export const mmivFridayNight = new Year2015EventType("MMIV Friday Night", 208);
export const amsterdam2015 = new Year2015EventType("Amsterdam 2015", 209);
export const celle2015 = new Year2015EventType("Celle 2015", 211);
export const heartsInDc = new Year2015EventType("Hearts In DC", 212);
export const spacecoastPiDay = new Year2015EventType("SpaceCoast Pi Day", 213);
export const spartanburgHunt = new Year2015EventType("Spartanburg Hunt", 214);
export const eagleLakeEvent = new Year2015EventType("Eagle Lake Event", 215);
export const secondBattleOfFranklin = new Year2015EventType("Second Battle Of Franklin", 217);
export const springFling2015 = new Year2015EventType("Spring Fling 2015", 219);
export const iaf2015 = new Year2015EventType("IAF 2015", 221);
export const bartonBlues2015 = new Year2015EventType("Barton Blues 2015", 222);
export const deocaching2015 = new Year2015EventType("DEocaching 2015", 223);
export const swfl2015 = new Year2015EventType("SWFL 2015", 224);
export const londonRobbed = new Year2015EventType("London Robbed", 225);
export const londonTiming = new Year2015EventType("London Timing", 226);
export const munzee4aCure = new Year2015EventType("Munzee 4a CURE", 227);
export const postRelayChallenge = new Year2015EventType("Post Relay Challenge", 228);
export const robInNc2015 = new Year2015EventType("Rob in NC 2015", 229);
export const mintHill2015 = new Year2015EventType("Mint Hill 2015", 230);
export const danvilleComicCon2015 = new Year2015EventType("Danville Comic Con 2015", 231);
export const intercontinentalMunzeeMeetAndGreet2015 = new Year2015EventType(
  "Intercontinental Munzee Meet and Greet 2015",
  232
);
export const twente2015 = new Year2015EventType("Twente 2015", 233);
export const greetingsFromFlorida2015 = new Year2015EventType("Greetings From Florida 2015", 235);
export const weyMayDay2015 = new Year2015EventType("Wey May Day 2015", 236);
export const mwmb2015 = new Year2015EventType("MWMB 2015", 237);
export const gwXiii = new Year2015EventType("GW XIII", 238);
export const forgingCommunity2015 = new Year2015EventType("Forging Community 2015", 239);
export const crossingOverIi = new Year2015EventType("Crossing Over II", 240);
export const towelDay2015 = new Year2015EventType("Towel Day 2015", 241);
export const plymouth2015 = new Year2015EventType("Plymouth 2015", 243);
export const collegeForKids2015 = new Year2015EventType("College For Kids 2015", 244);
export const wisconsinParty2015 = new Year2015EventType("Wisconsin Party 2015", 245);
export const happy4thBirthdayPuntaGorda = new Year2015EventType(
  "Happy 4th Birthday Punta Gorda",
  246
);
export const happy4thBirthdayDk = new Year2015EventType("Happy 4th Birthday DK", 247);
export const happy4thBirthdayFitchburg = new Year2015EventType("Happy 4th Birthday Fitchburg", 248);
export const happy4thBirthdayOhio = new Year2015EventType("Happy 4th Birthday Ohio", 249);
export const blastInTheParkIi = new Year2015EventType("Blast In The Park II", 252);
export const happy4thBirthdayNc = new Year2015EventType("Happy 4th Birthday NC", 253);
export const happy4thBirthdayDebrecen = new Year2015EventType("Happy 4th Birthday Debrecen", 254);
export const happy4thBirthdayPrague = new Year2015EventType("Happy 4th Birthday Prague", 255);
export const happy4thBirthdayZwolle = new Year2015EventType("Happy 4th Birthday Zwolle", 256);
export const happy4thBirthdayPrinceton = new Year2015EventType("Happy 4th Birthday Princeton", 257);
export const happy4thBirthdayBerlinGrunewald = new Year2015EventType(
  "Happy 4th Birthday Berlin Grunewald",
  258
);
export const happy4thBirthdayYorkshire = new Year2015EventType("Happy 4th Birthday Yorkshire", 259);
export const happy4thBirthdayTasmania = new Year2015EventType("Happy 4th Birthday Tasmania", 260);
export const happy4thBirthdayMiami = new Year2015EventType("Happy 4th Birthday Miami", 261);
export const happy4thBirthdayKalispell = new Year2015EventType("Happy 4th Birthday Kalispell", 262);
export const happy4thBirthdayKeysborough = new Year2015EventType(
  "Happy 4th Birthday Keysborough",
  263
);
export const happy4thBirthdayKansasCity = new Year2015EventType(
  "Happy 4th Birthday Kansas City",
  264
);
export const happy4thBirthdayBerlinHumboldthain = new Year2015EventType(
  "Happy 4th Birthday Berlin Humboldthain",
  270
);
export const happy4thBirthdayPerth = new Year2015EventType("Happy 4th Birthday Perth", 271);
export const happy4thBirthdaySydney = new Year2015EventType("Happy 4th Birthday Sydney", 272);
export const happy4thBirthdayShepparton = new Year2015EventType(
  "Happy 4th Birthday Shepparton",
  273
);
export const happy4thBirthdayStuttgart = new Year2015EventType("Happy 4th Birthday Stuttgart", 274);
export const happy4thBirthdayKent = new Year2015EventType("Happy 4th Birthday Kent", 275);
export const happy4thBirthdayTidewater = new Year2015EventType("Happy 4th Birthday Tidewater", 276);
export const happy4thBirthdaySwitzerland = new Year2015EventType(
  "Happy 4th Birthday Switzerland",
  277
);
export const happy4thBirthdayPa = new Year2015EventType("Happy 4th Birthday PA", 278);
export const happy4thBirthdayGrafton = new Year2015EventType("Happy 4th Birthday Grafton", 279);
export const n3rdEuropeEvent = new Year2015EventType("3rd Europe Event", 281);
export const cologne2015Day2 = new Year2015EventType("Cologne 2015 Day 2", 282);
export const socalMunzeecon2015 = new Year2015EventType("SoCal MunzeeCon 2015", 283);
export const meetSkylar = new Year2015EventType("Meet Skylar", 284);
export const eagledadandxeniaComeToMa2015 = new Year2015EventType(
  "EagleDadandXenia come to MA 2015",
  285
);
export const aWalkInThePark2015Celle = new Year2015EventType("A Walk In The Park 2015 Celle", 286);
export const fl2berlin2015 = new Year2015EventType("FL2Berlin 2015", 287);
export const theDogDaysOfSummerInNh2015 = new Year2015EventType(
  "The Dog Days of Summer in NH 2015",
  288
);
export const rodsRibsAndMunzees2015 = new Year2015EventType("Rods Ribs and Munzees 2015", 289);
export const flagCityMunzeefest2015 = new Year2015EventType("Flag City MunzeeFest 2015", 291);
export const zombiesAteMyMunzees2015 = new Year2015EventType("Zombies ate my Munzees 2015", 292);
export const westBendMunzeeBash2015 = new Year2015EventType("West Bend Munzee Bash 2015", 293);
export const meetAndEat = new Year2015EventType("Meet And Eat", 295);
export const summertimeBlues2015 = new Year2015EventType("Summertime Blues 2015", 298);
export const n2ndAnnualKalispellEvent = new Year2015EventType("2nd Annual Kalispell Event", 299);
export const hotDogPa2015 = new Year2015EventType("Hot Dog PA 2015", 300);
export const stMarysBacon = new Year2015EventType("St Marys Bacon", 301);
export const stMarysEgg = new Year2015EventType("St Marys Egg", 302);
export const ddcardsElkEvent = new Year2015EventType("DDCARDS ELK EVENT", 303);
export const dogDaysOfSummerInFl2015 = new Year2015EventType("Dog Days of Summer in FL 2015", 304);
export const tasteOfChittering2015 = new Year2015EventType("Taste of Chittering 2015", 305);
export const hamptonroadsMultiEvent2015 = new Year2015EventType(
  "Hamptonroads Multi Event 2015",
  309
);
export const aWalkInThePark2015 = new Year2015EventType("A Walk In The Park 2015", 310);
export const mannheim2015 = new Year2015EventType("Mannheim 2015", 311);
export const fridayNightJibby2015 = new Year2015EventType("Friday Night Jibby 2015", 323);
export const jibbyfest2015 = new Year2015EventType("JibbyFest 2015", 324);
export const chitteringWildflowerFestival2015 = new Year2015EventType(
  "Chittering Wildflower Festival 2015",
  325
);
export const caMunzeePizzaBash2015 = new Year2015EventType("CA Munzee Pizza Bash 2015", 326);
export const liveFreeOrDie1YearCelebrationUk = new Year2015EventType(
  "Live Free or Die 1 year celebration UK",
  327
);
export const liveFreeOrDie1YearCelebrationUsa = new Year2015EventType(
  "Live Free or Die 1 year celebration USA",
  328
);
export const tripleCrown2015 = new Year2015EventType("Triple Crown 2015", 329);
export const roundTheBend2015 = new Year2015EventType("Round The Bend 2015", 330);
export const whatIsMunzeeMaCat = new Year2015EventType("What is MUNZEE MA Cat", 331);
export const whatIsMunzeeMa = new Year2015EventType("What is MUNZEE MA", 332);
export const arts55thYearAnniversary = new Year2015EventType("Arts5 5th year anniversary", 333);
export const mhqBash2015 = new Year2015EventType("MHQ Bash 2015", 334);
export const koelnerStammtischV = new Year2015EventType("Koelner Stammtisch V", 335);
export const preUkBashBreakfast = new Year2015EventType("Pre UK Bash Breakfast", 336);
export const mhqBashUk2015 = new Year2015EventType("MHQ Bash UK 2015", 337);
export const newEnglandMunzeers2015 = new Year2015EventType("New England Munzeers 2015", 338);
export const arthursSeatMunzfest2015 = new Year2015EventType("Arthurs Seat MunzFest 2015", 339);
export const forgingCommunityInRome2015 = new Year2015EventType(
  "Forging Community in Rome 2015",
  340
);
export const theHillsAreAlive2015 = new Year2015EventType("The Hills Are Alive 2015", 341);
export const munzspooktackularI = new Year2015EventType("Munzspooktackular I", 342);
export const munzspooktackularIi = new Year2015EventType("Munzspooktackular II", 343);
export const halloweenInSpace2015 = new Year2015EventType("Halloween in Space 2015", 344);
export const someMoreFun2015 = new Year2015EventType("Some More Fun 2015", 345);
export const munzeeweenIi = new Year2015EventType("Munzeeween II", 347);
export const munztoberRobZombeeEvent2015 = new Year2015EventType(
  "Munztober Rob Zombee Event 2015",
  348
);
export const munzeesAndTreatsI = new Year2015EventType("Munzees and Treats I", 349);
export const munzeesAndTreatsIi = new Year2015EventType("Munzees and Treats II", 350);
export const drammunzeeLunchzee2015 = new Year2015EventType("Drammunzee Lunchzee 2015", 351);
export const happyBirthdayBilly2015 = new Year2015EventType("HAPPY BIRTHDAY BILLY 2015", 352);
export const meetAndGreetInWorkum2015 = new Year2015EventType("Meet and Greet in Workum 2015", 359);
export const nEMunzeeMeetAndGreet2015 = new Year2015EventType(
  "N E Munzee Meet and Greet 2015",
  360
);
export const cookieCrumbles2015 = new Year2015EventType("Cookie Crumbles 2015", 361);
export const brooklandsMotorCircuit2015 = new Year2015EventType(
  "Brooklands Motor Circuit 2015",
  362
);
export const spartanburgTurkeyHunt2015 = new Year2015EventType("Spartanburg Turkey Hunt 2015", 363);
export const hidudeTurns1Million = new Year2015EventType("HiDude turns 1 Million", 364);
export const theReturnOfTheMinutemen = new Year2015EventType("The Return of the Minutemen", 365);
export const kalispellChristmasMunzeeEvent = new Year2015EventType(
  "Kalispell Christmas Munzee Event",
  366
);
export const aDickensChristmasAtDowntownDisney = new Year2015EventType(
  "A Dickens Christmas At Downtown Disney",
  367
);
export const weihnachtenInBerlin = new Year2015EventType("Weihnachten in Berlin", 368);
export const cappingTheCoastFridayNight = new Year2015EventType(
  "Capping the Coast Friday night",
  369
);
export const merrymunzmas2 = new Year2015EventType("MerryMunzmas 2", 370);
export const aBearyMunzeeChristmas = new Year2015EventType("A Beary Munzee Christmas", 371);
export const santaRob = new Year2015EventType("Santa Rob", 372);
export const cappingTheCoast2MerrittIsland = new Year2015EventType(
  "Capping the Coast 2 Merritt Island",
  373
);
export const christmasInTheVillage = new Year2015EventType("Christmas in the Village", 374);
export const froheWeihnachtMerryChristmas = new Year2015EventType(
  "Frohe Weihnacht Merry Christmas",
  375
);
export const merryMaryland = new Year2015EventType("Merry Maryland", 376);
export const nhRedneckChristmasFun = new Year2015EventType("NH Redneck Christmas Fun", 377);
export const stxMerryChristmas = new Year2015EventType("STX Merry Christmas", 378);
export const bahMunzee = new Year2015EventType("Bah Munzee", 379);
export const maerchenmarktMunzeemeetingGera = new Year2015EventType(
  "MaerchenMarkt MunzeeMeeting Gera",
  380
);
export const munzeeKaracsonyBudapest2015 = new Year2015EventType(
  "Munzee Karacsony Budapest 2015",
  381
);
export const shoqagaChristmas = new Year2015EventType("ShoqAGA Christmas", 382);
export const texasCraftChristmas = new Year2015EventType("Texas Craft Christmas", 383);
export const christmasInRochester = new Year2015EventType("Christmas in Rochester", 384);
export const alabamaRiverChristmas = new Year2015EventType("Alabama River Christmas", 385);
export const christmasQrackerPortland = new Year2015EventType("Christmas Qracker Portland", 386);
export const deomunzeeXmasDebrecen = new Year2015EventType("DEoMunzee Xmas Debrecen", 387);
export const drammunzeeChrizeemas = new Year2015EventType("Drammunzee Chrizeemas", 388);
export const gluehweinImPott = new Year2015EventType("Gluehwein im Pott", 389);
export const maOoooohhhFudge = new Year2015EventType("MA Ooooohhh Fudge", 391);
export const rudolphRiverRumble = new Year2015EventType("Rudolph River Rumble", 392);
export const christmasCookiesOnMilk = new Year2015EventType("Christmas Cookies on Milk", 393);
export const n12DaysOfMunzeeChristmasI = new Year2015EventType(
  "12 Days of Munzee Christmas I",
  394
);
export const n12DaysOfMunzeeChristmasIi = new Year2015EventType(
  "12 Days of Munzee Christmas II",
  395
);
export const sappalotChristmas = new Year2015EventType("SAPpalot Christmas", 396);
export const yorkshireChristmasParty = new Year2015EventType("Yorkshire Christmas Party", 397);
export const paChristmasParty = new Year2015EventType("PA Christmas Party", 398);
export const deckTheHalls = new Year2015EventType("Deck The Halls", 399);
export const noelInShepparton = new Year2015EventType("Noel in Shepparton", 401);
export const scanClickCache = new Year2015EventType("Scan Click Cache", 402);
export const xmasInCelle = new Year2015EventType("Xmas in Celle", 403);
export const suncoastChristmasCheer = new Year2015EventType("Suncoast Christmas Cheer", 404);
export const willTheBellsEnd = new Year2015EventType("Will the Bells End", 405);
export const xmasInHannover = new Year2015EventType("Xmas in Hannover", 406);
export const christmasInSpartanburg = new Year2015EventType("Christmas In Spartanburg", 407);
export const aCharlieBrownChristmas = new Year2015EventType("A Charlie Brown Christmas", 408);
export const christmasInWorkum2015 = new Year2015EventType("Christmas in Workum 2015", 409);
export const detStoreJuleevent = new Year2015EventType("Det store Juleevent", 410);
export const snowshoesAndFlipflops = new Year2015EventType("Snowshoes and FlipFlops", 411);
export const christmasInAmsterdam2015 = new Year2015EventType("Christmas in Amsterdam 2015", 412);
