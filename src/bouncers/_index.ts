import { homeGroup } from "../base";
import { Group } from "../common/group";

export const bouncersGroup = new Group({
  name: "Bouncers",
}).addParent(homeGroup);
