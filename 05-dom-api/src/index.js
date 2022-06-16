const geolocalizar = () => {
  navigator.geolocation &&
    navigator.geolocation.getCurrentPosition(
      position => {
        const isV = isVerano(position.coords.latitude > 0)
        if (isV) {
          document.getElementById('welcome').innerText =
            'Bienvenido y feliz verano'
        }
      },
      err => console.log(err)
    )
}

const isVerano = isHemisferioNorte => {
  const mes = new Date().getMonth()
  return (
    (isHemisferioNorte && mes > 4 && mes < 10) ||
    (!isHemisferioNorte && (mes > 11 || mes < 4))
  )
}

const initializeIndexedDB = () => {

  let db 
  const idbRequest = indexedDB.open('next', 3)
  idbRequest.onupgradeneeded = 
   (e) => { // Se dispara si no existía la base de datos
    console.log('inicializacion de base de datos')
    
    if (e.oldVersion === 0) {
      console.log('la base de datos no existía')
      // inicializar la db.
    }

    if (e.oldVersion  === 2){
      // igual me toca actualizar algo.
      console.log('actualizar')
      const db = idbRequest.result
      db.createObjectStore(
        'usuarios',
        {
          keyPath: 'id'
        }
      )
    }

    
  
  }
  

  idbRequest.onerror = console.error

  idbRequest.onsuccess = () => {
     db = idbRequest.result
    // empezar a trabajar
    
    const usuarioTransaction  = db.transaction('usuarios', 'readwrite')
    usuarioTransaction.oncomplete  = () => console.log('transaccion terminada')
    const usuariosStore = usuarioTransaction.objectStore('usuarios')
    const rGet = usuariosStore.get(1212)
    // usuariosStore.createIndex("no")
    rGet.onsuccess = e => console.log(e.target.result)
    const request = usuariosStore.add(
      {
        id: 1212,
      }
    )
    request.onsuccess = (e) => {console.log('usuario añadido', e)}
    request.onerror = console.error
  }



  //




}

const recuperaUsuarios = async () => {
  const lista = document.querySelector('#lista-usuarios')
  const loadingEl = document.createElement('h2')

  const cache = localStorage.getItem('usuarios')
  if (cache) {
    creaListaUsuarios(JSON.parse(cache))
    return
  }

  loadingEl.textContent = 'Cargando...'
  lista.appendChild(loadingEl)
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  console.log({ res })

  if (res.ok) {
    const usuarios = await res.json()
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    console.log({ usuarios })
    lista.removeChild(loadingEl)
    creaListaUsuarios(usuarios)
  }
}

const creaListaUsuarios = usuarios => {
  console.log({ usuarios })
  const lista = document.querySelector('#lista-usuarios')
  usuarios.forEach(usuario => {
    const li = document.createElement('li')
    li.textContent = usuario.name
    li.id = `empleado-${usuario.id}`
    li.draggable = true
    li.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text', e.target.id)
    })
    lista.appendChild(li)
  })
  return //Array de HTMLElement
}

const handleError = err => {
  console.error(err)
  window.alert(err)
}

const notifyDelete = () => {
  window.alert('elemento borrado correctamente')
}

const removeUser = idUsuario => {
  const listaUsuarios = document.getElementById('lista-usuarios')
  listaUsuarios.removeChild(document.getElementById(idUsuario))
  const er = new RegExp(/\w+-/)
  const id = idUsuario.replace(er, '')
  id &&
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
      .then(notifyDelete)
      .catch(handleError)
}

const initializeDaD = () => {
  const dropZone = document.querySelector('.drop-zone')
  dropZone.addEventListener('drop', e => {
    removeUser(e.dataTransfer.getData('text'))
  })
  dropZone.addEventListener('dragover', e => {
    e.preventDefault()
  })
}

const main = () => {
  initializeDaD()
  const boton = document.createElement('button')
  boton.textContent = 'Recupera usuarios'
  boton.addEventListener('click', () => {
    recuperaUsuarios()
  })

  const botonLocalizar = document.createElement('button')
  botonLocalizar.textContent = 'Localizame'
  botonLocalizar.addEventListener('click', () => {
    geolocalizar()
  })

  const botonera = document.querySelector('#botonera')
  botonera.appendChild(boton)
  botonera.appendChild(botonLocalizar)

  recuperaUsuarios()
}

main()
