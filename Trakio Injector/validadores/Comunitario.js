// import SesionesColectivas from "./comunitario/SesionesColectivas.js";

// const hola = new SesionesColectivas();
// hola.imprimirSaludo();

/**
 * VARIABLES GLOBALES
 */

//COLORES
const bgError = "rgba(255, 50, 50, 0.4)";
const bgSuccess = "rgba(50, 255, 50, 0.7)";
const bgWarning = "rgba(255, 255, 50, 0.7)";
const bgPrimary = "rgba(90, 100, 255, 0.5)";
const bgWhite = "#fff";
const bgDisabled = "rgba(128, 128, 128, 0.2)";
const bgTransparent = "rgba(255, 255, 255, 0) ";

//FECHAS
const PATRON_DMY = "[0-9]{2}/[0-9]{2}/[0-9]{4}";
const PATRON_YMD = "[0-9]{4}-[0-9]{2}-[0-9]{2}";

const FECHA_ACTUAL = new Date();
const ANIO_ACTUAL = FECHA_ACTUAL.getFullYear();
const MES_ACTUAL = FECHA_ACTUAL.getMonth();

//DATOS FICHA
const FECHA_INTERVENCION = document.querySelector("#FechaIntervencion");
const CONSECUTIVO_FICHA = document.querySelector("#Consecutivo_fic");
const LOCALIDAD_FICHA = document.querySelector("#Localidad_fic");
const BASE_FICHA = document.querySelector("#Id_Base");

establecerIndicadoresInputs();

/**
 * FUNCIONES GLOBALES
 */

function existElement(elementId){
    return document.getElementById(elementId) ? true : false;
}

if (existElement('formularioNuevoFormato')) {
    document.getElementById('formularioNuevoFormato').addEventListener("change", (event) => {
        const input = event.target;    
        const inputTagName = event.target.tagName;
        const inputType = event.target.type;
    
        if (inputTagName === "INPUT" && inputType == "text") {
            longitudTextoMenorQue(input, 3);
        }
    
        if (inputTagName === "INPUT" && input.getAttribute("placeholder") == "DD/MM/AAAA") {
            input.setAttribute("pattern", PATRON_DMY);
        }
    
        establecerIndicadoresInputs();
    });
}

function establecerIndicadoresInputs() {
    const campos = document.querySelectorAll("select, input:not([type='submit']), textarea");
    
    campos.forEach((campo) => {
        if (campo.disabled) {
            campo.style.backgroundColor = bgDisabled;
            return;
        }

        const valorTrim = campo.value.trim();
        const esRequerido = campo.required;
        const tieneError = window.getComputedStyle(campo).backgroundColor === bgError;

        if (esRequerido && valorTrim === "") {
            campo.style.backgroundColor = bgWarning;
        } else if (!esRequerido && valorTrim === "" && !tieneError) {
            campo.style.backgroundColor = bgWhite;
        } else if (valorTrim !== "" && !tieneError) {
            campo.style.backgroundColor = bgSuccess;
        }
    });
}

function telefonoValido(inputId) {
    const input = document.getElementById(inputId);
    return input.value.length == 7 || input.value.length == 10;
}

function establecerPatronFecha(inputs) {
    inputs.forEach((input) => {
        input.pattern = PATRON_DMY;
    });
}

function establecerCamposRequeridos(inputsIds) {
    const inputs = inputsIds.map((id) =>
        document.getElementById(`valorControl${id}`)
    );
    inputs.forEach((input) => {
        input.required = true;
    });
}

function tipoDocVsNacionalidad(inputTipoDoc, inputNacionalidad) {
    const tiposDocColombianos = ['59', '60', '61', '5', '7', '8'];
    inputNacionalidad.value = tiposDocColombianos.includes(inputTipoDoc.value) ? "Colombia" : '';
}

function longitudTextoIgualQue(inputTexto, longitud) {
    return inputTexto.value.length == longitud;
}

function longitudTextoEntre(inputTexto, minimo, maximo) {
    return inputTexto.value.length >= minimo && inputTexto.value.length <= maximo;
}

function longitudTextoMenorQue(input, longitudMinima) {
    input.style.backgroundColor = input.value.length < longitudMinima ? bgError : bgTransparent;
}

function longitudDocumento(inputDocumento, tipoDoc) {
    const tiposDocCon10Digitos = ["60", "61"];
    const min = tiposDocCon10Digitos.includes(tipoDoc) ? 1000000000 : null;
    const max = tiposDocCon10Digitos.includes(tipoDoc) ? 1999999999 : null;

    inputDocumento.setAttribute("min", min);
    inputDocumento.setAttribute("max", max);
}

