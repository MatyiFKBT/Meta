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
export const festiveFeather = new FlamingoFeathers("Festive Feathers");
export const newYearGardenFlamingo = new GardenFlamingo("New Year Garden Flamingo")
  .addBouncerLandsOn(electricMystery, treehouse, skyland)
  .scattererScatters(festiveFeather);
