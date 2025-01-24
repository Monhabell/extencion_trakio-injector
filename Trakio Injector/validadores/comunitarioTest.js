import SesionesColectivas from './comunitario/SesionesColectivas';

function chooseBase(idBase) {
    switch (idBase) {
        case "39":
            const sesionesColectivas = new SesionesColectivas();
            sesionesColectivas.setRequired()
            break;
        default:
            console.log("Base no válida");
            break;
    }
}