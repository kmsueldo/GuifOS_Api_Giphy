document.addEventListener('DOMContentLoaded', () => {

btnTheme = document.querySelector('#buttonTheme')
let color = (localStorage.getItem('color'))


const downloadGifs = 'http://api.giphy.com/v1/gifs/'
const apiKey = '?api_key=VjIbJynh15GU8ThxPfIb4ZjpATicN5uy'


/* api.giphy.com/v1/gifs/{gif_id} */


const dayGifos = () =>{
    if (color == 'black'){
    console.log('color negro')
        document.querySelector('#bodyStyle').setAttribute('class', 'black-body')
        document.querySelector('#blackLogo').setAttribute('src', './ASSETS/gifOF_logo_dark.png')
        document.querySelector('#blackBtnCrear').setAttribute('class', 'black-button-crear')
        document.querySelector('#blackBtnStyleCrear').setAttribute('class', 'style-black-button-crear')
        document.querySelector('#buttonTheme').setAttribute('class', 'black-button-elegir')
        document.querySelector('#styleBtnElegir').setAttribute('class', 'style-black-button-elegir')
        document.querySelector('#buttonThemeDrop').setAttribute('class', 'black-button-drop')
        document.querySelector('#BtnGifos').setAttribute('class', 'black-container-gifos')
        document.querySelector('#optionDay').setAttribute('class', 'option-day-black')
        document.querySelector('#optionBlack').setAttribute('class', 'option-night-black')
        }

    else{
        document.querySelector('#bodyStyle').setAttribute('class', 'day-body')
        document.querySelector('#blackLogo').setAttribute('src', './ASSETS/gifOF_logo.png')
        document.querySelector('#blackBtnCrear').setAttribute('class', 'day-button-crear')
        document.querySelector('#blackBtnStyleCrear').setAttribute('class', 'style-button-crear')
        document.querySelector('#buttonTheme').setAttribute('class', 'day-button-elegir')
        document.querySelector('#styleBtnElegir').setAttribute('class', 'style-button-elegir')
        document.querySelector('#buttonThemeDrop').setAttribute('class', 'day-button-drop')
        document.querySelector('#BtnGifos').setAttribute('class', 'day-container-gifos')
        document.querySelector('#optionDay').setAttribute('class', 'option-day')
        document.querySelector('#optionBlack').setAttribute('class', 'option-night')
        }
}



const ShowGifosGalery =  async () =>{


    let myGifs  = JSON.parse(localStorage.getItem('myGifs'))
    console.log(myGifs)

    let containerGalery = document.querySelector('#containerGalery')
    containerGalery.innerHTML = ''

    for (let i = 0; i < myGifs.length; i++) {
        let gif = myGifs [i]; 
        let img = document.createElement('img')
        let res = await fetch (`http://api.giphy.com/v1/gifs/${gif}?api_key=VjIbJynh15GU8ThxPfIb4ZjpATicN5uy`)       
        const form = await res.json()
        img.src = form.data.images.fixed_height.url        
        containerGalery.appendChild(img) 
        
    }

    


}

dayGifos()
ShowGifosGalery()



})