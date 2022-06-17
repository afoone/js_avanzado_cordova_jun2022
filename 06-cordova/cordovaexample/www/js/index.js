document.addEventListener('deviceready', onDeviceReady, false)
document.addEventListener('resume', () => console.log("resumed app"))

const takePicture = () => {
  // vamos a hacer una foto
  navigator.camera.getPicture(data => console.log(data), console.error, {
    quality: 60,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: Camera.PictureSourceType.CAMERA,
    allowEdit: true,
    encodingType: Camera.EncodingType.JPEG,
    targetWidth: 300,
    targetHeight: 300,
    saveToPhotoAlbum: false,
    mediaType: Camera.MediaType.PICTURE,
    cameraDirection: 0,
  })
}

const scan = () => {
  //dummy
  cordova.plugins.barcodeScanner.scan(result => {
    const { text } = result
    console.log(text)
    const urlRegex = RegExp(/https:\/\//)
    if (urlRegex.test(text)) {
      console.log('abriríamos esa url en un navegador', { text })
      // abrir la url en el inapp browser
      cordova.InAppBrowser.open(text)

    }
  }, console.error)
}

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  screen.orientation.addEventListener('change', 
    () => {console.log(screen.orientation.type)
        document.getElementById('orientation').textContent = screen.orientation.type
    }

  )

  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version)
  const deviceReadyDiv = document.getElementById('deviceready')

  if (navigator.camera) {
    const buttonTakePicture = document.createElement('button')
    buttonTakePicture.textContent = 'Hacer Foto'
    buttonTakePicture.addEventListener('click', takePicture)
    deviceReadyDiv.appendChild(buttonTakePicture)
  }

  if (cordova.plugins.barcodeScanner) {
    const buttonBarCodeScan = document.createElement('button')
    buttonBarCodeScan.textContent = 'escanear'
    buttonBarCodeScan.addEventListener('click', scan)
    deviceReadyDiv.appendChild(buttonBarCodeScan)
  }

  if (screen.orientation) {
    const divOrientation = document.createElement('div')
    divOrientation.id = 'orientation'
    divOrientation.textContent = screen.orientation.type
    deviceReadyDiv.appendChild(divOrientation)
  }
}
