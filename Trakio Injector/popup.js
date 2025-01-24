document.addEventListener("DOMContentLoaded", () => {
    let scriptEducativo = "educativo2.js";
    let scriptComunitario = "Comunitario.js";
    let scriptLaboral = "laboral.js";
    let scriptInstitucional = "institucional.js";

    document.getElementById("apply").addEventListener("click", () => {
        console.log("aplicado");
        const selectedScripts = [];
        if (document.getElementById("scriptEducativo").checked) selectedScripts.push(scriptEducativo);
        if (document.getElementById("scriptComunitario").checked) selectedScripts.push(scriptComunitario);
        if (document.getElementById("scriptLaboral").checked) selectedScripts.push(scriptLaboral);
        if (document.getElementById("scriptInstitucional").checked) selectedScripts.push(scriptInstitucional);

        // Enviar los scripts seleccionados al archivo injector.js
        chrome.storage.local.set({ selectedScripts }, () => {
            //alert("Entorno configurados.");
            // Enviar un mensaje para inyectar los scripts
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, { action: "injectScripts" });
            });
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