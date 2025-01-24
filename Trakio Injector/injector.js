chrome.storage.local.get("selectedScripts", (data) => {
    const scripts = data.selectedScripts || [];
    injectScripts(scripts);
});
// Función para inyectar scripts
function injectScripts(scripts) {
    // Eliminar scripts previamente inyectados
    const existingScripts = document.querySelectorAll('script[type="module"]');
    existingScripts.forEach((existingScript) => {
        existingScript.remove(); // Eliminar el script existente
    });

    console.log(scripts[0])
    if (scripts[0] == "educativo2.js" ){
        link = "https://www.trakio.pro/js/calidad/educativo2.js"
        console.log(link)
        const scriptURL = link;
        console.log("Script URL:", scriptURL);  // Imprimir la URL generada
        
        const script = document.createElement("script");
        script.src = scriptURL;
        script.type = "module";  // Indicar que es un módulo
        script.onload = () => console.log(`Script cargado: ${scripts}`);
        script.onerror = () => console.error(`Error al cargar el script: ${scripts}`);
        document.head.appendChild(script);

    }
    if (scripts[0] == "Comunitario.js" ){
        link = "https://www.trakio.pro/js/calidad/Comunitario.js"
        console.log(link)
        const scriptURL = link;
        console.log("Script URL:", scriptURL);  // Imprimir la URL generada
        
        const script = document.createElement("script");
        script.src = scriptURL;
        script.type = "module";  // Indicar que es un módulo
        script.onload = () => console.log(`Script cargado: ${scripts}`);
        script.onerror = () => console.error(`Error al cargar el script: ${scripts}`);
        document.head.appendChild(script);

    }
    if (scripts[0] == "laboral.js" ){
        link = "https://www.trakio.pro/js/calidad/laboral.js"
        console.log(link)
        const scriptURL = link;
        console.log("Script URL:", scriptURL);  // Imprimir la URL generada
        
        const script = document.createElement("script");
        script.src = scriptURL;
        script.type = "module";  // Indicar que es un módulo
        script.onload = () => console.log(`Script cargado: ${scripts}`);
        script.onerror = () => console.error(`Error al cargar el script: ${scripts}`);
        document.head.appendChild(script);

    }
    if (scripts[0] == "institucional.js" ){
        link = "https://www.trakio.pro/js/calidad/institucional.js"
        console.log(link)
        const scriptURL = link;
        console.log("Script URL:", scriptURL);  // Imprimir la URL generada
        
        const script = document.createElement("script");
        script.src = scriptURL;
        script.type = "module";  // Indicar que es un módulo
        script.onload = () => console.log(`Script cargado: ${scripts}`);
        script.onerror = () => console.error(`Error al cargar el script: ${scripts}`);
        document.head.appendChild(script);

    }
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