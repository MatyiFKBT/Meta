import { Year2020SeasonalBouncerType, Year2020SeasonalGroup } from "./_index";
import { TypeTags } from "../../../src/items/type";

export const worldLaughterDay2020Group = new Year2020SeasonalGroup({
  name: "World Laughter Day 2020",
  starts: "2020-05-01T10:00:00-05:00",
  ends: "2020-05-17T23:59:00-05:00",
});

export const bisonJoke = new Year2020SeasonalBouncerType("Bison Joke", 2437)
  .addGroup(worldLaughterDay2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const chillyJoke = new Year2020SeasonalBouncerType("Chilly Joke", 2441)
  .addGroup(worldLaughterDay2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const librarianJoke = new Year2020SeasonalBouncerType("Librarian Joke", 2436)
  .addGroup(worldLaughterDay2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const cyclistJoke = new Year2020SeasonalBouncerType("Cyclist Joke", 2442)
  .addGroup(worldLaughterDay2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const pirateJoke = new Year2020SeasonalBouncerType("Pirate Joke", 2435)
  .addGroup(worldLaughterDay2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const dadJoke = new Year2020SeasonalBouncerType("Dad Joke", 2439)
  .addGroup(worldLaughterDay2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const unicornJoke = new Year2020SeasonalBouncerType("Unicorn Joke", 2444)
  .addGroup(worldLaughterDay2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const grapeJoke = new Year2020SeasonalBouncerType("Grape Joke", 2440)
  .addGroup(worldLaughterDay2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const ninjaJoke = new Year2020SeasonalBouncerType("Ninja Joke", 2443)
  .addGroup(worldLaughterDay2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
export const fishyJoke = new Year2020SeasonalBouncerType("Fishy Joke", 2438)
  .addGroup(worldLaughterDay2020Group)
  .addBouncerLandsOn(type => type.hasTags(TypeTags.TypeVirtual));
