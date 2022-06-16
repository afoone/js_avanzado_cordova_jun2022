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

const recuperaUsuarios = async () => {
  const lista = document.querySelector('#lista-usuarios')
  const loadingEl = document.createElement('h2')
  loadingEl.textContent = 'Cargando...'
  lista.appendChild(loadingEl)
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  console.log({ res })

  if (res.ok) {
    const usuarios = await res.json()
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

const removeUser = idUsuario => {
  const listaUsuarios = document.getElementById('lista-usuarios')
  listaUsuarios.removeChild(document.getElementById(idUsuario))
  const er = new RegExp(/\w+-/)
  const id = idUsuario.replace(er, '')
  id &&
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    }).catch(
      console.error
    )
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
