import { eventGroup, EventType } from "./_index";
import { Group } from "../common/group";

export const year2020EventsGroup = new Group({
  name: "2020 Events",
}).addParent(eventGroup);

export class Year2020EventType extends EventType {
  override template(): this {
    super.template();
    return this.addGroup(year2020EventsGroup);
  }
}

export const liseberg2020 = new Year2020EventType("Liseberg 2020", 2331);
export const happyNewYearFromTheSpaceCoast = new Year2020EventType(
  "Happy New Year from the Space Coast",
  2332
);
export const suncoast2020Challenge1 = new Year2020EventType("Suncoast 2020 - Challenge 1", 2338);
export const suncoast2020 = new Year2020EventType("Suncoast 2020", 2339);
export const ozdayzee2020SaturdayDinnerhackham = new Year2020EventType(
  "OzDayZee 2020 - Saturday dinner (Hackham)",
  2340
);
export const ozdayzee2020SaturdayEventmclarenVale = new Year2020EventType(
  "OzDayZee 2020 - Saturday event (McLaren Vale)",
  2347
);
export const ozdayzee20SundayPm = new Year2020EventType("OzDayZee '20 - Sunday PM", 2348);
export const ozdayzee2020MondayEventmurrayBridge = new Year2020EventType(
  "OzDayZee 2020 - Monday Event (Murray Bridge)",
  2349
);
export const ozdayzee20AustraliaDay = new Year2020EventType("OzDayZee '20 - Australia Day", 2350);
export const donutAskWhyflorida = new Year2020EventType("Donut ask why (Florida)", 2354);
export const spaceCoastFinale2020 = new Year2020EventType("Space Coast Finale 2020", 2355);
export const bthvn2020 = new Year2020EventType("BTHVN2020", 2378);
export const leapingInArizona = new Year2020EventType("Leaping in Arizona", 2379);
export const leapIntoWestCovinaForLunch = new Year2020EventType(
  "Leap into West Covina for Lunch",
  2380
);
export const mm9DinnerEvent = new Year2020EventType("MM9 Dinner Event", 2381);
export const mm9LunchStopAtInNOut = new Year2020EventType("MM9 - Lunch Stop at In N Out", 2382);
export const mm9Fthq = new Year2020EventType("MM9: FTHQ", 2383);
export const mm9Stage1 = new Year2020EventType("MM9: Stage 1", 2384);
export const mm9Stage2 = new Year2020EventType("MM9: Stage 2", 2385);
export const munzeeAtTheMoviesdrDolittle1967 = new Year2020EventType(
  "Munzee at The Movies--Dr Dolittle 1967",
  2386
);
export const munzeeAtTheMoviesprincessBride = new Year2020EventType(
  "Munzee at The Movies--Princess Bride",
  2387
);
export const aliceInWonderland = new Year2020EventType("Alice in Wonderland", 2388);
export const munzeeAtTheMoviesBreakfastAtTiffanys = new Year2020EventType(
  "Munzee At The Movies - Breakfast At Tiffany's",
  2389
);
export const afterTheChallengeMeetGreet = new Year2020EventType(
  "After the Challenge Meet & Greet",
  2402
);
export const marchMadnessInGreenvilleSc = new Year2020EventType(
  "March Madness in Greenville, SC",
  2406
);
export const hopeItRains = new Year2020EventType("Hope it Rains", 2413);
export const findlayFreakShow = new Year2020EventType("Findlay Freak Show", 2414);
export const frhlingAmRebstock = new Year2020EventType("Frühling am Rebstock", 2449);
export const springtimeInTheDesert = new Year2020EventType("Springtime in the desert", 2471);
export const flFallIntoSpringStroll2020 = new Year2020EventType(
  "FL - Fall Into Spring Stroll 2020",
  2472
);
export const brooksvilleBlueberryMunzee = new Year2020EventType(
  "Brooksville Blueberry Munzee!",
  2473
);
export const vaBeachIafEmerald20k = new Year2020EventType("VA Beach IAF Emerald 20K", 2474);
export const aNoblesvilleSpring = new Year2020EventType("A Noblesville Spring", 2475);
export const easterFrolicInComo = new Year2020EventType("Easter Frolic in Como", 2481);
export const raisionPsiinen = new Year2020EventType("Raision pääsiäinen", 2493);
export const kcsSpringFling = new Year2020EventType("KC's Spring Fling", 2494);
export const welcomeHomeEagledadandxenia = new Year2020EventType(
  "Welcome Home EagledadandXenia",
  2501
);
export const dyrenesVildeForrsfest = new Year2020EventType("Dyrenes Vilde Forårsfest", 2504);
export const frodigForrsfrokost = new Year2020EventType("Frodig Forårsfrokost", 2505);
export const tavaszee2020 = new Year2020EventType("TavasZee 2020", 2506);
export const curiositea4FallIntoSpring = new Year2020EventType(
  "CuriosiTea 4 - Fall Into Spring",
  2534
);
export const stahnsdorf2020FormerlyViennaSpring = new Year2020EventType(
  "stahnsdorf 2020 - formerly vienna spring",
  2535
);
export const alabamaRrKickoffAtTheCatfishHouse = new Year2020EventType(
  "Alabama RR Kickoff at the Catfish House",
  2536
);
export const alabamaRrFridayNightLights = new Year2020EventType(
  "Alabama RR Friday Night Lights",
  2537
);
export const alabamaRr2020MainEvent = new Year2020EventType("Alabama RR 2020 Main event", 2538);
export const alabamaRrEveningOut = new Year2020EventType("Alabama RR Evening Out", 2539);
export const alabamaRrSaturdayMorning = new Year2020EventType("Alabama RR Saturday Morning", 2540);
export const alRrGoodbyeFarewell2020 = new Year2020EventType("AL RR Goodbye, Farewell 2020", 2541);
export const happyBirthdayXs9 = new Year2020EventType("Happy Birthday x's 9", 2543);
export const munzeeBirthdayCheers = new Year2020EventType("Munzee Birthday Cheers", 2544);
export const socialDistancing64thBirthday = new Year2020EventType(
  "Social Distancing 64th Birthday",
  2553
);
export const greetingsSocialDistancers = new Year2020EventType("Greetings Social Distancers", 2554);
export const bridgeOverTheRiver = new Year2020EventType("Bridge Over The River", 2555);
export const hopeItRainsAgain = new Year2020EventType("Hope It Rains Again", 2556);
export const yorkshires9thMunzeeBirthdayParty = new Year2020EventType(
  "Yorkshire's 9th Munzee Birthday Party",
  2557
);
export const teddyBearsPicnic = new Year2020EventType("Teddy Bear's Picnic", 2562);
export const glampingDoneRightInPlano = new Year2020EventType("Glamping Done Right in Plano", 2563);
export const covidnineteenMunzeeEdition = new Year2020EventType(
  "COVID-NINE-teen: Munzee Edition",
  2564
);
export const backToSchoolOnTheSpaceCoast = new Year2020EventType(
  "Back To School on the Space Coast",
  2569
);
export const berlin9Sommercamp = new Year2020EventType("Berlin - 9 - Sommercamp", 2573);
export const berlinFrhling2020 = new Year2020EventType("Berlin - Frühling 2020", 2574);
export const agenthopAndHopsgeneralInvadeSanibel = new Year2020EventType(
  "AgentHop and HopsGeneral invade Sanibel",
  2575
);
export const theIncredibleLadyCovid = new Year2020EventType("The Incredible Lady Covid", 2582);
export const n2020DogDaysOfSummer = new Year2020EventType("2020 Dog Days of Summer", 2585);
export const kcsCampChippewa = new Year2020EventType("KC's Camp Chippewa", 2586);
export const munzeeMania2020MainEvent = new Year2020EventType(
  "Munzee Mania 2020 -- Main Event",
  2591
);
export const munzeeMania2020DoughnutsCoffee = new Year2020EventType(
  "Munzee Mania 2020 -- Doughnuts & Coffee",
  2592
);
export const munzeeMania2020AutumnStroll = new Year2020EventType(
  "Munzee Mania 2020 -- Autumn Stroll",
  2593
);
export const westonHelicoptersWeek = new Year2020EventType("Weston Helicopters WEEK", 2605);
export const greerMunzeeHuntIvPizzaAndGoodbyes = new Year2020EventType(
  "Greer Munzee Hunt IV - Pizza and Goodbyes!",
  2617
);
export const greerMunzeeHuntIv = new Year2020EventType("Greer Munzee Hunt IV", 2618);
export const autumnWaveIii = new Year2020EventType("Autumn Wave III", 2619);
export const buildingFriendshipsLakeWalesFl2020 = new Year2020EventType(
  "Building Friendships Lake Wales, FL 2020",
  2620
);
export const gratitudeToBarbDaleRoadWarriorsLakeWales = new Year2020EventType(
  "Gratitude to Barb & Dale Road Warriors Lake Wales",
  2621
);
export const youreNotScaredAreYou = new Year2020EventType("You're not Scared are you??", 2642);
export const thisIsHallozeenTown = new Year2020EventType("This Is Hallozeen Town!!", 2643);
export const gSpooktacular = new Year2020EventType("G Spooktacular", 2644);
export const flAfterHalloweenMasquerade = new Year2020EventType(
  "FL- After Halloween Masquerade",
  2645
);
export const thankYouToAllVeterans = new Year2020EventType("THANK YOU TO ALL VETERANS", 2692);
export const veteransAppreciation = new Year2020EventType("veterans appreciation", 2693);
export const mtbiker64MemorialGathering = new Year2020EventType(
  "MtBiker64 Memorial Gathering",
  2694
);
export const txItsFineImFineEverythingsFine = new Year2020EventType(
  "TX: It's fine. I'm fine. Everything's fine.",
  2717
);
export const letsTacoBoutChristmas = new Year2020EventType("Let's Taco Bout Christmas", 2718);
export const munzeeMikuls = new Year2020EventType("Munzee Mikulás", 2719);
export const aWaconiaWinterWonderlandMunzeeChristmas = new Year2020EventType(
  "A Waconia Winter Wonderland -- Munzee Christmas",
  2720
);
export const winterFreakShow = new Year2020EventType("Winter Freak Show", 2721);
export const krampusAnEvilChristmas = new Year2020EventType("Krampus an Evil Christmas", 2722);
export const allIWantForChristmasIsFor2020ToEnd = new Year2020EventType(
  "All I want for Christmas is for 2020 to End",
  2723
);
export const holidaysInKansasCity = new Year2020EventType("Holidays in Kansas City", 2724);
export const helsinkiXmasPartyIv = new Year2020EventType("Helsinki Xmas Party IV", 2725);
export const faLaLaLaLlama = new Year2020EventType("Fa la la la Llama", 2726);
export const dkSocialJulHverForSig = new Year2020EventType("DK: Social jul - hver for sig", 2727);
export const stNicksDayAtHorseshoeLake = new Year2020EventType(
  "St. Nick's Day at Horseshoe Lake",
  2728
);
export const berlinerNikolauseventByog2020 = new Year2020EventType(
  "Berliner Nikolausevent - BYOG 2020",
  2729
);
export const raisionJoulu = new Year2020EventType("Raision joulu", 2731);
export const letsGetChristmaszee4 = new Year2020EventType("Let's Get ChristmasZee 4", 2732);
export const marylandMunzeeChristmas2020Style = new Year2020EventType(
  "Maryland Munzee Christmas 2020 Style",
  2733
);
export const decemberEventSpaarnwoude = new Year2020EventType("December Event Spaarnwoude", 2734);
export const hopeItSnows = new Year2020EventType("Hope It Snows", 2745);
export const txIWantAHippopotamusForChristmas2020 = new Year2020EventType(
  "TX - I Want a Hippopotamus for Christmas 2020",
  2746
);
export const christmasInStLouis = new Year2020EventType("Christmas in St. Louis", 2747);
export const spartanburgsTwistedMunzeeGiftExchange = new Year2020EventType(
  "Spartanburg's Twisted Munzee Gift Exchange",
  2748
);
export const jingleBellsNTacoShells = new Year2020EventType("Jingle Bells n Taco Shells", 2749);
export const christmasInAppletonWi2020 = new Year2020EventType(
  "Christmas in Appleton, WI 2020",
  2750
);
export const coronaXmasBonn = new Year2020EventType("Corona Xmas Bonn", 2788);
export const lostChristmas = new Year2020EventType("Lost Christmas", 2789);
export const noDramaLlamaButMargaritasForTheHolidays = new Year2020EventType(
  "No drama llama but margaritas for the holidays",
  2790
);
export const aCharlieBrownChristmasCovidStyle = new Year2020EventType(
  "A Charlie Brown Christmas Covid Style",
  2791
);
export const hetWestfriesGeuzenKerstevent2020 = new Year2020EventType(
  "Het West-fries Geuzen Kerstevent 2020",
  2792
);
export const vaeccMunzeeHolidayThing = new Year2020EventType("VA-ECC Munzee Holiday thing", 2793);
export const ncMunzeeFestival2020PerfectVision = new Year2020EventType(
  "NC Munzee Festival 2020: Perfect Vision",
  2794
);
export const ncMunzeeFestival2020AClearerVision = new Year2020EventType(
  "NC Munzee Festival 2020: A Clearer Vision",
  2795
);
export const ncMunzeeFestival2020TimeForACheckUp = new Year2020EventType(
  "NC Munzee Festival 2020: Time for a check up",
  2796
);
export const kiwiXmasGreetings = new Year2020EventType("Kiwi Xmas Greetings", 2797);
export const christmasInCloverdaleIi = new Year2020EventType("Christmas in Cloverdale II", 2798);
export const nachweihnachtsfeierInSpbg = new Year2020EventType("Nachweihnachtsfeier in SPBG", 2799);
export const nachweihnachtsfeierInSpbg2 = new Year2020EventType(
  "Nachweihnachtsfeier in SPBG.",
  2800
)
  .setIcon("nachweihnachtsfeierinspbg.")
  .setHumanId("nachweihnachtsfeierinspbg2");
