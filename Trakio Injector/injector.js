chrome.storage.local.get("selectedScripts", (data) => {
    const scripts = data.selectedScripts || [];
    injectScripts(scripts);
});

// Función para inyectar scripts
// Función para inyectar scripts
function injectScripts(scripts) {
    // Eliminar scripts previamente inyectados
    const existingScripts = document.querySelectorAll('script[type="module"]');
    existingScripts.forEach((existingScript) => {
        existingScript.remove();
    });

    // Si no hay scripts seleccionados, salir de la función
    if (scripts.length === 0) {
        console.log("Scripts desactivados.");
        return;
    }

    // Mapeo de los scripts disponibles
    const scriptMap = {
        "educativo2.js": "https://www.trakio.pro/js/calidad/educativo2.js",
        "Comunitario.js": "https://www.trakio.pro/js/calidad/Comunitario.js",
        "laboral.js": "https://www.trakio.pro/js/calidad/laboral.js",
        "institucional.js": "https://www.trakio.pro/js/calidad/institucional.js"
    };

    // Iterar sobre los scripts seleccionados
    scripts.forEach((scriptName) => {
        if (scriptMap[scriptName]) {
            const scriptURL = `${scriptMap[scriptName]}?t=${new Date().getTime()}`;

            console.log("Cargando script:", scriptURL);
            const script = document.createElement("script");
            script.src = scriptURL;
            script.type = "module";
            script.onload = () => console.log(`Script cargado: ${scriptName}`);
            script.onerror = () => console.error(`Error al cargar el script: ${scriptName}`);
            document.head.appendChild(script);
        }
    });
}

// Escuchar mensajes para inyectar scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "injectScripts") {
        chrome.storage.local.get("selectedScripts", (data) => {
            const scripts = data.selectedScripts || [];
            injectScripts(scripts);
        });
    }
});
