import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";
import { TypeTags } from "../../../src/items/type";
import { greenie } from "../../normal/misc";
import { airMystery, earthMystery } from "../../normal/mystery";

export const boomerangs2020Group = new Year2020SeasonalGroup({
  name: "Boomerangs 2020",
  starts: "2020-01-24T10:00:00-06:00",
  ends: "2020-02-08T23:59:00-06:00",
});

export const coralCatcherBoomerang = new Year2020SeasonalBouncerType(
  "Coral Catcher Boomerang",
  2346
)
  .addGroup(boomerangs2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), airMystery);
export const sunsetterBoomerang = new Year2020SeasonalBouncerType("Sunsetter Boomerang", 2345)
  .addGroup(boomerangs2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), airMystery);
export const partingSeaBoomerang = new Year2020SeasonalBouncerType("Parting Sea Boomerang", 2344)
  .addGroup(boomerangs2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), airMystery);
export const greatDividingBoomerang = new Year2020SeasonalBouncerType(
  "Great Dividing Boomerang",
  2343
)
  .addGroup(boomerangs2020Group)
  .addBouncerLandsOn(greenie, earthMystery);
export const countryCrawlerBoomerang = new Year2020SeasonalBouncerType(
  "Country Crawler Boomerang",
  2342
)
  .addGroup(boomerangs2020Group)
  .addBouncerLandsOn(greenie, earthMystery);
export const rootRunnerBoomerang = new Year2020SeasonalBouncerType("Root Runner Boomerang", 2341)
  .addGroup(boomerangs2020Group)
  .addBouncerLandsOn(greenie, earthMystery);
