import { homeGroup } from "../base";
import { Group } from "../common/group";

export const evoGroup = new Group({
  name: "Evolutions",
}).addParent(homeGroup);
