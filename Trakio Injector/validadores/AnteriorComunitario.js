/*
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                                                                     
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                    GENERAL DOCUMENTO                                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
const colorRojo = "#ED2828";
const colorNaranja = "#F78B2B";
const colorNegro = "#000000";
const ColorAmarillo = "#FEFE00";
const colorVerde = "#23E320";
const colorBlanco = "#FFFFFF";
try {
    let Concordancia_Z_Vinculate = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaFalse(Concordancia_Z_Vinculate);
    let Concordancia_Z_Sesiones = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(3) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaFalse(Concordancia_Z_Sesiones);
    let Concordancia_ZARIT = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(4) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaTrue(Concordancia_ZARIT);
    let Concordancia_Fortalecimiento = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(5) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaTrue(Concordancia_Fortalecimiento);
    let Concordancia_Acondicionamiento = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(6) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaTrue(Concordancia_Acondicionamiento);
    let Concordancia_Z_MAPS = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(7) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaFalse(Concordancia_Z_MAPS);
    let Concordancia_Z_Mujeres = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(8) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaFalse(Concordancia_Z_Mujeres);
    let Concordancia_Z_Fortalecimiento = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(9) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaFalse(Concordancia_Z_Fortalecimiento);
    let Concordancia_CAMI = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(10) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaTrue(Concordancia_CAMI);
    let Concordancia_Cuidarte = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(11) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaTrue(Concordancia_Cuidarte);
    let Concordancia_Z_ZARIT = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(12) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaFalse(Concordancia_Z_ZARIT);
    let Concordancia_BasicasH = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(13) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaTrue(Concordancia_BasicasH);
    let Concordancia_Z_Caldas = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(14) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaFalse(Concordancia_Z_Caldas);
    let Concordancia_Vincualte = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(15) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaTrue(Concordancia_Vincualte);
    let Concordancia_Caldas = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(16) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaTrue(Concordancia_Caldas);
    let Concordacnia_Guardianes = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(17) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaTrue(Concordacnia_Guardianes);
    let Concordancia_PID = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(18) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaTrue(Concordancia_PID);
    let Concordancia_MAPS = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(19) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaTrue(Concordancia_MAPS);
    let Concordancia_Sesiones = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(20) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaTrue(Concordancia_Sesiones);
    let Concordancia_Mujeres = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody > tr:nth-child(21) > td:nth-child(2)"
    );
    resaltarValoresConcordanciaTrue(Concordancia_Mujeres);
} catch (error) {}

function resaltarValoresConcordanciaTrue(ValorBaseCorrecto) {
    let texto = ValorBaseCorrecto.textContent.trim();
    let valor = parseInt(texto);
    if (valor !== 0) {
        ValorBaseCorrecto.style.backgroundColor = colorVerde;
    } else {}
}

function resaltarValoresConcordanciaFalse(ValorBaseIncorrecto) {
    let texto = ValorBaseIncorrecto.textContent.trim();
    let valor = parseInt(texto);
    if (valor !== 0) {
        ValorBaseIncorrecto.style.backgroundColor = colorRojo;
    } else {}
}

//     CAPTURAR FECHA ACTUAL
// Crear un nuevo objeto Date que represente la fecha y hora actuales
var fechaActual = new Date();

// Obtener el año actual
var año = fechaActual.getFullYear();

// Obtener el mes actual (los meses comienzan desde 0, por lo que debes sumar 1)
var mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0");

// Obtener el día del mes actual
var dia = fechaActual.getDate().toString().padStart(2, "0");

// Formatear la fecha según tu preferencia
var fechaFormateada = dia + "/" + mes + "/" + año;

console.log("La fecha de hoy es: " + fechaFormateada);

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

function validarNombreApellido(NombresApellidos) {
    let Nombre_1 = NombresApellidos;
    let valorNombre_1 = Nombre_1.value;
    if (/^\w+\s\w+/.test(valorNombre_1)) {
        // Si hay exactamente dos palabras, quitar el mensaje de error y permitir enviar el formulario
        Nombre_1.setCustomValidity("");
    } else {
        // Si no hay exactamente dos palabras, mostrar un mensaje de error
        Nombre_1.setCustomValidity("Debe tener Nombre y apellido.");
    }
}

function validarYLimpiarFecha_1920_2024(validar_fechaS) {
    // Obtener el valor del campo
    let valor = validar_fechaS.value.trim();

    // Expresión regular para verificar el formato dd/mm/aaaa
    let formatoFecha =
        ///^(0[1-9]|[1-2][0-9]|3[0-1])\/(01)\/(2024)$/;

        //-- ??????????????? activar cuando se requiere multiples fechas

        /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[2-9][0-9]|20[0-1][0-9]|202[0-4])$/;
    // Verificar si el valor cumple con el formato y la condición del año
    if (formatoFecha.test(valor)) {
        // Si es una fecha válida, no hacer nada
        // console.log("Fecha válida:", valor);
    } else {
        // Si no es una fecha válida, borrar el valor y mostrar un mensaje
        validar_fechaS.value = "";
        alert("No esta digitando la fecha con formato o longitud correcta.");
        console.log("funcion 1.");
    }
    // if (valor > fechaFormateada) {
    //   validar_fechaS.value = "";
    //   alert("La fecha que registra no puede ser mayor a la de hoy.");
    // } else {
    // }
}

function validarYLimpiarFecha_2023_2024(validar_fechaS) {
    // Obtener el valor del campo
    let valor = validar_fechaS.value.trim();

    // Expresión regular para verificar el formato dd/mm/aaaa
    let formatoFecha =
        ///^(0[1-9]|[1-2][0-9]|3[0-1])\/(01)\/(2024)$/;

        //-- ??????????????? activar cuando se requiere multiples fechas

        /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(202[3-4])$/;
    // Verificar si el valor cumple con el formato y la condición del año
    // if (valor > fechaFormateada) {
    //   validar_fechaS.value = "";
    //   alert("La fecha que registra no puede ser mayor a la de hoy.");
    // } else {
    // }
    if (formatoFecha.test(valor)) {
        // Si es una fecha válida, no hacer nada
        // console.log("Fecha válida:", valor);
    } else {
        // Si no es una fecha válida, borrar el valor y mostrar un mensaje
        validar_fechaS.value = "";
        alert("No esta digitando la fecha con formato o longitud correcta.");
        console.log("funcion 1.");
    }
}

function LongitudNumeroDocumento(cedula) {
    let numeroDocumentoValor = cedula.value;
    let longitud = numeroDocumentoValor.length;
    let caracteresNoPermitidos = /[*/|]/; // Expresión regular para caracteres no permitidos

    if (
        longitud <= 5 ||
        longitud == 9 ||
        longitud >= 12 ||
        caracteresNoPermitidos.test(numeroDocumentoValor)
    ) {
        cedula.style.backgroundColor = colorNaranja; // Asumiendo que colorNaranja está definido en otro lugar de tu código
        alert("Por favor, revise el número de documento ingresado.");
        console.log(longitud);
    } else {
        cedula.style.backgroundColor = "transparent";
        cedula.setCustomValidity("");
    }
}

function nacionalidadConTipoDocumento(TipoDocumento, Nacionalidad) {
    if (TipoDocumento.value == "59") {
        Nacionalidad.value = "50";
        Nacionalidad.style.backgroundColor = colorVerde;
    } else {
        Nacionalidad.style.backgroundColor = "transparent";
        Nacionalidad.setCustomValidity("");
    }
}

try {
    let Concordancia1 = document.querySelector(
        "#formularioFiltro > div:nth-child(7) > div > table > tbody"
    );
    Concordancia1.style.fontSize = "20px";
    Concordancia1.style.fontWeight = "bold";
} catch (error) {}

try {
    // try {
    //   const fondoTableBodyMain = document.querySelector(
    //     "#main_body > div > div > main > div"
    //   );
    //   fondoTableBodyMain.style.backgroundColor = colorNegro;
    // } catch (error) {}
    // try {
    //   const fondoMainBody = document.querySelector("#main_body");
    //   fondoMainBody.style.backgroundColor = colorNegro;
    // } catch (error) {}
    // try {
    //   const fondoxxxx = document.querySelector("#main_body > div > div");
    //   fondoxxxx.style.backgroundColor = "#000000";
    // } catch (error) {}

    // try {
    //   fondoxxxxx = document.querySelector(
    //     "#main_body > div > div > main > div > div > div > div.panel-body > div.row.align-items-center"
    //   );
    //   fondoxxxxx.style.backgroundColor = "#000000";
    // } catch (error) {}
    // try {
    //   let fondoBarraLateral1 = document.querySelector("#sidebar");
    //   fondoBarraLateral1.style.backgroundColor = colorNegro;
    //   //logo barra lateral
    //   let logo = document.querySelector(
    //     "#sidebar > div > div.sidebar-brand.logo_blanco"
    //   );
    //   logo.style.backgroundColor = "#000000";
    //   logo.style.color = "#5B80FE";
    //   logo.style.fontSize = "12px";
    //   logo.innerHTML = "<H2>COMUNITARIO</H2>";
    //   //'<img src="https://gesiapp.com.co/imagenes/Comunitario_logo_5.png" height="100px" width="300px">';
    //   logo.style.fontFamily = "Arial Black, Arial, sans-serif";
    //   logo.style.display = "flex";
    //   logo.style.alignItems = "center";
    //   logo.style.justifyContent = "center";
    //   //menu izquierdo entornos
    //   let menuIzq = document.querySelector("#sidebar > div");
    //   menuIzq.style.backgroundColor = "#000000";
    // } catch (error) {}

    //try {
    //selector menu comunitario

    // let menuComunitario = document.querySelector(
    //   "#sidebar > div > div.sidebar-menu > ul > li:nth-child(4)"
    // );
    // let menuComunitarioClick = document.querySelector(
    //   "#sidebar > div > div.sidebar-menu > ul > li:nth-child(4) > a"
    // );

    //setTimeout(function () {
    //   menuComunitarioClick.click();
    //   // }, 5000); // Retrasa el clic por 1 segundo

    //   menuComunitario.style.backgroundColor = "#000000";
    //   menuComunitario.style.fontFamily = "Arial Black, Arial, sans-serif";
    //   menuComunitario.style.fontWeight = "bold";
    //   menuComunitario.style.borderRadius = "20px";
    //   menuComunitario.style.border = "2px solid #FF0000";
    //   menuComunitario.style.backgroundColor = "#000000";

    //   const estiloInicial = {
    //     backgroundColor: menuComunitario.style.backgroundColor,
    //     color: menuComunitario.style.color,
    //     fontFamily: menuComunitario.style.fontFamily,
    //     fontSize: menuComunitario.style.fontSize,
    //     fontWeight: menuComunitario.style.fontWeight,
    //     borderRadius: menuComunitario.style.borderRadius,
    //   };

    //   menuComunitario.addEventListener("mouseover", function () {
    //     this.style.backgroundColor = "#BCBDC0";
    //     this.style.color = "#000000";
    //     this.style.fontFamily = "Arial Black, Arial, sans-serif";
    //     this.style.fontSize = "20px";
    //     this.style.fontWeight = "bold";
    //     this.style.borderRadius = "15px";
    //   });

    //   menuComunitario.addEventListener("mouseout", function () {
    //     this.style.backgroundColor = estiloInicial.backgroundColor;
    //     this.style.color = estiloInicial.color;
    //     this.style.fontFamily = estiloInicial.fontFamily;
    //     this.style.fontSize = estiloInicial.fontSize;
    //     this.style.fontWeight = estiloInicial.fontWeight;
    //     this.style.borderRadius = estiloInicial.borderRadius;
    //   });
    // } catch (error) {}

    try {
        let colorGris = "#BCBDC0";

        // submenu comuni
        let menuComunitarioList = document.querySelector(
            "#sidebar > div > div.sidebar-menu > ul > li:nth-child(4) > a > span"
        );
        menuComunitarioList.style.color = "#5B80FE";
        menuComunitarioList.style.fontSize = "15px";

        // // submenu mujeres
        // let MujeresSalud = document.querySelector("#forOpcionPublicoGesiForm0");
        // MujeresSalud.style.backgroundColor = "#000000";
        // MujeresSalud.innerHTML =
        //   '<form name="forOpcionPublicoGesiForm0" id="forOpcionPublicoGesiForm0" action="/GESI_sistemas/GESI_Form" method="POST">' +
        //   '<input type="hidden" name="IdSistemaGesiForm" value="95">' +
        //   "<li>" +
        //   '<a href="#" onclick="cargarPantallaGesiForm(\'forOpcionPublicoGesiForm0\')">Encuesta CE Mujeres</a>' +
        //   "</li>" +
        //   "</form>";

        // let MujeresSaludText = document.querySelector(
        //   "#forOpcionPublicoGesiForm0 > li > a"
        // );
        // MujeresSaludText.style.color = "#FFFFFF";
        // MujeresSaludText.style.fontFamily = "Arial, sans-serif";
        // MujeresSaludText.style.fontSize = "15px";
        // MujeresSaludText.style.backgroundColor = "#000000";

        // const estiloInicialMujeres = {
        //   backgroundColor: MujeresSaludText.style.backgroundColor,
        //   color: MujeresSaludText.style.color,
        //   fontFamily: MujeresSaludText.style.fontFamily,
        //   fontSize: MujeresSaludText.style.fontSize,
        // };

        // MujeresSaludText.addEventListener("mouseover", function () {
        //   this.style.backgroundColor = colorGris;
        //   this.style.color = "#000000";
        //   this.style.fontSize = "15px";
        //   this.style.borderRadius = "20px";
        // });

        // MujeresSaludText.addEventListener("mouseout", function () {
        //   this.style.backgroundColor = estiloInicialMujeres.backgroundColor;
        //   this.style.color = estiloInicialMujeres.color;
        //   this.style.fontFamily = estiloInicialMujeres.fontFamily;
        //   this.style.fontSize = estiloInicialMujeres.fontSize;
        //   this.style.fontWeight = estiloInicialMujeres.fontWeight;
        //   this.style.borderRadius = estiloInicialMujeres.borderRadius;
        // });

        // submenu guardianes
        // let Guardianes = document.querySelector("#forOpcionPublicoGesiForm1");
        // Guardianes.style.backgroundColor = "#000000";
        // Guardianes.innerHTML =
        //   '<form name="forOpcionPublicoGesiForm1" id="forOpcionPublicoGesiForm1" action="/GESI_sistemas/GESI_Form" method="POST">' +
        //   '<input type="hidden" name="IdSistemaGesiForm" value="83">' +
        //   "<li>" +
        //   '<a href="#" onclick="cargarPantallaGesiForm(\'forOpcionPublicoGesiForm1\')">Encuesta Guardianes</a>' +
        //   "</li>" +
        //   "</form>";

        // let GuardianesText = document.querySelector(
        //   "#forOpcionPublicoGesiForm1 > li > a"
        // );
        // GuardianesText.style.color = "#FFFFFF";
        // GuardianesText.style.fontFamily = "Arial, sans-serif";
        // GuardianesText.style.fontSize = "15px";
        // GuardianesText.style.backgroundColor = "#000000";

        // const estiloInicialGuardianes = {
        //   backgroundColor: GuardianesText.style.backgroundColor,
        //   color: GuardianesText.style.color,
        //   fontFamily: GuardianesText.style.fontFamily,
        //   fontSize: GuardianesText.style.fontSize,
        // };

        // GuardianesText.addEventListener("mouseover", function () {
        //   this.style.backgroundColor = colorGris;
        //   this.style.color = "#000000";
        //   this.style.fontSize = "15px";
        //   this.style.borderRadius = "20px";
        // });

        // GuardianesText.addEventListener("mouseout", function () {
        //   this.style.backgroundColor = estiloInicialGuardianes.backgroundColor;
        //   this.style.color = estiloInicialGuardianes.color;
        //   this.style.fontFamily = estiloInicialGuardianes.fontFamily;
        //   this.style.fontSize = estiloInicialGuardianes.fontSize;
        //   this.style.fontWeight = estiloInicialGuardianes.fontWeight;
        //   this.style.borderRadius = estiloInicialGuardianes.borderRadius;
        // });

        // submenu acondicionamiento fisico y mentasl
        // let AcondicionFisico = document.querySelector("#forOpcionPublicoGesiForm2");
        // AcondicionFisico.style.backgroundColor = "#000000";
        // AcondicionFisico.innerHTML =
        //   '<form name="forOpcionPublicoGesiForm2" id="forOpcionPublicoGesiForm2" action="/GESI_sistemas/GESI_Form" method="POST">' +
        //   '<input type="hidden" name="IdSistemaGesiForm" value="33">' +
        //   "<li>" +
        //   '<a href="#" onclick="cargarPantallaGesiForm(\'forOpcionPublicoGesiForm2\')">Acondicionamiento Físico y Salud Mental</a>' +
        //   "</li>" +
        //   "</form>";

        // let AcondicionFisicoText = document.querySelector(
        //   "#forOpcionPublicoGesiForm2 > li > a"
        // );
        // AcondicionFisicoText.style.color = "#FFFFFF";
        // AcondicionFisicoText.style.fontFamily = "Arial, sans-serif";
        // AcondicionFisicoText.style.fontSize = "15px";
        // AcondicionFisicoText.style.backgroundColor = "#000000";

        // const estiloInicialAcondicionFisico = {
        //   backgroundColor: AcondicionFisicoText.style.backgroundColor,
        //   color: AcondicionFisicoText.style.color,
        //   fontFamily: AcondicionFisicoText.style.fontFamily,
        //   fontSize: AcondicionFisicoText.style.fontSize,
        // };

        // AcondicionFisicoText.addEventListener("mouseover", function () {
        //   this.style.backgroundColor = colorGris;
        //   this.style.color = "#000000";
        //   this.style.fontSize = "15px";
        //   this.style.borderRadius = "20px";
        // });

        // AcondicionFisicoText.addEventListener("mouseout", function () {
        //   this.style.backgroundColor =
        //     estiloInicialAcondicionFisico.backgroundColor;
        //   this.style.color = estiloInicialAcondicionFisico.color;
        //   this.style.fontFamily = estiloInicialAcondicionFisico.fontFamily;
        //   this.style.fontSize = estiloInicialAcondicionFisico.fontSize;
        //   this.style.fontWeight = estiloInicialAcondicionFisico.fontWeight;
        //   this.style.borderRadius = estiloInicialAcondicionFisico.borderRadius;
        // });

        // submenu acondicionamiento escala cami
        // let Cami = document.querySelector("#forOpcionPublicoGesiForm3");
        // Cami.style.backgroundColor = "#000000";
        // Cami.innerHTML =
        //   '<form name="forOpcionPublicoGesiForm3" id="forOpcionPublicoGesiForm3" action="/GESI_sistemas/GESI_Form" method="POST">' +
        //   '<input type="hidden" name="IdSistemaGesiForm" value="63">' +
        //   "<li>" +
        //   '<a href="#" onclick="cargarPantallaGesiForm(\'forOpcionPublicoGesiForm3\')">Escala CAMI</a>' +
        //   "</li>" +
        //   "</form>";

        // let CamiText = document.querySelector(
        //   "#forOpcionPublicoGesiForm3 > li > a"
        // );
        // CamiText.style.color = "#FFFFFF";
        // CamiText.style.fontFamily = "Arial, sans-serif";
        // CamiText.style.fontSize = "15px";
        // CamiText.style.backgroundColor = "#000000";

        // const estiloInicialCami = {
        //   backgroundColor: CamiText.style.backgroundColor,
        //   color: CamiText.style.color,
        //   fontFamily: CamiText.style.fontFamily,
        //   fontSize: CamiText.style.fontSize,
        // };

        // CamiText.addEventListener("mouseover", function () {
        //   this.style.backgroundColor = colorGris;
        //   this.style.color = "#000000";
        //   this.style.fontSize = "15px";
        //   this.style.borderRadius = "20px";
        // });

        // CamiText.addEventListener("mouseout", function () {
        //   this.style.backgroundColor = estiloInicialCami.backgroundColor;
        //   this.style.color = estiloInicialCami.color;
        //   this.style.fontFamily = estiloInicialCami.fontFamily;
        //   this.style.fontSize = estiloInicialCami.fontSize;
        //   this.style.fontWeight = estiloInicialCami.fontWeight;
        //   this.style.borderRadius = estiloInicialCami.borderRadius;
        // });

        // // submenu acondicionamiento escala caldas
        // let Caldas = document.querySelector("#forOpcionPublicoGesiForm4");
        // Caldas.style.backgroundColor = "#000000";
        // Caldas.innerHTML =
        //   '<form name="forOpcionPublicoGesiForm4" id="forOpcionPublicoGesiForm4" action="/GESI_sistemas/GESI_Form" method="POST">' +
        //   '<input type="hidden" name="IdSistemaGesiForm" value="81">' +
        //   "<li>" +
        //   '<a href="#" onclick="cargarPantallaGesiForm(\'forOpcionPublicoGesiForm4\')">Escala CALDAS</a>' +
        //   "</li>" +
        //   "</form>";

        // let CaldasText = document.querySelector(
        //   "#forOpcionPublicoGesiForm4 > li > a"
        // );
        // CaldasText.style.color = "#FFFFFF";
        // CaldasText.style.fontFamily = "Arial, sans-serif";
        // CaldasText.style.fontSize = "15px";
        // CaldasText.style.backgroundColor = "#000000";

        // const estiloInicialCaldas = {
        //   backgroundColor: CaldasText.style.backgroundColor,
        //   color: CaldasText.style.color,
        //   fontFamily: CaldasText.style.fontFamily,
        //   fontSize: CaldasText.style.fontSize,
        // };

        // CaldasText.addEventListener("mouseover", function () {
        //   this.style.backgroundColor = colorGris;
        //   this.style.color = "#000000";
        //   this.style.fontSize = "15px";
        //   this.style.borderRadius = "20px";
        // });

        // CaldasText.addEventListener("mouseout", function () {
        //   this.style.backgroundColor = estiloInicialCaldas.backgroundColor;
        //   this.style.color = estiloInicialCaldas.color;
        //   this.style.fontFamily = estiloInicialCaldas.fontFamily;
        //   this.style.fontSize = estiloInicialCaldas.fontSize;
        //   this.style.fontWeight = estiloInicialCaldas.fontWeight;
        //   this.style.borderRadius = estiloInicialCaldas.borderRadius;
        // });

        // // SUBMENU Cuidarte
        // let Cuidarte = document.querySelector("#forOpcionPublicoGesiForm5");
        // Cuidarte.style.backgroundColor = "#000000";
        // Cuidarte.innerHTML =
        //   '<form name="forOpcionPublicoGesiForm5" id="forOpcionPublicoGesiForm5" action="/GESI_sistemas/GESI_Form" method="POST">' +
        //   '<input type="hidden" name="IdSistemaGesiForm" value="65">' +
        //   "<li>" +
        //   '<a href="#" onclick="cargarPantallaGesiForm(\'forOpcionPublicoGesiForm5\')">Encuesta CuidArte</a>' +
        //   "</li>" +
        //   "</form>";

        // let CuidarteText = document.querySelector(
        //   "#forOpcionPublicoGesiForm5 > li > a"
        // );
        // CuidarteText.style.color = "#FFFFFF";
        // CuidarteText.style.fontFamily = "Arial, sans-serif";
        // CuidarteText.style.fontSize = "15px";
        // CuidarteText.style.backgroundColor = "#000000";

        // const estiloInicialCuidarte = {
        //   backgroundColor: CuidarteText.style.backgroundColor,
        //   color: CuidarteText.style.color,
        //   fontFamily: CuidarteText.style.fontFamily,
        //   fontSize: CuidarteText.style.fontSize,
        // };

        // CuidarteText.addEventListener("mouseover", function () {
        //   this.style.backgroundColor = colorGris;
        //   this.style.color = "#000000";
        //   this.style.fontSize = "15px";
        //   this.style.borderRadius = "20px";
        // });

        // CuidarteText.addEventListener("mouseout", function () {
        //   this.style.backgroundColor = estiloInicialCuidarte.backgroundColor;
        //   this.style.color = estiloInicialCuidarte.color;
        //   this.style.fontFamily = estiloInicialCuidarte.fontFamily;
        //   this.style.fontSize = estiloInicialCuidarte.fontSize;
        //   this.style.fontWeight = estiloInicialCuidarte.fontWeight;
        //   this.style.borderRadius = estiloInicialCuidarte.borderRadius;
        // });

        // SUBMENU BasicasHumanas
        // let BasicasHumanas = document.querySelector("#forOpcionPublicoGesiForm6");
        // BasicasHumanas.style.backgroundColor = "#000000";
        // BasicasHumanas.innerHTML =
        //   '<form name="forOpcionPublicoGesiForm6" id="forOpcionPublicoGesiForm6" action="/GESI_sistemas/GESI_Form" method="POST">' +
        //   '<input type="hidden" name="IdSistemaGesiForm" value="67">' +
        //   "<li>" +
        //   '<a href="#" onclick="cargarPantallaGesiForm(\'forOpcionPublicoGesiForm6\')">Básicas Humanas</a>' +
        //   "</li>" +
        //   "</form>";

        // let BasicasHumanasText = document.querySelector(
        //   "#forOpcionPublicoGesiForm6 > li > a"
        // );
        // BasicasHumanasText.style.color = "#FFFFFF";
        // BasicasHumanasText.style.fontFamily = "Arial, sans-serif";
        // BasicasHumanasText.style.fontSize = "15px";
        // BasicasHumanasText.style.backgroundColor = "#000000";

        // const estiloInicialBasicasHumanas = {
        //   backgroundColor: BasicasHumanasText.style.backgroundColor,
        //   color: BasicasHumanasText.style.color,
        //   fontFamily: BasicasHumanasText.style.fontFamily,
        //   fontSize: BasicasHumanasText.style.fontSize,
        // };

        // BasicasHumanasText.addEventListener("mouseover", function () {
        //   this.style.backgroundColor = colorGris;
        //   this.style.color = "#000000";
        //   this.style.fontSize = "15px";
        //   this.style.borderRadius = "20px";
        // });

        // BasicasHumanasText.addEventListener("mouseout", function () {
        //   this.style.backgroundColor = estiloInicialBasicasHumanas.backgroundColor;
        //   this.style.color = estiloInicialBasicasHumanas.color;
        //   this.style.fontFamily = estiloInicialBasicasHumanas.fontFamily;
        //   this.style.fontSize = estiloInicialBasicasHumanas.fontSize;
        //   this.style.fontWeight = estiloInicialBasicasHumanas.fontWeight;
        //   this.style.borderRadius = estiloInicialBasicasHumanas.borderRadius;
        // });

        // // SUBMENU Zarit
        // let Zarit = document.querySelector("#forOpcionPublicoGesiForm7");
        // Zarit.style.backgroundColor = "#000000";
        // Zarit.innerHTML =
        //   '<form name="forOpcionPublicoGesiForm7" id="forOpcionPublicoGesiForm7" action="/GESI_sistemas/GESI_Form" method="POST">' +
        //   '<input type="hidden" name="IdSistemaGesiForm" value="94">' +
        //   "<li>" +
        //   '<a href="#" onclick="cargarPantallaGesiForm(\'forOpcionPublicoGesiForm7\')">Encuesta Zarit</a>' +
        //   "</li>" +
        //   "</form>";

        // let ZaritText = document.querySelector(
        //   "#forOpcionPublicoGesiForm7 > li > a"
        // );
        // ZaritText.style.color = "#FFFFFF";
        // ZaritText.style.fontFamily = "Arial, sans-serif";
        // ZaritText.style.fontSize = "15px";
        // ZaritText.style.backgroundColor = "#000000";

        // const estiloInicialZarit = {
        //   backgroundColor: ZaritText.style.backgroundColor,
        //   color: ZaritText.style.color,
        //   fontFamily: ZaritText.style.fontFamily,
        //   fontSize: ZaritText.style.fontSize,
        // };

        // ZaritText.addEventListener("mouseover", function () {
        //   this.style.backgroundColor = colorGris;
        //   this.style.color = "#000000";
        //   this.style.fontSize = "15px";
        //   this.style.borderRadius = "20px";
        // });

        // ZaritText.addEventListener("mouseout", function () {
        //   this.style.backgroundColor = estiloInicialZarit.backgroundColor;
        //   this.style.color = estiloInicialZarit.color;
        //   this.style.fontFamily = estiloInicialZarit.fontFamily;
        //   this.style.fontSize = estiloInicialZarit.fontSize;
        //   this.style.fontWeight = estiloInicialZarit.fontWeight;
        //   this.style.borderRadius = estiloInicialZarit.borderRadius;
        // });

        // // SUBMENU Pid
        // let Pid = document.querySelector("#forOpcionPublicoGesiForm8");
        // Pid.style.backgroundColor = "#000000";
        // Pid.innerHTML =
        //   '<form name="forOpcionPublicoGesiForm8" id="forOpcionPublicoGesiForm8" action="/GESI_sistemas/GESI_Form" method="POST">' +
        //   '<input type="hidden" name="IdSistemaGesiForm" value="84">' +
        //   "<li>" +
        //   '<a href="#" onclick="cargarPantallaGesiForm(\'forOpcionPublicoGesiForm8\')">Encuesta PID</a>' +
        //   "</li>" +
        //   "</form>";

        // let PidText = document.querySelector("#forOpcionPublicoGesiForm8 > li > a");
        // PidText.style.color = "#FFFFFF";
        // PidText.style.fontFamily = "Arial, sans-serif";
        // PidText.style.fontSize = "15px";
        // PidText.style.backgroundColor = "#000000";

        // const estiloInicialPid = {
        //   backgroundColor: PidText.style.backgroundColor,
        //   color: PidText.style.color,
        //   fontFamily: PidText.style.fontFamily,
        //   fontSize: PidText.style.fontSize,
        // };

        // PidText.addEventListener("mouseover", function () {
        //   this.style.backgroundColor = colorGris;
        //   this.style.color = "#000000";
        //   this.style.fontSize = "15px";
        //   this.style.borderRadius = "20px";
        // });

        // PidText.addEventListener("mouseout", function () {
        //   this.style.backgroundColor = estiloInicialPid.backgroundColor;
        //   this.style.color = estiloInicialPid.color;
        //   this.style.fontFamily = estiloInicialPid.fontFamily;
        //   this.style.fontSize = estiloInicialPid.fontSize;
        //   this.style.fontWeight = estiloInicialPid.fontWeight;
        //   this.style.borderRadius = estiloInicialPid.borderRadius;
        // });

        // // SUBMENU Fortalecimiento
        // let Fortalecimiento = document.querySelector("#forOpcionPublicoGesiForm9");
        // Fortalecimiento.style.backgroundColor = "#000000";
        // Fortalecimiento.innerHTML =
        //   '<form name="forOpcionPublicoGesiForm9" id="forOpcionPublicoGesiForm9" action="/GESI_sistemas/GESI_Form" method="POST">' +
        //   '<input type="hidden" name="IdSistemaGesiForm" value="82">' +
        //   "<li>" +
        //   '<a href="#" onclick="cargarPantallaGesiForm(\'forOpcionPublicoGesiForm9\')">Encuesta Fortalecimiento</a>' +
        //   "</li>" +
        //   "</form>";

        // let FortalecimientoText = document.querySelector(
        //   "#forOpcionPublicoGesiForm9 > li > a"
        // );
        // FortalecimientoText.style.color = "#FFFFFF";
        // FortalecimientoText.style.fontFamily = "Arial, sans-serif";
        // FortalecimientoText.style.fontSize = "15px";
        // FortalecimientoText.style.backgroundColor = "#000000";

        // const estiloInicialFortalecimiento = {
        //   backgroundColor: FortalecimientoText.style.backgroundColor,
        //   color: FortalecimientoText.style.color,
        //   fontFamily: FortalecimientoText.style.fontFamily,
        //   fontSize: FortalecimientoText.style.fontSize,
        // };

        // FortalecimientoText.addEventListener("mouseover", function () {
        //   this.style.backgroundColor = colorGris;
        //   this.style.color = "#000000";
        //   this.style.fontSize = "15px";
        //   this.style.borderRadius = "20px";
        // });

        // FortalecimientoText.addEventListener("mouseout", function () {
        //   this.style.backgroundColor = estiloInicialFortalecimiento.backgroundColor;
        //   this.style.color = estiloInicialFortalecimiento.color;
        //   this.style.fontFamily = estiloInicialFortalecimiento.fontFamily;
        //   this.style.fontSize = estiloInicialFortalecimiento.fontSize;
        //   this.style.fontWeight = estiloInicialFortalecimiento.fontWeight;
        //   this.style.borderRadius = estiloInicialFortalecimiento.borderRadius;
        // });

        // // SUBMENU Maps
        // let Maps = document.querySelector("#forOpcionPublicoGesiForm10");
        // Maps.style.backgroundColor = "#000000";
        // Maps.innerHTML =
        //   '<form name="forOpcionPublicoGesiForm10" id="forOpcionPublicoGesiForm10" action="/GESI_sistemas/GESI_Form" method="POST">' +
        //   '<input type="hidden" name="IdSistemaGesiForm" value="85">' +
        //   "<li>" +
        //   '<a href="#" onclick="cargarPantallaGesiForm(\'forOpcionPublicoGesiForm10\')">MAPS</a>' +
        //   "</li>" +
        //   "</form>";

        // let MapsText = document.querySelector(
        //   "#forOpcionPublicoGesiForm10 > li > a"
        // );
        // MapsText.style.color = colorNaranja;
        // MapsText.style.fontFamily = "Arial, sans-serif";
        // MapsText.style.fontSize = "15px";
        // MapsText.style.backgroundColor = colorNegro;

        // const estiloInicialMaps = {
        //   backgroundColor: MapsText.style.backgroundColor,
        //   color: MapsText.style.color,
        //   fontFamily: MapsText.style.fontFamily,
        //   fontSize: MapsText.style.fontSize,
        // };

        // MapsText.addEventListener("mouseover", function () {
        //   this.style.backgroundColor = colorGris;
        //   this.style.color = "#000000";
        //   this.style.fontSize = "15px";
        //   this.style.borderRadius = "20px";
        // });

        // MapsText.addEventListener("mouseout", function () {
        //   this.style.backgroundColor = estiloInicialMaps.backgroundColor;
        //   this.style.color = estiloInicialMaps.color;
        //   this.style.fontFamily = estiloInicialMaps.fontFamily;
        //   this.style.fontSize = estiloInicialMaps.fontSize;
        //   this.style.fontWeight = estiloInicialMaps.fontWeight;
        //   this.style.borderRadius = estiloInicialMaps.borderRadius;
        // });

        // SUBMENU Sesiones
        // let Sesiones = document.querySelector("#forOpcionPublicoGesiForm11");
        // Sesiones.style.backgroundColor = colorNegro;
        // Sesiones.innerHTML =
        //   '<form name="forOpcionPublicoGesiForm11" id="forOpcionPublicoGesiForm11" action="/GESI_sistemas/GESI_Form" method="POST">' +
        //   '<input type="hidden" name="IdSistemaGesiForm" value="86">' +
        //   "<li>" +
        //   '<a href="#" onclick="cargarPantallaGesiForm(\'forOpcionPublicoGesiForm11\')">Sesiones Colectivas</a>' +
        //   "</li>" +
        //   "</form>";

        // let SesionesText = document.querySelector(
        //   "#forOpcionPublicoGesiForm11 > li > a"
        // );
        // SesionesText.style.color = colorNaranja;
        // SesionesText.style.fontFamily = "Arial, sans-serif";
        // SesionesText.style.fontSize = "15px";
        // SesionesText.style.backgroundColor = "#000000";

        // const estiloInicialSesiones = {
        //   backgroundColor: SesionesText.style.backgroundColor,
        //   color: SesionesText.style.color,
        //   fontFamily: SesionesText.style.fontFamily,
        //   fontSize: SesionesText.style.fontSize,
        // };

        // SesionesText.addEventListener("mouseover", function () {
        //   this.style.backgroundColor = colorGris;
        //   this.style.color = "#000000";
        //   this.style.fontSize = "15px";
        //   this.style.borderRadius = "20px";
        // });

        // SesionesText.addEventListener("mouseout", function () {
        //   this.style.backgroundColor = estiloInicialSesiones.backgroundColor;
        //   this.style.color = estiloInicialSesiones.color;
        //   this.style.fontFamily = estiloInicialSesiones.fontFamily;
        //   this.style.fontSize = estiloInicialSesiones.fontSize;
        //   this.style.fontWeight = estiloInicialSesiones.fontWeight;
        //   this.style.borderRadius = estiloInicialSesiones.borderRadius;
        // });

        // // SUBMENU Vinculate
        // let Vinculate = document.querySelector("#forOpcionPublicoGesiForm12");
        // Vinculate.style.backgroundColor = "#000000";
        // Vinculate.innerHTML =
        //   '<form name="forOpcionPublicoGesiForm12" id="forOpcionPublicoGesiForm12" action="/GESI_sistemas/GESI_Form" method="POST">' +
        //   '<input type="hidden" name="IdSistemaGesiForm" value="79">' +
        //   "<li>" +
        //   '<a href="#" onclick="cargarPantallaGesiForm(\'forOpcionPublicoGesiForm12\')">Vincúlate</a>' +
        //   "</li>" +
        //   "</form>";

        // let VinculateText = document.querySelector(
        //   "#forOpcionPublicoGesiForm12 > li > a"
        // );
        // VinculateText.style.color = colorNaranja;
        // VinculateText.style.fontFamily = "Arial, sans-serif";
        // VinculateText.style.fontSize = "15px";
        // VinculateText.style.backgroundColor = "#000000";

        // const estiloInicialVinculate = {
        //   backgroundColor: VinculateText.style.backgroundColor,
        //   color: VinculateText.style.color,
        //   fontFamily: VinculateText.style.fontFamily,
        //   fontSize: VinculateText.style.fontSize,
        // };

        // VinculateText.addEventListener("mouseover", function () {
        //   this.style.backgroundColor = colorGris;
        //   this.style.color = "#000000";
        //   this.style.fontSize = "15px";
        //   this.style.borderRadius = "20px";
        // });

        // VinculateText.addEventListener("mouseout", function () {
        //   this.style.backgroundColor = estiloInicialVinculate.backgroundColor;
        //   this.style.color = estiloInicialVinculate.color;
        //   this.style.fontFamily = estiloInicialVinculate.fontFamily;
        //   this.style.fontSize = estiloInicialVinculate.fontSize;
        //   this.style.fontWeight = estiloInicialVinculate.fontWeight;
        //   this.style.borderRadius = estiloInicialVinculate.borderRadius;
        // });

        //quitar menu administrativo
        try {
            let usuarioLog = document.querySelector(
                "#sidebar > div > div.sidebar-header > div.user-info > span.user-name"
            ).textContent;
            let otrasApsQuitar = document.querySelector(
                "#sidebar > div > div.sidebar-menu > ul > li:nth-child(7)"
            );
            if (!usuarioLog.includes("Jeferson")) {
                otrasApsQuitar.innerHTML = "";
            }
        } catch (error) {}
        //Quitar otros menus
        try {
            let entornosGesi = document.querySelector(
                "#sidebar > div > div.sidebar-menu > ul > li.header-menu"
            );
            entornosGesi.innerHTML = "";
            let HogarQuitar = document.querySelector(
                "#sidebar > div > div.sidebar-menu > ul > li:nth-child(2)"
            );
            HogarQuitar.innerHTML = "";
            let InstitucionalQuitar = document.querySelector(
                "#sidebar > div > div.sidebar-menu > ul > li:nth-child(3)"
            );
            InstitucionalQuitar.innerHTML = "";
            let EducativoQuitar = document.querySelector(
                "#sidebar > div > div.sidebar-menu > ul > li:nth-child(5)"
            );
            EducativoQuitar.innerHTML = "";
            let LaboralQuitar = document.querySelector(
                "#sidebar > div > div.sidebar-menu > ul > li:nth-child(6)"
            );
            LaboralQuitar.innerHTML = "";
            let IndicadoresQuitar = document.querySelector(
                "#sidebar > div > div.sidebar-menu > ul > li:nth-child(8)"
            );
            IndicadoresQuitar.innerHTML = "";
        } catch (error) {}
        // quitar los Zetas

        // let Z1 = document.querySelector("#forOpcionPublicoGesiForm13");
        // Z1.innerHTML = "";
        // let Z2 = document.querySelector("#forOpcionPublicoGesiForm14");
        // Z2.innerHTML = "";
        // let Z3 = document.querySelector("#forOpcionPublicoGesiForm15");
        // Z3.innerHTML = "";
        // let Z4 = document.querySelector("#forOpcionPublicoGesiForm16");
        // Z4.innerHTML = "";
        // let Z5 = document.querySelector("#forOpcionPublicoGesiForm17");
        // Z5.innerHTML = "";
        // let Z6 = document.querySelector("#forOpcionPublicoGesiForm18");
        // Z6.innerHTML = "";
        // let Z7 = document.querySelector("#forOpcionPublicoGesiForm19");
        // Z7.innerHTML = "";
        // let Z8 = document.querySelector("#forOpcionPublicoGesiForm20");
        // Z8.innerHTML = "";

        let concordancia = document.querySelector(
            "#formularioFiltro > div:nth-child(7) > div > table > tbody"
        );
        concordancia.style.fontFamily = "Arial Black, Arial, sans-serif";
        concordancia.style.fontSize = "15px";
        concordancia.style.fontWeight = "bold";
    } catch (error) {}

    try {
        const inputs = document.querySelectorAll("input");

        // Comprobamos si ya se ha almacenado la fecha de eliminación
        const lastClearDate = localStorage.getItem("clearDate");

        // Si no hay una fecha almacenada o si la fecha almacenada es anterior a la fecha actual, borramos el historial
        if (!lastClearDate || new Date(lastClearDate) < new Date()) {
            inputs.forEach((input) => {
                input.setAttribute("autocomplete", "on");
            });

            // Calculamos la fecha de mañana
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);

            // Almacenamos la fecha de eliminación en localStorage
            localStorage.setItem("clearDate", tomorrow);
        }
    } catch (error) {
        console.error("Error:", error);
    }

    try {
        const inputs = document.querySelectorAll("input");

        inputs.forEach((input) => {
            input.setAttribute("autocomplete", "off");
        });
    } catch (error) {}

    try {
        //id ficha visible

        for (let i = 1; i < 11; i++) {
            let idFichaVisible = document.querySelector(
                `#main_body > div > div > main > div > div > div > div:nth-child(2) > div.panel-body > table > tbody > tr > td:nth-child(${i}) > form > input[type=hidden]:nth-child(4)`
            );
            /*
            let idFichaVisible = document.querySelector(
              `#main_body > div > div > main > div > div > div > div.panel-body > table > tbody > tr:nth-child(${i}) > td:nth-child(1) > form > input[type=hidden]:nth-child(4)`
            );
            */
            idFichaVisible.type = "";
            idFichaVisible.style.borderRadius = "20px";
        }
    } catch (error3) {}
    //tener en cuenta que es en caso de emergencia
    // try {
    //   const inputspostest = document.querySelectorAll('input');
    //   inputspostest.forEach(input => {
    //     input.removeAttribute('required');
    //   });
    // } catch (error) {}

    /*  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

    try {
        /* CONDICIONAL FECHA INTERVENCION, hace que solo se puedan crear fichas digitadas en el mes correspondiente */
        /* Declara variables de color */
        let bgError = "rgba(255, 50, 50, 0.4)";
        let bgSuccess = "rgba(50, 255, 50, 0.7)";
        // Obtén el elemento de entrada de fecha
        const fechaInput = document.querySelector("#FechaIntervencion");

        // Agrega el evento de escucha 'input' al campo de fecha
        fechaInput.addEventListener("change", validarFecha);

        // Función para validar la fecha ingresada
        function validarFecha() {
            var verificar = document.querySelector("#FechaIntervencion").value;
            var fechaComponentes1 = verificar.split("/");
            var mes1 = fechaComponentes1[1];
            var año1 = fechaComponentes1[2];

            // Verifica si el mes seleccionado no es el mes deseado (por ejemplo, febrero = 2)
            if ((mes1 != 11) || año1 != 2024) {
                // Restablece el valor del campo de fecha a una fecha válida dentro del mes deseado
                alert("Fecha incorrecta");
                document.querySelector("#FechaIntervencion").value = "";
            }
        }
        //Validar consecutivo
        let consecutivo = document.querySelector("#Consecutivo_fic");
        consecutivo.addEventListener("keyup", function() {
            this.value.length !== 6 && this.value.length !== 6 ?
                (toggleBtnActualizacion(0), (this.style.backgroundColor = bgError)) :
                (toggleBtnActualizacion(1), (this.style.backgroundColor = bgSuccess));
        });

        function toggleBtnActualizacion(estado) {
            let btnActualizar = document.querySelector("#botonActualizarInformacion");
            estado == 1 ? (btnActualizar.disabled = false) : false;
            estado == 0 ? (btnActualizar.disabled = true) : false;
        }
    } catch (error) {}

    function calc_Edad(fecha_Nacimiento, fecha_Int) {
        let fechaUno = Date(fecha_Nacimiento);
        let fechaDos = Date(fecha_Int);
        let diferenciaMs = fechaDos - fechaUno;

        return diferenciaMs / (1000 * 60 * 60 * 24 * 365.25);
    }

    /*----------------------------- MEDICIÓN DE TIEMPOS ---------------------------------*/
    try {
        var mAux, sAux;
        let tiempo;
        let h = window.localStorage.getItem("h");
        let m = window.localStorage.getItem("m");
        let s = window.localStorage.getItem("s");
        let urlActual = window.location;

        function formatoYMD(fecha) {
            let fechaArray = fecha.split("/");
            let dia = fechaArray[0];
            let mes = fechaArray[1];
            let anio = fechaArray[2];

            return anio + "-" + mes + "-" + dia;
        }

        try {
            if (
                urlActual.href ==
                "https://gesiapps.saludcapital.gov.co/GESI_sistemas/GESI_Form/formulario"
            ) {
                ResetCrono();
            } else if (
                urlActual.href ==
                "https://gesiapps.saludcapital.gov.co/GESI_sistemas/GESI_Form/formulario"
            ) {
                init();
            }
        } catch (error) {}

        try {
            btnRegresar = document.querySelector(
                "#main_body > div.page-wrapper.chiller-theme.toggled > div > main > div > div > div > div.panel-heading > div > div > table > tbody > tr > td:nth-child(7) > input"
            );
            btnRegresar.addEventListener("click", DetenerCrono);
        } catch (error) {}

        try {
            btnBuscar = document.querySelector(
                "#main_body > div.page-wrapper.chiller-theme.toggled > div > main > div > div > div > div.panel-heading > div > div > table > tbody > tr > td:nth-child(19) > input"
            );
            btnBuscar.addEventListener("click", init);

            let btnNuevaFicha = document.querySelector(
                "#main_body > div.page-wrapper.chiller-theme.toggled > div > main > div > div > div > div.panel-heading > div > div > table > tbody > tr > td:nth-child(26) > input"
            );
            btnNuevaFicha.addEventListener("click", init);
        } catch (error) {}

        function getNombreBase() {
            let base = document.querySelector(
                "#main_body > div.page-wrapper.chiller-theme.toggled > div > main > div > div > div > div.panel-heading > div > div > table > tbody > tr > td:nth-child(1) > b"
            );
            return base.textContent;
        }

        function getNumFicha() {
            let numFicha = document.querySelector("#Ficha_fic");
            return numFicha.value;
        }

        function getUserNewFicha() {
            let user = document.querySelector(
                "#formularioNuevoFormato > input[type=hidden]:nth-child(1)"
            );
            return user.value;
        }

        function DetenerCrono() {
            let tiempoTotal = h + ":" + mAux + ":" + sAux;
            let fechaIntervencion =
                document.querySelector("#FechaIntervencion").value;
            guardarInfo(tiempoTotal, formatoYMD(fechaIntervencion));
            h = 0;
            m = 0;
            s = 0;
            window.localStorage.setItem("s", s);
            window.localStorage.setItem("m", m);
            window.localStorage.setItem("h", h);
            clearInterval(tiempo);
        }

        function init() {
            //Guardar nombre usuario
            try {
                let user = document.querySelector("paginaUsuario");
                localStorage.setItem("user", user.value);
            } catch (error) {}

            tiempo = setInterval(cronometrar, 1000);
        }

        function ResetCrono() {
            h = 0;
            m = 0;
            s = 0;
            window.localStorage.setItem("s", s);
            window.localStorage.setItem("m", m);
            window.localStorage.setItem("h", h);
        }

        function cronometrar() {
            s++;

            if (s > 59) {
                m++;
                s = 0;
            }
            if (m > 59) {
                h++;
                m = 0;
            }

            if (s < 10) {
                sAux = "0" + s;
            } else {
                sAux = s;
            }
            if (m.length < 2) {
                mAux = "0" + m;
            } else {
                mAux = m;
            }

            window.localStorage.setItem("s", sAux);
            window.localStorage.setItem("m", mAux);
            window.localStorage.setItem("h", h);
            mostrar();
        }

        function mostrar() {
            let seg = window.localStorage.getItem("s");
            let min = window.localStorage.getItem("m");
            let hrs = window.localStorage.getItem("h");
            console.log(hrs + ":" + min + ":" + seg);
        }

        function guardarInfo(tiempoTotal, fechaInt) {
            let base = getNombreBase();
            let ficha = getNumFicha();
            console.log(fechaInt);
            let usuarioFinal;
            let user = localStorage.getItem("user");
            if (user == undefined) {
                usuarioFinal = getUserNewFicha();
            } else {
                usuarioFinal = user;
            }

            $.ajax({
                type: "POST",
                url: "https://gesiapp.com.co/js/tiempoFichas/cronoFichas.php",
                data: {
                    base: base,
                    user: usuarioFinal,
                    tiempo: tiempoTotal,
                    ficha: ficha,
                    fechaInt: fechaInt,
                },
                success: function(r) {
                    console.log(r);
                },
            });
        }
    } catch (error) {}
} catch (error) {}

