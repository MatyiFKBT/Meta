import { homeGroup } from "../base";
import { Group } from "../../src/common/group";

export const evoGroup = new Group({
  name: "Evolutions",
}).addParent(homeGroup);
