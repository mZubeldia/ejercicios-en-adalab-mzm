'use strict';

const button = document.querySelector('.js-button');
const text = document.querySelector('.js-text');

/*
function changeText () {
    const addText = text.innerHTML = `Mi primer click`;
    console.log(addText);
}
*/


function changeText () {
const newText = text.innerHTML = `mi primer fckg botón`
//return newText;
//return newText `Este es mi primer botón`;
console.log(`este es mi primer botón`)
}

button.addEventListener('click', changeText); 


//button.addEventListener('click', function changeText() {
//    console.log(`este es mi primer botón`)
//
//})