/*
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX




            1 VINCULATE




XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

try {
    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    1 VINCULATE   |   1 VINCULATE 1
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    /*   1.1.0   cammpo requerido Tipo (.) - Debe ser obligatorio  document.querySelector("#valorControl9225")     */

    try {
        let vinculateTipo = document.querySelector("#valorControl9225");
        //vinculateTipo.value = "";
        vinculateTipo.required = true;
    } catch (error) {}
    /*   1.1.1   LONGITUD PRIMER NOMBRE   - Debe ser mayor a 4 caracteres  document.querySelector("#valorControl9842")     */
    try {
        let firstName111 = document.querySelector("#valorControl9842");
        firstName111.addEventListener("change", function() {
            if (this.value.length < 3) {
                alert("El valor debe tener al menos 3 caracteres.");
                this.value = "";
            }
        });
    } catch (error) {}
    /*   1.1.2   LONGITUD SEGUNDO NOMBRE   - Debe ser mayor a 4 caracteres document.querySelector("#valorControl9843")     */
    try {
        let firstName112 = document.querySelector("#valorControl9843");
        firstName112.addEventListener("change", function() {
            switch (this.value.length) {
                case 2:
                case 1:
                    alert("El valor debe tener al menos 3 caracteres.");
                    this.value = "";
                    break;
                default:
                    break;
            }
        });
    } catch (error) {}
    /*   1.1.3   LONGITUD PRIMER APELLIDO   - Debe ser mayor a 4 caracteres  document.querySelector("#valorControl9844")     */
    try {
        let firstName113 = document.querySelector("#valorControl9844");

        firstName113.addEventListener("change", function() {
            if (this.value.length < 3) {
                alert("El valor debe tener al menos 3 caracteres.");
                this.value = "";
            }
        });
    } catch (error) {}
    /*   1.1.4   LONGITUD SEGUNDO APELLIDO   - Debe ser mayor a 4 caracteres document.querySelector("#valorControl9845")     */
    try {
        let firstName114 = document.querySelector("#valorControl9845");

        firstName114.addEventListener("change", function() {
            switch (this.value.length) {
                case 2:
                case 1:
                    alert("El valor debe tener al menos 3 caracteres.");
                    this.value = "";
                    break;

                default:
                    break;
            }
        });
    } catch (error) {}
    /*   1.1.5   LONGITUD DE NUMERO DE DOCUMENTO document.querySelector("#valorControl9847") - No puede ser de 9 o mas de 12 caracteres   */
    try {
        let VinculateNumeroDocumento = document.querySelector("#valorControl9847");
        VinculateNumeroDocumento.addEventListener("blur", function() {
            LongitudNumeroDocumento(VinculateNumeroDocumento);
        });
    } catch (error) {}
    /*   1.1.6   VALIDA NACIONALIDAD CON TIPO DE DOCUMENTO | NACIONALIDAD = document.querySelector("#valorControl9848") - TIPO DE DOCUMETO = document.querySelector("#valorControl9846")   */
    try {
        let TipoDocumento116 = document.querySelector("#valorControl9846");
        let Nacionalidad116 = document.querySelector("#valorControl9848");
        const colorOriginal116 = Nacionalidad116.style.backgroundColor;
        let optionColombia116 = Nacionalidad116.querySelector("option[value='50']");

        TipoDocumento116.addEventListener("change", function() {
            switch (this.value) {
                case "59":
                case "60":
                case "61":
                    Nacionalidad116.value = "50";
                    Nacionalidad116.style.backgroundColor = "#23E320";
                    optionColombia116.disabled = false;

                    break;

                default:
                    Nacionalidad116.value = "";
                    Nacionalidad116.style.backgroundColor = colorOriginal116;
                    optionColombia116.disabled = true;

                    break;
            }
        });
    } catch (error) {}
    /*   1.1.7   VALIDAR ESTADO CIVIL BAJO FECHA DE NACIMIENTO  */
    try {
        /*
        document.querySelector("#valorControl9849") | Campo Estado Civil (.)
        document.querySelector("#valorControl9850") | Campo Fecha de Nacimiento (.)		*/

        document
            .querySelector("#valorControl9850")
            .addEventListener("change", function() {
                var verificar = document.querySelector("#valorControl9850").value;
                var fechaComponentes1 = verificar.split("/");
                var dia1 = fechaComponentes1[0];
                var mes1 = fechaComponentes1[1];
                var año1 = fechaComponentes1[2];
                var fecha1 = new Date(año1, mes1, dia1);
                var diaFormateado1 = ("0" + fecha1.getDate()).slice(-2);
                var mesFormateado1 = ("0" + (fecha1.getMonth() + 1)).slice(-2);
                var añoFormateado1 = fecha1.getFullYear();

                var fechaFormateada1 =
                    añoFormateado1 + "/" + mesFormateado1 + "/" + diaFormateado1;

                var fecha1 = new Date(fechaFormateada1);
                var ValHoy = new Date();
                var edad = ValHoy.getFullYear() - fecha1.getFullYear();
                var m = ValHoy.getMonth() - fecha1.getMonth();

                if (m < 0 || (m === 0 && ValHoy.getDate() < fecha1.getDate())) {
                    edad - 1;
                }

                if (edad >= 0 && edad <= 13) {
                    document.querySelector("#valorControl9849").value = "78";
                    var edad1 = document.querySelector("#valorControl9849");
                    edad1.value = "78";
                    edad1.style.backgroundColor = "#23E320";
                }
                if (edad >= 18 && edad <= 13) {
                    document.querySelector("#valorControl9849").value = "78";
                    var edad1 = document.querySelector("#valorControl9849");
                    edad1.value = "78";
                    edad1.style.backgroundColor = "#23E320";
                }

                console.log(fecha1);
                console.log(ValHoy);
                console.log(edad);
                console.log(m);
            });
    } catch (error) {}
    /*   1.1.8   VALIDAR FECHA NACIMIENTO    | Campo Fecha de Nacimiento (.)	*/
    try {
        document.querySelector("#valorControl9850");
        let fechaNacimiento118 = document.querySelector("#valorControl9850");

        fechaNacimiento118.addEventListener("change", function() {
            let inputFecha118 = fechaNacimiento118.value;
            let pattern =
                /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[2-9][0-9]|20[0-1][0-9]|202[0-3])$/;

            if (pattern.test(inputFecha118)) {
                let [dia, mes, anio] = inputFecha118.split("/").map(Number);

                let maxDia = 31;
                if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
                    maxDia = 30;
                } else if (mes === 2) {
                    if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
                        maxDia = 29;
                    } else {
                        maxDia = 28;
                    }
                }

                if (
                    dia <= 0 ||
                    dia > maxDia ||
                    mes <= 0 ||
                    mes > 12 ||
                    anio < 1920 ||
                    anio > 2023
                ) {
                    fechaNacimiento118.setCustomValidity("Fecha no válida");
                } else {
                    fechaNacimiento118.setCustomValidity("");
                }
            } else {
                fechaNacimiento118.setCustomValidity("Fecha no válida");
            }
        });
    } catch (error) {}
    /*   1.1.9   COMPARA SEXEO Y GENERO | Sexo : valorControl19851 Genero : valorControl19852 - Debe cincidir acorde al Sexo y género*/
    try {
        /*Sexo =    67 1- Hombre    | 68 2- Mujer     | 69 3- Intersexual
        Genrero = 70 1- Masculino | 71 2- Femenino  | 72  3- Transgénero   */
        document
            .querySelector("#valorControl9851")
            .addEventListener("change", function SexoVinculat() {
                var SexoVinculate = document.querySelector("#valorControl9851").value;
                const seleccioneVinculate =
                    document.querySelector("#valorControl9852").value;

                if (SexoVinculate == "67") {
                    var generoVinculate = document.querySelector("#valorControl9852");
                    generoVinculate.value = "70";
                    generoVinculate.style.backgroundColor = "#23E320";
                } else if (SexoVinculate == "68") {
                    document.querySelector("#valorControl9852").value = "71";
                    var generoVinculate = document.querySelector("#valorControl9852");
                    generoVinculate.value = "71";
                    generoVinculate.style.backgroundColor = "#23E320";
                } else if (SexoVinculate == "69") {
                    document.querySelector("#valorControl9852").value = "72";
                    var generoVinculate = document.querySelector("#valorControl9852");
                    generoVinculate.value = "72";
                    generoVinculate.style.backgroundColor = "#23E320";
                } else {
                    document.querySelector("#valorControl9852").value = "Seleccione";
                    document.querySelector("#valorControl9852").style.backgroundColor =
                        "#FFFFFF";
                }
            });
    } catch (error) {}
    /*   1.1.10  | Campo Etnia	| Este campo es obligatorio, con respecto al dato el que se valida es unicamente si es indígena con "Habla español (.) y	"Pueblo (.)	", con respecto a este campo, si se selecciona en Etnia Indígena, debe tener dato el campo "Habla español (.) y	"Pueblo (.)	"*/
    try {
        let EtniaVinculate = document.querySelector("#valorControl9853");
        let HablaEspanolVinculate = document.querySelector("#valorControl9860");
        let PuebloVinculate = document.querySelector("#valorControl9861");
        HablaEspanolVinculate.disabled = true;
        PuebloVinculate.disabled = true;

        EtniaVinculate.addEventListener("change", function() {
            if (EtniaVinculate.value === "79") {
                HablaEspanolVinculate.disabled = false;
                PuebloVinculate.disabled = false;
                HablaEspanolVinculate.required = true;
                PuebloVinculate.required = true;
            } else {
                HablaEspanolVinculate.disabled = true;
                PuebloVinculate.disabled = true;
                HablaEspanolVinculate.required = false;
                PuebloVinculate.required = false;
            }
        });
    } catch (error) {}
    /*   1.1.11  | Población Diferencial y de Inclusión	| Este campo es obligatorio, con respecto al dato tenemos varias condicionales: */
    try {
        /*
        document.querySelector("#valorControl9854") | Población Diferencial y de Inclusión
        document.querySelector("#valorControl9859") | Categorias de la discapacidad
        document.querySelector("#valorControl9848") | Nacionalidad

        Si en el campo (Población Diferencial y de Inclusión) se selecciona (2- Discapacidad value="108"), esta se debe comparar con el campo (Categorias de la discapacidad), en el cual al tener alguna marcación, debe estar seleccionada una de las variables, de (Categorias de la discapacidad).

        Si en el campo (Población Diferencial y de Inclusión) se seleciona (13- Migrante value="2618"), esta se debe comnparar con el campo (Nacionalidad), el cual si la nacionalidad es diferente a (Colombia value="50"), debe tener el dato de (13- Migrante value="2618") */

        let PobDifIncVinculate = document.querySelector("#valorControl9854");
        let CatDiscVinculate = document.querySelector("#valorControl9859");
        let NacionalidadVinculate = document.querySelector("#valorControl9848");
        CatDiscVinculate.disabled = true;

        NacionalidadVinculate.addEventListener("change", function() {
            if (NacionalidadVinculate.value != "50") {
                PobDifIncVinculate.value = "2618";
                PobDifIncVinculate.style.backgroundColor = colorVerde;
            } else {
                PobDifIncVinculate.value = "2620";
            }
        });

        let TipoDocumento1111 = document.querySelector("#valorControl9846");
        let Nacionalidad111 = document.querySelector("#valorControl9854");
        const colorOriginal111 = Nacionalidad111.style.backgroundColor;
        let optionColombia111 = Nacionalidad111.querySelector("option[value='50']");

        TipoDocumento1111.addEventListener("change", function() {
            switch (this.value) {
                case "59":
                case "60":
                case "61":
                    Nacionalidad111.value = "2620";
                    optionColombia111.disabled = false;
                    break;
            }
        });

        const BackgroundOriginalPobDifIncVinculate =
            PobDifIncVinculate.style.backgroundColor;
        const BackgroundOriginalCatDiscVinculate =
            CatDiscVinculate.style.backgroundColor;
        const BackgroundOriginalNacionalidadVinculate =
            NacionalidadVinculate.style.backgroundColor;

        PobDifIncVinculate.addEventListener("change", function() {
            let seleccionPDI = [];
            for (let i = 0; i < PobDifIncVinculate.options.length; i++) {
                if (PobDifIncVinculate.options[i].selected) {
                    seleccionPDI.push(PobDifIncVinculate.options[i].value);
                }
            }
            console.log(seleccionPDI);
            let encontrado = seleccionPDI.map(function(elemento) {
                return elemento === valorBuscado;
            });
        });
        //document.querySelector("#valorControl9862") | Vínculo con el jefe de hogar (.)
        //document.querySelector("#valorControl9225") | Tipo value="Servicios de acogida juveniles"
        try {
            let vinculoJefeHogarOriginal =
                document.querySelector("#valorControl9862").style.backgroundColor;
            document
                .querySelector("#valorControl9850")
                .addEventListener("change", function() {
                    var verificar = document.querySelector("#valorControl9850").value;
                    var fechaComponentes1 = verificar.split("/");
                    var dia1 = fechaComponentes1[0];
                    var mes1 = fechaComponentes1[1];
                    var año1 = fechaComponentes1[2];
                    var fecha1 = new Date(año1, mes1, dia1);
                    var diaFormateado1 = ("0" + fecha1.getDate()).slice(-2);
                    var mesFormateado1 = ("0" + (fecha1.getMonth() + 1)).slice(-2);
                    var añoFormateado1 = fecha1.getFullYear();

                    var fechaFormateada1 =
                        añoFormateado1 + "/" + mesFormateado1 + "/" + diaFormateado1;

                    var fecha1 = new Date(fechaFormateada1);
                    var ValHoy = new Date();
                    var edad = ValHoy.getFullYear() - fecha1.getFullYear();
                    var m = ValHoy.getMonth() - fecha1.getMonth();

                    if (m < 0 || (m === 0 && ValHoy.getDate() < fecha1.getDate())) {
                        edad - 1;
                    }
                });
        } catch (error) {}
        try {
            document
                .querySelector("#valorControl9225")
                .addEventListener("change", function() {
                    var verificar = document.querySelector("#valorControl9850").value;
                    var fechaComponentes1 = verificar.split("/");
                    var dia1 = fechaComponentes1[0];
                    var mes1 = fechaComponentes1[1];
                    var año1 = fechaComponentes1[2];
                    var fecha1 = new Date(año1, mes1, dia1);
                    var diaFormateado1 = ("0" + fecha1.getDate()).slice(-2);
                    var mesFormateado1 = ("0" + (fecha1.getMonth() + 1)).slice(-2);
                    var añoFormateado1 = fecha1.getFullYear();

                    var fechaFormateada1 =
                        añoFormateado1 + "/" + mesFormateado1 + "/" + diaFormateado1;

                    var fecha1 = new Date(fechaFormateada1);
                    var ValHoy = new Date();
                    var edad = ValHoy.getFullYear() - fecha1.getFullYear();
                    var m = ValHoy.getMonth() - fecha1.getMonth();

                    if (m < 0 || (m === 0 && ValHoy.getDate() < fecha1.getDate())) {
                        edad - 1;
                    }
                });
        } catch (error) {}

        /*1.1.20 Nombre EAPB (.)	*/

        try {
            let regimen = document.querySelector("#valorControl9857");

            regimen.addEventListener("change", function() {
                switch (true) {
                    case regimen.value === "131":
                        let lista1v = document.querySelector(
                            "#formularioNuevoFormato > div:nth-child(14) > div:nth-child(17) > table > tbody > tr:nth-child(2) > td"
                        );
                        lista1v.innerHTML = `<input type="hidden" name="valorControl9858" id="valorControl9858" value>
      <select name="valorControl9858" id="valorControl9858" class="form-control" title="Control: valorControl9858 | valor:" required style>
      <option value>Seleccione</option>
      <option value="ALIANSALUD EPS">ALIANSALUD EPS</option>
      <option value="ANAS WAYUU EPSI">ANAS WAYUU EPSI</option>
      <option value="ASMET  SALUD">ASMET  SALUD</option>
      <option value="ASOCIACION INDIGENA DEL CAUCA EPSI">ASOCIACION INDIGENA DEL CAUCA EPSI</option>
      <option value="CAJACOPI ATLANTICO">CAJACOPI ATLANTICO</option>
      <option value="CAPITAL SALUD EPS">CAPITAL SALUD EPS</option>
      <option value="CAPRESOCA">CAPRESOCA</option>
      <option value="COMFACHOCO">COMFACHOCO</option>
      <option value="COMFAORIENTE">COMFAORIENTE</option>
      <option value="COOSALUD EPS">COOSALUD EPS</option>
      <option value="COOMEVA EPS">COOMEVA EPS</option>
      <option value="COMPENSAR EPS">COMPENSAR EPS</option>
      <option value="DUSAKAWI EPSI">DUSAKAWI EPSI</option>
      <option value="EMSSANAR E.S.S.">EMSSANAR E.S.S.</option>
      <option value="EPS FAMILIAR DE COLOMBIA">EPS FAMILIAR DE COLOMBIA</option>
      <option value="FAMISANAR">FAMISANAR</option>
      <option value="JERSALUD">JERSALUD</option>
      <option value="MALLAMAS EPSI">MALLAMAS EPSI</option>
      <option value="MEDICOS ASOCIADOS">MEDICOS ASOCIADOS</option>
      <option value="MUTUAL SER">MUTUAL SER</option>
      <option value="NUEVA EPS">NUEVA EPS</option>
      <option value="PIJAOS SALUD EPSI">PIJAOS SALUD EPSI</option>
      <option value="SALUD TOTAL EPS S.A.">SALUD TOTAL EPS S.A.</option>
      <option value="SANITAS EPS">SANITAS EPS</option>
      <option value="SAVIA SALUD EPS">SAVIA SALUD EPS</option>
      <option value="SURA EPS">SURA EPS</option>        
      <option value="UNISALUD">UNISALUD</option>        
      </select>`;

                        break;
                    case regimen.value === "132":
                        let lista2v = document.querySelector(
                            "#formularioNuevoFormato > div:nth-child(14) > div:nth-child(17) > table > tbody > tr:nth-child(2) > td"
                        );
                        lista2v.innerHTML = `<input type="hidden" name="valorControl9858" id="valorControl9858" value>
        <select name="valorControl9858" id="valorControl9858" class="form-control" title="Control: valorControl9858 | valor:" required style>
        <option value>Seleccione</option>
        <option value="ALIANSALUD EPS">ALIANSALUD EPS</option>
        <option value="ANAS WAYUU EPSI">ANAS WAYUU EPSI</option>
        <option value="ASMET  SALUD">ASMET  SALUD</option>
        <option value="ASOCIACION INDIGENA DEL CAUCA EPSI">ASOCIACION INDIGENA DEL CAUCA EPSI</option>
        <option value="CAJACOPI ATLANTICO">CAJACOPI ATLANTICO</option>
        <option value="CAPITAL SALUD EPS">CAPITAL SALUD EPS</option>
        <option value="CAPRESOCA">CAPRESOCA</option>
        <option value="COMFACHOCO">COMFACHOCO</option>
        <option value="COMFAORIENTE">COMFAORIENTE</option>
        <option value="COOSALUD EPS">COOSALUD EPS</option>
        <option value="COOMEVA EPS">COOMEVA EPS</option>
        <option value="COMPENSAR EPS">COMPENSAR EPS</option>
        <option value="DUSAKAWI EPSI">DUSAKAWI EPSI</option>
        <option value="EMSSANAR E.S.S.">EMSSANAR E.S.S.</option>
        <option value="EPS FAMILIAR DE COLOMBIA">EPS FAMILIAR DE COLOMBIA</option>
        <option value="FAMISANAR">FAMISANAR</option>
        <option value="JERSALUD">JERSALUD</option>
        <option value="MALLAMAS EPSI">MALLAMAS EPSI</option>
        <option value="MEDICOS ASOCIADOS">MEDICOS ASOCIADOS</option>
        <option value="MUTUAL SER">MUTUAL SER</option>
        <option value="NUEVA EPS">NUEVA EPS</option>
        <option value="PIJAOS SALUD EPSI">PIJAOS SALUD EPSI</option>
        <option value="SALUD TOTAL EPS S.A.">SALUD TOTAL EPS S.A.</option>
        <option value="SANITAS EPS">SANITAS EPS</option>
        <option value="SAVIA SALUD EPS">SAVIA SALUD EPS</option>
        <option value="SURA EPS">SURA EPS</option>        
        <option value="UNISALUD">UNISALUD</option>      
        </select>`;

                        break;
                    case regimen.value === "133":
                        let lista3v = document.querySelector(
                            "#formularioNuevoFormato > div:nth-child(14) > div:nth-child(17) > table > tbody > tr:nth-child(2) > td"
                        );
                        lista3v.innerHTML = `<input type="hidden" name="valorControl9858" id="valorControl9858" value>
          <select name="valorControl9858" id="valorControl9858" class="form-control" title="Control: valorControl9858 | valor:" required style>
        <option value>Seleccione</option>
        <option value="ECOPETROL">ECOPETROL</option>
        <option value="FIDUPREVISORA">FIDUPREVISORA</option>
        <option value="FUERZAS MILITARES">FUERZAS MILITARES</option>
        <option value="MAGISTERIO (DOCENTES)">MAGISTERIO (DOCENTES)</option>
        <option value="MEDICOS ASOCIADOS">MEDICOS ASOCIADOS</option>
        <option value="POLICÍA NACIONAL">POLICÍA NACIONAL</option>
        <option value="SANIDAD MILITAR">SANIDAD MILITAR</option>
        <option value="SERVISALUD">SERVISALUD</option>
        <option value="UNIVERSIDADES PÚBLICAS">UNIVERSIDADES PÚBLICAS</option>       
        <option value="UNISALUD">UNISALUD</option>  
        </select>`;

                        break;
                    case regimen.value === "134":
                        let lista4v = document.querySelector(
                            "#formularioNuevoFormato > div:nth-child(14) > div:nth-child(17) > table > tbody > tr:nth-child(2) > td"
                        );
                        lista4v.innerHTML = `<input type="text" name="valorControl9858" id="valorControl9858" class="form-control" title="Control: valorControl9858" style="width:100%" required="required">`;

                        break;

                    default:
                        document.querySelector(
                            "#formularioNuevoFormato > div:nth-child(14) > div:nth-child(17) > table > tbody > tr:nth-child(2) > td"
                        ).innerHTML = `<input type="text" name="valorControl9858" id="valorControl9858" class="form-control" title="Control: valorControl9858" style="width:100%"></input>`;
                        document.querySelector("#valorControl9858").disabled = true;
                        break;
                }
            });
        } catch (error) {}
        /* cierre Nombre EAPB (.)	 */
        //1.1.24 VIC¿NCULO JEFE DE HOGAR2
        // try {
        //   let vinculateJefeHogar101 = document.querySelector("#valorControl8867"); //Primer Nombre(ACUDIENTE) (.)
        //   let vinculateJefeHogar1Original =
        //     vinculateJefeHogar101.style.backgroundColor;
        //   let tipoVinculate3 = document.querySelector("#valorControl9225"); //tipo

        //   if (
        //     tipoVinculate3.value === "Servicios de acogida juveniles" &&
        //     vinculateJefeHogar101.value === "" /*&&
        //     edad < 18*/
        //   ) {
        //     vinculateJefeHogar101.disabled = false;
        //     vinculateJefeHogar101.required = true;
        //     vinculateJefeHogar101.style.backgroundColor = colorRojo;
        //   } else {
        //     vinculateJefeHogar101.disabled = true;
        //     vinculateJefeHogar101.required = false;
        //     vinculateJefeHogar101.style.backgroundColor =
        //       vinculateJefeHogar1Original;
        //   }
        // } catch (error) {}
    } catch (error) {}
    //1.1.74 CIERRE VIC¿NCULO JEFE DE HOGAR2

    //                                                                                    DATOS DIRECCION DE RESIDENCIA

    //                    URBANA
    //Eje principal   [?]

    try {
        let ZonaVinculate = document.querySelector("#valorControl9866");
        let PrincipalVinculate = document.querySelector("#valorControl9871");
        let NUMEROVinculate = document.querySelector("#valorControl9872");
        let GeneradorVinculate = document.querySelector("#valorControl9878");
        let PlacaVinculate = document.querySelector("#valorControl9883");
        let CoordenadasXVinculate = document.querySelector("#valorControl9890");
        let CoordenadasYVinculate = document.querySelector("#valorControl9891");

        PrincipalVinculate.required = true;
        NUMEROVinculate.required = true;
        GeneradorVinculate.required = true;
        PlacaVinculate.required = true;
        CoordenadasXVinculate.required = true;
        CoordenadasYVinculate.required = true;

        PlacaVinculate.addEventListener("change", function() {
            if (PlacaVinculate.value.length != 2) {
                PlacaVinculate.value = "";
            }
        });

        ZonaVinculate.addEventListener("change", function() {
            if (ZonaVinculate == "57") {
                PrincipalVinculate.required = true;
                NUMEROVinculate.required = true;
                GeneradorVinculate.required = true;
                PlacaVinculate.required = true;
                CoordenadasXVinculate.required = false;
                CoordenadasYVinculate.required = false;
                CoordenadasXVinculate.value = "";
                CoordenadasYVinculate.value = "";
            }
            if (ZonaVinculate == "58") {
                PrincipalVinculate.required = false;
                NUMEROVinculate.required = false;
                GeneradorVinculate.required = false;
                PlacaVinculate.required = false;
                CoordenadasXVinculate.required = true;
                CoordenadasYVinculate.required = true;
            }
        });
    } catch (error) {}
    //        CIERRE            URBANA

    //                   CIERRE                                                            DATOS DIRECCION DE RESIDENCIA
    //                                                                                     ATENCIONES E INTERVENCIONES

    //1.1.74 APERTURA INTERVENCION ENFERMERIA

    try {
        let checBoxEnfermeriia = document.querySelector("#valorControl8890");
        let dxEnfermeria = document.querySelector("#valorControl8891");
        let sintmaticoRespiratorio = document.querySelector("#valorControl8912");
        let dxEnfermeria2 = document.querySelector("#valorControl8892");
        let dxEnfermeria3 = document.querySelector("#valorControl8893");

        // dxEnfermeria2.disabled = true;
        // dxEnfermeria3.disabled = true;

        dxEnfermeria.addEventListener("change", function() {
            switch (true) {
                case checBoxEnfermeriia.checked && dxEnfermeria.value.length != 4:
                    checBoxEnfermeriia.required = true;
                    dxEnfermeria.value = "";
                    break;
                case !checBoxEnfermeriia.checked && dxEnfermeria.value == "":
                    checBoxEnfermeriia.required = false;
                    break;
                case !checBoxEnfermeriia.checked && dxEnfermeria.value != "":
                    checBoxEnfermeriia.required = true;
                    break;
                case !checBoxEnfermeriia.checked && dxEnfermeria.value.length != 4:
                    checBoxEnfermeriia.required = true;
                    dxEnfermeria.value = "";
                    break;

                default:
                    checBoxEnfermeriia.required = false;
                    break;
            }
        });
        if (dxEnfermeria.value != "") {
            sintmaticoRespiratorio.required = true;
        } else {
            sintmaticoRespiratorio.required = false;
        }
    } catch (error) {}

    //1.1.75 CIERRE INTERVENCION ENFERMERIA

    //1.1.78 APERTURA INTERVENCION TRABAJO SOCIAL
    try {
        let checBoxTrabajoSocial = document.querySelector("#valorControl8894");
        let dxTrabajoSocial = document.querySelector("#valorControl8895");
        dxTrabajoSocial.addEventListener("change", function() {
            switch (true) {
                case checBoxTrabajoSocial.checked && dxTrabajoSocial.value.length != 4:
                    dxTrabajoSocial.value = "";
                    checBoxTrabajoSocial.required = true;
                    break;
                case !checBoxTrabajoSocial.checked && dxTrabajoSocial.value == "":
                    checBoxTrabajoSocial.required = false;
                    break;
                case !checBoxTrabajoSocial.checked && dxTrabajoSocial.value != "":
                    checBoxTrabajoSocial.required = true;
                    break;
                case !checBoxTrabajoSocial.checked && dxTrabajoSocial.value != 4:
                    checBoxTrabajoSocial.required = true;
                    break;
                default:
                    checBoxTrabajoSocial.required = false;
                    break;
            }
        });
    } catch (error) {}
    // //1.1.79 CIERRE INTERVENCION TRABAJO SOCIAL
    // //1.1.82 APERTURA INTERVENCION PSICOLOGIA
    try {
        let checBoxPsicologia = document.querySelector("#valorControl8899");
        let dxPsicologia = document.querySelector("#valorControl8900");
        dxPsicologia.addEventListener("change", function() {
            switch (true) {
                case checBoxPsicologia.checked && dxPsicologia.value.length != 4:
                    dxPsicologia.value = "";
                    checBoxPsicologia.required = true;
                    break;
                case !checBoxPsicologia.checked && dxPsicologia.value == "":
                    checBoxPsicologia.required = false;
                    break;
                case !checBoxPsicologia.checked && dxPsicologia.value != "":
                    checBoxPsicologia.required = true;
                    break;
                case !checBoxPsicologia.checked && dxPsicologia.value.length != 4:
                    dxPsicologia.value = "";
                    checBoxPsicologia.required = true;
                    break;

                default:
                    checBoxPsicologia.required = false;
                    break;
            }
        });
    } catch (error) {}
    // //1.1.83 CIERRE INTERVENCION PSICOLOGIA
    // //1.1.86 APERTURA Tamizaje VIH (.)
    try {
        let checBoxVIH = document.querySelector("#valorControl8904");
        let resultadoVIH = document.querySelector("#valorControl8905");
        let confirmatorioVIH = document.querySelector("#valorControl8906");
        resultadoVIH.disabled = true;
        confirmatorioVIH.disabled = true;
        checBoxVIH.addEventListener("change", function() {
            switch (true) {
                case checBoxVIH.checked:
                    resultadoVIH.disabled = false;
                    confirmatorioVIH.disabled = false;
                    resultadoVIH.required = true;
                    checBoxVIH.required = true;
                    break;
                case !checBoxVIH.checked:
                    resultadoVIH.value = "";
                    confirmatorioVIH.value = "";
                    //resultadoVIH.disabled = true;
                    //confirmatorioVIH.disabled = true;
                    resultadoVIH.required = false;
                    confirmatorioVIH.required = false;
                    checBoxVIH.required = false;
                    break;
                default:
                    break;
            }
        });
        resultadoVIH.addEventListener("change", function() {
            switch (true) {
                case resultadoVIH.value != "":
                    checBoxVIH.required = true;
                    break;
                default:
                    break;
            }
        });
    } catch (error) {}
    // //1.1.87 CIERRE Tamizaje VIH (.)
    //1.1.89 APERTURA Tamizaje SIFILIS (.)
    try {
        let checBoxSifilis = document.querySelector("#valorControl8907");
        let resultadoSifilis = document.querySelector("#valorControl8909");
        checBoxSifilis.addEventListener("change", function() {
            switch (true) {
                case checBoxSifilis.checked:
                    resultadoSifilis.required = true;
                    break;
                case !checBoxSifilis.checked:
                    resultadoSifilis.required = false;
                    break;
                default:
                    resultadoSifilis.required = false;
                    checBoxSifilis.required = false;
                    break;
            }
        });
        resultadoSifilis.addEventListener("change", function() {
            switch (true) {
                case !checBoxSifilis.checked && resultadoSifilis.value != "":
                    checBoxSifilis.required = true;
                    resultadoSifilis.required = true;
                    break;
                case !checBoxSifilis.checked && resultadoSifilis.value == "":
                    resultadoSifilis.required = false;
                    checBoxSifilis.required = false;
                    break;
                case checBoxSifilis.checked && resultadoSifilis.value == "":
                    resultadoSifilis.required = true;
                    checBoxSifilis.required = true;
                    break;
                default:
                    checBoxSifilis.required = false;
                    resultadoSifilis.required = false;
                    break;
            }
        });
    } catch (error) {}
    //1.1.90 CIERRE Tamizaje SIFILIS (.)
    //1.1.91 APERTURA Tamizaje Hepatitis B(.)
    try {
        let checBoxHepatitis = document.querySelector("#valorControl8910");
        let resultadoHepatitis = document.querySelector("#valorControl8911");
        checBoxHepatitis.addEventListener("change", function() {
            switch (true) {
                case checBoxHepatitis.checked && resultadoHepatitis.value == "":
                    resultadoHepatitis.required = true;
                    checBoxHepatitis.required = true;
                    break;
                case !checBoxHepatitis.checked && resultadoHepatitis.value == "":
                    resultadoHepatitis.required = false;
                    checBoxHepatitis.required = false;
                    break;
                case !checBoxHepatitis.checked && resultadoHepatitis.value != "":
                    resultadoHepatitis.required = true;
                    checBoxHepatitis.required = true;
                    break;
                default:
                    resultadoHepatitis.required = false;
                    checBoxHepatitis.required = false;
                    break;
            }
        });
        resultadoHepatitis.addEventListener("change", function() {
            switch (true) {
                case !checBoxHepatitis.checked && resultadoHepatitis.value != "":
                    checBoxHepatitis.required = true;
                    resultadoHepatitis.required = true;
                    break;
                case !checBoxHepatitis.checked && resultadoHepatitis.value == "":
                    resultadoHepatitis.required = false;
                    checBoxHepatitis.required = false;
                    break;
                case checBoxHepatitis.checked && resultadoHepatitis.value == "":
                    resultadoHepatitis.required = true;
                    checBoxHepatitis.required = true;
                    break;
                default:
                    checBoxHepatitis.required = false;
                    resultadoHepatitis.required = false;
                    break;
            }
        });
    } catch (error) {}
    //1.1.92 CIERRE Tamizaje Hepatitis B (.)

    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    1 VINCULATE   |   1 VINCULATE 2
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

    /*   1.2.1   APGAR */
    try {
        let VinculateApgar_1_8928_ = document.querySelector("#valorControl8928");
        let VinculateApgar_2_8929_ = document.querySelector("#valorControl8929");
        let VinculateApgar_3_8930_ = document.querySelector("#valorControl8930");
        let VinculateApgar_4_8931_ = document.querySelector("#valorControl8931");
        let VinculateApgar_5_8932_ = document.querySelector("#valorControl8932");

        VinculateApgar_1_8928_.required = true;
        VinculateApgar_2_8929_.required = true;
        VinculateApgar_3_8930_.required = true;
        VinculateApgar_4_8931_.required = true;
        VinculateApgar_5_8932_.required = true;
    } catch (error) {}

    /*   1.2.2   ASSIST */
    try {
        let Tabaco11 = document.querySelector("#valorControl8939");
        let alcohol21 = document.querySelector("#valorControl8940");
        let Cannabis31 = document.querySelector("#valorControl8941");
        let Cocaina41 = document.querySelector("#valorControl8942");
        let Anfetaminas51 = document.querySelector("#valorControl8943");
        let Inhalantes61 = document.querySelector("#valorControl8944");
        let Tranquilizantes71 = document.querySelector("#valorControl8945");
        let Alucinogenos81 = document.querySelector("#valorControl8946");
        let Opiaceos91 = document.querySelector("#valorControl8947");
        let Otros101 = document.querySelector("#valorControl8948");

        let Tabaco12 = document.querySelector("#valorControl8950");
        let alcohol22 = document.querySelector("#valorControl8951");
        let Cannabis32 = document.querySelector("#valorControl8952");
        let Cocaina42 = document.querySelector("#valorControl8953");
        let Anfetaminas52 = document.querySelector("#valorControl8954");
        let Inhalantes62 = document.querySelector("#valorControl8955");
        let Tranquilizantes72 = document.querySelector("#valorControl8956");
        let Alucinogenos82 = document.querySelector("#valorControl8957");
        let Opiaceos92 = document.querySelector("#valorControl8958");
        let Otros102 = document.querySelector("#valorControl8959");

        if (
            Tabaco11.value != "" ||
            alcohol21.value != "" ||
            Cannabis31.value != "" ||
            Cocaina41.value != "" ||
            Anfetaminas51.value != "" ||
            Inhalantes61.value != "" ||
            Tranquilizantes71.value != "" ||
            Alucinogenos81.value != "" ||
            Opiaceos91.value != "" ||
            Otros101.value != ""
        ) {
            Tabaco11.required = true;
            alcohol21.required = true;
            Cannabis31.required = true;
            Cocaina41.required = true;
            Anfetaminas51.required = true;
            Inhalantes61.required = true;
            Tranquilizantes71.required = true;
            Alucinogenos81.required = true;
            Opiaceos91.required = true;
            Otros101.required = true;
        }

        Tabaco11.addEventListener("change", function() {
            switch (true) {
                case Tabaco11.value == "3 SI":
                    Tabaco12.required = true;
                    break;
                case Tabaco11.value == "0 NO":
                    Tabaco12.required = false;
                    break;
                case Tabaco11.value == "":
                    Tabaco12.required = false;
                    break;
                default:
                    break;
            }
        });
        alcohol21.addEventListener("change", function() {
            switch (true) {
                case alcohol21.value == "3 SI":
                    alcohol22.required = true;
                    break;
                case alcohol21.value == "0 NO":
                    alcohol22.required = false;
                    break;
                case alcohol21.value == "":
                    alcohol22.required = false;
                    break;
                default:
                    break;
            }
        });
        Cannabis31.addEventListener("change", function() {
            switch (true) {
                case Cannabis31.value == "3 SI":
                    Cannabis32.required = true;
                    break;
                case Cannabis31.value == "0 NO":
                    Cannabis32.required = false;
                    break;
                case Cannabis31.value == "":
                    Cannabis32.required = false;
                    break;
                default:
                    break;
            }
        });
        Cocaina41.addEventListener("change", function() {
            switch (true) {
                case Cocaina41.value == "3 SI":
                    Cocaina42.required = true;
                    break;
                case Cocaina41.value == "0 NO":
                    Cocaina42.required = false;
                    break;
                case Cocaina41.value == "":
                    Cocaina42.required = false;
                    break;
                default:
                    break;
            }
        });
        Anfetaminas51.addEventListener("change", function() {
            switch (true) {
                case Anfetaminas51.value == "3 SI":
                    Anfetaminas52.required = true;
                    break;
                case Anfetaminas51.value == "0 NO":
                    Anfetaminas52.required = false;
                    break;
                case Anfetaminas51.value == "":
                    Anfetaminas52.required = false;
                    break;
                default:
                    break;
            }
        });
        Inhalantes61.addEventListener("change", function() {
            switch (true) {
                case Inhalantes61.value == "3 SI":
                    Inhalantes62.required = true;
                    break;
                case Inhalantes61.value == "0 NO":
                    Inhalantes62.required = false;
                    break;
                case Inhalantes61.value == "":
                    Inhalantes62.required = false;
                    break;
                default:
                    break;
            }
        });
        Tranquilizantes71.addEventListener("change", function() {
            switch (true) {
                case Tranquilizantes71.value == "3 SI":
                    Tranquilizantes72.required = true;
                    break;
                case Tranquilizantes71.value == "0 NO":
                    Tranquilizantes72.required = false;
                    break;
                case Tranquilizantes71.value == "":
                    Tranquilizantes72.required = false;
                    break;
                default:
                    break;
            }
        });
        Alucinogenos81.addEventListener("change", function() {
            switch (true) {
                case Alucinogenos81.value == "3 SI":
                    Alucinogenos82.required = true;
                    break;
                case Alucinogenos81.value == "0 NO":
                    Alucinogenos82.required = false;
                    break;
                case Alucinogenos81.value == "":
                    Alucinogenos82.required = false;
                    break;
                default:
                    break;
            }
        });
        Opiaceos91.addEventListener("change", function() {
            switch (true) {
                case Opiaceos91.value == "3 SI":
                    Opiaceos92.required = true;
                    break;
                case Opiaceos91.value == "0 NO":
                    Opiaceos92.required = false;
                    break;
                case Opiaceos91.value == "":
                    Opiaceos92.required = false;
                    break;
                default:
                    break;
            }
        });
        Otros101.addEventListener("change", function() {
            switch (true) {
                case Otros101.value == "3 SI":
                    Otros102.required = true;
                    break;
                case Otros101.value == "0 NO":
                    Otros102.required = false;
                    break;
                case Otros101.value == "":
                    Otros102.required = false;
                    break;
                default:
                    break;
            }
        });
    } catch (error) {}

    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    1 VINCULATE   |   1 VINCULATE 3
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

    try {
        //BLOQUE AUDIT

        try {
            let VinculateAudit1 = document.querySelector("#valorControl9031");
            let VinculateAudit2 = document.querySelector("#valorControl9032");
            let VinculateAudit3 = document.querySelector("#valorControl9033");
            let VinculateAudit4 = document.querySelector("#valorControl9034");
            let VinculateAudit5 = document.querySelector("#valorControl9035");
            let VinculateAudit6 = document.querySelector("#valorControl9036");
            let VinculateAudit7 = document.querySelector("#valorControl9037");
            let VinculateAudit8 = document.querySelector("#valorControl9038");
            let VinculateAudit9 = document.querySelector("#valorControl9039");
            let VinculateAudit10 = document.querySelector("#valorControl9040");

            VinculateAudit2.disabled = true;
            VinculateAudit3.disabled = true;
            VinculateAudit4.disabled = true;
            VinculateAudit5.disabled = true;
            VinculateAudit6.disabled = true;
            VinculateAudit7.disabled = true;
            VinculateAudit8.disabled = true;
            VinculateAudit9.disabled = true;
            VinculateAudit10.disabled = true;
            VinculateAudit2.required = false;
            VinculateAudit3.required = false;
            VinculateAudit4.required = false;
            VinculateAudit5.required = false;
            VinculateAudit6.required = false;
            VinculateAudit7.required = false;
            VinculateAudit8.required = false;
            VinculateAudit9.required = false;
            VinculateAudit10.required = false;
            if (VinculateAudit1.value === "0 Nunca") {
                VinculateAudit2.disabled = true;
                VinculateAudit3.disabled = true;
                VinculateAudit4.disabled = true;
                VinculateAudit5.disabled = true;
                VinculateAudit6.disabled = true;
                VinculateAudit7.disabled = true;
                VinculateAudit8.disabled = true;
                VinculateAudit9.disabled = false;
                VinculateAudit10.disabled = false;
                VinculateAudit2.required = false;
                VinculateAudit3.required = false;
                VinculateAudit4.required = false;
                VinculateAudit5.required = false;
                VinculateAudit6.required = false;
                VinculateAudit7.required = false;
                VinculateAudit8.required = false;
                VinculateAudit9.required = true;
                VinculateAudit10.required = true;
            }
            VinculateAudit1.addEventListener("change", function() {
                if (this.value === "") {
                    VinculateAudit2.disabled = true;
                    VinculateAudit3.disabled = true;
                    VinculateAudit4.disabled = true;
                    VinculateAudit5.disabled = true;
                    VinculateAudit6.disabled = true;
                    VinculateAudit7.disabled = true;
                    VinculateAudit8.disabled = true;
                    VinculateAudit9.disabled = true;
                    VinculateAudit10.disabled = true;
                    VinculateAudit2.required = false;
                    VinculateAudit3.required = false;
                    VinculateAudit4.required = false;
                    VinculateAudit5.required = false;
                    VinculateAudit6.required = false;
                    VinculateAudit7.required = false;
                    VinculateAudit8.required = false;
                    VinculateAudit9.required = false;
                    VinculateAudit10.required = false;
                }
                if (this.value === "0 Nunca") {
                    VinculateAudit2.disabled = true;
                    VinculateAudit3.disabled = true;
                    VinculateAudit4.disabled = true;
                    VinculateAudit5.disabled = true;
                    VinculateAudit6.disabled = true;
                    VinculateAudit7.disabled = true;
                    VinculateAudit8.disabled = true;
                    VinculateAudit9.disabled = false;
                    VinculateAudit10.disabled = false;
                    VinculateAudit2.required = false;
                    VinculateAudit3.required = false;
                    VinculateAudit4.required = false;
                    VinculateAudit5.required = false;
                    VinculateAudit6.required = false;
                    VinculateAudit7.required = false;
                    VinculateAudit8.required = false;
                    VinculateAudit9.required = true;
                    VinculateAudit10.required = true;
                }
                if (this.value !== "0 Nunca" && this.value !== "") {
                    VinculateAudit2.disabled = false;
                    VinculateAudit3.disabled = false;
                    VinculateAudit4.disabled = false;
                    VinculateAudit5.disabled = false;
                    VinculateAudit6.disabled = false;
                    VinculateAudit7.disabled = false;
                    VinculateAudit8.disabled = false;
                    VinculateAudit9.disabled = false;
                    VinculateAudit10.disabled = false;
                    VinculateAudit2.required = true;
                    VinculateAudit3.required = true;
                    VinculateAudit4.required = true;
                    VinculateAudit5.required = true;
                    VinculateAudit6.required = true;
                    VinculateAudit7.required = true;
                    VinculateAudit8.required = true;
                    VinculateAudit9.required = true;
                    VinculateAudit10.required = true;
                }
            });
        } catch (error) {}
        //CIERRE BLOQUE AUDIT
        //bloque INTERVENCIÓN POR TERAPIA OCUPACIONAL
        try {
            let ocupacional1 = document.querySelector("#valorControl9043");
            let ocupacional2 = document.querySelector("#valorControl9044");
            let ocupacional3 = document.querySelector("#valorControl9045");
            let ocupacional4 = document.querySelector("#valorControl11827");
            let ocupacional5 = document.querySelector("#valorControl9047");
            let ocupacional6 = document.querySelector("#valorControl9048");
            let ocupacional7 = document.querySelector("#valorControl9049");
            let ocupacional8 = document.querySelector("#valorControl9051");
            let ocupacional9 = document.querySelector("#valorControl9052");
            let ocupacional10 = document.querySelector("#valorControl9053");
            let ocupacional11 = document.querySelector("#valorControl9054");
            let ocupacional12 = document.querySelector("#valorControl11867");
            ocupacional1.addEventListener("change", function() {
                if (
                    ocupacional1.value != "" ||
                    ocupacional2.value != "" ||
                    ocupacional3.value != "" ||
                    ocupacional4.value != "" ||
                    ocupacional5.value != "" ||
                    ocupacional6.value != "" ||
                    ocupacional7.value != "" ||
                    ocupacional8.value != "" ||
                    ocupacional9.value != "" ||
                    ocupacional10.value != "" ||
                    ocupacional11.value != "" ||
                    ocupacional12.value != ""
                ) {
                    ocupacional1.required = true;
                    ocupacional2.required = true;
                    ocupacional3.required = true;
                    ocupacional4.required = true;
                    ocupacional5.required = true;
                    ocupacional6.required = true;
                    ocupacional7.required = true;
                    ocupacional8.required = true;
                    ocupacional9.required = true;
                    ocupacional10.required = true;
                    ocupacional11.required = true;
                    ocupacional12.required = true;
                } else {
                    ocupacional1.required = false;
                    ocupacional2.required = false;
                    ocupacional3.required = false;
                    ocupacional4.required = false;
                    ocupacional5.required = false;
                    ocupacional6.required = false;
                    ocupacional7.required = false;
                    ocupacional8.required = false;
                    ocupacional9.required = false;
                    ocupacional10.required = false;
                    ocupacional11.required = false;
                    ocupacional12.required = false;
                }
            });
            ocupacional2.addEventListener("change", function() {
                if (
                    ocupacional1.value != "" ||
                    ocupacional2.value != "" ||
                    ocupacional3.value != "" ||
                    ocupacional4.value != "" ||
                    ocupacional5.value != "" ||
                    ocupacional6.value != "" ||
                    ocupacional7.value != "" ||
                    ocupacional8.value != "" ||
                    ocupacional9.value != "" ||
                    ocupacional10.value != "" ||
                    ocupacional11.value != "" ||
                    ocupacional12.value != ""
                ) {
                    ocupacional1.required = true;
                    ocupacional2.required = true;
                    ocupacional3.required = true;
                    ocupacional4.required = true;
                    ocupacional5.required = true;
                    ocupacional6.required = true;
                    ocupacional7.required = true;
                    ocupacional8.required = true;
                    ocupacional9.required = true;
                    ocupacional10.required = true;
                    ocupacional11.required = true;
                    ocupacional12.required = true;
                } else {
                    ocupacional1.required = false;
                    ocupacional2.required = false;
                    ocupacional3.required = false;
                    ocupacional4.required = false;
                    ocupacional5.required = false;
                    ocupacional6.required = false;
                    ocupacional7.required = false;
                    ocupacional8.required = false;
                    ocupacional9.required = false;
                    ocupacional10.required = false;
                    ocupacional11.required = false;
                    ocupacional12.required = false;
                }
            });
            ocupacional3.addEventListener("change", function() {
                if (
                    ocupacional1.value != "" ||
                    ocupacional2.value != "" ||
                    ocupacional3.value != "" ||
                    ocupacional4.value != "" ||
                    ocupacional5.value != "" ||
                    ocupacional6.value != "" ||
                    ocupacional7.value != "" ||
                    ocupacional8.value != "" ||
                    ocupacional9.value != "" ||
                    ocupacional10.value != "" ||
                    ocupacional11.value != "" ||
                    ocupacional12.value != ""
                ) {
                    ocupacional1.required = true;
                    ocupacional2.required = true;
                    ocupacional3.required = true;
                    ocupacional4.required = true;
                    ocupacional5.required = true;
                    ocupacional6.required = true;
                    ocupacional7.required = true;
                    ocupacional8.required = true;
                    ocupacional9.required = true;
                    ocupacional10.required = true;
                    ocupacional11.required = true;
                    ocupacional12.required = true;
                } else {
                    ocupacional1.required = false;
                    ocupacional2.required = false;
                    ocupacional3.required = false;
                    ocupacional4.required = false;
                    ocupacional5.required = false;
                    ocupacional6.required = false;
                    ocupacional7.required = false;
                    ocupacional8.required = false;
                    ocupacional9.required = false;
                    ocupacional10.required = false;
                    ocupacional11.required = false;
                    ocupacional12.required = false;
                }
            });
            ocupacional4.addEventListener("change", function() {
                if (
                    ocupacional1.value != "" ||
                    ocupacional2.value != "" ||
                    ocupacional3.value != "" ||
                    ocupacional4.value != "" ||
                    ocupacional5.value != "" ||
                    ocupacional6.value != "" ||
                    ocupacional7.value != "" ||
                    ocupacional8.value != "" ||
                    ocupacional9.value != "" ||
                    ocupacional10.value != "" ||
                    ocupacional11.value != "" ||
                    ocupacional12.value != ""
                ) {
                    ocupacional1.required = true;
                    ocupacional2.required = true;
                    ocupacional3.required = true;
                    ocupacional4.required = true;
                    ocupacional5.required = true;
                    ocupacional6.required = true;
                    ocupacional7.required = true;
                    ocupacional8.required = true;
                    ocupacional9.required = true;
                    ocupacional10.required = true;
                    ocupacional11.required = true;
                    ocupacional12.required = true;
                } else {
                    ocupacional1.required = false;
                    ocupacional2.required = false;
                    ocupacional3.required = false;
                    ocupacional4.required = false;
                    ocupacional5.required = false;
                    ocupacional6.required = false;
                    ocupacional7.required = false;
                    ocupacional8.required = false;
                    ocupacional9.required = false;
                    ocupacional10.required = false;
                    ocupacional11.required = false;
                    ocupacional12.required = false;
                }
            });
            ocupacional5.addEventListener("change", function() {
                if (
                    ocupacional1.value != "" ||
                    ocupacional2.value != "" ||
                    ocupacional3.value != "" ||
                    ocupacional4.value != "" ||
                    ocupacional5.value != "" ||
                    ocupacional6.value != "" ||
                    ocupacional7.value != "" ||
                    ocupacional8.value != "" ||
                    ocupacional9.value != "" ||
                    ocupacional10.value != "" ||
                    ocupacional11.value != "" ||
                    ocupacional12.value != ""
                ) {
                    ocupacional1.required = true;
                    ocupacional2.required = true;
                    ocupacional3.required = true;
                    ocupacional4.required = true;
                    ocupacional5.required = true;
                    ocupacional6.required = true;
                    ocupacional7.required = true;
                    ocupacional8.required = true;
                    ocupacional9.required = true;
                    ocupacional10.required = true;
                    ocupacional11.required = true;
                    ocupacional12.required = true;
                } else {
                    ocupacional1.required = false;
                    ocupacional2.required = false;
                    ocupacional3.required = false;
                    ocupacional4.required = false;
                    ocupacional5.required = false;
                    ocupacional6.required = false;
                    ocupacional7.required = false;
                    ocupacional8.required = false;
                    ocupacional9.required = false;
                    ocupacional10.required = false;
                    ocupacional11.required = false;
                    ocupacional12.required = false;
                }
            });
            ocupacional6.addEventListener("change", function() {
                if (
                    ocupacional1.value != "" ||
                    ocupacional2.value != "" ||
                    ocupacional3.value != "" ||
                    ocupacional4.value != "" ||
                    ocupacional5.value != "" ||
                    ocupacional6.value != "" ||
                    ocupacional7.value != "" ||
                    ocupacional8.value != "" ||
                    ocupacional9.value != "" ||
                    ocupacional10.value != "" ||
                    ocupacional11.value != "" ||
                    ocupacional12.value != ""
                ) {
                    ocupacional1.required = true;
                    ocupacional2.required = true;
                    ocupacional3.required = true;
                    ocupacional4.required = true;
                    ocupacional5.required = true;
                    ocupacional6.required = true;
                    ocupacional7.required = true;
                    ocupacional8.required = true;
                    ocupacional9.required = true;
                    ocupacional10.required = true;
                    ocupacional11.required = true;
                    ocupacional12.required = true;
                } else {
                    ocupacional1.required = false;
                    ocupacional2.required = false;
                    ocupacional3.required = false;
                    ocupacional4.required = false;
                    ocupacional5.required = false;
                    ocupacional6.required = false;
                    ocupacional7.required = false;
                    ocupacional8.required = false;
                    ocupacional9.required = false;
                    ocupacional10.required = false;
                    ocupacional11.required = false;
                    ocupacional12.required = false;
                }
            });
            ocupacional7.addEventListener("change", function() {
                if (
                    ocupacional1.value != "" ||
                    ocupacional2.value != "" ||
                    ocupacional3.value != "" ||
                    ocupacional4.value != "" ||
                    ocupacional5.value != "" ||
                    ocupacional6.value != "" ||
                    ocupacional7.value != "" ||
                    ocupacional8.value != "" ||
                    ocupacional9.value != "" ||
                    ocupacional10.value != "" ||
                    ocupacional11.value != "" ||
                    ocupacional12.value != ""
                ) {
                    ocupacional1.required = true;
                    ocupacional2.required = true;
                    ocupacional3.required = true;
                    ocupacional4.required = true;
                    ocupacional5.required = true;
                    ocupacional6.required = true;
                    ocupacional7.required = true;
                    ocupacional8.required = true;
                    ocupacional9.required = true;
                    ocupacional10.required = true;
                    ocupacional11.required = true;
                    ocupacional12.required = true;
                } else {
                    ocupacional1.required = false;
                    ocupacional2.required = false;
                    ocupacional3.required = false;
                    ocupacional4.required = false;
                    ocupacional5.required = false;
                    ocupacional6.required = false;
                    ocupacional7.required = false;
                    ocupacional8.required = false;
                    ocupacional9.required = false;
                    ocupacional10.required = false;
                    ocupacional11.required = false;
                    ocupacional12.required = false;
                }
            });
            ocupacional8.addEventListener("change", function() {
                if (
                    ocupacional1.value != "" ||
                    ocupacional2.value != "" ||
                    ocupacional3.value != "" ||
                    ocupacional4.value != "" ||
                    ocupacional5.value != "" ||
                    ocupacional6.value != "" ||
                    ocupacional7.value != "" ||
                    ocupacional8.value != "" ||
                    ocupacional9.value != "" ||
                    ocupacional10.value != "" ||
                    ocupacional11.value != "" ||
                    ocupacional12.value != ""
                ) {
                    ocupacional1.required = true;
                    ocupacional2.required = true;
                    ocupacional3.required = true;
                    ocupacional4.required = true;
                    ocupacional5.required = true;
                    ocupacional6.required = true;
                    ocupacional7.required = true;
                    ocupacional8.required = true;
                    ocupacional9.required = true;
                    ocupacional10.required = true;
                    ocupacional11.required = true;
                    ocupacional12.required = true;
                } else {
                    ocupacional1.required = false;
                    ocupacional2.required = false;
                    ocupacional3.required = false;
                    ocupacional4.required = false;
                    ocupacional5.required = false;
                    ocupacional6.required = false;
                    ocupacional7.required = false;
                    ocupacional8.required = false;
                    ocupacional9.required = false;
                    ocupacional10.required = false;
                    ocupacional11.required = false;
                    ocupacional12.required = false;
                }
            });
            ocupacional9.addEventListener("change", function() {
                if (
                    ocupacional1.value != "" ||
                    ocupacional2.value != "" ||
                    ocupacional3.value != "" ||
                    ocupacional4.value != "" ||
                    ocupacional5.value != "" ||
                    ocupacional6.value != "" ||
                    ocupacional7.value != "" ||
                    ocupacional8.value != "" ||
                    ocupacional9.value != "" ||
                    ocupacional10.value != "" ||
                    ocupacional11.value != "" ||
                    ocupacional12.value != ""
                ) {
                    ocupacional1.required = true;
                    ocupacional2.required = true;
                    ocupacional3.required = true;
                    ocupacional4.required = true;
                    ocupacional5.required = true;
                    ocupacional6.required = true;
                    ocupacional7.required = true;
                    ocupacional8.required = true;
                    ocupacional9.required = true;
                    ocupacional10.required = true;
                    ocupacional11.required = true;
                    ocupacional12.required = true;
                } else {
                    ocupacional1.required = false;
                    ocupacional2.required = false;
                    ocupacional3.required = false;
                    ocupacional4.required = false;
                    ocupacional5.required = false;
                    ocupacional6.required = false;
                    ocupacional7.required = false;
                    ocupacional8.required = false;
                    ocupacional9.required = false;
                    ocupacional10.required = false;
                    ocupacional11.required = false;
                    ocupacional12.required = false;
                }
            });
            ocupacional10.addEventListener("change", function() {
                if (
                    ocupacional1.value != "" ||
                    ocupacional2.value != "" ||
                    ocupacional3.value != "" ||
                    ocupacional4.value != "" ||
                    ocupacional5.value != "" ||
                    ocupacional6.value != "" ||
                    ocupacional7.value != "" ||
                    ocupacional8.value != "" ||
                    ocupacional9.value != "" ||
                    ocupacional10.value != "" ||
                    ocupacional11.value != "" ||
                    ocupacional12.value != ""
                ) {
                    ocupacional1.required = true;
                    ocupacional2.required = true;
                    ocupacional3.required = true;
                    ocupacional4.required = true;
                    ocupacional5.required = true;
                    ocupacional6.required = true;
                    ocupacional7.required = true;
                    ocupacional8.required = true;
                    ocupacional9.required = true;
                    ocupacional10.required = true;
                    ocupacional11.required = true;
                    ocupacional12.required = true;
                } else {
                    ocupacional1.required = false;
                    ocupacional2.required = false;
                    ocupacional3.required = false;
                    ocupacional4.required = false;
                    ocupacional5.required = false;
                    ocupacional6.required = false;
                    ocupacional7.required = false;
                    ocupacional8.required = false;
                    ocupacional9.required = false;
                    ocupacional10.required = false;
                    ocupacional11.required = false;
                    ocupacional12.required = false;
                }
            });
            ocupacional11.addEventListener("change", function() {
                if (
                    ocupacional1.value != "" ||
                    ocupacional2.value != "" ||
                    ocupacional3.value != "" ||
                    ocupacional4.value != "" ||
                    ocupacional5.value != "" ||
                    ocupacional6.value != "" ||
                    ocupacional7.value != "" ||
                    ocupacional8.value != "" ||
                    ocupacional9.value != "" ||
                    ocupacional10.value != "" ||
                    ocupacional11.value != "" ||
                    ocupacional12.value != ""
                ) {
                    ocupacional1.required = true;
                    ocupacional2.required = true;
                    ocupacional3.required = true;
                    ocupacional4.required = true;
                    ocupacional5.required = true;
                    ocupacional6.required = true;
                    ocupacional7.required = true;
                    ocupacional8.required = true;
                    ocupacional9.required = true;
                    ocupacional10.required = true;
                    ocupacional11.required = true;
                    ocupacional12.required = true;
                } else {
                    ocupacional1.required = false;
                    ocupacional2.required = false;
                    ocupacional3.required = false;
                    ocupacional4.required = false;
                    ocupacional5.required = false;
                    ocupacional6.required = false;
                    ocupacional7.required = false;
                    ocupacional8.required = false;
                    ocupacional9.required = false;
                    ocupacional10.required = false;
                    ocupacional11.required = false;
                    ocupacional12.required = false;
                }
            });
            ocupacional12.addEventListener("change", function() {
                if (
                    ocupacional1.value != "" ||
                    ocupacional2.value != "" ||
                    ocupacional3.value != "" ||
                    ocupacional4.value != "" ||
                    ocupacional5.value != "" ||
                    ocupacional6.value != "" ||
                    ocupacional7.value != "" ||
                    ocupacional8.value != "" ||
                    ocupacional9.value != "" ||
                    ocupacional10.value != "" ||
                    ocupacional11.value != "" ||
                    ocupacional12.value != ""
                ) {
                    ocupacional1.required = true;
                    ocupacional2.required = true;
                    ocupacional3.required = true;
                    ocupacional4.required = true;
                    ocupacional5.required = true;
                    ocupacional6.required = true;
                    ocupacional7.required = true;
                    ocupacional8.required = true;
                    ocupacional9.required = true;
                    ocupacional10.required = true;
                    ocupacional11.required = true;
                    ocupacional12.required = true;
                } else {
                    ocupacional1.required = false;
                    ocupacional2.required = false;
                    ocupacional3.required = false;
                    ocupacional4.required = false;
                    ocupacional5.required = false;
                    ocupacional6.required = false;
                    ocupacional7.required = false;
                    ocupacional8.required = false;
                    ocupacional9.required = false;
                    ocupacional10.required = false;
                    ocupacional11.required = false;
                    ocupacional12.required = false;
                }
            });
        } catch (error) {}
        //CIERRE bloque INTERVENCIÓN POR TERAPIA OCUPACIONAL
        try {
            //SEGUIMIENTO Y MONITOREO
            let vinculate3PretestFecha = document.querySelector("#valorControl9056");
            let vinculate3PostestFecha = document.querySelector("#valorControl9057");
            let FechaIntervencionVinculate =
                document.querySelector("#FechaIntervencion");
            //VARIABLE FECHA PRETEST
            vinculate3PretestFecha.addEventListener("change", function() {
                //VALIDA FECHA PRETEST
                if (vinculate3PretestFecha.value != FechaIntervencionVinculate.value) {
                    vinculate3PretestFecha.value = "";
                } else {}
                validarYLimpiarFecha_2023_2024(vinculate3PretestFecha);

                //VALIDAR VARIABLE 1 PRETEST
                let vinculate3Pretest1 = document.querySelector("#valorControl9058");
                let vinculate3Pretest2 = document.querySelector("#valorControl9062");
                let vinculate3Pretest3 = document.querySelector("#valorControl9065");
                let vinculate3Pretest4 = document.querySelector("#valorControl9068");
                let vinculate3Pretest5 = document.querySelector("#valorControl9071");
                let vinculate3Pretest6 = document.querySelector("#valorControl9074");
                let vinculate3Pretest7 = document.querySelector("#valorControl9077");
                let vinculate3Pretest8 = document.querySelector("#valorControl9080");
                let vinculate3Pretest9 = document.querySelector("#valorControl9083");
                let vinculate3Pretest10 = document.querySelector("#valorControl9086");
                switch (true) {
                    case vinculate3PretestFecha != "":
                        vinculate3Pretest1.required = true;
                        vinculate3Pretest2.required = true;
                        vinculate3Pretest3.required = true;
                        vinculate3Pretest4.required = true;
                        vinculate3Pretest5.required = true;
                        vinculate3Pretest6.required = true;
                        vinculate3Pretest7.required = true;
                        vinculate3Pretest8.required = true;
                        vinculate3Pretest9.required = true;
                        vinculate3Pretest10.required = true;
                        break;
                    default:
                        vinculate3Pretest1.required = false;
                        vinculate3Pretest2.required = false;
                        vinculate3Pretest3.required = false;
                        vinculate3Pretest4.required = false;
                        vinculate3Pretest5.required = false;
                        vinculate3Pretest6.required = false;
                        vinculate3Pretest7.required = false;
                        vinculate3Pretest8.required = false;
                        vinculate3Pretest9.required = false;
                        vinculate3Pretest10.required = false;
                        break;
                }
            });
            //VALIDA FECHA POSTEST
            vinculate3PostestFecha.addEventListener("change", function() {
                validarYLimpiarFecha_2023_2024(vinculate3PostestFecha);
                if (vinculate3PretestFecha.value === "") {
                    vinculate3PostestFecha.value = "";
                } else {}
                //VALIDAR VARIABLE 2 Postest
                // let vinculate3Postest1 = document.querySelector("#valorControl9059");
                // let vinculate3Postest2 = document.querySelector("#valorControl9063");
                // let vinculate3Postest3 = document.querySelector("#valorControl9066");
                // let vinculate3Postest4 = document.querySelector("#valorControl9069");
                // let vinculate3Postest5 = document.querySelector("#valorControl9072");
                // let vinculate3Postest6 = document.querySelector("#valorControl9075");
                // let vinculate3Postest7 = document.querySelector("#valorControl9078");
                // let vinculate3Postest8 = document.querySelector("#valorControl9081");
                // let vinculate3Postest9 = document.querySelector("#valorControl9084");
                // let vinculate3Postest10 = document.querySelector("#valorControl9087");
                // switch (true) {
                //   case vinculate3PostestFecha != "":
                //     vinculate3Postest1.required = true;
                //     vinculate3Postest2.required = true;
                //     vinculate3Postest3.required = true;
                //     vinculate3Postest4.required = true;
                //     vinculate3Postest5.required = true;
                //     vinculate3Postest6.required = true;
                //     vinculate3Postest7.required = true;
                //     vinculate3Postest8.required = true;
                //     vinculate3Postest9.required = true;
                //     vinculate3Postest10.required = true;
                //     break;
                //   default:
                //     vinculate3Postest1.required = false;
                //     vinculate3Postest2.required = false;
                //     vinculate3Postest3.required = false;
                //     vinculate3Postest4.required = false;
                //     vinculate3Postest5.required = false;
                //     vinculate3Postest6.required = false;
                //     vinculate3Postest7.required = false;
                //     vinculate3Postest8.required = false;
                //     vinculate3Postest9.required = false;
                //     vinculate3Postest10.required = false;
                //     break;
                //}
            });
        } catch (error) {}
        // SEGUIMIENTO EQUIPOS DE REDUCCION DE DAÑOS Y RIESGOS - PID
        let VinculateFechaPrimerSeguimientoEquipos =
            document.querySelector("#valorControl11834");
        let VinculateFechaSegundoSeguimientoEquipos =
            document.querySelector("#valorControl11835");
        let VinculateFechaTercerSeguimientoEquipos =
            document.querySelector("#valorControl11851");
        try {
            VinculateFechaPrimerSeguimientoEquipos.addEventListener(
                "change",
                function() {
                    if (VinculateFechaPrimerSeguimientoEquipos !== "") {
                        validarYLimpiarFecha_2023_2024(
                            VinculateFechaPrimerSeguimientoEquipos
                        );
                    }
                }
            );
            VinculateFechaSegundoSeguimientoEquipos.addEventListener(
                "change",
                function() {
                    if (VinculateFechaSegundoSeguimientoEquipos !== "") {
                        validarYLimpiarFecha_2023_2024(
                            VinculateFechaSegundoSeguimientoEquipos
                        );
                    }
                }
            );
            VinculateFechaTercerSeguimientoEquipos.addEventListener(
                "change",
                function() {
                    if (VinculateFechaTercerSeguimientoEquipos !== "") {
                        validarYLimpiarFecha_2023_2024(
                            VinculateFechaTercerSeguimientoEquipos
                        );
                    }
                }
            );
        } catch (error) {}

        //   ESCALA "CARLOS CRAFFT"

        try {} catch (error) {}

        //   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

        //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES FMILIAR____________________________________________________________________________________________________________

        let Vinculate_SAJ_valorControl9114_Fecha_S1_Familiar =
            document.querySelector("#valorControl9114");
        let Vinculate_SAJ_valorControl9115_Tema_S1_Familiar =
            document.querySelector("#valorControl9115");
        let Vinculate_SAJ_valorControl9117_Fecha_S2_Familiar =
            document.querySelector("#valorControl9117");
        let Vinculate_SAJ_valorControl9118_Tema_S2_Familiar =
            document.querySelector("#valorControl9118");
        let Vinculate_SAJ_valorControl9120_Fecha_S3_Familiar =
            document.querySelector("#valorControl9120");
        let Vinculate_SAJ_valorControl9121_Tema_S3_Familiar =
            document.querySelector("#valorControl9121");
        try {
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES FMILIAR____________________________________________________________________________________________________________

            if (Vinculate_SAJ_valorControl9114_Fecha_S1_Familiar.value != "") {
                Vinculate_SAJ_valorControl9115_Tema_S1_Familiar.required = true;
            } else {
                Vinculate_SAJ_valorControl9115_Tema_S1_Familiar.required = false;
            }
            Vinculate_SAJ_valorControl9114_Fecha_S1_Familiar.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9114_Fecha_S1_Familiar
                    );
                    if (Vinculate_SAJ_valorControl9114_Fecha_S1_Familiar.value != "") {
                        Vinculate_SAJ_valorControl9115_Tema_S1_Familiar.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9115_Tema_S1_Familiar.required = false;
                    }
                }
            );

            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES FMILIAR____________________________________________________________________________________________________________

            if (Vinculate_SAJ_valorControl9117_Fecha_S2_Familiar.value != "") {
                Vinculate_SAJ_valorControl9118_Tema_S2_Familiar.required = true;
            } else {
                Vinculate_SAJ_valorControl9118_Tema_S2_Familiar.required = false;
            }
            Vinculate_SAJ_valorControl9117_Fecha_S2_Familiar.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9117_Fecha_S2_Familiar
                    );
                    if (Vinculate_SAJ_valorControl9117_Fecha_S2_Familiar.value != "") {
                        Vinculate_SAJ_valorControl9118_Tema_S2_Familiar.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9118_Tema_S2_Familiar.required = false;
                    }
                }
            );

            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES FMILIAR____________________________________________________________________________________________________________

            if (Vinculate_SAJ_valorControl9120_Fecha_S3_Familiar.value != "") {
                Vinculate_SAJ_valorControl9121_Tema_S3_Familiar.required = true;
            } else {
                Vinculate_SAJ_valorControl9121_Tema_S3_Familiar.required = false;
            }
            Vinculate_SAJ_valorControl9120_Fecha_S3_Familiar.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9120_Fecha_S3_Familiar
                    );
                    if (Vinculate_SAJ_valorControl9120_Fecha_S3_Familiar.value != "") {
                        Vinculate_SAJ_valorControl9121_Tema_S3_Familiar.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9121_Tema_S3_Familiar.required = false;
                    }
                }
            );

            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES FMILIAR____________________________________________________________________________________________________________

            if (Vinculate_SAJ_valorControl9115_Tema_S1_Familiar.value != "") {
                Vinculate_SAJ_valorControl9114_Fecha_S1_Familiar.required = true;
            } else {
                Vinculate_SAJ_valorControl9114_Fecha_S1_Familiar.required = false;
            }
            Vinculate_SAJ_valorControl9115_Tema_S1_Familiar.addEventListener(
                "change",
                function() {
                    if (Vinculate_SAJ_valorControl9115_Tema_S1_Familiar.value != "") {
                        Vinculate_SAJ_valorControl9114_Fecha_S1_Familiar.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9114_Fecha_S1_Familiar.required = false;
                    }
                }
            );

            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES FMILIAR____________________________________________________________________________________________________________

            if (Vinculate_SAJ_valorControl9118_Tema_S2_Familiar.value != "") {
                Vinculate_SAJ_valorControl9117_Fecha_S2_Familiar.required = true;
            } else {
                Vinculate_SAJ_valorControl9117_Fecha_S2_Familiar.required = false;
            }
            Vinculate_SAJ_valorControl9118_Tema_S2_Familiar.addEventListener(
                "change",
                function() {
                    if (Vinculate_SAJ_valorControl9118_Tema_S2_Familiar.value != "") {
                        Vinculate_SAJ_valorControl9117_Fecha_S2_Familiar.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9117_Fecha_S2_Familiar.required = false;
                    }
                }
            );

            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES FMILIAR____________________________________________________________________________________________________________

            if (Vinculate_SAJ_valorControl9121_Tema_S3_Familiar.value != "") {
                Vinculate_SAJ_valorControl9120_Fecha_S3_Familiar.required = true;
            } else {
                Vinculate_SAJ_valorControl9120_Fecha_S3_Familiar.required = false;
            }
            Vinculate_SAJ_valorControl9121_Tema_S3_Familiar.addEventListener(
                "change",
                function() {
                    if (Vinculate_SAJ_valorControl9121_Tema_S3_Familiar.value != "") {
                        Vinculate_SAJ_valorControl9120_Fecha_S3_Familiar.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9120_Fecha_S3_Familiar.required = false;
                    }
                }
            );
        } catch (error) {}

        //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
        let Vinculate_SAJ_valorControl9124_Fecha_S1_Colectivo =
            document.querySelector("#valorControl9124");
        let Vinculate_SAJ_valorControl9125_Tema_S1_Colectivo =
            document.querySelector("#valorControl9125");
        let Vinculate_SAJ_valorControl9126_Fecha_S1_Colectivo =
            document.querySelector("#valorControl9126");
        let Vinculate_SAJ_valorControl9127_Tema_S1_Colectivo =
            document.querySelector("#valorControl9127");
        let Vinculate_SAJ_valorControl9128_Fecha_S1_Colectivo =
            document.querySelector("#valorControl9128");
        let Vinculate_SAJ_valorControl9129_Tema_S1_Colectivo =
            document.querySelector("#valorControl9129");
        let Vinculate_SAJ_valorControl9130_Fecha_S1_Colectivo =
            document.querySelector("#valorControl9130");
        let Vinculate_SAJ_valorControl9131_Tema_S1_Colectivo =
            document.querySelector("#valorControl9131");
        let Vinculate_SAJ_valorControl9133_Fecha_S2_Colectivo =
            document.querySelector("#valorControl9133");
        let Vinculate_SAJ_valorControl9134_Tema_S2_Colectivo =
            document.querySelector("#valorControl9134");
        let Vinculate_SAJ_valorControl9135_Fecha_S2_Colectivo =
            document.querySelector("#valorControl9135");
        let Vinculate_SAJ_valorControl9136_Tema_S2_Colectivo =
            document.querySelector("#valorControl9136");
        let Vinculate_SAJ_valorControl9137_Fecha_S2_Colectivo =
            document.querySelector("#valorControl9137");
        let Vinculate_SAJ_valorControl9138_Tema_S2_Colectivo =
            document.querySelector("#valorControl9138");
        let Vinculate_SAJ_valorControl9139_Fecha_S2_Colectivo =
            document.querySelector("#valorControl9139");
        let Vinculate_SAJ_valorControl9140_Tema_S2_Colectivo =
            document.querySelector("#valorControl9140");
        let Vinculate_SAJ_valorControl9142_Fecha_S3_Colectivo =
            document.querySelector("#valorControl9142");
        let Vinculate_SAJ_valorControl9143_Tema_S3_Colectivo =
            document.querySelector("#valorControl9143");
        let Vinculate_SAJ_valorControl9144_Fecha_S3_Colectivo =
            document.querySelector("#valorControl9144");
        let Vinculate_SAJ_valorControl9145_Tema_S3_Colectivo =
            document.querySelector("#valorControl9145");
        let Vinculate_SAJ_valorControl9146_Fecha_S3_Colectivo =
            document.querySelector("#valorControl9146");
        let Vinculate_SAJ_valorControl9147_Tema_S3_Colectivo =
            document.querySelector("#valorControl9147");
        let Vinculate_SAJ_valorControl9148_Fecha_S3_Colectivo =
            document.querySelector("#valorControl9148");
        let Vinculate_SAJ_valorControl9149_Tema_S3_Colectivo =
            document.querySelector("#valorControl9149");
        let Vinculate_SAJ_valorControl9152_Fecha_S1_Atenciones =
            document.querySelector("#valorControl9152");
        let Vinculate_SAJ_valorControl9153_Psicologia_S1_Atenciones =
            document.querySelector("#valorControl9153");
        let Vinculate_SAJ_valorControl9155_Fecha_S2_Atenciones =
            document.querySelector("#valorControl9155");
        let Vinculate_SAJ_valorControl9156_Psicologia_S2_Atenciones =
            document.querySelector("#valorControl9156");
        let Vinculate_SAJ_valorControl9158_Fecha_S3_Atenciones =
            document.querySelector("#valorControl9158");
        let Vinculate_SAJ_valorControl9159_Psicologia_S3_Atenciones =
            document.querySelector("#valorControl9159");
        let Vinculate_SAJ_valorControl9161_Psicologia_CIERRE_Atenciones =
            document.querySelector("#valorControl9161");
        let Vinculate_SAJ_valorControl9162_TrabajoSocial_CIERRE_Atenciones =
            document.querySelector("#valorControl9162");
        let Vinculate_SAJ_valorControl9163_TerapiaOcupacional_CIERRE_Atenciones =
            document.querySelector("#valorControl9163");

        try {
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
            if (Vinculate_SAJ_valorControl9124_Fecha_S1_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9125_Tema_S1_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9125_Tema_S1_Colectivo.required = false;
            }
            if (Vinculate_SAJ_valorControl9125_Tema_S1_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9124_Fecha_S1_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9124_Fecha_S1_Colectivo.required = false;
            }
            Vinculate_SAJ_valorControl9124_Fecha_S1_Colectivo.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9124_Fecha_S1_Colectivo
                    );
                    if (Vinculate_SAJ_valorControl9124_Fecha_S1_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9125_Tema_S1_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9125_Tema_S1_Colectivo.required = false;
                    }
                }
            );
            Vinculate_SAJ_valorControl9125_Tema_S1_Colectivo.addEventListener(
                "change",
                function() {
                    if (Vinculate_SAJ_valorControl9125_Tema_S1_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9124_Fecha_S1_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9124_Fecha_S1_Colectivo.required = false;
                    }
                }
            );
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
            if (Vinculate_SAJ_valorControl9126_Fecha_S1_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9127_Tema_S1_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9127_Tema_S1_Colectivo.required = false;
            }
            if (Vinculate_SAJ_valorControl9127_Tema_S1_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9126_Fecha_S1_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9126_Fecha_S1_Colectivo.required = false;
            }
            Vinculate_SAJ_valorControl9126_Fecha_S1_Colectivo.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9126_Fecha_S1_Colectivo
                    );
                    if (Vinculate_SAJ_valorControl9126_Fecha_S1_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9127_Tema_S1_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9127_Tema_S1_Colectivo.required = false;
                    }
                }
            );
            Vinculate_SAJ_valorControl9127_Tema_S1_Colectivo.addEventListener(
                "change",
                function() {
                    if (Vinculate_SAJ_valorControl9127_Tema_S1_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9126_Fecha_S1_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9126_Fecha_S1_Colectivo.required = false;
                    }
                }
            );
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
            if (Vinculate_SAJ_valorControl9128_Fecha_S1_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9129_Tema_S1_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9129_Tema_S1_Colectivo.required = false;
            }
            if (Vinculate_SAJ_valorControl9129_Tema_S1_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9128_Fecha_S1_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9128_Fecha_S1_Colectivo.required = false;
            }
            Vinculate_SAJ_valorControl9128_Fecha_S1_Colectivo.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9128_Fecha_S1_Colectivo
                    );
                    if (Vinculate_SAJ_valorControl9128_Fecha_S1_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9129_Tema_S1_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9129_Tema_S1_Colectivo.required = false;
                    }
                }
            );
            Vinculate_SAJ_valorControl9129_Tema_S1_Colectivo.addEventListener(
                "change",
                function() {
                    if (Vinculate_SAJ_valorControl9129_Tema_S1_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9128_Fecha_S1_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9128_Fecha_S1_Colectivo.required = false;
                    }
                }
            );
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
            if (Vinculate_SAJ_valorControl9130_Fecha_S1_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9131_Tema_S1_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9131_Tema_S1_Colectivo.required = false;
            }
            if (Vinculate_SAJ_valorControl9131_Tema_S1_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9130_Fecha_S1_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9130_Fecha_S1_Colectivo.required = false;
            }
            Vinculate_SAJ_valorControl9130_Fecha_S1_Colectivo.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9130_Fecha_S1_Colectivo
                    );
                    if (Vinculate_SAJ_valorControl9130_Fecha_S1_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9131_Tema_S1_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9131_Tema_S1_Colectivo.required = false;
                    }
                }
            );
            Vinculate_SAJ_valorControl9131_Tema_S1_Colectivo.addEventListener(
                "change",
                function() {
                    if (Vinculate_SAJ_valorControl9131_Tema_S1_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9130_Fecha_S1_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9130_Fecha_S1_Colectivo.required = false;
                    }
                }
            );
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
            if (Vinculate_SAJ_valorControl9133_Fecha_S2_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9134_Tema_S2_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9134_Tema_S2_Colectivo.required = false;
            }
            if (Vinculate_SAJ_valorControl9134_Tema_S2_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9133_Fecha_S2_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9133_Fecha_S2_Colectivo.required = false;
            }
            Vinculate_SAJ_valorControl9133_Fecha_S2_Colectivo.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9133_Fecha_S2_Colectivo
                    );
                    if (Vinculate_SAJ_valorControl9133_Fecha_S2_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9134_Tema_S2_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9134_Tema_S2_Colectivo.required = false;
                    }
                }
            );
            Vinculate_SAJ_valorControl9134_Tema_S2_Colectivo.addEventListener(
                "change",
                function() {
                    if (Vinculate_SAJ_valorControl9134_Tema_S2_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9133_Fecha_S2_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9133_Fecha_S2_Colectivo.required = false;
                    }
                }
            );
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
            if (Vinculate_SAJ_valorControl9135_Fecha_S2_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9136_Tema_S2_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9136_Tema_S2_Colectivo.required = false;
            }
            if (Vinculate_SAJ_valorControl9136_Tema_S2_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9135_Fecha_S2_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9135_Fecha_S2_Colectivo.required = false;
            }
            Vinculate_SAJ_valorControl9135_Fecha_S2_Colectivo.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9135_Fecha_S2_Colectivo
                    );
                    if (Vinculate_SAJ_valorControl9135_Fecha_S2_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9136_Tema_S2_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9136_Tema_S2_Colectivo.required = false;
                    }
                }
            );
            Vinculate_SAJ_valorControl9136_Tema_S2_Colectivo.addEventListener(
                "change",
                function() {
                    if (Vinculate_SAJ_valorControl9136_Tema_S2_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9135_Fecha_S2_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9135_Fecha_S2_Colectivo.required = false;
                    }
                }
            );
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
            if (Vinculate_SAJ_valorControl9137_Fecha_S2_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9138_Tema_S2_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9138_Tema_S2_Colectivo.required = false;
            }
            if (Vinculate_SAJ_valorControl9138_Tema_S2_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9137_Fecha_S2_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9137_Fecha_S2_Colectivo.required = false;
            }
            Vinculate_SAJ_valorControl9137_Fecha_S2_Colectivo.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9137_Fecha_S2_Colectivo
                    );
                    if (Vinculate_SAJ_valorControl9137_Fecha_S2_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9138_Tema_S2_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9138_Tema_S2_Colectivo.required = false;
                    }
                }
            );
            Vinculate_SAJ_valorControl9138_Tema_S2_Colectivo.addEventListener(
                "change",
                function() {
                    if (Vinculate_SAJ_valorControl9138_Tema_S2_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9137_Fecha_S2_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9137_Fecha_S2_Colectivo.required = false;
                    }
                }
            );
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
            if (Vinculate_SAJ_valorControl9139_Fecha_S2_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9140_Tema_S2_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9140_Tema_S2_Colectivo.required = false;
            }
            if (Vinculate_SAJ_valorControl9140_Tema_S2_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9139_Fecha_S2_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9139_Fecha_S2_Colectivo.required = false;
            }
            Vinculate_SAJ_valorControl9139_Fecha_S2_Colectivo.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9139_Fecha_S2_Colectivo
                    );
                    if (Vinculate_SAJ_valorControl9139_Fecha_S2_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9140_Tema_S2_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9140_Tema_S2_Colectivo.required = false;
                    }
                }
            );
            Vinculate_SAJ_valorControl9140_Tema_S2_Colectivo.addEventListener(
                "change",
                function() {
                    if (Vinculate_SAJ_valorControl9140_Tema_S2_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9139_Fecha_S2_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9139_Fecha_S2_Colectivo.required = false;
                    }
                }
            );
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
            if (Vinculate_SAJ_valorControl9142_Fecha_S3_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9143_Tema_S3_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9143_Tema_S3_Colectivo.required = false;
            }
            if (Vinculate_SAJ_valorControl9143_Tema_S3_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9142_Fecha_S3_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9142_Fecha_S3_Colectivo.required = false;
            }
            Vinculate_SAJ_valorControl9142_Fecha_S3_Colectivo.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9142_Fecha_S3_Colectivo
                    );
                    if (Vinculate_SAJ_valorControl9142_Fecha_S3_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9143_Tema_S3_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9143_Tema_S3_Colectivo.required = false;
                    }
                }
            );
            Vinculate_SAJ_valorControl9143_Tema_S3_Colectivo.addEventListener(
                "change",
                function() {
                    if (Vinculate_SAJ_valorControl9143_Tema_S3_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9142_Fecha_S3_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9142_Fecha_S3_Colectivo.required = false;
                    }
                }
            );
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
            if (Vinculate_SAJ_valorControl9144_Fecha_S3_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9145_Tema_S3_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9145_Tema_S3_Colectivo.required = false;
            }
            if (Vinculate_SAJ_valorControl9145_Tema_S3_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9144_Fecha_S3_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9144_Fecha_S3_Colectivo.required = false;
            }
            Vinculate_SAJ_valorControl9144_Fecha_S3_Colectivo.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9144_Fecha_S3_Colectivo
                    );
                    if (Vinculate_SAJ_valorControl9144_Fecha_S3_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9145_Tema_S3_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9145_Tema_S3_Colectivo.required = false;
                    }
                }
            );
            Vinculate_SAJ_valorControl9145_Tema_S3_Colectivo.addEventListener(
                "change",
                function() {
                    if (Vinculate_SAJ_valorControl9145_Tema_S3_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9144_Fecha_S3_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9144_Fecha_S3_Colectivo.required = false;
                    }
                }
            );
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
            if (Vinculate_SAJ_valorControl9146_Fecha_S3_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9147_Tema_S3_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9147_Tema_S3_Colectivo.required = false;
            }
            if (Vinculate_SAJ_valorControl9147_Tema_S3_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9146_Fecha_S3_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9146_Fecha_S3_Colectivo.required = false;
            }
            Vinculate_SAJ_valorControl9146_Fecha_S3_Colectivo.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9146_Fecha_S3_Colectivo
                    );
                    if (Vinculate_SAJ_valorControl9146_Fecha_S3_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9147_Tema_S3_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9147_Tema_S3_Colectivo.required = false;
                    }
                }
            );
            Vinculate_SAJ_valorControl9147_Tema_S3_Colectivo.addEventListener(
                "change",
                function() {
                    if (Vinculate_SAJ_valorControl9147_Tema_S3_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9146_Fecha_S3_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9146_Fecha_S3_Colectivo.required = false;
                    }
                }
            );
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
            if (Vinculate_SAJ_valorControl9148_Fecha_S3_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9149_Tema_S3_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9149_Tema_S3_Colectivo.required = false;
            }
            if (Vinculate_SAJ_valorControl9149_Tema_S3_Colectivo.value != "") {
                Vinculate_SAJ_valorControl9148_Fecha_S3_Colectivo.required = true;
            } else {
                Vinculate_SAJ_valorControl9148_Fecha_S3_Colectivo.required = false;
            }
            Vinculate_SAJ_valorControl9148_Fecha_S3_Colectivo.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9148_Fecha_S3_Colectivo
                    );
                    if (Vinculate_SAJ_valorControl9148_Fecha_S3_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9149_Tema_S3_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9149_Tema_S3_Colectivo.required = false;
                    }
                }
            );
            Vinculate_SAJ_valorControl9149_Tema_S3_Colectivo.addEventListener(
                "change",
                function() {
                    if (Vinculate_SAJ_valorControl9149_Tema_S3_Colectivo.value != "") {
                        Vinculate_SAJ_valorControl9148_Fecha_S3_Colectivo.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9148_Fecha_S3_Colectivo.required = false;
                    }
                }
            );
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
            if (Vinculate_SAJ_valorControl9152_Fecha_S1_Atenciones.value != "") {
                Vinculate_SAJ_valorControl9153_Psicologia_S1_Atenciones.required = true;
            } else {
                Vinculate_SAJ_valorControl9153_Psicologia_S1_Atenciones.required = false;
            }
            if (Vinculate_SAJ_valorControl9153_Psicologia_S1_Atenciones.value != "") {
                Vinculate_SAJ_valorControl9152_Fecha_S1_Atenciones.required = true;
            } else {
                Vinculate_SAJ_valorControl9152_Fecha_S1_Atenciones.required = false;
            }
            Vinculate_SAJ_valorControl9152_Fecha_S1_Atenciones.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9152_Fecha_S1_Atenciones
                    );
                    if (Vinculate_SAJ_valorControl9152_Fecha_S1_Atenciones.value != "") {
                        Vinculate_SAJ_valorControl9153_Psicologia_S1_Atenciones.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9153_Psicologia_S1_Atenciones.required = false;
                    }
                }
            );
            Vinculate_SAJ_valorControl9153_Psicologia_S1_Atenciones.addEventListener(
                "change",
                function() {
                    if (
                        Vinculate_SAJ_valorControl9153_Psicologia_S1_Atenciones.value != ""
                    ) {
                        Vinculate_SAJ_valorControl9152_Fecha_S1_Atenciones.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9152_Fecha_S1_Atenciones.required = false;
                    }
                }
            );
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
            if (Vinculate_SAJ_valorControl9155_Fecha_S2_Atenciones.value != "") {
                Vinculate_SAJ_valorControl9156_Psicologia_S2_Atenciones.required = true;
            } else {
                Vinculate_SAJ_valorControl9156_Psicologia_S2_Atenciones.required = false;
            }
            if (Vinculate_SAJ_valorControl9156_Psicologia_S2_Atenciones.value != "") {
                Vinculate_SAJ_valorControl9155_Fecha_S2_Atenciones.required = true;
            } else {
                Vinculate_SAJ_valorControl9155_Fecha_S2_Atenciones.required = false;
            }
            Vinculate_SAJ_valorControl9155_Fecha_S2_Atenciones.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9155_Fecha_S2_Atenciones
                    );
                    if (Vinculate_SAJ_valorControl9155_Fecha_S2_Atenciones.value != "") {
                        Vinculate_SAJ_valorControl9156_Psicologia_S2_Atenciones.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9156_Psicologia_S2_Atenciones.required = false;
                    }
                }
            );
            Vinculate_SAJ_valorControl9156_Psicologia_S2_Atenciones.addEventListener(
                "change",
                function() {
                    if (
                        Vinculate_SAJ_valorControl9156_Psicologia_S2_Atenciones.value != ""
                    ) {
                        Vinculate_SAJ_valorControl9155_Fecha_S2_Atenciones.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9155_Fecha_S2_Atenciones.required = false;
                    }
                }
            );
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
            if (Vinculate_SAJ_valorControl9158_Fecha_S3_Atenciones.value != "") {
                Vinculate_SAJ_valorControl9159_Psicologia_S3_Atenciones.required = true;
            } else {
                Vinculate_SAJ_valorControl9159_Psicologia_S3_Atenciones.required = false;
            }
            if (Vinculate_SAJ_valorControl9159_Psicologia_S3_Atenciones.value != "") {
                Vinculate_SAJ_valorControl9158_Fecha_S3_Atenciones.required = true;
            } else {
                Vinculate_SAJ_valorControl9158_Fecha_S3_Atenciones.required = false;
            }
            Vinculate_SAJ_valorControl9158_Fecha_S3_Atenciones.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9158_Fecha_S3_Atenciones
                    );
                    if (Vinculate_SAJ_valorControl9158_Fecha_S3_Atenciones.value != "") {
                        Vinculate_SAJ_valorControl9159_Psicologia_S3_Atenciones.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9159_Psicologia_S3_Atenciones.required = false;
                    }
                }
            );
            Vinculate_SAJ_valorControl9159_Psicologia_S3_Atenciones.addEventListener(
                "change",
                function() {
                    if (
                        Vinculate_SAJ_valorControl9159_Psicologia_S3_Atenciones.value != ""
                    ) {
                        Vinculate_SAJ_valorControl9158_Fecha_S3_Atenciones.required = true;
                    } else {
                        Vinculate_SAJ_valorControl9158_Fecha_S3_Atenciones.required = false;
                    }
                }
            );
            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
            Vinculate_SAJ_valorControl9161_Psicologia_CIERRE_Atenciones.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9161_Psicologia_CIERRE_Atenciones
                    );
                }
            );

            Vinculate_SAJ_valorControl9162_TrabajoSocial_CIERRE_Atenciones.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9162_TrabajoSocial_CIERRE_Atenciones
                    );
                }
            );
            Vinculate_SAJ_valorControl9163_TerapiaOcupacional_CIERRE_Atenciones.addEventListener(
                "change",
                function() {
                    validarYLimpiarFecha_2023_2024(
                        Vinculate_SAJ_valorControl9163_TerapiaOcupacional_CIERRE_Atenciones
                    );
                }
            );

            //_________________________SERVICIOS DE ACOGIDA JUVENILES-SAJ - ATENCIONES COLECTIVO____________________________________________________________________________________________________________
        } catch (error) {}

        //    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    } catch (error) {}
    /*
  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX




2 SESIONES COLECTIVAS




XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

    try {
        /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  2 SESIONES COLECTIVAS   |   1 IDENTIFICACION DE PERSONAS
  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

        try {
            /*   2.3.1   LONGITUD PRIMER NOMBRE   valorControl10233 - Debe ser mayor a 4 caracteres    */
        } catch (error) {}

        try {
            /*   2.3.2   LONGITUD SEGUNDO NOMBRE   valorControl10234 - Debe ser mayor a 4 caracteres si no esta vacio    */
        } catch (error) {}

        try {
            /*   2.3.3   LONGITUD PRIMER APELLIDO   valorControl10235 - Debe ser mayor a 4 caracteres    */
        } catch (error) {}

        try {
            /*   2.3.4   LONGITUD SEGUNDO APELLIDO   valorControl10236 - Debe ser mayor a 4 caracteres si no esta vacio    */
        } catch (error) {}

        try {
            /*   2.3.5   LONGITUD DE NUMERO DE DOCUMENTO valorControl10238 - No puede ser de 9 o mas de 12 caracteres   */

            let SesionesNumeroDocumento =
                document.querySelector("#valorControl10238");

            SesionesNumeroDocumento.addEventListener("blur", function() {
                LongitudNumeroDocumento(SesionesNumeroDocumento);
            });

            //      XXXXXXXXXXXXXXXXXXXXXXXXX       VERIFICA NACIONALIDAD

            let Nacionalidad = document.querySelector("#valorControl10244");
            let tipoDocumentoSesiones = document.querySelector("#valorControl10237");
            let poblacionDiferencialSesiones =
                document.querySelector("#valorControl10245");
            const colorOriginal226 = Nacionalidad.style.backgroundColor;
            const campoOriginal226 = Nacionalidad.value;

            //Campo tipo de documento
            tipoDocumentoSesiones.addEventListener("change", function() {
                //  Nacionalidad
                switch (true) {
                    case this.value == "59" || this.value == "60" || this.value == "61":
                        Nacionalidad.value = "Colombia";
                        Nacionalidad.style.backgroundColor = "#23E320";
                        Nacionalidad.querySelector(
                            "option[value='Colombia']"
                        ).disabled = false; //Lista desplegable nacionalida
                        poblacionDiferencialSesiones.value = "2620";
                        break;
                    case this.value == "65" || this.value == "66":
                        Nacionalidad.value = "";
                        Nacionalidad.style.backgroundColor = colorOriginal226;
                        Nacionalidad.querySelector(
                            "option[value='Colombia']"
                        ).disabled = false;
                        poblacionDiferencialSesiones.value = "";
                        break;
                    case this.value != "59" ||
                    this.value != "60" ||
                    this.value != "61" ||
                    this.value != "65" ||
                    this.value != "66":
                        Nacionalidad.value = "";
                        Nacionalidad.style.backgroundColor = colorOriginal226;
                        Nacionalidad.querySelector(
                            "option[value='Colombia']"
                        ).disabled = true;
                        poblacionDiferencialSesiones.value = "2618";
                        break;
                    default:
                        Nacionalidad.value = "";
                        Nacionalidad.style.backgroundColor = colorOriginal226;
                        Nacionalidad.querySelector(
                            "option[value='Colombia']"
                        ).disabled = false;
                        // let poblacionDiferencialSesiones10 = document.querySelector("#valorControl10245");
                        // poblacionDiferencialSesiones10.value ="";
                        break;
                }
                //ENFOCAR A UNA VARIABLE CUANDO HAYA ALGUN CAMBIO
                // numeroDocumento235.focus();
                // tipoDocumentoSesiones.addEventListener("input", function () {
                //   // Enfocar en numeroDocumento235
                //   numeroDocumento235.focus();
                // });
            });
        } catch (error) {}
        try {
            /*   2.3.6   COMPARA SEXEO Y GENERO | Sexo : valorControl10239 | Genero : valorControl10240 - Debe cincidir acorde al Sexo y género
  Sexo =    67 1- Hombre    | 68 2- Mujer     | 69 3- Intersexual
  Genrero = 70 1- Masculino | 71 2- Femenino  | 72  3- Transgénero   */
            document
                .querySelector("#valorControl10239")
                .addEventListener("change", function SexoSesiones() {
                    var Sexo = document.querySelector("#valorControl10239").value;

                    if (Sexo == "67") {
                        var genero = document.querySelector("#valorControl10240");
                        genero.value = "70";
                        genero.style.backgroundColor = "#23E320";
                    } else if (Sexo == "68") {
                        document.querySelector("#valorControl10240").value = "71";
                        var genero = document.querySelector("#valorControl10240");
                        genero.value = "71";
                        genero.style.backgroundColor = "#23E320";
                    } else {
                        document.querySelector("#valorControl10240").value = "72";
                    }
                });
        } catch (error) {}

        try {
            /*   2.3.7   ESTADO CIVIL CALCULO DE EDAD Y COMPARAR CON CAMPO NECESARIO */
            document
                .querySelector("#valorControl10242")
                .addEventListener("change", function() {
                    var verificar = document.querySelector("#valorControl10242").value;
                    var fechaComponentes1 = verificar.split("/");
                    var dia1 = fechaComponentes1[0];
                    var mes1 = fechaComponentes1[1];
                    var año1 = fechaComponentes1[2];
                    var fecha1 = new Date(año1, mes1, dia1);
                    var diaFormateado1 = ("0" + fecha1.getDate()).slice(-2);
                    var mesFormateado1 = ("0" + (fecha1.getMonth() + 1)).slice(-2);
                    var añoFormateado1 = fecha1.getFullYear();

                    var fechaFormateada1 =
                        añoFormateado1 + "/" + mesFormateado1 + "/" + diaFormateado1;

                    var fecha1 = new Date(fechaFormateada1);
                    var ValHoy = new Date();
                    var edad = ValHoy.getFullYear() - fecha1.getFullYear();
                    var m = ValHoy.getMonth() - fecha1.getMonth();

                    if (m < 0 || (m === 0 && ValHoy.getDate() < fecha1.getDate())) {
                        edad - 1;
                    }

                    if (edad >= 0 && edad <= 13) {
                        document.querySelector("#valorControl10241").value = "78";
                        var edad1 = document.querySelector("#valorControl10241");
                        edad1.value = "78";
                        edad1.style.backgroundColor = "#23E320";
                    }
                    if (edad >= 18 && edad <= 13) {
                        document.querySelector("#valorControl10241").value = "78";
                        var edad1 = document.querySelector("#valorControl10241");
                        edad1.value = "78";
                        edad1.style.backgroundColor = "#23E320";
                    }

                    // console.log(fecha1);
                    // console.log(ValHoy);
                    // console.log(edad);
                    // console.log(m);
                });
        } catch (error) {}
        try {
            /*   2.3.8   VALIDA CAMPO FECHA NACIMIENTO QUE RECIBA LOS PARAMETROS CORRECTOS
                        document.querySelector("#valorControl10242")   */
            let fechaNacimiento238 = document.querySelector("#valorControl10242");

            fechaNacimiento238.addEventListener("change", function() {
                let inputFecha238 = fechaNacimiento238.value;
                let pattern =
                    /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[2-9][0-9]|20[0-1][0-9]|202[0-3])$/;

                if (pattern.test(inputFecha238)) {
                    let [dia, mes, anio] = inputFecha238.split("/").map(Number);

                    let maxDia = 31;
                    if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
                        maxDia = 30;
                    } else if (mes === 2) {
                        if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
                            maxDia = 29;
                        } else {
                            maxDia = 28;
                        }
                    }

                    if (
                        dia <= 0 ||
                        dia > maxDia ||
                        mes <= 0 ||
                        mes > 12 ||
                        anio < 1920 ||
                        anio > 2023
                    ) {
                        fechaNacimiento238.setCustomValidity("Fecha no válida");
                        fechaNacimiento238.value = "";
                    } else {
                        fechaNacimiento238.setCustomValidity("");
                    }
                } else {
                    fechaNacimiento238.setCustomValidity("Fecha no válida");
                    fechaNacimiento238.value = "";
                }
            });
        } catch (error) {}
        try {
            let TermFicha = document.querySelector(
                "#main_body > div.swal2-container.swal2-center.swal2-shown > div > div.swal2-actions > button.swal2-confirm.swal2-styled"
            );
            TermFicha.addEventListener("click", function() {
                console.log("Guardando");
                let Noficha = document.querySelector("#Ficha_fic").value;
                console.log(Noficha);
                var Nombre = document.querySelector(
                    "#main_body > div > div > main > div > div > div > div.panel-heading > div > div.col-md-10 > table > tbody > tr > td:nth-child(2) > b"
                ).textContent;
                console.log(Nombre);
                const digitadas = new XMLHttpRequest();
                digitadas.onreadystatechange = function() {
                    if (this.readyState === 4 && this.status === 200) {
                        console.log(this.responseText);
                    }
                };
                digitadas.open(
                    "GET",
                    `https://gesiapp.com.co/configuraciones/ReporteDigitado/inmgresarDigitado.php?ficha=${Noficha}&name=${Nombre}`,
                    true
                );
                digitadas.send();
            });
        } catch (error) {}
    } catch (error) {}

    try {
        let sesionesIndividuos = document.querySelector("#valorControl10250");

        //sesionesIndividuos.style.height = "500px";
        sesionesIndividuos.style.height = "500px";
    } catch (error) {}

    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    2 SESIONES COLECTIVAS   |   2 PROCESOS GENERALES
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    try {
        let SesionesSesion = document.querySelector("#valorControl10227");
        let SesionesFechaProcesos = document.querySelector("#valorControl10228");
        let SesionesNombreProfesional1 =
            document.querySelector("#valorControl10229");
        let SesionesProcesosGeneralesPerfil1 =
            document.querySelector("#valorControl10230");
        SesionesSesion.required = true;
        SesionesFechaProcesos.required = true;
        SesionesNombreProfesional1.required = true;
        SesionesProcesosGeneralesPerfil1.required = true;

        SesionesSesion.addEventListener("change", function() {
            if (SesionesSesion.value === "0") {
                SesionesSesion.value = "";
            }
        });
        SesionesFechaProcesos.addEventListener("change", function() {
            validarYLimpiarFecha_1920_2024(SesionesFechaProcesos);
        });
        validarNombreApellido(SesionesNombreProfesional1);
        SesionesNombreProfesional1.addEventListener("change", function() {
            validarNombreApellido(SesionesNombreProfesional1);
        });
    } catch (error) {}
} catch (error) {}
/* CIERRE SESIONES

/*
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



MAPS



XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
try {
    // INICIO PRUEBA

    // FIN PRUEBA

    /* APERTURA MAPS 1 */

    try {
        /* L0NGITUD NUMERO DE DOCUMENTO */
        try {
            let MapsNumeroDocumento = document.querySelector("#valorControl9899");
            MapsNumeroDocumento.addEventListener("blur", function() {
                LongitudNumeroDocumento(MapsNumeroDocumento);
            });
        } catch (error) {} /* CIERRE L0NGITUD NUMERO DE DOCUMENTO */
        /*NACIONALIDAD*/
        try {
            var Nacionalidad = document.querySelector("#valorControl9900");
            const colorOriginal226 = Nacionalidad.style.backgroundColor;
            const campoOriginal226 = Nacionalidad;

            document
                .querySelector("#valorControl9898") //Campo tipo de documento
                .addEventListener("change", function() {
                    //  Nacionalidad
                    switch (this.value) {
                        case "59":
                        case "60":
                        case "61":
                            Nacionalidad.value = "Colombia";
                            Nacionalidad.style.backgroundColor = "#23E320";
                            var optionColombia = Nacionalidad.querySelector(
                                "option[value='Colombia']" //Lista desplegable nacionalidad
                            );
                            optionColombia.disabled = false;
                            break;

                        default:
                            var optionColombia =
                                Nacionalidad.querySelector("option[value='']");
                            Nacionalidad.value = campoOriginal226;
                            Nacionalidad.style.backgroundColor = colorOriginal226;
                            optionColombia.disabled = true;

                            break;
                    }
                });
        } catch (error) {} /*CIERRE NACIONALIDAD */

        //Estado Civil (.)
        try {
            let Maps1EstadoCivil = document.querySelector("#valorControl9901");
            let Maps1FechadeNacimiento1 = document.querySelector("#valorControl9902");
            let Maps1Edad = document.querySelector("#valorControl11218");
            Maps1EstadoCivil.addEventListener("blur", function() {
                Maps1EstadoCivil.style.backgroundColor = colorBlanco;
            });

            Maps1FechadeNacimiento1.addEventListener("blur", function() {
                switch (true) {
                    case Maps1Edad.value < 14:
                        Maps1EstadoCivil.value = "78";
                        Maps1EstadoCivil.style.backgroundColor = colorVerde;
                        Maps1EstadoCivil.innerHTML = `<select name="valorControl9901" id="valorControl9901" class="form-control" title="Control: valorControl9901 | valor: 78" required="" style="">
            <option value="">Seleccione</option>
                                        <option value="78" selected="">6- No aplica</option>
                                    </select>`;
                        break;
                    case Maps1Edad.value > 13 && Maps1EstadoCivil.value === "78":
                        Maps1EstadoCivil.value = "";
                        Maps1EstadoCivil.style.backgroundColor = colorRojo;
                        Maps1EstadoCivil.innerHTML = `<select name="valorControl9901" id="valorControl9901" class="form-control" title="Control: valorControl9901 | valor: " required="" style="">
              <option value="">Seleccione</option>
                                        <option value="73">1- Soltero(a)</option>
                                          <option value="74">2- Casado(a)</option>
                                          <option value="75">3- Viudo(a)</option>
                                          <option value="76">4- Separado(a)</option>
                                          <option value="77">5- Unión Libre</option>
                                          <option value="2483">7- Divorciado</option>
                                      </select>`;
                        break;

                    default:
                        break;
                }
            });
        } catch (error) {}
        //---------------Estado Civil (.)
        //VALIDA QUE LA FECHA DE NACIMIENTO ESTE CORRECTA
        try {
            /*   2.3.8   VALIDA CAMPO FECHA NACIMIENTO QUE RECIBA LOS PARAMETROS CORRECTOS
                        document.querySelector("#valorControl10242")   */
            let fechaNacimientoMAPS = document.querySelector("#valorControl9902");

            fechaNacimientoMAPS.addEventListener("change", function() {
                let inputFechaMAPS = fechaNacimientoMAPS.value;
                let pattern =
                    /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[2-9][0-9]|20[0-1][0-9]|202[0-3])$/;

                if (pattern.test(inputFechaMAPS)) {
                    let [dia, mes, anio] = inputFechaMAPS.split("/").map(Number);

                    let maxDia = 31;
                    if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
                        maxDia = 30;
                    } else if (mes === 2) {
                        if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
                            maxDia = 29;
                        } else {
                            maxDia = 28;
                        }
                    }

                    if (
                        dia <= 0 ||
                        dia > maxDia ||
                        mes <= 0 ||
                        mes > 12 ||
                        anio < 1920 ||
                        anio > 2023
                    ) {
                        fechaNacimientoMAPS.setCustomValidity("Fecha no válida");
                        fechaNacimientoMAPS.value = "";
                    } else {
                        fechaNacimientoMAPS.setCustomValidity("");
                    }
                } else {
                    fechaNacimientoMAPS.setCustomValidity("Fecha no válida");
                    fechaNacimientoMAPS.value = "";
                }
            });
        } catch (error) {}

        //CIERRE VALIDA QUE LA FECHA DE NACIMIENTO ESTE CORRECTA

        //

        // LISTA EAPB POR REGIMEN
        try {
            let regimenMAPS = document.querySelector("#valorControl9909");

            regimenMAPS.addEventListener("change", function() {
                switch (true) {
                    case regimenMAPS.value === "131":
                        let lista1MAPS = document.querySelector(
                            "#formularioNuevoFormato > div:nth-child(12) > div:nth-child(18) > table > tbody > tr:nth-child(2) > td"
                        );
                        lista1MAPS.innerHTML = `<input type="hidden" name="valorControl9910" id="valorControl9910" value>
      <select name="valorControl9910" id="valorControl9910" class="form-control" title="Control: valorControl9910 | valor:" required style>
      <option value>Seleccione</option>
      <option value="ALIANSALUD EPS">ALIANSALUD EPS</option>
      <option value="ANAS WAYUU EPSI">ANAS WAYUU EPSI</option>
      <option value="ASMET  SALUD">ASMET  SALUD</option>
      <option value="ASOCIACION INDIGENA DEL CAUCA EPSI">ASOCIACION INDIGENA DEL CAUCA EPSI</option>
      <option value="CAJACOPI ATLANTICO">CAJACOPI ATLANTICO</option>
      <option value="CAPITAL SALUD EPS">CAPITAL SALUD EPS</option>
      <option value="CAPRESOCA">CAPRESOCA</option>
      <option value="COMFACHOCO">COMFACHOCO</option>
      <option value="COMFAORIENTE">COMFAORIENTE</option>
      <option value="COOSALUD EPS">COOSALUD EPS</option>
      <option value="COOMEVA EPS">COOMEVA EPS</option>
      <option value="COMPENSAR EPS">COMPENSAR EPS</option>
      <option value="DUSAKAWI EPSI">DUSAKAWI EPSI</option>
      <option value="EMSSANAR E.S.S.">EMSSANAR E.S.S.</option>
      <option value="EPS FAMILIAR DE COLOMBIA">EPS FAMILIAR DE COLOMBIA</option>
      <option value="FAMISANAR">FAMISANAR</option>
      <option value="JERSALUD">JERSALUD</option>
      <option value="MALLAMAS EPSI">MALLAMAS EPSI</option>
      <option value="MEDICOS ASOCIADOS">MEDICOS ASOCIADOS</option>
      <option value="MUTUAL SER">MUTUAL SER</option>
      <option value="NUEVA EPS">NUEVA EPS</option>
      <option value="PIJAOS SALUD EPSI">PIJAOS SALUD EPSI</option>
      <option value="SALUD TOTAL EPS S.A.">SALUD TOTAL EPS S.A.</option>
      <option value="SANITAS EPS">SANITAS EPS</option>
      <option value="SAVIA SALUD EPS">SAVIA SALUD EPS</option>
      <option value="SURA EPS">SURA EPS</option>        
      </select>`;

                        break;
                    case regimenMAPS.value === "132":
                        let lista2MAPS = document.querySelector(
                            "#formularioNuevoFormato > div:nth-child(12) > div:nth-child(18) > table > tbody > tr:nth-child(2) > td"
                        );
                        lista2MAPS.innerHTML = `<input type="hidden" name="valorControl9910" id="valorControl9910" value>
        <select name="valorControl9910" id="valorControl9910" class="form-control" title="Control: valorControl9910 | valor:" required style>
        <option value>Seleccione</option>
        <option value="ALIANSALUD EPS">ALIANSALUD EPS</option>
        <option value="ANAS WAYUU EPSI">ANAS WAYUU EPSI</option>
        <option value="ASMET  SALUD">ASMET  SALUD</option>
        <option value="ASOCIACION INDIGENA DEL CAUCA EPSI">ASOCIACION INDIGENA DEL CAUCA EPSI</option>
        <option value="CAJACOPI ATLANTICO">CAJACOPI ATLANTICO</option>
        <option value="CAPITAL SALUD EPS">CAPITAL SALUD EPS</option>
        <option value="CAPRESOCA">CAPRESOCA</option>
        <option value="COMFACHOCO">COMFACHOCO</option>
        <option value="COMFAORIENTE">COMFAORIENTE</option>
        <option value="COOSALUD EPS">COOSALUD EPS</option>
        <option value="COOMEVA EPS">COOMEVA EPS</option>
        <option value="COMPENSAR EPS">COMPENSAR EPS</option>
        <option value="DUSAKAWI EPSI">DUSAKAWI EPSI</option>
        <option value="EMSSANAR E.S.S.">EMSSANAR E.S.S.</option>
        <option value="EPS FAMILIAR DE COLOMBIA">EPS FAMILIAR DE COLOMBIA</option>
        <option value="FAMISANAR">FAMISANAR</option>
        <option value="JERSALUD">JERSALUD</option>
        <option value="MALLAMAS EPSI">MALLAMAS EPSI</option>
        <option value="MEDICOS ASOCIADOS">MEDICOS ASOCIADOS</option>
        <option value="MUTUAL SER">MUTUAL SER</option>
        <option value="NUEVA EPS">NUEVA EPS</option>
        <option value="PIJAOS SALUD EPSI">PIJAOS SALUD EPSI</option>
        <option value="SALUD TOTAL EPS S.A.">SALUD TOTAL EPS S.A.</option>
        <option value="SANITAS EPS">SANITAS EPS</option>
        <option value="SAVIA SALUD EPS">SAVIA SALUD EPS</option>
        <option value="SURA EPS">SURA EPS</option>        
        </select>`;
                        break;
                    case regimenMAPS.value === "133":
                        let lista3MAPS = document.querySelector(
                            "#formularioNuevoFormato > div:nth-child(12) > div:nth-child(18) > table > tbody > tr:nth-child(2) > td"
                        );
                        lista3MAPS.innerHTML = `<input type="hidden" name="valorControl9910" id="valorControl9910" value>
          <select name="valorControl9910" id="valorControl9910" class="form-control" title="Control: valorControl9910 | valor:" required style>
          <option value>Seleccione</option>
          <option value="ECOPETROL">ECOPETROL</option>
          <option value="FIDUPREVISORA">FIDUPREVISORA</option>
          <option value="FUERZAS MILITARES">FUERZAS MILITARES</option>
          <option value="MAGISTERIO (DOCENTES)">MAGISTERIO (DOCENTES)</option>
          <option value="MEDICOS ASOCIADOS">MEDICOS ASOCIADOS</option>
          <option value="POLICÍA NACIONAL">POLICÍA NACIONAL</option>
          <option value="SANIDAD MILITAR">SANIDAD MILITAR</option>
          <option value="SERVISALUD">SERVISALUD</option>
          <option value="UNIVERSIDADES PÚBLICAS">UNIVERSIDADES PÚBLICAS</option>
            </select>`;
                        break;
                    case regimenMAPS.value === "135":
                        let lista4MAPS = document.querySelector(
                            "#formularioNuevoFormato > div:nth-child(12) > div:nth-child(18) > table > tbody > tr:nth-child(2) > td"
                        );
                        lista4MAPS.innerHTML = `<input type="text" name="valorControl9910" id="valorControl9910" value="NO ASEGURADO" class="form-control" title="Control: valorControl9910" required="" style="width:100%">`;

                        break;
                }
            });
        } catch (error) {}

        // CIERRE LISTA EAPB POR REGIMEN

        /*CAPTURA DE DATOS MAPS 1*/
        try {
            let EdadMaps_1 = document.querySelector("#valorControl11218");
            let capturaEdadMaps = EdadMaps_1.value; //CAMPO CON DATO DE EDAD
            let SexoMaps_1 = document.querySelector("#valorControl9903");
            let capturaSexoMaps = SexoMaps_1.value; //CAMPO CON DATO DE EDAD
            sessionStorage.setItem("capturaSexoMaps", capturaSexoMaps);
            let cambioEnCampoSExo = document.querySelector("#valorControl9903");
            sessionStorage.setItem("capturaEdadMaps", capturaEdadMaps);
            let cambioEnCampoFechaNacimiento =
                document.querySelector("#valorControl9902");
            /* CUANDO HAY CAMBIO DENTRO DEL CAMPO SEXO SE EJECUTA LA FUNCION */
            cambioEnCampoFechaNacimiento.addEventListener("input", function() {
                sessionStorage.setItem("capturaEdadMaps", capturaEdadMaps);
                /* me almacena el dato de la edad en la variable edadAlmacenadaMapsSessionStorage, para usarlo en las demas hojas, en las que hay campos condicionados a la edad */
            });

            /* CUANDO HAY CAMBIO DENTRO DEL CAMPO SEXO SE EJECUTA LA FUNCION */
            cambioEnCampoSExo.addEventListener("blur", function() {
                let capturaEdadMaps =
                    document.querySelector("#valorControl11218").value; //CAMPO CON DATO DE EDAD
                sessionStorage.setItem("capturaEdadMaps", capturaEdadMaps);
                let capturaSexoMaps = document.querySelector("#valorControl9903").value; //CAMPO CON DATO DE EDAD
                sessionStorage.setItem("capturaSexoMaps", capturaSexoMaps);

                let MapsEdad1 = document.querySelector("#valorControl11218");
                let MapsTipoDoc1 = document.querySelector("#valorControl9898");
                let MapsNacion1 = document.querySelector("#valorControl9900");
                let MapsNacimiento1 = document.querySelector("#valorControl9902");
                let MapsSexo1 = document.querySelector("#valorControl9903");
                const MapsNacimiento1FondoOriginal =
                    document.querySelector("#valorControl9902").style.backgroundColor;
                switch (true) {
                    case MapsEdad1.value > 17 && MapsNacion1.value === "Colombia":
                        MapsTipoDoc1.value = "59";
                        MapsTipoDoc1.style.backgroundColor = colorVerde;
                        MapsNacimiento1.style.backgroundColor = colorBlanco;
                        break;
                    case MapsEdad1.value > 6 &&
                    MapsEdad1.value < 18 &&
                    MapsNacion1.value === "Colombia":
                        MapsTipoDoc1.value = "61";
                        MapsTipoDoc1.style.backgroundColor = colorVerde;
                        MapsNacimiento1.style.backgroundColor = colorBlanco;
                        break;
                    case MapsEdad1.value < 7 &&
                    MapsEdad1.value > 0 &&
                    MapsNacion1.value === "Colombia":
                        MapsTipoDoc1.value = "60";
                        MapsTipoDoc1.style.backgroundColor = colorVerde;
                        MapsNacimiento1.style.backgroundColor = colorBlanco;
                        break;
                    case MapsEdad1.value < 1 && MapsNacion1.value === "Colombia":
                        MapsTipoDoc1.value = "";
                        MapsNacimiento1.style.backgroundColor = colorRojo;
                        MapsSexo1.value = "";
                        break;
                    default:
                        break;
                }
            });
        } catch (error) {} /*cierre CAPTURA DE DATOS MAPS 1*/
        //VINCULO CON JEFE DE HOGAR
        try {
            let Maps1VinculoJefeDeHogar = document.querySelector("#valorControl9915");
            let Maps1Edad = document.querySelector("#valorControl11218");
            let Maps1FechaDeNacimiento = document.querySelector("#valorControl9902");
            let Maps1PrimerNombreACUDIENTE =
                document.querySelector("#valorControl9950");
            let Maps1SegundoNombreACUDIENTE =
                document.querySelector("#valorControl9951");
            let Maps1PrimerApellidoACUDIENTE =
                document.querySelector("#valorControl9952");
            let Maps1SegundoApellidoACUDIENTE =
                document.querySelector("#valorControl9953");
            let Maps1VinculoconelJefedeHogarACUDIENTE =
                document.querySelector("#valorControl9954");
            let Maps1OcupacionACUDIENTE = document.querySelector("#valorControl9955");
            let Maps1LapersonatieneevidenciadeconsumodeSPAACUDIENTE =
                document.querySelector("#valorControl9956");
            let Maps1TelefonoACUDIENTE = document.querySelector("#valorControl9957");

            Maps1FechaDeNacimiento.addEventListener("change", function() {
                if (Maps1Edad.value < 18) {
                    Maps1VinculoJefeDeHogar.disabled = false;
                    Maps1VinculoJefeDeHogar.required = true;

                    Maps1PrimerNombreACUDIENTE.disabled = false;
                    Maps1PrimerNombreACUDIENTE.required = true;
                    Maps1SegundoNombreACUDIENTE.disabled = false;
                    Maps1SegundoNombreACUDIENTE.required = true;
                    Maps1PrimerApellidoACUDIENTE.disabled = false;
                    Maps1PrimerApellidoACUDIENTE.required = true;
                    Maps1SegundoApellidoACUDIENTE.disabled = false;
                    Maps1SegundoApellidoACUDIENTE.required = true;
                    Maps1VinculoconelJefedeHogarACUDIENTE.disabled = false;
                    Maps1VinculoconelJefedeHogarACUDIENTE.required = true;
                    Maps1OcupacionACUDIENTE.disabled = false;
                    Maps1OcupacionACUDIENTE.required = true;
                    Maps1LapersonatieneevidenciadeconsumodeSPAACUDIENTE.disabled = false;
                    Maps1LapersonatieneevidenciadeconsumodeSPAACUDIENTE.required = true;
                    Maps1TelefonoACUDIENTE.disabled = false;
                    Maps1TelefonoACUDIENTE.required = true;
                }
                if (Maps1Edad.value > 17) {
                    Maps1VinculoJefeDeHogar.value = "";
                    Maps1VinculoJefeDeHogar.disabled = true;
                    Maps1VinculoJefeDeHogar.required = false;
                    Maps1PrimerNombreACUDIENTE.value = "";
                    Maps1PrimerNombreACUDIENTE.disabled = true;
                    Maps1PrimerNombreACUDIENTE.required = false;
                    Maps1SegundoNombreACUDIENTE.value = "";
                    Maps1SegundoNombreACUDIENTE.disabled = true;
                    Maps1SegundoNombreACUDIENTE.required = false;
                    Maps1PrimerApellidoACUDIENTE.value = "";
                    Maps1PrimerApellidoACUDIENTE.disabled = true;
                    Maps1PrimerApellidoACUDIENTE.required = false;
                    Maps1SegundoApellidoACUDIENTE.value = "";
                    Maps1SegundoApellidoACUDIENTE.disabled = true;
                    Maps1SegundoApellidoACUDIENTE.required = false;
                    Maps1VinculoconelJefedeHogarACUDIENTE.value = "";
                    Maps1VinculoconelJefedeHogarACUDIENTE.disabled = true;
                    Maps1VinculoconelJefedeHogarACUDIENTE.required = false;
                    Maps1OcupacionACUDIENTE.value = "";
                    Maps1OcupacionACUDIENTE.disabled = true;
                    Maps1OcupacionACUDIENTE.required = false;
                    Maps1LapersonatieneevidenciadeconsumodeSPAACUDIENTE.value = "";
                    Maps1LapersonatieneevidenciadeconsumodeSPAACUDIENTE.disabled = true;
                    Maps1LapersonatieneevidenciadeconsumodeSPAACUDIENTE.required = false;
                    Maps1TelefonoACUDIENTE.value = "";
                    Maps1TelefonoACUDIENTE.disabled = true;
                    Maps1TelefonoACUDIENTE.required = false;
                }
            });
        } catch (error) {}
        //CIERRE VINCULO CON JEFE DE HOGAR
        //HABLA ESPAÑOL Y PUEBLO CONDICIONADO  A ETNIA
        try {
            let Maps1HablaEspanol = document.querySelector("#valorControl11504");
            let Maps1Pueblo = document.querySelector("#valorControl11505");
            let Maps1Etnia = document.querySelector("#valorControl9905");
            Maps1Etnia.addEventListener("change", function() {
                if (Maps1Etnia.value == "79") {
                    Maps1HablaEspanol.required = true;
                    Maps1Pueblo.required = true;
                    Maps1Etnia.required = true;
                    Maps1HablaEspanol.disabled = false;
                    Maps1Pueblo.disabled = false;
                }
                if (Maps1Etnia.value != "79") {
                    Maps1HablaEspanol.required = false;
                    Maps1Pueblo.required = false;
                    Maps1Etnia.required = false;
                    Maps1HablaEspanol.disabled = true;
                    Maps1Pueblo.disabled = true;
                }
            });
        } catch (error) {} //CIERRE HABLA ESPAÑOL Y PUEBLO CONDICIONADO  A ETNIA
        // EJE PRINCIPAL NUMERO
        try {
            let Maps1EjePrincipal = document.querySelector("#valorControl9923");
            let Maps1EjePrincipalNumero = document.querySelector("#valorControl9924");
            let Maps1ManzanaDelCuidado = document.querySelector("#valorControl9947");
            let Maps1Cuadrante1 = document.querySelector("#valorControl9928");
            Maps1EjePrincipal.addEventListener("blur", function() {
                Maps1EjePrincipalNumero.style.backgroundColor = colorBlanco;
                Maps1EjePrincipal.style.backgroundColor = colorBlanco;
            });
            Maps1ManzanaDelCuidado.addEventListener("change", function() {
                switch (true) {
                    case (Maps1EjePrincipal.value == "CL" ||
                        Maps1EjePrincipal.value == "AC" ||
                        Maps1EjePrincipal.value == "DG") &&
                    Maps1EjePrincipalNumero.value > 250 &&
                    Maps1Cuadrante1.value == "":
                        Maps1EjePrincipal.value = "";
                        Maps1EjePrincipalNumero.value = "";
                        Maps1EjePrincipalNumero.style.backgroundColor = colorRojo;
                        Maps1EjePrincipal.style.backgroundColor = colorRojo;
                        Maps1Cuadrante1.value = "";
                        Maps1EjePrincipalNumero.focus();
                        break;
                    case (Maps1EjePrincipal.value == "CL" ||
                        Maps1EjePrincipal.value == "AC" ||
                        Maps1EjePrincipal.value == "DG") &&
                    Maps1EjePrincipalNumero.value > 250 &&
                    Maps1Cuadrante1.value == "SUR":
                        Maps1EjePrincipal.value = "";
                        Maps1EjePrincipalNumero.value = "";
                        Maps1Cuadrante1.value = "";
                        Maps1EjePrincipalNumero.style.backgroundColor = colorRojo;
                        Maps1EjePrincipal.style.backgroundColor = colorRojo;
                        Maps1EjePrincipalNumero.focus();
                        break;
                    case (Maps1EjePrincipal.value == "CL" ||
                        Maps1EjePrincipal.value == "AC" ||
                        Maps1EjePrincipal.value == "DG") &&
                    Maps1Cuadrante1.value == "ESTE":
                        Maps1EjePrincipal.value = "";
                        Maps1EjePrincipalNumero.value = "";
                        Maps1Cuadrante1.value = "";
                        Maps1EjePrincipalNumero.style.backgroundColor = colorRojo;
                        Maps1EjePrincipal.style.backgroundColor = colorRojo;
                        Maps1EjePrincipalNumero.focus();
                        break;
                    case (Maps1EjePrincipal.value == "CL" ||
                        Maps1EjePrincipal.value == "AC" ||
                        Maps1EjePrincipal.value == "DG") &&
                    Maps1EjePrincipalNumero.value < 250 &&
                    Maps1EjePrincipalNumero.value > 140 &&
                    Maps1Cuadrante1.value != "":
                        Maps1EjePrincipal.value = "";
                        Maps1EjePrincipalNumero.value = "";
                        Maps1Cuadrante1.value = "";
                        Maps1EjePrincipalNumero.style.backgroundColor = colorRojo;
                        Maps1EjePrincipal.style.backgroundColor = colorRojo;
                        Maps1EjePrincipalNumero.focus();
                        break;
                    case (Maps1EjePrincipal.value == "CL" ||
                        Maps1EjePrincipal.value == "AC" ||
                        Maps1EjePrincipal.value == "DG") &&
                    Maps1EjePrincipalNumero.value > 140 &&
                    Maps1Cuadrante1.value == "SUR":
                        Maps1EjePrincipal.value = "";
                        Maps1EjePrincipalNumero.value = "";
                        Maps1Cuadrante1.value = "";
                        Maps1EjePrincipalNumero.style.backgroundColor = colorRojo;
                        Maps1EjePrincipal.style.backgroundColor = colorRojo;
                        Maps1EjePrincipalNumero.focus();
                        break;
                    case (Maps1EjePrincipal.value == "CL" ||
                        Maps1EjePrincipal.value == "AC" ||
                        Maps1EjePrincipal.value == "DG") &&
                    Maps1Cuadrante1.value == "ESTE":
                        Maps1EjePrincipal.value = "";
                        Maps1EjePrincipalNumero.value = "";
                        Maps1Cuadrante1.value = "";
                        Maps1EjePrincipalNumero.style.backgroundColor = colorRojo;
                        Maps1EjePrincipal.style.backgroundColor = colorRojo;
                        Maps1EjePrincipalNumero.focus();
                        break;

                    case (Maps1EjePrincipal.value == "KR" ||
                        Maps1EjePrincipal.value == "AR" ||
                        Maps1EjePrincipal.value == "TV") &&
                    Maps1EjePrincipalNumero.value > 153 &&
                    Maps1Cuadrante1.value == "":
                        Maps1EjePrincipal.value = "";
                        Maps1EjePrincipalNumero.value = "";
                        Maps1EjePrincipalNumero.style.backgroundColor = colorRojo;
                        Maps1EjePrincipal.style.backgroundColor = colorRojo;
                        Maps1Cuadrante1.value = "";
                        Maps1EjePrincipalNumero.focus();
                        break;
                    case (Maps1EjePrincipal.value == "KR" ||
                        Maps1EjePrincipal.value == "AR" ||
                        Maps1EjePrincipal.value == "TV") &&
                    Maps1EjePrincipalNumero.value > 153 &&
                    Maps1Cuadrante1.value == "ESTE":
                        Maps1EjePrincipal.value = "";
                        Maps1EjePrincipalNumero.value = "";
                        Maps1Cuadrante1.value = "";
                        Maps1EjePrincipalNumero.style.backgroundColor = colorRojo;
                        Maps1EjePrincipal.style.backgroundColor = colorRojo;
                        Maps1EjePrincipalNumero.focus();
                        break;
                    case (Maps1EjePrincipal.value == "KR" ||
                        Maps1EjePrincipal.value == "AR" ||
                        Maps1EjePrincipal.value == "TV") &&
                    Maps1Cuadrante1.value == "SUR":
                        Maps1EjePrincipal.value = "";
                        Maps1EjePrincipalNumero.value = "";
                        Maps1Cuadrante1.value = "";
                        Maps1EjePrincipalNumero.style.backgroundColor = colorRojo;
                        Maps1EjePrincipal.style.backgroundColor = colorRojo;
                        Maps1EjePrincipalNumero.focus();
                        break;
                    case (Maps1EjePrincipal.value == "KR" ||
                        Maps1EjePrincipal.value == "AR" ||
                        Maps1EjePrincipal.value == "TV") &&
                    Maps1EjePrincipalNumero.value < 153 &&
                    Maps1EjePrincipalNumero.value > 19 &&
                    Maps1Cuadrante1.value != "":
                        Maps1EjePrincipal.value = "";
                        Maps1EjePrincipalNumero.value = "";
                        Maps1Cuadrante1.value = "";
                        Maps1EjePrincipalNumero.style.backgroundColor = colorRojo;
                        Maps1EjePrincipal.style.backgroundColor = colorRojo;
                        Maps1EjePrincipalNumero.focus();
                        break;
                    case (Maps1EjePrincipal.value == "KR" ||
                        Maps1EjePrincipal.value == "AR" ||
                        Maps1EjePrincipal.value == "TV") &&
                    Maps1EjePrincipalNumero.value > 19 &&
                    Maps1Cuadrante1.value == "ESTE":
                        Maps1EjePrincipal.value = "";
                        Maps1EjePrincipalNumero.value = "";
                        Maps1Cuadrante1.value = "";
                        Maps1EjePrincipalNumero.style.backgroundColor = colorRojo;
                        Maps1EjePrincipal.style.backgroundColor = colorRojo;
                        Maps1EjePrincipalNumero.focus();
                        break;
                    case (Maps1EjePrincipal.value == "KR" ||
                        Maps1EjePrincipal.value == "AR" ||
                        Maps1EjePrincipal.value == "TV") &&
                    Maps1Cuadrante1.value == "SUR":
                        Maps1EjePrincipal.value = "";
                        Maps1EjePrincipalNumero.value = "";
                        Maps1Cuadrante1.value = "";
                        Maps1EjePrincipalNumero.style.backgroundColor = colorRojo;
                        Maps1EjePrincipal.style.backgroundColor = colorRojo;
                        Maps1EjePrincipalNumero.focus();
                        break;

                    default:
                        break;
                }
            });
        } catch (error) {}
        // CIERRE EJE PRINCIPAL NUMERO
        // EJE PRINCIPAL LETRA 1
        try {
            let Maps1Letra1EjePrincipal = document.querySelector("#valorControl9925");
            Maps1Letra1EjePrincipal.addEventListener("blur", function() {
                if (Maps1Letra1EjePrincipal.value.length > 1) {
                    Maps1Letra1EjePrincipal.style.backgroundColor = colorRojo;
                    Maps1Letra1EjePrincipal.style.fontWeight = "bold";
                    Maps1Letra1EjePrincipal.style.color = ColorAmarillo;
                }
                if (
                    Maps1Letra1EjePrincipal.value === "" ||
                    Maps1Letra1EjePrincipal.value.length < 2
                ) {
                    Maps1Letra1EjePrincipal.style.backgroundColor = colorBlanco;
                    Maps1Letra1EjePrincipal.style.fontWeight = "normal";
                    Maps1Letra1EjePrincipal.style.color = colorNegro;
                }
            });
        } catch (error) {} // CIERRE EJE PRINCIPAL LETRA 1

        //+++----------+++++++++++++  INTERVENCIONES
        try {
            let CheckBoxEnfermeriaMAPS1 = document.querySelector("#valorControl9968");
            let dx1EnfermeriaMAPS1 = document.querySelector("#valorControl9969");
            let dx2EnfermeriaMAPS1 = document.querySelector("#valorControl9970");
            let dx3EnfermeriaMAPS1 = document.querySelector("#valorControl9971");
            let CheckBoxPsicologiaMAPS1 = document.querySelector("#valorControl9973");
            let dx1PsicologiaMAPS1 = document.querySelector("#valorControl9974");
            let dx2PsicologiaMAPS1 = document.querySelector("#valorControl9975");
            let dx3PsicologiaMAPS1 = document.querySelector("#valorControl9976");
            let Tamizaje_VIH_1_MAPS1 = document.querySelector("#valorControl9977");
            let Tamizaje_VIH_2_MAPS1 = document.querySelector("#valorControl9978");
            let Tamizaje_VIH_3_MAPS1 = document.querySelector("#valorControl9979");
            let Tamizaje_SIFILIS_1_MAPS1 =
                document.querySelector("#valorControl9980");
            let Tamizaje_SIFILIS_2_MAPS1 =
                document.querySelector("#valorControl9981");
            let Tamizaje_Hepatitis_B_1_MAPS1 =
                document.querySelector("#valorControl9982");
            let Tamizaje_Hepatitis_B_2_MAPS1 =
                document.querySelector("#valorControl9983");
            let TamizajeSintmaticoRespiratorioMAPS1 =
                document.querySelector("#valorControl9984");
            let TamizajeSTipoFamiliaMAPS1 =
                document.querySelector("#valorControl9993");

            dx2EnfermeriaMAPS1.disabled = false;
            dx3EnfermeriaMAPS1.disabled = true;
            dx2PsicologiaMAPS1.disabled = true;
            dx3PsicologiaMAPS1.disabled = true;

            //CONDICIONALES CAMPOS enfermeria

            if (CheckBoxEnfermeriaMAPS1.checked) {
                dx1EnfermeriaMAPS1.disabled = false;
            } else {
                dx1EnfermeriaMAPS1.disabled = true;
            }
            CheckBoxEnfermeriaMAPS1.addEventListener("change", function() {
                console.log("dx1EnfermeriaMAPS1");

                if (CheckBoxEnfermeriaMAPS1.checked) {
                    dx1EnfermeriaMAPS1.disabled = false;
                } else {
                    dx1EnfermeriaMAPS1.disabled = true;
                }
            });

            //CONDICIONALES CAMPOS Psicologia

            if (CheckBoxPsicologiaMAPS1.checked) {
                dx1PsicologiaMAPS1.disabled = false;
            } else {
                dx1PsicologiaMAPS1.disabled = true;
            }
            CheckBoxPsicologiaMAPS1.addEventListener("change", function() {
                console.log("dx1PsicologiaMAPS1");

                if (CheckBoxPsicologiaMAPS1.checked) {
                    dx1PsicologiaMAPS1.disabled = false;
                } else {
                    dx1PsicologiaMAPS1.disabled = true;
                }
            });

            //CONDICIONALES CAMPOS VIH

            if (Tamizaje_VIH_1_MAPS1.checked) {
                Tamizaje_VIH_2_MAPS1.required = true;
                Tamizaje_VIH_2_MAPS1.disabled = false;
            } else {
                Tamizaje_VIH_2_MAPS1.required = false;
                Tamizaje_VIH_2_MAPS1.disabled = true;
            }
            if (Tamizaje_VIH_2_MAPS1.value != "Reactivo") {
                Tamizaje_VIH_3_MAPS1.required = false;
                Tamizaje_VIH_3_MAPS1.disabled = true;
            } else {
                Tamizaje_VIH_3_MAPS1.required = true;
                Tamizaje_VIH_3_MAPS1.disabled = false;
            }
            Tamizaje_VIH_1_MAPS1.addEventListener("change", function() {
                console.log("Tamizaje_VIH_1_MAPS1");

                if (Tamizaje_VIH_1_MAPS1.checked) {
                    Tamizaje_VIH_2_MAPS1.required = true;
                    Tamizaje_VIH_2_MAPS1.disabled = false;
                } else {
                    Tamizaje_VIH_2_MAPS1.required = false;
                    Tamizaje_VIH_2_MAPS1.disabled = true;
                }
            });
            Tamizaje_VIH_2_MAPS1.addEventListener("change", function() {
                console.log("Tamizaje_VIH_1_MAPS1");
                if (Tamizaje_VIH_2_MAPS1.value != "Reactivo") {
                    Tamizaje_VIH_3_MAPS1.required = false;
                    Tamizaje_VIH_3_MAPS1.disabled = true;
                } else {
                    Tamizaje_VIH_3_MAPS1.required = true;
                    Tamizaje_VIH_3_MAPS1.disabled = false;
                }
            });

            //CONDICIONALES CAMPOS SIFILIS
            if (Tamizaje_SIFILIS_1_MAPS1.checked) {
                Tamizaje_SIFILIS_2_MAPS1.required = true;
                Tamizaje_SIFILIS_2_MAPS1.disabled = false;
            } else {
                Tamizaje_SIFILIS_2_MAPS1.required = false;
                Tamizaje_SIFILIS_2_MAPS1.disabled = true;
            }
            Tamizaje_SIFILIS_1_MAPS1.addEventListener("change", function() {
                console.log("Tamizaje_SIFILIS_1_MAPS1");

                if (Tamizaje_SIFILIS_1_MAPS1.checked) {
                    Tamizaje_SIFILIS_2_MAPS1.required = true;
                    Tamizaje_SIFILIS_2_MAPS1.disabled = false;
                } else {
                    Tamizaje_SIFILIS_2_MAPS1.required = false;
                    Tamizaje_SIFILIS_2_MAPS1.disabled = true;
                }
            });

            //CONDICIONALES CAMPOS hepatitis B
            if (Tamizaje_Hepatitis_B_1_MAPS1.checked) {
                Tamizaje_Hepatitis_B_2_MAPS1.required = true;
                Tamizaje_Hepatitis_B_2_MAPS1.disabled = false;
            } else {
                Tamizaje_Hepatitis_B_2_MAPS1.required = false;
                Tamizaje_Hepatitis_B_2_MAPS1.disabled = true;
            }
            Tamizaje_Hepatitis_B_1_MAPS1.addEventListener("change", function() {
                console.log("Tamizaje_Hepatitis_B_2_MAPS1");

                if (Tamizaje_Hepatitis_B_1_MAPS1.checked) {
                    Tamizaje_Hepatitis_B_2_MAPS1.required = true;
                    Tamizaje_Hepatitis_B_2_MAPS1.disabled = false;
                } else {
                    Tamizaje_Hepatitis_B_2_MAPS1.required = false;
                    Tamizaje_Hepatitis_B_2_MAPS1.disabled = true;
                }
            });
            //CONDICIONALES CAMPOS SINTOMATICO RESPIRATORIO

            if (CheckBoxEnfermeriaMAPS1.checked || CheckBoxPsicologiaMAPS1.checked) {
                TamizajeSintmaticoRespiratorioMAPS1.required = true;
            } else {
                TamizajeSintmaticoRespiratorioMAPS1.required = false;
            }
            CheckBoxEnfermeriaMAPS1.addEventListener("change", function() {
                console.log("dx1EnfermeriaMAPS1");
                if (
                    CheckBoxEnfermeriaMAPS1.checked ||
                    CheckBoxPsicologiaMAPS1.checked
                ) {
                    TamizajeSintmaticoRespiratorioMAPS1.required = true;
                } else {
                    TamizajeSintmaticoRespiratorioMAPS1.required = false;
                }
            });
            CheckBoxPsicologiaMAPS1.addEventListener("change", function() {
                console.log("dx1EnfermeriaMAPS1");
                if (
                    CheckBoxEnfermeriaMAPS1.checked ||
                    CheckBoxPsicologiaMAPS1.checked
                ) {
                    TamizajeSintmaticoRespiratorioMAPS1.required = true;
                } else {
                    TamizajeSintmaticoRespiratorioMAPS1.required = false;
                }
            });
            //CONDICIONALES CAMPOS TIPO DE FAMILIA

            if (CheckBoxEnfermeriaMAPS1.checked || CheckBoxPsicologiaMAPS1.checked) {
                TamizajeSTipoFamiliaMAPS1.required = true;
            } else {
                TamizajeSTipoFamiliaMAPS1.required = false;
            }
            CheckBoxEnfermeriaMAPS1.addEventListener("change", function() {
                console.log("dx1EnfermeriaMAPS1");
                if (
                    CheckBoxEnfermeriaMAPS1.checked ||
                    CheckBoxPsicologiaMAPS1.checked
                ) {
                    TamizajeSTipoFamiliaMAPS1.required = true;
                } else {
                    TamizajeSTipoFamiliaMAPS1.required = false;
                }
            });
            CheckBoxPsicologiaMAPS1.addEventListener("change", function() {
                console.log("dx1EnfermeriaMAPS1");
                if (
                    CheckBoxEnfermeriaMAPS1.checked ||
                    CheckBoxPsicologiaMAPS1.checked
                ) {
                    TamizajeSTipoFamiliaMAPS1.required = true;
                } else {
                    TamizajeSTipoFamiliaMAPS1.required = false;
                }
            });
        } catch (error) {}

        //+++----------+++++++++++++  CIERRE INTERVENCIONES
    } catch (error) {} /* CIERRE MAPS 1 */

    /* APERTURA MAPS 2 */
    try {
        /*TAMIZAJE - PRUEBA FINDRISC*/

        try {
            let pesoMaps = document.querySelector("#valorControl10050");
            let tallaMaps = document.querySelector("#valorControl10051");
            let imcMaps = document.querySelector("#valorControl10052");
            let escalaIMC = document.querySelector("#valorControl10053");
            let edadMaps2 = document.querySelector("#valorControl10047");
            let perimetroCinturaMaps = document.querySelector("#valorControl10055");
            let escalaHombres = document.querySelector("#valorControl10056");
            let escalaMujeres = document.querySelector("#valorControl10057");
            const escalaBackgrounReset = escalaIMC.style.backgroundColor;
            imcMaps.readOnly = true; //IMc solo lectura, no deja modigicar
            // edadMaps2.addEventListener("mousedown", function (event) {
            //   event.preventDefault(); //desactiva la lista por maouse
            //   this.blur();
            // });
            // edadMaps2.addEventListener("keydown", function (event) {
            //   event.preventDefault(); //desactiva la lista por teclado
            // });
            escalaIMC.addEventListener("mousedown", function(event) {
                event.preventDefault(); //desactiva la lista por maouse
                this.blur();
            });

            escalaIMC.addEventListener("keydown", function(event) {
                event.preventDefault(); //desactiva la lista por teclado
            });
            escalaHombres.addEventListener("mousedown", function(event) {
                event.preventDefault(); //desactiva la lista por maouse
                this.blur();
            });
            escalaHombres.addEventListener("keydown", function(event) {
                event.preventDefault(); //desactiva la lista por teclado
            });
            escalaMujeres.addEventListener("mousedown", function(event) {
                event.preventDefault(); //desactiva la lista por maouse
                this.blur();
            });
            escalaMujeres.addEventListener("keydown", function(event) {
                event.preventDefault(); //desactiva la lista por teclado
            });
            const imcMapsReset = imcMaps.style.backgroundColor;
            /*Peso  */
            try {
                pesoMaps.addEventListener("input", function() {
                    //VALIDA QUE LA ESCALA SEA ACORDE A LA EDAD
                    try {
                        let edadMaps1 = sessionStorage.getItem("capturaEdadMaps");
                        //tallaMaps.value = edadMaps1;
                        if (edadMaps1 < 45) {
                            //Menos de 45 años
                            edadMaps2.value = "Menos de 45 años";
                            edadMaps2.style.backgroundColor = colorVerde;
                        } else if (edadMaps1 >= 45 && edadMaps1 <= 54) {
                            //45-54 años
                            edadMaps2.value = "45-54 años";
                            edadMaps2.style.backgroundColor = colorVerde;
                        } else if (edadMaps1 >= 55 && edadMaps1 <= 64) {
                            //55-64 años
                            edadMaps2.value = "55-64 años";
                            edadMaps2.style.backgroundColor = colorVerde;
                        } else if (edadMaps1 > 64) {
                            //Más de 64 años
                            edadMaps2.value = "Más de 64 años";
                            edadMaps2.style.backgroundColor = colorVerde;
                        }
                    } catch (error) {}
                    if (
                        (tallaMaps.value != "" && pesoMaps.value === "") ||
                        (tallaMaps.value === "" && pesoMaps.value != "")
                    ) {
                        pesoMaps.required = true;
                        tallaMaps.required = true;
                        edadMaps2.required = true;
                    } else {
                        pesoMaps.required = false;
                        tallaMaps.required = false;
                        edadMaps2.required = false;
                    }
                    //Calculo de IMC
                    if (pesoMaps.value != "") {
                        if (tallaMaps.value != "") {
                            let tallaMapsMetros = tallaMaps.value / 100;
                            imcMaps.style.backgroundColor = colorVerde;
                            let imcCalculo =
                                pesoMaps.value / (tallaMapsMetros * tallaMapsMetros);
                            imcMaps.value = imcCalculo.toFixed(2);
                            switch (true) {
                                case imcCalculo < 25:
                                    escalaIMC.value = "< 25 kg/m²";
                                    escalaIMC.style.backgroundColor = colorVerde;
                                    break;
                                case imcCalculo >= 25 && imcMaps.value <= 30:
                                    escalaIMC.value = "Entre 25-30 kg/m²";
                                    escalaIMC.style.backgroundColor = colorVerde;
                                    break;
                                case imcCalculo > 30:
                                    escalaIMC.value = "> 30 kg/ m²";
                                    escalaIMC.style.backgroundColor = colorVerde;
                                    break;
                                default:
                                    escalaIMC.value = "";
                                    escalaIMC.style.backgroundColor = escalaBackgrounReset;
                                    break;
                            }
                        }
                    } else {
                        escalaIMC.value = "";
                        escalaIMC.style.backgroundColor = escalaBackgrounReset;
                        imcMaps.value = "";
                        imcMaps.style.backgroundColor = escalaBackgrounReset;
                        edadMaps2.value = "";
                        edadMaps2.style.backgroundColor = escalaBackgrounReset;
                    }
                });
            } catch (error) {} /*Cierre Peso  */

            // pesoMaps.addEventListener("change", function () {
            //   if (pesoMaps.value < 20 || pesoMaps.value > 180) {
            //     pesoMaps.value = "";
            //     pesoMaps.required = true;
            //   }
            // });
            /*TALLA */
            try {
                tallaMaps.addEventListener("input", function() {
                    //VALIDA QUE LA ESCALA SEA ACORDE A LA EDAD
                    if (tallaMaps.value < 70 && pesoMaps.value > 220) {
                        tallaMaps.value = "";
                    }
                    try {
                        let edadMaps1 = sessionStorage.getItem("capturaEdadMaps");
                        //tallaMaps.value = edadMaps1;
                        if (edadMaps1 < 45) {
                            //Menos de 45 años
                            edadMaps2.value = "Menos de 45 años";
                            edadMaps2.style.backgroundColor = colorVerde;
                        } else if (edadMaps1 >= 45 && edadMaps1 <= 54) {
                            //45-54 años
                            edadMaps2.value = "45-54 años";
                            edadMaps2.style.backgroundColor = colorVerde;
                        } else if (edadMaps1 >= 55 && edadMaps1 <= 64) {
                            //55-64 años
                            edadMaps2.value = "55-64 años";
                            edadMaps2.style.backgroundColor = colorVerde;
                        } else if (edadMaps1 > 64) {
                            //Más de 64 años
                            edadMaps2.value = "Más de 64 años";
                            edadMaps2.style.backgroundColor = colorVerde;
                        }
                    } catch (error) {}
                    if (
                        (tallaMaps.value != "" && pesoMaps.value === "") ||
                        (tallaMaps.value === "" && pesoMaps.value != "")
                    ) {
                        pesoMaps.required = true;
                        tallaMaps.required = true;
                        edadMaps2.required = true;
                    } else {
                        pesoMaps.required = false;
                        tallaMaps.required = false;
                        edadMaps2.required = false;
                    }
                    //Calculo de IMC
                    if (tallaMaps.value != "") {
                        if (pesoMaps.value != "") {
                            let tallaMapsMetros = tallaMaps.value / 100;
                            imcMaps.style.backgroundColor = colorVerde;
                            let imcCalculo =
                                pesoMaps.value / (tallaMapsMetros * tallaMapsMetros);
                            imcMaps.value = imcCalculo.toFixed(0);
                            switch (true) {
                                case imcCalculo < 25:
                                    escalaIMC.value = "< 25 kg/m²";
                                    escalaIMC.style.backgroundColor = colorVerde;
                                    break;
                                case imcCalculo >= 25 && imcMaps.value <= 30:
                                    escalaIMC.value = "Entre 25-30 kg/m²";
                                    escalaIMC.style.backgroundColor = colorVerde;
                                    break;
                                case imcCalculo > 30:
                                    escalaIMC.value = "> 30 kg/ m²";
                                    escalaIMC.style.backgroundColor = colorVerde;
                                    break;
                                default:
                                    escalaIMC.value = "";
                                    escalaIMC.style.backgroundColor = escalaBackgrounReset;
                                    break;
                            }
                        }
                    } else {
                        escalaIMC.value = "";
                        escalaIMC.style.backgroundColor = escalaBackgrounReset;
                        imcMaps.value = "";
                        imcMaps.style.backgroundColor = escalaBackgrounReset;
                        edadMaps2.value = "";
                        edadMaps2.style.backgroundColor = escalaBackgrounReset;
                    } //escala IMC   "< 25 kg/m²" "Entre 25-30 kg/m²""> 30 kg/ m²"
                });
            } catch (error) {} /*CIERRE TALLA */
            /*IMC */

            //  ESCALA HOMBRES Y MUJERES
            try {
                perimetroCinturaMaps.addEventListener("input", function() {
                    let capturaSexoMaps2 = sessionStorage.getItem("capturaSexoMaps");
                    if (
                        capturaSexoMaps2 == 67 &&
                        perimetroCinturaMaps.value > 5 &&
                        perimetroCinturaMaps.value < 94
                    ) {
                        escalaHombres.value = "< 94 cm";
                        escalaMujeres.value = "";
                        escalaHombres.style.backgroundColor = colorVerde;
                    } else if (
                        capturaSexoMaps2 == 67 &&
                        perimetroCinturaMaps.value >= 94
                    ) {
                        escalaHombres.value = "≥ 94 cm";
                        escalaMujeres.value = "";
                        escalaHombres.style.backgroundColor = colorVerde;
                    } else if (
                        capturaSexoMaps2 == 67 &&
                        perimetroCinturaMaps.value == ""
                    ) {
                        escalaHombres.value = "";
                        escalaMujeres.value = "";
                        escalaHombres.style.backgroundColor = escalaBackgrounReset;
                    } else if (
                        capturaSexoMaps2 == 68 &&
                        perimetroCinturaMaps.value > 5 &&
                        perimetroCinturaMaps.value < 90
                    ) {
                        escalaMujeres.value = "< 90 cm";
                        escalaHombres.value = "";
                        escalaMujeres.style.backgroundColor = colorVerde;
                    } else if (
                        capturaSexoMaps2 == 68 &&
                        perimetroCinturaMaps.value >= 90
                    ) {
                        escalaMujeres.value = "≥ 90 cm";
                        escalaHombres.value = "";
                        escalaMujeres.style.backgroundColor = colorVerde;
                    } else if (
                        capturaSexoMaps2 == 68 &&
                        perimetroCinturaMaps.value == ""
                    ) {
                        escalaMujeres.value = "";
                        escalaHombres.value = "";
                        escalaMujeres.style.backgroundColor = escalaBackgrounReset;
                    }
                });
            } catch (error) {} //  CIERRE ESCALA HOMBRES Y MUJERES
        } catch (error) {} /*CIERRE TAMIZAJE - PRUEBA FINDRISC*/
        //CIERRE TABLA DE PREDICCIÓN DEL RIESGO AMR
        try {
            let personasDiabetesAMR = document.querySelector("#valorControl10068");
            let sexoAMR = document.querySelector("#valorControl10069");
            let FumadorAMR = document.querySelector("#valorControl10070");
            let edadAMR = document.querySelector("#valorControl10071");
            let pasAMR = document.querySelector("#valorControl10072");
            let puntajeAMR = document.querySelector("#valorControl10073");
            personasDiabetesAMR.addEventListener("input", function() {});
            sexoAMR.addEventListener("input", function() {});
            FumadorAMR.addEventListener("input", function() {});
            edadAMR.addEventListener("input", function() {});
            pasAMR.addEventListener("input", function() {});
            /*
            puntajeAMR.addEventListener("mousedown", function (event) {
              event.preventDefault(); //desactiva la lista por maouse
              this.blur();
            });
            puntajeAMR.addEventListener("keydown", function (event) {
              event.preventDefault(); //desactiva la lista por teclado
            });
            */
        } catch (error) {} //CIERRE TABLA DE PREDICCIÓN DEL RIESGO AMR
    } catch (error) {} /* CIERRE MAPS 2 */
    /* APERTURA MAPS 2 */
    try {
        /*APERTURA ASSIST*/
        try {
            let Tabaco_1_Maps_3 = document.querySelector("#valorControl10080");
            let BebidasAlcoholicas_1_Maps_3 =
                document.querySelector("#valorControl10081");
            let Cannabis_1_Maps_3 = document.querySelector("#valorControl10082");
            let Cocaina_1_Maps_3 = document.querySelector("#valorControl10083");
            let Anfetaminas_1_Maps_3 = document.querySelector("#valorControl10084");
            let Inhalantes_1_Maps_3 = document.querySelector("#valorControl10085");
            let Tranquilizantes_1_Maps_3 =
                document.querySelector("#valorControl10086");
            let Alucinogenos_1_Maps_3 = document.querySelector("#valorControl10087");
            let Opiaceos_1_Maps_3 = document.querySelector("#valorControl10088");
            let Otros_1_Maps_3 = document.querySelector("#valorControl10089");

            let Tabaco_2_Maps_3 = document.querySelector("#valorControl10091");
            let BebidasAlcoholicas_2_Maps_3 =
                document.querySelector("#valorControl10092");
            let Cannabis_2_Maps_3 = document.querySelector("#valorControl10093");
            let Cocaina_2_Maps_3 = document.querySelector("#valorControl10094");
            let Anfetaminas_2_Maps_3 = document.querySelector("#valorControl10095");
            let Inhalantes_2_Maps_3 = document.querySelector("#valorControl10096");
            let Tranquilizantes_2_Maps_3 =
                document.querySelector("#valorControl10097");
            let Alucinogenos_2_Maps_3 = document.querySelector("#valorControl10098");
            let Opiaceos_2_Maps_3 = document.querySelector("#valorControl10099");
            let Otros_2_Maps_3 = document.querySelector("#valorControl10100");

            //  1 -A lo largo de su vida, ¿cuál de las siguientes sustancias ha consumido alguna vez? (SOLO PARA USOS NO-MÉDICOS)   [?]

            if (
                Tabaco_1_Maps_3.value != "" ||
                BebidasAlcoholicas_1_Maps_3.value != "" ||
                Cannabis_1_Maps_3.value != "" ||
                Cocaina_1_Maps_3.value != "" ||
                Anfetaminas_1_Maps_3.value != "" ||
                Inhalantes_1_Maps_3.value != "" ||
                Tranquilizantes_1_Maps_3.value != "" ||
                Alucinogenos_1_Maps_3.value != "" ||
                Opiaceos_1_Maps_3.value != "" ||
                Otros_1_Maps_3.value != ""
            ) {
                Tabaco_1_Maps_3.required = true;
                BebidasAlcoholicas_1_Maps_3.required = true;
                Cannabis_1_Maps_3.required = true;
                Cocaina_1_Maps_3.required = true;
                Anfetaminas_1_Maps_3.required = true;
                Inhalantes_1_Maps_3.required = true;
                Tranquilizantes_1_Maps_3.required = true;
                Alucinogenos_1_Maps_3.required = true;
                Opiaceos_1_Maps_3.required = true;
                Otros_1_Maps_3.required = true;
            } else {
                Tabaco_1_Maps_3.required = false;
                BebidasAlcoholicas_1_Maps_3.required = false;
                Cannabis_1_Maps_3.required = false;
                Cocaina_1_Maps_3.required = false;
                Anfetaminas_1_Maps_3.required = false;
                Inhalantes_1_Maps_3.required = false;
                Tranquilizantes_1_Maps_3.required = false;
                Alucinogenos_1_Maps_3.required = false;
                Opiaceos_1_Maps_3.required = false;
                Otros_1_Maps_3.required = false;
            }

            if (Tabaco_1_Maps_3.value == "3 SI") {
                Tabaco_2_Maps_3.required = true;
                Tabaco_2_Maps_3.disabled = false;
            } else {
                Tabaco_2_Maps_3.required = false;
                Tabaco_2_Maps_3.disabled = true;
            }
            if (BebidasAlcoholicas_1_Maps_3.value == "3 SI") {
                BebidasAlcoholicas_2_Maps_3.required = true;
                BebidasAlcoholicas_2_Maps_3.disabled = false;
            } else {
                BebidasAlcoholicas_2_Maps_3.required = false;
                BebidasAlcoholicas_2_Maps_3.disabled = true;
            }
            if (Cannabis_1_Maps_3.value == "3 SI") {
                Cannabis_2_Maps_3.required = true;
                Cannabis_2_Maps_3.disabled = false;
            } else {
                Cannabis_2_Maps_3.required = false;
                Cannabis_2_Maps_3.disabled = true;
            }
            if (Cocaina_1_Maps_3.value == "3 SI") {
                Cocaina_2_Maps_3.required = true;
                Cocaina_2_Maps_3.disabled = false;
            } else {
                Cocaina_2_Maps_3.required = false;
                Cocaina_2_Maps_3.disabled = true;
            }
            if (Anfetaminas_1_Maps_3.value == "3 SI") {
                Anfetaminas_2_Maps_3.required = true;
                Anfetaminas_2_Maps_3.disabled = false;
            } else {
                Anfetaminas_2_Maps_3.required = false;
                Anfetaminas_2_Maps_3.disabled = true;
            }
            if (Inhalantes_1_Maps_3.value == "3 SI") {
                Inhalantes_2_Maps_3.required = true;
                Inhalantes_2_Maps_3.disabled = false;
            } else {
                Inhalantes_2_Maps_3.required = false;
                Inhalantes_2_Maps_3.disabled = true;
            }
            if (Tranquilizantes_1_Maps_3.value == "3 SI") {
                Tranquilizantes_2_Maps_3.required = true;
                Tranquilizantes_2_Maps_3.disabled = false;
            } else {
                Tranquilizantes_2_Maps_3.required = false;
                Tranquilizantes_2_Maps_3.disabled = true;
            }
            if (Alucinogenos_1_Maps_3.value == "3 SI") {
                Alucinogenos_2_Maps_3.required = true;
                Alucinogenos_2_Maps_3.disabled = false;
            } else {
                Alucinogenos_2_Maps_3.required = false;
                Alucinogenos_2_Maps_3.disabled = true;
            }
            if (Opiaceos_1_Maps_3.value == "3 SI") {
                Opiaceos_2_Maps_3.required = true;
                Opiaceos_2_Maps_3.disabled = false;
            } else {
                Opiaceos_2_Maps_3.required = false;
                Opiaceos_2_Maps_3.disabled = true;
            }
            if (Otros_1_Maps_3.value == "3 SI") {
                Otros_2_Maps_3.required = true;
                Otros_2_Maps_3.disabled = false;
            } else {
                Otros_2_Maps_3.required = false;
                Otros_2_Maps_3.disabled = true;
            }

            // Tabaco

            Tabaco_1_Maps_3.addEventListener("change", function() {
                if (
                    Tabaco_1_Maps_3.value != "" ||
                    BebidasAlcoholicas_1_Maps_3.value != "" ||
                    Cannabis_1_Maps_3.value != "" ||
                    Cocaina_1_Maps_3.value != "" ||
                    Anfetaminas_1_Maps_3.value != "" ||
                    Inhalantes_1_Maps_3.value != "" ||
                    Tranquilizantes_1_Maps_3.value != "" ||
                    Alucinogenos_1_Maps_3.value != "" ||
                    Opiaceos_1_Maps_3.value != "" ||
                    Otros_1_Maps_3.value != ""
                ) {
                    Tabaco_1_Maps_3.required = true;
                    BebidasAlcoholicas_1_Maps_3.required = true;
                    Cannabis_1_Maps_3.required = true;
                    Cocaina_1_Maps_3.required = true;
                    Anfetaminas_1_Maps_3.required = true;
                    Inhalantes_1_Maps_3.required = true;
                    Tranquilizantes_1_Maps_3.required = true;
                    Alucinogenos_1_Maps_3.required = true;
                    Opiaceos_1_Maps_3.required = true;
                    Otros_1_Maps_3.required = true;
                } else {
                    Tabaco_1_Maps_3.required = false;
                    BebidasAlcoholicas_1_Maps_3.required = false;
                    Cannabis_1_Maps_3.required = false;
                    Cocaina_1_Maps_3.required = false;
                    Anfetaminas_1_Maps_3.required = false;
                    Inhalantes_1_Maps_3.required = false;
                    Tranquilizantes_1_Maps_3.required = false;
                    Alucinogenos_1_Maps_3.required = false;
                    Opiaceos_1_Maps_3.required = false;
                    Otros_1_Maps_3.required = false;
                }
                if (Tabaco_1_Maps_3.value == "3 SI") {
                    Tabaco_2_Maps_3.required = true;
                    Tabaco_2_Maps_3.disabled = false;
                } else {
                    Tabaco_2_Maps_3.required = false;
                    Tabaco_2_Maps_3.disabled = true;
                }
            });

            //Bebidas alcohólicas (.)

            BebidasAlcoholicas_1_Maps_3.addEventListener("change", function() {
                if (
                    Tabaco_1_Maps_3.value != "" ||
                    BebidasAlcoholicas_1_Maps_3.value != "" ||
                    Cannabis_1_Maps_3.value != "" ||
                    Cocaina_1_Maps_3.value != "" ||
                    Anfetaminas_1_Maps_3.value != "" ||
                    Inhalantes_1_Maps_3.value != "" ||
                    Tranquilizantes_1_Maps_3.value != "" ||
                    Alucinogenos_1_Maps_3.value != "" ||
                    Opiaceos_1_Maps_3.value != "" ||
                    Otros_1_Maps_3.value != ""
                ) {
                    Tabaco_1_Maps_3.required = true;
                    BebidasAlcoholicas_1_Maps_3.required = true;
                    Cannabis_1_Maps_3.required = true;
                    Cocaina_1_Maps_3.required = true;
                    Anfetaminas_1_Maps_3.required = true;
                    Inhalantes_1_Maps_3.required = true;
                    Tranquilizantes_1_Maps_3.required = true;
                    Alucinogenos_1_Maps_3.required = true;
                    Opiaceos_1_Maps_3.required = true;
                    Otros_1_Maps_3.required = true;
                } else {
                    Tabaco_1_Maps_3.required = false;
                    BebidasAlcoholicas_1_Maps_3.required = false;
                    Cannabis_1_Maps_3.required = false;
                    Cocaina_1_Maps_3.required = false;
                    Anfetaminas_1_Maps_3.required = false;
                    Inhalantes_1_Maps_3.required = false;
                    Tranquilizantes_1_Maps_3.required = false;
                    Alucinogenos_1_Maps_3.required = false;
                    Opiaceos_1_Maps_3.required = false;
                    Otros_1_Maps_3.required = false;
                }
                if (BebidasAlcoholicas_1_Maps_3.value == "3 SI") {
                    BebidasAlcoholicas_2_Maps_3.required = true;
                    BebidasAlcoholicas_2_Maps_3.disabled = false;
                } else {
                    BebidasAlcoholicas_2_Maps_3.required = false;
                    BebidasAlcoholicas_2_Maps_3.disabled = true;
                }
            });

            //Cannabis

            Cannabis_1_Maps_3.addEventListener("change", function() {
                if (
                    Tabaco_1_Maps_3.value != "" ||
                    BebidasAlcoholicas_1_Maps_3.value != "" ||
                    Cannabis_1_Maps_3.value != "" ||
                    Cocaina_1_Maps_3.value != "" ||
                    Anfetaminas_1_Maps_3.value != "" ||
                    Inhalantes_1_Maps_3.value != "" ||
                    Tranquilizantes_1_Maps_3.value != "" ||
                    Alucinogenos_1_Maps_3.value != "" ||
                    Opiaceos_1_Maps_3.value != "" ||
                    Otros_1_Maps_3.value != ""
                ) {
                    Tabaco_1_Maps_3.required = true;
                    BebidasAlcoholicas_1_Maps_3.required = true;
                    Cannabis_1_Maps_3.required = true;
                    Cocaina_1_Maps_3.required = true;
                    Anfetaminas_1_Maps_3.required = true;
                    Inhalantes_1_Maps_3.required = true;
                    Tranquilizantes_1_Maps_3.required = true;
                    Alucinogenos_1_Maps_3.required = true;
                    Opiaceos_1_Maps_3.required = true;
                    Otros_1_Maps_3.required = true;
                } else {
                    Tabaco_1_Maps_3.required = false;
                    BebidasAlcoholicas_1_Maps_3.required = false;
                    Cannabis_1_Maps_3.required = false;
                    Cocaina_1_Maps_3.required = false;
                    Anfetaminas_1_Maps_3.required = false;
                    Inhalantes_1_Maps_3.required = false;
                    Tranquilizantes_1_Maps_3.required = false;
                    Alucinogenos_1_Maps_3.required = false;
                    Opiaceos_1_Maps_3.required = false;
                    Otros_1_Maps_3.required = false;
                }
                if (Cannabis_1_Maps_3.value == "3 SI") {
                    Cannabis_2_Maps_3.required = true;
                    Cannabis_2_Maps_3.disabled = false;
                } else {
                    Cannabis_2_Maps_3.required = false;
                    Cannabis_2_Maps_3.disabled = true;
                }
            });

            //Cocaína

            Cocaina_1_Maps_3.addEventListener("change", function() {
                if (
                    Tabaco_1_Maps_3.value != "" ||
                    BebidasAlcoholicas_1_Maps_3.value != "" ||
                    Cannabis_1_Maps_3.value != "" ||
                    Cocaina_1_Maps_3.value != "" ||
                    Anfetaminas_1_Maps_3.value != "" ||
                    Inhalantes_1_Maps_3.value != "" ||
                    Tranquilizantes_1_Maps_3.value != "" ||
                    Alucinogenos_1_Maps_3.value != "" ||
                    Opiaceos_1_Maps_3.value != "" ||
                    Otros_1_Maps_3.value != ""
                ) {
                    Tabaco_1_Maps_3.required = true;
                    BebidasAlcoholicas_1_Maps_3.required = true;
                    Cannabis_1_Maps_3.required = true;
                    Cocaina_1_Maps_3.required = true;
                    Anfetaminas_1_Maps_3.required = true;
                    Inhalantes_1_Maps_3.required = true;
                    Tranquilizantes_1_Maps_3.required = true;
                    Alucinogenos_1_Maps_3.required = true;
                    Opiaceos_1_Maps_3.required = true;
                    Otros_1_Maps_3.required = true;
                } else {
                    Tabaco_1_Maps_3.required = false;
                    BebidasAlcoholicas_1_Maps_3.required = false;
                    Cannabis_1_Maps_3.required = false;
                    Cocaina_1_Maps_3.required = false;
                    Anfetaminas_1_Maps_3.required = false;
                    Inhalantes_1_Maps_3.required = false;
                    Tranquilizantes_1_Maps_3.required = false;
                    Alucinogenos_1_Maps_3.required = false;
                    Opiaceos_1_Maps_3.required = false;
                    Otros_1_Maps_3.required = false;
                }
                if (Cocaina_1_Maps_3.value == "3 SI") {
                    Cocaina_2_Maps_3.required = true;
                    Cocaina_2_Maps_3.disabled = false;
                } else {
                    Cocaina_2_Maps_3.required = false;
                    Cocaina_2_Maps_3.disabled = true;
                }
            });

            //Anfetaminas u otro tipo de estimulantes (.)

            Anfetaminas_1_Maps_3.addEventListener("change", function() {
                if (
                    Tabaco_1_Maps_3.value != "" ||
                    BebidasAlcoholicas_1_Maps_3.value != "" ||
                    Cannabis_1_Maps_3.value != "" ||
                    Cocaina_1_Maps_3.value != "" ||
                    Anfetaminas_1_Maps_3.value != "" ||
                    Inhalantes_1_Maps_3.value != "" ||
                    Tranquilizantes_1_Maps_3.value != "" ||
                    Alucinogenos_1_Maps_3.value != "" ||
                    Opiaceos_1_Maps_3.value != "" ||
                    Otros_1_Maps_3.value != ""
                ) {
                    Tabaco_1_Maps_3.required = true;
                    BebidasAlcoholicas_1_Maps_3.required = true;
                    Cannabis_1_Maps_3.required = true;
                    Cocaina_1_Maps_3.required = true;
                    Anfetaminas_1_Maps_3.required = true;
                    Inhalantes_1_Maps_3.required = true;
                    Tranquilizantes_1_Maps_3.required = true;
                    Alucinogenos_1_Maps_3.required = true;
                    Opiaceos_1_Maps_3.required = true;
                    Otros_1_Maps_3.required = true;
                } else {
                    Tabaco_1_Maps_3.required = false;
                    BebidasAlcoholicas_1_Maps_3.required = false;
                    Cannabis_1_Maps_3.required = false;
                    Cocaina_1_Maps_3.required = false;
                    Anfetaminas_1_Maps_3.required = false;
                    Inhalantes_1_Maps_3.required = false;
                    Tranquilizantes_1_Maps_3.required = false;
                    Alucinogenos_1_Maps_3.required = false;
                    Opiaceos_1_Maps_3.required = false;
                    Otros_1_Maps_3.required = false;
                }
                if (Anfetaminas_1_Maps_3.value == "3 SI") {
                    Anfetaminas_2_Maps_3.required = true;
                    Anfetaminas_2_Maps_3.disabled = false;
                } else {
                    Anfetaminas_2_Maps_3.required = false;
                    Anfetaminas_2_Maps_3.disabled = true;
                }
            });

            //Inhalantes

            Inhalantes_1_Maps_3.addEventListener("change", function() {
                if (
                    Tabaco_1_Maps_3.value != "" ||
                    BebidasAlcoholicas_1_Maps_3.value != "" ||
                    Cannabis_1_Maps_3.value != "" ||
                    Cocaina_1_Maps_3.value != "" ||
                    Anfetaminas_1_Maps_3.value != "" ||
                    Inhalantes_1_Maps_3.value != "" ||
                    Tranquilizantes_1_Maps_3.value != "" ||
                    Alucinogenos_1_Maps_3.value != "" ||
                    Opiaceos_1_Maps_3.value != "" ||
                    Otros_1_Maps_3.value != ""
                ) {
                    Tabaco_1_Maps_3.required = true;
                    BebidasAlcoholicas_1_Maps_3.required = true;
                    Cannabis_1_Maps_3.required = true;
                    Cocaina_1_Maps_3.required = true;
                    Anfetaminas_1_Maps_3.required = true;
                    Inhalantes_1_Maps_3.required = true;
                    Tranquilizantes_1_Maps_3.required = true;
                    Alucinogenos_1_Maps_3.required = true;
                    Opiaceos_1_Maps_3.required = true;
                    Otros_1_Maps_3.required = true;
                } else {
                    Tabaco_1_Maps_3.required = false;
                    BebidasAlcoholicas_1_Maps_3.required = false;
                    Cannabis_1_Maps_3.required = false;
                    Cocaina_1_Maps_3.required = false;
                    Anfetaminas_1_Maps_3.required = false;
                    Inhalantes_1_Maps_3.required = false;
                    Tranquilizantes_1_Maps_3.required = false;
                    Alucinogenos_1_Maps_3.required = false;
                    Opiaceos_1_Maps_3.required = false;
                    Otros_1_Maps_3.required = false;
                }
                if (Inhalantes_1_Maps_3.value == "3 SI") {
                    Inhalantes_2_Maps_3.required = true;
                    Inhalantes_2_Maps_3.disabled = false;
                } else {
                    Inhalantes_2_Maps_3.required = false;
                    Inhalantes_2_Maps_3.disabled = true;
                }
            });

            //Tranquilizantes o pastillas para dormir (.)

            Tranquilizantes_1_Maps_3.addEventListener("change", function() {
                if (
                    Tabaco_1_Maps_3.value != "" ||
                    BebidasAlcoholicas_1_Maps_3.value != "" ||
                    Cannabis_1_Maps_3.value != "" ||
                    Cocaina_1_Maps_3.value != "" ||
                    Anfetaminas_1_Maps_3.value != "" ||
                    Inhalantes_1_Maps_3.value != "" ||
                    Tranquilizantes_1_Maps_3.value != "" ||
                    Alucinogenos_1_Maps_3.value != "" ||
                    Opiaceos_1_Maps_3.value != "" ||
                    Otros_1_Maps_3.value != ""
                ) {
                    Tabaco_1_Maps_3.required = true;
                    BebidasAlcoholicas_1_Maps_3.required = true;
                    Cannabis_1_Maps_3.required = true;
                    Cocaina_1_Maps_3.required = true;
                    Anfetaminas_1_Maps_3.required = true;
                    Inhalantes_1_Maps_3.required = true;
                    Tranquilizantes_1_Maps_3.required = true;
                    Alucinogenos_1_Maps_3.required = true;
                    Opiaceos_1_Maps_3.required = true;
                    Otros_1_Maps_3.required = true;
                } else {
                    Tabaco_1_Maps_3.required = false;
                    BebidasAlcoholicas_1_Maps_3.required = false;
                    Cannabis_1_Maps_3.required = false;
                    Cocaina_1_Maps_3.required = false;
                    Anfetaminas_1_Maps_3.required = false;
                    Inhalantes_1_Maps_3.required = false;
                    Tranquilizantes_1_Maps_3.required = false;
                    Alucinogenos_1_Maps_3.required = false;
                    Opiaceos_1_Maps_3.required = false;
                    Otros_1_Maps_3.required = false;
                }
                if (Tranquilizantes_1_Maps_3.value == "3 SI") {
                    Tranquilizantes_2_Maps_3.required = true;
                    Tranquilizantes_2_Maps_3.disabled = false;
                } else {
                    Tranquilizantes_2_Maps_3.required = false;
                    Tranquilizantes_2_Maps_3.disabled = true;
                }
            });

            //Alucinógenos

            Alucinogenos_1_Maps_3.addEventListener("change", function() {
                if (
                    Tabaco_1_Maps_3.value != "" ||
                    BebidasAlcoholicas_1_Maps_3.value != "" ||
                    Cannabis_1_Maps_3.value != "" ||
                    Cocaina_1_Maps_3.value != "" ||
                    Anfetaminas_1_Maps_3.value != "" ||
                    Inhalantes_1_Maps_3.value != "" ||
                    Tranquilizantes_1_Maps_3.value != "" ||
                    Alucinogenos_1_Maps_3.value != "" ||
                    Opiaceos_1_Maps_3.value != "" ||
                    Otros_1_Maps_3.value != ""
                ) {
                    Tabaco_1_Maps_3.required = true;
                    BebidasAlcoholicas_1_Maps_3.required = true;
                    Cannabis_1_Maps_3.required = true;
                    Cocaina_1_Maps_3.required = true;
                    Anfetaminas_1_Maps_3.required = true;
                    Inhalantes_1_Maps_3.required = true;
                    Tranquilizantes_1_Maps_3.required = true;
                    Alucinogenos_1_Maps_3.required = true;
                    Opiaceos_1_Maps_3.required = true;
                    Otros_1_Maps_3.required = true;
                } else {
                    Tabaco_1_Maps_3.required = false;
                    BebidasAlcoholicas_1_Maps_3.required = false;
                    Cannabis_1_Maps_3.required = false;
                    Cocaina_1_Maps_3.required = false;
                    Anfetaminas_1_Maps_3.required = false;
                    Inhalantes_1_Maps_3.required = false;
                    Tranquilizantes_1_Maps_3.required = false;
                    Alucinogenos_1_Maps_3.required = false;
                    Opiaceos_1_Maps_3.required = false;
                    Otros_1_Maps_3.required = false;
                }
                if (Alucinogenos_1_Maps_3.value == "3 SI") {
                    Alucinogenos_2_Maps_3.required = true;
                    Alucinogenos_2_Maps_3.disabled = false;
                } else {
                    Alucinogenos_2_Maps_3.required = false;
                    Alucinogenos_2_Maps_3.disabled = true;
                }
            });

            //Opiáceos

            Opiaceos_1_Maps_3.addEventListener("change", function() {
                if (
                    Tabaco_1_Maps_3.value != "" ||
                    BebidasAlcoholicas_1_Maps_3.value != "" ||
                    Cannabis_1_Maps_3.value != "" ||
                    Cocaina_1_Maps_3.value != "" ||
                    Anfetaminas_1_Maps_3.value != "" ||
                    Inhalantes_1_Maps_3.value != "" ||
                    Tranquilizantes_1_Maps_3.value != "" ||
                    Alucinogenos_1_Maps_3.value != "" ||
                    Opiaceos_1_Maps_3.value != "" ||
                    Otros_1_Maps_3.value != ""
                ) {
                    Tabaco_1_Maps_3.required = true;
                    BebidasAlcoholicas_1_Maps_3.required = true;
                    Cannabis_1_Maps_3.required = true;
                    Cocaina_1_Maps_3.required = true;
                    Anfetaminas_1_Maps_3.required = true;
                    Inhalantes_1_Maps_3.required = true;
                    Tranquilizantes_1_Maps_3.required = true;
                    Alucinogenos_1_Maps_3.required = true;
                    Opiaceos_1_Maps_3.required = true;
                    Otros_1_Maps_3.required = true;
                } else {
                    Tabaco_1_Maps_3.required = false;
                    BebidasAlcoholicas_1_Maps_3.required = false;
                    Cannabis_1_Maps_3.required = false;
                    Cocaina_1_Maps_3.required = false;
                    Anfetaminas_1_Maps_3.required = false;
                    Inhalantes_1_Maps_3.required = false;
                    Tranquilizantes_1_Maps_3.required = false;
                    Alucinogenos_1_Maps_3.required = false;
                    Opiaceos_1_Maps_3.required = false;
                    Otros_1_Maps_3.required = false;
                }
                if (Opiaceos_1_Maps_3.value == "3 SI") {
                    Opiaceos_2_Maps_3.required = true;
                    Opiaceos_2_Maps_3.disabled = false;
                } else {
                    Opiaceos_2_Maps_3.required = false;
                    Opiaceos_2_Maps_3.disabled = true;
                }
            });

            //Otros (.)

            Otros_1_Maps_3.addEventListener("change", function() {
                if (
                    Tabaco_1_Maps_3.value != "" ||
                    BebidasAlcoholicas_1_Maps_3.value != "" ||
                    Cannabis_1_Maps_3.value != "" ||
                    Cocaina_1_Maps_3.value != "" ||
                    Anfetaminas_1_Maps_3.value != "" ||
                    Inhalantes_1_Maps_3.value != "" ||
                    Tranquilizantes_1_Maps_3.value != "" ||
                    Alucinogenos_1_Maps_3.value != "" ||
                    Opiaceos_1_Maps_3.value != "" ||
                    Otros_1_Maps_3.value != ""
                ) {
                    Tabaco_1_Maps_3.required = true;
                    BebidasAlcoholicas_1_Maps_3.required = true;
                    Cannabis_1_Maps_3.required = true;
                    Cocaina_1_Maps_3.required = true;
                    Anfetaminas_1_Maps_3.required = true;
                    Inhalantes_1_Maps_3.required = true;
                    Tranquilizantes_1_Maps_3.required = true;
                    Alucinogenos_1_Maps_3.required = true;
                    Opiaceos_1_Maps_3.required = true;
                    Otros_1_Maps_3.required = true;
                } else {
                    Tabaco_1_Maps_3.required = false;
                    BebidasAlcoholicas_1_Maps_3.required = false;
                    Cannabis_1_Maps_3.required = false;
                    Cocaina_1_Maps_3.required = false;
                    Anfetaminas_1_Maps_3.required = false;
                    Inhalantes_1_Maps_3.required = false;
                    Tranquilizantes_1_Maps_3.required = false;
                    Alucinogenos_1_Maps_3.required = false;
                    Opiaceos_1_Maps_3.required = false;
                    Otros_1_Maps_3.required = false;
                }
                if (Otros_1_Maps_3.value == "3 SI") {
                    Otros_2_Maps_3.required = true;
                    Otros_2_Maps_3.disabled = false;
                } else {
                    Otros_2_Maps_3.required = false;
                    Otros_2_Maps_3.disabled = true;
                }
            });
        } catch (error) {} /*CIERRE ASSIST*/
        /*APERTURA SEGUIMIENTO Y MONITOREO*/
        try {
            let Canalizacion_MAPS_3 = document.querySelector("#valorControl10182");
            let TipoCanalizacion_MAPS_3 =
                document.querySelector("#valorControl10183");
            let PlanManejo_MAPS_3 = document.querySelector("#valorControl10185");

            if (
                Canalizacion_MAPS_3.value != "" ||
                TipoCanalizacion_MAPS_3.value != "" ||
                PlanManejo_MAPS_3.value != ""
            ) {
                Canalizacion_MAPS_3.required = true;
                TipoCanalizacion_MAPS_3.required = true;
                PlanManejo_MAPS_3.required = true;
            } else {
                Canalizacion_MAPS_3.required = false;
                TipoCanalizacion_MAPS_3.required = false;
                PlanManejo_MAPS_3.required = false;
            }

            //Canalización (.)
            Canalizacion_MAPS_3.addEventListener("change", function() {
                if (
                    Canalizacion_MAPS_3.value != "" ||
                    TipoCanalizacion_MAPS_3.value != "" ||
                    PlanManejo_MAPS_3.value != ""
                ) {
                    Canalizacion_MAPS_3.required = true;
                    TipoCanalizacion_MAPS_3.required = true;
                    PlanManejo_MAPS_3.required = true;
                } else {
                    Canalizacion_MAPS_3.required = false;
                    TipoCanalizacion_MAPS_3.required = false;
                    PlanManejo_MAPS_3.required = false;
                }
            });
            //Tipo de canalización (.)
            TipoCanalizacion_MAPS_3.addEventListener("change", function() {
                if (
                    Canalizacion_MAPS_3.value != "" ||
                    TipoCanalizacion_MAPS_3.value != "" ||
                    PlanManejo_MAPS_3.value != ""
                ) {
                    Canalizacion_MAPS_3.required = true;
                    TipoCanalizacion_MAPS_3.required = true;
                    PlanManejo_MAPS_3.required = true;
                } else {
                    Canalizacion_MAPS_3.required = false;
                    TipoCanalizacion_MAPS_3.required = false;
                    PlanManejo_MAPS_3.required = false;
                }
            });
            //Plan de manejo (.)
            PlanManejo_MAPS_3.addEventListener("change", function() {
                if (
                    Canalizacion_MAPS_3.value != "" ||
                    TipoCanalizacion_MAPS_3.value != "" ||
                    PlanManejo_MAPS_3.value != ""
                ) {
                    Canalizacion_MAPS_3.required = true;
                    TipoCanalizacion_MAPS_3.required = true;
                    PlanManejo_MAPS_3.required = true;
                } else {
                    Canalizacion_MAPS_3.required = false;
                    TipoCanalizacion_MAPS_3.required = false;
                    PlanManejo_MAPS_3.required = false;
                }
            });
        } catch (error) {}
        /*CIERRE SEGUIMIENTO Y MONITOREO*/
        /*APERTURA VALORACIÓN DE MEJORAMIENTO DE HABILIDADES Y COMPETENCIA*/
        try {
            let habilidades_1_MAPS_3 = document.querySelector("#valorControl10186");
            let habilidades_2_MAPS_3 = document.querySelector("#valorControl10187");
            let habilidades_3_MAPS_3 = document.querySelector("#valorControl10188");

            if (
                habilidades_1_MAPS_3.value != "" ||
                habilidades_2_MAPS_3.value != "" ||
                habilidades_3_MAPS_3.value != ""
            ) {
                habilidades_1_MAPS_3.required = true;
                habilidades_2_MAPS_3.required = true;
                habilidades_3_MAPS_3.required = true;
            } else {
                habilidades_1_MAPS_3.required = false;
                habilidades_2_MAPS_3.required = false;
                habilidades_3_MAPS_3.required = false;
            }
            habilidades_1_MAPS_3.addEventListener("change", function() {
                if (
                    habilidades_1_MAPS_3.value != "" ||
                    habilidades_2_MAPS_3.value != "" ||
                    habilidades_3_MAPS_3.value != ""
                ) {
                    habilidades_1_MAPS_3.required = true;
                    habilidades_2_MAPS_3.required = true;
                    habilidades_3_MAPS_3.required = true;
                } else {
                    habilidades_1_MAPS_3.required = false;
                    habilidades_2_MAPS_3.required = false;
                    habilidades_3_MAPS_3.required = false;
                }
            });
            habilidades_2_MAPS_3.addEventListener("change", function() {
                if (
                    habilidades_1_MAPS_3.value != "" ||
                    habilidades_2_MAPS_3.value != "" ||
                    habilidades_3_MAPS_3.value != ""
                ) {
                    habilidades_1_MAPS_3.required = true;
                    habilidades_2_MAPS_3.required = true;
                    habilidades_3_MAPS_3.required = true;
                } else {
                    habilidades_1_MAPS_3.required = false;
                    habilidades_2_MAPS_3.required = false;
                    habilidades_3_MAPS_3.required = false;
                }
            });
            habilidades_3_MAPS_3.addEventListener("change", function() {
                if (
                    habilidades_1_MAPS_3.value != "" ||
                    habilidades_2_MAPS_3.value != "" ||
                    habilidades_3_MAPS_3.value != ""
                ) {
                    habilidades_1_MAPS_3.required = true;
                    habilidades_2_MAPS_3.required = true;
                    habilidades_3_MAPS_3.required = true;
                } else {
                    habilidades_1_MAPS_3.required = false;
                    habilidades_2_MAPS_3.required = false;
                    habilidades_3_MAPS_3.required = false;
                }
            });
        } catch (error) {} /*CIERRE VALORACIÓN DE MEJORAMIENTO DE HABILIDADES Y COMPETENCIA*/
    } catch (error) {} /* CIERRE MAPS 3 */
} catch (error) {} /*CIERRE MAPS */
/*
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



FORTALECIMIENTO COMUNITARIO



XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
//BLOQUE FORTALECIMIENTO
try {
    //VARIABLES
    let FortalecimientoTipoDocumento =
        document.querySelector("#valorControl9619"); //Tipo de documento (.)
    let FortalecimientoNumeroDocumento =
        document.querySelector("#valorControl9620"); //Número Documento (.)
    let FortalecimientoNombreIndividuo =
        document.querySelector("#valorControl9621"); //Nombre completo (.)
    let FortalecimientoNacionalidad = document.querySelector("#valorControl9623"); //Nacionalidad
    let FortalecimientoPoblacionDiferencial =
        document.querySelector("#valorControl9624"); //Población Diferencial y de Inclusión (.)
    let FortalecimientoTest = document.querySelector("#valorControl9654"); //Test (.)
    let FortalecimientoGrupoPre = document.querySelector("#valorControl9622"); //Grupo PRE (.)
    let FortalecimientoGrupoPos = document.querySelector("#valorControl11209"); //Grupo POS (.)
    let FortalecimientoFechaPre = document.querySelector("#valorControl9626"); //Fecha PRE y POS   [?]
    let FortalecimientoFechaPos = document.querySelector("#valorControl9627"); //Fecha-POS (.)

    //Nombre completo (.)
    try {
        validarNombreApellido(FortalecimientoNombreIndividuo);
        FortalecimientoNombreIndividuo.addEventListener("input", function() {
            validarNombreApellido(FortalecimientoNombreIndividuo);
        });
        FortalecimientoNombreIndividuo.addEventListener("blur", function() {
            if (FortalecimientoNombreIndividuo.value.length < 3) {
                FortalecimientoNombreIndividuo.value = "";
                FortalecimientoNombreIndividuo.setCustomValidity("Verificar Nombre.");
            }
        });
    } catch (error) {}
    FortalecimientoNumeroDocumento.addEventListener("blur", function() {
        LongitudNumeroDocumento(FortalecimientoNumeroDocumento);
    });

    //Valida que la fecha igresada sea correcta
    FortalecimientoFechaPre.addEventListener("blur", function() {
        validarYLimpiarFecha_1920_2024(FortalecimientoFechaPre);
    });
    FortalecimientoFechaPos.addEventListener("blur", function() {
        validarYLimpiarFecha_1920_2024(FortalecimientoFechaPos);
    });

    let RelacionConOtrasPersonas1a = document.querySelector("#valorControl9630");
    let RelacionConOtrasPersonas1b = document.querySelector("#valorControl9631");
    let RelacionConOtrasPersonas2a = document.querySelector("#valorControl9633");
    let RelacionConOtrasPersonas2b = document.querySelector("#valorControl9634");
    let RelacionConOtrasPersonas3a = document.querySelector("#valorControl9636");
    let RelacionConOtrasPersonas3b = document.querySelector("#valorControl9637");
    let RelacionConOtrasPersonas4a = document.querySelector("#valorControl9639");
    let RelacionConOtrasPersonas4b = document.querySelector("#valorControl9640");
    let RelacionConOtrasPersonas5a = document.querySelector("#valorControl9643");
    let RelacionConOtrasPersonas5b = document.querySelector("#valorControl9644");
    let RelacionConOtrasPersonas6a = document.querySelector("#valorControl9646");
    let RelacionConOtrasPersonas6b = document.querySelector("#valorControl9647");
    let RelacionConOtrasPersonas7a = document.querySelector("#valorControl9649");
    let RelacionConOtrasPersonas7b = document.querySelector("#valorControl9650");

    RelacionConOtrasPersonas1a.style.backgroundColor = "#FFF59D";
    RelacionConOtrasPersonas1b.style.backgroundColor = "#FFF59D";
    RelacionConOtrasPersonas2a.style.backgroundColor = "#FFF59D";
    RelacionConOtrasPersonas2b.style.backgroundColor = "#FFF59D";
    RelacionConOtrasPersonas3a.style.backgroundColor = "#FFF59D";
    RelacionConOtrasPersonas3b.style.backgroundColor = "#FFF59D";
    RelacionConOtrasPersonas4a.style.backgroundColor = "#FFF59D";
    RelacionConOtrasPersonas4b.style.backgroundColor = "#FFF59D";
    RelacionConOtrasPersonas5a.style.backgroundColor = "#FFF59D";
    RelacionConOtrasPersonas5b.style.backgroundColor = "#FFF59D";
    RelacionConOtrasPersonas6a.style.backgroundColor = "#FFF59D";
    RelacionConOtrasPersonas6b.style.backgroundColor = "#FFF59D";
    RelacionConOtrasPersonas7a.style.backgroundColor = "#FFF59D";
    RelacionConOtrasPersonas7b.style.backgroundColor = "#FFF59D";

    let ActividadFisica1a = document.querySelector("#valorControl9659");
    let ActividadFisica1b = document.querySelector("#valorControl9661");
    let ActividadFisica2a = document.querySelector("#valorControl9663");
    let ActividadFisica2b = document.querySelector("#valorControl9664");
    let ActividadFisica3a = document.querySelector("#valorControl9666");
    let ActividadFisica3b = document.querySelector("#valorControl9667");

    ActividadFisica1a.style.backgroundColor = "#81D4FA";
    ActividadFisica1b.style.backgroundColor = "#81D4FA";
    ActividadFisica2a.style.backgroundColor = "#81D4FA";
    ActividadFisica2b.style.backgroundColor = "#81D4FA";
    ActividadFisica3a.style.backgroundColor = "#81D4FA";
    ActividadFisica3b.style.backgroundColor = "#81D4FA";

    let nutricion1a = document.querySelector("#valorControl9670");
    let nutricion1b = document.querySelector("#valorControl9671");
    let nutricion2a = document.querySelector("#valorControl9673");
    let nutricion2b = document.querySelector("#valorControl9674");
    let nutricion3a = document.querySelector("#valorControl9676");
    let nutricion3b = document.querySelector("#valorControl9677");
    let nutricion4a = document.querySelector("#valorControl9679");
    let nutricion4b = document.querySelector("#valorControl9680");

    nutricion1a.style.backgroundColor = "#FF8A65";
    nutricion1b.style.backgroundColor = "#FF8A65";
    nutricion2a.style.backgroundColor = "#FF8A65";
    nutricion2b.style.backgroundColor = "#FF8A65";
    nutricion3a.style.backgroundColor = "#FF8A65";
    nutricion3b.style.backgroundColor = "#FF8A65";
    nutricion4a.style.backgroundColor = "#FF8A65";
    nutricion4b.style.backgroundColor = "#FF8A65";

    let SaludSexual1a = document.querySelector("#valorControl9691");
    let SaludSexual1b = document.querySelector("#valorControl9692");
    let SaludSexua12a = document.querySelector("#valorControl9694");
    let SaludSexua12b = document.querySelector("#valorControl9695");
    let SaludSexual3a = document.querySelector("#valorControl9697");
    let SaludSexual3b = document.querySelector("#valorControl9698");
    let SaludSexual4a = document.querySelector("#valorControl9700");
    let SaludSexual4b = document.querySelector("#valorControl9701");

    SaludSexual1a.style.backgroundColor = "#FFF59D";
    SaludSexual1b.style.backgroundColor = "#FFF59D";
    SaludSexua12a.style.backgroundColor = "#FFF59D";
    SaludSexua12b.style.backgroundColor = "#FFF59D";
    SaludSexual3a.style.backgroundColor = "#FFF59D";
    SaludSexual3b.style.backgroundColor = "#FFF59D";
    SaludSexual4a.style.backgroundColor = "#FFF59D";
    SaludSexual4b.style.backgroundColor = "#FFF59D";

    let SaludAmbiental1a = document.querySelector("#valorControl9707");
    let SaludAmbiental1b = document.querySelector("#valorControl9708");
    let SaludAmbiental2a = document.querySelector("#valorControl9710");
    let SaludAmbiental2b = document.querySelector("#valorControl9711");
    let SaludAmbiental3a = document.querySelector("#valorControl9713");
    let SaludAmbiental3b = document.querySelector("#valorControl9714");

    SaludAmbiental1a.style.backgroundColor = "#81D4FA";
    SaludAmbiental1b.style.backgroundColor = "#81D4FA";
    SaludAmbiental2a.style.backgroundColor = "#81D4FA";
    SaludAmbiental2b.style.backgroundColor = "#81D4FA";
    SaludAmbiental3a.style.backgroundColor = "#81D4FA";
    SaludAmbiental3b.style.backgroundColor = "#81D4FA";

    let SaludAuditivaComunicativa1a = document.querySelector("#valorControl9720");
    let SaludAuditivaComunicativa1b = document.querySelector("#valorControl9721");
    let SaludAuditivaComunicativa2a = document.querySelector("#valorControl9723");
    let SaludAuditivaComunicativa2b = document.querySelector("#valorControl9724");
    let SaludAuditivaComunicativa3a = document.querySelector("#valorControl9726");
    let SaludAuditivaComunicativa3b = document.querySelector("#valorControl9727");

    SaludAuditivaComunicativa1a.style.backgroundColor = "#FF8A65";
    SaludAuditivaComunicativa1b.style.backgroundColor = "#FF8A65";
    SaludAuditivaComunicativa2a.style.backgroundColor = "#FF8A65";
    SaludAuditivaComunicativa2b.style.backgroundColor = "#FF8A65";
    SaludAuditivaComunicativa3a.style.backgroundColor = "#FF8A65";
    SaludAuditivaComunicativa3b.style.backgroundColor = "#FF8A65";

    let SaludVisual1a = document.querySelector("#valorControl9733");
    let SaludVisual1b = document.querySelector("#valorControl9734");
    let SaludVisual2a = document.querySelector("#valorControl9736");
    let SaludVisual2b = document.querySelector("#valorControl9737");

    SaludVisual1a.style.backgroundColor = "#FFF59D";
    SaludVisual1b.style.backgroundColor = "#FFF59D";
    SaludVisual2a.style.backgroundColor = "#FFF59D";
    SaludVisual2b.style.backgroundColor = "#FFF59D";

    let SaludMental1a = document.querySelector("#valorControl9743");
    let SaludMental1b = document.querySelector("#valorControl9744");
    let SaludMental2a = document.querySelector("#valorControl9746");
    let SaludMental2b = document.querySelector("#valorControl9747");

    SaludMental1a.style.backgroundColor = "#81D4FA";
    SaludMental1b.style.backgroundColor = "#81D4FA";
    SaludMental2a.style.backgroundColor = "#81D4FA";
    SaludMental2b.style.backgroundColor = "#81D4FA";
    //Para la prevención de infecciones respiratorias agudas es recomendable:   [?]

    let SaludInfantilYCuidadoDeLaGestante1a =
        document.querySelector("#valorControl9753");
    let SaludInfantilYCuidadoDeLaGestante1b =
        document.querySelector("#valorControl9754");
    let SaludInfantilYCuidadoDeLaGestante2a =
        document.querySelector("#valorControl9756");
    let SaludInfantilYCuidadoDeLaGestante2b =
        document.querySelector("#valorControl9757");
    let SaludInfantilYCuidadoDeLaGestante3a =
        document.querySelector("#valorControl9759");
    let SaludInfantilYCuidadoDeLaGestante3b =
        document.querySelector("#valorControl9760");
    let SaludInfantilYCuidadoDeLaGestante4a =
        document.querySelector("#valorControl9762");
    let SaludInfantilYCuidadoDeLaGestante4b =
        document.querySelector("#valorControl9763");

    SaludInfantilYCuidadoDeLaGestante1a.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante1b.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante2a.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante2b.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante3a.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante3b.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante4a.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante4b.style.backgroundColor = "#FF8A65";
    //¿Cuáles síntomas indican que la persona gestante debe recibir atención médica por urgencias?   [?]

    let SaludInfantilYCuidadoDeLaGestante5a =
        document.querySelector("#valorControl9766");
    let SaludInfantilYCuidadoDeLaGestante5b =
        document.querySelector("#valorControl9767");
    let SaludInfantilYCuidadoDeLaGestante6a =
        document.querySelector("#valorControl9769");
    let SaludInfantilYCuidadoDeLaGestante6b =
        document.querySelector("#valorControl9770");
    let SaludInfantilYCuidadoDeLaGestante7a =
        document.querySelector("#valorControl9772");
    let SaludInfantilYCuidadoDeLaGestante7b =
        document.querySelector("#valorControl9773");

    SaludInfantilYCuidadoDeLaGestante5a.style.backgroundColor = "#FFF59D";
    SaludInfantilYCuidadoDeLaGestante5b.style.backgroundColor = "#FFF59D";
    SaludInfantilYCuidadoDeLaGestante6a.style.backgroundColor = "#FFF59D";
    SaludInfantilYCuidadoDeLaGestante6b.style.backgroundColor = "#FFF59D";
    SaludInfantilYCuidadoDeLaGestante7a.style.backgroundColor = "#FFF59D";
    SaludInfantilYCuidadoDeLaGestante7b.style.backgroundColor = "#FFF59D";
    //Es la alimentación ideal para niños/niñas teniendo en cuenta su edad:   [?]

    let SaludInfantilYCuidadoDeLaGestante8a =
        document.querySelector("#valorControl9776");
    let SaludInfantilYCuidadoDeLaGestante8b =
        document.querySelector("#valorControl9777");
    let SaludInfantilYCuidadoDeLaGestante9a =
        document.querySelector("#valorControl9779");
    let SaludInfantilYCuidadoDeLaGestante9b =
        document.querySelector("#valorControl9780");
    let SaludInfantilYCuidadoDeLaGestante10a =
        document.querySelector("#valorControl9782");
    let SaludInfantilYCuidadoDeLaGestante10b =
        document.querySelector("#valorControl9783");
    let SaludInfantilYCuidadoDeLaGestante11a =
        document.querySelector("#valorControl9785");
    let SaludInfantilYCuidadoDeLaGestante11b =
        document.querySelector("#valorControl9786");

    SaludInfantilYCuidadoDeLaGestante8a.style.backgroundColor = "#81D4FA";
    SaludInfantilYCuidadoDeLaGestante8b.style.backgroundColor = "#81D4FA";
    SaludInfantilYCuidadoDeLaGestante9a.style.backgroundColor = "#81D4FA";
    SaludInfantilYCuidadoDeLaGestante9b.style.backgroundColor = "#81D4FA";
    SaludInfantilYCuidadoDeLaGestante10a.style.backgroundColor = "#81D4FA";
    SaludInfantilYCuidadoDeLaGestante10b.style.backgroundColor = "#81D4FA";
    SaludInfantilYCuidadoDeLaGestante11a.style.backgroundColor = "#81D4FA";
    SaludInfantilYCuidadoDeLaGestante11b.style.backgroundColor = "#81D4FA";
    //Sobre la alimentación y nutrición durante la gestación:   [?]

    let SaludInfantilYCuidadoDeLaGestante12a =
        document.querySelector("#valorControl9789");
    let SaludInfantilYCuidadoDeLaGestante12b =
        document.querySelector("#valorControl9790");
    let SaludInfantilYCuidadoDeLaGestante13a =
        document.querySelector("#valorControl9792");
    let SaludInfantilYCuidadoDeLaGestante13b =
        document.querySelector("#valorControl9793");
    let SaludInfantilYCuidadoDeLaGestante14a =
        document.querySelector("#valorControl9795");
    let SaludInfantilYCuidadoDeLaGestante14b =
        document.querySelector("#valorControl9796");
    let SaludInfantilYCuidadoDeLaGestante15a =
        document.querySelector("#valorControl9798");
    let SaludInfantilYCuidadoDeLaGestante15b =
        document.querySelector("#valorControl9799");
    let SaludInfantilYCuidadoDeLaGestante16a =
        document.querySelector("#valorControl9800");
    let SaludInfantilYCuidadoDeLaGestante16b =
        document.querySelector("#valorControl9801");
    let SaludInfantilYCuidadoDeLaGestante17a =
        document.querySelector("#valorControl9804");
    let SaludInfantilYCuidadoDeLaGestante17b =
        document.querySelector("#valorControl9805");
    let SaludInfantilYCuidadoDeLaGestante18a =
        document.querySelector("#valorControl9807");
    let SaludInfantilYCuidadoDeLaGestante18b =
        document.querySelector("#valorControl9808");

    SaludInfantilYCuidadoDeLaGestante12a.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante12b.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante13a.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante13b.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante14a.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante14b.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante15a.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante15b.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante16a.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante16b.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante17a.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante17b.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante18a.style.backgroundColor = "#FF8A65";
    SaludInfantilYCuidadoDeLaGestante18b.style.backgroundColor = "#FF8A65";

    let FortalecimientoPercepcion1 = document.querySelector("#valorControl9812");
    let FortalecimientoPercepcion2 = document.querySelector("#valorControl9813");
    let FortalecimientoPercepcion3 = document.querySelector("#valorControl9814");
    let FortalecimientoPercepcion4 = document.querySelector("#valorControl9815");
    let FortalecimientoPercepcion5 = document.querySelector("#valorControl9816");
    let FortalecimientoPercepcion6 = document.querySelector("#valorControl9817");

    FortalecimientoPercepcion1.disabled = false;
    FortalecimientoPercepcion2.disabled = false;
    FortalecimientoPercepcion3.disabled = false;
    FortalecimientoPercepcion4.disabled = false;
    FortalecimientoPercepcion5.disabled = false;
    FortalecimientoPercepcion6.disabled = false;

    try {
        FortalecimientoTest.addEventListener("change", function() {
            if (
                FortalecimientoTest.value === "Pre-test" ||
                FortalecimientoTest.value === ""
            ) {
                console.log(FortalecimientoTest.value);
                FortalecimientoFechaPre.disabled = false;
                FortalecimientoGrupoPre.disabled = false;
                RelacionConOtrasPersonas1a.disabled = false;
                RelacionConOtrasPersonas2a.disabled = false;
                RelacionConOtrasPersonas3a.disabled = false;
                RelacionConOtrasPersonas4a.disabled = false;
                RelacionConOtrasPersonas5a.disabled = false;
                RelacionConOtrasPersonas6a.disabled = false;
                RelacionConOtrasPersonas7a.disabled = false;
                ActividadFisica1a.disabled = false;
                ActividadFisica2a.disabled = false;
                ActividadFisica3a.disabled = false;
                nutricion1a.disabled = false;
                nutricion2a.disabled = false;
                nutricion3a.disabled = false;
                nutricion4a.disabled = false;
                SaludSexual1a.disabled = false;
                SaludSexua12a.disabled = false;
                SaludSexual3a.disabled = false;
                SaludSexual4a.disabled = false;
                SaludAmbiental1a.disabled = false;
                SaludAmbiental2a.disabled = false;
                SaludAmbiental3a.disabled = false;
                SaludAuditivaComunicativa1a.disabled = false;
                SaludAuditivaComunicativa2a.disabled = false;
                SaludAuditivaComunicativa3a.disabled = false;
                SaludVisual1a.disabled = false;
                SaludVisual2a.disabled = false;
                SaludMental1a.disabled = false;
                SaludMental2a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante1a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante2a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante3a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante4a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante5a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante6a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante7a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante8a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante9a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante10a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante11a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante12a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante13a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante14a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante15a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante16a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante17a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante18a.disabled = false;

                FortalecimientoFechaPre.required = true;
                FortalecimientoGrupoPre.required = true;
                RelacionConOtrasPersonas1a.required = true;
                RelacionConOtrasPersonas2a.required = true;
                RelacionConOtrasPersonas3a.required = true;
                RelacionConOtrasPersonas4a.required = true;
                RelacionConOtrasPersonas5a.required = true;
                RelacionConOtrasPersonas6a.required = true;
                RelacionConOtrasPersonas7a.required = true;
                ActividadFisica1a.required = true;
                ActividadFisica2a.required = true;
                ActividadFisica3a.required = true;
                nutricion1a.required = true;
                nutricion2a.required = true;
                nutricion3a.required = true;
                nutricion4a.required = true;
                SaludSexual1a.required = true;
                SaludSexua12a.required = true;
                SaludSexual3a.required = true;
                SaludSexual4a.required = true;
                SaludAmbiental1a.required = true;
                SaludAmbiental2a.required = true;
                SaludAmbiental3a.required = true;
                SaludAuditivaComunicativa1a.required = true;
                SaludAuditivaComunicativa2a.required = true;
                SaludAuditivaComunicativa3a.required = true;
                SaludVisual1a.required = true;
                SaludVisual2a.required = true;
                SaludMental1a.required = true;
                SaludMental2a.required = true;
                SaludInfantilYCuidadoDeLaGestante1a.required = true;
                SaludInfantilYCuidadoDeLaGestante2a.required = true;
                SaludInfantilYCuidadoDeLaGestante3a.required = true;
                SaludInfantilYCuidadoDeLaGestante4a.required = true;
                SaludInfantilYCuidadoDeLaGestante5a.required = true;
                SaludInfantilYCuidadoDeLaGestante6a.required = true;
                SaludInfantilYCuidadoDeLaGestante7a.required = true;
                SaludInfantilYCuidadoDeLaGestante8a.required = true;
                SaludInfantilYCuidadoDeLaGestante9a.required = true;
                SaludInfantilYCuidadoDeLaGestante10a.required = true;
                SaludInfantilYCuidadoDeLaGestante11a.required = true;
                SaludInfantilYCuidadoDeLaGestante12a.required = true;
                SaludInfantilYCuidadoDeLaGestante13a.required = true;
                SaludInfantilYCuidadoDeLaGestante14a.required = true;
                SaludInfantilYCuidadoDeLaGestante15a.required = true;
                SaludInfantilYCuidadoDeLaGestante16a.required = true;
                SaludInfantilYCuidadoDeLaGestante17a.required = true;
                SaludInfantilYCuidadoDeLaGestante18a.required = true;

                FortalecimientoFechaPos.disabled = true;
                FortalecimientoGrupoPos.disabled = true;
                RelacionConOtrasPersonas1b.disabled = true;
                RelacionConOtrasPersonas2b.disabled = true;
                RelacionConOtrasPersonas3b.disabled = true;
                RelacionConOtrasPersonas4b.disabled = true;
                RelacionConOtrasPersonas5b.disabled = true;
                RelacionConOtrasPersonas6b.disabled = true;
                RelacionConOtrasPersonas7b.disabled = true;
                ActividadFisica1b.disabled = true;
                ActividadFisica2b.disabled = true;
                ActividadFisica3b.disabled = true;
                nutricion1b.disabled = true;
                nutricion2b.disabled = true;
                nutricion3b.disabled = true;
                nutricion4b.disabled = true;
                SaludSexual1b.disabled = true;
                SaludSexua12b.disabled = true;
                SaludSexual3b.disabled = true;
                SaludSexual4b.disabled = true;
                SaludAmbiental1b.disabled = true;
                SaludAmbiental2b.disabled = true;
                SaludAmbiental3b.disabled = true;
                SaludAuditivaComunicativa1b.disabled = true;
                SaludAuditivaComunicativa2b.disabled = true;
                SaludAuditivaComunicativa3b.disabled = true;
                SaludVisual1b.disabled = true;
                SaludVisual2b.disabled = true;
                SaludMental1b.disabled = true;
                SaludMental2b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante1b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante2b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante3b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante4b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante5b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante6b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante7b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante8b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante9b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante10b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante11b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante12b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante13b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante14b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante15b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante16b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante17b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante18b.disabled = true;
                FortalecimientoPercepcion1.disabled = true;
                FortalecimientoPercepcion2.disabled = true;
                FortalecimientoPercepcion3.disabled = true;
                FortalecimientoPercepcion4.disabled = true;
                FortalecimientoPercepcion5.disabled = true;
                FortalecimientoPercepcion6.disabled = true;

                FortalecimientoFechaPos.required = false;
                FortalecimientoGrupoPos.required = false;
                RelacionConOtrasPersonas1b.required = false;
                RelacionConOtrasPersonas2b.required = false;
                RelacionConOtrasPersonas3b.required = false;
                RelacionConOtrasPersonas4b.required = false;
                RelacionConOtrasPersonas5b.required = false;
                RelacionConOtrasPersonas6b.required = false;
                RelacionConOtrasPersonas7b.required = false;
                ActividadFisica1b.required = false;
                ActividadFisica2b.required = false;
                ActividadFisica3b.required = false;
                nutricion1b.required = false;
                nutricion2b.required = false;
                nutricion3b.required = false;
                nutricion4b.required = false;
                SaludSexual1b.required = false;
                SaludSexua12b.required = false;
                SaludSexual3b.required = false;
                SaludSexual4b.required = false;
                SaludAmbiental1b.required = false;
                SaludAmbiental2b.required = false;
                SaludAmbiental3b.required = false;
                SaludAuditivaComunicativa1b.required = false;
                SaludAuditivaComunicativa2b.required = false;
                SaludAuditivaComunicativa3b.required = false;
                SaludVisual1b.required = false;
                SaludVisual2b.required = false;
                SaludMental1b.required = false;
                SaludMental2b.required = false;
                SaludInfantilYCuidadoDeLaGestante1b.required = false;
                SaludInfantilYCuidadoDeLaGestante2b.required = false;
                SaludInfantilYCuidadoDeLaGestante3b.required = false;
                SaludInfantilYCuidadoDeLaGestante4b.required = false;
                SaludInfantilYCuidadoDeLaGestante5b.required = false;
                SaludInfantilYCuidadoDeLaGestante6b.required = false;
                SaludInfantilYCuidadoDeLaGestante7b.required = false;
                SaludInfantilYCuidadoDeLaGestante8b.required = false;
                SaludInfantilYCuidadoDeLaGestante9b.required = false;
                SaludInfantilYCuidadoDeLaGestante10b.required = false;
                SaludInfantilYCuidadoDeLaGestante11b.required = false;
                SaludInfantilYCuidadoDeLaGestante12b.required = false;
                SaludInfantilYCuidadoDeLaGestante13b.required = false;
                SaludInfantilYCuidadoDeLaGestante14b.required = false;
                SaludInfantilYCuidadoDeLaGestante15b.required = false;
                SaludInfantilYCuidadoDeLaGestante16b.required = false;
                SaludInfantilYCuidadoDeLaGestante17b.required = false;
                SaludInfantilYCuidadoDeLaGestante18b.required = false;
                FortalecimientoPercepcion1.required = false;
                FortalecimientoPercepcion2.required = false;
                FortalecimientoPercepcion3.required = false;
                FortalecimientoPercepcion4.required = false;
                FortalecimientoPercepcion5.required = false;
                FortalecimientoPercepcion6.required = false;
            } else if (FortalecimientoTest.value === "Pos-test") {
                FortalecimientoFechaPre.disabled = true;
                FortalecimientoGrupoPre.disabled = true;
                RelacionConOtrasPersonas1a.disabled = true;
                RelacionConOtrasPersonas2a.disabled = true;
                RelacionConOtrasPersonas3a.disabled = true;
                RelacionConOtrasPersonas4a.disabled = true;
                RelacionConOtrasPersonas5a.disabled = true;
                RelacionConOtrasPersonas6a.disabled = true;
                RelacionConOtrasPersonas7a.disabled = true;
                ActividadFisica1a.disabled = true;
                ActividadFisica2a.disabled = true;
                ActividadFisica3a.disabled = true;
                nutricion1a.disabled = true;
                nutricion2a.disabled = true;
                nutricion3a.disabled = true;
                nutricion4a.disabled = true;
                SaludSexual1a.disabled = true;
                SaludSexua12a.disabled = true;
                SaludSexual3a.disabled = true;
                SaludSexual4a.disabled = true;
                SaludAmbiental1a.disabled = true;
                SaludAmbiental2a.disabled = true;
                SaludAmbiental3a.disabled = true;
                SaludAuditivaComunicativa1a.disabled = true;
                SaludAuditivaComunicativa2a.disabled = true;
                SaludAuditivaComunicativa3a.disabled = true;
                SaludVisual1a.disabled = true;
                SaludVisual2a.disabled = true;
                SaludMental1a.disabled = true;
                SaludMental2a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante1a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante2a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante3a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante4a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante5a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante6a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante7a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante8a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante9a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante10a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante11a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante12a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante13a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante14a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante15a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante16a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante17a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante18a.disabled = true;

                FortalecimientoFechaPre.required = true;
                FortalecimientoGrupoPre.required = true;
                RelacionConOtrasPersonas1a.required = true;
                RelacionConOtrasPersonas2a.required = true;
                RelacionConOtrasPersonas3a.required = true;
                RelacionConOtrasPersonas4a.required = true;
                RelacionConOtrasPersonas5a.required = true;
                RelacionConOtrasPersonas6a.required = true;
                RelacionConOtrasPersonas7a.required = true;
                ActividadFisica1a.required = true;
                ActividadFisica2a.required = true;
                ActividadFisica3a.required = true;
                nutricion1a.required = true;
                nutricion2a.required = true;
                nutricion3a.required = true;
                nutricion4a.required = true;
                SaludSexual1a.required = true;
                SaludSexua12a.required = true;
                SaludSexual3a.required = true;
                SaludSexual4a.required = true;
                SaludAmbiental1a.required = true;
                SaludAmbiental2a.required = true;
                SaludAmbiental3a.required = true;
                SaludAuditivaComunicativa1a.required = true;
                SaludAuditivaComunicativa2a.required = true;
                SaludAuditivaComunicativa3a.required = true;
                SaludVisual1a.required = true;
                SaludVisual2a.required = true;
                SaludMental1a.required = true;
                SaludMental2a.required = true;
                SaludInfantilYCuidadoDeLaGestante1a.required = true;
                SaludInfantilYCuidadoDeLaGestante2a.required = true;
                SaludInfantilYCuidadoDeLaGestante3a.required = true;
                SaludInfantilYCuidadoDeLaGestante4a.required = true;
                SaludInfantilYCuidadoDeLaGestante5a.required = true;
                SaludInfantilYCuidadoDeLaGestante6a.required = true;
                SaludInfantilYCuidadoDeLaGestante7a.required = true;
                SaludInfantilYCuidadoDeLaGestante8a.required = true;
                SaludInfantilYCuidadoDeLaGestante9a.required = true;
                SaludInfantilYCuidadoDeLaGestante10a.required = true;
                SaludInfantilYCuidadoDeLaGestante11a.required = true;
                SaludInfantilYCuidadoDeLaGestante12a.required = true;
                SaludInfantilYCuidadoDeLaGestante13a.required = true;
                SaludInfantilYCuidadoDeLaGestante14a.required = true;
                SaludInfantilYCuidadoDeLaGestante15a.required = true;
                SaludInfantilYCuidadoDeLaGestante16a.required = true;
                SaludInfantilYCuidadoDeLaGestante17a.required = true;
                SaludInfantilYCuidadoDeLaGestante18a.required = true;

                FortalecimientoFechaPos.disabled = false;
                FortalecimientoGrupoPos.disabled = false;
                RelacionConOtrasPersonas1b.disabled = false;
                RelacionConOtrasPersonas2b.disabled = false;
                RelacionConOtrasPersonas3b.disabled = false;
                RelacionConOtrasPersonas4b.disabled = false;
                RelacionConOtrasPersonas5b.disabled = false;
                RelacionConOtrasPersonas6b.disabled = false;
                RelacionConOtrasPersonas7b.disabled = false;
                ActividadFisica1b.disabled = false;
                ActividadFisica2b.disabled = false;
                ActividadFisica3b.disabled = false;
                nutricion1b.disabled = false;
                nutricion2b.disabled = false;
                nutricion3b.disabled = false;
                nutricion4b.disabled = false;
                SaludSexual1b.disabled = false;
                SaludSexua12b.disabled = false;
                SaludSexual3b.disabled = false;
                SaludSexual4b.disabled = false;
                SaludAmbiental1b.disabled = false;
                SaludAmbiental2b.disabled = false;
                SaludAmbiental3b.disabled = false;
                SaludAuditivaComunicativa1b.disabled = false;
                SaludAuditivaComunicativa2b.disabled = false;
                SaludAuditivaComunicativa3b.disabled = false;
                SaludVisual1b.disabled = false;
                SaludVisual2b.disabled = false;
                SaludMental1b.disabled = false;
                SaludMental2b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante1b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante2b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante3b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante4b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante5b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante6b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante7b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante8b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante9b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante10b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante11b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante12b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante13b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante14b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante15b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante16b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante17b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante18b.disabled = false;
                FortalecimientoPercepcion1.disabled = false;
                FortalecimientoPercepcion2.disabled = false;
                FortalecimientoPercepcion3.disabled = false;
                FortalecimientoPercepcion4.disabled = false;
                FortalecimientoPercepcion5.disabled = false;
                FortalecimientoPercepcion6.disabled = false;

                FortalecimientoFechaPos.required = true;
                FortalecimientoGrupoPos.required = true;
                RelacionConOtrasPersonas1b.required = true;
                RelacionConOtrasPersonas2b.required = true;
                RelacionConOtrasPersonas3b.required = true;
                RelacionConOtrasPersonas4b.required = true;
                RelacionConOtrasPersonas5b.required = true;
                RelacionConOtrasPersonas6b.required = true;
                RelacionConOtrasPersonas7b.required = true;
                ActividadFisica1b.required = true;
                ActividadFisica2b.required = true;
                ActividadFisica3b.required = true;
                nutricion1b.required = true;
                nutricion2b.required = true;
                nutricion3b.required = true;
                nutricion4b.required = true;
                SaludSexual1b.required = true;
                SaludSexua12b.required = true;
                SaludSexual3b.required = true;
                SaludSexual4b.required = true;
                SaludAmbiental1b.required = true;
                SaludAmbiental2b.required = true;
                SaludAmbiental3b.required = true;
                SaludAuditivaComunicativa1b.required = true;
                SaludAuditivaComunicativa2b.required = true;
                SaludAuditivaComunicativa3b.required = true;
                SaludVisual1b.required = true;
                SaludVisual2b.required = true;
                SaludMental1b.required = true;
                SaludMental2b.required = true;
                SaludInfantilYCuidadoDeLaGestante1b.required = true;
                SaludInfantilYCuidadoDeLaGestante2b.required = true;
                SaludInfantilYCuidadoDeLaGestante3b.required = true;
                SaludInfantilYCuidadoDeLaGestante4b.required = true;
                SaludInfantilYCuidadoDeLaGestante5b.required = true;
                SaludInfantilYCuidadoDeLaGestante6b.required = true;
                SaludInfantilYCuidadoDeLaGestante7b.required = true;
                SaludInfantilYCuidadoDeLaGestante8b.required = true;
                SaludInfantilYCuidadoDeLaGestante9b.required = true;
                SaludInfantilYCuidadoDeLaGestante10b.required = true;
                SaludInfantilYCuidadoDeLaGestante11b.required = true;
                SaludInfantilYCuidadoDeLaGestante12b.required = true;
                SaludInfantilYCuidadoDeLaGestante13b.required = true;
                SaludInfantilYCuidadoDeLaGestante14b.required = true;
                SaludInfantilYCuidadoDeLaGestante15b.required = true;
                SaludInfantilYCuidadoDeLaGestante16b.required = true;
                SaludInfantilYCuidadoDeLaGestante17b.required = true;
                SaludInfantilYCuidadoDeLaGestante18b.required = true;
                FortalecimientoPercepcion1.required = true;
                FortalecimientoPercepcion2.required = true;
                FortalecimientoPercepcion3.required = true;
                FortalecimientoPercepcion4.required = true;
                FortalecimientoPercepcion5.required = true;
                FortalecimientoPercepcion6.required = true;
            }
        });
    } catch (error) {
        console.log("error");
    }
    try {
        FortalecimientoTest.addEventListener("blur", function() {
            if (FortalecimientoTest.value === "Pre-test") {
                switch (true) {
                    case FortalecimientoGrupoPos.value != "" &&
                    FortalecimientoFechaPos.value == "" &&
                    RelacionConOtrasPersonas1b.value == "":
                        FortalecimientoGrupoPos.value = "";
                        break;

                    default:
                        break;
                }
                FortalecimientoFechaPre.disabled = false;
                FortalecimientoGrupoPre.disabled = false;
                RelacionConOtrasPersonas1a.disabled = false;
                RelacionConOtrasPersonas2a.disabled = false;
                RelacionConOtrasPersonas3a.disabled = false;
                RelacionConOtrasPersonas4a.disabled = false;
                RelacionConOtrasPersonas5a.disabled = false;
                RelacionConOtrasPersonas6a.disabled = false;
                RelacionConOtrasPersonas7a.disabled = false;
                ActividadFisica1a.disabled = false;
                ActividadFisica2a.disabled = false;
                ActividadFisica3a.disabled = false;
                nutricion1a.disabled = false;
                nutricion2a.disabled = false;
                nutricion3a.disabled = false;
                nutricion4a.disabled = false;
                SaludSexual1a.disabled = false;
                SaludSexua12a.disabled = false;
                SaludSexual3a.disabled = false;
                SaludSexual4a.disabled = false;
                SaludAmbiental1a.disabled = false;
                SaludAmbiental2a.disabled = false;
                SaludAmbiental3a.disabled = false;
                SaludAuditivaComunicativa1a.disabled = false;
                SaludAuditivaComunicativa2a.disabled = false;
                SaludAuditivaComunicativa3a.disabled = false;
                SaludVisual1a.disabled = false;
                SaludVisual2a.disabled = false;
                SaludMental1a.disabled = false;
                SaludMental2a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante1a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante2a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante3a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante4a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante5a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante6a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante7a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante8a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante9a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante10a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante11a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante12a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante13a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante14a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante15a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante16a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante17a.disabled = false;
                SaludInfantilYCuidadoDeLaGestante18a.disabled = false;

                FortalecimientoFechaPre.required = true;
                FortalecimientoGrupoPre.required = true;
                RelacionConOtrasPersonas1a.required = true;
                RelacionConOtrasPersonas2a.required = true;
                RelacionConOtrasPersonas3a.required = true;
                RelacionConOtrasPersonas4a.required = true;
                RelacionConOtrasPersonas5a.required = true;
                RelacionConOtrasPersonas6a.required = true;
                RelacionConOtrasPersonas7a.required = true;
                ActividadFisica1a.required = true;
                ActividadFisica2a.required = true;
                ActividadFisica3a.required = true;
                nutricion1a.required = true;
                nutricion2a.required = true;
                nutricion3a.required = true;
                nutricion4a.required = true;
                SaludSexual1a.required = true;
                SaludSexua12a.required = true;
                SaludSexual3a.required = true;
                SaludSexual4a.required = true;
                SaludAmbiental1a.required = true;
                SaludAmbiental2a.required = true;
                SaludAmbiental3a.required = true;
                SaludAuditivaComunicativa1a.required = true;
                SaludAuditivaComunicativa2a.required = true;
                SaludAuditivaComunicativa3a.required = true;
                SaludVisual1a.required = true;
                SaludVisual2a.required = true;
                SaludMental1a.required = true;
                SaludMental2a.required = true;
                SaludInfantilYCuidadoDeLaGestante1a.required = true;
                SaludInfantilYCuidadoDeLaGestante2a.required = true;
                SaludInfantilYCuidadoDeLaGestante3a.required = true;
                SaludInfantilYCuidadoDeLaGestante4a.required = true;
                SaludInfantilYCuidadoDeLaGestante5a.required = true;
                SaludInfantilYCuidadoDeLaGestante6a.required = true;
                SaludInfantilYCuidadoDeLaGestante7a.required = true;
                SaludInfantilYCuidadoDeLaGestante8a.required = true;
                SaludInfantilYCuidadoDeLaGestante9a.required = true;
                SaludInfantilYCuidadoDeLaGestante10a.required = true;
                SaludInfantilYCuidadoDeLaGestante11a.required = true;
                SaludInfantilYCuidadoDeLaGestante12a.required = true;
                SaludInfantilYCuidadoDeLaGestante13a.required = true;
                SaludInfantilYCuidadoDeLaGestante14a.required = true;
                SaludInfantilYCuidadoDeLaGestante15a.required = true;
                SaludInfantilYCuidadoDeLaGestante16a.required = true;
                SaludInfantilYCuidadoDeLaGestante17a.required = true;
                SaludInfantilYCuidadoDeLaGestante18a.required = true;

                FortalecimientoFechaPos.disabled = true;
                FortalecimientoGrupoPos.disabled = true;
                RelacionConOtrasPersonas1b.disabled = true;
                RelacionConOtrasPersonas2b.disabled = true;
                RelacionConOtrasPersonas3b.disabled = true;
                RelacionConOtrasPersonas4b.disabled = true;
                RelacionConOtrasPersonas5b.disabled = true;
                RelacionConOtrasPersonas6b.disabled = true;
                RelacionConOtrasPersonas7b.disabled = true;
                ActividadFisica1b.disabled = true;
                ActividadFisica2b.disabled = true;
                ActividadFisica3b.disabled = true;
                nutricion1b.disabled = true;
                nutricion2b.disabled = true;
                nutricion3b.disabled = true;
                nutricion4b.disabled = true;
                SaludSexual1b.disabled = true;
                SaludSexua12b.disabled = true;
                SaludSexual3b.disabled = true;
                SaludSexual4b.disabled = true;
                SaludAmbiental1b.disabled = true;
                SaludAmbiental2b.disabled = true;
                SaludAmbiental3b.disabled = true;
                SaludAuditivaComunicativa1b.disabled = true;
                SaludAuditivaComunicativa2b.disabled = true;
                SaludAuditivaComunicativa3b.disabled = true;
                SaludVisual1b.disabled = true;
                SaludVisual2b.disabled = true;
                SaludMental1b.disabled = true;
                SaludMental2b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante1b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante2b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante3b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante4b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante5b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante6b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante7b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante8b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante9b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante10b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante11b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante12b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante13b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante14b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante15b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante16b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante17b.disabled = true;
                SaludInfantilYCuidadoDeLaGestante18b.disabled = true;
                FortalecimientoPercepcion1.disabled = true;
                FortalecimientoPercepcion2.disabled = true;
                FortalecimientoPercepcion3.disabled = true;
                FortalecimientoPercepcion4.disabled = true;
                FortalecimientoPercepcion5.disabled = true;
                FortalecimientoPercepcion6.disabled = true;

                FortalecimientoFechaPos.required = false;
                FortalecimientoGrupoPos.required = false;
                RelacionConOtrasPersonas1b.required = false;
                RelacionConOtrasPersonas2b.required = false;
                RelacionConOtrasPersonas3b.required = false;
                RelacionConOtrasPersonas4b.required = false;
                RelacionConOtrasPersonas5b.required = false;
                RelacionConOtrasPersonas6b.required = false;
                RelacionConOtrasPersonas7b.required = false;
                ActividadFisica1b.required = false;
                ActividadFisica2b.required = false;
                ActividadFisica3b.required = false;
                nutricion1b.required = false;
                nutricion2b.required = false;
                nutricion3b.required = false;
                nutricion4b.required = false;
                SaludSexual1b.required = false;
                SaludSexua12b.required = false;
                SaludSexual3b.required = false;
                SaludSexual4b.required = false;
                SaludAmbiental1b.required = false;
                SaludAmbiental2b.required = false;
                SaludAmbiental3b.required = false;
                SaludAuditivaComunicativa1b.required = false;
                SaludAuditivaComunicativa2b.required = false;
                SaludAuditivaComunicativa3b.required = false;
                SaludVisual1b.required = false;
                SaludVisual2b.required = false;
                SaludMental1b.required = false;
                SaludMental2b.required = false;
                SaludInfantilYCuidadoDeLaGestante1b.required = false;
                SaludInfantilYCuidadoDeLaGestante2b.required = false;
                SaludInfantilYCuidadoDeLaGestante3b.required = false;
                SaludInfantilYCuidadoDeLaGestante4b.required = false;
                SaludInfantilYCuidadoDeLaGestante5b.required = false;
                SaludInfantilYCuidadoDeLaGestante6b.required = false;
                SaludInfantilYCuidadoDeLaGestante7b.required = false;
                SaludInfantilYCuidadoDeLaGestante8b.required = false;
                SaludInfantilYCuidadoDeLaGestante9b.required = false;
                SaludInfantilYCuidadoDeLaGestante10b.required = false;
                SaludInfantilYCuidadoDeLaGestante11b.required = false;
                SaludInfantilYCuidadoDeLaGestante12b.required = false;
                SaludInfantilYCuidadoDeLaGestante13b.required = false;
                SaludInfantilYCuidadoDeLaGestante14b.required = false;
                SaludInfantilYCuidadoDeLaGestante15b.required = false;
                SaludInfantilYCuidadoDeLaGestante16b.required = false;
                SaludInfantilYCuidadoDeLaGestante17b.required = false;
                SaludInfantilYCuidadoDeLaGestante18b.required = false;
                FortalecimientoPercepcion1.required = false;
                FortalecimientoPercepcion2.required = false;
                FortalecimientoPercepcion3.required = false;
                FortalecimientoPercepcion4.required = false;
                FortalecimientoPercepcion5.required = false;
                FortalecimientoPercepcion6.required = false;
            } else if (FortalecimientoTest.value == "Pos-test") {
                FortalecimientoFechaPre.disabled = true;
                FortalecimientoGrupoPre.disabled = true;
                RelacionConOtrasPersonas1a.disabled = true;
                RelacionConOtrasPersonas2a.disabled = true;
                RelacionConOtrasPersonas3a.disabled = true;
                RelacionConOtrasPersonas4a.disabled = true;
                RelacionConOtrasPersonas5a.disabled = true;
                RelacionConOtrasPersonas6a.disabled = true;
                RelacionConOtrasPersonas7a.disabled = true;
                ActividadFisica1a.disabled = true;
                ActividadFisica2a.disabled = true;
                ActividadFisica3a.disabled = true;
                nutricion1a.disabled = true;
                nutricion2a.disabled = true;
                nutricion3a.disabled = true;
                nutricion4a.disabled = true;
                SaludSexual1a.disabled = true;
                SaludSexua12a.disabled = true;
                SaludSexual3a.disabled = true;
                SaludSexual4a.disabled = true;
                SaludAmbiental1a.disabled = true;
                SaludAmbiental2a.disabled = true;
                SaludAmbiental3a.disabled = true;
                SaludAuditivaComunicativa1a.disabled = true;
                SaludAuditivaComunicativa2a.disabled = true;
                SaludAuditivaComunicativa3a.disabled = true;
                SaludVisual1a.disabled = true;
                SaludVisual2a.disabled = true;
                SaludMental1a.disabled = true;
                SaludMental2a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante1a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante2a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante3a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante4a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante5a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante6a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante7a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante8a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante9a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante10a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante11a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante12a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante13a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante14a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante15a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante16a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante17a.disabled = true;
                SaludInfantilYCuidadoDeLaGestante18a.disabled = true;

                FortalecimientoFechaPre.required = true;
                FortalecimientoGrupoPre.required = true;
                RelacionConOtrasPersonas1a.required = true;
                RelacionConOtrasPersonas2a.required = true;
                RelacionConOtrasPersonas3a.required = true;
                RelacionConOtrasPersonas4a.required = true;
                RelacionConOtrasPersonas5a.required = true;
                RelacionConOtrasPersonas6a.required = true;
                RelacionConOtrasPersonas7a.required = true;
                ActividadFisica1a.required = true;
                ActividadFisica2a.required = true;
                ActividadFisica3a.required = true;
                nutricion1a.required = true;
                nutricion2a.required = true;
                nutricion3a.required = true;
                nutricion4a.required = true;
                SaludSexual1a.required = true;
                SaludSexua12a.required = true;
                SaludSexual3a.required = true;
                SaludSexual4a.required = true;
                SaludAmbiental1a.required = true;
                SaludAmbiental2a.required = true;
                SaludAmbiental3a.required = true;
                SaludAuditivaComunicativa1a.required = true;
                SaludAuditivaComunicativa2a.required = true;
                SaludAuditivaComunicativa3a.required = true;
                SaludVisual1a.required = true;
                SaludVisual2a.required = true;
                SaludMental1a.required = true;
                SaludMental2a.required = true;
                SaludInfantilYCuidadoDeLaGestante1a.required = true;
                SaludInfantilYCuidadoDeLaGestante2a.required = true;
                SaludInfantilYCuidadoDeLaGestante3a.required = true;
                SaludInfantilYCuidadoDeLaGestante4a.required = true;
                SaludInfantilYCuidadoDeLaGestante5a.required = true;
                SaludInfantilYCuidadoDeLaGestante6a.required = true;
                SaludInfantilYCuidadoDeLaGestante7a.required = true;
                SaludInfantilYCuidadoDeLaGestante8a.required = true;
                SaludInfantilYCuidadoDeLaGestante9a.required = true;
                SaludInfantilYCuidadoDeLaGestante10a.required = true;
                SaludInfantilYCuidadoDeLaGestante11a.required = true;
                SaludInfantilYCuidadoDeLaGestante12a.required = true;
                SaludInfantilYCuidadoDeLaGestante13a.required = true;
                SaludInfantilYCuidadoDeLaGestante14a.required = true;
                SaludInfantilYCuidadoDeLaGestante15a.required = true;
                SaludInfantilYCuidadoDeLaGestante16a.required = true;
                SaludInfantilYCuidadoDeLaGestante17a.required = true;
                SaludInfantilYCuidadoDeLaGestante18a.required = true;

                FortalecimientoFechaPos.disabled = false;
                FortalecimientoGrupoPos.disabled = false;
                RelacionConOtrasPersonas1b.disabled = false;
                RelacionConOtrasPersonas2b.disabled = false;
                RelacionConOtrasPersonas3b.disabled = false;
                RelacionConOtrasPersonas4b.disabled = false;
                RelacionConOtrasPersonas5b.disabled = false;
                RelacionConOtrasPersonas6b.disabled = false;
                RelacionConOtrasPersonas7b.disabled = false;
                ActividadFisica1b.disabled = false;
                ActividadFisica2b.disabled = false;
                ActividadFisica3b.disabled = false;
                nutricion1b.disabled = false;
                nutricion2b.disabled = false;
                nutricion3b.disabled = false;
                nutricion4b.disabled = false;
                SaludSexual1b.disabled = false;
                SaludSexua12b.disabled = false;
                SaludSexual3b.disabled = false;
                SaludSexual4b.disabled = false;
                SaludAmbiental1b.disabled = false;
                SaludAmbiental2b.disabled = false;
                SaludAmbiental3b.disabled = false;
                SaludAuditivaComunicativa1b.disabled = false;
                SaludAuditivaComunicativa2b.disabled = false;
                SaludAuditivaComunicativa3b.disabled = false;
                SaludVisual1b.disabled = false;
                SaludVisual2b.disabled = false;
                SaludMental1b.disabled = false;
                SaludMental2b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante1b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante2b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante3b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante4b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante5b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante6b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante7b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante8b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante9b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante10b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante11b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante12b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante13b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante14b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante15b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante16b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante17b.disabled = false;
                SaludInfantilYCuidadoDeLaGestante18b.disabled = false;
                FortalecimientoPercepcion1.disabled = false;
                FortalecimientoPercepcion2.disabled = false;
                FortalecimientoPercepcion3.disabled = false;
                FortalecimientoPercepcion4.disabled = false;
                FortalecimientoPercepcion5.disabled = false;
                FortalecimientoPercepcion6.disabled = false;

                FortalecimientoFechaPos.required = true;
                FortalecimientoGrupoPos.required = true;
                RelacionConOtrasPersonas1b.required = true;
                RelacionConOtrasPersonas2b.required = true;
                RelacionConOtrasPersonas3b.required = true;
                RelacionConOtrasPersonas4b.required = true;
                RelacionConOtrasPersonas5b.required = true;
                RelacionConOtrasPersonas6b.required = true;
                RelacionConOtrasPersonas7b.required = true;
                ActividadFisica1b.required = true;
                ActividadFisica2b.required = true;
                ActividadFisica3b.required = true;
                nutricion1b.required = true;
                nutricion2b.required = true;
                nutricion3b.required = true;
                nutricion4b.required = true;
                SaludSexual1b.required = true;
                SaludSexua12b.required = true;
                SaludSexual3b.required = true;
                SaludSexual4b.required = true;
                SaludAmbiental1b.required = true;
                SaludAmbiental2b.required = true;
                SaludAmbiental3b.required = true;
                SaludAuditivaComunicativa1b.required = true;
                SaludAuditivaComunicativa2b.required = true;
                SaludAuditivaComunicativa3b.required = true;
                SaludVisual1b.required = true;
                SaludVisual2b.required = true;
                SaludMental1b.required = true;
                SaludMental2b.required = true;
                SaludInfantilYCuidadoDeLaGestante1b.required = true;
                SaludInfantilYCuidadoDeLaGestante2b.required = true;
                SaludInfantilYCuidadoDeLaGestante3b.required = true;
                SaludInfantilYCuidadoDeLaGestante4b.required = true;
                SaludInfantilYCuidadoDeLaGestante5b.required = true;
                SaludInfantilYCuidadoDeLaGestante6b.required = true;
                SaludInfantilYCuidadoDeLaGestante7b.required = true;
                SaludInfantilYCuidadoDeLaGestante8b.required = true;
                SaludInfantilYCuidadoDeLaGestante9b.required = true;
                SaludInfantilYCuidadoDeLaGestante10b.required = true;
                SaludInfantilYCuidadoDeLaGestante11b.required = true;
                SaludInfantilYCuidadoDeLaGestante12b.required = true;
                SaludInfantilYCuidadoDeLaGestante13b.required = true;
                SaludInfantilYCuidadoDeLaGestante14b.required = true;
                SaludInfantilYCuidadoDeLaGestante15b.required = true;
                SaludInfantilYCuidadoDeLaGestante16b.required = true;
                SaludInfantilYCuidadoDeLaGestante17b.required = true;
                SaludInfantilYCuidadoDeLaGestante18b.required = true;
                FortalecimientoPercepcion1.required = true;
                FortalecimientoPercepcion2.required = true;
                FortalecimientoPercepcion3.required = true;
                FortalecimientoPercepcion4.required = true;
                FortalecimientoPercepcion5.required = true;
                FortalecimientoPercepcion6.required = true;

                switch (true) {
                    case FortalecimientoGrupoPre.value ==
                    "1. Salud materno - infantil - AIEPI Comunitario":
                        FortalecimientoGrupoPos.value =
                            "1. Salud materno - infantil - AIEPI Comunitario";
                        break;
                    case FortalecimientoGrupoPre.value ==
                    "2. Salud materno - infantil - GALM":
                        FortalecimientoGrupoPos.value =
                            "2. Salud materno - infantil - GALM";
                        break;
                    case FortalecimientoGrupoPre.value ==
                    "3. Seguridad Alimentaria Nutricional":
                        FortalecimientoGrupoPos.value =
                            "3. Seguridad Alimentaria Nutricional";
                        break;
                    case FortalecimientoGrupoPre.value ==
                    "4. Acciones de promoción para el cuidado colectivo de la salud y prevención de condiciones crónicas":
                        FortalecimientoGrupoPos.value =
                            "4. Acciones de promoción para el cuidado colectivo de la salud y prevención de condiciones crónicas";
                        break;
                    case FortalecimientoGrupoPre.value ==
                    "5. Promociòn de la Salud Sexual y salud reproductiva":
                        FortalecimientoGrupoPos.value = "6. Promociòn de la Salud mental";
                        break;
                    case FortalecimientoGrupoPre.value ==
                    "1. Salud materno - infantil - AIEPI Comunitario":
                        FortalecimientoGrupoPos.value = "6. Promociòn de la Salud mental";
                        break;

                    default:
                        break;
                }
            }
        });
    } catch (error) {}
} catch (error) {}

//FIN BLOQUE FORTALECIMIENTO

//BLOQUE ACONDICIONAMIENTO FISICO
//*******************----------------------++++++++++++++++++++++++++++++ */
try {
    // let AcondicionamientoFisicoFinal1 =
    //   document.querySelector("#valorControl10273");
    // let AcondicionamientoFisicoFinal2 =
    //   document.querySelector("#valorControl10274");
    // AcondicionamientoFisicoFinal1.required = true;
    // AcondicionamientoFisicoFinal2.required = true;
} catch (error) {}

