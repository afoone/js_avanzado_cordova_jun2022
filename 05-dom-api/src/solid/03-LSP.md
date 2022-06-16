# Principio de sustitución de Liskov

Hijo -> Padre 
En cualquier sitio donde se use el padre, debe ser sustituible por el hijo

```javascript
class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calculateArea() {
        return this.base * this.altura;
    }
}

class Cuadrado extends Rectangulo {
    constructor(lado) {
        super(lado, lado);
    }

    set base(lado) {
        this.base = lado;
        this.altura = lado;
    }

    set altura(lado) {
        this.base = lado;
        this.altura = lado;
    }
}

const rectangulo = new Rectangulo(10, 20);
rectangulo.base = 5
rectangulo.altura = 10
rectangulo.calculateArea() // 50

const cuadrado = new Cuadrado(10, 20);
cuadrado.base = 5 // base, altura = 5
cuadrado.altura = 10 // base, algura = 10
cuadrado.calculateArea() // esperaría 50 -> obtenemos 100
```

