import { EvolutionTypeSet, Type, TypeTags } from "../../src/common/type";
import { Group } from "../../src/common/group";
import { evoGroup } from "./_index";

export const ResellerEvolutionGroup = new Group({ name: "Reseller Evolutions" }).addParent(
  evoGroup
);

export class ResellerEvolutionType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([ResellerEvolutionGroup]).addTags(
      TypeTags.Evolution,
      TypeTags.EvolutionReseller
    );
  }
}

export const coin = new ResellerEvolutionType("Coin", 1055).physical().setEvolutionStage(1);
coin.setEvolutionBase(coin);
export const bagofCoins = new ResellerEvolutionType("Bag of Coins", 1056)
  .physical()
  .setEvolutionStage(2)
  .setEvolutionBase(coin);
export const treasureChest = new ResellerEvolutionType("Treasure Chest", 1057)
  .physical()
  .setEvolutionStage(3)
  .setEvolutionBase(coin);

export const coinEvos = new EvolutionTypeSet([coin, bagofCoins, treasureChest], 3);
