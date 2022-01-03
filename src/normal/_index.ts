import { homeGroup } from "../base";
import { Group } from "../common/group";

export const normalGroup = new Group({
  name: "Normal",
}).addParent(homeGroup);
