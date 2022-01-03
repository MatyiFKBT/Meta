import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";
import { TypeTags } from "../../common/type";
import { greenie } from "../../normal/misc";
import {
  airMystery,
  electricMystery,
  fireMystery,
  mystery,
  iceMystery,
  waterMystery,
  earthMystery,
} from "../../normal/mystery";

export const bashfromthePastGroup = new Year2020SeasonalGroup({
  name: "Bash from the Past",
  starts: "2020-09-21T14:30:00-05:00",
  ends: "2020-10-11T23:59:00-05:00",
});

export const beerBoot = new Year2020SeasonalBouncerType("Beer Boot", 2594)
  .setIcon("oktoberfestbash-beerboot")
  .addGroup(bashfromthePastGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), airMystery, electricMystery);
export const paintPallette = new Year2020SeasonalBouncerType("Paint Pallette", 2595)
  .setIcon("artwalkbash-paintpalette")
  .addGroup(bashfromthePastGroup)
  .addBouncerLandsOn(greenie, fireMystery, mystery, iceMystery, waterMystery, earthMystery);
export const yellowRose = new Year2020SeasonalBouncerType("Yellow Rose", 2596)
  .setIcon("lonestarbash-yellowrose")
  .addGroup(bashfromthePastGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), airMystery, electricMystery);
export const playingCards = new Year2020SeasonalBouncerType("Playing Cards", 2597)
  .setIcon("all-inbash-playingcards")
  .addGroup(bashfromthePastGroup)
  .addBouncerLandsOn(greenie, fireMystery, mystery, iceMystery, waterMystery, earthMystery);
export const ghost = new Year2020SeasonalBouncerType("Ghost", 2598)
  .setIcon("mh-boobash-ghost")
  .addGroup(bashfromthePastGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), airMystery, electricMystery);
export const unicornStickHorse = new Year2020SeasonalBouncerType("Unicorn Stick Horse", 2599)
  .setIcon("medzeevaltimesbash-unicornstickhorse")
  .addGroup(bashfromthePastGroup)
  .addBouncerLandsOn(greenie, fireMystery, mystery, iceMystery, waterMystery, earthMystery);
export const zeeOpsTransmission = new Year2020SeasonalBouncerType("ZeeOps Transmission", 2600)
  .setIcon("bashfromthepast-zeeopstransmission")
  .addGroup(bashfromthePastGroup)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), airMystery, electricMystery);
