import { eventGroup, EventType } from "./_index";
import { Group } from "../../src/common/group";

export const year2017EventsGroup = new Group({
  name: "2017 Events",
}).addParent(eventGroup);

export class Year2017EventType extends EventType {
  override template(): this {
    super.template();
    return this.addGroup(year2017EventsGroup);
  }
}

export const welcome2017drachenfels = new Year2017EventType("Welcome 2017 @Drachenfels", 806);
export const frankbroughtonsBigBirthdayBlowoutBonanza = new Year2017EventType(
  "FrankBroughton's Big Birthday Blowout Bonanza!",
  810
);
export const flSuncoastEventIii = new Year2017EventType("FL Suncoast Event III", 811);
export const flSuncoastPirateFeast = new Year2017EventType("Fl Suncoast Pirate Feast", 812);
export const suncoastMunzeeAhoy = new Year2017EventType("Suncoast Munzee Ahoy", 813);
export const picnicInThePark2017 = new Year2017EventType("Picnic in the Park 2017", 814);
export const flSuncoastSunrise = new Year2017EventType("FL Suncoast Sunrise", 815);
export const munzeeVictoriaDinner = new Year2017EventType("Munzee Victoria Dinner", 816);
export const australiaDay2017 = new Year2017EventType("Australia Day 2017", 817);
export const aGatheringOfTheFederation = new Year2017EventType(
  "A Gathering of the Federation",
  818
);
export const txWhiteUnicorn = new Year2017EventType("TX - White Unicorn", 819);
export const westernAustraliaDayInSheppzee = new Year2017EventType(
  "Western Australia Day in SheppZee",
  820
);
export const nzSouthIslandMeetMhq = new Year2017EventType("NZ South Island Meet MHQ", 825);
export const flkiwanisIslandShoppingDay = new Year2017EventType(
  "FL-Kiwanis Island Shopping Day",
  826
);
export const mhqInNz = new Year2017EventType("MHQ in NZ", 827);
export const flOrangeYouGladYouSawAFlagWavingManate = new Year2017EventType(
  "FL - Orange You Glad You Saw A Flag Waving Manate",
  828
);
export const n1stWollukEvent = new Year2017EventType("1st Wolluk event", 829);
export const mostlValentineBloodDrive = new Year2017EventType("MO:StL Valentine Blood Drive", 830);
export const munzeeLoveInFortMyersFl = new Year2017EventType("Munzee Love in Fort Myers FL", 852);
export const munzeeLoveIsInTheAir = new Year2017EventType("Munzee Love Is In The Air", 855);
export const veteransMemorialParkCelebration = new Year2017EventType(
  "Veteran's Memorial Park Celebration",
  856
);
export const flMunzeeLighthousePark = new Year2017EventType("FL- Munzee Lighthouse Park", 857);
export const foodTruckFantastico = new Year2017EventType("Food Truck Fantastico!", 858);
export const breakfastBeforeTheMadness = new Year2017EventType("Breakfast Before The Madness", 859);
export const munzeeMadness6 = new Year2017EventType("Munzee Madness 6", 860);
export const munzeeMadnessViDinnerParty = new Year2017EventType(
  "Munzee Madness VI Dinner Party",
  861
);
export const luckyLeprechaunEvent2017 = new Year2017EventType("Lucky Leprechaun Event 2017", 864);
export const spaceCoastComesToTylerTx = new Year2017EventType(
  "Space Coast comes to Tyler, TX",
  865
);
export const bestFest2 = new Year2017EventType("Best Fest 2", 866);
export const teaParty2017 = new Year2017EventType("Tea Party 2017", 867);
export const flLakeManateaParty2017 = new Year2017EventType("FL - Lake Manatea Party 2017", 868);
export const manateeasterCelebration2017 = new Year2017EventType(
  "Manateeaster Celebration 2017",
  869
);
export const bostonTeaParty2017 = new Year2017EventType("Boston Tea Party 2017", 870);
export const aGeneseoTeaPartyWhereEveryoneHasCoffee = new Year2017EventType(
  "A Geneseo Tea Party Where Everyone Has Coffee",
  871
);
export const il1stAnnualCuriositeaParty = new Year2017EventType(
  "IL 1st Annual CuriosiTea Party",
  872
);
export const nyCaffeineOverload = new Year2017EventType("NY CAFFEINE OVERLOAD!!!", 873);
export const alynWatersEasterEggcitment = new Year2017EventType(
  "Alyn Waters Easter Eggcitment",
  874
);
export const aFloridaEasterLuncheon2017 = new Year2017EventType(
  "A Florida Easter Luncheon 2017",
  875
);
export const bidefords1stEventItsTeaTime = new Year2017EventType(
  "Bideford's 1st Event - It's Tea Time!",
  876
);
export const easterInOz2017 = new Year2017EventType("Easter in Oz 2017", 877);
export const eggstraSpecialMarylandMunzeeEasterEvent = new Year2017EventType(
  "Egg'stra Special Maryland Munzee Easter Event",
  878
);
export const houstonWeHaveAteaParty = new Year2017EventType('Houston, We Have a "Tea" Party', 879);
export const munzeeByTheSeeNz = new Year2017EventType("Munzee by the See NZ", 880);
export const munzeeHsvtBudapest = new Year2017EventType("Munzee Húsvét - Budapest", 881);
export const springtimeAtTheZoo2017 = new Year2017EventType("Springtime at the Zoo 2017", 882);
export const stuttgartTeatimeInHohenheim = new Year2017EventType(
  "Stuttgart - Teatime in Hohenheim",
  883
);
export const easterTrollHunt = new Year2017EventType("Easter Troll Hunt", 884);
export const maHoppyEasterAtIndianHill = new Year2017EventType(
  "(MA) Hoppy Easter at Indian Hill",
  885
);
export const dkPskeIAarhus = new Year2017EventType("DK: Påske i Aarhus", 886);
export const njBilbyEvent = new Year2017EventType("NJ Bilby Event", 887);
export const hoppingTimeInTheCarolinas = new Year2017EventType(
  "Hopping Time In The Carolinas",
  888
);
export const adelaideEasterEvent2017 = new Year2017EventType("Adelaide Easter Event 2017", 889);
export const aHappyMunzeeasterMmxvii = new Year2017EventType("A Happy MunzeEaster MMXVII", 890);
export const teaPartyInHelsinki2017 = new Year2017EventType("Tea Party in Helsinki 2017", 891);
export const teaPartyEventInTurku = new Year2017EventType("Tea Party Event in Turku!", 892);
export const flSuncoastEggstravaganza2017 = new Year2017EventType(
  "FL - Suncoast Eggstravaganza 2017",
  893
);
export const pershoresMeltingEggs = new Year2017EventType("Pershore's Melting Eggs!", 894);
export const orimattilanPsiinen = new Year2017EventType("Orimattilan Pääsiäinen", 895);
export const huntersEasterMunzeeBash = new Year2017EventType("Hunter's Easter Munzee Bash", 896);
export const alACatfishEaster = new Year2017EventType("AL - A Catfish Easter", 972);
export const moShamrocksAndEaster = new Year2017EventType("MO - Shamrocks and Easter?", 973);
export const fridayNightTeaser = new Year2017EventType("Friday Night Teaser", 974);
export const n1stOfThe2ndAnnualAlabamaEasterEvents = new Year2017EventType(
  "1st of the 2nd Annual Alabama Easter Events",
  975
);
export const n2MunzeeHsvt = new Year2017EventType("2. Munzee Húsvét", 976);
export const n2ndOfThe2ndAnnualAlRiverRegionTeaParties = new Year2017EventType(
  "2nd of the 2nd Annual AL River Region Tea Parties",
  977
);
export const n3rdOfThe2ndAnnualAlabamaEasterEvents = new Year2017EventType(
  "3rd of the 2nd Annual Alabama Easter Events",
  978
);
export const amAnfangWarDasEi = new Year2017EventType("Am Anfang war das Ei", 979);
export const frogHollow = new Year2017EventType("Frog Hollow", 980);
export const southernCaliforniaAprilTeaPartyEvent = new Year2017EventType(
  "Southern California April Tea Party Event",
  981
);
export const millsParkEaster = new Year2017EventType("Mills Park Easter", 982);
export const stGeorgesEasterParty = new Year2017EventType("St. George's Easter Party", 983);
export const teapartyLeyduin = new Year2017EventType("Tea-party Leyduin", 984);
export const n6MillionthMunzee = new Year2017EventType("6 Millionth Munzee", 985);
export const moviesMonstersAnd1Munzee = new Year2017EventType("Movies Monsters and 1 Munzee", 986);
export const n6MillionthMunzeeSpecial = new Year2017EventType("6 Millionth Munzee Special", 987);
export const rackheathsPinwheelTeaParty = new Year2017EventType(
  "Rackheath's Pinwheel Tea Party",
  988
);
export const ncChallengesInThePinesEvent1 = new Year2017EventType(
  "(NC) Challenges in the Pines - Event 1",
  989
);
export const ncChallengesInThePinesEvent2 = new Year2017EventType(
  "(NC) Challenges in the Pines - Event 2",
  990
);
export const ncChallengesInThePinesEvent3 = new Year2017EventType(
  "(NC) Challenges in the Pines - Event 3",
  991
);
export const aSlinkyEaster2017 = new Year2017EventType("A Slinky Easter 2017", 992);
export const afterEasterMeetAndGreet = new Year2017EventType("After Easter Meet and Greet", 993);
export const easterInShepparton = new Year2017EventType("Easter in Shepparton", 994);
export const ntxTexasTeaParty = new Year2017EventType("NTX: Texas Tea Party", 995);
export const springInTheArizonaDesert = new Year2017EventType("Spring In The Arizona Desert", 996);
export const codnorCasinoBankHolidayPrizeBonanza = new Year2017EventType(
  "Codnor Casino Bank Holiday Prize Bonanza",
  997
);
export const mayThe4thBeWithYou = new Year2017EventType("May the 4th Be With You", 1000);
export const revengeOfTheFifth = new Year2017EventType("Revenge of the Fifth", 1001);
export const revengeOfTheSixth = new Year2017EventType("Revenge of the SIxTH", 1002);
export const helsinkie1ew = new Year2017EventType("#Helsinki #E1EW", 1003);
export const frankfurtLion = new Year2017EventType("Frankfurt Lion", 1004);
export const munzeeMayMayhemInLeeds = new Year2017EventType("Munzee May Mayhem in Leeds", 1005);
export const n2eTwenteEventTheNetherlands = new Year2017EventType(
  "2e Twente Event - The Netherlands",
  1009
);
export const orangeParkMunzee = new Year2017EventType("Orange Park Munzee", 1010);
export const aMayMunzeeMeetup = new Year2017EventType("A May Munzee Meetup", 1011);
export const munzeeMeetGreetInAshevilleNc = new Year2017EventType(
  "Munzee Meet & Greet in Asheville NC",
  1012
);
export const coexist15 = new Year2017EventType("Coexist 15!", 1013);
export const malvernGlacierEvent = new Year2017EventType("Malvern Glacier Event", 1014);
export const mwmb17FridayNightHangout = new Year2017EventType("MWMB17 Friday Night Hangout", 1016);
export const getOutdoorsBaytown = new Year2017EventType("Get Outdoors - Baytown", 1017);
export const mwmb2017 = new Year2017EventType("MWMB 2017", 1018);
export const gaFolkstonFunnel = new Year2017EventType("GA- Folkston Funnel", 1026);
export const holmenkollbakken2017 = new Year2017EventType("Holmenkollbakken 2017", 1027);
export const maEagledadandxeniaComeToMatheSequel = new Year2017EventType(
  "MA - EagleDadandXenia Come To MA (The Sequel)",
  1028
);
export const sunnySouthport = new Year2017EventType("Sunny Southport", 1029);
export const suisseSummerEvent = new Year2017EventType("SUISSE Summer Event", 1030);
export const n6thBirthdaySuperRob = new Year2017EventType("6th Birthday Super Rob", 1031);
export const n6thAnniversary = new Year2017EventType("6th anniversary", 1032);
export const appletonsPrebirthdayMeetAndGreet = new Year2017EventType(
  "Appleton's Pre-Birthday Meet And Greet",
  1033
);
export const cedarRapidsBirthdayBashInThePark = new Year2017EventType(
  "Cedar Rapids Birthday Bash in the Park",
  1034
);
export const cedarRapidsASecondAnnualBirthdayBash = new Year2017EventType(
  "Cedar Rapids a Second Annual Birthday Bash",
  1035
);
export const cedarRapidsBirthdayBashAtTheLake = new Year2017EventType(
  "Cedar Rapids Birthday Bash - at the Lake",
  1036
);
export const letsLuauMunzees6thBirthday = new Year2017EventType(
  "Let's Luau! Munzee's 6th Birthday",
  1037
);
export const westCovinas1stEvent = new Year2017EventType("West Covina's 1st Event", 1038);
export const alRr6thBirthdayCelebration = new Year2017EventType(
  "AL RR 6th Birthday Celebration",
  1039
);
export const munzeeMeetsOwlBirthdayBash14 = new Year2017EventType(
  "Munzee meets OWL - Birthday Bash 1/4",
  1040
);
export const munzeeMeetsOwlBirthdayBash24 = new Year2017EventType(
  "Munzee meets OWL - Birthday Bash 2/4",
  1041
);
export const dogDaysOfSummerIii = new Year2017EventType("Dog Days of Summer III", 1042);
export const melbournesMidwinterMunzday3 = new Year2017EventType(
  "Melbourne's Midwinter Munzday 3",
  1043
);
export const munzeePostBirthdayBash = new Year2017EventType("Munzee Post Birthday Bash", 1044);
export const sixYearsPlusARetirement = new Year2017EventType("Six years plus a retirement", 1045);
export const ncAnotherSixYearEvent = new Year2017EventType("NC - Another six year event", 1046);
export const n6OfSunstroke = new Year2017EventType("6° of Sunstroke!", 1047);
export const barnstapleBirthdayBash = new Year2017EventType("Barnstaple Birthday Bash", 1048);
export const birthdayBashBoardGames = new Year2017EventType("Birthday Bash & Board Games", 1049);
export const munzeeMeetsOwlBirthdayBash34 = new Year2017EventType(
  "Munzee meets OWL - Birthday Bash 3/4",
  1050
);
export const munzeeMeetsOwlBirthdayBash44 = new Year2017EventType(
  "Munzee meets OWL - Birthday Bash 4/4",
  1051
);
export const mdMunzee6thBirthdayCelebration = new Year2017EventType(
  "MD - Munzee 6th Birthday Celebration",
  1052
);
export const ymhBirthdayParty = new Year2017EventType("YMH Birthday Party", 1053);
export const munzee6thBd = new Year2017EventType("Munzee 6th BD", 1054);
export const zpeeralenBirthdayEvent = new Year2017EventType("Zpeeralen Birthday Event", 1058);
export const maBirthdayBash2017 = new Year2017EventType("MA Birthday Bash 2017", 1059);
export const birminghamAlBirthdayPartyCoexist = new Year2017EventType(
  "Birmingham, AL Birthday Party - Coexist",
  1060
);
export const mhqBirthdayBash2017 = new Year2017EventType("MHQ Birthday Bash 2017", 1061);
export const munzeen6vuotissynttritTurussa = new Year2017EventType(
  "Munzeen 6-vuotissynttärit Turussa",
  1062
);
export const dkBirthdayBbqParty = new Year2017EventType("DK: Birthday BBQ party", 1063);
export const dkMunzee6thBirthday = new Year2017EventType("DK: Munzee 6th birthday", 1064);
export const hellsinkiMunzfun = new Year2017EventType("HELLsinki MUNZfun", 1065);
export const iadesMoinesBirthdayBash = new Year2017EventType("IA-Des Moines Birthday Bash", 1066);
export const munzee6thBirthdaychristmasInJuly = new Year2017EventType(
  "Munzee 6th Birthday/Christmas in July",
  1067
);
export const munzeeTurns6InTheLandOfTheK1w1 = new Year2017EventType(
  "Munzee turns 6 in the land of the K1W1",
  1068
);
export const pubCrawlVirginiaBeachEdition = new Year2017EventType(
  "Pub Crawl: Virginia Beach Edition",
  1069
);
export const suncoastPartyTime2017 = new Year2017EventType("Suncoast Party Time 2017", 1070);
export const brockenhurstVillageTopazMunzeeBirthdayEvent = new Year2017EventType(
  "Brockenhurst Village Topaz Munzee Birthday Event",
  1071
);
export const celebrating6InBattleGround = new Year2017EventType(
  "Celebrating 6 in Battle Ground",
  1072
);
export const munzeeInTheMountains6thBirthdayBash = new Year2017EventType(
  "Munzee In The Mountains - 6th Birthday Bash",
  1073
);
export const munzees6thBirthdayPartyAtThePark = new Year2017EventType(
  "Munzee's 6th Birthday Party at the park",
  1074
);
export const n6thBirthdayCelebrationsInTatura = new Year2017EventType(
  "6th Birthday Celebrations in Tatura",
  1075
);
export const ohHappyBirthdayInWauseon = new Year2017EventType(
  "OH - Happy Birthday In Wauseon",
  1076
);
export const wichitaBirthdayBash2017 = new Year2017EventType("Wichita Birthday Bash 2017", 1077);
export const n6thBirthdayInWellington = new Year2017EventType("6th Birthday in Wellington", 1078);
export const budapest2017M6 = new Year2017EventType("Budapest 2017 M6", 1079);
export const letsPartyLikeA6YearOld = new Year2017EventType("Let's Party Like a 6 Year Old", 1080);
export const scASuperDuperUltraBirthdayCelebration = new Year2017EventType(
  "SC: A Super Duper Ultra Birthday Celebration",
  1081
);
export const spejdernesLejr2017 = new Year2017EventType("Spejdernes Lejr 2017", 1082);
export const battleOfTewkesbury = new Year2017EventType("Battle of Tewkesbury", 1083);
export const miSmallTownEventVicksburgMichigan = new Year2017EventType(
  "MI - Small Town Event Vicksburg Michigan",
  1084
);
export const mwmbMuncie = new Year2017EventType("MWMB @ Muncie", 1085);
export const kansasCityBirthdayBash2017 = new Year2017EventType(
  "Kansas City Birthday Bash 2017",
  1089
);
export const n6YearOldBirthdayBash = new Year2017EventType("6 Year Old Birthday Bash", 1090);
export const aMunzeeBirthdayCelebration = new Year2017EventType(
  "A Munzee Birthday Celebration",
  1091
);
export const happyBirthday = new Year2017EventType("HAPPY BIRTHDAY!!", 1092);
export const munzee6szlinap = new Year2017EventType("Munzee 6.Szülinap", 1093);
export const munzees6thInOnkaparinga = new Year2017EventType("Munzees 6th in Onkaparinga", 1094);
export const flSpaceCoastBirthdayCelebration = new Year2017EventType(
  "FL - Space Coast Birthday Celebration",
  1095
);
export const luckyHeather = new Year2017EventType("Lucky Heather", 1096);
export const rideLondon = new Year2017EventType("Ride London", 1097);
export const sheffieldSpecialOlympics2017 = new Year2017EventType(
  "Sheffield Special Olympics 2017",
  1098
);
export const secretagentbillsBigRide = new Year2017EventType("Secretagentbill's Big Ride", 1099);
export const wiMunzeeInRegnerPark = new Year2017EventType("WI - Munzee in Regner Park", 1102);
export const vielOnKesJljell = new Year2017EventType("Vielä on kesää jäljellä...", 1103);
export const wiSpaceCoastVisitsAppleton = new Year2017EventType(
  "WI - Space Coast visits Appleton",
  1104
);
export const mnSpaceCoastVisitsBloomington = new Year2017EventType(
  "MN - Space Coast visits Bloomington",
  1108
);
export const iaSpaceCoastVisitsCedarRapids = new Year2017EventType(
  "IA - Space Coast visits cedar rapids",
  1109
);
export const almostBlackedOut = new Year2017EventType("Almost Blacked Out", 1110);
export const theGreatAmericanSolarZeesEclipse = new Year2017EventType(
  "The Great American Solar ZeE's Eclipse",
  1111
);
export const greerHuntForTheAceASmallTownEvent = new Year2017EventType(
  "Greer Hunt for the Ace - A Small Town Event",
  1112
);
export const greerMunzeeHuntIi = new Year2017EventType("Greer Munzee Hunt II", 1113);
export const solskinsensSummerevent = new Year2017EventType("Solskinsøens Summer-Event", 1114);
export const vaHamptonRoadsEncoreMunzeeEvent = new Year2017EventType(
  "(VA) Hampton Roads Encore Munzee Event",
  1116
);
export const n15thGeocachingHamptonRoadsPicnicMunz = new Year2017EventType(
  "15th Geocaching Hampton Roads Picnic & Munz",
  1117
);
export const girlScoutGetFitTrailKickoff = new Year2017EventType(
  "Girl Scout Get Fit Trail Kickoff",
  1119
);
export const getFitTrailCooldown = new Year2017EventType("Get Fit Trail Cooldown", 1120);
export const firstLimboEvent = new Year2017EventType("First Limbo Event", 1121);
export const metroVancouverSummerMunzbash = new Year2017EventType(
  "Metro Vancouver Summer MunzBash",
  1122
);
export const pnwMunzeeBash = new Year2017EventType("PNW Munzee Bash", 1123);
export const laSmallTownEventSlidell = new Year2017EventType("LA - Small Town Event Slidell", 1124);
export const flSmallTownEventAuburndale = new Year2017EventType(
  "FL - Small Town Event Auburndale",
  1125
);
export const theRichardsRadcliffeRamble = new Year2017EventType(
  "The Richards Radcliffe Ramble",
  1126
);
export const grboExplosion1 = new Year2017EventType("Gråbo Explosion 1", 1127);
export const mhqMunzfit2017 = new Year2017EventType("MHQ MunzFit 2017", 1128);
export const grboExplosion2017 = new Year2017EventType("Gråbo Explosion 2017", 1129);
export const mhqBash4DeucesWild = new Year2017EventType("MHQ Bash 4: Deuces Wild", 1130);
export const uksDhMegaWeekenderFerndown = new Year2017EventType(
  "UK's D&H Mega Weekender - Ferndown",
  1131
);
export const uksDhMegaWeekenderSouthampton = new Year2017EventType(
  "UK's D&H Mega Weekender - Southampton",
  1132
);
export const wallabashAtMhq = new Year2017EventType("WallaBash at MHQ", 1133);
export const lincolnWinnersEnclosureEvent = new Year2017EventType(
  "Lincoln Winners enclosure Event",
  1134
);
export const flFrightfulFeteOnTheSuncoast = new Year2017EventType(
  "FL - Frightful Fete on the Suncoast",
  1140
);
export const munzfit20Berlin = new Year2017EventType("Munzfit 2.0 @ Berlin", 1141);
export const flSmallTownTupperwareParty = new Year2017EventType(
  "FL - Small Town Tupperware Party",
  1142
);
export const maMunzfitLakeParkLoop = new Year2017EventType("MA - MunzFit @ Lake Park Loop", 1143);
export const maRunFromJasonMunzfit = new Year2017EventType("MA - Run from Jason Munzfit", 1145);
export const aMunzoweenEvent = new Year2017EventType('"A" Munzoween Event', 1146);
export const munzfit20cologne = new Year2017EventType("MunzFit 2.0 @Cologne", 1147);
export const tourDeCureDfw = new Year2017EventType("Tour de Cure DFW", 1148);
export const flMunzeeInParadiseSanibelIsland = new Year2017EventType(
  "FL - Munzee in Paradise Sanibel Island",
  1149
);
export const aSpooktacularKcHalloween = new Year2017EventType("A Spooktacular KC Halloween", 1152);
export const kansasCitysGhoulishLastCall = new Year2017EventType(
  "Kansas City's Ghoulish Last Call",
  1153
);
export const munzeeween2017 = new Year2017EventType("Munzeewe'en 2017", 1154);
export const n2ndAnnualMunztersMash = new Year2017EventType("2nd Annual MunZters Mash", 1155);
export const monsterMunzeeMash = new Year2017EventType("Monster Munzee Mash", 1156);
export const nhLeafPeepingMunzeeStyle = new Year2017EventType(
  "N.H. Leaf Peeping - Munzee style",
  1157
);
export const bewitchingTheBee = new Year2017EventType("Bewitching the Bee!", 1158);
export const nightOfTheLivingMunzee = new Year2017EventType("Night of the Living Munzee", 1159);
export const somethingWickedThisWayMunzees = new Year2017EventType(
  "Something Wicked This Way Munzees",
  1160
);
export const munzeeSalutesVeterans = new Year2017EventType("Munzee Salutes Veterans", 1161);
export const meetgreetKampen = new Year2017EventType("Meet&Greet; Kampen", 1162);
export const suomi100Finland100Years = new Year2017EventType("Suomi100 - Finland 100 years", 1165);
export const munzeeCoexistAlexandraMega2017 = new Year2017EventType(
  "Munzee CoExist / Alexandra MEGA 2017",
  1166
);
export const flBlackFridayEventSpaceCoastStyle = new Year2017EventType(
  "FL- Black Friday Event Space Coast Style",
  1167
);
export const fatherChristmas2017 = new Year2017EventType("Father Christmas 2017", 1171);
export const leipzigHoHoHo = new Year2017EventType("Leipzig Ho - Ho - Ho!", 1172);
export const theXmasMagicOfMunzee = new Year2017EventType("The Xmas Magic of Munzee", 1173);
export const tx2ndAnnualWhiteUnicorn = new Year2017EventType("TX - 2nd Annual White Unicorn", 1174);
export const santasMunzeeWorkShop = new Year2017EventType("Santa’s Munzee Work Shop", 1175);
export const andoverXmasUkhampshire = new Year2017EventType("Andover Xmas - UK (Hampshire)", 1176);
export const dkJul2017stjylland = new Year2017EventType("DK: Jul 2017 (Østjylland)", 1177).setIcon(
  "dk:jul2017(Østjylland)"
);
export const nhCookiesOnMilk3 = new Year2017EventType("NH | Cookies on Milk 3", 1178);
export const txiWantAHippopotamusForChristmas = new Year2017EventType(
  "TX-I want a Hippopotamus for Christmas",
  1179
);
export const texasQrazyChristmas = new Year2017EventType("Texas Qrazy Christmas!", 1180);
export const aNeNaughtyOrNiceXmasMeetAndGreet = new Year2017EventType(
  "A N.E Naughty or Nice Xmas Meet and Greet",
  1181
);
export const alabamaChristmasGathering2017 = new Year2017EventType(
  "Alabama Christmas Gathering 2017",
  1182
);
export const budapestiMunzeeKarcsony2017 = new Year2017EventType(
  "Budapesti Munzee Karácsony 2017",
  1183
);
export const christmasInCedarRapids2017 = new Year2017EventType(
  "Christmas In Cedar Rapids 2017",
  1184
);
export const christmasInFaversham = new Year2017EventType("Christmas in Faversham", 1185);
export const christmasInShepparton2017 = new Year2017EventType(
  "Christmas in Shepparton 2017",
  1186
);
export const clanCreedChristmasCatchup = new Year2017EventType(
  "Clan Creed Christmas Catchup",
  1187
);
export const gettingChristmaszee = new Year2017EventType("Getting Christmas-Zee!!!", 1188);
export const marylandMunzeeChristmas2017 = new Year2017EventType(
  "Maryland Munzee Christmas 2017",
  1189
);
export const berlinerMunzeeweihnacht = new Year2017EventType("Berliner MunzeeWeihnacht", 1190);
export const carolinaChristmasChallenges2017 = new Year2017EventType(
  "Carolina Christmas Challenges (2017)",
  1191
);
export const christmasInConnecticut2017 = new Year2017EventType(
  "Christmas in Connecticut 2017",
  1192
);
export const darmstdterWeihnachtzeevent2017 = new Year2017EventType(
  "Darmstädter WeihnachtZEEvent 2017",
  1193
);
export const helsinkiXmasPartyIi = new Year2017EventType("Helsinki Xmas Party II", 1194);
export const rainyChristmasInThePnw = new Year2017EventType("Rainy Christmas in the PNW", 1195);
export const swissChristmasEventzeeDec12th2017 = new Year2017EventType(
  "Swiss Christmas Eventzee Dec. 12th 2017",
  1196
);
export const aMerrycurlingChristmasInChaska = new Year2017EventType(
  'A Merry "Curling" Christmas in Chaska',
  1199
);
export const felizNavidad = new Year2017EventType("Feliz Navidad", 1200);
export const goudseStroopwaffelChristmasEvent2017 = new Year2017EventType(
  "Goudse Stroopwaffel Christmas event 2017",
  1201
);
export const itsASummerMunzeeChristmas = new Year2017EventType(
  "It's A Summer Munzee Christmas",
  1202
);
export const kansasCityCoffeeDonutsInThePark = new Year2017EventType(
  "Kansas City Coffee & Donuts In The Park",
  1203
);
export const christmasInTheEmeraldCity2017 = new Year2017EventType(
  "Christmas in the Emerald City 2017",
  1204
);
export const aCharlieBrownChristmas2017 = new Year2017EventType(
  "A Charlie Brown Christmas 2017",
  1205
);
export const hsmMunzeeChristmas = new Year2017EventType("HSM Munzee Christmas", 1206);
export const leedsChristmasParty2017 = new Year2017EventType("Leeds Christmas Party 2017", 1207);
export const pickledForXmasWithMrsHerbert = new Year2017EventType(
  "Pickled for Xmas with Mrs Herbert",
  1208
);
export const adelaideChristmasEvent2017 = new Year2017EventType(
  "Adelaide Christmas Event 2017",
  1209
);
export const crazyCornyChristmas = new Year2017EventType("Crazy Corn-y Christmas", 1211);
export const merryMunzmasIv = new Year2017EventType("Merry Munzmas IV", 1212);
export const merryChristmas2017InIncheon = new Year2017EventType(
  "Merry Christmas 2017 in Incheon",
  1213
);
export const christmasInTheCarolinas2017 = new Year2017EventType(
  "Christmas in the Carolinas 2017",
  1214
);
export const tooChickenToPlungeMunzeeEventzeeEvent = new Year2017EventType(
  "Too Chicken to Plunge Munzee / Eventzee Event",
  1215
);
export const homeForTheHolidays2017 = new Year2017EventType("Home for the Holidays 2017", 1216);
export const christmas2017Florida = new Year2017EventType("Christmas 2017 - Florida", 1217);
