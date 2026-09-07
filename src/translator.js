const KEYWORDS = [
  // --- Core Language ---
  ["иначе", "else"], ["если", "if"], ["вывод", "console.log"], ["пусть", "let"],
  ["целое", "parseInt"], ["дробное", "parseFloat"], ["конст", "const"],
  ["функция", "function"], ["вернуть", "return"], ["пока", "while"], ["для", "for"],
  ["прервать", "break"], ["продолжить", "continue"], ["и", "&&"], ["или", "||"],
  ["равно", "==="], ["не равно", "!=="], ["больше равно", ">="], ["меньше равно", "<="],
  ["больше", ">"], ["меньше", "<"], ["истина", "true"], ["ложь", "false"],
  ["пусто", "null"], ["неизвестно", "undefined"], ["попытка", "try"],
  ["поймать", "catch"], ["наконец", "finally"], ["бросить", "throw"],
  ["выбор", "switch"], ["случай", "case"], ["по умолчанию", "default"],
  ["класс", "class"], ["наследует", "extends"], ["конструктор", "constructor"],
  ["новый", "new"], ["требовать", "require"],

  // --- Async / Await & APIs ---
  ["асинх", "async"], ["ждать", "await"], ["Обещание", "Promise"],
  ["тогда", "then"], ["запросить", "fetch"],

  // --- Math & JSON Built-ins ---
  ["Математика", "Math"], ["округлить", "round"], ["пол", "floor"], ["потолок", "ceil"],
  ["случайный", "random"], ["максимум", "max"], ["минимум", "min"], ["степень", "pow"],
  ["ДЖЕЙСОН", "JSON"], ["разобрать", "parse"], ["вСтроку", "stringify"],

  // --- Browser & Window ---
  ["документ", "document"], ["окно", "window"], ["уведомление", "alert"],
  ["запрос", "prompt"], ["подтвердить", "confirm"], ["отложить", "setTimeout"], ["интервал", "setInterval"],

  // --- DOM Selection ---
  ["найтиПоИд", "getElementById"], ["найти", "querySelector"], ["найтиВсе", "querySelectorAll"],

  // --- DOM Manipulation ---
  ["создатьЭлемент", "createElement"], ["вложить", "appendChild"], ["удалитьЭлемент", "remove"], ["клон", "cloneNode"],

  // --- Properties & Attributes ---
  ["содержимоеХТМЛ", "innerHTML"], ["текст", "innerText"], ["значение", "value"],
  ["стиль", "style"], ["списокКлассов", "classList"], ["установитьАтрибут", "setAttribute"], ["получитьАтрибут", "getAttribute"],

  // --- Events ---
  ["добавитьСлушателя", "addEventListener"], ["удалитьСлушателя", "removeEventListener"],

  // --- Arrays / Strings / Objects ---
  ["клик", "click"], ["длина", "length"], ["добавить", "push"], ["карта", "map"],
  ["каждый", "forEach"], ["фильтр", "filter"], ["сортировать", "sort"],
  ["уменьшить", "reduce"], ["включает", "includes"], ["соединить", "join"],
  ["разделить", "split"], ["заменить", "replace"], ["обрезать", "trim"], ["индекс", "indexOf"],
  ["процесс", "process"], ["аргв", "argv"], ["вырезать", "slice"]
];

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const SORTED_KEYWORDS = [...KEYWORDS].sort(([a], [b]) => b.length - a.length);

const KEYWORD_REGEX = new RegExp(
  `(?<![A-Za-z0-9_А-Яа-яёЁ])(?:${SORTED_KEYWORDS.map(([from]) => escapeRegex(from)).join("|")})(?![A-Za-z0-9_А-Яа-яёЁ])`,
  "gu"
);

function replaceKeywords(text) {
  return text.replace(KEYWORD_REGEX, (match) => {
    const keyword = SORTED_KEYWORDS.find(([from]) => from === match);
    return keyword ? keyword[1] : match;
  });
}

export function translate(code) {
  let output = "";
  let buffer = "";
  let i = 0;
  let state = "code";

  function flushBuffer() {
    if (buffer.length > 0) {
      output += replaceKeywords(buffer);
      buffer = "";
    }
  }

  while (i < code.length) {
    const char = code[i];
    const next = code[i + 1];

    if (state === "code") {
      if (char === '"' || char === "'" || char === "`") {
        flushBuffer();
        state = char;
        output += char;
        i++;
        continue;
      }
      if (char === "/" && next === "/") {
        flushBuffer();
        state = "line-comment";
        output += "//";
        i += 2;
        continue;
      }
      if (char === "/" && next === "*") {
        flushBuffer();
        state = "block-comment";
        output += "/*";
        i += 2;
        continue;
      }
      buffer += char;
      i++;
      continue;
    }

    if (state === '"' || state === "'" || state === "`") {
      output += char;
      if (char === "\\") {
        if (next !== undefined) {
          output += next;
          i += 2;
          continue;
        }
      }
      if (char === state) {
        state = "code";
      }
      i++;
      continue;
    }

    if (state === "line-comment") {
      output += char;
      if (char === "\n") state = "code";
      i++;
      continue;
    }

    if (state === "block-comment") {
      output += char;
      if (char === "*" && next === "/") {
        output += "/";
        state = "code";
        i += 2;
        continue;
      }
      i++;
      continue;
    }
  }
  flushBuffer();
  return output;
}