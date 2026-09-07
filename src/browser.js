import { translate } from './translator.js';

async function runRulangScripts() {
    const scripts = document.querySelectorAll('script[type="text/rulang"]');

    for (const script of scripts) {
        let code = "";

        if (script.src) {
            try {
                const response = await fetch(script.src);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                code = await response.text();
            } catch (err) {
                console.error(`Rulang Error: Не удалось загрузить ${script.src}`, err);
                continue;
            }
        } else {
            code = script.textContent;
        }

        if (code) {
            const jsCode = translate(code);

            const newScript = document.createElement('script');
            newScript.textContent = jsCode;
            document.body.appendChild(newScript);
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runRulangScripts);
} else {
    runRulangScripts();
}
