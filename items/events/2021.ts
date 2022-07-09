import { eventGroup, EventType } from "./_index";
import { Group } from "../../src/common/group";

export const year2021EventsGroup = new Group({
  name: "2021 Events",
}).addParent(eventGroup);

export class Year2021EventType extends EventType {
  override template(): this {
    super.template();
    return this.addGroup(year2021EventsGroup);
  }
}

export const amberwood2021 = new Year2021EventType("Amberwood2021", 2801);
export const n7eMeetEnGreetWorkum = new Year2021EventType("7e Meet en Greet Workum", 2814);
export const smashingSuncoastEvent = new Year2021EventType("Smashing Suncoast Event", 2828);
export const suncoastMorningInThePark = new Year2021EventType("Suncoast Morning in the Park", 2829);
export const blastInThePark2021 = new Year2021EventType("Blast in the Park 2021", 2902);
export const munzeeMadness10MorningEvent = new Year2021EventType(
  "Munzee Madness 10 - morning event",
  2947
);
export const munzeeMadness10AfternoonEvent = new Year2021EventType(
  "Munzee Madness 10 - afternoon event",
  2948
);
export const azTokayMadness = new Year2021EventType("AZ Tokay Madness", 2949);
export const letsHaveSomePiInTexas = new Year2021EventType("Let's have some Pi in Texas", 2950);
export const desMoinesMarchIntoMay = new Year2021EventType("Des Moines March Into May", 2952);
export const springtimeInFlorida = new Year2021EventType("Springtime in Florida", 2953);
export const alabamaRiverRegion20211 = new Year2021EventType("Alabama River Region 2021 #1", 2955);
export const itsRainingMunzeesHallelujah = new Year2021EventType(
  "It's Raining Munzees! Hallelujah!",
  2956
);
export const alabamaRiverRegion20212 = new Year2021EventType("Alabama River Region 2021 #2", 2957);
export const alabamaRiverRegion20214 = new Year2021EventType("Alabama River Region 2021 #4", 2958);
export const alabamaRiverRegion20213 = new Year2021EventType("Alabama River Region 2021 #3", 2959);
export const anotherEggscuseForChocolate = new Year2021EventType(
  "Another Eggscuse For Chocolate",
  2960
);
export const alabamaRiverRegion20215 = new Year2021EventType("Alabama River Region 2021 #5", 2961);
export const alabamaRiverRegion20216 = new Year2021EventType("Alabama River Region 2021 #6", 2962);
export const nijntjeAanZeemiffyAtTheSeaside = new Year2021EventType(
  "Nijntje aan Zee/Miffy at the Seaside",
  2991
);
export const lakeParkerEasterBunnyCapEvent = new Year2021EventType(
  "Lake Parker Easter Bunny Cap Event",
  2992
);
export const imJustHereForTheFriedFood = new Year2021EventType(
  "I'm just here for the fried food",
  2993
);
export const hopingForBunnies = new Year2021EventType("Hoping for Bunnies", 2999);
export const berlinImApril2021 = new Year2021EventType("berlin im april 2021", 3005);
export const stLouisMarchesIntoSpring = new Year2021EventType("St Louis Marches into Spring", 3007);
export const njAprilFoolsTheBearIsStillHere = new Year2021EventType(
  "NJ April Fool's, the bear is still here",
  3008
);
export const caHopeSpringsInRanchoSanDiego = new Year2021EventType(
  "CA - Hope Springs in Rancho San Diego",
  3015
);
export const floridaSpringFling = new Year2021EventType("Florida Spring Fling", 3016);
export const tavaszeeSzlVizetraszt = new Year2021EventType(
  "TavasZEE Szél Vizet Áraszt...",
  3033
).setIcon("tavaszeeszélvizetÁraszt...");
export const smallTownWentzvilleMo = new Year2021EventType("Small Town Wentzville MO", 3034);
export const smallTownCedarRapids = new Year2021EventType("Small Town Cedar Rapids", 3035);
export const munzeeMania2021SaturdayMorningEvent = new Year2021EventType(
  "Munzee Mania 2021 -- Saturday Morning Event",
  3036
);
export const munzeeMania2021MainEvent = new Year2021EventType(
  "Munzee Mania 2021 -- Main Event",
  3037
);
export const littleBuffaloBiohazardBlast2021 = new Year2021EventType(
  "Little Buffalo Biohazard Blast 2021",
  3038
);
export const smallTownRochelleIl = new Year2021EventType("Small Town Rochelle IL", 3039);
export const munzeeMania2021MothersDayEvent = new Year2021EventType(
  "Munzee Mania 2021 -- Mother's Day Event",
  3040
);
export const roadwarriorsLoveThemSomeJollyDipper = new Year2021EventType(
  "Roadwarriors LOVE them some Jolly Dipper",
  3041
);
export const smallTownGreenvilleOhio = new Year2021EventType("Small Town Greenville Ohio", 3042);
export const txMarchingIntoMarshall = new Year2021EventType("TX: Marching into Marshall", 3043);
export const kevtBiolaaksossa = new Year2021EventType("Kevät Biolaaksossa", 3044);
export const scMunzeeJubileeFishingForMunzees = new Year2021EventType(
  "SC Munzee Jubilee: Fishing for Munzees",
  3045
);
export const scMunzeeJubileeThatsAWrap = new Year2021EventType(
  "SC Munzee Jubilee: That's A Wrap",
  3046
);
export const scMunzeeJubilee = new Year2021EventType("SC Munzee Jubilee", 3047);
export const curiositea5MarchIntoMay = new Year2021EventType("CuriosiTea 5 - March into May", 3048);
export const paparazeeCard = new Year2021EventType("PaparaZEE Card", 3052);
export const munzeeOnTheMayExpress = new Year2021EventType("Munzee on the May Express", 3053);
export const kcsSpringadingfling = new Year2021EventType("KC's Spring-A-Ding-Fling", 3056);
export const crossedArrowsInTheBig = new Year2021EventType("Crossed Arrows in the Big", 3057);
export const iSpyMemorialEvent = new Year2021EventType("I Spy Memorial Event", 3058);
export const schmetterlingsjagdDurchDieOrangerie = new Year2021EventType(
  "Schmetterlingsjagd durch die Orangerie",
  3099
);
export const sunsetOnTheSpaceCoastJune2021 = new Year2021EventType(
  "Sunset on the Space Coast June 2021",
  3104
);
export const midsummerOnTheBeach = new Year2021EventType("Midsummer on the Beach", 3105);
export const alabamaWelcomesTexasToTown = new Year2021EventType(
  "Alabama Welcomes Texas to Town!",
  3113
);
export const chBirthdayEvent16 = new Year2021EventType("CH: Birthday Event 1/6", 3114);
export const chBirthdayEvent26 = new Year2021EventType("CH: Birthday Event 2/6", 3115);
export const chBirthdayEvent36 = new Year2021EventType("CH: Birthday Event 3/6", 3116);
export const chBirthdayEvent46 = new Year2021EventType("CH: Birthday Event 4/6", 3117);
export const chBirthdayEvent56 = new Year2021EventType("CH: Birthday Event 5/6", 3118);
export const chBirthdayEvent66 = new Year2021EventType("CH: Birthday Event 6/6", 3119);
export const munzee10America245 = new Year2021EventType("Munzee 10, America 245", 3120);
export const munzee10thBirthdayEventDesMoines = new Year2021EventType(
  "Munzee 10th Birthday Event Des Moines",
  3121
);
export const kesBiolaaksossa = new Year2021EventType("Kesä Biolaaksossa", 3122);
export const happy10thBirthdayMunzeeWorkum = new Year2021EventType(
  "Happy 10th Birthday Munzee - Workum",
  3123
);
export const westensupermare10thBirthdayParty = new Year2021EventType(
  "WesTEN-Super-Mare 10th Birthday Party",
  3126
);
export const flMunzeeTurnsTheBig10 = new Year2021EventType("FL - Munzee Turns The BIG 1-0", 3127);
export const westonEasterBunnies = new Year2021EventType("Weston Easter Bunnies", 3128);
export const celebrating10YearsNcStyle = new Year2021EventType(
  "Celebrating 10 years NC Style",
  3129
);
export const munzeeTurns10InKenosha = new Year2021EventType("Munzee Turns 10 In Kenosha", 3197);
export const aDecadeOfMunzeeInAlabama = new Year2021EventType(
  "A decade of munzee in Alabama",
  3198
);
export const floridaMunzee10thBirthdayCelebration = new Year2021EventType(
  "Florida Munzee 10th Birthday Celebration!",
  3199
);
export const thePerfect10 = new Year2021EventType("The Perfect 10", 3200);
export const theBigTen = new Year2021EventType("The BIG TEN", 3201);
export const celebrating10YearsOfMunzeeAtMwgb = new Year2021EventType(
  "Celebrating 10 years of Munzee at MWGB ‼️",
  3202
);
export const sunnysideOfKansasCity = new Year2021EventType("Sunnyside of Kansas City", 3203);
export const munzeesTenaciousBirthdayInKc = new Year2021EventType(
  "Munzee's TENacious Birthday in KC",
  3204
);
export const ohAfterTheBashWauseon = new Year2021EventType("OH - After the Bash Wauseon", 3205);
export const birthdayWithTheLonghorns = new Year2021EventType("Birthday with the Longhorns", 3206);
export const n10YearsHappyBirthdayMunzee = new Year2021EventType(
  "10 Years Happy Birthday Munzee!",
  3207
);
export const summerGameNight = new Year2021EventType("Summer game night", 3208);
export const schon10Jahre = new Year2021EventType("Schon 10 Jahre?", 3209);
export const vancouverSummerMunzbash10thBirthdayParty = new Year2021EventType(
  "Vancouver Summer MunzBash - 10th Birthday Party",
  3226
);
export const pastebucketsMemorialCharityEvent = new Year2021EventType(
  "Pastebucket's Memorial Charity Event",
  3227
);
export const n10vSynttriEventtiTampere = new Year2021EventType(
  "10-v synttäri eventti Tampere",
  3228
);
export const summerMunzeeInTheChicagoBurbs = new Year2021EventType(
  "Summer Munzee in the Chicago Burbs",
  3229
);
export const mermaidsMunzees = new Year2021EventType("Mermaids & Munzees", 3230);
export const grenaaFejrerStadigMunzee10 = new Year2021EventType(
  "Grenaa fejrer stadig Munzee 10",
  3236
);
export const grenaaFejrerMunzee10 = new Year2021EventType("Grenaa fejrer Munzee 10", 3237);
export const munzeeTurns10 = new Year2021EventType("Munzee Turns 10!", 3238);
export const n10thBirthdayInSouthernCalifornia = new Year2021EventType(
  "10th Birthday in Southern California",
  3239
);
export const hellsinkiMunzfunIii = new Year2021EventType("HELLsinki MUNZfun III", 3240);
export const munzee10SzletsnapSzegeden = new Year2021EventType(
  "Munzee 10. Születésnap Szegeden",
  3243
);
export const greerMunzeeHuntV = new Year2021EventType("Greer Munzee Hunt V", 3246);
export const holyCowItsADecade = new Year2021EventType("Holy Cow! It's a Decade!", 3247);
export const munzee109Mile = new Year2021EventType("Munzee 10 @ 9 Mile", 3248);
export const n10YearBirthdayBashInMarion = new Year2021EventType(
  "10 Year Birthday Bash in Marion",
  3249
);
export const berlin10Jahre = new Year2021EventType("berlin 10 jahre", 3250);
export const marylandsMunzee10thBirthdayCelebration = new Year2021EventType(
  "Maryland's Munzee 10th Birthday Celebration",
  3251
);
export const pnwBashMunzeeHobbitBirthday = new Year2021EventType(
  "PNW Bash: Munzee Hobbit Birthday",
  3260
);
export const knaresboroughsMunzee10thBirthdayParty = new Year2021EventType(
  "Knaresborough's Munzee 10th Birthday Party",
  3261
);
export const munzees10thBirthdayBowlingBash = new Year2021EventType(
  "Munzee's 10th Birthday Bowling Bash",
  3272
);
export const wieDZickVerjeiht10JohrmEnColonia = new Year2021EventType(
  'Wie d\' Zick verjeiht - 10 Johr "M" en Colonia',
  3288
);
export const munzee10Budapest = new Year2021EventType("Munzee10 - Budapest", 3289);
export const hiidenSyksy = new Year2021EventType("Hiiden syksy", 3290);
export const viennaIsCalling = new Year2021EventType("Vienna is calling!", 3291);
export const hoedownInJacksonCounty = new Year2021EventType("Hoedown in Jackson County", 3292);
export const finlandVisitsFlorida = new Year2021EventType("Finland visits Florida!", 3293);
export const vForVictory = new Year2021EventType("V for Victory", 3294);
export const autumnWave4 = new Year2021EventType("Autumn Wave 4", 3310);
export const einBonnerInBerlin = new Year2021EventType("Ein Bonner in Berlin", 3311);
export const iScreamForIceCream2021 = new Year2021EventType("I Scream for Ice Cream 2021", 3334);
export const coffeeTeaOrMunzee = new Year2021EventType("Coffee, Tea, or Munzee", 3335);
export const floridaSweetCorny = new Year2021EventType("Florida Sweet & Corny", 3336);
export const halloweenEvent2021Spaarnwoude = new Year2021EventType(
  "Halloween Event 2021 Spaarnwoude",
  3337
);
export const theDumbzeesInvadeRome = new Year2021EventType("The Dumbzees invade Rome", 3338);
export const flMunztoberMeetGreet = new Year2021EventType("FL - Munztober Meet & Greet", 3339);
export const kokkolanHalloweenetkot = new Year2021EventType("Kokkolan Halloween-etkot", 3340);
export const stahnsdorf2021Halloween = new Year2021EventType("stahnsdorf 2021 halloween", 3350);
export const pigPickinSpookyFun = new Year2021EventType("Pig Pickin' Spooky Fun", 3351);
export const biolinjanHalloween = new Year2021EventType("Biolinjan Halloween", 3352);
export const halloweenIHobro = new Year2021EventType("Halloween i Hobro", 3353);
export const riverRegionHalloween2021 = new Year2021EventType("River Region Halloween 2021", 3354);
export const ghostsAndGhoulsInGreenville = new Year2021EventType(
  "Ghosts and Ghouls in Greenville",
  3355
);
export const ripMarieAntoinetteNov21755oct161793 = new Year2021EventType(
  "R.I.P. Marie Antoinette Nov. 2,1755-Oct. 16,1793",
  3356
);
export const erensteinerPumpkin = new Year2021EventType("Erensteiner Pumpkin", 3357);
export const hastilyThrownTogetherEventInGreenvilleSc = new Year2021EventType(
  "Hastily Thrown Together Event in Greenville, SC",
  3358
);
export const harrisburgHaunting = new Year2021EventType("Harrisburg Haunting", 3359);
export const aSpooktacularOwloween = new Year2021EventType("A Spooktacular Owloween", 3360);
export const txCappinWithMyGnomies = new Year2021EventType("TX: Cappin' with my Gnomies", 3361);
export const islandLakeHallozeen = new Year2021EventType("Island Lake HalloZEEn", 3362);
export const scaryTimesInKc = new Year2021EventType("Scary Times in KC", 3371);
export const n2021CaliforniaHocusPocusEvent = new Year2021EventType(
  "2021 California Hocus Pocus Event",
  3372
);
export const mdsMunzoweenSpooktacular2021 = new Year2021EventType(
  "MD's Munzoween Spooktacular 2021",
  3373
);
export const itsTheGreatPumpkinWatertown = new Year2021EventType(
  "It's the Great Pumpkin, Watertown",
  3374
);
export const autumnInStLouis = new Year2021EventType("Autumn in St. Louis", 3375);
export const masspooktacular = new Year2021EventType("MASSpooktacular", 3376);
export const sturgisHalloweenBash = new Year2021EventType("Sturgis Halloween Bash", 3377);
export const n2021AllHallowsEveSummoning = new Year2021EventType(
  "2021 All Hallows' Eve Summoning",
  3383
);
export const berlinHalloweenAmWasserturm = new Year2021EventType(
  "Berlin: Halloween am Wasserturm",
  3384
);
export const gnomePlaceLikeHomeOnTheSpaceCoast = new Year2021EventType(
  "Gnome place like Home on the Space Coast",
  3385
);
export const halloweenInHammelDenmark = new Year2021EventType("Halloween in Hammel, Denmark", 3386);
export const monsterPikeLooseInThorneHalloweenEvent = new Year2021EventType(
  "Monster Pike Loose in Thorne Halloween Event",
  3387
);
export const halloweenInWorkum = new Year2021EventType("Halloween in Workum", 3388);
export const draculaEvent = new Year2021EventType("Dracula Event", 3389);
export const spookyHalloweenSoup = new Year2021EventType("Spooky Halloween Soup", 3390);
export const n2021FindlayGoldenHalloween = new Year2021EventType(
  "2021 Findlay Golden Halloween",
  3391
);
export const sunnyWorthing = new Year2021EventType("Sunny Worthing", 3409);
export const n8eMeetGreetWorkum = new Year2021EventType("8e Meet & Greet Workum", 3413);
export const blackFridayErUhSaturdayOnTheSpaceCoast = new Year2021EventType(
  "Black Friday er uh Saturday on the Space Coast",
  3426
);
export const armadillosInAz = new Year2021EventType("Armadillo’s in AZ", 3434);
export const iceCreamAndCoffeeWithSanta = new Year2021EventType(
  "Ice Cream and Coffee With Santa",
  3435
);
export const aChristmasEventInTheAlabamaRiverRegion = new Year2021EventType(
  "A Christmas event in the Alabama River Region",
  3436
);
export const n2021ChristmasInCalifornia = new Year2021EventType(
  "2021 Christmas in California",
  3437
);
export const carolinaChristmas2021 = new Year2021EventType("Carolina Christmas 2021", 3438);
export const aStLouisChristmas2021 = new Year2021EventType("A St. Louis Christmas 2021", 3439);
export const flMunzburgerMunzburgerOnSanibelIsland = new Year2021EventType(
  "FL - Munzburger Munzburger on Sanibel Island",
  3440
);
export const christmas2021InGeorgetownKy = new Year2021EventType(
  "Christmas 2021 in Georgetown, KY",
  3441
);
export const flItsChristmasOnSanibel = new Year2021EventType(
  "FL - It's Christmas on Sanibel",
  3442
);
export const jollyGoodTimeInKc = new Year2021EventType("Jolly Good Time in KC", 3443);
export const christmasCookies2021 = new Year2021EventType("Christmas Cookies 2021", 3444);
export const sweetChristmasDreams = new Year2021EventType("Sweet Christmas Dreams", 3445);
export const desMoinesChristmasInTheWild = new Year2021EventType(
  "Des Moines Christmas in the Wild",
  3446
);
export const jollyFindlayChristmas = new Year2021EventType("Jolly Findlay Christmas", 3447);
export const klscheWeihnacht21 = new Year2021EventType("Kölsche Weihnacht '21", 3448);
export const merryMoorestownChristmas = new Year2021EventType("Merry Moorestown Christmas", 3449);
export const jouluBiolaaksossa = new Year2021EventType("Joulu Biolaaksossa", 3450);
export const munzeeAdventEvent2021 = new Year2021EventType("Munzee Advent Event 2021", 3451);
export const sinterkerstWorkum2021 = new Year2021EventType("SinterKerst Workum 2021", 3452);
export const sinterklaasBijeenkomst = new Year2021EventType("Sinterklaas bijeenkomst", 3453);
export const caseyLakeChristmas = new Year2021EventType("Casey Lake Christmas", 3510);
export const caseyLakeChristmasToo = new Year2021EventType("Casey Lake Christmas Too", 3511);
export const letsGetChristmaszee5 = new Year2021EventType("Let's Get ChristmasZee 5", 3512);
export const twistedMunzeeGiftExchangeIi = new Year2021EventType(
  "Twisted Munzee Gift Exchange II",
  3513
);
export const roteNasenDieZweite = new Year2021EventType("Rote Nasen die Zweite", 3514);
export const christmasShoppingSolomonPond = new Year2021EventType(
  "Christmas Shopping @ Solomon Pond",
  3515
);
export const christmasMunzeeLunch = new Year2021EventType("Christmas Munzee Lunch", 3516);
export const berlinerWeihnachtsevent2021 = new Year2021EventType(
  "Berliner Weihnachtsevent 2021",
  3517
);
export const yippeeKiYayMfs = new Year2021EventType("Yippee ki yay, MFs!", 3523);
export const dumbzeesPizzamasSpectacular = new Year2021EventType(
  "Dumbzees Pizza-mas Spectacular!",
  3524
);
export const deckTheFirehallsWithMunzees = new Year2021EventType(
  "Deck the Firehalls with Munzees",
  3525
);
export const jlablt = new Year2021EventType("Jólablót", 3530);
export const kristmasKendrick = new Year2021EventType("Kristmas @ Kendrick", 3543);
export const txIWantAHippopotamusForChristmas2021 = new Year2021EventType(
  "TX: I Want a Hippopotamus for Christmas 2021",
  3544
);
export const marylandMunzeeChristmas2021 = new Year2021EventType(
  "Maryland Munzee Christmas 2021",
  3545
);
export const favershamFestivities = new Year2021EventType("Faversham Festivities", 3546);
export const aCharlieBrownChristmas2021 = new Year2021EventType(
  "A Charlie Brown Christmas 2021",
  3547
);
export const vancouverChristmasParty2021 = new Year2021EventType(
  "Vancouver Christmas Party 2021",
  3548
);
export const westfriesGeuzenKerstEvent2021 = new Year2021EventType(
  "West-Fries Geuzen Kerst Event 2021",
  3549
);
export const holzmarktweihnacht2021InHbs = new Year2021EventType(
  "Holzmarktweihnacht 2021 in HBS",
  3550
);
export const weihnachtspostInCrumstadt = new Year2021EventType("Weihnachtspost in Crumstadt", 3551);
export const happyHolidaysMinnesotaMunzeers = new Year2021EventType(
  "Happy Holidays Minnesota Munzeers!",
  3553
);
