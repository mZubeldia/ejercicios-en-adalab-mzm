'use strict';

//console.log('hola!');
/*
const buttonArrowDown = document.querySelector(".js-button");
const buttonArrowUp = document.querySelector(".js-button-up");

const infoPage = document.querySelector(".info");
const contactPage = document.querySelector(".contact-container");
//función para esconder elementos
function hiddenSection (event) {
event.preventDefault(); // hace que al desclicar el botón, la función siga funcionando

infoPage.classList.toggle("js-hidden");
buttonArrowUp.classList.toggle("js-hidden");
buttonArrowDown.classList.toggle("js-hidden");
console.log("hola");
    
}

buttonArrowDown.addEventListener("click", hiddenSection);
buttonArrowUp.addEventListener("click", hiddenSection);
*/


//función dentro de función


const buttonArrowDown = document.querySelector(".js-button");
const buttonArrowUp = document.querySelector(".js-button-up");

const buttonArrowDown2 = document.querySelector(".js-button2");
const buttonArrowUp2 = document.querySelector(".js-button-up2");

const infoPage = document.querySelector(".details-container");
const contactPage = document.querySelector(".contact-container");


function hiddenSectionHandler (event) {

event.preventDefault();

    function hideSection (section) {
    section.classList.toggle("js-hidden");

    }

    hideSection(infoPage);
    hideSection(contactPage);

    hideSection(buttonArrowUp);
    hideSection(buttonArrowDown);

}

buttonArrowDown.addEventListener("click", hiddenSectionHandler);
buttonArrowUp.addEventListener("click", hiddenSectionHandler);

buttonArrowDown2.addEventListener("click", hiddenSectionHandler);
buttonArrowUp2.addEventListener("click", hiddenSectionHandler);