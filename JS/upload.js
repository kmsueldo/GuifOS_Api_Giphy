document.addEventListener('DOMContentLoaded', () =>  {

const windowCreate = document.querySelector('#windowCreateGifos')
const windowCheck = document.querySelector('#windowCheck')
const btnComenzarVideo = document.querySelector('#comenzarVideo')
const btnCapture = document.querySelector('#btnCapture')
const btnEnd = document.querySelector('#btnEnd')
const videoCamara = document.querySelector('#video-camara')
let videoBtnStar = document.querySelector('#windowBtnStar')
let videoBtnEnd = document.querySelector('#windowBtnEnd')
let logoCam = document.querySelector('#logoCam')
let btnRepeat = document.querySelector('#btnRepeat')
let btnUpload = document.querySelector('#btnUpload')
let cargaLogoGuifo = document.querySelector('#logoSubir')
let subiendoGuifo = document.querySelector('#subirGuifo')
let btnCancel = document.querySelector('#btnCancel')
let titleWindow = document.querySelector('#titleWindow')
let windowGuifoReady = document.querySelector('#windowGuifoReady')
let previewGuifo = document.querySelector('#previewGuifo')
let videoCamera = document.querySelector('#videoCamera')
let btnListo = document.querySelector('#btnListo')
let containerGuifoReady = document.querySelector('#containerGuifoReady')
let btnCopyGuifo = document.querySelector('#btnCopyGuifo')
let btnDownloadGuifo = document.querySelector('#btnDownloadGuifo')
const urlApiUpload = 'http://upload.giphy.com/v1/gifs?api_key=VjIbJynh15GU8ThxPfIb4ZjpATicN5uy'

let recorder = null
let gifId

// configuracion de la libreria de la camra
const getMedia =  async () => {        
        const configVideo = {
        video :{height : { max: 450}},audio: false
        }
        let stream = null    
        try {
        stream = await navigator.mediaDevices.getUserMedia(configVideo)
        return stream        
        } catch(error) { alert('La camara no tiene permiso')       
        }    
}
// aceptacion de terminos y condiciones para comenzar a grabar
btnComenzarVideo.addEventListener('click', async () => {
    windowCreate.style.display ='none'
    windowCheck.style.display ='flex'

    let stream = await getMedia()    
    videoCamara.srcObject = stream
    videoCamara.play()   
})
// prueba la camra traida de la libreria
btnCapture.addEventListener('click', async () =>{
    
    videoBtnStar.style.display ='none'
    videoBtnEnd.style.display = 'flex'
    titleWindow.innerHTML='Capturando tu Guifo'    

    let stream = await getMedia() 
    videoCamara.srcObject = stream
    videoCamara.play() 
    
    const configGif = {
        type: 'gif',
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,
        onGifRecordingStarted: function() {
            console.log('started')
        }
    }

    recorder = new RecordRTCPromisesHandler(stream, configGif)
    recorder.startRecording()       
})

// comienza nuestra grabacion de guifo
btnEnd.addEventListener('click', async () => {

        titleWindow.innerHTML='Vista previa'
        await recorder.stopRecording()  
        videoCamara.pause()

        logoCam.style.display ='none'
        btnEnd.style.display ='none'
        btnRepeat.style.display ='block'
        btnUpload.style.display ='block'
        videoBtnEnd.style.padding = ' 0px 0px 0px 65%'

})

// repite nuestro guifo
btnRepeat.addEventListener('click', async() =>{
    location.reload()
})

// sube nuestro guifo, lo sube a giphy y guarda el id en el local storage
btnUpload.addEventListener('click', async() => {
    btnRepeat.style.display ='none'
    btnUpload.style.display ='none'
    videoCamara.style.display = 'none'
    cargaLogoGuifo.style.display = 'block'
    subiendoGuifo.style.display = 'block'
    btnCancel.style.display = 'block'
    titleWindow.innerHTML='Subiendo Guifo'
    
    let data = new FormData()
    let blob = await recorder.getBlob()
    let objectURL = URL.createObjectURL(blob);
    data.append('file', blob, 'myGif.gif')

    const res = await fetch (urlApiUpload, {method: 'POST', mode : 'cors', body : data})
    const form = await res.json()

    gifId = form.data.id
    console.log(gifId)
    const actualGifs = JSON.parse(localStorage.getItem('myGifs')) || []
    const newGifs = [...actualGifs, gifId]
    localStorage.setItem('myGifs', JSON.stringify(newGifs))

    windowGuifoReady.style.display ='flex'
    videoCamera.style.display = 'none'
    btnCancel.style.display = 'none'
    
    previewGuifo.src=objectURL

    containerGuifoReady.style.display = 'flex'
    btnListo.style.display = 'block'

    
})
// cancelar guifo y volver a comenzar
btnCancel.addEventListener('click', async() =>{
    location.reload()
})


// copiar link del guifo para compartirlo
btnCopyGuifo.addEventListener('click' , async() =>{

    let res = await fetch (`http://api.giphy.com/v1/gifs/${gifId}?api_key=VjIbJynh15GU8ThxPfIb4ZjpATicN5uy`)       
    let form = await res.json()
    url = form.data.url
    console.log(url)
    const copyClipBoard = url =>{
        const input = document.createElement('textarea')
        input.value = url
        document.body.appendChild(input)
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
    }
    copyClipBoard(url)
})


// boton para descargar guifo creado
btnDownloadGuifo.addEventListener('click', async () => {
    let blob = await recorder.getBlob()
        invokeSaveAsDialog(blob);
})

// re direcciona a la galeria de guifos
btnListo.addEventListener('click', async() => {
    location.href = 'gifos.html'
})






})