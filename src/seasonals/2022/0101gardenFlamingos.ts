import {
  Year2022SeasonalPOBType,
  Year2022SeasonalGroup,
  Year2022SeasonalScatterType,
} from "./_index";
import { TypeTags } from "../../common/type";
import { greenie } from "../../normal/misc";
import { electricMystery } from "../../normal/mystery";
import { skyland, treehouse } from "../../normal/destination";

export const gardenFlamingosGroup = new Year2022SeasonalGroup({
  name: "Garden Flamingos",
  starts: "2022-01-01T00:00:00-06:00",
  ends: "2022-12-31T23:59:00-06:00",
});

class GardenFlamingo extends Year2022SeasonalPOBType {
  template(): this {
    super.template();
    return this.addGroup(gardenFlamingosGroup).addBouncerLandsOn(greenie, type =>
      type.hasTags(TypeTags.TypeVirtual)
    );
  }
}

class FlamingoFeathers extends Year2022SeasonalScatterType {
  template(): this {
    super.template();
    return this.addGroup(gardenFlamingosGroup).standalone();
  }
}

export const gardenFlamingo = new GardenFlamingo("Garden Flamingo", 3477);
export const festiveFeathers = new FlamingoFeathers("Festive Feathers", 3479);
export const newYearGardenFlamingo = new GardenFlamingo("New Year Garden Flamingo", 3478)
  .addBouncerLandsOn(electricMystery, treehouse, skyland)
  .scattererScatters(festiveFeathers);

export const spaceFlightFeathers = new FlamingoFeathers("Space Flight Feathers", 3503);
export const astronautGardenFlamingo = new GardenFlamingo(
  "Astronaut Garden Flamingo",
  3502
).scattererScatters(spaceFlightFeathers);

export const flannelFeathers = new FlamingoFeathers("Flannel Feathers", 3505);
export const goldMinerGardenFlamingo = new GardenFlamingo("Gold Miner Garden Flamingo", 3506);

export const crikeyFeathers = new FlamingoFeathers("Crikey Feathers", 3507);
export const aussieExplorerGardenFlamingo = new GardenFlamingo(
  "Aussie Explorer Garden Flamingo",
  3506
);

export const bearSkinFeathers = new FlamingoFeathers("Bear Skin Feathers", 3509);
export const queensGuardsmanGardenFlamingo = new GardenFlamingo(
  "Queen's Guardsman Garden Flamingo",
  3508
)
  .addIcon("queensguardsmangardenflamingo")
  .scattererScatters(bearSkinFeathers);

export const lovelyFeathers = new FlamingoFeathers("Lovely Feathers", 3481);
export const valentinesGardenFlamingo = new GardenFlamingo(
  "Valentine's Garden Flamingo",
  3480
).scattererScatters(lovelyFeathers);
