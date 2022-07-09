import { eventGroup, EventType } from "./_index";
import { Group } from "../../src/common/group";

export const year2016EventsGroup = new Group({
  name: "2016 Events",
}).addParent(eventGroup);

export class Year2016EventType extends EventType {
  override template(): this {
    super.template();
    return this.addGroup(year2016EventsGroup);
  }
}

export const nhCapricornsRule2016 = new Year2016EventType("NH Capricorns Rule 2016", 413);
export const suncoastIi = new Year2016EventType("Suncoast II", 414);
export const aVeryMerryUnbirthday2016 = new Year2016EventType("A Very Merry Unbirthday 2016", 415);
export const dcmdvaIamfull1000Days = new Year2016EventType("DCMDVA iamfull 1000 days", 416);
export const riseAndShineFl2016 = new Year2016EventType("Rise and Shine FL 2016", 417);
export const neMeetAndGreet2016 = new Year2016EventType("NE meet and greet 2016", 418);
export const stammtischLueneburgJan2016 = new Year2016EventType(
  "Stammtisch Lueneburg Jan 2016",
  419
);
export const txAustraliaDay2016 = new Year2016EventType("TX Australia Day 2016", 420);
export const lasVegasMeetAndGreet2016 = new Year2016EventType("Las Vegas Meet and Greet 2016", 421);
export const australiaDay2016 = new Year2016EventType("Australia Day 2016", 422);
export const celebrateMunzeeFl2016 = new Year2016EventType("Celebrate Munzee FL 2016", 423);
export const haveAHeartBloodDrive2016 = new Year2016EventType("Have a Heart Blood Drive 2016", 424);
export const beMyMunzeetine2016 = new Year2016EventType("Be My Munzeetine 2016", 425);
export const munzeeLoversMeetUp2016 = new Year2016EventType("Munzee Lovers Meet Up 2016", 426);
export const willYouBeMine2016 = new Year2016EventType("Will you Be Mine 2016", 427);
export const byTheZeeside2016 = new Year2016EventType("By the ZeeSide 2016", 428);
export const mmCocoaBeachGrandOpening = new Year2016EventType("MM Cocoa Beach Grand Opening", 430);
export const workum2berlin2016 = new Year2016EventType("Workum2Berlin 2016", 431);
export const oneMoreDay2016 = new Year2016EventType("One More Day 2016", 432);
export const leapingDudeclanMunzees = new Year2016EventType("Leaping DudeClan Munzees", 433);
export const eggzeeHuntPragueI = new Year2016EventType("Eggzee Hunt Prague I", 434);
export const eggzeeHuntPragueIi = new Year2016EventType("Eggzee Hunt Prague II", 435);
export const eggzeeHuntPragueIii = new Year2016EventType("Eggzee Hunt Prague III", 436);
export const eggscellentMunZQ2016 = new Year2016EventType("Eggscellent Mun Z Q 2016", 437);
export const celleAndTheEasterBunny2016 = new Year2016EventType(
  "Celle and the Easter Bunny 2016",
  438
);
export const beyondThePale2016 = new Year2016EventType("Beyond The Pale 2016", 439);
export const kcEasterEggstravaganza2016 = new Year2016EventType(
  "KC Easter Eggstravaganza 2016",
  445
);
export const alabamaRiverRegionEasterParade = new Year2016EventType(
  "Alabama River Region Easter Parade",
  446
);
export const aWalkAlongTheTrails2016 = new Year2016EventType("A Walk along the Trails 2016", 447);
export const kcWakeYouUp = new Year2016EventType("KC Wake You Up", 448);
export const ntxFuzzyBicentennial = new Year2016EventType("NTX Fuzzy Bicentennial", 449);
export const tidewaterMunzeeSpdp2016 = new Year2016EventType("Tidewater Munzee SPDP 2016", 450);
export const doubleTheFunInLondon2016 = new Year2016EventType("Double the Fun in London 2016", 451);
export const easterEggsInHannover = new Year2016EventType("Easter Eggs in Hannover", 452);
export const hopSkipJump = new Year2016EventType("Hop Skip Jump", 453);
export const orimattila2016 = new Year2016EventType("Orimattila 2016", 454);
export const easterInBudapest2016 = new Year2016EventType("Easter in Budapest 2016", 455);
export const sappalotEaster2016 = new Year2016EventType("SAPpalot Easter 2016", 456);
export const yorkshireEasterParty2016 = new Year2016EventType("Yorkshire Easter Party 2016", 457);
export const firstDayOfSpringEggstravaganza = new Year2016EventType(
  "First Day of Spring Eggstravaganza",
  458
);
export const easterEggcitement2016 = new Year2016EventType("Easter Eggcitement 2016", 459);
export const prague2016 = new Year2016EventType("Prague 2016", 460);
export const transatlanticEggstravaganzaUsa = new Year2016EventType(
  "Transatlantic Eggstravaganza USA",
  461
);
export const transatlanticEggstravaganzaUk = new Year2016EventType(
  "Transatlantic Eggstravaganza UK",
  462
);
export const suncoastSpringFling2016 = new Year2016EventType("Suncoast Spring Fling 2016", 463);
export const joePoolLakeEvent2016 = new Year2016EventType("Joe Pool Lake Event 2016", 464);
export const hoppingAroundSpartanburg2016 = new Year2016EventType(
  "Hopping around Spartanburg 2016",
  465
);
export const paEasterCelebration2016 = new Year2016EventType("PA Easter Celebration 2016", 466);
export const deoeaster2016 = new Year2016EventType("DEoEaster 2016", 467);
export const paskILinkoping2016 = new Year2016EventType("Pask i Linkoping 2016", 468);
export const overcookedHam2016 = new Year2016EventType("Overcooked Ham 2016", 469);
export const sydneyEasterParade2016 = new Year2016EventType("Sydney Easter Parade 2016", 472);
export const munzeeMeetingChemnitz2016 = new Year2016EventType("Munzee Meeting Chemnitz 2016", 473);
export const neMunzeasterGames2016 = new Year2016EventType("NE MunzEaster Games 2016", 474);
export const ncSpringFling2016 = new Year2016EventType("NC Spring Fling 2016", 475);
export const malvernEggHuntUk2016 = new Year2016EventType("Malvern Egg Hunt UK 2016", 476);
export const munzeeWarriorsEaster2016 = new Year2016EventType("Munzee Warriors Easter 2016", 477);
export const dkRingstedEvent2016 = new Year2016EventType("DK Ringsted Event 2016", 478);
export const ntxQrazyUnicornPageant2016 = new Year2016EventType(
  "NTX Qrazy Unicorn Pageant 2016",
  479
);
export const drammunzee2016 = new Year2016EventType("Drammunzee 2016", 480);
export const omahaSpringFling2016 = new Year2016EventType("Omaha Spring Fling 2016", 481);
export const norcalEaster2016 = new Year2016EventType("NorCal Easter 2016", 482);
export const huntForTheFranklinBeast2016 = new Year2016EventType(
  "Hunt for the Franklin Beast 2016",
  483
);
export const dkEaster2016 = new Year2016EventType("DK Easter 2016", 484);
export const franklinEveningCelebration2016 = new Year2016EventType(
  "Franklin Evening Celebration 2016",
  485
);
export const exploringMiddleTennessee2016 = new Year2016EventType(
  "Exploring Middle Tennessee 2016",
  486
);
export const sheppartonEasterEggHunt2016 = new Year2016EventType(
  "Shepparton Easter Egg Hunt 2016",
  487
);
export const welcomeToFranklin2016 = new Year2016EventType("Welcome To Franklin 2016", 488);
export const easterLakeCelebration2016 = new Year2016EventType("Easter Lake Celebration 2016", 489);
export const easterEventAmsterdam2016 = new Year2016EventType("Easter Event Amsterdam 2016", 490);
export const springFling2 = new Year2016EventType("Spring Fling 2", 491);
export const wisconsinEasterParade2016 = new Year2016EventType("Wisconsin Easter Parade 2016", 492);
export const wildernessEaster2016 = new Year2016EventType("Wilderness Easter 2016", 493);
export const easterMunzeggDarlington2016 = new Year2016EventType(
  "Easter MunzEgg Darlington 2016",
  494
);
export const hopOnOverToTheBeach2016 = new Year2016EventType("Hop on over to the Beach 2016", 495);
export const fatherChristmas = new Year2016EventType("Father Christmas", 507);
export const munzeeNationAssembly = new Year2016EventType("Munzee Nation Assembly", 517);
export const foodTruckFandango = new Year2016EventType("Food Truck Fandango", 518);
export const munzeeMadnessV = new Year2016EventType("Munzee Madness V", 519);
export const easterBunny = new Year2016EventType("Easter Bunny", 520);
export const n2ndAnnualMunzee4aCure = new Year2016EventType("2nd Annual Munzee 4a Cure", 528);
export const melbourneAustraliaWelcomesFlorida2016 = new Year2016EventType(
  "Melbourne Australia Welcomes Florida 2016",
  529
);
export const blastInThePark3 = new Year2016EventType("Blast in the Park #3", 530);
export const mayThe4th2016 = new Year2016EventType("May the 4th 2016", 531);
export const discoverMintHill2 = new Year2016EventType("Discover Mint Hill 2", 533);
export const munzfitPrague2016 = new Year2016EventType("MunzFit Prague 2016", 534);
export const perthWelcomesFloridaDownUnder = new Year2016EventType(
  "Perth Welcomes Florida Down Under",
  535
);
export const mayMunzeeMeetgreetcapeatAtBarbersCrossing = new Year2016EventType(
  "May Munzee Meet/Greet/Cap/Eat at Barbers Crossing",
  551
);
export const mikesCelebrationOfLife = new Year2016EventType(
  "Mike's Celebration of Life",
  552
).addIcon("mikescelebrationoflife");
export const munzfitCelleI = new Year2016EventType("Munzfit Celle I", 553);
export const munzfitCelleIi = new Year2016EventType("Munzfit Celle II", 554);
export const stammtischCelle = new Year2016EventType("Stammtisch Celle", 555);
export const meetAtTheMoat = new Year2016EventType("Meet at the Moat!", 556);
export const n511WhoYouGonnaCall = new Year2016EventType("5-1-1 Who You Gonna Call?", 557);
export const helluntainHulinat = new Year2016EventType("Helluntain hulinat", 558);
export const dkMunzeePaaFur = new Year2016EventType("DK: Munzee paa Fur", 559);
export const munzfitLondon = new Year2016EventType("MunzFit London", 561);
export const mwmbFridayNightHangout = new Year2016EventType("MWMB Friday Night Hangout", 562);
export const lommelEvent2016Belgium = new Year2016EventType("Lommel Event 2016 @ Belgium", 563);
export const midwestMunzeeBash16 = new Year2016EventType("Midwest Munzee Bash '16", 564).addIcon(
  "midwestmunzeebash16"
);
export const voteForGof = new Year2016EventType("Vote for GOF", 565);
export const munzeeMarketplaceCbRibbonCutting = new Year2016EventType(
  "Munzee Marketplace CB Ribbon Cutting",
  566
);
export const grandOpeningtake3 = new Year2016EventType("Grand Opening...take 3", 567);
export const virginia2016 = new Year2016EventType("Virginia 2016", 569);
export const onTheBikeTrail = new Year2016EventType("On the Bike Trail", 570);
export const robicorn = new Year2016EventType("Robicorn", 572);
export const gwXiv = new Year2016EventType("GW XIV", 575);
export const geowoodstock14er = new Year2016EventType("GeoWoodstock 14er", 579);
export const weAre5 = new Year2016EventType("WE ARE 5", 580);
export const mileHighMunzbrews = new Year2016EventType("Mile High MunzBrews", 581);
export const rockySunrise = new Year2016EventType("Rocky Sunrise", 582);
export const fareTheeWell = new Year2016EventType("Fare thee well", 583);
export const hmlistenKynnistys = new Year2016EventType("Hämäläisten käynnistys...", 585);
export const mileHighMischief = new Year2016EventType("Mile High Mischief", 586);
export const munzee5zlinapBirthdayPartyBudapest = new Year2016EventType(
  "Munzee 5zülinap - Birthday Party Budapest",
  587
);
export const aBerlinMunztersBirthdayParty = new Year2016EventType(
  "A Berlin Munzters Birthday Party",
  588
);
export const canadaDaymunzeeindependenceDayBirthdayBash = new Year2016EventType(
  "Canada Day/Munzee/Independence Day Birthday Bash",
  589
);
export const dkRingstedHalvrundFdselsdag = new Year2016EventType(
  "DK, Ringsted - Halvrund fødselsdag",
  590
);
export const iaPartyOnTheBanks = new Year2016EventType("IA- Party on the Banks!", 591);
export const munzee5thBirthdayInPlymouth = new Year2016EventType(
  "Munzee 5th Birthday in Plymouth",
  592
);
export const nhBirthdayInThePark = new Year2016EventType("NH - Birthday In The Park", 593);
export const orimattilaMunzeeBirthdayParty2016 = new Year2016EventType(
  "Orimattila - Munzee Birthday Party 2016",
  594
);
export const rnkMmIv5thBirthday = new Year2016EventType("RNK MM IV - 5th Birthday", 595);
export const happyFifthBirthday = new Year2016EventType("happy fifth birthday", 596);
export const gratulererMed5rsDagenMunzee = new Year2016EventType(
  "Gratulerer med 5-års dagen, Munzee!",
  597
);
export const n5thBirthdayCelebrationsInShepparton = new Year2016EventType(
  "!5th Birthday Celebrations in Shepparton!",
  602
);
export const n5thBirthdayBonn = new Year2016EventType("5th Birthday Bonn", 603);
export const wiBirthdayLuau = new Year2016EventType("WI Birthday Luau", 604);
export const munzees5thBirthdayEventOc = new Year2016EventType(
  "Munzee's 5th Birthday Event OC",
  605
).addIcon("munzees5thbirthdayeventoc");
export const birthdayInThePark = new Year2016EventType("Birthday in the Park", 606);
export const xMarksTheSpot = new Year2016EventType("X Marks the Spot", 607);
export const dkMunzee5thBirthdayDinner = new Year2016EventType(
  "DK Munzee 5th Birthday Dinner",
  608
);
export const hannoverBirthdayParty = new Year2016EventType("Hannover Birthday Party", 609);
export const hannoverBirthdayPartyAfternoon = new Year2016EventType(
  "Hannover Birthday Party Afternoon",
  610
);
export const munzees5thBirthdayInLeeds = new Year2016EventType(
  "Munzee's 5th Birthday in Leeds",
  611
).addIcon("munzees5thbirthdayinleeds");
export const dkMunzee5thBirthday = new Year2016EventType("DK Munzee 5th Birthday", 612);
export const london5thBirthdayEvent = new Year2016EventType("London 5th Birthday Event", 613);
export const aKickStart = new Year2016EventType("A Kick Start", 614);
export const cedarRapidsBirthdayBash = new Year2016EventType("Cedar Rapids Birthday Bash", 615);
export const berkshireMunzeeBirthdayBash = new Year2016EventType(
  "Berkshire Munzee Birthday Bash",
  616
);
export const alabamaMunzee5thBirthday = new Year2016EventType("Alabama Munzee 5th Birthday", 617);
export const anuncommonBirthday = new Year2016EventType('An "Uncommon" Birthday', 618);
export const melbournesMidwinterMunzfest2 = new Year2016EventType(
  "Melbourne's Midwinter Munzfest 2",
  619
).addIcon("melbournesmidwintermunzfest2");
export const birthdayBashByDrvClan = new Year2016EventType("Birthday Bash by DRV Clan", 620);
export const kent5thBirthdayBash = new Year2016EventType("Kent 5th Birthday Bash", 621);
export const paHappyBirthdayMunzee = new Year2016EventType("PA - Happy Birthday Munzee", 622);
export const flMunzeeBirthdayCelebration = new Year2016EventType(
  "FL Munzee Birthday Celebration",
  623
);
export const birthdayExtravaganza20 = new Year2016EventType("Birthday Extravaganza 2.0", 624);
export const celebratingTheToledoZoo = new Year2016EventType("Celebrating The Toledo Zoo", 625);
export const exploreFaribaultMn = new Year2016EventType("Explore Faribault MN", 626);
export const kansasCityMunzeeBirthdayBash2016 = new Year2016EventType(
  "Kansas City Munzee Birthday Bash 2016",
  627
);
export const sydneyDinner = new Year2016EventType("Sydney Dinner", 628);
export const warriorsBirthday = new Year2016EventType("Warriors Birthday", 629);
export const theweirdHattersTeaParty = new Year2016EventType(
  "The 'Weir\"d Hatters Tea Party",
  630
).addIcon("theweirdhattersteaparty");
export const munzeeTurns5Sydney2016 = new Year2016EventType("Munzee Turns 5 Sydney 2016", 631);
export const wnyBirthdayGathering = new Year2016EventType("WNY Birthday Gathering", 632);
export const adelaide5thBirthdayEvent = new Year2016EventType("Adelaide 5th Birthday Event", 633);
export const ncdrive95 = new Year2016EventType("(NC)Drive 95", 634);
export const halberstadtM5 = new Year2016EventType("Halberstadt M5", 635);
export const madisonWi2016 = new Year2016EventType("Madison, WI 2016", 636);
export const pinellasFatCatBirthdayBash = new Year2016EventType(
  "Pinellas FAT CAT Birthday Bash",
  637
);
export const spartanburgCelebratesMunzees5th = new Year2016EventType(
  "Spartanburg Celebrates Munzee's 5th",
  638
).addIcon("spartanburgcelebratesmunzees5th");
export const stammtischHalberstadt = new Year2016EventType("Stammtisch Halberstadt", 639);
export const floridasFlipFlopToTheBeach = new Year2016EventType(
  "Florida's Flip Flop to the beach",
  640
);
export const bestFest2016 = new Year2016EventType("Best Fest 2016", 641);
export const heyHeyWereTheMunzeers = new Year2016EventType("Hey Hey We're The Munzeers", 642);
export const n1stSocialSouthend = new Year2016EventType("1st Social Southend", 643);
export const dogDaysOfSummerIi = new Year2016EventType("Dog Days of Summer II", 644);
export const markcase = new Year2016EventType("MarkCase", 645);
export const questingForQuesting4 = new Year2016EventType("Questing for Questing4", 647);
export const coexistingOnSanibelIsland17YearCelebration = new Year2016EventType(
  "Coexisting on Sanibel Island 17 year Celebration",
  648
);
export const lilygrimaldisGardenParty = new Year2016EventType("LILYGRIMALDI'S Garden party", 649);
export const munzeeingHamptonRoads2016 = new Year2016EventType("Munzeeing Hampton Roads 2016", 652);
export const laborDayAtTheBeach = new Year2016EventType("Labor Day at the Beach", 653);
export const californiaAdmissionDayCelebration = new Year2016EventType(
  "California Admission Day Celebration",
  654
);
export const iacedarRapidsClanRivalryDay = new Year2016EventType(
  "IA-Cedar Rapids Clan Rivalry Day",
  655
);
export const kidneyHealthResearchWalk2016 = new Year2016EventType(
  "Kidney Health Research Walk 2016",
  656
);
export const worcesterPoodleParty = new Year2016EventType("Worcester Poodle Party", 657);
export const jibbyFridayNightJibbyJibbyfest2016 = new Year2016EventType(
  "Jibby? Friday Night Jibby! - JibbyFest 2016",
  670
);
export const jibbyJibbyfest2016Euro = new Year2016EventType("Jibby! - JibbyFest 2016 Euro", 671);
export const jibbyJibbyJibbyfest2016 = new Year2016EventType("Jibby! Jibby! - JibbyFest 2016", 672);
export const munzcamp2016Waypoint1 = new Year2016EventType("MunzCamp 2016, Waypoint 1", 673);
export const munzcamp2016Waypoint2 = new Year2016EventType("MunzCamp 2016, Waypoint 2", 674);
export const jibbyBreakfastJibbyJibbyfest2016Date20 = new Year2016EventType(
  "Jibby! Breakfast Jibby! - JibbyFest 2016 Date: 20",
  675
);
export const lincolns1stEvent = new Year2016EventType("Lincoln's 1st Event", 676);
export const deutschlandFeiert = new Year2016EventType("Deutschland feiert", 677);
export const gothenburgGtaExplosion2016 = new Year2016EventType(
  "Gothenburg: Göta Explosion 2016",
  683
);
export const aMunzeeGemEvent = new Year2016EventType("A Munzee GEM Event", 688);
export const snailLakeParkFallIntoMunzee = new Year2016EventType(
  "Snail Lake Park ~ Fall Into Munzee!",
  689
);
export const greerMunzeeHunt = new Year2016EventType("Greer Munzee Hunt", 690);
export const neTrickzeeOrTreatzeeSpooktacularEvent = new Year2016EventType(
  "N.E Trickzee or Treatzee Spooktacular Event",
  691
);
export const stLouisMegaMunzeefest = new Year2016EventType("St. Louis Mega Munzeefest", 692);
export const northeastGreatPumpkinBash = new Year2016EventType("NorthEast Great Pumpkin Bash", 693);
export const flSuncoastSpooktacular = new Year2016EventType("FL Suncoast Spooktacular", 694);
export const munzeeweenIii = new Year2016EventType("Munzeewe'en III", 695);
export const funInTheSun = new Year2016EventType("Fun in the Sun", 710);
export const n1stAnnualMunztersMash = new Year2016EventType("1st Annual MunZters Mash", 711);
export const frightNight = new Year2016EventType("Fright Night", 712);
export const mchenryMunzeeMeetup = new Year2016EventType("McHenry Munzee Meetup", 713);
export const neHuntForTheHeadlessHorsezee = new Year2016EventType(
  "N.E Hunt For the Headless Horsezee",
  714
);
export const meerkatMunzketeers = new Year2016EventType("Meerkat Munzketeers", 715);
export const bewitchingBurnley = new Year2016EventType("Bewitching Burnley", 716);
export const hStreetNortheastIsScary = new Year2016EventType("H Street Northeast Is Scary!", 717);
export const hanShotFirstHalloweenBrewEvent = new Year2016EventType(
  "Han Shot First - Halloween Brew Event",
  718
);
export const derdeMeetEnGreet = new Year2016EventType("derde Meet en Greet", 719);
export const lonestarCoexistRoundup = new Year2016EventType("Lonestar Co-exist Roundup", 720);
export const scottishRiteMunzeeMasters = new Year2016EventType("Scottish Rite Munzee Masters", 721);
export const captureTheFarmingtonGemTrail = new Year2016EventType(
  "Capture the Farmington Gem Trail!",
  723
);
export const fatherChristmas2016 = new Year2016EventType("Father Christmas 2016", 733);
export const blackFridayCappingTheCoast = new Year2016EventType(
  "Black Friday Capping the Coast",
  734
);
export const n2ndAlabamaRiverRegionChristmasParty = new Year2016EventType(
  "2nd Alabama River Region Christmas Party",
  747
);
export const aFrickinFindlayChristmasEvent = new Year2016EventType(
  "A Frickin Findlay Christmas Event",
  748
);
export const campFaLaLaLaLa = new Year2016EventType("Camp Fa La La La La", 749);
export const christmasInTheliquidSunshine = new Year2016EventType(
  "Christmas in the (Liquid) Sunshine",
  750
);
export const christmasInTheEmeraldCity = new Year2016EventType(
  "Christmas in the Emerald City",
  751
);
export const dkDetStoreJuleevent2016 = new Year2016EventType("DK Det Store Juleevent 2016", 752);
export const findlaysSmashingGreatChristmasEvent = new Year2016EventType(
  "Findlay's Smashing Great Christmas Event",
  753
);
export const goodNightToAllFindlaythanksYou = new Year2016EventType(
  "Good Night to All! FindlayThanks You!",
  754
);
export const nhFrostzeeTheMunzman = new Year2016EventType("NH: Frost-zee the Munzman", 755);
export const plymouthChristmasEvent = new Year2016EventType("Plymouth Christmas Event", 756);
export const chemnitzerWeihnachtsmarkt2016 = new Year2016EventType(
  "Chemnitzer Weihnachtsmarkt 2016",
  757
);
export const adelaideChristmasEvent = new Year2016EventType("Adelaide Christmas Event", 758);
export const christmasInTurku = new Year2016EventType("Christmas in Turku", 759);
export const fltitusvillemunzeewarriorsRidingTheXmasRocket = new Year2016EventType(
  "FLTitusvilleMunzeeWarriors riding the Xmas Rocket",
  760
);
export const leyduinEvent = new Year2016EventType("Leyduin event", 761);
export const spiraltrolletsJulemunzee = new Year2016EventType("Spiraltrollets julemunzee", 762);
export const xmas2016Dortmund = new Year2016EventType("XMas 2016 Dortmund", 763);
export const ymhChristmasParty = new Year2016EventType("YMH Christmas Party", 764);
export const merryMunzmas3 = new Year2016EventType("Merry Munzmas 3", 767);
export const aChristmasDinnerInShepparton = new Year2016EventType(
  "A Christmas Dinner in Shepparton",
  768
);
export const aVeryMerryMunzeeChristmas = new Year2016EventType(
  "A Very Merry Munzee Christmas",
  769
);
export const aWnyChristmasMunzParty = new Year2016EventType("A WNY Christmas Munz Party", 770);
export const chiliChristmasBash = new Year2016EventType("Chili Christmas Bash", 771);
export const christmasInPrague2016 = new Year2016EventType("Christmas in Prague 2016", 772);
export const christmasInShepparton2016 = new Year2016EventType("Christmas in Shepparton 2016", 773);
export const christmasMunzeePartyInAppletonWi = new Year2016EventType(
  "Christmas Munzee Party In Appleton, WI",
  774
);
export const dkSealandHappyXmas = new Year2016EventType("DK Sealand Happy Xmas", 775);
export const fatherChristmasInFakenham = new Year2016EventType("Father Christmas in Fakenham", 776);
export const aNorthCarolinaChristmas = new Year2016EventType("A North Carolina Christmas", 777);
export const berlinerWeihnachtsevent = new Year2016EventType("Berliner Weihnachtsevent", 778);
export const christmasInTexas = new Year2016EventType("Christmas in Texas", 779);
export const helsinkiXmasParty = new Year2016EventType("Helsinki Xmas Party", 780);
export const nhCookiesOnMilk2 = new Year2016EventType("NH- Cookies on Milk 2", 781);
export const aLightSaberRogueChrismas = new Year2016EventType("A Light Saber Rogue Chrismas", 788);
export const blueMunzeewithoutYou = new Year2016EventType("Blue Munzee (Without You)", 789);
export const deoxmas2016 = new Year2016EventType("DEoXmas 2016", 790);
export const kansasCitysLetItSnow = new Year2016EventType("Kansas City's Let it Snow", 791);
export const santaOnTheLoo = new Year2016EventType("Santa on the Loo", 792);
export const santasSunshineShingding = new Year2016EventType("Santa's Sunshine Shingding", 793);
export const budapestMunzeeXmaskaracsony2016 = new Year2016EventType(
  "Budapest Munzee Xmas/Karacsony 2016",
  794
);
export const leedsChristmasBash = new Year2016EventType("Leeds Christmas Bash", 795);
export const newHampshireChristmas = new Year2016EventType("New Hampshire Christmas", 796);
export const aDudeclanChristmas = new Year2016EventType("A DudeClan Christmas", 797);
export const kansasCitysCandyCaneLane = new Year2016EventType("Kansas City's Candy Cane Lane", 798);
export const aCharlieBrownChristmasEvent2016 = new Year2016EventType(
  "A Charlie Brown Christmas Event 2016",
  799
);
export const twilightXmasInSa = new Year2016EventType("Twilight Xmas in SA", 803);
export const christmasInPa2016 = new Year2016EventType("Christmas in Pa 2016", 804);
export const londonChristmas2016 = new Year2016EventType("London Christmas 2016", 805);
