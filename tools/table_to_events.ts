import fs from "fs";
const data = fs
  .readFileSync("input.tsv", "utf8")
  .trim()
  .split("\n")
  .map(i => i.split("\t"));

let output = "";

for (const line of data) {
  let varName = line[1]
    .split(/\s/g)
    .map((i, n) => i[0][n === 0 ? "toLowerCase" : "toUpperCase"]() + i.slice(1).toLowerCase())
    .join("")
    .replace(/[^a-zA-Z0-9]/g, "");
  if (varName.match(/^[0-9]/)) varName = "n" + varName;
  output += `export const ${varName} = new EventType(${JSON.stringify(line[1])}, ${JSON.stringify(
    Number(line[2])
  )})${
    line[0] !== line[1].toLowerCase().replace(/\s/g, "")
      ? `.setIcon(${JSON.stringify(line[0])})`
      : ""
  };\n`;
}

fs.writeFileSync("output.ts", output);
