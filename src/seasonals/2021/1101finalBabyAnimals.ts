import { Year2021SeasonalPOBType, Year2021SeasonalGroup } from "./_index";

export const finalBabyAnimalsGroup = new Year2021SeasonalGroup({
  name: "Final Baby Animals",
  starts: "2021-11-01T00:00:00-05:00",
  ends: "2021-12-31T23:59:00-05:00",
});

export const giraffeCalf = new Year2021SeasonalPOBType("Giraffe Calf").addGroup(
  finalBabyAnimalsGroup
);
export const foal = new Year2021SeasonalPOBType("Foal").addGroup(finalBabyAnimalsGroup);
export const otterPup = new Year2021SeasonalPOBType("Otter Pup", 3378).addGroup(
  finalBabyAnimalsGroup
);
export const candyCornPiglet = new Year2021SeasonalPOBType("Candy Corn Piglet").addGroup(
  finalBabyAnimalsGroup
);
export const babyRaccoon = new Year2021SeasonalPOBType("Baby Raccoon").addGroup(
  finalBabyAnimalsGroup
);