function fechaMayorQueHoy(fechaStr) {
    FECHA_ACTUAL.setHours(0, 0, 0, 0);

    const [dia, mes, anio] = fechaStr.split("/").map(Number);
    const fechaIngresada = new Date(anio, mes - 1, dia);

    return fechaIngresada > FECHA_ACTUAL;
}

function setInputsTypeNumber(inputsId) {
    if (Array.isArray(inputsId)) {
        inputsId.forEach((inputId) => {
            const input = document.getElementById(`valorControl${inputId}`);
            input.setAttribute("type", "number");
        });
    }
}

function toggleCamposDireccion(tipoZona, idsRurales = [], idsUrbanos = []) {
    const esRural = tipoZona === "58";

    // Inputs rurales
    idsRurales.forEach((inputId) => {
        const input = document.getElementById(`valorControl${inputId}`);
        if (input) {
            input.value = !esRural ? '' : input.value;
            input.required = !esRural;
            input.disabled = !esRural;
        } else {
            console.warn(`Input con ID valorControl${inputId} no encontrado`);
        }
    });

    // Inputs urbanos
    idsUrbanos.forEach((inputId) => {
        const input = document.getElementById(`valorControl${inputId}`);
        if (input) {
            input.value = esRural ? '' : input.value;
            input.disabled = esRural;
        } else {
            console.warn(`Input con ID valorControl${inputId} no encontrado`);
        }
    });
}

function deshabilitarinputDependiente(validator, inputIdToDisabled) {
    const input = document.getElementById(inputIdToDisabled);
    input.disabled = validator == "NO" ? true : false;
}

function disabledInputsIf(inputsArray, inputValuecondition, equalTo) {
    if (Array.isArray(inputsArray) && Array.isArray(inputValuecondition)) {
        // Generar los selectores de IDs
        const inputsIds = inputsArray.map(inputId => `#valorControl${inputId}`);
        const inputs = document.querySelectorAll(inputsIds);

        const inputsIdsCondition = inputValuecondition.map(inputId => `#valorControl${inputId}`);
        const inputsCondition = [...document.querySelectorAll(inputsIdsCondition)];

        const camposPorSesion = Math.ceil(inputs.length / inputsCondition.length);

        [...inputs].forEach((input, key) => {
            if (input) {
                const conditionIndex = Math.floor(key / camposPorSesion);

                if (inputsCondition[conditionIndex]) {
                    input.disabled = inputsCondition[conditionIndex].value == equalTo;
                }
            }
        });
    }
}

/**
 * TÍTULO CODE
 */

function conditionsForAll() {
    //Setup heading
    const heading = document.querySelector(
        "#main_body > div > div > main > div > div > div > div.panel-heading"
    );
    heading.removeAttribute("style");
    heading.style.backgroundColor = "#522200";
    heading.style.color = "#fff";

    const logo = document.querySelector(
        "#sidebar > div > div.sidebar-brand.logo_blanco"
    );
    logo.style.backgroundColor = "#124975";
    logo.style.color = "#fff";
    logo.innerHTML = "<h3>CODE COMUNITARIO</h3>";

    //Deshabilitar autocompletar
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.setAttribute("autocomplete", "off");
    });

    const menu = () => {
        const ocultarBases = [
            3, 5, 7, 8, 12, 14, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32
        ];

        const menuBases = ocultarBases.map(id => document.getElementById(`forOpcionPublicoGesiForm${id}`));
        menuBases.forEach(itemMenu => {
            if (itemMenu) {
                itemMenu.style.display = "none";
            }
        });

        const optionComunitario = document.querySelector("#sidebar > div > div.sidebar-menu > ul > li:nth-child(4)");
        optionComunitario.style.backgroundColor = "#124975";
    }

    menu();
}

conditionsForAll();

/**
 * CREACIÓN DE FICHA
 */

function getMonthIntervention() {
    const arrayFechaIntervencion = FECHA_INTERVENCION.value.split("/");
    const mesIntervencion = parseInt(arrayFechaIntervencion[1]);

    return mesIntervencion;
}

function getYearIntervention() {
    const arrayFechaIntervencion = FECHA_INTERVENCION.value.split("/");
    const anioIntervencion = parseInt(arrayFechaIntervencion[2]);

    return anioIntervencion;
}

