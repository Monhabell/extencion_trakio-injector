try {

    // mejora de diseño app
    nav = document.querySelector("#sidebar > div")
    nav.style.backgroundColor = '#17202A'
    nav.style.color = '#fff'

    menuHogar = document.querySelector("#sidebar > div > div.sidebar-menu > ul > li:nth-child(2) > a")
    menuHogar.style.color = '#ffff'
    menuHogar.style.backgroundColor = '#6E2C00'

    desplsgableHogar = document.querySelector("#sidebar > div > div.sidebar-menu > ul > li.sidebar-dropdown.active > div")
    desplsgableHogar.style.color = '#fff'
    desplsgableHogar.style.backgroundColor = '#17202A';

    fondo = document.querySelector("#main_body")
    fondo.style.backgroundColor = '#17202A'

} catch (error) {

}

try {
    document.querySelector("#valorControl10900").required = true;
    let logo = document.querySelector("#sidebar > div > div.sidebar-brand.logo_blanco");
    logo.style.backgroundColor = "#B1F7A9";
    logo.style.color = "#000";
    logo.innerHTML = "<h3>CODE HOGAR</h3>";

    fondo = document.querySelector("#formularioNuevoFormato > div:nth-child(14)")
    fondo.style.backgroundColor = '#EBEBEB '
    const input = document.querySelector("#valorControl11127");
    input.style.padding = "10px";
    input.style.border = "1px solid #ccc";
    input.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
} catch (error10) {

}
try { // caracterizacion individuos


    sexo()
    document.querySelector("#valorControl11134").addEventListener('change', sexo);

    function sexo() {
        console.log("individios")
            //ingresarProductividad()
        const sexo = document.querySelector("#valorControl11134").value;
        console.log("sexo:" + sexo)
        switch (sexo) {
            case '67':
                genero = document.querySelector("#valorControl11135");
                genero.value = '70'; // masculino 
                genero.style.backgroundColor = '#B1F7A9';
                document.querySelector("#valorControl11142").disabled = true
                document.querySelector("#valorControl11136").disabled = true
                var alertas_con_mujeres = document.querySelector("#valorControl11210");
                var opcionDeseada = "32- No aplica";

                // Itera a través de las opciones y oculta las que no coincidan con "No aplica"
                for (var i = 0; i < alertas_con_mujeres.options.length; i++) {
                    var option = alertas_con_mujeres.options[i];

                    if (option.text !== opcionDeseada) {
                        option.style.display = "none"; // Oculta las opciones que no coinciden
                    }
                }

                // Establece "No aplica" como la opción seleccionada
                for (var i = 0; i < alertas_con_mujeres.options.length; i++) {
                    var option = alertas_con_mujeres.options[i];
                    option.selected = false;

                    if (option.text === opcionDeseada) {
                        option.selected = true;
                        break;
                    }
                }

                var alertas_con_mujeres2 = document.querySelector("#valorControl11211");
                var opcionDeseada2 = "32- No aplica";

                // Itera a través de las opciones y oculta las que no coincidan con "No aplica"
                for (var i = 0; i < alertas_con_mujeres2.options.length; i++) {
                    var option = alertas_con_mujeres2.options[i];
                    if (option.text !== opcionDeseada2) {
                        option.style.display = "none"; // Oculta las opciones que no coinciden
                    }
                }

                // Establece "No aplica" como la opción seleccionada
                for (var i = 0; i < alertas_con_mujeres2.options.length; i++) {
                    var option = alertas_con_mujeres2.options[i];
                    option.selected = false;

                    if (option.text === opcionDeseada2) {
                        option.selected = true;
                        break;
                    }
                }

                break;
            case '68':
                console.log("mujer ")
                genero = document.querySelector("#valorControl11135")
                genero.value = '71'
                genero.style.backgroundColor = '#B1F7A9'

                var alertas_con_mujeres = document.querySelector("#valorControl11210");

                // Itera a través de las opciones y elimina el estilo "display: none"
                for (var i = 0; i < alertas_con_mujeres.options.length; i++) {
                    var option = alertas_con_mujeres.options[i];
                    option.style.display = ""; // Elimina el estilo "display: none"
                }

                var alertas_con_mujeres2 = document.querySelector("#valorControl11211");

                // Itera a través de las opciones y elimina el estilo "display: none"
                for (var i = 0; i < alertas_con_mujeres2.options.length; i++) {
                    var option = alertas_con_mujeres2.options[i];
                    option.style.display = ""; // Elimina el estilo "display: none"
                }

                break;
            case '69':
                genero = document.querySelector("#valorControl11135")
                genero.value = '72'
                genero.style.backgroundColor = '#B1F7A9'
                break;
        }
    };


    var inputElementTalla = document.getElementById('valorControl11169');
    inputElementTalla.type = 'number';

    var desviacionEstandar = document.getElementById('valorControl11173');
    desviacionEstandar.type = 'number';

    // Función para calcular el IMC
    function calcularIMC() {
        var peso = document.querySelector("#valorControl11168").value;
        var talla = document.querySelector("#valorControl11169").value;

        if (talla > 220 || talla < 45) {
            ResImc2 = document.querySelector("#valorControl11169")
            ResImc2.style.backgroundColor = '#F7A9A9';
            document.getElementById('botonActualizarInformacion').disabled = true
        } else {
            ResImc2 = document.querySelector("#valorControl11169")
            ResImc2.style.backgroundColor = '#B1F7A9';
            document.getElementById('botonActualizarInformacion').disabled = false
        }

        // Verificamos que los valores de peso y talla no sean vacíos
        if (peso && talla) {
            // Convertimos los valores de texto a números
            peso = parseFloat(peso);
            talla = parseFloat(talla);

            // Convertimos la talla a metros (si está en centímetros)
            if (talla > 3) {
                talla = talla / 100; // Suponemos que la talla está en centímetros
            }

            // Calculamos el IMC
            var imc = peso / (talla * talla);
            imc = imc.toFixed(2);
            // Mostramos el resultado del IMC
            ResImc = document.querySelector("#valorControl11174")
            ResImc.value = imc
            ResImc.style.backgroundColor = '#B1F7A9';

        } else {

        }
    }

    // Agregar eventos de cambio a los campos de peso y talla
    document.querySelector("#valorControl11168").addEventListener('change', calcularIMC);
    document.querySelector("#valorControl11169").addEventListener('change', calcularIMC);



    function restaurarOcupacion() {
        var Ocupacion = document.getElementById('valorControl11148');
        Ocupacion.innerHTML = ''; // Elimina todas las opciones actuales

        // Agregar las opciones originales de Ocupación
        var opcionesOcupacion = [
            { value: "900", text: "1- Trabajo formal" },
            { value: "901", text: "2- Trabajo informal" },
            { value: "902", text: "3- Estudiante" },
            { value: "903", text: "4- Oficios del hogar" },
            { value: "904", text: "5- Desempleado(a)" },
            { value: "905", text: "6- Pensionado(a)" },
            { value: "906", text: "7- Madre comunitaria" },
            { value: "907", text: "8- Cesante" },
            { value: "908", text: "9- Empleado(a)" },
            { value: "1061", text: "10- Incapacitado permanente para trabajar" },
            { value: "1062", text: "11- Ninguno" },
            { value: "1063", text: "12- No aplica" },
            { value: "1064", text: "13- Cuidador de persona con discapacidad" },
            { value: "1065", text: "14- Cuidador de persona con dependencia funcional" },
            { value: "1676", text: "15- Cuidador de persona con discapacidad psicosocial" },
            { value: "1712", text: "16- Persona al cuidado de menores" },
            { value: "1713", text: "18- Rol de proveedor" },
            { value: "2413", text: "17-Cuidador de persona mayor" }
        ];

        opcionesOcupacion.forEach(function(opcion) {
            var option = document.createElement("option");
            option.value = opcion.value;
            option.text = opcion.text;
            Ocupacion.appendChild(option);
        });
    }




    // Función para restaurar las opciones originales de Vinculo
    function restaurarVinculo() {
        var Vinculo = document.getElementById('valorControl11823');
        Vinculo.innerHTML = ''; // Elimina todas las opciones actuales

        // Agregar las opciones originales de Vinculo
        var opcionesVinculo = [
            { value: "", text: "Seleccione" },
            { value: "1049", text: "1- Jefe del hogar" },
            { value: "1050", text: "2- Cónyuge" },
            { value: "1051", text: "3- Hijo(a)" },
            { value: "1052", text: "4- Hijastro(a)" },
            { value: "1053", text: "5- Nieto(a)" },
            { value: "1054", text: "6- Nuera/yerno" },
            { value: "1055", text: "7- Padre / madre" },
            { value: "1056", text: "8- Hermano(a)" },
            { value: "1057", text: "9- Abuelo(a)" },
            { value: "1058", text: "10- Otro pariente" },
            { value: "1059", text: "11- No parientes" },
            { value: "1060", text: "12- Familia" },
            // Agregar más opciones según sea necesario
        ];

        opcionesVinculo.forEach(function(opcion) {
            var option = document.createElement("option");
            option.value = opcion.value;
            option.text = opcion.text;
            Vinculo.appendChild(option);
        });
    }


    // segun tipo de documento el campo numero de documento se coloca en numero o en text 
    let Docuento = document.querySelector("#valorControl11131")

    Docuento.addEventListener('change', function() {
        var tipoDocumento = Docuento.value;

        if (tipoDocumento == '66' || tipoDocumento == '65') {
            document.querySelector("#valorControl11132").type = 'text'
        } else {
            document.querySelector("#valorControl11132").type = 'number'
        }
    });





    const edad = document.querySelector("#valorControl11139").value
    const nacimiento = document.querySelector('#valorControl11138');
    nacimiento.addEventListener('change', momnetoDeVida);

    document.querySelector("#valorControl11141").setAttribute("readonly", "readonly")

    function momnetoDeVida() {
        const edad = document.querySelector("#valorControl11139").value
        console.log(edad);

        // TIPO DE DOCUMENTO SEGUN EDAD COLOMBIANOS
        documento = document.querySelector("#valorControl11133").value
        if (edad >= 0 && edad <= 6 && documento == 50) {
            RC = document.querySelector("#valorControl11131")
            RC.value = '60'
            RC.style.backgroundColor = '#B1F7A9'
        }
        if (edad >= 7 && edad <= 17 && documento == 50) {
            RC = document.querySelector("#valorControl11131")
            RC.value = '61'
            RC.style.backgroundColor = '#B1F7A9';
        }
        if (edad >= 18 && documento == 50) {
            RC = document.querySelector("#valorControl11131")
            RC.value = '59'
            RC.style.backgroundColor = '#B1F7A9';
        }

        if (edad >= 18) {
            var alertas_infancia = document.querySelector("#valorControl11207");
            var opcionDeseadaInfancia = "16- No aplica";

            // Itera a través de las opciones y oculta las que no coincidan con "No aplica"
            for (var i = 0; i < alertas_infancia.options.length; i++) {
                var option = alertas_infancia.options[i];

                if (option.text !== opcionDeseadaInfancia) {
                    option.style.display = "none"; // Oculta las opciones que no coinciden
                }
            }

            // Establece "No aplica" como la opción seleccionada
            for (var i = 0; i < alertas_infancia.options.length; i++) {
                var option = alertas_infancia.options[i];
                option.selected = false;

                if (option.text === opcionDeseadaInfancia) {
                    option.selected = true;
                    break;
                }
            }

            var alertas_infancia2 = document.querySelector("#valorControl11208");
            var opcionDeseadaInfancia2 = "16- No aplica";

            // Itera a través de las opciones y oculta las que no coincidan con "No aplica"
            for (var i = 0; i < alertas_infancia2.options.length; i++) {
                var option = alertas_infancia2.options[i];

                if (option.text !== opcionDeseadaInfancia2) {
                    option.style.display = "none"; // Oculta las opciones que no coinciden
                }
            }

            // Establece "No aplica" como la opción seleccionada
            for (var i = 0; i < alertas_infancia2.options.length; i++) {
                var option = alertas_infancia2.options[i];
                option.selected = false;

                if (option.text === opcionDeseadaInfancia2) {
                    option.selected = true;
                    break;
                }
            }
        } else {

            var alertas_infancia = document.querySelector("#valorControl11207");


            // Itera a través de las opciones y elimina el estilo "display: none"
            for (var i = 0; i < alertas_infancia.options.length; i++) {
                var option = alertas_infancia.options[i];
                option.style.display = ""; // Elimina el estilo "display: none"
            }

            var alertas_infancia2 = document.querySelector("#valorControl11208");


            // Itera a través de las opciones y elimina el estilo "display: none"
            for (var i = 0; i < alertas_infancia2.options.length; i++) {
                var option = alertas_infancia2.options[i];
                option.style.display = ""; // Elimina el estilo "display: none"
            }

        }

        // maximo de perimetro abdominal 
        document.querySelector("#valorControl11171").max = '200'
        document.querySelector("#valorControl11171").min = '50'

        // VALORES REQUERIDOS SEGUN LA EDAD
        if (edad >= 18) {
            //document.querySelector("#valorControl11171").required = true;
            document.querySelector("#valorControl11171").disabled = false;
        } else {
            //document.querySelector("#valorControl11171").required = false;
            document.querySelector("#valorControl11171").disabled = true;
        }
        if (edad >= 1 && edad <= 4) {
            document.querySelector("#valorControl11170").required = true;
            document.querySelector("#valorControl11170").disabled = false;
            document.querySelector("#valorControl11170").min = '11';
            document.querySelector("#valorControl11170").max = '18';


        } else {
            document.querySelector("#valorControl11170").required = false;
            document.querySelector("#valorControl11170").disabled = true;
        }

        // resticcion talla segun edad 
        if (edad >= 0 && edad <= 1) {
            document.getElementById('valorControl11169').max = '70' // talla
            document.getElementById('valorControl11169').min = '45' // talla 
            document.getElementById('valorControl11168').max = '12' // peso 
            document.getElementById('valorControl11168').min = '3' // peso 

        }

        if (edad >= 5 && edad <= 200) {
            document.getElementById('valorControl11169').max = '225' // talla
            document.getElementById('valorControl11169').min = '65' //talla
            document.getElementById('valorControl11168').max = '400' // peso 
            document.getElementById('valorControl11168').min = '3' // peso 


        }

        if (edad >= 2 && edad <= 4) {
            document.getElementById('valorControl11169').max = '120'
            document.getElementById('valorControl11169').min = '65'
            document.getElementById('valorControl11168').max = '25'
            document.getElementById('valorControl11168').min = '8'
        }

        // Ocupacion segun edad

        restaurarOcupacion();
        // Aplicar restricciones específicas de edad
        if (edad >= 0 && edad <= 1) {
            var Ocupacion = document.getElementById('valorControl11148');
            for (var i = Ocupacion.options.length - 1; i >= 0; i--) {
                var option = Ocupacion.options[i];
                if (option.value != "1063") {
                    Ocupacion.remove(i);
                }
            }
        }

        if (edad >= 2 && edad <= 13) {
            var Ocupacion = document.getElementById('valorControl11148');
            for (var i = Ocupacion.options.length - 1; i >= 0; i--) {
                var option = Ocupacion.options[i];
                if (option.value != "902" && option.value != "903" && option.value != "1062") {
                    Ocupacion.remove(i);
                }
            }
        }

        if (edad >= 14 && edad <= 79) {
            var Ocupacion = document.getElementById('valorControl11148');
            for (var i = Ocupacion.options.length - 1; i >= 0; i--) {
                var option = Ocupacion.options[i];
                if (option.value == "1063") {
                    Ocupacion.remove(i);
                }
            }
        }

        if (edad >= 80) {
            var Ocupacion = document.getElementById('valorControl11148');
            for (var i = Ocupacion.options.length - 1; i >= 0; i--) {
                var option2 = Ocupacion.options[i];
                if (option2.value != "1063") {
                    Ocupacion.remove(i);
                }
            }
        }

        restaurarVinculo();

        if (edad >= 0 && edad <= 13) {
            var Vinculo = document.getElementById('valorControl11823')
            var eliminarOpciones1 = true;

            if (eliminarOpciones1) {
                for (var i = Vinculo.options.length - 1; i >= 0; i--) {
                    var option3 = Vinculo.options[i];
                    if (option3.value != "1051" && option3.value != "1052" && option3.value != "1053" && option3.value != "1056" && option3.value != "1058" && option3.value != "1059" && option3.value != "1060") {
                        Vinculo.remove(i);
                    }
                }
            }
        }


        // AJUSTE MOMENTO DE VIDA SEGUN LA EDAD
        if (edad >= 0 && edad <= 5) {
            MV = document.querySelector("#valorControl11141")
            MV.value = '1. Primera Infancia'
            MV.style.backgroundColor = '#33F9FF';
            document.getElementById('valorControl11173').required = true
            document.getElementById('valorControl11174').disabled = true
        }


        if (edad >= 6 && edad <= 11) {
            MV = document.querySelector("#valorControl11141")
            MV.value = '2. Infancia'
            MV.style.backgroundColor = '#33F9FF';
            document.getElementById('valorControl11173').disabled = true
            document.getElementById('valorControl11174').required = true

        }
        if (edad >= 12 && edad <= 17) {
            MV = document.querySelector("#valorControl11141")
            MV.value = '3. Adolescencia'
            MV.style.backgroundColor = '#33F9FF';
            document.getElementById('valorControl11173').disabled = true
            document.getElementById('valorControl11174').required = true


        }
        if (edad >= 18 && edad <= 28) {
            MV = document.querySelector("#valorControl11141")
            MV.value = '4. Juventud'
            MV.style.backgroundColor = '#33F9FF';
            document.getElementById('valorControl11173').disabled = true
            document.getElementById('valorControl11174').required = true


        }

        if (edad >= 29 && edad <= 59) {
            MV = document.querySelector("#valorControl11141")
            MV.value = '5. Adultez'
            MV.style.backgroundColor = '#33F9FF';
            document.getElementById('valorControl11173').disabled = true
            document.getElementById('valorControl11174').required = true


        }

        if (edad >= 60 && edad <= 150) {
            MV = document.querySelector("#valorControl11141")
            MV.value = '6. Vejez'
            MV.style.backgroundColor = '#B1F7A9';
            document.getElementById('valorControl11173').disabled = true
            document.getElementById('valorControl11174').required = true


        }


        if (edad < 14) { // ESTADO CIVIL NO APLICA PARA MENORES DE 14
            ec = document.querySelector("#valorControl11137")
            ec.value = '78'
            ec.style.backgroundColor = '#B1F7A9'
        }

        if (edad >= 14) {
            const edadsuperiro = document.querySelector("#valorControl11137").value
            if (edadsuperiro == '78')
                ec = document.querySelector("#valorControl11137")
            ec.value = '73'
            ec.style.backgroundColor = '#B1F7A9'
        }

        if (edad <= 2 || edad >= 60) {
            document.querySelector("#valorControl11148").value = 1063;
        }

        // peso segun la edad




    }

    // verificar momento de vida 

    document.getElementById('valorControl11141').addEventListener('change', function() {
        const edad = document.querySelector("#valorControl11139").value;

        if (edad >= 0 && edad <= 5) {
            MV = document.querySelector("#valorControl11141").value
            if (MV == '1. Primera Infancia') {
                document.querySelector("#valorControl11141").style.backgroundColor = '#B1F7A9'
                document.getElementById('botonActualizarInformacion').disabled = false

            } else {
                document.querySelector("#valorControl11141").style.backgroundColor = '#F7A9A9'
                document.getElementById('botonActualizarInformacion').disabled = true

            }
        }


        if (edad >= 6 && edad <= 11) {
            MV = document.querySelector("#valorControl11141").value
            if (MV == '2. Infancia') {
                document.querySelector("#valorControl11141").style.backgroundColor = '#B1F7A9'
                document.getElementById('botonActualizarInformacion').disabled = false

            } else {
                document.querySelector("#valorControl11141").style.backgroundColor = '#F7A9A9'
                document.getElementById('botonActualizarInformacion').disabled = true

            }
        }
        if (edad >= 12 && edad <= 17) {
            MV = document.querySelector("#valorControl11141").value
            if (MV == '3. Adolescencia') {
                document.querySelector("#valorControl11141").style.backgroundColor = '#B1F7A9'
                document.getElementById('botonActualizarInformacion').disabled = false

            } else {
                document.querySelector("#valorControl11141").style.backgroundColor = '#F7A9A9'
                document.getElementById('botonActualizarInformacion').disabled = true

            }
        }

        if (edad >= 18 && edad <= 28) {

            MV = document.querySelector("#valorControl11141").value
            if (MV == '4. Juventud') {
                document.querySelector("#valorControl11141").style.backgroundColor = '#B1F7A9'
                document.getElementById('botonActualizarInformacion').disabled = false

            } else {
                document.querySelector("#valorControl11141").style.backgroundColor = '#F7A9A9'
                document.getElementById('botonActualizarInformacion').disabled = true

            }
        }

        if (edad >= 29 && edad <= 59) {
            MV = document.querySelector("#valorControl11141").value
            if (MV == '5. Adultez') {
                document.querySelector("#valorControl11141").style.backgroundColor = '#B1F7A9'
                document.getElementById('botonActualizarInformacion').disabled = false


            } else {
                document.querySelector("#valorControl11141").style.backgroundColor = '#F7A9A9'
                document.getElementById('botonActualizarInformacion').disabled = true

            }

        }

        if (edad >= 60 && edad <= 150) {
            MV = document.querySelector("#valorControl11141").value
            if (MV == '6. Vejez') {
                document.querySelector("#valorControl11141").style.backgroundColor = '#B1F7A9'
                document.getElementById('botonActualizarInformacion').disabled = false

            } else {
                document.querySelector("#valorControl11141").style.backgroundColor = '#F7A9A9'
                document.getElementById('botonActualizarInformacion').disabled = true

            }

        }
        // gestacion para mayores de 12 años 
        if (edad >= 0 && edad <= 12) {
            document.querySelector("#valorControl11142").disabled = true;
        }



    })

    document.querySelector("#valorControl11149").addEventListener('change', function() {
        cuidadorintegrante = document.querySelector("#valorControl11149").value;
        if (cuidadorintegrante == 'SI') {
            document.querySelector("#valorControl11150").required = true
            document.querySelector("#valorControl11150").min = '1'
            document.querySelector("#valorControl11150").disabled = false
        } else {
            document.querySelector("#valorControl11150").disabled = true
        }
    })

    document.querySelector("#valorControl11169").addEventListener('keypress', function(evt) {
        var tecla = event.key;
        if ([".", ",", "/", "-", "*", "+"].includes(tecla)) event.preventDefault();
    });

    document.querySelector("#valorControl11127").addEventListener('keypress', function(evt) {
        var tecla = event.key;
        if ([".", ",", "/", "-", "*", "+"].includes(tecla)) event.preventDefault();
    });

    document.querySelector("#valorControl11128").addEventListener('keypress', function(evt) {
        var tecla = event.key;
        if ([".", ",", "/", "-", "*", "+"].includes(tecla)) event.preventDefault();
    });
    document.querySelector("#valorControl11129").addEventListener('keypress', function(evt) {
        var tecla = event.key;
        if ([".", ",", "/", "-", "*", "+"].includes(tecla)) event.preventDefault();
    });
    document.querySelector("#valorControl11130").addEventListener('keypress', function(evt) {
        var tecla = event.key;
        if ([".", ",", "/", "-", "*", "+"].includes(tecla)) event.preventDefault();
    });



    document.querySelector("#valorControl11143").addEventListener('change', español);

    function español() {
        const etnia = document.querySelector("#valorControl11143").value;

        if (etnia != 84) {
            document.querySelector("#valorControl11144").required = true
            document.querySelector("#valorControl11145").value = 'SI';
            document.querySelector("#valorControl11144").disabled = false

        } else {
            document.querySelector("#valorControl11145").value = '';
            document.querySelector("#valorControl11144").disabled = true
            document.querySelector("#valorControl11144").required = false
        }

    }

    document.querySelector("#valorControl11131").addEventListener('change', nacionalidad);

    function nacionalidad() {
        const documento = document.querySelector("#valorControl11131").value;
        if (documento == '59' || documento == '60' || documento == '61' || documento == '62') {
            document.querySelector("#valorControl11133").value = 50;
        }
    }


    const campoFecha = document.querySelector("#valorControl11138");
    campoFecha.pattern = '[0-9]{2}/[0-9]{2}/[0-9]{4}';



    document.querySelector("#valorControl11146").addEventListener('change', discapacidad);

    function discapacidad() {
        const DisSelect = document.querySelector("#valorControl11146").value;

        if (DisSelect == 108) {
            document.querySelector("#valorControl11147").disabled = false
            document.querySelector("#valorControl11147").required = true
        } else {
            document.querySelector("#valorControl11147").disabled = true
        }
    }

    document.querySelector("#valorControl11148").addEventListener('change', cuidador);

    function cuidador() {
        const cuidadorR = document.querySelector("#valorControl11148").value;
        if (cuidadorR == 2413 || cuidadorR == 1712 || cuidadorR == 1676 || cuidadorR == 1065 || cuidadorR == 1064) {
            document.querySelector("#valorControl11149").disabled = false;
            document.querySelector("#valorControl11149").required = true;
            document.querySelector("#valorControl11152").required = true;
            document.querySelector("#valorControl11153").required = true;
            document.querySelector("#valorControl11154").required = true;
            document.querySelector("#valorControl11154").disabled = false
            document.querySelector("#valorControl11152").disabled = false;
            document.querySelector("#valorControl11153").disabled = false;
            document.querySelector("#valorControl11155").required = true;
            document.querySelector("#valorControl11155").disabled = false;
            document.querySelector("#valorControl11156").required = true;
            document.querySelector("#valorControl11156").disabled = false;
            document.querySelector("#valorControl11158").required = true;
            document.querySelector("#valorControl11158").disabled = false;
            document.querySelector("#valorControl11159").required = true;
            document.querySelector("#valorControl11159").disabled = false;
        } else {
            document.querySelector("#valorControl11149").disabled = true;
            document.querySelector("#valorControl11152").required = false;
            document.querySelector("#valorControl11153").required = false;
            document.querySelector("#valorControl11152").disabled = true;
            document.querySelector("#valorControl11153").disabled = true;
            document.querySelector("#valorControl11154").disabled = true;
            document.querySelector("#valorControl11155").disabled = true;
            document.querySelector("#valorControl11156").disabled = true;
            document.querySelector("#valorControl11158").disabled = true;
            document.querySelector("#valorControl11159").disabled = true;
        }

    }

    document.querySelector("#valorControl11149").addEventListener('change', residenteVivienda);

    function residenteVivienda() {
        const CuidaResidente = document.querySelector("#valorControl11149").value;
        if (CuidaResidente == 'SI') {
            document.querySelector("#valorControl11150").required = true;
        } else {
            document.querySelector("#valorControl11150").disabled = true;
        }
    }

    document.querySelector("#valorControl11168").setAttribute("max", 400);
    document.querySelector("#valorControl11168").setAttribute("min", 3);
    document.querySelector("#valorControl11170").setAttribute("min", 1);
    document.querySelector("#valorControl11174").setAttribute("min", 1);
    document.querySelector("#valorControl11175").setAttribute("min", 20);
    document.querySelector("#valorControl11175").setAttribute("max", 300);
    document.querySelector("#valorControl11176").setAttribute("min", 20);
    document.querySelector("#valorControl11176").setAttribute("max", 300);
    document.querySelector("#valorControl11177").setAttribute("max", 500);

    document.querySelector("#valorControl11168").addEventListener('change', peso);

    function peso() {
        const PesoFinal = document.querySelector("#valorControl11168").value;
        if (PesoFinal > 200) {
            document.querySelector("#valorControl11168").value = '';
            alert('El Peso no corresponde')
        }

    }



    document.querySelector("#valorControl11164").addEventListener('change', educativo);

    function educativo() {
        const descolarizado = document.querySelector("#valorControl11164").value;
        if (descolarizado == 2368) {
            document.querySelector("#valorControl11165").disabled = false;
            document.querySelector("#valorControl11165").required = true;
        } else {
            document.querySelector("#valorControl11165").disabled = true;
        }


    }

    document.querySelector("#valorControl11148").addEventListener('change', desempleado);

    function desempleado() {
        const Valdesempleado = document.querySelector("#valorControl11148").value;
        if (Valdesempleado == 904) {
            document.querySelector("#valorControl11166").disabled = false;
            document.querySelector("#valorControl11166").required = true;
        } else {
            document.querySelector("#valorControl11166").disabled = true;
        }
    }

    document.querySelector("#valorControl11161").addEventListener('change', noasegurado);

    function noasegurado() {
        const Nosegurado = document.querySelector("#valorControl11161").value;
        if (Nosegurado == 135) {
            document.querySelector("#valorControl11163").required = true;
            document.querySelector("#valorControl11163").disabled = false;
        } else {
            document.querySelector("#valorControl11163").disabled = true;
        }
    }
    document.querySelector("#valorControl11193\\[\\]").required = true;
    document.querySelector("#valorControl11194\\[\\]").required = true;
    document.querySelector("#valorControl11195").required = true;
    document.querySelector("#valorControl11196").required = true;

    document.querySelector("#valorControl11199").required = true;
    document.querySelector("#valorControl11200").required = true;
    document.querySelector("#valorControl11202\\[\\]").required = true;
    document.querySelector("#valorControl11205\\[\\]").required = true;
    document.querySelector("#valorControl11207").required = true;
    document.querySelector("#valorControl11208").required = true;
    document.querySelector("#valorControl11210").required = true;
    document.querySelector("#valorControl11211").required = true;

    var arrayIDRequerid = ["'#valorControl11195'", "'#valorControl11196'", "'#valorControl11197'", "'#valorControl11198'"];
    var arrayNoaplica = [2605, 2605, 2606, 2606];

    for (let x = 0; x < arrayIDRequerid.length; x++) {
        const element = arrayIDRequerid[x];
        const elemt2 = arrayNoaplica[x];
        console.log(element);
        console.log(element);

    }


} catch (error) { // Implementacion pag 1

    try {



        document.querySelector("#formularioNuevoFormato > div:nth-child(12) > div:nth-child(3)").classList.remove('col-md-3')
        document.querySelector("#formularioNuevoFormato > div:nth-child(12) > div:nth-child(3)").classList.add('col-12')
        document.querySelector("#formularioNuevoFormato > div:nth-child(12) > div.col-12 > table").style.width = '100%';
        document.querySelector("#valorControl8337").setAttribute('rows', '10')

        document.querySelector("#valorControl8331").pattern = '[0-9]{2}/[0-9]{2}/[0-9]{4}';
        document.querySelector("#valorControl8331").addEventListener('change', fechasVer)

        function fechasVer() {
            fechaIm = document.querySelector("#valorControl8331").value;
            if (fechaIm == '') {
                document.querySelector("#valorControl8333").required = false;
                document.querySelector("#valorControl8337").required = false;
                document.querySelector("#valorControl8337").required = false;

                document.querySelector("#valorControl8333").disabled = true;
                document.querySelector("#valorControl8337").disabled = true;
                document.querySelector("#valorControl8337").disabled = true;

            } else {
                document.querySelector("#valorControl8333").required = true;
                document.querySelector("#valorControl8337").required = true;
                document.querySelector("#valorControl8337").required = true;

                document.querySelector("#valorControl8333").disabled = false;
                document.querySelector("#valorControl8337").disabled = false;
                document.querySelector("#valorControl8337").disabled = false;
            }



            //ingresarProductividad()
            var verificar = document.querySelector("#valorControl8331").value;
            var verificarFechaCreacion = document.querySelector("#FechaIntervencion").value;
            var fechaComponentes1 = verificar.split("/");
            var dia1 = fechaComponentes1[0];
            var mes1 = fechaComponentes1[1];
            var año1 = fechaComponentes1[2];
            var fecha1 = new Date(año1, mes1, dia1);
            var diaFormateado1 = ('0' + fecha1.getDate()).slice(-2);
            var mesFormateado1 = ('0' + (fecha1.getMonth() + 1)).slice(-2);
            var añoFormateado1 = fecha1.getFullYear();

            var fechaFormateada1 = añoFormateado1 + '/' + mesFormateado1 + '/' + diaFormateado1;

            var fechaComponentes2 = verificarFechaCreacion.split("/");
            var dia2 = fechaComponentes2[0];
            var mes2 = fechaComponentes2[1];
            var año2 = fechaComponentes2[2];

            var fecha2 = new Date(año2, mes2, dia2);
            var diaFormateado2 = ('0' + fecha2.getDate()).slice(-2);
            var mesFormateado2 = ('0' + (fecha2.getMonth() + 1)).slice(-2);
            var añoFormateado2 = fecha2.getFullYear();

            var fechaFormateada2 = añoFormateado2 + '/' + mesFormateado2 + '/' + diaFormateado2;


            var fecha11 = new Date(fechaFormateada1);
            var fecha22 = new Date(fechaFormateada2);

            if (fecha11.getTime() < fecha22.getTime()) {
                console.log('error');
                alert('La fecha no puede ser menor');
                document.querySelector("#valorControl8331").value = '';

            } else if (fecha11.getTime() > fecha22.getTime()) {
                alert('La fecha no puede ser mayor');
                document.querySelector("#valorControl8331").value = '';
            } else {
                console.log('ok');
            }
        }



        document.querySelector("#valorControl4629").pattern = '[0-9]{2}/[0-9]{2}/[0-9]{4}'
        document.querySelector("#valorControl4629").addEventListener('change', fechasVer2)


        function fechasVer2() {

            fechaingresada = document.querySelector("#valorControl4629").value;
            if (fechaingresada == '') {
                document.querySelector("#valorControl4634").required = false;
                document.querySelector("#valorControl4637").required = false;
                document.querySelector("#valorControl8342").required = false;
                document.querySelector("#valorControl4634").disabled = true;
                document.querySelector("#valorControl4637").disabled = true;
                document.querySelector("#valorControl8342").disabled = true;
                document.querySelector("#valorControl4627").disabled = true;
                document.querySelector("#valorControl4627").disabled = true;
                document.querySelector("#valorControl4631").disabled = true;
                document.querySelector("#valorControl4635").disabled = true;
                document.querySelector("#valorControl4636").disabled = true;

            } else {
                document.querySelector("#valorControl4634").required = true;
                document.querySelector("#valorControl4637").required = true;
                document.querySelector("#valorControl8342").required = true;
                document.querySelector("#valorControl4634").disabled = false;
                document.querySelector("#valorControl4637").disabled = false;
                document.querySelector("#valorControl8342").disabled = false;
                document.querySelector("#valorControl4627").disabled = false;
                document.querySelector("#valorControl4627").disabled = false;
                document.querySelector("#valorControl4631").disabled = false;
                document.querySelector("#valorControl4635").disabled = false;
                document.querySelector("#valorControl4636").disabled = false;
            }


            //ingresarProductividad()
            var verificar = document.querySelector("#valorControl4629").value;
            var verificarFechaCreacion = document.querySelector("#FechaIntervencion").value;
            var fechaComponentes1 = verificar.split("/");
            var dia1 = fechaComponentes1[0];
            var mes1 = fechaComponentes1[1];
            var año1 = fechaComponentes1[2];
            var fecha1 = new Date(año1, mes1, dia1);
            var diaFormateado1 = ('0' + fecha1.getDate()).slice(-2);
            var mesFormateado1 = ('0' + (fecha1.getMonth() + 1)).slice(-2);
            var añoFormateado1 = fecha1.getFullYear();
            var fechaFormateada1 = añoFormateado1 + '/' + mesFormateado1 + '/' + diaFormateado1;
            var fechaComponentes2 = verificarFechaCreacion.split("/");
            var dia2 = fechaComponentes2[0];
            var mes2 = fechaComponentes2[1];
            var año2 = fechaComponentes2[2];
            var fecha2 = new Date(año2, mes2, dia2);
            var diaFormateado2 = ('0' + fecha2.getDate()).slice(-2);
            var mesFormateado2 = ('0' + (fecha2.getMonth() + 1)).slice(-2);
            var añoFormateado2 = fecha2.getFullYear();
            var fechaFormateada2 = añoFormateado2 + '/' + mesFormateado2 + '/' + diaFormateado2;
            var fecha11 = new Date(fechaFormateada1);
            var fecha22 = new Date(fechaFormateada2);
            if (fecha11.getTime() < fecha22.getTime()) {
                console.log('error');
                alert('La fecha no puede ser menor');
                document.querySelector("#valorControl4629").value = '';

            } else if (fecha11.getTime() > fecha22.getTime()) {
                alert('La fecha no puede ser mayor');
                document.querySelector("#valorControl4629").value = '';
            } else {
                console.log('ok');
            }
        }

        // fuera del sistema educativo
        document.querySelector("#valorControl11164").addEventListener('change', function() {
            NivelEducativo = document.querySelector("#valorControl11164").value;
            if (NivelEducativo == '2368') {
                document.querySelector("#valorControl11165").required = true;
                document.querySelector("#valorControl11165").disabled = false;
            } else {
                document.querySelector("#valorControl11165").disabled = true;
                document.querySelector("#valorControl11165").required = false;
            }
        })



    } catch (error) {



        try {
            document.querySelector("#formularioNuevoFormato > div:nth-child(12) > div:nth-child(1)").classList.remove('col-md-3')
            document.querySelector("#formularioNuevoFormato > div:nth-child(12) > div:nth-child(1)").classList.add('col-12')
            document.querySelector("#formularioNuevoFormato > div:nth-child(12) > div:nth-child(1) > table").style.width = '100%';
            document.querySelector("#valorControl2813").setAttribute('rows', '10')
            document.querySelector("#valorControl8194").required = true
            document.querySelector("#valorControl2813").required = true;
            document.querySelector("#valorControl8194").required = true;

        } catch (error) {
            try {

                document.querySelector("#valorPoblacionalFechaNacimiento").pattern = '[0-9]{4}/[0-9]{2}/[0-9]{2}'
                document.querySelector("#valorPoblacionalVinculoJefeHogar").required = false;
                document.querySelector("#valorPoblacionalAfiliacionSGSSS").required = false;
                document.querySelector("#valorPoblacionalNombreEAPB").required = false;
                document.querySelector("#valorPoblacionalNivelEducativo").required = false;

                document.querySelector("#valorPoblacionalEtnia").addEventListener('change', function() {
                    var etniaSC = document.querySelector("#valorPoblacionalEtnia").value
                    if (etniaSC == '84') {
                        document.querySelector("#valorPoblacionalPueblo").disabled = true;
                        document.querySelector("#valorPoblacionalPueblo").value = " "
                    } else {
                        document.querySelector("#valorPoblacionalPueblo").required = false
                        document.querySelector("#valorPoblacionalHablaEspanol").required = true;
                        document.querySelector("#valorPoblacionalPueblo").disabled = false;
                    }
                })

            } catch (error) {

            }
        }
    }
}

