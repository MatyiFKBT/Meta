import { Year2018SeasonalBouncerType, Year2018SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const n7thBirthdayClownsGroup = new Year2018SeasonalGroup({
  name: "7th Birthday Clowns",
  starts: "2018-00-00T00:00:00-05:00",
  ends: "2018-00-00T00:00:00-05:00",
});

export const clownCar = new Year2018SeasonalBouncerType("Clown Car", 1387)
  .setIcon("clowncar2018")
  .addGroup(n7thBirthdayClownsGroup)
  .addBouncerLandsOn(greenie);
export const partyClown = new Year2018SeasonalBouncerType("Party Clown", 1390)
  .setIcon("partyclown2018")
  .addGroup(n7thBirthdayClownsGroup)
  .addBouncerLandsOn(greenie);
export const rodeoClown = new Year2018SeasonalBouncerType("Rodeo Clown", 1392)
  .setIcon("rodeoclown2018")
  .addGroup(n7thBirthdayClownsGroup)
  .addBouncerLandsOn(greenie);
export const harlequinClown = new Year2018SeasonalBouncerType("Harlequin Clown", 1391)
  .setIcon("harlequinclown2018")
  .addGroup(n7thBirthdayClownsGroup)
  .addBouncerLandsOn(greenie);
export const trampClown = new Year2018SeasonalBouncerType("Tramp Clown", 1389)
  .setIcon("trampclown2018")
  .addGroup(n7thBirthdayClownsGroup)
  .addBouncerLandsOn(greenie);
export const mime = new Year2018SeasonalBouncerType("Mime", 1388)
  .setIcon("mime2018")
  .addGroup(n7thBirthdayClownsGroup)
  .addBouncerLandsOn(greenie);
export const sadClown = new Year2018SeasonalBouncerType("Sad Clown", 1394)
  .setIcon("sadclown2018")
  .addGroup(n7thBirthdayClownsGroup)
  .addBouncerLandsOn(greenie);
export const scaryClown = new Year2018SeasonalBouncerType("Scary Clown", 1393)
  .setIcon("scaryclown2018")
  .addGroup(n7thBirthdayClownsGroup)
  .addBouncerLandsOn(greenie);
