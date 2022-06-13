!true
false
! false
true
// falsy / truthy
undefined
!!true
true
!!false
false
var = text = "text"
VM3342:1 Uncaught SyntaxError: Unexpected token '='
var text = "text"
undefined
text
'text'
if (text) {
    write("es verdadero")
}
VM3536:2 Uncaught ReferenceError: write is not defined
    at <anonymous>:2:5
(anónimo) @ VM3536:2
if (text) {
    console.log("es verdadero")
}
VM3586:2 es verdadero
undefined
!!"text"
true
if ("") {
    console.log('es verdadero')
}
undefined
!!""
false
!! false
false
!""
true
typeof true
'boolean'
typeof "lsdjf"
'string'
typeof 7
'number'
typeof null
'object'
!!"klsdlfjldsfj"
true
!!""
false
!!0
false
!!undefined
false
var f
undefined
!!f
false
f
undefined
!!null
false
!!{}
true
!![]
true


var b;
undefined
b.toUpperCase()
VM4500:1 Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')
    at <anonymous>:1:3
(anónimo) @ VM4500:1
if (b) {b.toUpperCase()}
undefined
if (b) {console.log(b.toUpperCase())}
undefined
b = "kdsfjlfl"
'kdsfjlfl'
if (b) {console.log(b.toUpperCase())}
VM4801:1 KDSFJLFL
undefined


var b;
undefined
b.toUpperCase()
VM4500:1 Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')
    at <anonymous>:1:3
(anónimo) @ VM4500:1
if (b) {b.toUpperCase()}
undefined
if (b) {console.log(b.toUpperCase())}
undefined
b = "kdsfjlfl"
'kdsfjlfl'
if (b) {console.log(b.toUpperCase())}
VM4801:1 KDSFJLFL
undefined
true && true
true
true && false
false
true || false
true
true && "hola mundo"
'hola mundo'
4 && "hola cuatro"
'hola cuatro'
var nombre;
undefined
var presentacion = nombre && "hola soy " + nombre
undefined
false && true
false
0 && 5
0
b && console.log(b.toUpperCase())
VM5590:1 KDSFJLFL
undefined
b = undefined
undefined
b && console.log(b.toUpperCase())
undefined



undefined
false || true
true
var c = ""
undefined
console.log(
    c || "sin nombre"
    )


    var nombre;
undefined
console.log(
    nombre.toUpperCase()
    )
VM6295:2 Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')
    at <anonymous>:2:12
(anónimo) @ VM6295:2
console.log(
    nombre ? nombre.toUpperCase() : nombre
    )
VM6455:1 undefined
undefined
console.log(
    nombre && nombre.toUpperCase() 
    )
VM6576:1 undefined
undefined
console.log(
        nombre?.toUpperCase() 
    )
VM6637:1 undefined
undefined
juan?.nombre?.toUpperCase()
VM6801:1 Uncaught ReferenceError: juan is not defined
    at <anonymous>:1:1
(anónimo) @ VM6801:1
var juan
undefined
juan?.nombre?.toUpperCase()
undefined