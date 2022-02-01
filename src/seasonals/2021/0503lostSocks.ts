import { Year2021SeasonalBouncerType, Year2021SeasonalGroup } from "./_index";
import { TypeState, TypeTags } from "../../common/type";
import { farmer, family, garden, field, farmerandWife, pottedPlant } from "../../evolutions/farm";
import { greenie } from "../../normal/misc";
import { mystery } from "../../normal/mystery";
import { urbanFit } from "../../normal/gaming";
import { poiSports } from "../../normal/places";

export const lostSocksGroup = new Year2021SeasonalGroup({
  name: "Lost Socks",
  starts: "2021-05-03T12:00:00-05:00",
  ends: "2021-05-31T23:59:00-05:00",
});

export const leftAnkleSock = new Year2021SeasonalBouncerType("Left Ankle Sock")
  .addGroup(lostSocksGroup)
  .addBouncerLandsOn(
    greenie,
    mystery,
    urbanFit,
    i => i.hasTags(TypeTags.TypeGaming) && i.state === TypeState.Physical,
    i => i.hasTags(TypeTags.TypeMysteryElemental) && i.state === TypeState.Physical
  );
export const leftArgyleSock = new Year2021SeasonalBouncerType("Left Argyle Sock")
  .addGroup(lostSocksGroup)
  .addBouncerLandsOn(
    greenie,
    mystery,
    urbanFit,
    i => i.hasTags(TypeTags.TypeGaming) && i.state === TypeState.Physical,
    i => i.hasTags(TypeTags.TypeMysteryElemental) && i.state === TypeState.Physical
  );
export const leftHoleySock = new Year2021SeasonalBouncerType("Left Hole-y Sock")
  .addGroup(lostSocksGroup)
  .addBouncerLandsOn(
    greenie,
    mystery,
    urbanFit,
    i => i.hasTags(TypeTags.TypeGaming) && i.state === TypeState.Physical,
    i => i.hasTags(TypeTags.TypeMysteryElemental) && i.state === TypeState.Physical
  );
export const leftHoneycombSock = new Year2021SeasonalBouncerType("Left Honeycomb Sock")
  .addGroup(lostSocksGroup)
  .addBouncerLandsOn(
    greenie,
    mystery,
    urbanFit,
    i => i.hasTags(TypeTags.TypeGaming) && i.state === TypeState.Physical,
    i => i.hasTags(TypeTags.TypeMysteryElemental) && i.state === TypeState.Physical
  );
export const leftStripedSock = new Year2021SeasonalBouncerType("Left Striped Sock", 3023)
  .addGroup(lostSocksGroup)
  .addBouncerLandsOn(
    greenie,
    mystery,
    urbanFit,
    i => i.hasTags(TypeTags.TypeGaming) && i.state === TypeState.Physical,
    i => i.hasTags(TypeTags.TypeMysteryElemental) && i.state === TypeState.Physical
  );
export const leftToeSock = new Year2021SeasonalBouncerType("Left Toe Sock")
  .addGroup(lostSocksGroup)
  .addBouncerLandsOn(
    greenie,
    mystery,
    urbanFit,
    i => i.hasTags(TypeTags.TypeGaming) && i.state === TypeState.Physical,
    i => i.hasTags(TypeTags.TypeMysteryElemental) && i.state === TypeState.Physical
  );
export const leftTubeSock = new Year2021SeasonalBouncerType("Left Tube Sock")
  .addGroup(lostSocksGroup)
  .addBouncerLandsOn(
    greenie,
    mystery,
    urbanFit,
    i => i.hasTags(TypeTags.TypeGaming) && i.state === TypeState.Physical,
    i => i.hasTags(TypeTags.TypeMysteryElemental) && i.state === TypeState.Physical
  );
