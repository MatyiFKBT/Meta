import { Year2018SeasonalBouncerType, Year2018SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const christmas2018Group = new Year2018SeasonalGroup({
  name: "Christmas 2018",
  starts: "2018-00-00T00:00:00-05:00",
  ends: "2018-00-00T00:00:00-05:00",
});

export class Christmas2018ReindeerType extends Year2018SeasonalBouncerType {
  constructor(name: string, id: number) {
    super(name, id);
    this.icons[0] = this.icons[0] + "2018";
  }
}

export const flatSanta = new Christmas2018ReindeerType("Flat Santa", 1656)
  .addGroup(christmas2018Group)
  .addBouncerLandsOn(greenie);
export const roverReindeer = new Christmas2018ReindeerType("Rover Reindeer", 1666)
  .addGroup(christmas2018Group)
  .addBouncerLandsOn(greenie);
export const rudolphReindeer = new Christmas2018ReindeerType("Rudolph Reindeer", 1665)
  .addGroup(christmas2018Group)
  .addBouncerLandsOn(greenie);
export const dasherReindeer = new Christmas2018ReindeerType("Dasher Reindeer", 1657)
  .addGroup(christmas2018Group)
  .addBouncerLandsOn(greenie);
export const dancerReindeer = new Christmas2018ReindeerType("Dancer Reindeer", 1658)
  .addGroup(christmas2018Group)
  .addBouncerLandsOn(greenie);
export const prancerReindeer = new Christmas2018ReindeerType("Prancer Reindeer", 1659)
  .addGroup(christmas2018Group)
  .addBouncerLandsOn(greenie);
export const vixenReindeer = new Christmas2018ReindeerType("Vixen Reindeer", 1660)
  .addGroup(christmas2018Group)
  .addBouncerLandsOn(greenie);
export const cometReindeer = new Christmas2018ReindeerType("Comet Reindeer", 1661)
  .addGroup(christmas2018Group)
  .addBouncerLandsOn(greenie);
export const cupidReindeer = new Christmas2018ReindeerType("Cupid Reindeer", 1662)
  .addGroup(christmas2018Group)
  .addBouncerLandsOn(greenie);
export const donnerReindeer = new Christmas2018ReindeerType("Donner Reindeer", 1663)
  .addGroup(christmas2018Group)
  .addBouncerLandsOn(greenie);
export const blitzenReindeer = new Christmas2018ReindeerType("Blitzen Reindeer", 1664)
  .addGroup(christmas2018Group)
  .addBouncerLandsOn(greenie);
