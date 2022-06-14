// Pueden ser encadenadas

// es ocurre cuando un then hace un return de otra promesa

const mi_primera_promesa = new Promise(
    (resolve) => {
        setTimeout(
            () => resolve('resuelta primera'), 
            1000
        )
    }
)

mi_primera_promesa.then(
    res => {
        console.log(res)
        console.log("voy a lanzar otra promesa")
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => reject('fallo en la segunda'), 
                    1000
                )
            }
        )
    }
).then(
    res => console.log("segunda respuesta" + res)
).catch(
    err => console.error("ha fallado")
)