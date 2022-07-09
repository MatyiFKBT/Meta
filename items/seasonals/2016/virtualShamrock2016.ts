import { Year2016SeasonalGroup, Year2016SeasonalType } from "./_index";

export const virtualShamrock2016Group = new Year2016SeasonalGroup({
  name: "Virtual Shamrock 2016",
  starts: "2016-03-01T00:00:00-05:00",
  ends: "2016-04-10T23:59:59-05:00",
});

export const virtualShamrock2016 = new Year2016SeasonalType("Virtual Shamrock 2016", 440)
  .addGroup(virtualShamrock2016Group)
  .virtual();
