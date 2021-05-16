'use strict';

const btn = document.querySelectorAll(".js-btn");

//btn[0].innerHTML = "hola";

function btnHandler (event) {
event.preventDefault()

for (let i = 0; i < btn.length; i++) {
btn[i].classList.toggle("btn-alarm");
  }

}



btn.addEventListener('click', btnHandler);