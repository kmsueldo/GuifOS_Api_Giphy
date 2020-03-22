document.addEventListener('DOMContentLoaded', () => {
let btnTheme = document.querySelector('#buttonTheme')
let buttonThemeDrop = document.querySelector('#buttonThemeDrop')
let optionTheme = document.querySelector('#optionTheme')
let btnOptionDay = document.querySelector('#optionDay')
let btnOptionBlack = document.querySelector('#optionBlack')


//funciones para desplegar opciones de themes
btnTheme.onclick = () =>{
        if ( optionTheme.style.display = 'none'){
            optionTheme.style.display = 'flex'  
        }
}
buttonThemeDrop.onclick = () =>{
    if ( optionTheme.style.display = 'none'){
        optionTheme.style.display ='flex'  
    }    
}



// funciones para setear clases dark o day
btnOptionDay.onclick = () =>{
    localStorage.setItem('color', 'day')

    if (optionTheme.style.diplay = 'flex'){
        optionTheme.style.display = 'none'
    }
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
    document.querySelector('#daySearch').setAttribute('class', 'day-search')
    document.querySelector('#dayContainerSearch').setAttribute('class', 'day-container-search')
    document.querySelector('#inputSearch').setAttribute('class', 'day-input-search')
    document.querySelector('#btnSearch').setAttribute('class', 'day-button-search')
    document.querySelector('#lupa').setAttribute('src', './ASSETS/lupa_inactive.svg')
    document.querySelector('#containerOpciones').setAttribute('class', 'day-container-opciones')
    document.querySelector('#btnOpciones').setAttribute('class', 'day-opciones')

}
btnOptionBlack.onclick = () =>{
    localStorage.setItem('color', 'black')

    if (optionTheme.style.diplay = 'flex'){
        optionTheme.style.display = 'none'
    }
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
    document.querySelector('#daySearch').setAttribute('class', 'black-search')
    document.querySelector('#dayContainerSearch').setAttribute('class', 'black-container-search')
    document.querySelector('#inputSearch').setAttribute('class', 'black-input-search')
    document.querySelector('#btnSearch').setAttribute('class', 'black-button-search')
    document.querySelector('#lupa').setAttribute('src', './ASSETS/Combined Shape.svg')
    document.querySelector('#containerOpciones').setAttribute('class', 'black-container-opciones')
    document.querySelector('#btnOpciones').setAttribute('class', 'black-opciones')
    
}

})