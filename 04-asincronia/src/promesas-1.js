// Las promesas tienen tres estados:

// Pending: la ejecución no ha terminado
// Fulfilled: la ejecución ha ido bien
// Rejected: la ejecución ha ido mal

const mi_primera_promesa = new Promise(
    (resolve) => {
        setTimeout(
            () => resolve('nook'), 
            7000
        )
    }
)

// const mi_primera_promesa = new Promise(
//     (resolve, reject) => {
//         setTimeout(
//             () => reject('nook'), 
//             7000
//         )
//     }
// )

mi_primera_promesa.then(
    // se va a ejecutar si todo va bien - estado fulfilled
    res => console.log("la respuesta es ", res)

).catch(
    // se va a ejecutar si todo va mal
    err => console.error("respuesta error", err)
)

