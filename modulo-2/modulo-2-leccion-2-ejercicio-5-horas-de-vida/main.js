'use strict';


const myAge = document.querySelector(".age");
const myAgeNumber = parseInt(myAge.innerHTML);

const yearDays = 365;
const hoursDay = 24;

//const myAgeHours = (yearDays * hoursDay) * 27;
//console.log(myAgeHours);

const resultHours = (yearDays * hoursDay) * myAgeNumber;
//console.log(resultHours);

//prueba funcionamiento concatenación - ej 10
const resultHoursText =  `${yearDays} * ${hoursDay} * ${resultHours}`;

console.log(resultHoursText);