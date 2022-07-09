import { Year2017SeasonalBouncerType, Year2017SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const zeeOpsSpecialsGroup = new Year2017SeasonalGroup({
  name: "ZeeOps Specials",
  starts: "2017-00-00T00:00:00-05:00",
  ends: "2017-00-00T00:00:00-05:00",
});

export const zeeOpsSpecial = new Year2017SeasonalBouncerType("ZeeOps Special", 836)
  .addGroup(zeeOpsSpecialsGroup)
  .addBouncerLandsOn(greenie);
