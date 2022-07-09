import { Group } from "../../src/items/group";
import { TypeHidden, TypeTags } from "../../src/items/type";
import { cardsGroup, CardType } from "./index";

export const Year2020HCCCCardGroup = new Group({ name: "2020 HCCC Cards" }).addParent(cardsGroup);

export class Year2020HCCCCardType extends CardType {
  override template(): this {
    super.template();
    return this.addHidden(TypeHidden.Inventory)
      .setGroup([Year2020HCCCCardGroup])
      .addTag(TypeTags.Card2020HCCC);
  }
}

export const holidayMailbox = new Year2020HCCCCardType("Holiday Mailbox", 2646);
export const santaLetterHolidayCard = new Year2020HCCCCardType("Santa Letter Holiday Card", 2659);
export const stampHolidayCard = new Year2020HCCCCardType("Stamp Holiday Card", 2660);
export const snowflakeHolidayCard = new Year2020HCCCCardType("Snowflake Holiday Card", 2661);
export const treeCarHolidayCard = new Year2020HCCCCardType("Tree Car Holiday Card", 2662);
export const snowmanHolidayCard = new Year2020HCCCCardType("Snowman Holiday Card", 2663);
export const candyCaneHolidayCard = new Year2020HCCCCardType("Candy Cane Holiday Card", 2664);
export const ornamentHolidayCard = new Year2020HCCCCardType("Ornament Holiday Card", 2665);
export const coalHolidayCard = new Year2020HCCCCardType("Coal Holiday Card", 2666);
export const pickleHolidayCard = new Year2020HCCCCardType("Pickle Holiday Card", 2667);
export const mistletoeHolidayCard = new Year2020HCCCCardType("Mistletoe Holiday Card", 2668);
export const scarfHolidayCard = new Year2020HCCCCardType("Scarf Holiday Card", 2669);
export const lightHolidayCard = new Year2020HCCCCardType("Light Holiday Card", 2670);
export const gingerbreadManHolidayCard = new Year2020HCCCCardType(
  "Gingerbread Man Holiday Card",
  2671
);
export const treeHolidayCard = new Year2020HCCCCardType("Tree Holiday Card", 2672);
export const reindeerHolidayCard = new Year2020HCCCCardType("Reindeer Holiday Card", 2673);
export const jumperHolidayCard = new Year2020HCCCCardType("Jumper Holiday Card", 2674);
export const sleighHolidayCard = new Year2020HCCCCardType("Sleigh Holiday Card", 2675);
export const hanukkahHolidayCard = new Year2020HCCCCardType("Hanukkah Holiday Card", 2676);
export const silverBellHolidayCard = new Year2020HCCCCardType("Silver Bell Holiday Card", 2677);
export const snowGlobeHolidayCard = new Year2020HCCCCardType("Snow Globe Holiday Card", 2678);
export const drummerBoyHolidayCard = new Year2020HCCCCardType("Drummer Boy Holiday Card", 2679);
export const tinSoldierHolidayCard = new Year2020HCCCCardType("Tin Soldier Holiday Card", 2680);
export const elfHolidayCard = new Year2020HCCCCardType("Elf Holiday Card", 2681);
export const stockingHolidayCard = new Year2020HCCCCardType("Stocking Holiday Card", 2682);
export const presentHolidayCard = new Year2020HCCCCardType("Present Holiday Card", 2683);
export const boxingDayHolidayCard = new Year2020HCCCCardType("Boxing Day Holiday Card", 2684);
export const partyHornHolidayCard = new Year2020HCCCCardType("Party Horn Holiday Card", 2685);
export const babyNewYearHolidayCard = new Year2020HCCCCardType("Baby New Year Holiday Card", 2686);
export const cheersHolidayCard = new Year2020HCCCCardType("Cheers Holiday Card", 2687);
export const calendarHolidayCard = new Year2020HCCCCardType("Calendar Holiday Card", 2688);
export const fireworksHolidayCard = new Year2020HCCCCardType("Fireworks Holiday Card", 2689);
