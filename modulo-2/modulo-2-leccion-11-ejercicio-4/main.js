'use strict';

const input = document.querySelector(".js-input");
const text = document.querySelector(".js-parag");

const arr = []; // crear array vacío para almacenar valores del input

function saveInput (){ // guarda el valor del input
localStorage.setItem('name', JSON.stringify(arr)); // guarda los datos y los convierte en string

//const nameSaved = localStorage.getItem('name');
//console.log(nameSaved); cosolear input guardado
}



function handlerParagraph () { // pinta el valor del input en el párrafo
const inputValue = input.value;
text.innerHTML = inputValue;

arr.push(inputValue);

saveInput ();
}




input.addEventListener("keyup", handlerParagraph);