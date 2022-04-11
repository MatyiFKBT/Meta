import { Group } from "../common/group";
import {
  BouncerHostType,
  BouncerType,
  EvolutionTypeSet,
  TypeHidden,
  TypeSet,
  TypeTags,
} from "../common/type";
import { treehouse, skyland } from "../normal/destination";
import { joystickPhysical, joystickVirtual, rps, scatter } from "../normal/gaming";
import {
  topaz,
  diamond,
  aquamarine,
  ruby,
  citrine,
  emerald,
  pinkDiamond,
  sapphire,
  onyx,
  amethyst,
} from "../normal/jewels";
import { greenie, premium, shamrock } from "../normal/misc";
import {
  airMystery,
  earthMystery,
  electricMystery,
  fireMystery,
  voidMystery,
  waterMystery,
} from "../normal/mystery";
import { virtualYellow, virtualGoldenrod, virtualDandelion } from "../normal/virtual";
import { briefcase, catapult, crossbow, theHammer } from "../normal/weapons";
import { pouchCreaturesGroup } from "./_index";

export const PouchCreatureGroup = new Group({ name: "Pouch Creatures" }).addParent(
  pouchCreaturesGroup
);

export abstract class PouchCreatureType extends BouncerType {
  override template(): this {
    super.template();
    return this.setGroup(PouchCreatureGroup).addTag(TypeTags.BouncerPC);
  }
}
export class S1PouchCreatureType extends PouchCreatureType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerPCS1);
  }
}
export class S2PouchCreatureType extends PouchCreatureType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerPCS1);
  }
}
export class FunfinityPouchCreatureType extends PouchCreatureType {
  override template(): this {
    super.template();
    return this.addTag(TypeTags.BouncerPCFunfinity);
  }
}

export class PouchCreatureHostType extends BouncerHostType {
  override template(): this {
    super.template();
    return this.setGroup(PouchCreatureGroup).addTag(TypeTags.BouncerHostPC);
  }
}

export const tuli = new S1PouchCreatureType("Tuli", 1240)
  .addBouncerLandsOn(treehouse, greenie, fireMystery)
  .setEvolutionStage(1); /*.points({"capture":200,"deploy":250,"capon":100})*/
export const tulimber = new S1PouchCreatureType("Tulimber", 1241)
  .addBouncerLandsOn(greenie, fireMystery)
  .setEvolutionStage(2); /*.points({"capture":300,"capon":200})*/
export const tuliferno = new S1PouchCreatureType("Tuliferno", 1242)
  .addBouncerLandsOn(greenie, fireMystery)
  .setEvolutionStage(3); /*.points({"capture":500,"capon":300})*/
export const tuliSet = new EvolutionTypeSet().add(tuli).add(tulimber).add(tuliferno);
export const firePouchCreatureHost = new PouchCreatureHostType("Fire Pouch Creature Host", 1243)
  .physical()
  .addBouncerHostType(tuliSet);

export const vesi = new S1PouchCreatureType("Vesi", 1370)
  .addBouncerLandsOn(treehouse, greenie, waterMystery)
  .setEvolutionStage(1); /*.points({"capture":200,"deploy":250,"capon":100})*/
export const vesial = new S1PouchCreatureType("Vesial", 1371)
  .addBouncerLandsOn(greenie, waterMystery)
  .setEvolutionStage(2); /*.points({"capture":300,"capon":200})*/
export const vesisaur = new S1PouchCreatureType("Vesisaur", 1372)
  .addBouncerLandsOn(greenie, waterMystery)
  .setEvolutionStage(3); /*.points({"capture":500,"capon":300})*/
export const vesiSet = new EvolutionTypeSet().add(vesi).add(vesial).add(vesisaur);
export const waterPouchCreatureHost = new PouchCreatureHostType("Water Pouch Creature Host", 1373)
  .physical()
  .addBouncerHostType(vesiSet);

export const muru = new S1PouchCreatureType("Muru", 1638)
  .addBouncerLandsOn(treehouse, greenie, earthMystery)
  .setEvolutionStage(1); /*.points({"capture":200,"deploy":250,"capon":100})*/
export const muruchi = new S1PouchCreatureType("Muruchi", 1639)
  .addBouncerLandsOn(greenie, earthMystery)
  .setEvolutionStage(2); /*.points({"capture":300,"capon":200})*/
export const murutain = new S1PouchCreatureType("Murutain", 1640)
  .addBouncerLandsOn(greenie, earthMystery)
  .setEvolutionStage(3); /*.points({"capture":500,"capon":300})*/
export const muruSet = new EvolutionTypeSet().add(muru).add(muruchi).add(murutain);
export const earthPouchCreatureHost = new PouchCreatureHostType("Earth Pouch Creature Host", 1641)
  .physical()
  .addBouncerHostType(muruSet);

