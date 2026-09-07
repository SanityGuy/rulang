# 🇷🇺 Rulang (Руланг)

A custom programming language that translates Russian syntax into executable JavaScript.

## 💡 Inspiration & Acknowledgements

Rulang was inspired by [JawaScript](https://github.com/arwildo/jawascript) created by [Arwildo](https://github.com/arwildo). While JawaScript brings Javanese syntax to JavaScript, Rulang adapts and expands upon this concept for the Russian language with enhanced Cyrillic parsing support, standard CLI toolings, and browser support.

## 🚀 Quick Start

## 1. Install globally:
   ```bash
   npm install -g rulang

---

### 2. Browser & Website Compatibility

Since `src/translator.js` is a pure JavaScript module with no Node.js-specific dependencies (like `fs` or `path`), **it is already web-compatible!**

#### Using it in a Browser via ES Modules

You can import `translate` directly into a web page or React/Vue/Svelte project:

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Rulang Web Playground</title>
</head>
<body>
  <script type="module">
    import { translate } from './src/translator.js';

    const russianCode = `
      пусть х = 10;
      пусть у = 20;
      вывод(х + у);
    `;

    // 1. Translate Rulang to Standard JavaScript
    const jsCode = translate(russianCode);
    console.log("Generated JS:", jsCode);

    // 2. Execute directly in browser
    new Function(jsCode)();
  </script>
</body>
</html>
```