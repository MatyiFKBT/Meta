import { Group } from "../../src/common/group";
import { BouncerHostType, BouncerType, ScatterType, TypeTags } from "../../src/common/type";
import { battleAxe, catapult, crossbow, longsword, mace, theHammer } from "../normal/weapons";
import { spyderbot, squashedSpyderbot } from "./mechz";
import { mechzGroup } from "./_index";

export const TPOBGroup = new Group({ name: "TPOB" }).addParent(mechzGroup);

export class TPOBType extends BouncerType {
  override template(): this {
    super.template();
    return this.setGroup(TPOBGroup).addTag(TypeTags.BouncerTPOB);
  }
}

export class TPOBScatterType extends ScatterType {
  override template(): this {
    super.template();
    return this.setGroup(TPOBGroup);
  }
}

export class TPOBHostType extends BouncerHostType {
  override template(): this {
    super.template();
    return this.setGroup(TPOBGroup).addTag(TypeTags.BouncerHostTPOB);
  }
}

export const flamingArrow = new TPOBScatterType("Flaming Arrow", 2503)
  .standalone()
  .addTag(TypeTags.TypeWeaponClan);

export const trojanUnicorn = new TPOBType("Trojan Unicorn", 2502)
  .addBouncerLandsOn(mace, longsword, battleAxe, theHammer, crossbow, catapult)
  .addTag(TypeTags.TypeWeaponClan);

export const tempBouncerVirtualHost = new TPOBHostType("Temp Bouncer Virtual Host", 2336)
  .virtual()
  .addBouncerHostType(spyderbot);
export const tempBouncerHost = new TPOBHostType("Temp Bouncer Host", 2335)
  .physical()
  .addBouncerHostType(squashedSpyderbot);
