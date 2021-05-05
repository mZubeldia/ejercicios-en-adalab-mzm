'use strict';

function iva (a, b){
    const ivaCalc = a * b;
    return console.log(`El precio sin IVA es ${a}, el IVA es el ${b * 100}% y su total es ${ivaCalc}.`);
}

const ivaResult = iva(10, 0.21);
