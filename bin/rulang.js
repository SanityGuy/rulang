#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { translate } from "../src/translator.js";

const file = process.argv[2];

if (!file) {
  console.log("Использование: rulang <файл.rul>");
  process.exit(1);
}

let source;
try {
  source = readFileSync(file, "utf8");
} catch (err) {
  if (err.code === "ENOENT") {
    console.error(`Файл не найден: ${file}`);
    process.exit(1);
  }
  console.error(`Не удалось прочитать файл: ${err.message}`);
  process.exit(1);
}

const js = translate(source);

try {
  new Function(js)();
} catch (err) {
  console.error(`Ошибка: ${err.message}`);
  process.exit(1);
}