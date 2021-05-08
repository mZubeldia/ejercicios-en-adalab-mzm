'use strict';

//console.log('hola!');

const buttonArrowDown = document.querySelector(".js-button");
const infoPage = document.querySelector(".info");
const contactPage = document.querySelector(".contact-container");

//función para esconder elementos
function hiddenSection (event) {
event.preventDefault(); // hace que al desclicar el botón, la función siga funcionando

infoPage.classList.toggle("js-hidden");
console.log("hola");
    
}

buttonArrowDown.addEventListener("click", hiddenSection);

//función para hacer elementos reaparecer - NO ES NECESARIO USARLA CON TOGGLE
/*
const buttonArrowUp = document.querySelector(".js-button2");

function showHandler() {
infoPage.classList.remove("js-hidden");

}

buttonArrowUp.addEventListener("click", showHandler);
*/
