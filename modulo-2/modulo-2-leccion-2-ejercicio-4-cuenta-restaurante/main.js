'use strict';


const precioTotal = 128;
const asistentes = 9;
const precioSake = 2;
const divisionEquitativa = (precioTotal - precioSake) / asistentes;

const anaSake = divisionEquitativa + 2;

console.log(divisionEquitativa);
console.log(anaSake);
