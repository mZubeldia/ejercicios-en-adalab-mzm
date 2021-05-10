'use strict';
console.log(`hola`);

const adalaber1 = {
    name: 'Susana',
    age: 34,
    job: 'periodista'
};
console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.`)

const adalaber2 = {
    name: 'Rocío',
    age: 25,
    job: 'actriz'
};
console.log(`${adalaber2.name}, ${adalaber2.age} años, ${adalaber2.job}.`)

//////////ejercicio 2

const adalaber3 = {};
adalaber3.name = 'Lola';
//adalaber3.run = marathon => `Estoy corriendo ${marathon}`;
adalaber3.runAMarathon = distance => `Estoy corriendo una maratón de ${distance} kilómetros.`;


console.log(adalaber3.runAMarathon("1500"));

//console.log(adalaber3.run("un triatlón"));
