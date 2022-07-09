import { Year2017SeasonalGroup, Year2017SeasonalType } from "./_index";

export const diabetesAwarenessCharity2017Group = new Year2017SeasonalGroup({
  name: "Diabetes Awareness 2017",
  starts: "2017-00-00T00:00:00-05:00",
  ends: "2017-00-00T00:00:00-05:00",
});

export const diabetesAwarenessCharity = new Year2017SeasonalType("Diabetes Awareness Charity", 1150)
  .addGroup(diabetesAwarenessCharity2017Group)
  .virtual();
