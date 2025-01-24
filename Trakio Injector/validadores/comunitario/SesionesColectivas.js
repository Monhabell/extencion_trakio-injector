export default class SesionesColectivas{
    #inputsSelectors = {
        pagina_1 : {
            type_number: [
                "14155",
                "14161",
                "14165",
                "14168",
                "14170",
            ]
        },
        pagina_2 : {
            type_number: [
                "14494",
                "14495",
                "14496",
            ]
        },
        pagina_3 : {
            date_sesions: [
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
            session_attendance: [
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
            professional_profile: [
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
            typist_name: [
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
            required: [
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
        },
    };

    constructor(inputsSelectors){
        this.#inputsSelectors = inputsSelectors;
    }

    get inputsSelectors(){
        return this.#inputsSelectors;
    }

    set inputsSelectors(inputsSelectors){
        this.#inputsSelectors = inputsSelectors;
    }

    setRequired(){
        this.#inputsSelectors.pagina_3.required.forEach(id => {
            document.getElementById(id).required = true;
        });
    }

    imprimirSaludo(){
        console.log('Hola desde la clase');
    }
}