/* eslint-disable no-console */

import fs from "node:fs";
import nearley from "nearley";
import grammar from "../src/grammar";

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

console.log("Starting");

parser.feed(fs.readFileSync("tools/grammar-test.cz", "utf8"));
console.log("Done");

fs.writeFileSync("output/test.json", JSON.stringify(parser.results[0], null, 2));
fs.writeFileSync(
  "output/test2.json",
  "[\n  " +
    parser.results
      .slice(0, 10)
      .map(r => JSON.stringify(r))
      .join(",\n  ") +
    "\n]"
);

console.log(parser.results.length);