export const mitmegu = new S1PouchCreatureType("Mitmegu", 1752)
  .addBouncerLandsOn(
    treehouse,
    greenie,
    shamrock,
    scatter,
    premium,
    rps,
    waterMystery,
    earthMystery,
    fireMystery
  )
  .setEvolutionStage(1); /*.points({"capture":200,"deploy":250,"capon":100})*/
export const jootmegu = new S1PouchCreatureType("Jootmegu", 1753)
  .addBouncerLandsOn(waterMystery)
  .setEvolutionStage(2); /*.points({"capture":400,"capon":100})*/
export const rohimegu = new S1PouchCreatureType("Rohimegu", 1754)
  .addBouncerLandsOn(earthMystery)
  .setEvolutionStage(2); /*.points({"capture":400,"capon":100})*/
export const lokemegu = new S1PouchCreatureType("Lokemegu", 1755)
  .addBouncerLandsOn(fireMystery)
  .setEvolutionStage(2); /*.points({"capture":400,"capon":100})*/
export const ohkmegu = new S2PouchCreatureType("Ohkmegu", 3314)
  .addBouncerLandsOn(airMystery)
  .setEvolutionStage(2); /*.points({"capture":400,"capon":100})*/
export const murinmegu = new S2PouchCreatureType("Murinmegu", 3315)
  .addBouncerLandsOn(electricMystery)
  .setEvolutionStage(2); /*.points({"capture":400,"capon":100})*/
export const urgasmegu = new S2PouchCreatureType("Urgasmegu", 3316)
  .addBouncerLandsOn(voidMystery)
  .setEvolutionStage(2); /*.points({"capture":400,"capon":100})*/
export const mitmeguSet = new EvolutionTypeSet()
  .add(mitmegu)
  .add(jootmegu)
  .add(rohimegu)
  .add(lokemegu)
  .add(ohkmegu)
  .add(murinmegu)
  .add(urgasmegu);
export const mitmeguPouchCreatureHost = new PouchCreatureHostType(
  "Mitmegu Pouch Creature Host",
  1756
)
  .physical()
  .addBouncerHostType(mitmeguSet);
export const mitmeguPouchCreatureVirtualHost = new PouchCreatureHostType(
  "Mitmegu Pouch Creature Virtual Host",
  3313
)
  .virtual()
  .addBouncerHostType(mitmeguSet);

export const gleamingMuru = new S1PouchCreatureType("Gleaming Muru", 1850)
  .addTag(TypeTags.BouncerPCGleaming)
  .addHidden(TypeHidden.Bouncers, TypeHidden.Deploy)
  .addBouncerLandsOn(treehouse, greenie, earthMystery)
  .setEvolutionStage(1); /*.points({"capture":400,"deploy":500,"capon":200})*/
export const gleamingMuruchi = new S1PouchCreatureType("Gleaming Muruchi", 1851)
  .addTag(TypeTags.BouncerPCGleaming)
  .addHidden(TypeHidden.Bouncers, TypeHidden.Deploy)
  .addBouncerLandsOn(greenie, earthMystery)
  .setEvolutionStage(2); /*.points({"capture":600,"capon":400})*/
export const gleamingMurutain = new S1PouchCreatureType("Gleaming Murutain", 1852)
  .addTag(TypeTags.BouncerPCGleaming)
  .addHidden(TypeHidden.Bouncers, TypeHidden.Deploy)
  .addBouncerLandsOn(greenie, earthMystery)
  .setEvolutionStage(3); /*.points({"capture":1000,"capon":600})*/
export const gleamingMuruSet = new EvolutionTypeSet()
  .add(gleamingMuru)
  .add(gleamingMuruchi)
  .add(gleamingMurutain);

export const gleamingTuli = new S1PouchCreatureType("Gleaming Tuli", 1853)
  .addTag(TypeTags.BouncerPCGleaming)
  .addHidden(TypeHidden.Bouncers, TypeHidden.Deploy)
  .addBouncerLandsOn(treehouse, greenie, fireMystery)
  .setEvolutionStage(1); /*.points({"capture":400,"deploy":500,"capon":200})*/
export const gleamingTulimber = new S1PouchCreatureType("Gleaming Tulimber", 1854)
  .addTag(TypeTags.BouncerPCGleaming)
  .addHidden(TypeHidden.Bouncers, TypeHidden.Deploy)
  .addBouncerLandsOn(greenie, fireMystery)
  .setEvolutionStage(2); /*.points({"capture":600,"capon":400})*/
