'use strict';

const adalabers = [
  {
  name: 'María',
  age: 29,
  job: 'diseñadora'
  },

  {
  name: 'Lucía',
  age: 31,
  job: 'ingeniera química'
  },

  {
  name: 'Susana',
  age: 34,
  job: 'periodista'
  },

  {
  name: 'Rocío',
  age: 25,
  job: 'actriz'
  },

  {
  name: 'Inmaculada',
  age: 21,
  job: 'diseñadora'
  }

];
/*
const adalabersAge = adalabers["age"];
console.log(adalabersAge);
*/

//sacar cuántas diseñadoras adalabers.job

function countDesigners () {

}

//sacar quién es la más joven adalabers.age
function theYoungest () {

adalabers.age

}


//calcular la edad media de las adalabers adalabers.age
function averageAge () {
  let acc = 0;
  const adalabersAge = adalabers["age"];
console.log(adalabersAge);
  for (let i = 0; i < adalabers.length; i++) {
    acc = acc + acc[i];
  }
  let totalAdalabersAge = adalabers.age;
  let calcAverageAge = acc / totalAdalabersAge;
  return console.log(`La media de edad de las adalabers es de ${calcAverageAge}`);
}
averageAge ();


//contar el nº total de adalabers
function countAdalabers () {

let totalAdalabers = adalabers.length;
return console.log(`Hay un total de ${totalAdalabers} adalabers.`);

}

countAdalabers () 
