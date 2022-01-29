import { Group } from "../common/group";
import { TypeTags, TypeHidden, Type, ScatterType, TypeSet } from "../common/type";
import { normalGroup } from "./_index";

export class ClanWeaponType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([clanWeaponGroup]).addTags(TypeTags.TypeWeapon, TypeTags.TypeWeaponClan);
  }
}
export class ClanWeaponScatterType extends ScatterType {
  override template(): this {
    super.template();
    return this.setGroup([clanWeaponGroup]).addTags(TypeTags.TypeWeapon, TypeTags.TypeWeaponClan);
  }
}

export const clanWeaponGroup = new Group({ name: "Clan Weapons" }).addParent(normalGroup);

export const mace = new ClanWeaponType("Mace", 52).physical();
export const longsword = new ClanWeaponType("Longsword", 53).physical();
export const battleAxe = new ClanWeaponType("Battle Axe", 140).physical();
export const theHammer = new ClanWeaponType("The Hammer", 306).physical();
export const crossbow = new ClanWeaponType(
  "Crossbow",
  998
).virtual(); /*.points({"deploy":25,"capture":20,"capon":20})*/

export const boulder = new ClanWeaponScatterType("Boulder", 1255).physical();
export const catapult = new ClanWeaponType("Catapult", 1248)
  .virtual()
  .scattererScatters(boulder); /*.points({"deploy":30,"capture":35,"capon":35})*/
export const shield = new ClanWeaponType("Shield", 3244).virtual();
export const brokenShield = new ClanWeaponType("Broken Shield").virtual();

export class ZeecretWeaponType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([zeecretWeaponGroup]).addTags(
      TypeTags.TypeWeapon,
      TypeTags.TypeWeaponZeeops
    );
  }
}
export class ZeecretWeaponScatterType extends ScatterType {
  override template(): this {
    super.template();
    return this.setGroup([zeecretWeaponGroup]).addTags(
      TypeTags.TypeWeapon,
      TypeTags.TypeWeaponZeeops
    );
  }
}

export const zeecretWeaponGroup = new Group({ name: "ZeeCret Weapons" }).addParent(normalGroup);

export const dossier = new ZeecretWeaponScatterType("Dossier", 1247).physical();
export const briefcase = new ZeecretWeaponType("Briefcase", 1246)
  .physical()
  .scattererScatters(dossier);

export const infraredVirtual = new ZeecretWeaponScatterType("Infrared Virtual", 1360).standalone();
export const nightVisionGoggles = new ZeecretWeaponType("Night Vision Goggles", 1359)
  .addIcon("nvgoggles")
  .virtual()
  .scattererScatters(infraredVirtual);

export const laserTrailScatters = new TypeSet()
  .add(new ZeecretWeaponScatterType("Laser Trail 1", 2608).standalone())
  .add(new ZeecretWeaponScatterType("Laser Trail 2", 2609).standalone())
  .add(new ZeecretWeaponScatterType("Laser Trail 3", 2610).standalone());
export const laserPen = new ZeecretWeaponType("Laser Pen", 2607)
  .virtual()
  .addHidden(TypeHidden.Deploy, TypeHidden.Inventory)
  .scattererScatters(laserTrailScatters);

export const liaisonAgent = new ZeecretWeaponScatterType("Liaison Agent", 2826).standalone();
export const undercoverAgent = new ZeecretWeaponScatterType("Undercover Agent", 3418)
  .standalone()
  .scattererScatters(liaisonAgent);
export const walkieTalkieWatch = new ZeecretWeaponType("Walkie Talkie Watch", 2824)
  .physical()
  .scattererScatters(undercoverAgent);

export const physicalMasterOfDisguise = new ZeecretWeaponType(
  "Physical Master of Disguise"
).physical();

export const virtualMasterOfDisguise = new ZeecretWeaponType(
  "Virtual Master of Disguise"
).virtual();
