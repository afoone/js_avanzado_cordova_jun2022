
const arr = [1,2,3,4,5,6,7,8,9,10]
arr.forEach(
    (value, index, array)  => {
        console.log({value, index, array})
    }
)

arr.filter(
    // La funcion de callback devolverá true si queremos que filter nos devuelva el elemento dentro del filtro
    (value, index, array ) => {
        return value > 5
    }
)

arr.filter(v => v > 5)

arr.map(
    v => "Número " + v
)

arr.map(
    (v, i) => {
        return {
            valor: v,
            indice: i
        }
    }
)

arr.map(
    (v, i) => ({
            valor: v,
            indice: i
        })
)

arr.reduce(
    // en cada iteración tenemos el acumulado y el current
    // devuelvo el nuevo acumulado
    (acc, curr) => acc + curr, 
    0
)

// const arr = [1,2,3,4,5,6,7,8,9,10]
// acc curr
// 0 1 => 1
// 1 2 => 3
// 3 3 => 6
// Sumando todos los elementos

arr.reduce(
    (acc, curr, index) => {
        if (index === 0) {
            return curr
        } else {
            return curr > acc ? curr: acc
        }
    } 
)

// const arr = [1,2,3,4,5,6,7,8,9,10]
// acc curr inx
// 0 1 0 => 1
// 1 2 1 => 2
// 2 3 2 => 3



