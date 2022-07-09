import { homeGroup } from "../base";
import { Group } from "../../src/common/group";

export const normalGroup = new Group({
  name: "Normal",
}).addParent(homeGroup);
