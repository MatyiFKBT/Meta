import { Year2020SeasonalGroup, Year2020SeasonalPOBType } from "./_index";
import { TypeTags } from "../../../src/items/type";
import { skyland, treehouse } from "../../normal/destination";
import { earthMystery, iceMystery, airMystery, electricMystery } from "../../normal/mystery";
import { flatHammock, flatLou } from "../../normal/flats";
import { CZReference } from "../../../src/czProperties";

export const babyAnimalsGroup = new Year2020SeasonalGroup({
  name: "Baby Animals",
  starts: "2020-05-01T00:00:00-05:00",
  ends: "2020-06-30T23:59:00-05:00",
});

export const hedgehog = new Year2020SeasonalPOBType("Hedgehog", 2427)
  .addGroup(babyAnimalsGroup)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    earthMystery,
    iceMystery,
    flatLou,
    type =>
      type.hasTags(TypeTags.TypeVirtual) &&
      ![
        "Virtual",
        "Virtual Black",
        "Virtual Timberwolf",
        "Virtual Gray",
        "Virtual Silver",
      ].includes(type.name)
  );
export const polarBear = new Year2020SeasonalPOBType("Polar Bear", 2428)
  .addGroup(babyAnimalsGroup)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    earthMystery,
    iceMystery,
    flatLou,
    type =>
      type.hasTags(TypeTags.TypeVirtual) &&
      ![
        "Virtual",
        "Virtual Black",
        "Virtual Timberwolf",
        "Virtual Gray",
        "Virtual Silver",
      ].includes(type.name)
  );
export const owlet = new Year2020SeasonalPOBType("Owlet", 2429)
  .addGroup(babyAnimalsGroup)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    new CZReference("Virtual"),
    airMystery,
    electricMystery,
    flatHammock
  );