export const leftUnicornSock = new Year2021SeasonalBouncerType("Left Unicorn Sock", 3021)
  .addGroup(lostSocksGroup)
  .addBouncerLandsOn(
    greenie,
    mystery,
    urbanFit,
    i => i.hasTags(TypeTags.TypeGaming) && i.state === TypeState.Physical,
    i => i.hasTags(TypeTags.TypeMysteryElemental) && i.state === TypeState.Physical
  );
export const rightAnkleSock = new Year2021SeasonalBouncerType("Right Ankle Sock")
  .addGroup(lostSocksGroup)
  .addBouncerLandsOn(
    i => i.hasTags(TypeTags.TypeVirtual),
    poiSports,
    i => i.hasTags(TypeTags.TypeMysteryElemental) && i.state === TypeState.Physical,
    farmer,
    farmerandWife,
    family,
    pottedPlant,
    garden,
    field
  );
export const rightArgyleSock = new Year2021SeasonalBouncerType("Right Argyle Sock")
  .addGroup(lostSocksGroup)
  .addBouncerLandsOn(
    i => i.hasTags(TypeTags.TypeVirtual),
    poiSports,
    i => i.hasTags(TypeTags.TypeMysteryElemental) && i.state === TypeState.Physical,
    farmer,
    farmerandWife,
    family,
    pottedPlant,
    garden,
    field
  );
export const rightHoleySock = new Year2021SeasonalBouncerType("Right Hole-y Sock", 3028)
  .addGroup(lostSocksGroup)
  .addBouncerLandsOn(
    i => i.hasTags(TypeTags.TypeVirtual),
    poiSports,
    i => i.hasTags(TypeTags.TypeMysteryElemental) && i.state === TypeState.Physical,
    farmer,
    farmerandWife,
    family,
    pottedPlant,
    garden,
    field
  );
export const rightHoneycombSock = new Year2021SeasonalBouncerType("Right Honeycomb Sock")
  .addGroup(lostSocksGroup)
  .addBouncerLandsOn(
    i => i.hasTags(TypeTags.TypeVirtual),
    poiSports,
    i => i.hasTags(TypeTags.TypeMysteryElemental) && i.state === TypeState.Physical,
    farmer,
    farmerandWife,
    family,
    pottedPlant,
    garden,
    field
  );
export const rightStripedSock = new Year2021SeasonalBouncerType("Right Striped Sock", 3024)
  .addGroup(lostSocksGroup)
  .addBouncerLandsOn(
    i => i.hasTags(TypeTags.TypeVirtual),
    poiSports,
    i => i.hasTags(TypeTags.TypeMysteryElemental) && i.state === TypeState.Physical,
    farmer,
    farmerandWife,
    family,
    pottedPlant,
    garden,
    field
  );
export const rightToeSock = new Year2021SeasonalBouncerType("Right Toe Sock")
  .addGroup(lostSocksGroup)
  .addBouncerLandsOn(
    i => i.hasTags(TypeTags.TypeVirtual),
    poiSports,
    i => i.hasTags(TypeTags.TypeMysteryElemental) && i.state === TypeState.Physical,
    farmer,
    farmerandWife,
    family,
    pottedPlant,
    garden,
    field
  );
export const rightTubeSock = new Year2021SeasonalBouncerType("Right Tube Sock")
  .addGroup(lostSocksGroup)
  .addBouncerLandsOn(
    i => i.hasTags(TypeTags.TypeVirtual),
    poiSports,
    i => i.hasTags(TypeTags.TypeMysteryElemental) && i.state === TypeState.Physical,
    farmer,
    farmerandWife,
    family,
    pottedPlant,
    garden,
    field
  );
export const rightUnicornSock = new Year2021SeasonalBouncerType("Right Unicorn Sock")
  .addGroup(lostSocksGroup)
  .addBouncerLandsOn(
    i => i.hasTags(TypeTags.TypeVirtual),
    poiSports,
    i => i.hasTags(TypeTags.TypeMysteryElemental) && i.state === TypeState.Physical,
    farmer,
    farmerandWife,
    family,
    pottedPlant,
    garden,
    field
  );
