document.addEventListener("DOMContentLoaded", () => {
    let scriptEducativo = "educativo2.js";
    let scriptComunitario = "Comunitario.js";
    let scriptLaboral = "laboral.js";
    let scriptInstitucional = "institucional.js";

    document.getElementById("apply").addEventListener("click", () => {
        let selectedScripts = [];
        if (document.getElementById("scriptEducativo").checked) selectedScripts.push(scriptEducativo);
        if (document.getElementById("scriptComunitario").checked) selectedScripts.push(scriptComunitario);
        if (document.getElementById("scriptLaboral").checked) selectedScripts.push(scriptLaboral);
        if (document.getElementById("scriptInstitucional").checked) selectedScripts.push(scriptInstitucional);
        // Guardar en storage
        chrome.storage.local.set({ selectedScripts }, () => {
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

    // Si se selecciona "Desactivar scripts", desmarcar los demás
    document.getElementById("disable").addEventListener("click", function () {
        console.log("desactivar")
        document.querySelectorAll("input[name='script']").forEach((input) => {
            input.checked = false; 
        });
        // borrar del storage
        chrome.storage.local.remove("selectedScripts", () => {
            console.log("Datos de scripts eliminados de chrome.storage.local.");
        });

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "refreshPage" });
        });
        
    });

  
});
