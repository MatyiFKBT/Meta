import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";
import { TypeTags } from "../../../src/common/type";
import { surprise } from "../../normal/gaming";
import { electricMystery } from "../../normal/mystery";
import { citrine, onyx } from "../../normal/jewels";

export const pettingZoo2020Group = new Year2020SeasonalGroup({
  name: "Petting Zoo 2020",
  starts: "2020-04-09T11:11:00-05:00",
  ends: "2020-04-30T23:59:00-05:00",
});

export const babyFawn = new Year2020SeasonalBouncerType("Baby Fawn", 2417)
  .addGroup(pettingZoo2020Group)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    electricMystery,
    surprise,
    onyx,
    citrine
  );
export const babyTiger = new Year2020SeasonalBouncerType("Baby Tiger", 2419)
  .addGroup(pettingZoo2020Group)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    electricMystery,
    surprise,
    onyx,
    citrine
  );
export const babyLamb = new Year2020SeasonalBouncerType("Baby Lamb", 2418)
  .addGroup(pettingZoo2020Group)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    electricMystery,
    surprise,
    onyx,
    citrine
  );
export const babyChick = new Year2020SeasonalBouncerType("Baby Chick", 2416)
  .addGroup(pettingZoo2020Group)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    electricMystery,
    surprise,
    onyx,
    citrine
  );
export const babyBunny = new Year2020SeasonalBouncerType("Baby Bunny", 2415)
  .addGroup(pettingZoo2020Group)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.TypeVirtual),
    electricMystery,
    surprise,
    onyx,
    citrine
  );
