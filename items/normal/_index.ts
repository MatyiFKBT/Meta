import { homeGroup } from "../base";
import { Group } from "../../src/items/group";

export const normalGroup = new Group({
  name: "Normal",
}).addParent(homeGroup);
