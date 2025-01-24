import Estados from '../clases/estados.js';
export default class EdadClass {
         /**
         * Validar condiciones para mayores de 17 años.
         */
        validarCondicionesMayores(estadoCivil, nacionalidad, tipoDocumento) {
            Estados.actualizarEstadoCampo(estadoCivil, estadoCivil.value == 78);
            if (nacionalidad.value == 50) {
                Estados.actualizarEstadoCampo(tipoDocumento, tipoDocumento.value != 59);
            }
        }
    
        /**
         * Validar condiciones para menores entre 7 y 17 años.
         */
        validarCondicionesMenores(estadoCivil, nacionalidad, tipoDocumento, edad) {
            if (edad > 13) {
                Estados.actualizarEstadoCampo(estadoCivil, estadoCivil.value == 78);
            }
    
            if (nacionalidad.value == 50) {
                Estados.actualizarEstadoCampo(tipoDocumento, tipoDocumento.value != 61);
            }
        }
        /**
         * Validar condiciones para menores de 7 años.
         */
        validarCondicionesInfantiles(estadoCivil, nacionalidad, tipoDocumento) {
            Estados.actualizarEstadoCampo(estadoCivil, estadoCivil.value != 78);
    
            if (nacionalidad.value == 50) {
                Estados.actualizarEstadoCampo(tipoDocumento, tipoDocumento.value != 60);
            }
        }
}