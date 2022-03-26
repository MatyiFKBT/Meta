import { eventGroup, EventType } from "./_index";
import { Group } from "../common/group";

export const year2019EventsGroup = new Group({
  name: "2019 Events",
}).addParent(eventGroup);

export class Year2019EventType extends EventType {
  override template(): this {
    super.template();
    return this.addGroup(year2019EventsGroup);
  }
}

export const happyNewYear2019SpaceCoast = new Year2019EventType(
  "Happy New Year 2019 Space Coast",
  1718
);
export const bonVoyageKlassickelly = new Year2019EventType("Bon Voyage KlassicKelly", 1719);
export const letTheSunshineCommence = new Year2019EventType("Let the Sunshine Commence", 1720);
export const suncoastHello = new Year2019EventType("Suncoast Hello", 1721);
export const suncoastInThePark = new Year2019EventType("Suncoast In the Park", 1722);
export const suncoastMorningInDadeCity = new Year2019EventType(
  "Suncoast morning in Dade City",
  1723
);
export const alUnicornWatchersSociety2019 = new Year2019EventType(
  "AL Unicorn Watchers Society - 2019",
  1748
);
export const australiaDay2019 = new Year2019EventType("Australia Day 2019", 1749);
export const australiaDay2019InTheWest = new Year2019EventType(
  "Australia Day 2019 in the West",
  1750
);
export const flEagleLakeCoexisting = new Year2019EventType("FL - Eagle Lake Coexisting", 1751);
export const blastInThePark = new Year2019EventType("Blast in the Park", 1757);
export const groundhogsDayInTexas = new Year2019EventType("Groundhog's Day in Texas", 1758);
export const yumaWeekendMeetAndGreet = new Year2019EventType("Yuma Weekend Meet and Greet", 1759);
export const smallTownEventVeniceFl = new Year2019EventType("Small Town Event Venice, FL", 1769);
export const flCampfireOnTheLake = new Year2019EventType("FL - Campfire on the Lake", 1771);
export const gaTheDevilWentDownToFolkston = new Year2019EventType(
  "GA - The Devil Went Down To Folkston",
  1772
);
export const geobuddiesBurgersCoexist = new Year2019EventType(
  "GeoBuddies & Burgers - CoExist",
  1773
);
export const flHikeNSeekMunzee = new Year2019EventType("FL - Hike n Seek Munzee", 1807);
export const sanAntonioTxStPatricksDayEarly = new Year2019EventType(
  "San Antonio, TX St. Patrick's Day early",
  1808
);
export const mm8MonkzeeMadness = new Year2019EventType("MM8: Monkzee Madness", 1809);
export const mm8MonkzeeMadnessDinner = new Year2019EventType("MM8: Monkzee Madness Dinner", 1810);
export const leavingOnAJetPlanedestinationHawaii = new Year2019EventType(
  "Leaving on a Jet Plane---Destination: Hawaii",
  1811
);
export const leavingOnAJetPlanedestinationAlaska = new Year2019EventType(
  "Leaving on a Jet Plane---Destination: Alaska",
  1812
);
export const leavingOnAJetPlanetourDeCape = new Year2019EventType(
  "Leaving on a Jet Plane---Tour de Cape",
  1813
);
export const mm8RallyDayBreakfast = new Year2019EventType("MM8: Rally Day Breakfast", 1814);
export const mm8RallyDayDinner = new Year2019EventType("MM8: Rally Day Dinner", 1815);
export const mm8Stage1 = new Year2019EventType("MM8: Stage 1", 1816);
export const mm8Stage2 = new Year2019EventType("MM8: Stage 2", 1817);
export const mm8Stage3 = new Year2019EventType("MM8: Stage 3", 1818);
export const mm8Stage4 = new Year2019EventType("MM8: Stage 4", 1819);
export const mm8Stage5 = new Year2019EventType("MM8: Stage 5", 1820);
export const planesTrainsAndMunzeemobiles = new Year2019EventType(
  "Planes, Trains and Munzeemobiles",
  1821
);
export const toTheMoon = new Year2019EventType("TO THE MOON", 1822);
export const txSmallTownEventSeguin = new Year2019EventType("TX - Small Town Event Seguin", 1823);
export const maSwingIntoSpring = new Year2019EventType("MA - Swing Into Spring", 1832);
export const polkCountyMunzeeFrenzee1 = new Year2019EventType("Polk County Munzee Frenzee 1", 1833);
export const flPortOfCallMunzee = new Year2019EventType("FL - Port of Call - Munzee", 1834);
export const aprilEvent2019 = new Year2019EventType("April Event 2019", 1835);
export const jollyDipper = new Year2019EventType("Jolly Dipper", 1849);
export const aprilInAlabama2019ThursdayNightMeetGreet = new Year2019EventType(
  "April in Alabama 2019 Thursday night meet & greet",
  1859
);
export const activitiesInTheParkCraigmuirLake = new Year2019EventType(
  "Activities in the Park - Craigmuir Lake",
  1860
);
export const birminghamAlabamaAprilFoolsLunch = new Year2019EventType(
  "Birmingham, Alabama - April Fool's Lunch",
  1861
);
export const aprilInAlabama2019FridayOnMyMind = new Year2019EventType(
  "April in Alabama 2019 Friday on my mind",
  1862
);
export const ncAprilInApex = new Year2019EventType("(NC) - April in Apex", 1863);
export const aprilInAlabama2019goodDaySunshine = new Year2019EventType(
  "April in Alabama 2019-Good day sunshine",
  1864
);
export const aprilInAlabama2019mainEvent = new Year2019EventType(
  "April in Alabama 2019-Main event",
  1865
);
export const aprilInAlabama2019saturdayNight = new Year2019EventType(
  "April in Alabama 2019-Saturday night",
  1866
);
export const budapestiBolondosHsvt = new Year2019EventType("Budapesti Bolondos Húsvét", 1867);
export const aprilInAlabama2019happyTrails = new Year2019EventType(
  "April in Alabama 2019-Happy Trails",
  1868
);
export const aprilliaSySilli = new Year2019EventType("Aprillia syö silliä!", 1869);
export const berlinerAprilscherz = new Year2019EventType("Berliner Aprilscherz", 1870);
export const itsATrickAWhollyFoolishTrick = new Year2019EventType(
  "It's a Trick! A Wholly Foolish Trick!",
  1871
);
export const munzeeAprilFoolsWorkum = new Year2019EventType("Munzee April Fools Workum", 1872);
export const westonsFoolishEmeraldGardens = new Year2019EventType(
  "Weston’s FOOLISH Emerald Gardens",
  1873
);
export const vodacomScavengerHunt = new Year2019EventType("Vodacom Scavenger Hunt!", 1879);
export const isTheSnowGoneYet = new Year2019EventType("Is The Snow Gone Yet?", 1881);
export const lostMythRaidCaptureTheBigorangetruck = new Year2019EventType(
  "Lost Myth Raid - Capture the BigOrangeTruck",
  1882
);
export const marylandJokersWild = new Year2019EventType("Maryland Jokers Wild", 1883);
export const onionCreekJamboree = new Year2019EventType("Onion Creek Jamboree", 1884);
export const scAprilFuddsDay = new Year2019EventType("SC: April Fudds Day", 1885);
export const springIntoTheDesert = new Year2019EventType("Spring Into the Desert", 1886);
export const toSpringOrNotToSpringThatIsTheQuestion = new Year2019EventType(
  "To Spring, or not to Spring? That is the question",
  1887
);
export const rockTheRing = new Year2019EventType("Rock the Ring", 1888);
export const lostMythRaid = new Year2019EventType("Lost Myth Raid", 1889);
export const hellsinkiEasterIi = new Year2019EventType("HELLsinki Easter II", 1898);
export const curiositea32019EasterEvent = new Year2019EventType(
  "CuriosiTea 3 - 2019 Easter Event",
  1899
);
export const flHopAroundRotaryPark = new Year2019EventType("FL - Hop Around Rotary Park", 1900);
export const prague2019Easter = new Year2019EventType("prague 2019 easter", 1901);
export const unicornAprilMadness = new Year2019EventType("Unicorn April Madness", 1902);
export const kvibergsPskevent = new Year2019EventType("Kvibergs påskevent", 1903);
export const foolMeOnce = new Year2019EventType("Fool me once", 1904);
export const jackInTheBox = new Year2019EventType("Jack in the box", 1905);
export const stopFoolingAroundAndHaveADrink = new Year2019EventType(
  "Stop fooling around and have a drink!",
  1906
);
export const pNP = new Year2019EventType("P n P", 1907);
export const ncAprilFoolEvent = new Year2019EventType("(NC) April Fool event", 1908);
export const n1EventInBasel = new Year2019EventType("1. Event in Basel", 1909);
export const aprilInOrlando = new Year2019EventType("April in Orlando", 1910);
export const clownzeeventKalSlotsruin = new Year2019EventType("ClownZEEvent Kalø Slotsruin", 1911);
export const foolingAroundInKc = new Year2019EventType("Fooling Around in KC", 1912);
export const paFoolishFunForAll = new Year2019EventType("(PA) Foolish Fun For All", 1913);
export const maNeverTooLateToBeAFool = new Year2019EventType(
  "MA - Never Too Late To Be A Fool",
  1914
);
export const munzeeMania2019PizzaParty = new Year2019EventType(
  "Munzee Mania 2019 -- Pizza Party",
  1922
);
export const mayTheFourthBeWithYou2019StarWarsDay = new Year2019EventType(
  "May the Fourth Be With You - 2019 Star Wars Day",
  1923
);
export const munzeeMania2019MainEvent = new Year2019EventType(
  "Munzee Mania 2019 -- Main Event",
  1924
);
export const n3eTwenteEvent2019 = new Year2019EventType("3e Twente Event (2019)", 1925);
export const munzeeMania2019BagelsCoffee = new Year2019EventType(
  "Munzee Mania 2019 -- Bagels & Coffee",
  1926
);
export const fortMadisonIaArmedForcesDay = new Year2019EventType(
  "Fort Madison, IA Armed Forces Day",
  1930
);
export const wernerBredebuschVsJamesBond = new Year2019EventType(
  "Werner Bredebusch vs. James Bond",
  1931
);
export const allRoadsLeadToWoodstock = new Year2019EventType("All Roads Lead to Woodstock", 1932);
export const aspMunzeeBash = new Year2019EventType("ASP Munzee Bash", 1933);
export const inSmallTownTerreHaute = new Year2019EventType("IN - Small Town Terre Haute", 1934);
export const moTuesdayNightAtDennys = new Year2019EventType("MO - Tuesday Night at Denny's", 1935);
export const ksSmallTownEventWichita = new Year2019EventType("KS - Small Town Event Wichita", 1936);
export const fortWorthRootinTootinMunzeeRoundup = new Year2019EventType(
  "Fort Worth Rootin’ Tootin’ Munzee Roundup",
  1937
);
export const n2ndPlaneSpottingEvent = new Year2019EventType("2nd Plane Spotting Event", 1938);
export const ghostbusterskelsterbach = new Year2019EventType("Ghostbusters@Kelsterbach", 1939);
export const txCheers = new Year2019EventType("TX - Cheer(s)!", 1940);
export const txLonghornsLikeChipotleTooRight = new Year2019EventType(
  "TX - Longhorns Like Chipotle Too, Right?",
  1941
);
export const premunzstock2019 = new Year2019EventType("Pre-MunzStock 2019", 1946);
export const geowoodstock2019 = new Year2019EventType("GeoWoodstock 2019", 1947);
export const mhqOpenHouseGws19 = new Year2019EventType("MHQ Open House GWS '19", 1948);
export const geomunzstock2019 = new Year2019EventType("GeoMunzstock 2019", 1949);
export const ncgreenvilleMunzeeWindDown = new Year2019EventType(
  "NC-Greenville Munzee Wind Down",
  1974
);
export const n8thBirthday = new Year2019EventType("8th Birthday", 1975);
export const bonn201912 = new Year2019EventType("Bonn 2019 1/2", 1979);
export const bonn201922 = new Year2019EventType("Bonn 2019 2/2", 1980);
export const flAFathersDayCelebration = new Year2019EventType(
  "FL - A Father's Day Celebration",
  1981
);
export const highOreLineTrailMeetup = new Year2019EventType("High Ore Line Trail Meet-Up", 1982);
export const menudoMunzee = new Year2019EventType("Menudo & Munzee", 1983);
export const n2xTheCelebrationBudapest = new Year2019EventType("2x the Celebration Budapest", 1984);
export const backToTheFuture80sBirthdayCelebration = new Year2019EventType(
  "Back to the Future 80's Birthday Celebration",
  1990
);
export const davidJoinsTheMillionairesClub = new Year2019EventType(
  "David joins the Millionaires Club!",
  1991
);
export const aMunzeePowWow = new Year2019EventType("A Munzee Pow Wow", 1992);
export const berlinerM8Geburtstagsevent = new Year2019EventType(
  "Berliner M8 Geburtstagsevent",
  1993
);
export const waterWorks = new Year2019EventType("Water Works", 1994);
export const mwmb2019 = new Year2019EventType("MWMB 2019", 2001);
export const mattsMunzeeMeetupMhq = new Year2019EventType("Matt's Munzee Meetup - MHQ", 2009);
export const ctDogsInThePark = new Year2019EventType("CT - Dogs In The Park", 2019);
export const munzeesBirthdayInAdelaide80sStyle = new Year2019EventType(
  "Munzee's birthday in Adelaide - 80s style!",
  2020
);
export const crossroadsUsa1 = new Year2019EventType("Crossroads USA-1", 2021);
export const ohAfterTheBashMunzeeEvent = new Year2019EventType(
  "OH - After the Bash Munzee Event",
  2022
);
export const crossroadsUsa2 = new Year2019EventType("Crossroads USA 2", 2023);
export const somersetCiderBashTaunton1 = new Year2019EventType(
  "Somerset Cider Bash - Taunton 1",
  2024
);
export const somersetCiderBashTaunton2 = new Year2019EventType(
  "Somerset Cider Bash - Taunton 2",
  2025
);
export const somersetCiderBashBurnhamOnSea = new Year2019EventType(
  "Somerset Cider Bash - Burnham on Sea",
  2026
);
export const somersetCiderBashHighbridge = new Year2019EventType(
  "Somerset Cider Bash - Highbridge",
  2027
);
export const aarhus2019 = new Year2019EventType("Aarhus 2019", 2028);
export const bowlrs63rdAndMunzees8thBirthday = new Year2019EventType(
  "Bowlr's 63rd and Munzee's 8th Birthday",
  2029
);
export const dkMunzeeMeetsDjurslandBirthdayParty14 = new Year2019EventType(
  "DK: Munzee meets Djursland - Birthday party 1/4",
  2030
);
export const dkMunzeeMeetsDjurslandBirthdayParty24 = new Year2019EventType(
  "DK: Munzee meets Djursland - Birthday party 2/4",
  2031
);
export const dkMunzeeMeetsDjurslandBirthdayParty34 = new Year2019EventType(
  "DK: Munzee meets Djursland - Birthday party 3/4",
  2032
);
export const crazy8AStPaulMunzeeBirthdayCelebration = new Year2019EventType(
  "CRAZY 8 - A St. Paul Munzee Birthday Celebration",
  2033
);
export const dogDaysOfSummer5 = new Year2019EventType("Dog Days of Summer #5", 2034);
export const einBonnerInBielefeld = new Year2019EventType("Ein Bonner in Bielefeld", 2035);
export const syntt8rieventti = new Year2019EventType("Syntt8rieventti", 2036);
export const munzee8thBirthdayDebrecen = new Year2019EventType(
  "Munzee 8th Birthday Debrecen",
  2037
);
export const marylandMunzeeBirthdayCelebration = new Year2019EventType(
  "Maryland Munzee Birthday Celebration",
  2038
);
export const happy8thBirthdayWorkum = new Year2019EventType("Happy 8th Birthday - Workum", 2039);
export const cedarRapidsGoodMorning8thBirthdayParty = new Year2019EventType(
  "Cedar Rapids Good Morning 8th Birthday Party",
  2040
);
export const n4thAnnualCedarRapidsBirthdayBash = new Year2019EventType(
  "4th Annual Cedar Rapids Birthday Bash",
  2041
);
export const lgasBackToThe80sBirthdayInShepparton = new Year2019EventType(
  "LGAS - Back to the 80s Birthday in Shepparton",
  2042
);
export const mattsMunzeeMeetupMwmb2019 = new Year2019EventType(
  "Matt's Munzee Meetup - MWMB 2019",
  2043
);
export const dkMunzeeMeetsDjurslandBirthdayParty44 = new Year2019EventType(
  "DK: Munzee meets Djursland - Birthday party 4/4",
  2044
);
export const allUCanEatMunzeeBday = new Year2019EventType("All U Can Eat Munzee B'day", 2045);
export const mattsMunzeeMeetupDenmarkBirthday2019 = new Year2019EventType(
  "Matt's Munzee Meetup - Denmark Birthday 2019",
  2048
);
export const mattsMunzeeMeetupCrazy8 = new Year2019EventType(
  "Matt's Munzee Meetup - CRAZY 8",
  2049
);
export const celebrateMunzee8thBirthdayAtTheBash = new Year2019EventType(
  "Celebrate Munzee 8th Birthday at the Bash!!",
  2050
);
export const n8udapestMunzeeSzlinap = new Year2019EventType("8udapest - Munzee Szülinap", 2056);
export const crazy8beeWallaCrazy = new Year2019EventType("CRAZY 8 -Bee Walla Crazy", 2057);
export const caverscottJoinsTheMillionairesClub = new Year2019EventType(
  "CaverScott joins the Millionaires Club!",
  2058
);
export const munzee8thBirthdayInCalifornia = new Year2019EventType(
  "Munzee 8th Birthday in California",
  2059
);
export const lgasWestCoastFlorida = new Year2019EventType("LGAS West Coast Florida", 2060);
export const n4thAnnualBirthdayLuau = new Year2019EventType("🌺 4th Annual Birthday Luau 🌺", 2061);
export const txNationalSmoremunzeesDay = new Year2019EventType(
  "TX: National S'more(Munzee)s Day",
  2062
);
export const crazy8AMplsMunzeeBirthdayCelebration = new Year2019EventType(
  "CRAZY 8 - A Mpls. Munzee Birthday Celebration",
  2063
);
export const lgasKcCelebration = new Year2019EventType("LGAS KC Celebration", 2064);
export const maSmallTownSturbridge = new Year2019EventType("MA - Small Town Sturbridge", 2098);
export const yorkshires8thBirthdayParty = new Year2019EventType(
  "Yorkshire's 8th Birthday Party",
  2099
);
export const gdayYall = new Year2019EventType("G'day y'all", 2100);
export const celebrate8YearsWithRebelgtpAtSheetz = new Year2019EventType(
  "Celebrate 8 years with RebelGTP at Sheetz",
  2101
);
export const totallyAwesomeMunzeeBirthdayInKc = new Year2019EventType(
  "Totally Awesome Munzee Birthday in KC",
  2102
);
export const stl2PirateBash = new Year2019EventType("StL 2: Pirate Bash", 2103);
export const n8vuotissynttrieventti = new Year2019EventType("8-vuotissynttärieventti", 2104);
export const sommereventimHainByMunzeeclanLm = new Year2019EventType(
  'Sommerevent "Im Hain" by Munzeeclan LM',
  2105
);
export const hellsinkiGoesEspoo = new Year2019EventType("HELLsinki Goes Espoo!", 2115);
export const ncMunzee8thBirthdayCelebration = new Year2019EventType(
  "(NC) Munzee 8th Birthday celebration",
  2116
);
export const m8thPartilleStadsparken = new Year2019EventType("M8th Partille Stadsparken", 2117);
export const wiSmallTownWestBend = new Year2019EventType("WI - Small Town West Bend", 2123);
export const bowlrswifeBirthdayAndMeetTheClanEvent = new Year2019EventType(
  "Bowlrswife birthday and meet the clan event",
  2127
);
export const flSmallTownDadeCity = new Year2019EventType("FL - Small Town Dade City", 2128);
export const greerMunzeeHuntIii = new Year2019EventType("Greer Munzee Hunt III", 2129);
export const thePerfectMunzeeDayGreerMunzeeHuntIii = new Year2019EventType(
  "The Perfect Munzee Day - Greer Munzee Hunt III",
  2130
);
export const vaWoodboogerSmallTownEvent = new Year2019EventType(
  "VA - Woodbooger Small Town Event",
  2131
);
export const n1NcMunzeeFestival2019RoyalBall = new Year2019EventType(
  "1 NC Munzee Festival 2019 - Royal Ball",
  2132
);
export const n2NcMunzeeFestival2019 = new Year2019EventType("2 NC Munzee Festival 2019", 2133);
export const n3NcMunzeeFestival2019CrowningGlory = new Year2019EventType(
  "3 NC Munzee Festival 2019 - Crowning Glory",
  2134
);
export const flBikiniSpeedoBeachParty = new Year2019EventType(
  "FL Bikini & Speedo Beach Party",
  2135
);
export const floridaHappyHour = new Year2019EventType("Florida Happy Hour!", 2136);
export const munzeeBashInTheVillagesFl = new Year2019EventType(
  "Munzee Bash in The Villages, FL",
  2137
);
export const njSmallTownStanhope3 = new Year2019EventType("NJ- Small Town Stanhope 3", 2138);
export const stl1TalkLikeAPirate = new Year2019EventType("StL 1: Talk like a Pirate", 2146);
export const autumnWave2 = new Year2019EventType("Autumn Wave 2", 2147);
export const stl3PiratesLoveTacos = new Year2019EventType("StL 3: Pirates Love Tacos", 2148);
export const laSmallTownHoumaBayouCountry = new Year2019EventType(
  "LA - Small Town Houma Bayou Country",
  2149
);
export const byeByeBash2019 = new Year2019EventType("Bye Bye Bash 2019", 2150);
export const itsSpookierOutWest = new Year2019EventType("It's Spookier Out West!", 2151);
export const bhamSeptemberMunzeeLunch = new Year2019EventType("BHAM September Munzee Lunch", 2152);
export const mhqBash2019Registration = new Year2019EventType("MHQ Bash 2019 Registration", 2153);
export const mhqBash6EventzeeFun = new Year2019EventType("MHQ Bash 6 Eventzee Fun", 2154);
export const mhqBash6AndWallabash = new Year2019EventType("MHQ Bash 6 and WallaBash", 2155);
export const knightsGoblet2019 = new Year2019EventType("Knight's Goblet 2019", 2156);
export const theKingsFork = new Year2019EventType("The King's Fork", 2157);
export const mhqBash6Fitness = new Year2019EventType("MHQ Bash 6 Fitness", 2158);
export const halloweenIHobro2019 = new Year2019EventType("Halloween i Hobro 2019", 2159);
export const romeGaMunzeeMeetup = new Year2019EventType("Rome, GA Munzee Meet-Up", 2160);
export const texasHalloween2019 = new Year2019EventType("Texas Halloween 2019", 2161);
export const prattvillesSpookyGathering = new Year2019EventType(
  "Prattville's Spooky Gathering",
  2162
);
export const frightNightInKc = new Year2019EventType("Fright Night in KC", 2163);
export const halloBudapestHalloween = new Year2019EventType("Hallo Budapest, Halloween", 2164);
export const aGhoulishGoodTime = new Year2019EventType("A Ghoulish Good Time", 2165);
export const bhamSpookyScaryLunch = new Year2019EventType("BHAM Spooky Scary Lunch", 2166);
export const halloweenTurku2019 = new Year2019EventType("Halloween Turku 2019", 2167);
export const munzeeDayStartupSpartanburg = new Year2019EventType(
  "Munzee Day Startup, Spartanburg",
  2168
);
export const chillinAtTheIhop = new Year2019EventType("Chillin at the IHOP", 2169);
export const aHauntingInHampton = new Year2019EventType("A Haunting in Hampton", 2170);
export const desMoinesSpooktacularHalloween = new Year2019EventType(
  "Des Moines Spooktacular Halloween",
  2171
);
export const aMarylandMunzoweenSpooktacular = new Year2019EventType(
  "A Maryland Munzoween Spooktacular",
  2172
);
export const halloweenKaffinami = new Year2019EventType("Halloween Kaffinami", 2173);
export const sayBooAndMunzeeOnberlin = new Year2019EventType(
  "Say Boo and Munzee on (Berlin)",
  2174
);
export const halloweenPartyWorkum2019 = new Year2019EventType("Halloween Party Workum 2019", 2175);
export const diaDeLosMunzees = new Year2019EventType("Dia de los Munzees", 2176);
export const hotDiggityDog = new Year2019EventType("HOT DIGGITY DOG", 2177);
export const floridaFrankenweenie = new Year2019EventType("Florida Frankenweenie", 2178);
export const halloweenInLithuania2019 = new Year2019EventType("Halloween in Lithuania 2019", 2179);
export const mcdougallGhostsAndGoblins = new Year2019EventType(
  "McDougall Ghosts and Goblins",
  2180
);
export const zauberhafteTraubenlezeeEvent1 = new Year2019EventType(
  "Zauberhafte TraubenleZEE - Event 1",
  2181
);
export const spooktacularTomkatzeeEvent2 = new Year2019EventType(
  "Spooktacular TomKatZEE - Event 2",
  2182
);
export const witchPlease = new Year2019EventType("Witch, Please", 2185);
export const tomcatCaterwaul = new Year2019EventType("Tomcat Caterwaul", 2186);
export const ghoulsInOrlando = new Year2019EventType("Ghouls in Orlando", 2187);
export const goblinsForDinnerInOrlando = new Year2019EventType(
  "Goblins for Dinner in Orlando",
  2188
);
export const allHallowsInTheRye = new Year2019EventType("All Hallows in the Rye", 2189);
export const battyMexican = new Year2019EventType("Batty Mexican", 2190);
export const octoberPumpkinFest = new Year2019EventType("October Pumpkin Fest", 2191);
export const aWaterhalloweentownEvent = new Year2019EventType("A Water-Halloween-Town Event", 2192);
export const spookyMawsonLakes2 = new Year2019EventType("Spooky Mawson Lakes #2", 2193);
export const ymhHalloween2019 = new Year2019EventType("YMH Halloween 2019", 2194);
export const pickYourPoisonInTheAlRiverRegion = new Year2019EventType(
  "Pick your poison in the AL River Region",
  2195
);
export const meetingNewscaryFriends = new Year2019EventType('Meeting New & "Scary" Friends', 2198);
export const zombiesAreStillEatingMyMunzees = new Year2019EventType(
  "Zombies are still eating my Munzees",
  2199
);
export const caterwaulingHallowzeen2 = new Year2019EventType("Caterwauling Hallow-ZEEn 2", 2200);
export const possiblyPoisonousPotions = new Year2019EventType("Possibly poisonous potions", 2201);
export const halloween2019Praha = new Year2019EventType("Halloween 2019 - Praha", 2202);
export const newEnglandMunzfestMeetGreet = new Year2019EventType(
  "New England MunzFest: Meet & Greet",
  2203
);
export const newEnglandMunzfestSaturdayAm = new Year2019EventType(
  "New England MunzFest: Saturday AM",
  2204
);
export const newEnglandMunzfestSaturdayAfternoon = new Year2019EventType(
  "New England MunzFest: Saturday Afternoon",
  2205
);
export const newEnglandMunzfestSaturdayPmThinkPink = new Year2019EventType(
  "New England MunzFest: Saturday P.M. - Think Pink",
  2206
);
export const newEnglandMunzfestSundayAm = new Year2019EventType(
  "New England MunzFest: Sunday AM",
  2207
);
export const gettinSpookyInWatertown = new Year2019EventType("Gettin' Spooky in Watertown!", 2208);
export const theGoldenHindAtBrixham = new Year2019EventType("THE GOLDEN HIND AT BRIXHAM", 2225);
export const ncHalloween = new Year2019EventType("(NC) Halloween", 2226);
export const theBlackCatsBewitchment = new Year2019EventType("The black cats bewitchment", 2227);
export const kySmallTownGeorgetownSpooktacular = new Year2019EventType(
  "KY - Small Town Georgetown Spooktacular",
  2231
);
export const paleHalloween2019 = new Year2019EventType("Pa-le Halloween 2019", 2232);
export const alabamaRiverRegionPumpkinSplash = new Year2019EventType(
  "Alabama River Region Pumpkin Splash",
  2233
);
export const bewitchedInTheAlabamaRr = new Year2019EventType("Bewitched in the Alabama RR", 2234);
export const aScaryGoodTimeOnTheRiver = new Year2019EventType(
  "A Scary Good Time on the River",
  2235
);
export const fallingForYouInKansasCity = new Year2019EventType(
  "Falling For You in Kansas City",
  2236
);
export const puttLovesCandy = new Year2019EventType("Putt loves Candy", 2237);
export const bhamGoblinsGyros = new Year2019EventType("BHAM Goblins & Gyros", 2238);
export const autumnIsFinallyHereSomeoneIsTurning51 = new Year2019EventType(
  "Autumn is Finally Here & Someone is Turning 51!",
  2239
);
export const meetEnGreetLelystad = new Year2019EventType("Meet en Greet Lelystad", 2250);
export const celebrateRosieree = new Year2019EventType("Celebrate Rosieree!!", 2251);
export const blackFridayAtKiwanisIslandPark = new Year2019EventType(
  "Black Friday at Kiwanis Island Park",
  2260
);
export const berlinerWeihnachtsevent2019 = new Year2019EventType(
  "Berliner Weihnachtsevent 2019",
  2261
);
export const darmstdterWeihnachtzeevent2019 = new Year2019EventType(
  "Darmstädter WeihnachtZEEvent 2019",
  2262
);
export const aBluegrassChristmas = new Year2019EventType("A Bluegrass Christmas", 2263);
export const letsGetChristmaszee3MainEvent = new Year2019EventType(
  "Let's Get ChristmasZee 3 - Main Event",
  2264
);
export const christmasAtTheRanch = new Year2019EventType("Christmas at the Ranch", 2265);
export const arizonaMunzeeStockingStuffer = new Year2019EventType(
  "Arizona Munzee Stocking Stuffer",
  2266
);
export const seasonsGreetingFromSanibel = new Year2019EventType(
  "Season's Greeting from Sanibel",
  2267
);
export const adelaideChristmas19 = new Year2019EventType("Adelaide Christmas '19", 2268);
export const munzeeKarcsony2019 = new Year2019EventType("Munzee Karácsony 2019", 2269);
export const sukkerfeensJulebal = new Year2019EventType("Sukkerfeens julebal", 2270);
export const nissernesggesnapsefest = new Year2019EventType("Nissernes æggesnapsefest", 2271);
export const christmasAtExmouth = new Year2019EventType("Christmas at Exmouth", 2272);
export const merryJasonmasOnFridayThe13th = new Year2019EventType(
  "Merry Jason-mas On Friday The 13th",
  2274
);
export const brandonCandyCane = new Year2019EventType("Brandon Candy Cane", 2275);
export const txIWantAHippopotamusForChristmas = new Year2019EventType(
  "TX: I Want a Hippopotamus for Christmas",
  2276
);
export const ohioChristmasCelebration = new Year2019EventType(
  "O-H-I-O Christmas Celebration",
  2277
);
export const kansasCitysMerryChristmoose = new Year2019EventType(
  "Kansas City's Merry Christmoose",
  2278
);
export const kcsHolidayCheerAtTheZoo = new Year2019EventType("KC's Holiday Cheer at the Zoo", 2279);
export const cookiesOnMilk2019 = new Year2019EventType("Cookies on Milk - 2019", 2280);
export const alRrChristmas2019 = new Year2019EventType("AL RR Christmas 2019", 2281);
export const fastChristmasInGoslar = new Year2019EventType("Fast Christmas in Goslar", 2321);
export const ncChristmasInNorthCarolina = new Year2019EventType(
  "(NC) Christmas in North Carolina",
  2322
);
export const n2019SocalMunzeeChristmasEvent = new Year2019EventType(
  "2019 SoCal Munzee Christmas Event",
  2323
);
export const itsADirtyJobSanta = new Year2019EventType("It's a Dirty Job, Santa", 2324);
export const aCharlieBrownChristmas2019 = new Year2019EventType(
  "A Charlie Brown Christmas 2019",
  2325
);
export const hetWestfrieseGeuzenKerstEvent = new Year2019EventType(
  "Het west-Friese Geuzen Kerst event",
  2326
);
export const amsterdamChristmas2019 = new Year2019EventType("amsterdam christmas 2019", 2327);
export const n2019MerryChristmasInKorea = new Year2019EventType(
  "2019 Merry Christmas in Korea",
  2328
);
export const frostyTheSnowmanMeetsTheGrinch = new Year2019EventType(
  "Frosty the Snowman meets the Grinch",
  2329
);
export const zhOberlandWeihnachtsevent = new Year2019EventType("ZH Oberland Weihnachtsevent", 2330);
