# El objeto proxy implementa el patrón proxy

```typescript 
interface MiServicio {
    getData(): string;
}

class Servicio implements MiServicio {
    getData(): string {
        return 'data';
    }
}

class Proxy implements MiServicio {
    private servicio: MiServicio;

    constructor(servicio: MiServicio) {
        this.servicio = servicio;
    }

    getData(): string {
        // hago algo antes de invocar al servicio
        // comprobar que el servicio está disponible
        // etc...
        return this.servicio.getData();
    }
}

```

```javascript
const servicio = new Servicio();
const proxy = new Proxy(servicio);

function hazcosas(servico) {
    servio.getData();
}
```


# Patron proxy en javascript

```javascript
class Servicio {
    getData(): string {
        return 'data';
    }
}

class Proxy  {
    private servicio;

    constructor(servicio) {
        this.servicio = servicio;
    }

    getData() {
        // hago algo antes de invocar al servicio
        // comprobar que el servicio está disponible
        // etc...
        return this.servicio.getData();
    }
}
```

//duck typing

#Interceptar lecturas

- taget: objeto que se va a interceptar
- property: propiedad que se va a interceptar
- receiver: objeto que se va a interceptar (el objeto que se usa como this) - avanzado