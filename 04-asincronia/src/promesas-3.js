// Promise.All y promise.race

Promise.all(
    [
        new Promise(
            (resolve) => {
                setTimeout(
                    () => resolve('r1'), 
                    4000
                )
            }
        ),
        new Promise(
            (resolve) => {
                setTimeout(
                    () => resolve('r2'), 
                    3000
                )
            }
        )
    ]
).then(
    res => console.log({res})
).catch(
    err => console.error({err})
)


// El resultado es el de la primera que resuelve o hace un reject

Promise.race(
    [
        new Promise(
            (resolve) => {
                setTimeout(
                    () => resolve('r1'), 
                    4000
                )
            }
        ),
        new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => reject('r2'), 
                    2000
                )
            }
        )
    ]
).then(
    res => console.log({res})
).catch(
    err => console.error({err})
)

// Si la primera hace un reject, sigue esperando a las demás - si todas dan reject, va al catch
Promise.any(
    [
        new Promise(
            (resolve) => {
                setTimeout(
                    () => resolve('r1'), 
                    4000
                )
            }
        ),
        new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => reject('r2'), 
                    2000
                )
            }
        )
    ]
).then(
    res => console.log({res})
).catch(
    err => console.error({err})
)