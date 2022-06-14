// El spread operator hace como si pasase elementos unos detras de otras 
// (como si los serparásemos porcomas)

const arr = [1,2,3,4,5]

function test(a,b,c,d,e) {
    console.log(a,b,c,d,e)
}

test(arr)
// VM353:2 (5) [1, 2, 3, 4, 5] undefined undefined undefined undefined

test(...arr)
// VM353:2 1 2 3 4 5

// copiar arrays
const arr_2 = [...arr]

// añadir un elemento a un array, pero haciendo una copia (programacion funcioanl)
const arr_3 = [...arr, 6]

const arr_objetos = [
    {
        id:1,
        nombre: "uno"        
    },
    {
        id: 2,
        nombre: "dos"
    }, 
    {
        id: 3,
        nombre: "tres"
    },
    {
        id: 4,
        nombre: "cuatro"
    }
]


// borrar elementos
const arr_sin_3 = [...arr_objetos.filter(o => o.id !== 3)]

// sustituir elementos 
const modifico_el_3  =  [...arr_objetos.filter(o => o.id !== 3), {id: 3, nombre: "tres-modificado"}]

