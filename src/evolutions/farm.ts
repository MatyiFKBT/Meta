import { Type, TypeTags } from "../common/type";
import { Group } from "../common/group";
import { evoGroup } from "./_index";

export const FarmEvolutionGroup = new Group({ name: "Farm Evolutions" }).addParent(evoGroup);

export class FarmEvolutionType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([FarmEvolutionGroup]).addTags(TypeTags.Evolution, TypeTags.EvolutionFarm);
  }
}

export const tomatoSeed = new FarmEvolutionType("Tomato Seed", 662).physical().setEvolutionStage(1);
tomatoSeed.setEvolutionBase(tomatoSeed);
export const tomatoPlant = new FarmEvolutionType("Tomato Plant", 666)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(tomatoSeed);
export const tomato = new FarmEvolutionType("Tomato", 658)
  .physical()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(tomatoSeed);

export const cornSeed = new FarmEvolutionType("Corn Seed", 663).physical().setEvolutionStage(1);
cornSeed.setEvolutionBase(cornSeed);
export const cornStalk = new FarmEvolutionType("Corn Stalk", 667)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(cornSeed);
export const earofCorn = new FarmEvolutionType("Ear of Corn", 659)
  .physical()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(cornSeed);

export const carrotSeed = new FarmEvolutionType("Carrot Seed", 664).virtual().setEvolutionStage(1);
carrotSeed.setEvolutionBase(carrotSeed);
export const carrotPlant = new FarmEvolutionType("Carrot Plant", 668)
  .virtual()
  .setEvolutionStage(2)
  .setEvolutionBase(carrotSeed);
export const carrot = new FarmEvolutionType("Carrot", 660)
  .virtual()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(carrotSeed);

export const peasSeed = new FarmEvolutionType("Peas Seed", 665).virtual().setEvolutionStage(1);
peasSeed.setEvolutionBase(peasSeed);
export const peasPlant = new FarmEvolutionType("Peas Plant", 669)
  .virtual()
  .setEvolutionStage(2)
  .setEvolutionBase(peasSeed);
export const peas = new FarmEvolutionType("Peas", 661)
  .virtual()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(peasSeed);

export const goldenCarrotSeed = new FarmEvolutionType("Golden Carrot Seed", 679)
  .physical()
  .setEvolutionStage(1);
goldenCarrotSeed.setEvolutionBase(goldenCarrotSeed);
export const goldenCarrotPlant = new FarmEvolutionType("Golden Carrot Plant", 680)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(goldenCarrotSeed);
export const goldenCarrot = new FarmEvolutionType("Golden Carrot", 678)
  .physical()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(goldenCarrotSeed);

export const piglet = new FarmEvolutionType("Piglet", 699).physical().setEvolutionStage(1);
piglet.setEvolutionBase(piglet);
export const pig = new FarmEvolutionType("Pig", 701)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(piglet);
export const bacon = new FarmEvolutionType("Bacon", 685)
  .physical()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(piglet);

export const calf = new FarmEvolutionType("Calf", 698).physical().setEvolutionStage(1);
calf.setEvolutionBase(calf);
export const cow = new FarmEvolutionType("Cow", 700)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(calf);
export const milk = new FarmEvolutionType("Milk", 684)
  .physical()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(calf);

export const colt = new FarmEvolutionType("Colt", 704).virtual().setEvolutionStage(1);
colt.setEvolutionBase(colt);
export const racehorse = new FarmEvolutionType("Racehorse", 706)
  .virtual()
  .setEvolutionStage(2)
  .setEvolutionBase(colt);
export const championshipHorse = new FarmEvolutionType("Championship Horse", 702)
  .addIcon("horse")
  .virtual()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(colt);

export const chick = new FarmEvolutionType("Chick", 705).virtual().setEvolutionStage(1);
chick.setEvolutionBase(chick);
export const chicken = new FarmEvolutionType("Chicken", 707)
  .virtual()
  .setEvolutionStage(2)
  .setEvolutionBase(chick);
export const eggs = new FarmEvolutionType("Eggs", 703)
  .virtual()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(chick);

export const leanToShed = new FarmEvolutionType("Lean-To Shed", 729)
  .physical()
  .setEvolutionStage(1);
leanToShed.setEvolutionBase(leanToShed);
export const gardenShed = new FarmEvolutionType("Garden Shed", 730)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(leanToShed);
export const barn = new FarmEvolutionType("Barn", 708)
  .physical()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(leanToShed);

export const hoe = new FarmEvolutionType("Hoe", 731).physical().setEvolutionStage(1);
hoe.setEvolutionBase(hoe);
export const plow = new FarmEvolutionType("Plow", 732)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(hoe);
export const tractor = new FarmEvolutionType("Tractor", 709)
  .physical()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(hoe);

export const farmer = new FarmEvolutionType("Farmer", 737).virtual().setEvolutionStage(1);
farmer.setEvolutionBase(farmer);
export const farmerandWife = new FarmEvolutionType("Farmer and Wife", 738)
  .virtual()
  .setEvolutionStage(2)
  .setEvolutionBase(farmer);
export const family = new FarmEvolutionType("Family", 735)
  .virtual()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(farmer);

export const pottedPlant = new FarmEvolutionType("Potted Plant", 739)
  .virtual()
  .setEvolutionStage(1);
pottedPlant.setEvolutionBase(pottedPlant);
export const garden = new FarmEvolutionType("Garden", 740)
  .virtual()
  .setEvolutionStage(2)
  .setEvolutionBase(pottedPlant);
export const field = new FarmEvolutionType("Field", 736)
  .virtual()
  .addHidden()
  .setEvolutionStage(3)
  .setEvolutionBase(pottedPlant);
