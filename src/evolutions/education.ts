import { EvolutionTypeSet, Type, TypeTags } from "../common/type";
import { Group } from "../common/group";
import { evoGroup } from "./_index";

export const EducationEvolutionGroup = new Group({ name: "Education Evolutions" }).addParent(
  evoGroup
);

export class EducationEvolutionType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([EducationEvolutionGroup]).addTags(
      TypeTags.Evolution,
      TypeTags.EvolutionEducation
    );
  }
}

export const seaweed = new EducationEvolutionType("Seaweed", 742).physical().setEvolutionStage(1);
seaweed.setEvolutionBase(seaweed);
export const shark = new EducationEvolutionType("Shark", 741)
  .physical()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(seaweed);
export const fish = new EducationEvolutionType("Fish", 743)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(seaweed);

export const canoe = new EducationEvolutionType("Canoe", 745).virtual().setEvolutionStage(1);
canoe.setEvolutionBase(canoe);
export const submarine = new EducationEvolutionType("Submarine", 744)
  .virtual()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(canoe);
export const motorboat = new EducationEvolutionType("Motorboat", 746)
  .virtual()
  .setEvolutionStage(2)
  .setEvolutionBase(canoe);

export const egg = new EducationEvolutionType("Egg", 800).physical().setEvolutionStage(1);
egg.setEvolutionBase(egg);
export const dinosaur = new EducationEvolutionType("Dinosaur", 801)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(egg);
export const bones = new EducationEvolutionType("Bones", 802)
  .physical()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(egg);

export const firstWheel = new EducationEvolutionType("First Wheel", 808)
  .virtual()
  .setEvolutionStage(1);
firstWheel.setEvolutionBase(firstWheel);
export const muscleCar = new EducationEvolutionType("Muscle Car", 807)
  .virtual()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(firstWheel);
export const pennyFarthingBike = new EducationEvolutionType("Penny-Farthing Bike", 809)
  .virtual()
  .setEvolutionStage(2)
  .setEvolutionBase(firstWheel);

export const lionCub = new EducationEvolutionType("Lion Cub", 837).physical().setEvolutionStage(1);
lionCub.setEvolutionBase(lionCub);
export const kingoftheJungle = new EducationEvolutionType("King of the Jungle", 835)
  .physical()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(lionCub);
export const lion = new EducationEvolutionType("Lion", 838)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(lionCub);

export const safariTruck = new EducationEvolutionType("Safari Truck", 840)
  .virtual()
  .setEvolutionStage(1);
safariTruck.setEvolutionBase(safariTruck);
export const safariBus = new EducationEvolutionType("Safari Bus", 839)
  .virtual()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(safariTruck);
export const safariVan = new EducationEvolutionType("Safari Van", 841)
  .virtual()
  .setEvolutionStage(2)
  .setEvolutionBase(safariTruck);

export const phoneEvos = new EvolutionTypeSet(
  [
    new EducationEvolutionType("Antique Phone"),
    new EducationEvolutionType("Rotary Dial Phone"),
    new EducationEvolutionType("Brick Phone"),
    new EducationEvolutionType("Z Phone"),
  ],
  4
).each(i => i.physical());

export const computerEvos = new EvolutionTypeSet(
  [
    new EducationEvolutionType("Mainframe"),
    new EducationEvolutionType("PC"),
    new EducationEvolutionType("Laptop"),
    new EducationEvolutionType("Tablet"),
  ],
  4
).each(i => i.physical());

export const currencyEvos = new EvolutionTypeSet(
  [
    new EducationEvolutionType("Cowry Shell"),
    new EducationEvolutionType("Gold Nuggets"),
    new EducationEvolutionType("Paper Money"),
    new EducationEvolutionType("Credit Card"),
  ],
  4
).each(i => i.virtual());

export const communicationEvos = new EvolutionTypeSet(
  [
    new EducationEvolutionType("Handwritten Letter"),
    new EducationEvolutionType("Carrier Pigeon"),
    new EducationEvolutionType("Telegram"),
    new EducationEvolutionType("Email"),
  ],
  4
).each(i => i.virtual());
