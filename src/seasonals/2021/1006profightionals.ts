import { Year2021SeasonalPOBType, Year2021SeasonalGroup } from "./_index";

export const profightionalsGroup = new Year2021SeasonalGroup({
  name: "Pro-fight-ionals",
  starts: "2021-10-06T00:00:00-05:00",
  ends: "2021-10-31T23:59:00-05:00",
});

export const frankEinstein = new Year2021SeasonalPOBType("Frank Einstein", 3345).addGroup(
  profightionalsGroup
);
export const fabiOooOooo = new Year2021SeasonalPOBType("FabiOooOooo", 3346)
  .addIcon("fabioooooo")
  .addGroup(profightionalsGroup);
export const drAcula = new Year2021SeasonalPOBType("Dr. Acula").addGroup(profightionalsGroup);
export const backstitchSisters = new Year2021SeasonalPOBType("Backstitch Sisters", 3348).addGroup(
  profightionalsGroup
);