try {
    document.querySelector("#main_body > div > div > main > div > div > div > div.panel-body > table > tbody > tr:nth-child(1) > td:nth-child(1) > form > input[type=hidden]:nth-child(4)").type = ""
} catch (error3) {}

try {
    let bgError = "rgba(255, 50, 50, 0.4)";
    let bgSuccess = "rgba(50, 255, 50, 0.7)";
    const consecutivoTotal = document.querySelector("#Ficha_fic");

    if (consecutivoTotal.value == 0) {
        const fechaInput = document.querySelector("#FechaIntervencion");
        const consecutivo = document.querySelector("#Consecutivo_fic");
        const btnActualizar = document.querySelector("#botonActualizarInformacion");

        fechaInput.addEventListener("change", validarCampos);
        consecutivo.addEventListener("keyup", validarCampos);
        validarCampos();

        function validarCampos() {
            const fechaComponentes = fechaInput.value.split("/");
            const mes = parseInt(fechaComponentes[1]);
            const año = parseInt(fechaComponentes[2]);
            const valorConsecutivo = consecutivo.value;
            if (valorConsecutivo.startsWith("0")) {
                const consecutivoValido = consecutivo.value.length === 6
                const fechaValida = mes === 10 && año === 2024;
                if (consecutivoValido && fechaValida) {
                    toggleBtnActualizacion(true);
                    consecutivo.style.backgroundColor = bgSuccess;
                    fechaInput.style.backgroundColor = bgSuccess;
                    //console.log(validarEntrega())
                } else {
                    toggleBtnActualizacion(false);
                    consecutivo.style.backgroundColor = consecutivoValido ?
                        bgSuccess :
                        bgError;
                    fechaInput.style.backgroundColor = fechaValida ? bgSuccess : bgError;
                }
            } else if (parseInt(valorConsecutivo) >= 1) {
                const consecutivoValido = consecutivo.value.length === 5
                const fechaValida = mes === 7 && año === 2024;
                if (consecutivoValido && fechaValida) {
                    toggleBtnActualizacion(true);
                    consecutivo.style.backgroundColor = bgSuccess;
                    fechaInput.style.backgroundColor = bgSuccess;
                    //console.log(validarEntrega())
                } else {
                    toggleBtnActualizacion(false);
                    consecutivo.style.backgroundColor = consecutivoValido ?
                        bgSuccess :
                        bgError;
                    fechaInput.style.backgroundColor = fechaValida ? bgSuccess : bgError;
                }
            }

        }

        function toggleBtnActualizacion(estado) {
            btnActualizar.disabled = !estado;
        }

        function agregarInformacion() {
            validarCampos();
        }
    }

    function validarEntrega() {
        let consecutivo = document.querySelector("#Consecutivo_fic").value;
        let localidad = document.querySelector("#Ficha_fic").value;
        let entorno = document.querySelector("#Espacio_fic").value;

        let subRed = '1';
        let fichaCompleta = '101062681';
        console.log(fichaCompleta);

        fetch(`https://gesiapp.com.co/configuraciones/ReporteDigitado/consultaEntrega.php?fichaCompleta=101062681`)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                // Corrección: No es necesario usar '#' en getElementById
                const input = doc.getElementById('FichaSi').value;
                if (input == '1') {
                    console.log(input);
                }
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });
    }


} catch (error) {}

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
            "http://gesiaplicaciones.saludcapital.gov.co/GESI_sistemas/GESI_Form"
        ) {
            ResetCrono();
        } else if (
            urlActual.href ==
            "http://gesiaplicaciones.saludcapital.gov.co/GESI_sistemas/GESI_Form/formulario"
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
        let fechaIntervencion = document.querySelector("#FechaIntervencion").value;
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
                fechaInt: fechaInt
            },
            success: function(r) {
                console.log(r);
            },
        });
    }
} catch (error) {}

