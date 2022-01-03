import { Year2020SeasonalGroup, Year2020SeasonalPOBType } from "./_index";
import { Type, TypeTags } from "../../common/type";
import { skyland, treehouse } from "../../normal/destination";
import { earthMystery, iceMystery, airMystery, electricMystery } from "../../normal/mystery";
import {
  virtual,
  virtualBlack,
  virtualGray,
  virtualSilver,
  virtualTimberwolf,
} from "../../normal/virtual";
import { flatHammock, flatLou } from "../../normal/flats";

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
      !([virtual, virtualBlack, virtualTimberwolf, virtualGray, virtualSilver] as Type[]).includes(
        type
      )
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
      !([virtual, virtualBlack, virtualTimberwolf, virtualGray, virtualSilver] as Type[]).includes(
        type
      )
  );
export const owlet = new Year2020SeasonalPOBType("Owlet", 2429)
  .addGroup(babyAnimalsGroup)
  .addBouncerLandsOn(skyland, treehouse, virtual, airMystery, electricMystery, flatHammock);
