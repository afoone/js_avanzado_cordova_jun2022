# Principio de abierto/cerrado

Los componentes han de estar abiertos para su extensión pero cerrados para su modificación

```javascript
class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}

class Circulo {
    constructor(radio) {
        this.radio = radio;
    }
}

// la siguiente clase no cumple el princio de abierto/cerrado
// porque si mañana viene un triangulo, tenemos que modificarla
class CalculadoraAreas {
    calculateRectangleArea(rectangulo) {
        return rectangulo.base * rectangulo.altura;
    }

    calulateCircleArea(circulo) {
        return Math.PI * circulo.radio * circulo.radio;
    }
}
```


```javascript

// calculateArea: devolvera el area

class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calculateArea() {
        return this.base * this.altura;
    }
}

class Circulo {
    constructor(radio) {
        this.radio = radio;
    }
    calculateArea() {
        return Math.PI * this.radio * this.radio;
    }
}

class CalculadoraAreas {
    calculateArea(objeto) {
        return obj.calculateArea();
    }
}
``` 