'use strict';

const button = document.querySelector('.js-btn');
const nameInput = document.querySelector('.js-name');

function hi () {

const userInput = nameInput.value;
console.log (`Hola ${userInput}`);
}

button.addEventListener('click', hi);