export const gleamingTuliferno = new S1PouchCreatureType("Gleaming Tuliferno", 1855)
  .addTag(TypeTags.BouncerPCGleaming)
  .addHidden(TypeHidden.Bouncers, TypeHidden.Deploy)
  .addBouncerLandsOn(greenie, fireMystery)
  .setEvolutionStage(3); /*.points({"capture":1000,"capon":600})*/
export const gleamingTuliSet = new EvolutionTypeSet()
  .add(gleamingTuli)
  .add(gleamingTulimber)
  .add(gleamingTuliferno);

export const gleamingVesi = new S1PouchCreatureType("Gleaming Vesi", 1856)
  .addTag(TypeTags.BouncerPCGleaming)
  .addHidden(TypeHidden.Bouncers, TypeHidden.Deploy)
  .addBouncerLandsOn(treehouse, greenie, waterMystery)
  .setEvolutionStage(1); /*.points({"capture":400,"deploy":500,"capon":200})*/
export const gleamingVesial = new S1PouchCreatureType("Gleaming Vesial", 1857)
  .addTag(TypeTags.BouncerPCGleaming)
  .addHidden(TypeHidden.Bouncers, TypeHidden.Deploy)
  .addBouncerLandsOn(greenie, waterMystery)
  .setEvolutionStage(2); /*.points({"capture":600,"capon":400})*/
export const gleamingVesisaur = new S1PouchCreatureType("Gleaming Vesisaur", 1858)
  .addTag(TypeTags.BouncerPCGleaming)
  .addHidden(TypeHidden.Bouncers, TypeHidden.Deploy)
  .addBouncerLandsOn(greenie, waterMystery)
  .setEvolutionStage(3); /*.points({"capture":1000,"capon":600})*/
export const gleamingVesiSet = new EvolutionTypeSet()
  .add(gleamingVesi)
  .add(gleamingVesial)
  .add(gleamingVesisaur);

export const pimedus = new S1PouchCreatureType("Pimedus", 1919)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    greenie,
    type => type.hasTags(TypeTags.TypeReseller),
    type => type.hasTags(TypeTags.TypeZodiacChinese),
    sapphire,
    briefcase,
    theHammer,
    crossbow,
    catapult,
    voidMystery
  )
  .addTag(TypeTags.BouncerPCStageless);
export const pimedusHost = new PouchCreatureHostType("Pimedus Host", 1920)
  .physical()
  .addBouncerHostType(pimedus);
export const pimedusVirtualHost = new PouchCreatureHostType("Pimedus Virtual Host", 1921)
  .virtual()
  .addBouncerHostType(pimedus);

export const puffle = new S2PouchCreatureType("Puffle", 2240)
  .addBouncerLandsOn(skyland, type => type.hasTags(TypeTags.TypeVirtual), airMystery)
  .setEvolutionStage(1); /*.points({"capture":200,"deploy":250,"capon":100})*/
export const pufrain = new S2PouchCreatureType("Pufrain", 2241)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), airMystery)
  .setEvolutionStage(2); /*.points({"capture":300,"capon":200})*/
export const puflawn = new S2PouchCreatureType("Puflawn", 2242)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), airMystery)
  .setEvolutionStage(3); /*.points({"capture":500,"capon":300})*/
export const puffleSet = new EvolutionTypeSet().add(puffle).add(pufrain).add(puflawn);
export const airPouchCreatureHost = new PouchCreatureHostType("Air Pouch Creature Host", 2243)
  .virtual()
  .addBouncerHostType(puffleSet);

export const magnetus = new S2PouchCreatureType("Magnetus", 2306)
  .addBouncerLandsOn(
    skyland,
    treehouse,
    greenie,
    airMystery,
    type => type.hasTags(TypeTags.VirtualColourBlue),
    type => type.hasTags(TypeTags.VirtualColourRed),
    waterMystery,
    joystickVirtual,
    joystickPhysical,
    virtualYellow,
    virtualGoldenrod,
    virtualDandelion
  )
  .addTag(TypeTags.BouncerPCStageless);
export const magnetusVirtualHost = new PouchCreatureHostType("Magnetus Virtual Host", 2308)
  .virtual()
  .addBouncerHostType(magnetus);
export const magnetusHost = new PouchCreatureHostType("Magnetus Host", 2307)
  .physical()
  .addBouncerHostType(magnetus);

export const elekter = new S2PouchCreatureType("Elekter", 2407)
  .addBouncerLandsOn(skyland, type => type.hasTags(TypeTags.TypeVirtual), electricMystery)
  .setEvolutionStage(1);
export const elekjoud = new S2PouchCreatureType("Elekjoud", 2408)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), electricMystery)
  .setEvolutionStage(2);
export const elektrivool = new S2PouchCreatureType("Elektrivool", 2409)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), electricMystery)
  .setEvolutionStage(3);
