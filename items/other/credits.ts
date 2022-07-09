import { Group } from "../../src/common/group";
import { LegacyAccessoryType } from "../../src/common/legacy";
import { Type, TypeHidden, TypeTags } from "../../src/common/type";

export class CreditType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([creditGroup])
      .locationless()
      .addTag(TypeTags.Credit)
      .addHidden(TypeHidden.Capture, TypeHidden.Deploy);
  }
}

export class RedeemableType extends CreditType {
  template(): this {
    super.template();
    return this.setGroup([redeemableGroup]).addTag(TypeTags.Redeemable);
  }
}

export const creditGroup = new Group({ name: "Credits" });
export const redeemableGroup = new Group({ name: "Redeemables" }).addLegacyAccessories([
  {
    type: LegacyAccessoryType.Button,
    link: "~https://munzee.page.link/store",
    label: "ZEDS Store",
    translation_key: "zeds_store",
    color: "primary",
  },
  {
    type: LegacyAccessoryType.Button,
    link: "https://www.munzee.com/redeem",
    label: "Redeem Page",
    translation_key: "redeem_store",
    color: "primary",
  },
  {
    type: LegacyAccessoryType.Button,
    link: "https://store.freezetag.com/",
    label: "FT Store",
    translation_key: "ft_store",
    color: "primary",
  },
]);

export const magnet = new CreditType("Magnet").addIcon("physicalmagnet");
export const virtualMagnet = new CreditType("Virtual Magnet").setIcon("virtual_magnet");
export const blastCapture = new CreditType("Blast Capture").setIcon("blast_capture");
export const miniBlastCapture = new CreditType("Mini Blast Capture").setIcon("blast_capture_mini");
export const mEGABlastCapture = new CreditType("MEGA Blast Capture").setIcon("blast_capture_mega");
export const destination = new CreditType("Destination");
export const secureSocial = new CreditType("Secure Social").setIcon("secure_social");
export const virtualColor = new CreditType("Virtual Color").setIcons(
  "virtual_colors",
  "virtualcolor"
);
export const bouncerUpgrade = new CreditType("Bouncer Upgrade").setIcon("upgrade_myth");
export const evolutionReset = new CreditType("Evolution Reset").setIcon("evolution_reset");
export const zEDS = new RedeemableType("ZEDS");
export const zodiac = new CreditType("Zodiac");
export const chineseZodiac = new CreditType("Chinese Zodiac").setIcon("chinese_zodiac");
export const physicalDeployBooster = new CreditType("Physical Deploy Booster");
export const virtualDeployBooster = new CreditType("Virtual Deploy Booster");
export const physicalCaptureBooster = new CreditType("Physical Capture Booster");
export const virtualCaptureBooster = new CreditType("Virtual Capture Booster");
export const roverTreat = new CreditType("Rover Treat").setIcon("rover_treat");
export const qRowbar = new CreditType("QRowbar");

export const cog = new RedeemableType("Cog");
export const jewelShards = new RedeemableType("Jewel Shards").setIcon("jewel_shards");
export const weaponShards = new RedeemableType("Weapon Shards").setIcon("weapon_shards");
export const candyCorn = new RedeemableType("Candy Corn")
  .setIcon("candy_corn")
  .addHidden(TypeHidden.Inventory);
export const c04L = new RedeemableType("C04L").addHidden(TypeHidden.Inventory);
export const shamRock = new RedeemableType("Sham Rock")
  .setIcons("shamrockcredit", "sham_rock")
  .addHidden(TypeHidden.Inventory);
export const paintedRose = new RedeemableType("Painted Rose").setIcon("painted_rose");
