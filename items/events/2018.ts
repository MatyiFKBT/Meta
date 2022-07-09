import { eventGroup, EventType } from "./_index";
import { Group } from "../../src/items/group";

export const year2018EventsGroup = new Group({
  name: "2018 Events",
}).addParent(eventGroup);

export class Year2018EventType extends EventType {
  override template(): this {
    super.template();
    return this.addGroup(year2018EventsGroup);
  }
}

export const flSuncoastIvBeachParty = new Year2018EventType("FL Suncoast IV Beach Party", 1221);
export const flSuncoastIvWelcome = new Year2018EventType("FL Suncoast IV Welcome", 1222);
export const suncoastIvEvening = new Year2018EventType("Suncoast IV Evening", 1223);
export const suncoastIvMainEvent = new Year2018EventType("Suncoast IV Main Event", 1224);
export const flHappyNewYearPart2 = new Year2018EventType("FL - Happy New Year, part 2", 1225);
export const alabamaThanksFlorida = new Year2018EventType("Alabama Thanks Florida", 1226);
export const flHappyNewYearPart1 = new Year2018EventType("FL - Happy New Year, part 1", 1227);
export const dinnerWithTheSnowbirdFriends = new Year2018EventType(
  "Dinner with the Snowbird Friends",
  1228
);
export const australiaDay2018 = new Year2018EventType("Australia Day 2018", 1230);
export const australiaDayInPerth = new Year2018EventType("Australia Day in Perth", 1231);
export const picnicInThePark2018 = new Year2018EventType("Picnic in the Park 2018", 1239);
export const gaFolkstonFunnelFun = new Year2018EventType("GA- Folkston Funnel Fun", 1244);
export const mm7FridayNightGetTogether = new Year2018EventType(
  "MM7 - Friday Night Get Together",
  1249
);
export const beHappyFollowTheSun = new Year2018EventType("Be Happy & Follow the Sun", 1250);
export const beHappyHaveABall = new Year2018EventType("Be Happy & Have a Ball!", 1251);
export const flBeHappyEatDessert = new Year2018EventType("FL - Be Happy & Eat Dessert", 1252);
export const munzeeMadness7 = new Year2018EventType("Munzee Madness 7", 1253);
export const wallabeeMm7DinnerParty = new Year2018EventType("WallaBee MM7 Dinner Party", 1254);
export const munzeeMadness7EarlyRisers = new Year2018EventType(
  "Munzee Madness 7 Early Risers",
  1256
);
export const txSpaceCoastComesToDenton = new Year2018EventType(
  "TX - Space Coast comes to Denton",
  1257
);
export const goGreen2018 = new Year2018EventType("Go Green 2018", 1258);
export const activitiesInTheParkIv = new Year2018EventType("Activities in the Park IV", 1260);
export const goGreenPhoenixTourDeCureAndZeetour = new Year2018EventType(
  "Go Green Phoenix, Tour de Cure and ZeeTour",
  1261
);
export const sheppzeeChoczeeEventSheppartonEasterEvent = new Year2018EventType(
  "Sheppzee Choczee Event- Shepparton Easter Event",
  1262
);
export const stPattyInTheDesert = new Year2018EventType("St. Patty in the Desert", 1263);
export const strikinItRichOnStPattysDay = new Year2018EventType(
  "Strikin’ It Rich on St. Patty’s Day",
  1283
);
export const adelaideGoesGreen = new Year2018EventType("Adelaide Goes Green", 1284);
export const ausflugInsGrnetemplinberlin = new Year2018EventType(
  "Ausflug ins Grüne (Templin/Berlin)",
  1285
);
export const flGoGreenOnTheSpaceCoast = new Year2018EventType(
  "FL - Go Green on the Space Coast",
  1286
);
export const goGreenInNorthCarolina = new Year2018EventType("Go Green in North Carolina", 1287);
export const march2018EquinoxEvent = new Year2018EventType("March 2018 equinox Event", 1288);
export const kokomoGreenInitiative = new Year2018EventType("Kokomo Green Initiative", 1292);
export const sebringFloridaCoexistGoGreen = new Year2018EventType(
  "Sebring Florida Co-Exist Go Green",
  1293
);
export const sowingMunzeeSeeds = new Year2018EventType("Sowing Munzee Seeds", 1294);
export const lakeNonaFlTourDeCure = new Year2018EventType("Lake Nona FL Tour de Cure", 1295);
export const nuttynanVisitsPrague = new Year2018EventType("Nuttynan Visits Prague", 1296);
export const redwoodParkGoesGreen = new Year2018EventType("Redwood Park Goes Green", 1297);
export const goldFeverTuesday = new Year2018EventType("Gold Fever Tuesday", 1298);
export const n3rdBudapestMunzeeEasternGoGreen = new Year2018EventType(
  "3rd Budapest Munzee Eastern - Go Green!",
  1299
);
export const hellsinkiEaster2018 = new Year2018EventType("HELLsinki Easter 2018", 1300);
export const helsinkiEaster2018 = new Year2018EventType("helsinki easter 2018", 1301);
export const foolishEasterEvent = new Year2018EventType("Foolish Easter Event", 1302);
export const alRiverRegionKickoffParty = new Year2018EventType(
  "AL River Region Kickoff Party",
  1303
);
export const alRiverRegion3rdAnnualEasterBash2 = new Year2018EventType(
  "AL River Region 3rd Annual Easter Bash #2",
  1304
);
export const alRiverRegion3rdAnnualEasterBash = new Year2018EventType(
  "AL River Region 3rd Annual Easter Bash",
  1305
);
export const alRiverRegionEasterBash5 = new Year2018EventType(
  "AL River Region Easter Bash #5",
  1306
);
export const alabamaRiverRegionEasterEvent3WakeupCall = new Year2018EventType(
  "Alabama River Region Easter Event #3 Wake-up call",
  1307
);
export const goGreenChemnitz = new Year2018EventType("Go Green @ Chemnitz", 1308);
export const goGreenOrGoHome = new Year2018EventType("Go Green or Go Home", 1309);
export const goGreenTurku2018 = new Year2018EventType("Go Green Turku 2018", 1310);
export const helloSpring2018 = new Year2018EventType("Hello Spring 2018", 1311);
export const kansasCitysSuperGreenEvent1 = new Year2018EventType(
  "Kansas City's Super Green event 1",
  1312
);
export const kansasCitysSuperGreenEvent2 = new Year2018EventType(
  "Kansas City's Super Green event 2",
  1313
);
export const pnwGoingGreenIn2018 = new Year2018EventType("PNW: Going Green in 2018", 1314);
export const alRiverRegionFarewellEvent = new Year2018EventType(
  "AL River Region Farewell Event",
  1315
);
export const goGreenNewEngland = new Year2018EventType("Go Green New England", 1316);
export const noordwijksGoGreenEvent = new Year2018EventType("Noordwijks Go Green Event", 1317);
export const westonSuperMunzees = new Year2018EventType("Weston Super Munzees", 1318);
export const goGreenMlndal = new Year2018EventType("Go Green Mölndal", 1321);
export const marylandGoesGreenWithMunzee = new Year2018EventType(
  "Maryland Goes Green with Munzee",
  1322
);
export const motorCityGoesGreen = new Year2018EventType("Motor City Goes Green", 1323);
export const munzeeMeetsOwlOsterevent = new Year2018EventType(
  "Munzee Meets OWL - Oster-Event",
  1324
);
export const goGreenInJordan = new Year2018EventType("Go Green in Jordan", 1325);
export const lostRiverMunzeeRaid = new Year2018EventType("Lost River Munzee Raid", 1326);
export const scGoGreenOnTaxDay = new Year2018EventType("SC: Go Green on Tax Day", 1327);
export const spaceCoastComesToNebraska = new Year2018EventType(
  "Space Coast comes to Nebraska...",
  1328
);
export const superGreenInKc = new Year2018EventType("Super Green in KC", 1331);
export const n2ndAnnualCuriositeaParty = new Year2018EventType("2nd Annual Curiositea Party", 1332);
export const celebratingEarthDayInEtx = new Year2018EventType(
  "Celebrating Earth Day in ETX!",
  1333
);
export const litzenberg = new Year2018EventType("Litzenberg", 1334);
export const frankfurtPlaneSpottingSundaygreenEvent = new Year2018EventType(
  "Frankfurt: Plane Spotting Sunday (Green event)",
  1335
);
export const goGreenWithMunzeeCitoEvent = new Year2018EventType(
  "Go Green with Munzee / CITO Event",
  1336
);
export const yorkshireGoGreenEvent = new Year2018EventType("Yorkshire Go Green Event", 1337);
export const lgasMayTheFourthBeWithLou = new Year2018EventType(
  "(LGAS) MAY the Fourth be with LOU!",
  1344
);
export const mayTheFourthBeWithYouStarWarsDay = new Year2018EventType(
  "May The Fourth Be With You - Star Wars Day",
  1345
);
export const seattleTourDeCure = new Year2018EventType("Seattle Tour de Cure", 1346);
export const lgasLoveOurUniqueInternationalSunnyEvents = new Year2018EventType(
  "(LGAS) Love Our Unique International Sunny Events",
  1347
);
export const munzeeMania2018MainEvent = new Year2018EventType(
  "Munzee Mania 2018 -- Main Event",
  1348
);
export const munzeeMania2018PizzaParty = new Year2018EventType(
  "Munzee Mania 2018 -- Pizza Party",
  1349
);
export const munzeeMania2018MothersDayCelebration = new Year2018EventType(
  "Munzee Mania 2018 -- Mother's Day Celebration",
  1350
);
export const lgasLetsGoAndScan = new Year2018EventType("(LGAS) Let's Go And Scan!", 1353);
export const lgasLadyLondonAppreciation = new Year2018EventType(
  "(LGAS) Lady London Appreciation",
  1354
);
export const theKingQueenVisitKansasCity = new Year2018EventType(
  "The King & Queen Visit Kansas City",
  1355
);
export const lgasSalisburyUk = new Year2018EventType("(LGAS) Salisbury, UK", 1356);
export const nyAlleganyBearEvent = new Year2018EventType("NY Allegany Bear Event", 1357);
export const rosemaryBuchananMemorialEvent = new Year2018EventType(
  "Rosemary Buchanan memorial event",
  1358
);
export const munzeeWoodstockCincinnati = new Year2018EventType("Munzee Woodstock Cincinnati", 1361);
export const gw2018MunzeeMeetGreet = new Year2018EventType("GW 2018 Munzee Meet & Greet", 1362);
export const kySmallTownEventFlorence = new Year2018EventType(
  "KY - Small Town Event Florence",
  1363
);
export const becclesWherryMunzeeEvent = new Year2018EventType("Beccles Wherry Munzee Event", 1364);
export const mwmb2018FridayNightNatureEvent = new Year2018EventType(
  "MWMB 2018 Friday Night Nature Event",
  1365
);
export const mwmb2018 = new Year2018EventType("MWMB 2018", 1366);
export const sunshineInVilnius = new Year2018EventType("Sunshine In Vilnius", 1380);
export const munzeeSoul = new Year2018EventType("Munzee Soul", 1381);
export const birthdayCircus2018 = new Year2018EventType("Birthday Circus 2018", 1382);
export const gemtlicherGrillevent = new Year2018EventType("Gemütlicher Grillevent", 1383);
export const berlinerM7Geburtstagsevent = new Year2018EventType(
  "Berliner M7 Geburtstagsevent",
  1384
);
export const flHappyBirthdayMunzeeSpaceCoastStyle = new Year2018EventType(
  "FL - Happy Birthday Munzee Space Coast Style",
  1385
);
export const happy7thBirthday = new Year2018EventType("happy 7th birthday", 1386);
export const hellsinkiMunzfunIi = new Year2018EventType("HELLsinki MUNZfun II", 1395);
export const happyBirthdayMunzee = new Year2018EventType("Happy birthday munzee!", 1396);
export const stuttgart2018schwabenstreichI = new Year2018EventType(
  "Stuttgart 2018-Schwabenstreich I",
  1397
);
export const cedarRapidsGoodMorningBirthdayParty = new Year2018EventType(
  "Cedar Rapids Good Morning Birthday Party",
  1398
);
export const n3rdAnnualCedarRapidsMunzeeBirthdayBash = new Year2018EventType(
  "3rd Annual Cedar Rapids Munzee Birthday Bash",
  1399
);
export const n7thBirthdayInSheppzee = new Year2018EventType("7th Birthday in Sheppzee", 1400);
export const alRiverRegionssCirqueDuMunz7thBirthday = new Year2018EventType(
  "AL River Regions's Cirque Du Munz 7th Birthday",
  1401
);
export const bowlrsBirthday2 = new Year2018EventType("Bowlr's Birthday #2", 1402);
export const stuttgart2018schwabenstreichIi = new Year2018EventType(
  "Stuttgart 2018-Schwabenstreich II",
  1403
);
export const stuttgart2018schwabenstreichIii = new Year2018EventType(
  "Stuttgart 2018-Schwabenstreich III",
  1404
);
export const n7thBirthdayEvent = new Year2018EventType("7th Birthday Event", 1405);
export const stuttgart2018schwabenstreichIv = new Year2018EventType(
  "Stuttgart 2018-Schwabenstreich IV",
  1406
);
export const stuttgart2018schwabenstreichV = new Year2018EventType(
  "Stuttgart 2018-Schwabenstreich V",
  1407
);
export const munzeeFreakShowBirthdayBirminghamAlabama = new Year2018EventType(
  "Munzee Freak Show Birthday - Birmingham, Alabama",
  1408
);
export const paThisBearIsGettingOld = new Year2018EventType("(PA) This bear is getting old", 1476);
export const cirqueDuMunzMackay = new Year2018EventType("Cirque Du Munz Mackay", 1477);
export const cirqueDuMunzee = new Year2018EventType("Cirque Du Munzee", 1478);
export const cirquedustoutSpectacular = new Year2018EventType("Cirque-Du-Stout Spectacular", 1479);
export const dogDaysOfSummerUnderTheBigTop = new Year2018EventType(
  "Dog Days of Summer Under the Big Top!",
  1480
);
export const m7LittleBdayInDd = new Year2018EventType("m7- little Bday in DD", 1481);
export const mhqUnderTheBigTop7thBirthdayCelebration = new Year2018EventType(
  "MHQ Under the Big Top 7th Birthday Celebration",
  1482
);
export const manzeOnnittelee7vuotiasta = new Year2018EventType(
  "Manze onnittelee 7-vuotiasta",
  1483
);
export const munzees7thBirthdayInYorkshire = new Year2018EventType(
  "Munzee's 7th Birthday in Yorkshire",
  1484
);
export const munzeeBirthdayInPraha = new Year2018EventType("Munzee Birthday in Praha", 1490);
export const wiThe3rdAnnualMunzeeBirthdayLuau = new Year2018EventType(
  "WI - The 3rd Annual Munzee Birthday Luau",
  1491
);
export const adelaideCirqueDuMunzBirthdayEvent = new Year2018EventType(
  "Adelaide Cirque Du Munz Birthday Event",
  1492
);
export const fthqCirqueDuMunz7thBirthdayCelebration = new Year2018EventType(
  "FTHQ Cirque Du Munz 7th Birthday Celebration",
  1493
);
export const helpSaveOurBeesEvent = new Year2018EventType("HeLp sAve oUR BEEs Event", 1494);
export const nrnberg2018M7 = new Year2018EventType("Nürnberg 2018 M7", 1495);
export const magicallyMarvelousMidwayMunzeeMixer = new Year2018EventType(
  "Magically Marvelous Midway Munzee Mixer",
  1496
);
export const pre3rdAnnualMunzeeBirthday = new Year2018EventType(
  "Pre 3rd Annual Munzee Birthday",
  1497
);
export const sitSipAndMunzee = new Year2018EventType("Sit, Sip and Munzee", 1498);
export const southSoundSummerEvent = new Year2018EventType("South Sound Summer Event", 1499);
export const birthdayBoardGameBash = new Year2018EventType("Birthday Board Game Bash", 1500);
export const dk7thBirthdayEventEvening = new Year2018EventType(
  "DK: 7th birthday event evening",
  1501
);
export const munzeeDjursland4 = new Year2018EventType("Munzee Djursland #4", 1502);
export const ticketsPlease = new Year2018EventType("TICKETS PLEASE", 1503);
export const munzeeTurns7AMinneapolisCelebration = new Year2018EventType(
  "Munzee Turns 7 - A Minneapolis Celebration",
  1504
);
export const munzeeTurns7ASaintPaulCelebration = new Year2018EventType(
  "Munzee Turns 7 - A Saint Paul Celebration",
  1505
);
export const n7thMunzeebirthday7munzeeSzlinap = new Year2018EventType(
  "7th MunzeeBirthday / 7.Munzee Szülinap",
  1506
);
export const cirqueDuLitzenberg = new Year2018EventType("Cirque du Litzenberg", 1507);
export const goingOutWithABangInKc = new Year2018EventType("Going Out with a Bang in KC", 1508);
export const happyBirthdayMunzee2 = new Year2018EventType("Happy Birthday, Munzee!", 1509);
export const marylandCelebratesMunzees7thBirthday = new Year2018EventType(
  "Maryland Celebrates Munzee's 7th Birthday",
  1510
);
export const munzeeBirthdayInRi = new Year2018EventType("Munzee Birthday In RI", 1511);
export const ohSmallTownEventWauseonOh = new Year2018EventType(
  "OH - Small Town Event Wauseon OH",
  1512
);
export const richmondParkBirthdayEvent = new Year2018EventType(
  "Richmond Park Birthday Event",
  1513
);
export const sawUOnTheAveAtThe7th = new Year2018EventType("Saw U on the Ave at the 7th", 1514);
export const celebrate7YearsWithRebelgtpAtSheetz = new Year2018EventType(
  "Celebrate 7 years with RebelGTP at Sheetz",
  1515
);
export const aMunzeeMeetGreetInWestBend = new Year2018EventType(
  "A Munzee Meet & Greet in West Bend",
  1516
);
export const anAfternoonInThePrater = new Year2018EventType("An afternoon in the Prater", 1517);
export const munzeeBash2 = new Year2018EventType("Munzee Bash 2", 1518);
export const fallIntoMunzeeMassstyle = new Year2018EventType("Fall Into Munzee, Mass-Style", 1520);
export const n2ndAnnualGreaterVancouverSummerMunzbash = new Year2018EventType(
  "2nd Annual Greater Vancouver Summer MunzBash",
  1521
);
export const cultureleHoofdstadVanEuropa2018Leeuwarden = new Year2018EventType(
  "Culturele Hoofdstad van Europa 2018, Leeuwarden",
  1525
);
export const autumnWave = new Year2018EventType("Autumn Wave", 1529);
export const northCarolinaMunzeeFestivalCaryThisYear3 = new Year2018EventType(
  "North Carolina Munzee Festival - Cary this year 3",
  1530
);
export const northCarolinaMunzeeFestivalCaryThisYear2 = new Year2018EventType(
  "North Carolina Munzee Festival - Cary this year 2",
  1531
);
export const northCarolinaMunzeeFestivalCaryThisYear1 = new Year2018EventType(
  "North Carolina Munzee Festival - Cary this year 1",
  1532
);
export const northCarolinaMunzeeFestivalCaryGetaway = new Year2018EventType(
  "North Carolina Munzee Festival - Cary Getaway",
  1533
);
export const preMunzeeEventForTheNcMunzeeFestival = new Year2018EventType(
  "Pre Munzee Event for the NC Munzee Festival",
  1534
);
export const letsHaveAKikiBirminghamAl = new Year2018EventType(
  "Let's Have a Kiki - Birmingham, AL",
  1547
);
export const oakMountainPaddleNFloatPicnic = new Year2018EventType(
  "Oak Mountain Paddle n' Float Picnic",
  1548
);
export const helloAutumn = new Year2018EventType("Hello Autumn", 1549);
export const whenInRome = new Year2018EventType("When in Rome...", 1550);
export const bhamWitchesWarlocksLuncheon = new Year2018EventType(
  "BHAM Witches & Warlocks Luncheon",
  1553
);
export const zeeCappersEarlyHalloweenMeetAndGreet = new Year2018EventType(
  "Zee Cappers' early Halloween Meet and Greet.",
  1555
);
export const aCedarRapidsHalloweenCelebration = new Year2018EventType(
  "A Cedar Rapids Halloween Celebration",
  1556
);
export const arizonaMunzeeween = new Year2018EventType("Arizona MunzeeWeen", 1557);
export const autumnInNewEngland = new Year2018EventType("Autumn in New England", 1558);
export const backalleyBroomsticksInBrenham = new Year2018EventType(
  "Back-alley Broomsticks in Brenham",
  1559
);
export const booBashInTheRiverRegion2018 = new Year2018EventType(
  "Boo Bash in the River Region 2018",
  1560
);
export const booInTheburg = new Year2018EventType("Boo in the 'Burg", 1561);
export const budapestHalloween = new Year2018EventType("Budapest Halloween", 1562);
export const fallHalloweenSocial = new Year2018EventType("Fall Halloween Social", 1563);
export const gettingBewitchedInBrenham = new Year2018EventType(
  "Getting Bewitched in Brenham!",
  1564
);
export const halloweenAufFrankensteinsSpuren = new Year2018EventType(
  "Halloween auf Frankensteins Spuren",
  1565
);
export const munzeeweenChristmasBootique = new Year2018EventType(
  "Munzeewe'en Christmas Boo-tique",
  1566
);
export const spookyGothenburg2018 = new Year2018EventType("Spooky Gothenburg 2018", 1567);
export const theHallozeenCaterwauling = new Year2018EventType("The HalloZEEn Caterwauling", 1568);
export const booOfQuinte2018 = new Year2018EventType("Boo of Quinte 2018", 1569);
export const ghostlyAtBeatonPark = new Year2018EventType("Ghostly at Beaton Park", 1570);
export const halloween2018Turku = new Year2018EventType("Halloween 2018 Turku", 1571);
export const halloweenInPlymouth = new Year2018EventType("Halloween in Plymouth", 1572);
export const halloweenPartyWorkum = new Year2018EventType("Halloween Party Workum", 1573);
export const munzeeHalloweenParty = new Year2018EventType("Munzee Halloween Party", 1574);
export const samhainInSouthbourneAllHallowsEveEvent = new Year2018EventType(
  "Samhain in Southbourne / All Hallow's Eve event",
  1575
);
export const theWitchingHour = new Year2018EventType("The Witching Hour", 1576);
export const swissMainStationHelloweenEvent18 = new Year2018EventType(
  "Swiss Main Station Helloween Event 18",
  1577
);
export const aakkosasema = new Year2018EventType("Aakkosasema", 1578);
export const filsBirthdayHalloweenEvent = new Year2018EventType(
  "Fil's Birthday Halloween Event",
  1579
);
export const aFrighteninglyFunTimeInWaconia = new Year2018EventType(
  "A Frighteningly Fun Time in Waconia",
  1583
);
export const ncSpooktacularBoardGames = new Year2018EventType(
  "(NC) Spooktacular board games",
  1584
);
export const aHowlingGoodTimeInKansasCity = new Year2018EventType(
  "A Howling Good Time in Kansas City",
  1585
);
export const aMischievousKansasCityEvent = new Year2018EventType(
  "A Mischievous Kansas City Event",
  1586
);
export const anOminousKansasCityEvent = new Year2018EventType("An Ominous Kansas City Event", 1587);
export const berlinerHalloweenevent2018 = new Year2018EventType(
  "Berliner Halloween-Event 2018",
  1588
);
export const brandonBoo2 = new Year2018EventType("Brandon Boo 2", 1590);
export const brandonBooBash2018 = new Year2018EventType("Brandon Boo Bash 2018", 1591);
export const desMoinesHalloweenieRoast = new Year2018EventType(
  'Des Moines Hallo"weenie" Roast',
  1592
);
export const paHalloweenEventInJohnstown = new Year2018EventType(
  "PA - Halloween event in Johnstown",
  1593
);
export const pumpkinSpiceEverythingNice = new Year2018EventType(
  "Pumpkin Spice & Everything Nice",
  1594
);
export const sheppzeeHalloweenzee = new Year2018EventType("Sheppzee Halloweenzee", 1595);
export const halloweenMunzeeBash = new Year2018EventType("Halloween Munzee Bash!", 1596);
export const norderstedtsHexenEvent = new Year2018EventType("Norderstedts Hexen Event", 1597);
export const tivertonsHalloween = new Year2018EventType("Tiverton’s Hallowe’en", 1598);
export const lasVegas2018 = new Year2018EventType("las vegas 2018", 1599);
export const aScaryDinnerDjursland = new Year2018EventType("A scary dinner Djursland", 1600);
export const djurslandSpookySnack = new Year2018EventType("Djursland spooky snack", 1601);
export const njSmallTownStanhope = new Year2018EventType("NJ - Small Town Stanhope", 1606);
export const hobroHalloweenHorror = new Year2018EventType("Hobro Halloween Horror", 1607);
export const witchWayDoWeGhoul = new Year2018EventType("Witch Way Do We Ghoul?", 1608);
export const bundooraHalloweenBash = new Year2018EventType("Bundoora Halloween Bash", 1609);
export const corralTheGhouls = new Year2018EventType("Corral the Ghouls!", 1610);
export const halloweenInNorthFlorida = new Year2018EventType("Halloween in North Florida", 1611);
export const happyHallowween = new Year2018EventType("Happy Hallow-ween", 1612);
export const marylandMunzeeMonsterMash = new Year2018EventType(
  "Maryland Munzee Monster Mash",
  1613
);
export const aVancouverHalloween = new Year2018EventType("A Vancouver Halloween", 1614);
export const castingASpellInClitheroe = new Year2018EventType("Casting A Spell in Clitheroe", 1615);
export const helloween = new Year2018EventType("HELLoween", 1616);
export const litzenbergHalloweenBash = new Year2018EventType("Litzenberg Halloween Bash", 1617);
export const spookyAussieMawsonLakesAdventures = new Year2018EventType(
  "Spooky Aussie Mawson Lakes Adventures",
  1618
);
export const byeByeBash = new Year2018EventType("Bye bye Bash", 1619);
export const horrorHalloween = new Year2018EventType("Horror Halloween", 1620);
export const centralOhioMonsterMash = new Year2018EventType("Central Ohio Monster Mash", 1621);
export const mhqHauntedHangout = new Year2018EventType("MHQ - Haunted Hangout", 1622);
export const mhqWerewolfWalking = new Year2018EventType("MHQ - Werewolf Walking", 1623);
export const mhqWallaboo = new Year2018EventType("MHQ - WallaBoo!", 1624);
export const monsterMash = new Year2018EventType("Monster Mash", 1625);
export const mhqTrickrTrotRace = new Year2018EventType("MHQ - Trick ‘R Trot Race", 1626);
export const nationalBlackCatDaycoexist = new Year2018EventType(
  "National Black Cat Day #coexist",
  1627
);
export const n2eMeetEnGreetKampen = new Year2018EventType("2e Meet en Greet Kampen", 1628);
export const theGreatDorchestergunpowderTreasonAndPlot = new Year2018EventType(
  'The Great Dorchester "Gunpowder, Treason and Plot',
  1629
);
export const blackFridayMunzeeGetTogether = new Year2018EventType(
  "Black Friday Munzee Get Together",
  1642
);
export const fatherChristmas2018 = new Year2018EventType("Father Christmas 2018", 1652);
export const aPartridge = new Year2018EventType("A. Partridge", 1653);
export const magdeburgChristmas2018 = new Year2018EventType("Magdeburg Christmas 2018", 1654);
export const christmasInSanibel2018 = new Year2018EventType("Christmas in Sanibel 2018", 1655);
export const scroogedAtCentralMarket = new Year2018EventType("Scrooged at Central Market", 1667);
export const alabamaRrChristmas2018 = new Year2018EventType("Alabama RR Christmas 2018", 1668);
export const merryMunzmasV = new Year2018EventType("Merry Munzmas V", 1669);
export const xxlmasEventBudapest = new Year2018EventType("XXL-mas event Budapest", 1670);
export const iWantAHippopotamusForChristmas2018 = new Year2018EventType(
  "I want a Hippopotamus for Christmas 2018",
  1671
);
export const tacosForChristmas2018 = new Year2018EventType("Tacos for Christmas 2018", 1672);
export const pinellasChristmasEvent = new Year2018EventType("Pinellas Christmas Event", 1673);
export const cookiesOnMilk2018 = new Year2018EventType("Cookies on Milk 2018", 1674);
export const letsGetChristmaszeeAgain = new Year2018EventType(
  "Let's Get Christmas-Zee Again",
  1675
);
export const jouluinenTurku2018 = new Year2018EventType("Jouluinen Turku 2018", 1676);
export const goudseStroopwaffelChristmasParty = new Year2018EventType(
  "Goudse Stroopwaffel Christmas Party",
  1677
);
export const downHomeGathering = new Year2018EventType("Down Home Gathering", 1678);
export const darmstdterWeihnachtzeevent22Herrngarten = new Year2018EventType(
  "Darmstädter WeihnachtZEEvent 2.2 - Herrngarten",
  1679
);
export const darmstdterWeihnachtzeevent21Rosenhhe = new Year2018EventType(
  "Darmstädter WeihnachtZEEvent 2.1 - Rosenhöhe",
  1680
);
export const christmasInTheDesert = new Year2018EventType("Christmas in the Desert", 1681);
export const budapestMunzeeChristmas2018 = new Year2018EventType(
  "Budapest Munzee Christmas 2018",
  1682
);
export const aCedarRapidsChristmas2018 = new Year2018EventType(
  "A Cedar Rapids Christmas 2018",
  1683
);
export const xmasAtLyndhurst = new Year2018EventType("Xmas at Lyndhurst", 1684);
export const theNantwitchHunt = new Year2018EventType("The Nant-Witch hunt", 1685);
export const marylandMunzeeChristmas2018 = new Year2018EventType(
  "Maryland Munzee Christmas 2018",
  1686
);
export const helsinkiXmasPartyIii = new Year2018EventType("Helsinki Xmas Party III", 1687);
export const berlinerWeihnachtsevent2018 = new Year2018EventType(
  "Berliner Weihnachtsevent 2018",
  1688
);
export const edinaMnAMunzeeChristmas = new Year2018EventType("Edina MN - A Munzee Christmas", 1689);
export const findlayNaughtyorNiceXmasJamboree = new Year2018EventType(
  "Findlay Naughty (or nice?) Xmas Jamboree",
  1690
);
export const santaIsComingToAppleton = new Year2018EventType("Santa is coming to Appleton!!", 1692);
export const aVerySheppzeeXmas = new Year2018EventType("A Very Sheppzee Xmas", 1693);
export const christmasBathWater = new Year2018EventType("Christmas Bath Water", 1694);
export const holidayHappiness2018 = new Year2018EventType("Holiday Happiness 2018", 1695);
export const meleKalikimakaFromBirmingham = new Year2018EventType(
  "Mele Kalikimaka from Birmingham!",
  1696
);
export const christmasInNoarlunga = new Year2018EventType("Christmas in Noarlunga", 1697);
export const christmasInTheEmeraldCity2018 = new Year2018EventType(
  "Christmas in the Emerald City 2018",
  1698
);
export const christmasInTheNw2 = new Year2018EventType("Christmas in the NW 2", 1699);
export const julehyggePGrden = new Year2018EventType("Julehygge på gården", 1700);
export const julestuePGrden = new Year2018EventType("Julestue på gården", 1701);
export const yorkshireChristmasParty2018 = new Year2018EventType(
  "Yorkshire Christmas Party 2018",
  1702
);
export const lisebergXmasEvent = new Year2018EventType("Liseberg X-mas Event", 1703);
export const aCharlieBrownChristmas2018 = new Year2018EventType(
  "A Charlie Brown Christmas 2018",
  1704
);
export const n2018MerryChristmasEventOfKorea = new Year2018EventType(
  "2018 Merry Christmas event of Korea",
  1710
);
export const aChristmasToRememberInTheCarolinas = new Year2018EventType(
  "A Christmas to Remember in the Carolinas",
  1711
);
export const nationalLampoonsChristmasVacationInKc = new Year2018EventType(
  "National Lampoon's Christmas Vacation in KC",
  1712
);
export const aChristmasStoryInKc = new Year2018EventType("A Christmas Story in KC", 1713);
export const badSantaIsComingToKansasCity = new Year2018EventType(
  "Bad Santa is Coming to Kansas City",
  1714
);
export const ohChristmasPalmOhChristmasPalm = new Year2018EventType(
  "Oh Christmas Palm, Oh Christmas Palm",
  1715
);
export const weihnachtsstressAde = new Year2018EventType("Weihnachtsstress ade", 1716);
export const marylandMistletoeMischief = new Year2018EventType("Maryland Mistletoe Mischief", 1717);
