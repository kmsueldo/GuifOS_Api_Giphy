document.addEventListener('DOMContentLoaded', () =>  {

let q = document.querySelector('#inputSearch')
let containerOps = document.querySelector('#containerOpciones')
let lupa = document.querySelector('#lupa')
let btnSearch = document.querySelector('#btnSearch')
let themeDay = document.querySelector('#daySearch')



// capturo el valor del input y muestro u oculto las opciones al escribir
q.onkeyup = () => {


        if (q.value.trim() !="" & themeDay.className == 'day-search'){
            containerOps.style.display = 'block'
            lupa.setAttribute('src', './ASSETS/lupa.svg')
            btnSearch.setAttribute('class', 'day-button-search-active')
    
        }
        else if  (q.value.trim() =="" & themeDay.className == 'day-search') {
            containerOps.style.display = 'none'
            lupa.setAttribute('src', './ASSETS/lupa_inactive.svg')
            btnSearch.setAttribute('class', 'day-button-search')
        }
        
        else if (q.value.trim() !="" & themeDay.className == 'black-search'){
            containerOps.style.display = 'block'
            lupa.setAttribute('src', './ASSETS/lupa_light.svg')
            btnSearch.setAttribute('class', 'black-button-search-active')
    
        }
        else {
            containerOps.style.display = 'none'
            lupa.setAttribute('src', './ASSETS/lupa_inactive.svg')
            btnSearch.setAttribute('class', 'black-button-search')
        }

}

})
