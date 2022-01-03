import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";
import { TypeTags } from "../../common/type";
import { seaweed, fish, shark, canoe, motorboat, submarine } from "../../evolutions/education";
import {
  juvenileTurtle,
  planulaLarva,
  polyp,
  turtleEgg,
  turtleHatchling,
} from "../../evolutions/nature_bouncers";
import { aquamarine } from "../../normal/jewels";
import { waterMystery, mystery } from "../../normal/mystery";

export const aquaticBabyAnimalsGroup = new Year2020SeasonalGroup({
  name: "Aquatic Baby Animals",
  starts: "2020-06-05T12:00:00-05:00",
  ends: "2020-06-21T23:59:00-05:00",
});

export const babyNarwhal = new Year2020SeasonalBouncerType("Baby Narwhal", 2508)
  .addGroup(aquaticBabyAnimalsGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.VirtualColourBlue),
    seaweed,
    fish,
    shark,
    canoe,
    motorboat,
    submarine,
    planulaLarva,
    polyp
  );
export const babyPenguin = new Year2020SeasonalBouncerType("Baby Penguin", 2509)
  .addGroup(aquaticBabyAnimalsGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.VirtualColourBlue),
    seaweed,
    fish,
    shark,
    canoe,
    motorboat,
    submarine,
    planulaLarva,
    polyp
  );
export const babyCrab = new Year2020SeasonalBouncerType("Baby Crab", 2507)
  .addGroup(aquaticBabyAnimalsGroup)
  .addBouncerLandsOn(waterMystery, mystery, aquamarine, turtleEgg, turtleHatchling, juvenileTurtle);
export const sealPup = new Year2020SeasonalBouncerType("Seal Pup", 2510)
  .addGroup(aquaticBabyAnimalsGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.VirtualColourBlue),
    seaweed,
    fish,
    shark,
    canoe,
    motorboat,
    submarine,
    planulaLarva,
    polyp
  );
export const babyShark = new Year2020SeasonalBouncerType("Baby Shark", 2511)
  .addGroup(aquaticBabyAnimalsGroup)
  .addBouncerLandsOn(
    type => type.hasTags(TypeTags.VirtualColourBlue),
    seaweed,
    fish,
    shark,
    canoe,
    motorboat,
    submarine,
    planulaLarva,
    polyp
  );
