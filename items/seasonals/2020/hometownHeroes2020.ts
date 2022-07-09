import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";
import { TypeTags } from "../../../src/items/type";
import { skyland } from "../../normal/destination";
import { airMystery, electricMystery } from "../../normal/mystery";
import { virtual } from "../../normal/virtual";
import { amethyst, sapphire, citrine, onyx } from "../../normal/jewels";

export const hometownHeroes2020Group = new Year2020SeasonalGroup({
  name: "Hometown Heroes 2020",
  starts: "2020-05-18T12:00:00-05:00",
  ends: "2020-06-07T23:59:00-05:00",
});

export const staySafe = new Year2020SeasonalBouncerType("Stay Safe", 2482)
  .addGroup(hometownHeroes2020Group)
  .addBouncerLandsOn(virtual);
export const groceryHero = new Year2020SeasonalBouncerType("Grocery Hero", 2485)
  .addGroup(hometownHeroes2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const firstResponderHero = new Year2020SeasonalBouncerType("First Responder Hero", 2487)
  .addGroup(hometownHeroes2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const healthcareHero = new Year2020SeasonalBouncerType("Healthcare Hero", 2486)
  .addGroup(hometownHeroes2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const educationHero = new Year2020SeasonalBouncerType("Education Hero", 2484)
  .addGroup(hometownHeroes2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const deliveryHero = new Year2020SeasonalBouncerType("Delivery Hero", 2483)
  .addGroup(hometownHeroes2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const groceryHeroMask = new Year2020SeasonalBouncerType("Grocery Hero Mask", 2490)
  .addGroup(hometownHeroes2020Group)
  .addBouncerLandsOn(amethyst, sapphire, airMystery, citrine, onyx, electricMystery, skyland);
export const firstResponderHeroMask = new Year2020SeasonalBouncerType(
  "First Responder Hero Mask",
  2492
)
  .addGroup(hometownHeroes2020Group)
  .addBouncerLandsOn(amethyst, sapphire, airMystery, citrine, onyx, electricMystery, skyland);
export const healthHeroMask = new Year2020SeasonalBouncerType("Health Hero Mask", 2491)
  .addGroup(hometownHeroes2020Group)
  .addBouncerLandsOn(amethyst, sapphire, airMystery, citrine, onyx, electricMystery, skyland);
export const educationHeroMask = new Year2020SeasonalBouncerType("Education Hero Mask", 2489)
  .addGroup(hometownHeroes2020Group)
  .addBouncerLandsOn(amethyst, sapphire, airMystery, citrine, onyx, electricMystery, skyland);
export const deliveryHeroMask = new Year2020SeasonalBouncerType("Delivery Hero Mask", 2488)
  .addGroup(hometownHeroes2020Group)
  .addBouncerLandsOn(amethyst, sapphire, airMystery, citrine, onyx, electricMystery, skyland);
