import { homeGroup } from "../base";
import { Group } from "../../src/items/group";

export const evoGroup = new Group({
  name: "Evolutions",
}).addParent(homeGroup);
