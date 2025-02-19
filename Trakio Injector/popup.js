document.addEventListener("DOMContentLoaded", () => {
    let scriptEducativo = "educativo2.js";
    let scriptComunitario = "Comunitario.js";
    let scriptLaboral = "laboral.js";
    let scriptInstitucional = "institucional.js";

    const applyButton = document.getElementById("apply");
    const disableButton = document.getElementById("disable");

    // Evento para aplicar scripts seleccionados
    applyButton.addEventListener("click", () => {
        console.log("Aplicado");
        let selectedScripts = [];

        if (document.getElementById("scriptEducativo").checked) selectedScripts.push(scriptEducativo);
        if (document.getElementById("scriptComunitario").checked) selectedScripts.push(scriptComunitario);
        if (document.getElementById("scriptLaboral").checked) selectedScripts.push(scriptLaboral);
        if (document.getElementById("scriptInstitucional").checked) selectedScripts.push(scriptInstitucional);

        // Guardar en storage y enviar mensaje para inyectar scripts
        chrome.storage.local.set({ selectedScripts }, () => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, { action: "injectScripts" });
            });
        });
    });

    // Evento para desactivar scripts
    disableButton.addEventListener("click", () => {
        console.log("Scripts desactivados.");
        chrome.storage.local.set({ selectedScripts: [] }, () => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, { action: "injectScripts" });
            });
        });

        // Desmarcar todas las casillas
        document.querySelectorAll("input[name='script']").forEach((input) => {
            input.checked = false;
        });
    });

    // Cargar configuraciones anteriores
    chrome.storage.local.get("selectedScripts", (data) => {
        const scripts = data.selectedScripts || [];

        document.getElementById("scriptEducativo").checked = scripts.includes(scriptEducativo);
        document.getElementById("scriptComunitario").checked = scripts.includes(scriptComunitario);
        document.getElementById("scriptLaboral").checked = scripts.includes(scriptLaboral);
        document.getElementById("scriptInstitucional").checked = scripts.includes(scriptInstitucional);
    });
});
