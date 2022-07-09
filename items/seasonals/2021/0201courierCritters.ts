import { Year2021SeasonalPOBType, Year2021SeasonalGroup } from "./_index";

export const courierCrittersGroup = new Year2021SeasonalGroup({
  name: "Courier Critters",
  starts: "2021-02-01T00:00:00-05:00",
  ends: "2021-04-31T23:59:00-05:00",
});

export const courierStork = new Year2021SeasonalPOBType("Courier Stork", 2853).addGroup(
  courierCrittersGroup
);
export const courierOwl = new Year2021SeasonalPOBType("Courier Owl", 2854).addGroup(
  courierCrittersGroup
);
export const courierPigeon = new Year2021SeasonalPOBType("Courier Pigeon", 2855).addGroup(
  courierCrittersGroup
);