try {
    let TermFicha = document.querySelector("#main_body > div.swal2-container.swal2-center.swal2-shown > div > div.swal2-actions > button.swal2-confirm.swal2-styled");
    TermFicha.addEventListener('click', function() {
        console.log("Guardando")
        let Noficha = document.querySelector("#Ficha_fic").value;
        console.log(Noficha);
        var Nombre = document.querySelector("#main_body > div > div > main > div > div > div > div.panel-heading > div > div.col-md-10 > table > tbody > tr > td:nth-child(2) > b").textContent
        console.log(Nombre);
        const digitadas = new XMLHttpRequest();
        digitadas.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText)
            }
        };
        digitadas.open("GET", `https://gesiapp.com.co/configuraciones/ReporteDigitado/inmgresarDigitado.php?ficha=${Noficha}&name=${Nombre}`, true);
        digitadas.send();
    })
} catch (error) {}

try {
    document.querySelector("#valorControl1658").addEventListener('change', ingresarProductividad);
    document.querySelector("#valorControl1377").addEventListener('change', ingresarProductividad);
} catch (error) {

}

function ingresarProductividad() {
    // traer los valores de la pagina 
    var Noficha = document.querySelector("#Ficha_fic").value;
    var Nombre = document.querySelector("#main_body > div > div > main > div > div > div > div.panel-heading > div > div > table > tbody > tr > td:nth-child(1) > b").innerHTML
        //console.log(Noficha);
    console.log('Guardada');
    const digitadas = new XMLHttpRequest();
    digitadas.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {

        }
    };
    digitadas.open("GET", `https://gesiapp.com.co/configuraciones/ReporteDigitado/inmgresarDigitado.php?ficha=${Noficha}&name=${Nombre}`, true);
    digitadas.send();
}

