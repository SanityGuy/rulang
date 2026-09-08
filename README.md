# 🇷🇺 RuLang

> JavaScript, but Russian.

**RuLang (Руланг)** is a lightweight programming language that translates Russian syntax into executable JavaScript.

RuLang is designed to keep the familiar structure and capabilities of JavaScript while replacing common JavaScript keywords and APIs with Russian equivalents.

For example:

```ru
пусть имя = "Мир";

если (имя равно "Мир") {
    вывод("Привет, " + имя + "!");
}
```

is translated into:

```js
let имя = "Мир";

if (имя === "Мир") {
    console.log("Привет, " + имя + "!");
}
```

The resulting JavaScript can run anywhere JavaScript can run, including Node.js and web browsers.

---

# ✨ Features

* 🇷🇺 Russian syntax for JavaScript
* 🔤 Full Cyrillic identifier support
* 🖥️ Node.js / CLI support
* 🌐 Browser and website support
* ⚡ Lightweight source-to-source translation
* 🧩 Compatible with standard JavaScript syntax
* 📦 Can use JavaScript APIs
* 🧮 Russian aliases for common `Math` functions
* 🌐 Russian aliases for common browser APIs
* 🔄 Preserves strings and comments during translation
* 🟨 No custom runtime required

---

# 💡 Inspiration

