import fs from "fs-extra";
import chalk from "chalk";
import { join } from "path";
import { Database } from "./database";
import { TypeHidden, TypeTags } from "./common/type";
import fjss from "fast-json-stable-stringify";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function omitCompareTypeDetails(types: any[]) {
  return types.map(i => {
    const { category: _, id: _2, group: _3, ...rest } = i;
    if (rest.meta?.scatter_duration) delete rest.meta.scatter_duration;
    if (rest.meta?.bouncer_duration) delete rest.meta.bouncer_duration;
    if (rest.meta?.destination_room_of) rest.meta.destination_room_of = true;
    if (rest.meta?.evolution_base) rest.meta.evolution_base = true;
    if (rest.meta?.bouncer_lands_on) {
      let count = rest.meta.bouncer_lands_on.length;
      if (rest.meta.bouncer_lands_on.includes(":virtual")) {
        count += 61;
      }
      if (count === 0) {
        delete rest.meta.bouncer_lands_on;
      } else {
        rest.meta.bouncer_lands_on = count;
      }
      delete rest.meta.bouncer_lands_on;
    }
    if (rest.meta?.host_types) rest.meta.host_types = rest.meta.host_types.length;
    rest.tags = [...rest.tags].sort((a, b) => a - b).map(i => TypeTags[i]);
    rest.hidden = [...rest.hidden].sort((a, b) => a - b).map(i => TypeHidden[i]);
    delete rest.hidden;
    delete rest.munzee_id;
    if (rest.meta?.scatterer_types) delete rest.meta.scatterer_types;
    if (rest.meta && Object.keys(rest.meta).length === 0) delete rest.meta;
    return rest;
  });
}

export async function compareWithOldDB(database: Database) {
  if (!fs.existsSync(join(__dirname, "../olddb.json"))) {
    return;
  }

  console.info(chalk.gray`\nComparing with Legacy Database...`);

  const outDir = join(__dirname, "../compareOutput");
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.ensureDir(outDir);

  const newLegacyCmp = omitCompareTypeDetails(
    JSON.parse(fjss(database.toLegacyJSONSorted().types))
  );
  const oldLegacyCmp = omitCompareTypeDetails(JSON.parse(fjss(require("../olddb.json").types)));

  await fs.writeFile(join(outDir, "newdb.compare.json"), JSON.stringify(newLegacyCmp, null, 2));
  await fs.writeFile(join(outDir, "olddb.compare.json"), JSON.stringify(oldLegacyCmp, null, 2));
  for (const item of newLegacyCmp) {
    const old = oldLegacyCmp.find(i => i.name === item.name);
    if (!old) {
      console.info(chalk.redBright`New type ${item.name}`);
    } else {
      if (old.icons.join("|") !== item.icons.join("|")) {
        console.info(
          chalk.redBright`Icon mismatch for ${item.name}, was {white ${old.icons.join(
            "|"
          )}}, now {gray ${item.icons.join("|")}}`
        );
      }
    }
  }
  for (const old of oldLegacyCmp) {
    const item = newLegacyCmp.find(i => i.name === old.name);
    if (!item) {
      console.info(chalk.redBright`Missing type ${old.name} in new DB`);
    }
  }

  const newLegacyCmpSet = new Set(newLegacyCmp.map(i => fjss(i)));
  const oldLegacyCmpSet = new Set(oldLegacyCmp.map(i => fjss(i)));
  const newLegacyCmpStripped = [];
  const oldLegacyCmpStripped = [];
  for (const item of newLegacyCmp) {
    if (!oldLegacyCmpSet.has(fjss(item))) {
      newLegacyCmpStripped.push(item);
    }
  }
  for (const item of oldLegacyCmp) {
    if (!newLegacyCmpSet.has(fjss(item))) {
      oldLegacyCmpStripped.push(item);
    }
  }

  await fs.writeFile(
    join(outDir, "newdb.compare.stripped.json"),
    JSON.stringify(newLegacyCmpStripped, null, 2)
  );
  await fs.writeFile(
    join(outDir, "olddb.compare.stripped.json"),
    JSON.stringify(oldLegacyCmpStripped, null, 2)
  );
}
