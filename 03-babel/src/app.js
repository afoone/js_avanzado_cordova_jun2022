import { nombre as name, edad } from './persona.js'
import mi_array from './default.js'
import { v4 as uuid } from 'uuid'

const f = () => {
  console.log({ name, edad })
  mi_array.forEach(v => console.log(v))

  console.log(uuid())
}

f()

// class Persona {
//     constructor() {
//         this.kk = kk
//     }
// }