RuLang was inspired by [JawaScript](https://github.com/arwildo/jawascript), created by [Arwildo](https://github.com/arwildo).

JawaScript brings Javanese syntax to JavaScript.

RuLang follows a similar concept by adapting JavaScript syntax for Russian while providing additional browser and CLI-oriented functionality.

---

# 🚀 Installation

Install RuLang globally with npm:

```bash
npm install -g rulang
```

Or install it locally inside a project:

```bash
npm install rulang
```

---

# 🖥️ CLI Usage

RuLang programs use the `.ru` file extension.

For example:

```text
hello.ru
```

with:

```ru
вывод("Привет, мир!");
```

can be translated and executed through the RuLang CLI.

The intended workflow is:

```bash
rulang hello.ru
```

For a project containing multiple examples:

```bash
rulang examples/noderu/hello.ru
```

The CLI translates the RuLang source into JavaScript and executes the resulting JavaScript using the JavaScript runtime.

> CLI commands may change as the RuLang toolchain develops.

---

# 📁 Examples

RuLang includes several examples:

```text
examples/
├── noderu/
│   ├── hello.ru
│   └── calculator.ru
│
└── web/
    ├── app.ru
    └── index.html
```

---

# 👋 Node.js Example

## `examples/noderu/hello.ru`

```ru
вывод("Привет, мир!");
вывод("Добро пожаловать в RuLang!");
```

Run it with:

```bash
rulang examples/noderu/hello.ru
```

Expected output:

```text
Привет, мир!
Добро пожаловать в RuLang!
```

---

# 🧮 Calculator Example

## `examples/noderu/calculator.ru`

```ru
пусть а = 25;
пусть б = 5;

вывод("=== КАЛЬКУЛЯТОР ===");

вывод("Первое число: " + а);
вывод("Второе число: " + б);

вывод("-------------------");

вывод("Сложение:       " + (а + б));
вывод("Вычитание:      " + (а - б));
вывод("Умножение:      " + (а * б));
вывод("Деление:        " + (а / б));
вывод("Остаток:        " + (а % б));
вывод("Степень:        " + степень(а, б));
```

Run it with:

```bash
rulang examples/noderu/calculator.ru
```

Example output:

```text
=== КАЛЬКУЛЯТОР ===
Первое число: 25
Второе число: 5
-------------------
Сложение:       30
Вычитание:      20
Умножение:      125
Деление:        5
Остаток:        0
Степень:        9765625
```

---

# 🌐 Web Example

RuLang can also be used to create browser applications.

The example website is located at:

```text
examples/web/
├── app.ru
└── index.html
```

## Important

Browsers **cannot execute `.ru` files directly**.

A browser understands JavaScript, HTML, and CSS, but it does not know how to interpret RuLang.

Therefore, the recommended workflow is:

```text
app.ru
   ↓
RuLang translator
   ↓
app.js
   ↓
Browser
```

Once `app.ru` has been translated into JavaScript, the browser does not need `translator.js`.

This means a production website can simply contain:

```html
<script src="./app.js"></script>
```

with no RuLang runtime required in the browser.

---

# 🔄 Runtime Browser Translation

It is also possible to translate RuLang inside the browser.

This is useful for:

* Online playgrounds
* REPLs
* Educational websites
* Development tools
* Interactive RuLang editors

Example:

```html
<script type="module">

import { translate } from "../../src/translator.js";

const russianCode = `
    пусть х = 10;
    пусть у = 20;

    вывод(х + у);
`;

const javascript = translate(russianCode);

new Function(javascript)();

</script>
```

This approach requires the translator to be available to the browser.

For normal production websites, pre-translating `.ru` into `.js` is recommended instead.

---

# 🌐 Web Example Structure

The included web example demonstrates a website using RuLang together with normal JavaScript.

```text
examples/web/
├── app.ru
└── index.html
```

`app.ru` contains the RuLang application logic.

`index.html` contains the website itself and can use both:

* External JavaScript
* Inline JavaScript
* Translated RuLang JavaScript

For example:

```html
<!DOCTYPE html>

<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>RuLang Web Example</title>
</head>

<body>

    <h1 id="заголовок">Привет из RuLang!</h1>

    <button id="кнопка">
        Нажми меня
    </button>

    <!-- External JavaScript -->
    <script src="./external.js"></script>

    <!-- Translated RuLang -->
    <script src="./app.js"></script>

    <!-- Inline JavaScript -->
    <script>
        console.log("Обычный JavaScript тоже работает!");
    </script>

</body>

</html>
```

RuLang does not replace JavaScript.

It works alongside it.

---

# 📖 Basic Syntax

RuLang intentionally keeps JavaScript's syntax structure.

## Variables

JavaScript:

```js
let имя = "Souyan";
const число = 10;
```

RuLang:

```ru
пусть имя = "Souyan";
конст число = 10;
```

---

# 🔀 Conditions

```ru
пусть число = 15;

если (число больше 10) {
    вывод("Число больше 10");
} иначе {
    вывод("Число меньше или равно 10");
}
```

---

# 🔁 Loops

## `while`

```ru
пусть счётчик = 0;

пока (счётчик меньше 5) {
    вывод(счётчик);
    счётчик++;
}
```

## `for`

```ru
для (пусть i = 0; i меньше 5; i++) {
    вывод(i);
}
```

---

# 🧩 Functions

```ru
функция сложить(а, б) {
    вернуть а + б;
}

пусть результат = сложить(10, 20);

вывод(результат);
```

---

# 🏗️ Classes

```ru
класс Пользователь {

    конструктор(имя) {
        this.имя = имя;
    }

    приветствие() {
        вернуть "Привет, " + this.имя + "!";
    }
}

пусть пользователь = новый Пользователь("Souyan");

вывод(пользователь.приветствие());
```

---

# ⚡ Async / Await

RuLang supports Russian aliases for JavaScript asynchronous functionality.

```ru
асинх функция получитьДанные() {

    пусть ответ = ждать запросить(
        "https://example.com/api/data"
    );

    пусть данные = ждать ответ.json();

    вернуть данные;
}
```

---

# 📦 Arrays

JavaScript arrays can be used normally.

```ru
пусть числа = [1, 2, 3, 4, 5];

вывод(числа.длина);

числа.добавить(6);

вывод(числа);
```

---

# 🧮 Math

RuLang provides Russian aliases for common JavaScript `Math` functions.

```ru
пусть число = 10;

вывод(Математика.random());
вывод(округлить(4.7));
вывод(пол(4.7));
вывод(потолок(4.2));
вывод(максимум(10, 20));
вывод(минимум(10, 20));
вывод(степень(2, 10));
```

Common aliases:

| RuLang       | JavaScript |
| ------------ | ---------- |
| `Математика` | `Math`     |
| `округлить`  | `round`    |
| `пол`        | `floor`    |
| `потолок`    | `ceil`     |
| `случайный`  | `random`   |
| `максимум`   | `max`      |
| `минимум`    | `min`      |
| `степень`    | `pow`      |

---

# 📋 Keyword Reference

| RuLang         | JavaScript    |   |   |
| -------------- | ------------- | - | - |
| `пусть`        | `let`         |   |   |
| `конст`        | `const`       |   |   |
| `если`         | `if`          |   |   |
| `иначе`        | `else`        |   |   |
| `вывод`        | `console.log` |   |   |
| `функция`      | `function`    |   |   |
| `вернуть`      | `return`      |   |   |
| `пока`         | `while`       |   |   |
| `для`          | `for`         |   |   |
| `прервать`     | `break`       |   |   |
| `продолжить`   | `continue`    |   |   |
| `и`            | `&&`          |   |   |
| `или`          | `             |   | ` |
| `равно`        | `===`         |   |   |
| `не равно`     | `!==`         |   |   |
| `больше`       | `>`           |   |   |
| `меньше`       | `<`           |   |   |
| `больше равно` | `>=`          |   |   |
| `меньше равно` | `<=`          |   |   |
| `истина`       | `true`        |   |   |
| `ложь`         | `false`       |   |   |
| `пусто`        | `null`        |   |   |
| `неизвестно`   | `undefined`   |   |   |
| `попытка`      | `try`         |   |   |
| `поймать`      | `catch`       |   |   |
| `наконец`      | `finally`     |   |   |
| `бросить`      | `throw`       |   |   |
| `выбор`        | `switch`      |   |   |
| `случай`       | `case`        |   |   |
| `по умолчанию` | `default`     |   |   |
| `класс`        | `class`       |   |   |
| `наследует`    | `extends`     |   |   |
| `конструктор`  | `constructor` |   |   |
| `новый`        | `new`         |   |   |
| `требовать`    | `require`     |   |   |
| `асинх`        | `async`       |   |   |
| `ждать`        | `await`       |   |   |
| `Обещание`     | `Promise`     |   |   |
| `тогда`        | `then`        |   |   |
| `запросить`    | `fetch`       |   |   |

---

# 🌐 Browser API Reference

RuLang also provides Russian aliases for common browser APIs.

| RuLang              | JavaScript            |
| ------------------- | --------------------- |
| `документ`          | `document`            |
| `окно`              | `window`              |
| `уведомление`       | `alert`               |
| `запрос`            | `prompt`              |
| `подтвердить`       | `confirm`             |
| `отложить`          | `setTimeout`          |
| `интервал`          | `setInterval`         |
| `найтиПоИд`         | `getElementById`      |
| `найти`             | `querySelector`       |
| `найтиВсе`          | `querySelectorAll`    |
| `создатьЭлемент`    | `createElement`       |
| `вложить`           | `appendChild`         |
| `удалитьЭлемент`    | `remove`              |
| `содержимоеХТМЛ`    | `innerHTML`           |
| `текст`             | `innerText`           |
| `значение`          | `value`               |
| `стиль`             | `style`               |
| `списокКлассов`     | `classList`           |
| `установитьАтрибут` | `setAttribute`        |
| `получитьАтрибут`   | `getAttribute`        |
| `добавитьСлушателя` | `addEventListener`    |
| `удалитьСлушателя`  | `removeEventListener` |

---

# 📦 Array & String Reference

| RuLang        | JavaScript |
| ------------- | ---------- |
| `длина`       | `length`   |
| `добавить`    | `push`     |
| `карта`       | `map`      |
| `каждый`      | `forEach`  |
| `фильтр`      | `filter`   |
| `сортировать` | `sort`     |
| `уменьшить`   | `reduce`   |
| `включает`    | `includes` |
| `соединить`   | `join`     |
| `разделить`   | `split`    |
| `заменить`    | `replace`  |
| `обрезать`    | `trim`     |
| `индекс`      | `indexOf`  |
| `вырезать`    | `slice`    |

---

# 🔧 How Translation Works

RuLang currently uses a lightweight source-to-source translator.

The translator:

1. Reads RuLang source code.
2. Detects Russian keywords.
3. Replaces them with their JavaScript equivalents.
4. Preserves strings.
5. Preserves template literals.
6. Preserves line comments.
7. Preserves block comments.
8. Returns JavaScript source code.

For example:

```ru
пусть число = 10;

если (число больше 5) {
    вывод("Большое число!");
}
```

becomes approximately:

```js
let число = 10;

if (число > 5) {
    console.log("Большое число!");
}
```

---

# 🛡️ Strings and Comments

RuLang does not replace keywords inside strings.

For example:

```ru
пусть сообщение = "если это текст, его менять не нужно";

вывод(сообщение);
```

The string remains unchanged.

Comments are also preserved:

```ru
// если это комментарий, он останется комментарием

пусть число = 10;
```

This allows RuLang source code to contain normal text without accidentally translating words inside it.

---

# 🟨 JavaScript Compatibility

RuLang is intentionally close to JavaScript.

You can still use normal JavaScript syntax where a Russian alias does not exist.

For example:

```ru
пусть имя = "Souyan";

вывод(имя.toUpperCase());
```

RuLang does not attempt to hide JavaScript.

Instead, it adds a Russian syntax layer on top of it.

This means existing JavaScript knowledge remains useful when learning RuLang.

---

# 🖥️ Node.js

RuLang can be used for CLI applications and other Node.js programs.

Example:

```ru
пусть аргументы = процесс.аргументы;

вывод("Аргументы программы:");

аргументы.каждый((аргумент) => {
    вывод(аргумент);
});
```

After translation, the resulting code is standard JavaScript.

---

# 🌐 Websites

RuLang can be used for website logic.

A recommended production workflow is:

```text
RuLang source
     │
     ▼
   rulang
     │
     ▼
JavaScript output
     │
     ▼
   Browser
```

For example:

```text
app.ru
  ↓
app.js
  ↓
index.html
```

Then `index.html` can simply load:

```html
<script src="./app.js"></script>
```

No translator is required in the final browser bundle.

---

# 🧪 Development vs Production

## Development / Playground

Runtime translation:

```text
app.ru
   ↓
Browser
   ↓
translator.js
   ↓
JavaScript
   ↓
Execution
```

Useful for experimentation and playgrounds.

## Production

Pre-translation:

```text
app.ru
   ↓
RuLang CLI
   ↓
app.js
   ↓
Browser
```

This is the recommended approach for normal websites.

---

# 🗺️ Roadmap

## Language

* [x] Variables
* [x] Conditions
* [x] Loops
* [x] Functions
* [x] Classes
* [x] Exceptions
* [x] Async / Await
* [x] Math aliases
* [x] JSON aliases
* [x] Browser aliases
* [x] Array aliases
* [x] Cyrillic identifiers

## Tooling

* [x] JavaScript translator
* [ ] Stable CLI
* [ ] `.ru` → `.js` build command
* [ ] `.ru` execution command
* [ ] REPL
* [ ] Better error messages
* [ ] Source maps
* [ ] Package support
* [ ] VS Code extension
* [ ] Syntax highlighting
* [ ] Web playground
* [ ] Documentation website

---

# 🤝 Contributing

Contributions are welcome.

You can help by:

* Adding Russian keywords
* Improving the translator
* Creating examples
* Improving browser compatibility
* Improving the CLI
* Creating editor integrations
* Fixing bugs
* Improving documentation

When adding new keywords, make sure they do not cause unexpected conflicts with valid JavaScript identifiers.

---

# 📄 License

MIT License

Copyright © RuLang contributors.

---

# 🇷🇺 Final Note

RuLang is not trying to replace JavaScript.

It is JavaScript with a Russian syntax layer.

If you already know JavaScript, you already know most of RuLang.

**JavaScript after moving to Russia. 🇷🇺**
