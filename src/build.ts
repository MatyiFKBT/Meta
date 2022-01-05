import fs from "fs-extra";
import chalk from "chalk";
import glob from "glob";
import { join } from "node:path";
import { promisify } from "node:util";
import { Database } from "./database";
import { Type, TypeSet } from "./common/type";
import { Group } from "./common/group";
import fileSize from "filesize";
import { compareWithOldDB } from "./compare";

function checkType(file: string, type: Type) {
  const relativeFilePath = file.replace(__dirname, "");
  type.file = relativeFilePath;
  if (!type.munzee_id) {
    console.warn(chalk`{gray [{yellow WARN}] ${type.file}: }{gray ${type.name} has no munzee_id}`);
  }
}

async function generate(): Promise<Database> {
  console.info(chalk.gray`Generating...`);
  const path = join(__dirname, "./**/*/*.[tj]s");
  const files = (await promisify(glob)(path)).filter(i => !i.startsWith(join(__dirname, "common")));
  console.info(chalk.gray`Found ${files.length} file${files.length === 1 ? "" : "s"}`);

  const database = new Database();

  for (const file of files.slice().reverse()) {
    const items: unknown[] = Object.values(await import(file));
    for (const item of items) {
      if (item instanceof Type) {
        database.types.add(item);
        checkType(file, item);
      } else if (item instanceof TypeSet) {
        database.types.add(item);
        for (const type of item) {
          checkType(file, type);
        }
      } else if (item instanceof Group) {
        database.groups.add(item);
      }
    }
  }

  console.info(chalk.green`Database generated successfully.`);
  console.info(
    chalk.blue`${database.types.types.length} type${database.types.types.length === 1 ? "" : "s"}`
  );
  console.info(
    chalk.greenBright.bold.italic`${database.types.types.length} types done, ${
      1565 - database.types.types.length
    } types to go!`
  );
  console.info(
    chalk.greenBright.bold.italic`${
      database.types.types.filter(i => !i.groups.some(i => i.seasonal)).length
    } regular types done, ${
      948 - database.types.types.filter(i => !i.groups.some(i => i.seasonal)).length
    } regular types to go!`
  );
  console.info(
    chalk.greenBright.bold.italic`${
      database.types.types.filter(i => i.groups.some(i => i.seasonal)).length
    } seasonal specials done, ${
      617 - database.types.types.filter(i => i.groups.some(i => i.seasonal)).length
    } seasonal specials to go!`
  );
  console.info(
    chalk.blue`${database.groups.groups.length} group${
      database.groups.groups.length === 1 ? "" : "s"
    }`
  );

  console.info(chalk.gray`Resolving references...`);
  database.types.resolveReferences();
  console.info(chalk.green`References resolved successfully.`);

  console.info(chalk.gray`Generating group icons...`);
  database.generateGroupIcons();
  console.info(chalk.green`Group icons generated successfully.`);

  return database;
}

async function output(database: Database): Promise<void> {
  console.info(chalk.gray`\nOutputting...`);

  const outDir = join(__dirname, "../output");
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.ensureDir(outDir);
  await fs.writeFile(join(outDir, "database.json"), JSON.stringify(database.toJSON(), null, 2));
  await fs.writeFile(join(outDir, "database.min.json"), JSON.stringify(database.toJSON()));
  await fs.writeFile(
    join(outDir, "database.compact.json"),
    JSON.stringify(database.toJSON(true), null, 2)
  );
  await fs.writeFile(
    join(outDir, "database.compact.min.json"),
    JSON.stringify(database.toJSON(true))
  );
  await fs.writeFile(join(outDir, "database.czm"), database.toCZM());
  await fs.writeFile(join(outDir, "database.compact.czm"), database.toCZM(true));
  await fs.writeFile(
    join(outDir, "database.types.list.txt"),
    database.types.types
      .map(i => i.name)
      .sort()
      .join("\n")
  );
  await fs.writeFile(
    join(outDir, "database.legacy.json"),
    JSON.stringify(database.toLegacyJSON(), null, 2)
  );
  await fs.writeFile(
    join(outDir, "database.legacy.min.json"),
    JSON.stringify(database.toLegacyJSON())
  );

  console.info(chalk.green`Output generated successfully.`);
  console.info(chalk.blue`Output directory: ${outDir}`);
  console.info(chalk.blue`Files:`);
  const files = await fs.readdir(outDir);
  const filesWithSizes: [string, number][] = [];
  for (const file of files) {
    const stats = await fs.stat(join(outDir, file));
    filesWithSizes.push([file, stats.size]);
  }

  filesWithSizes.sort((a, b) => a[1] - b[1]);

  for (const [file, size] of filesWithSizes) {
    console.info(chalk.blue`  ${file} - ${fileSize(size)}`);
  }

  await compareWithOldDB(database);
}

async function build() {
  const database = await generate();

  await output(database);
}
build();
