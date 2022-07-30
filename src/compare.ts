/* eslint-disable no-console */

import fetch from "node-fetch";
import fs from "node:fs";
import path from "node:path";
import fjss from "fast-json-stable-stringify";
import chalk from "chalk";
import { TypeTags, TypeHidden } from "./items/typeTags";

function mutateForBetterStringify(
  typesName: Map<number, string>,
  groupsName: Map<number, string>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: any
) {
  // IDs aren't stable, so we need to resolve IDs to names, which should be stable.
  const clone = JSON.parse(JSON.stringify(obj));
  if (clone.meta?.bouncer?.landsOn) {
    clone.meta.bouncer.landsOn = clone.meta.bouncer.landsOn
      .map((x: number) => typesName.get(x))
      .sort();
  }
  if (clone.meta?.scatterer?.types) {
    clone.meta.scatterer.types = clone.meta.scatterer.types
      .map((x: number) => typesName.get(x))
      .sort();
  }
  if (clone.meta?.bouncerHost?.types) {
    clone.meta.bouncerHost.types = clone.meta.bouncerHost.types
      .map((x: number) => typesName.get(x))
      .sort();
  }
  if (clone.groups) {
    clone.groups = clone.groups.map((x: number) => groupsName.get(x)).sort();
  }
  if (clone.meta?.evolution?.base) {
    clone.meta.evolution.base = typesName.get(clone.meta.evolution.base);
  }
  if (clone.tags) {
    clone.tags = clone.tags.map((x: number) => TypeTags[x]).sort();
  }
  if (clone.hidden) {
    clone.hidden = clone.hidden.map((x: number) => TypeHidden[x]).sort();
  }
  delete clone.id;
  return clone;
}

(async function () {
  const newDB = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../output/database.json"), "utf8")
  );
  let oldDB = null;
  for (let i = 0; i < 10; i++) {
    try {
      oldDB = JSON.parse(
        await fetch(
          "https://github.com/CuppaZee/Meta/releases/download/prerelease/database.json"
        ).then(res => res.text())
      );
      break;
    } catch (e) {
      console.log(chalk.red(`Failed to fetch old database, retrying...`));
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  if (!oldDB) throw new Error("Failed to fetch old database");

  const oldTypesName = new Map<number, string>();
  const oldGroupsName = new Map<number, string>();
  for (const type of oldDB.types) {
    oldTypesName.set(type.id, type.name);
  }
  for (const group of oldDB.groups) {
    oldGroupsName.set(group.id, group.name);
  }

  const oldDBTypes = new Map<string, string>();
  for (const type of oldDB.types) {
    oldDBTypes.set(type.name, fjss(mutateForBetterStringify(oldTypesName, oldGroupsName, type)));
  }

  const newTypesName = new Map<number, string>();
  const newGroupsName = new Map<number, string>();
  for (const type of newDB.types) {
    newTypesName.set(type.id, type.name);
  }
  for (const group of newDB.groups) {
    newGroupsName.set(group.id, group.name);
  }

  const newDBTypes = new Map<string, string>();
  for (const type of newDB.types) {
    newDBTypes.set(type.name, fjss(mutateForBetterStringify(newTypesName, newGroupsName, type)));
  }

  let changed = false;

  for (const type of oldDBTypes.keys()) {
    if (!newDBTypes.has(type)) {
      console.log(chalk`{gray [}{red Removed}{gray ]} ${type}`);
      changed = true;
    }
  }

  for (const type of newDBTypes.keys()) {
    if (!oldDBTypes.has(type)) {
      console.log(chalk`{gray [}{green Added}{gray ]} ${type}`);
      console.log(chalk.italic.gray`${newDBTypes.get(type)}`);
      changed = true;
    } else if (oldDBTypes.get(type) !== newDBTypes.get(type)) {
      console.log(chalk`{gray [}{blue Edited}{gray ]} ${type}`);
      console.log(chalk.gray.italic`Previously:\n${oldDBTypes.get(type)}`);
      console.log(chalk.gray.italic`Now: \n${newDBTypes.get(type)}`);
      changed = true;
    }
  }
  if (!changed) {
    console.log(chalk.green`No changes detected`);
  }
})();
