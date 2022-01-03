import { Year2018SeasonalBouncerType, Year2018SeasonalGroup } from "./_index";
import { greenie } from "../../normal/misc";

export const internationalThankYouDayGroup = new Year2018SeasonalGroup({
  name: "International Thank You Day",
  starts: "2018-00-00T00:00:00-05:00",
  ends: "2018-00-00T00:00:00-05:00",
});

export const thankyoufromRob = new Year2018SeasonalBouncerType("Thank you from Rob", 1219)
  .setIcon("thankyoufromrob2018")
  .addGroup(internationalThankYouDayGroup)
  .addBouncerLandsOn(greenie);
export const thankyoufromMatt = new Year2018SeasonalBouncerType("Thank you from Matt", 1220)
  .setIcon("thankyoufrommatt2018")
  .addGroup(internationalThankYouDayGroup)
  .addBouncerLandsOn(greenie);
export const thankyoufromLouise = new Year2018SeasonalBouncerType("Thank you from Louise", 1218)
  .setIcon("thankyoufromlouise2018")
  .addGroup(internationalThankYouDayGroup)
  .addBouncerLandsOn(greenie);
