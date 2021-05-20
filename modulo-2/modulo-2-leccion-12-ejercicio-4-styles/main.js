"use strict";

const p1 = document.querySelector(".js-text1");

const p1Height = p1.offsetHeight;

console.log(p1Height);

function changeHeight() {
p1.style.height = p1Height / 8; 
p1.style.backgroundColor = 'red';
console.log(p1Height / 5);
}

changeHeight()
