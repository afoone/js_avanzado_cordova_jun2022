let target = {}
let proxy = new Proxy(target, {})
proxy.valor = 5

console.log(proxy.valor)


let numbers = [1,2,4]

let numbersProxy = new Proxy(
    numbers, 
    {
        // numbers[2]
        get(target, prop) {
            if (prop in target) {
                return target[prop]
            } else {
                return 0
            }
        }, 
        set(target, prop, value) {
            console.log({target, prop, value})
            if (typeof value === 'number') {
                target[prop] = value
                return true
            } else {
                return false
            }
        }
    }
)

numbersProxy[7]




let usuario = {
    _nombre: "atienda",
    get name() {
        return this._name
    }
}

let usuarioProxy = new Proxy (
    usuario,
    {
        get(target,prop, receiver){
            console.log({target, prop, receiver})
            return Reflect.get(target, prop, receiver)
        },
        set(target, prop,val, receiver) {
            return Reflect(target, prop, val.toUpperCase(), receiver)
        }, 
       
     }
)