function validarCamposCreacionFicha() {
    const consecutivoValido = CONSECUTIVO_FICHA.value.length === 5;
    const fechaValida =
        getMonthIntervention() === 7 && getYearIntervention() === 2024;
    CONSECUTIVO_FICHA.style.backgroundColor = consecutivoValido
        ? bgSuccess
        : bgError;
    FECHA_INTERVENCION.style.backgroundColor = fechaValida
        ? bgSuccess
        : bgError;
    disabledBtnActualizar(consecutivoValido && fechaValida);
}

CONSECUTIVO_FICHA.addEventListener("keyup", validarCamposCreacionFicha);
FECHA_INTERVENCION.addEventListener("change", validarCamposCreacionFicha);
LOCALIDAD_FICHA.addEventListener("change", validarCamposCreacionFicha);

/**
 * SELECCIÓN DE BASE
 */

function ejecutarValidadorBase(idBase) {
    switch (idBase) {
        case "39":
            sesionesColectivas();
            break;
        default:
            console.log("Base no válida");
            break;
    }
}

ejecutarValidadorBase(BASE_FICHA.value);

/* --------------------------------------------------------------------------
----------------------------SESIONES COLECTIVAS------------------------------
---------------------------------------------------------------------------*/

function sesionesColectivas() {
    const selectors = {
        inputsTypeNumberPagina1: [
            "14155",
            "14161",
            "14165",
            "14168",
            "14170",
        ],
        inputsTypeNumberPagina2: [
            "14494",
            "14495",
            "14496",
        ],
        inputsFechaSesiones: [
            "14514",
            "14518",
            "14522",
            "14526",
            "14530",
            "14534",
            "14538",
            "14542",
            "14546",
            "14550",
            "14554",
            "14558",
            "14562",
            "14566",
            "14570",
            "14574"
        ],
        inputsAsistenciaSesion: [
            "14513",
            "14517",
            "14521",
            "14525",
            "14529",
            "14533",
            "14537",
            "14541",
            "14545",
            "14549",
            "14553",
            "14557",
            "14561",
            "14565",
            "14569",
            "14573",
        ],
        inputsProfesionals: [
            "14515",
            "14519",
            "14523",
            "14527",
            "14531",
            "14535",
            "14539",
            "14543",
            "14547",
            "14551",
            "14555",
            "14559",
            "14563",
            "14567",
            "14571",
            "14575",
        ],
        inputsDigitador: [
            "14516",
            "14520",
            "14524",
            "14528",
            "14532",
            "14536",
            "14540",
            "14544",
            "14548",
            "14552",
            "14556",
            "14560",
            "14564",
            "14568",
            "14572",
            "14576",
        ],
        inputsRequeridos: [
            "14497",
            "14498",
            "14499",
            "14500",
            "14501",
            "14502",
            "14503",
            "14504",
            "14507",
            "14508",
            "14509",
            "14511"
        ]
    };

    function pagina1() {
        setInputsTypeNumber(selectors.inputsTypeNumberPagina1);
        validarDireccion();
        establecerIndicadoresInputs();
    }

    function validarDireccion() {
        const inputZona = document.getElementById("valorControl14148");
        const inputsIdUrbana = selectors.inputsTypeNumberPagina1.concat([
            "14582",
            "14156",
            "14157",
            "14158",
            "14159",
            "14162",
            "14163",
            "14164",
            "14166",
            "14167",
            "14169",
        ]);
        const inputsIdRural = ["14153"];
        toggleCamposDireccion(inputZona.value, inputsIdRural, inputsIdUrbana);

        // Manzana del cuidado
        deshabilitarinputDependiente(
            document.getElementById("valorControl14173")?.value,
            "valorControl14174"
        );
    }

    function pagina2() {
        setInputsTypeNumber(selectors.inputsTypeNumberPagina2);
        establecerIndicadoresInputs();
    }

    function pagina3() {
        insertarListadoDigitadores(selectors.inputsDigitador);
        validarNumeroSesion(selectors.inputsAsistenciaSesion);
        establecerCamposRequeridos(selectors.inputsRequeridos);
        listenerPoblacional();
        aplicarPatronFecha(selectors.inputsFechaSesiones);
        establecerIndicadoresInputs();
    }

    function listenerPoblacional() {
        const inputTipoDoc = document.getElementById("valorControl14499");

        //Tipo doc vs nacionalidad
        const inputNacionalidad = document.getElementById("valorControl14507");
        inputTipoDoc.addEventListener('change', () => tipoDocVsNacionalidad(inputTipoDoc, inputNacionalidad));

        //Nro  documento vs tipo doc
        const inputDocumento = document.getElementById("valorControl14500");
        inputTipoDoc.addEventListener('change', () => longitudDocumento(inputDocumento, inputTipoDoc.value));

        //Sexo vs género
        const inputSexo = document.getElementById("valorControl14502");
        const inputGenero = document.getElementById("valorControl14503");
        inputSexo.addEventListener('change', (e) => sexoYGenero(inputSexo, inputGenero, e.target));
        inputGenero.addEventListener('change', (e) => sexoYGenero(inputSexo, inputGenero, e.target));
    }

    function sexoYGenero(inputSexo, inputGenero, inputActivo) {
        if (inputSexo.value == '69' || inputGenero.value == '72') return;

        const validarGenero = () => {
            inputGenero.value = inputSexo.value == '67' ? "70" : '71';
        }
        
        const validarSexo = () => {
            inputSexo.value = inputGenero.value == '70' ? "67" : '68';
        }

        if (inputActivo.id === 'valorControl14502') validarGenero();
        if (inputActivo.id === 'valorControl14503') validarSexo();
    }

    function aplicarPatronFecha(inputsFechaIds) {
        const inputsFecha = inputsFechaIds.map((id) =>
            document.getElementById(`valorControl${id}`)
        );

        inputsFecha.forEach((input) => {
            if (input) {
                input.pattern = PATRON_DMY;
                input.addEventListener("change", () => {
                    if (fechaMayorQueHoy(input.value)) {
                        input.value = "";
                        alert("La fecha no puede ser mayor a la actual");
                    }
                });
            }
        });
    }

    function validarNumeroSesion(inputsIds) {
        inputsIds.forEach((id) => {
            const input = document.getElementById(`valorControl${id}`);
            if (input && input.value != 1) {
                input.value = 0;
            }
        });

        const allInputsSesions = selectors.inputsFechaSesiones.concat(selectors.inputsProfesionals, selectors.inputsDigitador);
        disabledInputsIf(allInputsSesions, selectors.inputsAsistenciaSesion, "0");
        establecerIndicadoresInputs();
    }

    function insertarListadoDigitadores(inputsIds) {
        if (Array.isArray(inputsIds)) {
            const digitadores = [
                '',
                'ALBA SABOGAL',
                'ANDRES PINZON',
                'ANGIE JIMENEZ',
                'CAMILA YOPASA',
                'CAROLINA GARAY',
                'CRISTHIAN PARRA',
                'DANIEL MANCHEGO',
                'DANIELA PRIETO',
                'GINA GOMEZ',
                'JAIR BERNAL',
                'JENNY ROJAS',
                'KAROL GOMEZ',
                'KEVIN SOLANO',
                'LAURA VELASCO',
                'LEIDY ROMERO',
                'LUIS ESGUERRA',
                'MARCELA CAPERA',
                'MARILYN ARANGO',
                'MARTHA RIAÑO',
                'PAOLA GAMBOA',
                'RAMIRO MEDELLIN',
                'ZULMA LEON'
            ];
    
            const listadoDigitadores = inputsIds.map(id => document.getElementById(`valorControl${id}`));
    
            listadoDigitadores.forEach(input => {
                if (input) {
                    const select = document.createElement("select");
                    select.id = input.id;
                    select.name = input.name;
                    select.className = "form-control";
                    select.style.width = "100%"; 

                    digitadores.forEach(digitador => {
                        const option = document.createElement("option");
                        option.value = digitador;
                        option.textContent = digitador;
                        select.appendChild(option);
                    });
                        
                    const inputValue = input.value.trim();
                    if (digitadores.includes(inputValue)) {
                        select.value = inputValue;
                    }
                    
                    input.parentNode.replaceChild(select, input);
                }
            });
        } else {
            console.error("El argumento `inputsIds` debe ser un array.");
        }
    }    

    const titleSection = document.querySelector(
        "#formularioNuevoFormato > div.row.align-items-center > div > b"
    );
    const sectionMap = {
        "1. DATOS DEL LUGAR DE LA ACTIVIDAD": pagina1,
        "SESIONES": pagina2,
        "INDIVIDUOS": pagina3,
    };

    const action = sectionMap[titleSection?.textContent];
    if (action) action();
}


/* --------------------------------------------------------------------------
----------------------------GUARDAR REGISTRO SDS-----------------------------
---------------------------------------------------------------------------*/

try {
    //Buttons
    const btnGuardar = document.querySelector("#botonActualizarInformacion")
    
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