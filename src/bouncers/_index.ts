import { homeGroup } from "../base";
import { Group } from "../common/group";

export const bouncersGroup = new Group({
  name: "Bouncers",
  icons: ["pegasus", "nomadmystery", "monk3y"],
}).addParent(homeGroup);

export const gardenItemsGroup = new Group({
  name: "Garden Flamingos and Gnomes",
  icons: ["gardenflamingo", "icehockeygardengnome", "fortunefeathers"],
}).addParent(bouncersGroup);

export const mechzGroup = new Group({
  name: "Mechz and tPOBs",
  icons: ["fathertim3", "quack", "cyborgsanta"],
}).addParent(bouncersGroup);

export const mythsGroup = new Group({
  name: "Mythicals",
  icons: ["theunicorn", "faurn", "zeus"],
}).addParent(bouncersGroup);

export const pouchCreaturesGroup = new Group({
  name: "Pouch Creatures",
  icons: ["tuli", "tsitriin", "murinmegu"],
}).addParent(bouncersGroup);

export const otherBouncersGroup = new Group({
  name: "Other Bouncers",
  icons: ["nomad", "rainbowunicorn", "footyflatmatt"],
}).addParent(bouncersGroup);
