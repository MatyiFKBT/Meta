/* eslint-disable no-console */

import fetch from "node-fetch";
import fs from "node:fs";
import path from "node:path";
import fjss from "fast-json-stable-stringify";
import chalk from "chalk";

(async function () {
  const newDB = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../output/database.json"), "utf8")
  );
  const oldDB = JSON.parse(
    await fetch("https://github.com/CuppaZee/Meta/releases/download/prerelease/database.json").then(
      res => res.text()
    )
  );

  const newDBTypes = new Map<string, string>();
  const oldDBTypes = new Map<string, string>();

  for (const type of newDB.types) {
    newDBTypes.set(type.name, fjss(type));
  }

  for (const type of oldDB.types) {
    oldDBTypes.set(type.name, fjss(type));
  }

  for (const type of oldDBTypes.keys()) {
    if (!newDBTypes.has(type)) {
      console.log(chalk`{gray [}{red Removed}{gray ]} ${type}`);
    }
  }

  for (const type of newDBTypes.keys()) {
    if (!oldDBTypes.has(type)) {
      console.log(chalk`{gray [}{green Added}{gray ]} ${type}`);
      console.log(chalk.italic.gray`${newDBTypes.get(type)}`);
    } else if (oldDBTypes.get(type) !== newDBTypes.get(type)) {
      console.log(chalk`{gray [}{blue Edited}{gray ]} ${type}`);
      console.log(chalk.gray.italic`Previously:\n${oldDBTypes.get(type)}`);
      console.log(chalk.gray.italic`Now: \n${newDBTypes.get(type)}`);
    }
  }
})();
