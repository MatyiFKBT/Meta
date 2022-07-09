import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";
import { TypeTags } from "../../../src/common/type";
import { skyland, treehouse } from "../../normal/destination";
import { greenie } from "../../normal/misc";

export const campCounselorsGroup = new Year2020SeasonalGroup({
  name: "Camp Counselors",
  starts: "2020-07-29T12:00:00-05:00",
  ends: "2020-09-09T23:59:00-05:00",
});

export const counselorCapALot = new Year2020SeasonalBouncerType("Counselor Cap-A-Lot", 2565)
  .setIcon("campcap-a-lotcounselor")
  .addGroup(campCounselorsGroup)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    type => type.hasTags(TypeTags.TypeMystery),
    greenie,
    type => type.hasTags(TypeTags.TypeVirtual)
  );
export const counselorQRantine = new Year2020SeasonalBouncerType("Counselor QRantine", 2566)
  .setIcon("campqrantinecounselor")
  .addGroup(campCounselorsGroup)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    type => type.hasTags(TypeTags.TypeMystery),
    greenie,
    type => type.hasTags(TypeTags.TypeVirtual)
  );
export const counselorFrEEZ = new Year2020SeasonalBouncerType("Counselor FrEEZ", 2567)
  .setIcon("campfreezcounselor")
  .addGroup(campCounselorsGroup)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    type => type.hasTags(TypeTags.TypeMystery),
    greenie,
    type => type.hasTags(TypeTags.TypeVirtual)
  );
export const counselorKenneZee = new Year2020SeasonalBouncerType("Counselor KenneZee", 2568)
  .setIcon("campkennezeecounselor")
  .addGroup(campCounselorsGroup)
  .addBouncerLandsOn(
    treehouse,
    skyland,
    type => type.hasTags(TypeTags.TypeMystery),
    greenie,
    type => type.hasTags(TypeTags.TypeVirtual)
  );
