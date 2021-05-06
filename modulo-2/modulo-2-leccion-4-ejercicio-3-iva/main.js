'use strict';

function iva (precio, porcentaje){
    const ivaCalc = precio * porcentaje;
    return console.log(`El precio sin IVA es ${precio}, el IVA es el ${porcentaje * 100}% y su total es ${ivaCalc * 10}.`);
    //console.log(`El precio sin IVA es ${precio}, el IVA es el ${porcentaje * //100}% y su total es ${ivaCalc * 10}.`);
}

iva(70, 0.21);

const ivaMacarena = iva(50, 0.21);

