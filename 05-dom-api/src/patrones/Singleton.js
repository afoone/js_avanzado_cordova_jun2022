class Singleton {

    // este, según el modelo 
    constructor() {

    }

  static getInstance() {
    if (!this._instance) this._instance = new Singleton()
    return this.instace
  }
}

Singleton.getInstance()

new Singleton()


const _mi_instancia = {
    
}


