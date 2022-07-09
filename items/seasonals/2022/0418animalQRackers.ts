import { TypeHidden, TypeSet } from "../../../src/common/type";
import { Year2022SeasonalGroup, Year2022SeasonalBouncerType } from "./_index";

export const animalQRackersGroup = new Year2022SeasonalGroup({
  name: "Animal QRackers",
  starts: "2022-04-18T12:00:00-05:00",
  ends: "2022-05-01T23:59:00-05:00",
});

export const greenAnimalQRackerBox = new Year2022SeasonalBouncerType("Green Animal QRacker Box")
  .addGroup(animalQRackersGroup)
  .addHidden(TypeHidden.Capture);
export const redAnimalQRackerBox = new Year2022SeasonalBouncerType("Red Animal QRacker Box")
  .addGroup(animalQRackersGroup)
  .addHidden(TypeHidden.Capture);

export const animalQRackersSet = new TypeSet();
for (const type of [
  ["Rover Animal QRacker", 3699],
  ["Frosted Rover Animal QRacker", 3700],
  ["Benson Animal QRacker", 3701],
  ["Frosted Benson Animal QRacker", 3702],
  ["Rob Animal QRacker", 3703],
  ["Frosted Rob Animal QRacker", 3704],
  ["Flamingo Animal QRacker", 3705],
  ["Frosted Flamingo Animal QRacker", 3706],
  ["Mitmegu Animal QRacker", 3707],
  ["Frosted Mitmegu Animal QRacker", 3708],
  ["Unicorn Animal QRacker", 3709],
  ["Frosted Unicorn Animal QRacker", 3710],
  ["Crushed Animal QRackers", 3711],
  ["Broken Animal QRackers", 3712],
] as const) {
  animalQRackersSet.add(
    new Year2022SeasonalBouncerType(type[0], type[1])
      .addGroup(animalQRackersGroup)
      .addHidden(TypeHidden.Bouncers)
  );
}
