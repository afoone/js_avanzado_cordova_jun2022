# Interface Segregation Principle

mejor muchas interfaces que una sola

```typescript
interface Animal {
    nadar: () => void
    volar: () => void
    correr: () => void
}

class Pez implements Animal {
    public nadar() {
        console.log('nada')
    }
    volar(){

    }
    correr() {
        //no corre
    }
}
```

```typescript

interface Volador {

    volar: () => void

}

interface Corredor {
    correr: () => void
}

interface Nadador {
    nadar: () => void
}

class Pez implements Nadador {
    public nadar() {
        console.log('nada')
    }
}

class Pato implements Nadador, Corredor {
    public nadar(){

    }
    public correr (){
        
    }
}
```