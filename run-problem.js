const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const args = process.argv.slice(2);
const problemName = args.find((arg) => !arg.startsWith("--"));
const langArg = args.find((arg) => arg.startsWith("--lang="));
const lang = langArg ? langArg.split("=")[1] : null;

if (!problemName) {
  console.error(
    "Provide a problem folder name like: npm run solution 001-two-sum -- --lang=ts",
  );
  process.exit(1);
}

if (!lang) {
  console.error(
    "You should provide a language. Ex: --lang=ts, --lang=js, --lang=py",
  );
  process.exit(1);
}

const basePaths = ["solutions/easy/", "solutions/medium/", "solutions/hard/"];

let found = false;

for (const base of basePaths) {
  const dir = path.join(__dirname, base, problemName);
  const filePath = path.join(dir, `solution.${lang}`);

  if (fs.existsSync(filePath)) {
    console.log(`Executing: ${filePath}`);

    switch (lang) {
      case "ts":
        require("ts-node").register();
        require(filePath);
        break;
      case "js":
        require(filePath);
        break;
      case "py":
        spawn("python3", [filePath], { stdio: "inherit" });
        break;
      case "java":
        console.log("Java support is not implement yet.");
        break;
      default:
        console.error(`Language not supported: ${lang}`);
        break;
    }
  }

  found = true;
  break;
}

if (!found) {
  console.error(`No solutions found for problem: ${problemName}`);
  process.exit(1);
}