let TermFicha = document.querySelector("#botonActualizarInformacion");
TermFicha.addEventListener('click', function() {
    // traer los valores de la pagina 
    var Noficha = document.querySelector("#Ficha_fic").value;
    var Nombre = document.querySelector("#main_body > div > div > main > div > div > div > div.panel-heading > div > div > table > tbody > tr > td:nth-child(1) > b").innerHTML
        //console.log(Noficha);
    console.log('Guadado');
    const digitadas = new XMLHttpRequest();
    digitadas.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            //console.log(this.responseText) 
        }
    };
    digitadas.open("GET", `https://gesiapp.com.co/configuraciones/ReporteDigitado/inmgresarDigitado.php?ficha=${Noficha}&name=${Nombre}`, true);
    digitadas.send();
    //ingresarProductividad()
})


// caracterizacion pag 1
try {






    document.getElementById("valorControl10898").addEventListener("change", function(event) {
        var cordenadax = parseFloat(document.getElementById("valorControl10898").value);
        if (isNaN(cordenadax) || cordenadax < -75.0 || cordenadax > -73.0) {
            alert("Las coordenadas deben estar dentro del rango de Bogotá.");
            document.getElementById("valorControl10898").style.backgroundColor = "#FF2D00"
            document.getElementById("valorControl10898").value = " "
            event.preventDefault(); // Evitar el envío del formulario si las coordenadas no son válidas
        }
    });

    document.getElementById("valorControl10899").addEventListener("change", function(event) {
        var cordenaday = parseFloat(document.getElementById("valorControl10899").value);
        if (isNaN(cordenaday) || cordenaday < 4.0 || cordenaday > 5.0) {
            alert("Las coordenadas deben estar dentro del rango de Bogotá.");
            document.getElementById("valorControl10899").style.backgroundColor = "#FF2D00"
            document.getElementById("valorControl10899").value = " "
            event.preventDefault(); // Evitar el envío del formulario si las coordenadas no son válidas
        }
    });

    document.querySelector("#valorControl10969").required = true;
    document.querySelector("#valorControl10975").addEventListener('change', function() {
        PerrosCampo1 = document.querySelector("#valorControl10971").value;
        PerrosVacunados = document.querySelector("#valorControl10975").value;
        if (PerrosVacunados > PerrosCampo1) {
            caposPerrosDos = document.querySelector("#valorControl10975");
            caposPerrosDos.value = '';
            caposPerrosDos.style.backgroundColor = "#FF2D00";
        }
    })

    document.querySelector("#valorControl10976").addEventListener('change', function() {
        Gatos1 = document.querySelector("#valorControl10972").value;
        Gatos2 = document.querySelector("#valorControl10976").value;
        if (Gatos2 > Gatos1) {
            resGat = document.querySelector("#valorControl10976");
            resGat.value = '';
            resGat.style.backgroundColor = "#FF2D00";
        }
    })




} catch (error) {

}


