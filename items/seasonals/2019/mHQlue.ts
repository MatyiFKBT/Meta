import { greenie } from "../../normal/misc";
import { Year2019SeasonalBouncerType, Year2019SeasonalGroup } from "./_index";

export const mHQlueGroup = new Year2019SeasonalGroup({
  name: "MH-Qlue",
  starts: "2019-00-00T00:00:00-05:00",
  ends: "2019-00-00T00:00:00-05:00",
});

export const mHQlue = new Year2019SeasonalBouncerType("MH-Qlue", 2209)
  .addGroup(mHQlueGroup)
  .addBouncerLandsOn(greenie);
export const universityProfessorCorn = new Year2019SeasonalBouncerType(
  "University Professor Corn",
  2213
)
  .addGroup(mHQlueGroup)
  .addBouncerLandsOn(greenie);
export const misterZee = new Year2019SeasonalBouncerType("Mister Zee", 2214)
  .addGroup(mHQlueGroup)
  .addBouncerLandsOn(greenie);
export const mademoiselleEventa = new Year2019SeasonalBouncerType("Mademoiselle Eventa", 2215)
  .addGroup(mHQlueGroup)
  .addBouncerLandsOn(greenie);
export const generalGreenE = new Year2019SeasonalBouncerType("General Green E", 2216)
  .addGroup(mHQlueGroup)
  .addBouncerLandsOn(greenie);
export const banHammer = new Year2019SeasonalBouncerType("Ban Hammer", 2217)
  .setIcon("banhammercard")
  .addGroup(mHQlueGroup)
  .addBouncerLandsOn(greenie);
export const externalBattery = new Year2019SeasonalBouncerType("External Battery", 2218)
  .setIcon("externalbatterycard")
  .addGroup(mHQlueGroup)
  .addBouncerLandsOn(greenie);
export const unicornHorn = new Year2019SeasonalBouncerType("Unicorn Horn", 2219)
  .setIcon("unicornhorncard")
  .addGroup(mHQlueGroup)
  .addBouncerLandsOn(greenie);
export const globe = new Year2019SeasonalBouncerType("Globe", 2220)
  .setIcon("globecard")
  .addGroup(mHQlueGroup)
  .addBouncerLandsOn(greenie);
export const theProductionRoom = new Year2019SeasonalBouncerType("The Production Room", 2221)
  .addGroup(mHQlueGroup)
  .addBouncerLandsOn(greenie);
export const theVideocastStudio = new Year2019SeasonalBouncerType("The Videocast Studio", 2222)
  .addGroup(mHQlueGroup)
  .addBouncerLandsOn(greenie);
export const theMunzeeMuseum = new Year2019SeasonalBouncerType("The Munzee Museum", 2223)
  .addGroup(mHQlueGroup)
  .addBouncerLandsOn(greenie);
export const theCZeeOsOffice = new Year2019SeasonalBouncerType("The CZeeO's Office", 2224)
  .addGroup(mHQlueGroup)
  .addBouncerLandsOn(greenie);
