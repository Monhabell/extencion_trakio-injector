document.addEventListener("DOMContentLoaded", () => {
    let scriptEducativo = "educativo2.js";
    let scriptComunitario = "Comunitario.js";
    let scriptLaboral = "laboral.js";
    let scriptInstitucional = "institucional.js";

    document.getElementById("apply").addEventListener("click", () => {
        console.log("aplicado");
        let selectedScripts = [];

        if (document.getElementById("Ningun_scrip").checked) {
            selectedScripts = []; // No cargar ningún script
        } else {
            if (document.getElementById("scriptEducativo").checked) selectedScripts.push(scriptEducativo);
            if (document.getElementById("scriptComunitario").checked) selectedScripts.push(scriptComunitario);
            if (document.getElementById("scriptLaboral").checked) selectedScripts.push(scriptLaboral);
            if (document.getElementById("scriptInstitucional").checked) selectedScripts.push(scriptInstitucional);
        }

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

        // Si no hay scripts guardados, seleccionar "desactivar scripts"
        if (scripts.length === 0) {
            document.getElementById("Ningun_scrip").checked = true;
        }
    });

    // Si se selecciona "Desactivar scripts", desmarcar los demás
    document.getElementById("Ningun_scrip").addEventListener("change", function () {
        if (this.checked) {
            document.querySelectorAll("input[name='script']").forEach((input) => {
                if (input.id !== "Ningun_scrip") {
                    input.checked = false;
                }
            });
        }
    });

    // Si se selecciona cualquier otro, desmarcar "Desactivar scripts"
    document.querySelectorAll("input[name='script']").forEach((input) => {
        if (input.id !== "Ningun_scrip") {
            input.addEventListener("change", function () {
                if (this.checked) {
                    document.getElementById("Ningun_scrip").checked = false;
                }
            });
        }
    });
});
