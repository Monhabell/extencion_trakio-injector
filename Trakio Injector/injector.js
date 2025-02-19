document.addEventListener("DOMContentLoaded", () => {
    const applyButton = document.getElementById("apply");
    const disableButton = document.getElementById("disable");

    // Cargar scripts almacenados previamente
    chrome.storage.local.get("selectedScripts", (data) => {
        const selectedScripts = data.selectedScripts || [];

        // Marcar la opción seleccionada en la interfaz
        if (selectedScripts.length > 0) {
            const radioButtons = document.querySelectorAll('input[name="script"]');
            radioButtons.forEach((radio) => {
                if (selectedScripts.includes(radio.nextSibling.textContent.trim())) {
                    radio.checked = true;
                }
            });
        }
    });

    // Evento para aplicar scripts
    applyButton.addEventListener("click", () => {
        const selectedScript = document.querySelector('input[name="script"]:checked');
        if (!selectedScript) {
            alert("Por favor, selecciona un entorno.");
            return;
        }

        const scriptName = selectedScript.nextSibling.textContent.trim();
        chrome.storage.local.set({ selectedScripts: [scriptName] }, () => {
            console.log("Script seleccionado:", scriptName);
            chrome.runtime.sendMessage({ action: "injectScripts" });
        });
    });

    // Evento para desactivar scripts
    disableButton.addEventListener("click", () => {
        chrome.storage.local.set({ selectedScripts: [] }, () => {
            console.log("Scripts desactivados.");
            chrome.runtime.sendMessage({ action: "injectScripts" });
        });
    });
});

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
        "Educativo": "https://www.trakio.pro/js/calidad/educativo2.js",
        "Comunitario": "https://www.trakio.pro/js/calidad/Comunitario.js",
        "Laboral": "https://www.trakio.pro/js/calidad/laboral.js",
        "Institucional": "https://www.trakio.pro/js/calidad/institucional.js"
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
