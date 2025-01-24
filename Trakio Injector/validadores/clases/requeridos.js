export default class Requeridos{
    /**
     * Validar si los campos requeridos están presentes y marcarlos como requeridos.
     * @param {Array|string} idsRequeridos - IDs de los campos requeridos.
     * @returns {boolean} - `true` si todos los campos existen y son válidos, de lo contrario `false`.
     */
    validarRequeridos(idsRequeridos) {
        let todosValidos = true;

        if (typeof idsRequeridos === 'object' && !Array.isArray(idsRequeridos)) {
            idsRequeridos = Object.values(idsRequeridos).flat();
        }

        idsRequeridos.forEach(id => {
            const input = document.getElementById(`valorControl${id}`);
            if (!input) {
                console.warn(`El campo con ID valorControl${id} no existe en el DOM.`);
                todosValidos = false;
            } else {
                input.required = true;
            }
        });

        return todosValidos;
    }
}

