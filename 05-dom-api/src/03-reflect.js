

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }



}

//const pepe = new Persona("Pepe","Gutierrez")

const pepe = Reflect.construct(Persona,['pepe', 'gutierrez'])

console.log({pepe})

Reflect.apply(Math.max, Math, [1, 3, 5, 2])

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

}

const juan = Reflect.construct(Persona,['juan', 'gutierrez'])


Reflect.apply(juan.getFullName, juan, [])

// definir propiedades

Reflect.defineProperty(
    juan, 
    "edad", 
    {
        get: () => _edad,
        set: (nValue) => _edad = nValue
    }
)

const arr = [
    {
        nombre: 'pepe'
    },
    {
        f: ()=> {}
    }
]

arr.forEach(
    (o, index) => Reflect.defineProperty(
        o, "id", {
            get: ()=> index,
        }
    )
)