export const elekterSet = new EvolutionTypeSet().add(elekter).add(elekjoud).add(elektrivool);
export const electricPouchCreatureHost = new PouchCreatureHostType(
  "Electric Pouch Creature Host",
  2410
)
  .virtual()
  .addBouncerHostType(elekterSet);

export const topaas = new FunfinityPouchCreatureType("Topaas", 2366)
  .addBouncerLandsOn(treehouse, greenie, earthMystery, topaz, treehouse)
  .addTag(TypeTags.BouncerPCStageless); /*.points({"deploy":250,"capture":200,"capon":250})*/
export const ametust = new FunfinityPouchCreatureType("Ametust", 2367)
  .addBouncerLandsOn(
    skyland,
    type => type.hasTags(TypeTags.TypeVirtual),
    earthMystery,
    amethyst,
    treehouse
  )
  .addTag(TypeTags.BouncerPCStageless); /*.points({"deploy":250,"capture":200,"capon":250})*/
export const oniks = new FunfinityPouchCreatureType("Oniks", 2368)
  .addBouncerLandsOn(
    skyland,
    type => type.hasTags(TypeTags.TypeVirtual),
    earthMystery,
    onyx,
    treehouse
  )
  .addTag(TypeTags.BouncerPCStageless); /*.points({"deploy":250,"capture":200,"capon":250})*/
export const teemant = new FunfinityPouchCreatureType("Teemant", 2369)
  .addBouncerLandsOn(treehouse, greenie, earthMystery, diamond)
  .addTag(TypeTags.BouncerPCStageless); /*.points({"deploy":250,"capture":200,"capon":250})*/
export const smaragd = new FunfinityPouchCreatureType("Smaragd", 2370)
  .addBouncerLandsOn(
    skyland,
    type => type.hasTags(TypeTags.VirtualColourGreen),
    airMystery,
    emerald
  )
  .addTag(TypeTags.BouncerPCStageless); /*.points({"deploy":250,"capture":200,"capon":250})*/
export const akvamariin = new FunfinityPouchCreatureType("Akvamariin", 2374)
  .addBouncerLandsOn(treehouse, greenie, earthMystery, aquamarine)
  .addTag(TypeTags.BouncerPCStageless); /*.points({"deploy":250,"capture":200,"capon":250})*/
export const rubiin = new FunfinityPouchCreatureType("Rubiin", 2371)
  .addBouncerLandsOn(treehouse, greenie, fireMystery, ruby)
  .addTag(TypeTags.BouncerPCStageless); /*.points({"deploy":250,"capture":200,"capon":250})*/
export const safiir = new FunfinityPouchCreatureType("Safiir", 2372)
  .addBouncerLandsOn(skyland, type => type.hasTags(TypeTags.TypeVirtual), airMystery, sapphire)
  .addTag(TypeTags.BouncerPCStageless); /*.points({"deploy":250,"capture":200,"capon":250})*/
export const roosa = new FunfinityPouchCreatureType("Roosa", 2375)
  .addBouncerLandsOn(treehouse, greenie, fireMystery, pinkDiamond)
  .addTag(TypeTags.BouncerPCStageless); /*.points({"deploy":250,"capture":200,"capon":250})*/
export const tsitriin = new FunfinityPouchCreatureType("Tsitriin", 2373)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual), airMystery, citrine, skyland)
  .addTag(TypeTags.BouncerPCStageless); /*.points({"deploy":250,"capture":200,"capon":250})*/

export const funfinitySet = new TypeSet()
  .add(topaas)
  .add(ametust)
  .add(oniks)
  .add(teemant)
  .add(smaragd)
  .add(akvamariin)
  .add(rubiin)
  .add(safiir)
  .add(roosa)
  .add(tsitriin);
export const funfinityHost = new PouchCreatureHostType("Funfinity Host", 2376)
  .physical()
  .addBouncerHostType(funfinitySet);
export const funfinityVirtualHost = new PouchCreatureHostType("Funfinity Virtual Host", 2377)
  .virtual()
  .addBouncerHostType(funfinitySet);

export const koobas = new S2PouchCreatureType("Koobas", 3363).setEvolutionStage(
  1
); /*.points({"capture":200,"deploy":250,"capon":100})*/
export const kartus = new S2PouchCreatureType("Kartus", 3364).setEvolutionStage(
  2
); /*.points({"capture":300,"capon":200})*/
export const kabuhirm = new S2PouchCreatureType("Kabuhirm", 3365).setEvolutionStage(
  3
); /*.points({"capture":500,"capon":300})*/
export const koobasSet = new EvolutionTypeSet().add(koobas).add(kartus).add(kabuhirm);
export const voidPouchCreatureHost = new PouchCreatureHostType("Void Pouch Creature Host", 3366)
  .virtual()
  .addBouncerHostType(koobasSet);
