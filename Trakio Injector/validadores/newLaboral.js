const COLOR_REQUERIDO = "#f8c471";
const COLOR_LLENO = "#36ff3069";
const mainContainer = document.querySelector('main');
const ID_BASE = document.getElementById('Id_Base').value;

mainContainer.style.backgroundColor = "#31353d";

function styleTitulo(){
    const sidebarBrand = document.querySelector('.sidebar-brand');
    sidebarBrand.style.backgroundColor = "#5b2c6f";
    sidebarBrand.textContent = "CODE LABORAL";
    sidebarBrand.style.fontSize = "28px";
    sidebarBrand.style.color = "#ffffff";
}

function colorearInputs(){
    const allInputs = document.querySelectorAll('input,select');
    allInputs.forEach(input => {
        if (input.required && input.value == ""){
            input.style.backgroundColor = COLOR_REQUERIDO;
        }
        if (input.required && input.value != ""){
            input.style.backgroundColor = COLOR_LLENO;
        }
    })
}

function elegirBase(){
    switch (ID_BASE) {
        case '16':
            fichaNNA();
            break;
    
        default:
            break;
    }
}

function initApp(){
    colorearInputs();
    styleTitulo();
    elegirBase();
}

initApp();

/**
 * FUNCION NNA
 */

function fichaNNA(){
    const tipoDeIntervencion = document.getElementById('valorControl16186');
    tipoDeIntervencion.addEventListener('change', () =>{
        if(tipoDeIntervencion.value == "105"){
            bloquearSeguimientoEfecto();
        }
    })
}

function bloquearSeguimientoEfecto(){
    console.log("Bloquear seguimiento de efecto");
    const informacionLaboral = document.querySelector("#formularioNuevoFormato > div:nth-child(18)");
    const inputs = informacionLaboral.querySelectorAll('input,select');
    inputs.forEach(input => {
        input.disabled = true;
    });
}

// =============================GUARDAR REGISTRO SDS ===================================

try {
    //Buttons
    const btnGuardar = document.querySelector("#botonActualizarInformacion");
    const btnEditReg = document.querySelector("#btnEditReg");
    const btnBack = document.querySelector("#main_body > div > div > main > div > div > div > div.panel-heading > div > div.col-md-2 > table > tbody > tr > td > form > button");
    const btnOk = document.querySelector("#main_body > div.swal2-container.swal2-center.swal2-shown > div > div.swal2-actions > button.swal2-confirm.swal2-styled");
    const btnTest = document.querySelector("#controlBotonSeccion184");
    //Values
    const consecutivo = document.querySelector("#Consecutivo_fic");
    const fechaIntervencion = document.querySelector("#FechaIntervencion").value;
    const sds_base_id = document.querySelector("#Id_Base").value;

    function saveProductivity() {
        let numFicha = document.querySelector("#Ficha_fic").value;
        const url = `https://www.trakio.pro/save_productivity_sds?id_sds=${sds_base_id}&no_ficha=${numFicha}&fecha_intervencion=${fechaIntervencion}`;
        //const url = `http://127.0.0.1:8000/save_productivity_sds?id_sds=${sds_base_id}&no_ficha=${numFicha}&fecha_intervencion=${fechaIntervencion}`;

        // Use the Fetch API to make the GET request
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('La ficha no está en recepciones');
                }
                return response.json();
            })
            .then(data => {
                btnGuardar.disabled = false;
            })
            .catch(error => {
                btnGuardar.disabled = true;
                //alert(error.message);
            });
    }

    consecutivo.addEventListener("change", saveProductivity);
    btnOk.addEventListener("click", saveProductivity);
    btnGuardar.addEventListener("click", saveProductivity);

    function tiempoTotalFicha() {
        const start = localStorage.getItem('initHour');
        const end = new Date().getTime();
        let diff = (end - start) / 3600000;

        if(localStorage.removeItem('initHour')){
            localStorage.removeItem('initHour')
        }

        console.log("Total tiempo ficha", diff);
        return diff.toFixed(2);
    }

    if (btnEditReg) {
        btnEditReg.addEventListener("click", function () {
            const currentDateTime = new Date().toLocaleString();
            localStorage.setItem("initHour", currentDateTime);
        });    
    }else{
        localStorage.setItem("initHour", "No hay botón para editar registro");
    }

    btnBack.addEventListener("click", tiempoTotalFicha);
    btnTest.addEventListener("click", tiempoTotalFicha);

    const currentDateTime = new Date().toLocaleString();
    console.log(currentDateTime);

} catch (error) { }

document.addEventListener('DOMContentLoaded', function () {
    // Detectar si hay un SweetAlert modal abierto y aplicar la configuración
    Swal.update({
      allowOutsideClick: false
    });
  });
