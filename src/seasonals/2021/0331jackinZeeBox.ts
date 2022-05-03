import { Year2021SeasonalPOBType, Year2021SeasonalGroup } from "./_index";
import { TypeHidden } from "../../common/type";

export class JackInZeeBoxType extends Year2021SeasonalPOBType {
  template(): this {
    super.template();
    return this.setIcon("jackinzeebox-" + this.icons[0]);
  }
}

export const jackinZeeBoxGroup = new Year2021SeasonalGroup({
  name: "Jack in Zee Box",
  starts: "2021-03-31T12:00:00-05:00",
  ends: "2021-05-11T23:59:00-05:00",
});

export const jackinZeeBox = new Year2021SeasonalPOBType("Jack in Zee Box", 2963).addGroup(
  jackinZeeBoxGroup
);
export const applejackinZeeBox = new JackInZeeBoxType("Applejack in the Box", 2967)
  .addGroup(jackinZeeBoxGroup)
  .addHidden(TypeHidden.Bouncers);
export const blastinZeeBox = new JackInZeeBoxType("Blast in the Box", 2968)
  .addGroup(jackinZeeBoxGroup)
  .addHidden(TypeHidden.Bouncers);
export const boxingGlove = new JackInZeeBoxType("Boxing Glove", 2969)
  .addGroup(jackinZeeBoxGroup)
  .addHidden(TypeHidden.Bouncers);
export const firePrankster = new JackInZeeBoxType("Fire Prankster", 2965)
  .addGroup(jackinZeeBoxGroup)
  .addHidden(TypeHidden.Bouncers);
export const highFive = new JackInZeeBoxType("High Five", 2970)
  .addGroup(jackinZeeBoxGroup)
  .addHidden(TypeHidden.Bouncers);
export const icePrankster = new JackInZeeBoxType("Ice Prankster", 2966)
  .addGroup(jackinZeeBoxGroup)
  .addHidden(TypeHidden.Bouncers);
export const prankster = new JackInZeeBoxType("Prankster", 2964)
  .addGroup(jackinZeeBoxGroup)
  .addHidden(TypeHidden.Bouncers);
export const rOBblehead = new JackInZeeBoxType("ROBblehead", 2971)
  .addGroup(jackinZeeBoxGroup)
  .addHidden(TypeHidden.Bouncers);
export const unicorn = new JackInZeeBoxType("Jack in Zee Box Unicorn", 2973)
  .setIcon("jackinzeebox-unicorn")
  .addGroup(jackinZeeBoxGroup)
  .addHidden(TypeHidden.Bouncers);
export const zackinTheBox = new JackInZeeBoxType("Zack in The Box", 2972)
  .addGroup(jackinZeeBoxGroup)
  .addHidden(TypeHidden.Bouncers);
