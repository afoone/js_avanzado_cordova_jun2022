# Programacion funcional en javascript

Principios de la programacion funcional:

## Purity 

Las funciones puras son funciones que no modifican los argumentos que se pasan a sus parametros.
Sólo ooperan con los parámetros de entrada
Dado unos parámetros de entrada, el resultado siempre es el mismo.
 
 Función pura: 

```javascript
function sum(a, b) {
  return a + b;
}
```

```javascript
// no pura
let a = 1;

function sum(b) {
  return a + b; // tiene un side effect
}
```

```javascript
// no pura
function getDate() {
  return new Date();
}
```

# Inmutabilidad

No es posible modificar un objeto.

## Inmutabilidad en javascript
 ```javascript
const obj = {
  a: 1,
  }

  // en js no existe, porque se puede modificar el objeto cambiando alguna propiedad
  ```

# Funciones de orden superior
son funciones que reciben funciones como argumentos o devuelven funciones.

```javascript
const makeAdder = a => b => a + b;
const add10 = makeAdder(10);
add10(2); // 12
```

## Composicion de funciones
```javascript
function add5(a) {return a+5}
function mult10(a) {return a*10}
function add5andmult10(a) {return  mult10(add5(a))}
add5andmult10(5)
```