//CIERRE BLOQUE ACONDICIONAMIENTO FISICO

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//CALDAS

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
try {} catch (error) {}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

/////////////////////////////////////////////////////
////////////////////////////                          CUIDARTE
/////////////////////////////////////////////////////
try {
    ///(Aplica para componente105) Nombre completo (.)

    let NombreApellidoCuidarte = document.querySelector("#valorControl8372");
    validarNombreApellido(NombreApellidoCuidarte);
    NombreApellidoCuidarte.addEventListener("input", function() {
        validarNombreApellido(NombreApellidoCuidarte);
    });
} catch (error) {}

/////////////////////////////////////////////////////
////////////////////////////                CIERRE    CUIDARTE
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
////////////////////////////                          FICHA_CAMI
/////////////////////////////////////////////////////

try {
    let NumeroDocumentoCAMI = document.querySelector("#valorControl10252");
    LongitudNumeroDocumento(NumeroDocumentoCAMI);
    NumeroDocumentoCAMI.addEventListener("change", function() {
        LongitudNumeroDocumento(NumeroDocumentoCAMI);
    });

    let NombreCompletoCAMI = document.querySelector("#valorControl10326");
    validarNombreApellido(NombreCompletoCAMI);
    NombreCompletoCAMI.addEventListener("change", function() {
        validarNombreApellido(NombreCompletoCAMI);
    });
    let NacionalidadCAMI = document.querySelector("#valorControl10261");
    let TipodocumentoCAMI = document.querySelector("#valorControl10251");
    TipodocumentoCAMI.addEventListener("change", function() {
        nacionalidadConTipoDocumento(TipodocumentoCAMI, NacionalidadCAMI);
    });
} catch (error) {}
/////////////////////////////////////////////////////
////////////////////////////                          CIERRE_FICHA_CAMI
/////////////////////////////////////////////////////

