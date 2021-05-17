'use strict';

const input = document.querySelector(".js-input");
const text = document.querySelector(".js-parag");


function saveInput (input){ // guarda el valor del input
//localStorage.setItem('inputValue', JSON.stringify(input)); // guarda los datos y los convierte en string

//const savedInput = JSON.parse(localStorage.getItem(input)); // recupera los datos

localStorage.setItem('name', input);
const name = localStorage.getItem('name');
console.log(name); 

}


function handlerParagraph () { // pinta el valor del input en el párrafo
  const inputValue = input.value;
  text.innerHTML = inputValue;
  //return inputValue;
  saveInput (inputValue);
}




input.addEventListener("keyup", handlerParagraph);