class Gato {



    constructor() {}
    

    set nombre(nuevoNombre) {
        console.log('estoy en el setter')
        this._name = nuevoNombre.toUpperCase()
    }

    get nombre() {
        return "nombre: "+ this._name
    }
}

const lily = new Gato()
lily.nombre = "lily"