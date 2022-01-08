import { homeGroup } from "../base";
import { Group } from "../common/group";

export const bouncersGroup = new Group({
  name: "Bouncers",
  icons: ["pegasus", "nomadmystery", "monk3y"],
}).addParent(homeGroup);
