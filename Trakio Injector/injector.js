chrome.storage.local.get("selectedScripts", (data) => {
    const scripts = data.selectedScripts || [];
    scripts.forEach((scriptName) => {
        const scriptURL = chrome.runtime.getURL(`validadores/${scriptName}`);
        console.log("Script URL:", scriptURL);  // Imprimir la URL generada
        
        const script = document.createElement("script");
        script.src = scriptURL;
        script.type = "module";  // Indicar que es un módulo
        script.onload = () => console.log(`Script cargado: ${scriptName}`);
        script.onerror = () => console.error(`Error al cargar el script: ${scriptName}`);
        document.head.appendChild(script);
    });
});
