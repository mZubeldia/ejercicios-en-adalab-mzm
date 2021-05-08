'use strict';



const documentSelect = document.querySelector('.js-container');

function background (){
    if (event.key == 'KeyR') {
        console.log('hola');
    }
    else {
        console.log('adiós');
    }
}


documentSelect.addEventListener('keydown', background);