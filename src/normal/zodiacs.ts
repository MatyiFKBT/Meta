import { Group } from "../common/group";
import { ScatterType, Type, TypeHidden, TypeSet, TypeTags } from "../common/type";
import { normalGroup } from "./_index";

export class WesternZodiacType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([westernZodiacGroup])
      .addTags(TypeTags.TypeZodiac, TypeTags.TypeZodiacWestern)
      .physical()
      .addHidden(TypeHidden.Inventory);
  }
}

export const westernZodiacGroup = new Group({ name: "Western Zodiacs" }).addParent(normalGroup);

export const scorpio = new WesternZodiacType("Scorpio", 308);
export const sagittarius = new WesternZodiacType("Sagittarius", 312);
export const capricorn = new WesternZodiacType("Capricorn", 313);
export const aquarius = new WesternZodiacType("Aquarius", 314);
export const pisces = new WesternZodiacType("Pisces", 315);
export const aries = new WesternZodiacType("Aries", 316);
export const taurus = new WesternZodiacType("Taurus", 317);
export const gemini = new WesternZodiacType("Gemini", 318);
export const cancer = new WesternZodiacType("Cancer", 319);
export const leo = new WesternZodiacType("Leo", 320);
export const virgo = new WesternZodiacType("Virgo", 321);
export const libra = new WesternZodiacType("Libra", 322);

export class ChineseZodiacType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([chineseZodiacGroup])
      .addTags(TypeTags.TypeZodiac, TypeTags.TypeZodiacChinese)
      .physical()
      .addHidden(TypeHidden.Inventory);
  }
}

export const chineseZodiacGroup = new Group({ name: "Chinese Zodiacs" }).addParent(normalGroup);

export const dogChineseZodiac = new ChineseZodiacType("Dog Chinese Zodiac", 1271);
export const pigChineseZodiac = new ChineseZodiacType("Pig Chinese Zodiac", 1272);
export const ratChineseZodiac = new ChineseZodiacType("Rat Chinese Zodiac", 1273);
export const oxChineseZodiac = new ChineseZodiacType("Ox Chinese Zodiac", 1274);
export const tigerChineseZodiac = new ChineseZodiacType("Tiger Chinese Zodiac", 1275);
export const rabbitChineseZodiac = new ChineseZodiacType("Rabbit Chinese Zodiac", 1276);
export const dragonChineseZodiac = new ChineseZodiacType("Dragon Chinese Zodiac", 1277);
export const snakeChineseZodiac = new ChineseZodiacType("Snake Chinese Zodiac", 1278);
export const horseChineseZodiac = new ChineseZodiacType("Horse Chinese Zodiac", 1279);
export const goatChineseZodiac = new ChineseZodiacType("Goat Chinese Zodiac", 1280);
export const monkeyChineseZodiac = new ChineseZodiacType("Monkey Chinese Zodiac", 1281);
export const roosterChineseZodiac = new ChineseZodiacType("Rooster Chinese Zodiac", 1282);

export class EgyptianZodiacType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([egyptianZodiacGroup])
      .addTags(TypeTags.TypeZodiac, TypeTags.TypeZodiacEgyptian)
      .virtual()
      .addHidden(TypeHidden.Inventory);
  }
}

export class EgyptianZodiacScatterType extends ScatterType {
  override template(): this {
    super.template();
    return this.setGroup([egyptianZodiacGroup])
      .addTags(TypeTags.TypeZodiac, TypeTags.TypeZodiacEgyptian)
      .standalone()
      .addHidden(TypeHidden.Inventory);
  }
}

export const egyptianZodiacGroup = new Group({ name: "Egyptian Zodiacs" }).addParent(normalGroup);

export const egyptianZodiacScatters = new TypeSet()
  .add(new EgyptianZodiacScatterType("Ankh Artifact", 2763))
  .add(new EgyptianZodiacScatterType("Ouroboros Artifact", 2764))
  .add(new EgyptianZodiacScatterType("Djed Artifact", 2765))
  .add(new EgyptianZodiacScatterType("Scarab Artifact"))
  .add(new EgyptianZodiacScatterType("Eye of Ra Artifact"))
  .add(new EgyptianZodiacScatterType("Shen Artifact"))
  .add(new EgyptianZodiacScatterType("Canopic Jar Artifact", 2769))
  .add(new EgyptianZodiacScatterType("Sesen Artifact", 2771))
  .add(new EgyptianZodiacScatterType("Was Scepter Artifact", 2770))
  .add(new EgyptianZodiacScatterType("Eye of Horus Artifact", 2772))
  .add(new EgyptianZodiacScatterType("Tyet Artifact", 2773))
  .add(new EgyptianZodiacScatterType("Sistrum Artifact", 2774));
export const theNile = new EgyptianZodiacType("The Nile", 2751).setIcon("nile");
export const amonRa = new EgyptianZodiacType("Amon-Ra", 2752);
export const osiris = new EgyptianZodiacType("Osiris", 2753);
export const thoth = new EgyptianZodiacType("Thoth", 2754);
export const horus = new EgyptianZodiacType("Horus", 2755);
export const seth = new EgyptianZodiacType("Seth", 2756);
export const anubis = new EgyptianZodiacType("Anubis", 2757);
export const sekhmet = new EgyptianZodiacType("Sekhmet", 2758);
export const bastet = new EgyptianZodiacType("Bastet", 2760);
export const isis = new EgyptianZodiacType("Isis", 2762);
export const mut = new EgyptianZodiacType("Mut", 2759);
export const geb = new EgyptianZodiacType("Geb", 2761);
