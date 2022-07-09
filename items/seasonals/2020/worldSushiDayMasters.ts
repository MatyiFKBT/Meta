import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";
import { TypeTags } from "../../../src/common/type";
import { mystery, waterMystery } from "../../normal/mystery";
import { eggs, farmer, family, farmerandWife } from "../../evolutions/farm";
import { aquamarine } from "../../normal/jewels";
import { battleAxe, longsword } from "../../normal/weapons";

export const worldSushiDayMastersGroup = new Year2020SeasonalGroup({
  name: "World Sushi Day Masters",
  starts: "2020-06-18T12:00:00-05:00",
  ends: "2020-07-08T23:59:00-05:00",
});

export const neko = new Year2020SeasonalBouncerType("Neko", 2521)
  .setIcon("sushimasterneko")
  .addGroup(worldSushiDayMastersGroup)
  .addBouncerLandsOn(
    waterMystery,
    mystery,
    aquamarine,
    longsword,
    battleAxe,
    type => type.hasTags(TypeTags.TypeVirtual),
    eggs,
    farmer,
    farmerandWife,
    family
  );
export const kappa = new Year2020SeasonalBouncerType("Kappa", 2522)
  .setIcon("sushimasterkappa")
  .addGroup(worldSushiDayMastersGroup)
  .addBouncerLandsOn(
    waterMystery,
    mystery,
    aquamarine,
    longsword,
    battleAxe,
    type => type.hasTags(TypeTags.TypeVirtual),
    eggs,
    farmer,
    farmerandWife,
    family
  );
export const yurei = new Year2020SeasonalBouncerType("Yurei", 2523)
  .setIcon("sushimasteryurei")
  .addGroup(worldSushiDayMastersGroup)
  .addBouncerLandsOn(
    waterMystery,
    mystery,
    aquamarine,
    longsword,
    battleAxe,
    type => type.hasTags(TypeTags.TypeVirtual),
    eggs,
    farmer,
    farmerandWife,
    family
  );