//-*-*--**-*-****+*+-*+*+-*+-*+-*+-*+*+*+-*+*+*+*+************************************************************************************************************************************************************ */

// Adicionales

try {
    // let AjustePlaca = document.querySelector("#valorControl9934");
    // // Genera un número aleatorio entre 0 y 99 (inclusive)
    // function generarNumeroAleatorio() {
    //   // Math.random() devuelve un número decimal entre 0 (inclusive) y 1 (exclusivo)
    //   // Multiplicamos por 100 para obtener un número entre 0 (inclusive) y 100 (exclusivo)
    //   let numeroAleatorio = Math.random() * 99;
    //   // Utilizamos Math.floor() para redondear hacia abajo y obtener un número entero
    //   numeroAleatorio = Math.floor(numeroAleatorio);
    //   // Si el número es menor a 10, le añadimos un 0 al principio para asegurarnos de tener dos dígitos
    //   if (numeroAleatorio < 10) {
    //     numeroAleatorio = "0" + numeroAleatorio;
    //   }
    //   return numeroAleatorio;
    // }
    // // Ejemplo de uso
    // let numeroGenerado = generarNumeroAleatorio();
    //console.log(numeroGenerado);
    // //                 ******************* -      dx MAPS
    // let MAPS1dx1enfermeria = document.querySelector("#valorControl9980");
    // var bloqueinferior = document.querySelector("#formularioNuevoFormato");
    // let botonregresar = document.querySelector(
    //   "#main_body > div > div > main > div > div > div > div.panel-heading > div > div.col-md-2 > table > tbody > tr > td > form > button"
    // );
    // botonregresar.id = "RegresarB";
    // MAPS1dx1enfermeria.checked = true;
    // MAPS1dx1enfermeria.value = "1";
    /*
      var contenedorParteInferior = document.getElementById("bloqueinferior");
      contenedorParteInferior.appendChild(botonregresar);
    //   */
    // MAPS1dx1enfermeria.focus();
    // setTimeout(function () {
    //   document.getElementById("RegresarB").click();
    // }, 1150);
    // setTimeout(function () {
    //   document.getElementById("botonActualizarInformacion").click();
    // }, 1000);
    // let MAPS1AlertaLGTBI = document.querySelector("#valorControl9966");
    // MAPS1AlertaLGTBI.value = "2611";
    // if (AjustePlacaMAPS.value == "") {
    //   AjustePlacaMAPS.style.backgroundColor = colorRojo;
    //   AjustePlacaMAPS.value = numeroGenerado;
    // }
    //   let AcondicionamientoFisicoFinal_1 =
    //     document.querySelector("#valorControl10273");
    //   let AcondicionamientoFisicoFinal_2 =
    //     document.querySelector("#valorControl10274");
    //   if (AcondicionamientoFisicoFinal_1.value == "") {
    //     AcondicionamientoFisicoFinal_1.style.backgroundColor = colorRojo;
    //     AcondicionamientoFisicoFinal_1.value = "SI";
    //   }
    //   if (AcondicionamientoFisicoFinal_2.value == "") {
    //     AcondicionamientoFisicoFinal_2.style.backgroundColor = colorRojo;
    //     AcondicionamientoFisicoFinal_2.value = "SI";
    //   }
} catch (error) {}

document.addEventListener('DOMContentLoaded', function () {
    // Detectar si hay un SweetAlert modal abierto y aplicar la configuración
    Swal.update({
      allowOutsideClick: false
    });
  });


// =============================GUARDAR REGISTRO SDS ===================================

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