// cope 28
try {



    var divElement = document.querySelector("#formularioNuevoFormato > b > b > div:nth-child(8)");
    var inputs = divElement.querySelectorAll('input[type="number"]');
    inputs.forEach(function(input) {
        if (!input.hasAttribute("readonly")) {
            input.max = '4';
            input.min = '1';
        }
    });

    document.querySelector("#valorPoblacionalFechaNacimiento").type = 'date';

    // Obtener referencias a los elementos de entrada
    var pregunta1Input = document.querySelector("#valorControl2965");
    var pregunta2Input = document.querySelector("#valorControl2973");
    var pregunta3Input = document.querySelector("#valorControl2981");
    var pregunta4Input = document.querySelector("#valorControl2989");
    var pregunta5Input = document.querySelector("#valorControl2997");
    var pregunta6Input = document.querySelector("#valorControl3005");



    // Obtener referencia al elemento del botón "Actualizar"
    var botonActualizar = document.getElementById('botonActualizarInformacion');
    var botonDeshabilitado = false;

    // Función para calcular la suma de los valores
    function calcularSuma() {
        var sumaElement = document.querySelector("#valorControl3010");

        var pregunta1Valr = parseFloat(pregunta1Input.value) || 0;
        var pregunta2Valr = parseFloat(pregunta2Input.value) || 0;
        var pregunta3Valr = parseFloat(pregunta3Input.value) || 0;
        var pregunta4Valr = parseFloat(pregunta4Input.value) || 0;
        var pregunta5Valr = parseFloat(pregunta5Input.value) || 0;
        var pregunta6Valr = parseFloat(pregunta6Input.value) || 0;

        var suma = pregunta1Valr + pregunta2Valr + pregunta3Valr + pregunta4Valr + pregunta5Valr + pregunta6Valr;

        if (suma == 0) {
            sumaElement.value = '';
            sumaElement.style.backgroundColor = '';
            botonDeshabilitado = false;
        } else if (suma >= 12 && suma <= 48) {
            sumaElement.value = suma;
            sumaElement.style.backgroundColor = '';
            botonDeshabilitado = false;
        } else {
            sumaElement.value = suma;
            sumaElement.style.backgroundColor = '#F7A9A9';
            botonDeshabilitado = true;
        }

        actualizarBoton();
    }

    // Función para actualizar el estado del botón "Actualizar"
    function actualizarBoton() {
        if (botonDeshabilitado) {
            botonActualizar.disabled = true;
        } else {
            botonActualizar.disabled = false;
        }
    }

    // Función para verificar los cambios periódicamente
    function verificarCambios() {
        calcularSuma();
        setTimeout(verificarCambios, 1000);
    }

    // Iniciar la verificación de cambios
    verificarCambios();

    document.querySelector("#valorControl3010").setAttribute("readonly", "readonly");

    //---------------- Evitación Evaluación --------------------------------------------------//
    //-----------------------------------------------------------------------------------------//

    document.querySelector("#valorControl3011").setAttribute("readonly", "readonly");

    // Obtener referencias a los elementos de entrada evaluación
    var pregunta7Input = document.querySelector("#valorControl2969");
    var pregunta8Input = document.querySelector("#valorControl2977");
    var pregunta9Input = document.querySelector("#valorControl2985");
    var pregunta10Input = document.querySelector("#valorControl2993");
    var pregunta11Input = document.querySelector("#valorControl3001");
    var pregunta12Input = document.querySelector("#valorControl3009");

    // Función para calcular la suma de los valores
    function calcularSuma2() {
        var sumaElement2 = document.querySelector("#valorControl3011");

        var pregunta7Valr = parseFloat(pregunta7Input.value) || 0;
        var pregunta8Valr = parseFloat(pregunta8Input.value) || 0;
        var pregunta9Valr = parseFloat(pregunta9Input.value) || 0;
        var pregunta10Valr = parseFloat(pregunta10Input.value) || 0;
        var pregunta11Valr = parseFloat(pregunta11Input.value) || 0;
        var pregunta12Valr = parseFloat(pregunta12Input.value) || 0;

        var suma2 = pregunta7Valr + pregunta8Valr + pregunta9Valr + pregunta10Valr + pregunta11Valr + pregunta12Valr;

        if (suma2 == 0) {
            sumaElement2.value = '';
            sumaElement2.style.backgroundColor = '';
            botonDeshabilitado = false;
        } else if (suma2 >= 12 && suma2 <= 48) {
            sumaElement2.value = suma2;
            sumaElement2.style.backgroundColor = '';
            botonDeshabilitado = false;
        } else {
            sumaElement2.value = suma2;
            sumaElement2.style.backgroundColor = '#F7A9A9';
            botonDeshabilitado = true;
        }

        actualizarBoton();
    }

    // Función para verificar los cambios periódicamente
    function verificarCambios2() {
        calcularSuma2();
        setTimeout(verificarCambios2, 1000);
    }

    // Iniciar la verificación de cambios
    verificarCambios2();

    //--------------------------------- Afrontamiento-----------------------------
    //---------------------------------------------------------------------------

    document.querySelector("#valorControl2961").setAttribute("readonly", "readonly");

    // Obtener referencias a los elementos de entrada evaluación
    var pregunta13Input = document.querySelector("#valorControl2353");
    var pregunta14Input = document.querySelector("#valorControl2370");
    var pregunta15Input = document.querySelector("#valorControl2916");
    var pregunta16Input = document.querySelector("#valorControl2924");
    var pregunta17Input = document.querySelector("#valorControl2932");
    var pregunta18Input = document.querySelector("#valorControl2940");
    var pregunta19Input = document.querySelector("#valorControl2951");
    var pregunta20Input = document.querySelector("#valorControl2959");

    // Función para calcular la suma de los valores
    function calcularSuma3() {
        var sumaElement3 = document.querySelector("#valorControl2961");

        var pregunta13Valr = parseFloat(pregunta13Input.value) || 0;
        var pregunta14Valr = parseFloat(pregunta14Input.value) || 0;
        var pregunta15Valr = parseFloat(pregunta15Input.value) || 0;
        var pregunta16Valr = parseFloat(pregunta16Input.value) || 0;
        var pregunta17Valr = parseFloat(pregunta17Input.value) || 0;
        var pregunta18Valr = parseFloat(pregunta18Input.value) || 0;
        var pregunta19Valr = parseFloat(pregunta19Input.value) || 0;
        var pregunta20Valr = parseFloat(pregunta20Input.value) || 0;

        var suma3 = pregunta13Valr + pregunta14Valr + pregunta15Valr + pregunta16Valr + pregunta17Valr + pregunta18Valr + pregunta19Valr + pregunta20Valr;

        if (suma3 == 0) {
            sumaElement3.value = '';
            sumaElement3.style.backgroundColor = '';
            botonDeshabilitado = false;
        } else if (suma3 >= 16 && suma3 <= 64) {
            sumaElement3.value = suma3;
            sumaElement3.style.backgroundColor = '';
            botonDeshabilitado = false;
        } else {
            sumaElement3.value = suma3;
            sumaElement3.style.backgroundColor = '#F7A9A9';
            botonDeshabilitado = true;
        }

        actualizarBoton();
    }

    // Función para verificar los cambios periódicamente
    function verificarCambios3() {
        calcularSuma3();
        setTimeout(verificarCambios3, 1000);
    }

    // Iniciar la verificación de cambios
    verificarCambios3();

    //


    //----- afrontamiento caracterizacion -----
    //------------------------------------------

    document.querySelector("#valorControl2960").setAttribute("readonly", "readonly");

    // Obtener referencias a los elementos de entrada evaluación
    var pregunta21Input = document.querySelector("#valorControl2348");
    var pregunta22Input = document.querySelector("#valorControl2369");
    var pregunta23Input = document.querySelector("#valorControl2912");
    var pregunta24Input = document.querySelector("#valorControl2920");
    var pregunta25Input = document.querySelector("#valorControl2928");
    var pregunta26Input = document.querySelector("#valorControl2936");
    var pregunta27Input = document.querySelector("#valorControl2944");
    var pregunta28Input = document.querySelector("#valorControl2955");



    // Función para calcular la suma de los valores
    function calcularSuma4() {
        var sumaElement4 = document.querySelector("#valorControl2960");

        var pregunta21Valr = parseFloat(pregunta21Input.value) || 0;
        var pregunta22Valr = parseFloat(pregunta22Input.value) || 0;
        var pregunta23Valr = parseFloat(pregunta23Input.value) || 0;
        var pregunta24Valr = parseFloat(pregunta24Input.value) || 0;
        var pregunta25Valr = parseFloat(pregunta25Input.value) || 0;
        var pregunta26Valr = parseFloat(pregunta26Input.value) || 0;
        var pregunta27Valr = parseFloat(pregunta27Input.value) || 0;
        var pregunta28Valr = parseFloat(pregunta28Input.value) || 0;

        var suma4 = pregunta21Valr + pregunta22Valr + pregunta23Valr + pregunta24Valr + pregunta25Valr + pregunta26Valr + pregunta27Valr + pregunta28Valr;

        if (suma4 == 0) {
            sumaElement4.value = '';
            sumaElement4.style.backgroundColor = '';
            botonDeshabilitado = false;
        } else if (suma4 >= 16 && suma4 <= 64) {
            sumaElement4.value = suma4;
            sumaElement4.style.backgroundColor = '';
            botonDeshabilitado = false;
        } else {
            sumaElement4.value = suma4;
            sumaElement4.style.backgroundColor = '#F7A9A9';
            botonDeshabilitado = true;
        }

        actualizarBoton();
    }

    // Función para verificar los cambios periódicamente
    function verificarCambios4() {
        calcularSuma4();
        setTimeout(verificarCambios4, 1000);
    }

    // Iniciar la verificación de cambios
    verificarCambios4();

    // sisvecos valida los check 
    // Obtén los tres elementos checkbox por su ID
    const checkbox1 = document.getElementById('valorControl1960');
    const checkbox2 = document.getElementById('valorControl1961');
    const checkbox3 = document.getElementById('valorControl11833');

    // Marca todos los checkboxes como requeridos al cargar la página
    checkbox1.setAttribute('required', 'required');
    checkbox2.setAttribute('required', 'required');
    checkbox3.setAttribute('required', 'required');

    // Agrega un event listener a cada checkbox para escuchar los cambios
    checkbox1.addEventListener('change', updateRequired);
    checkbox2.addEventListener('change', updateRequired);
    checkbox3.addEventListener('change', updateRequired);

    // Función para actualizar los atributos "required"
    updateRequired()

    function updateRequired() {
        if (checkbox1.checked || checkbox2.checked || checkbox3.checked) {
            checkbox1.removeAttribute('required');
            checkbox2.removeAttribute('required');
            checkbox3.removeAttribute('required');
        } else {
            checkbox1.setAttribute('required', 'required');
            checkbox2.setAttribute('required', 'required');
            checkbox3.setAttribute('required', 'required');
        }
    }

    var bElements = document.querySelectorAll("b");
    var inputsToSelect = [];
    for (var i = 0; i < bElements.length; i++) {
        if (bElements[i].textContent.includes("Evaluación")) {
            var nextElement = bElements[i].parentElement.nextElementSibling;
            if (nextElement && nextElement.querySelector("input")) {
                inputsToSelect.push(nextElement.querySelector("input"));
            }
            console.log(inputsToSelect)
        }
    }
    for (var j = 0; j < inputsToSelect.length; j++) {
        inputsToSelect[j].value = "0";
    }

    datosEvaluacion()

    document.querySelector("#valorControl1958").addEventListener('keyup', datosEvaluacion)
    document.querySelector("#valorControl1958").addEventListener('change', datosEvaluacion)

    function datosEvaluacion() {

        let fechaEvaluacionCope = document.querySelector('#valorControl1958').value;
        console.log(fechaEvaluacionCope)

        if (fechaEvaluacionCope != '') {
            console.log(fechaEvaluacionCope)
            var bElements = document.querySelectorAll("b");

            bElements.forEach(function(bElement) {
                if (bElement.textContent.includes("Evaluación")) {
                    var tableElement = bElement.closest("table");
                    if (tableElement) {
                        var inputElements = tableElement.querySelectorAll("input");
                        inputElements.forEach(function(inputElement, index) {
                            if (index < 2) {
                                inputElement.removeAttribute("readonly");
                                inputElement.max = '4';
                                inputElement.min = '1';
                            }
                        });
                    }
                }

            });

        } else {
            console.log(fechaEvaluacionCope)
            var bElements = document.querySelectorAll("b");
            bElements.forEach(function(bElement) {
                if (bElement.textContent.includes("Evaluación")) {
                    var tableElement = bElement.closest("table");
                    if (tableElement) {
                        var inputElements = tableElement.querySelectorAll("input");
                        inputElements.forEach(function(inputElement) {
                            inputElement.value = ''
                            inputElement.setAttribute("readonly", "readonly");

                        });
                    }
                }
            });
        }
    }


} catch (error) {

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