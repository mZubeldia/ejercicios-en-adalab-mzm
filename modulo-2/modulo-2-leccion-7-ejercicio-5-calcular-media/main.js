'use strict';

/*
a) Vamos a crear un nuevo array numbers que contendrá 5 números cualesquiera. 

Vamos a recorrer el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). 

Necesitaremos una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. Para comprobar si el resultado es correcto, vamos a loguearlo en la consola.
*/

const numbers = [2, 3, 8, 15, 40];

function calcAverage () {

  let acc = 0;
  numbers[5] = 8;

  for (let i = 0; i < numbers.length; i++) {
    acc = acc + numbers[i] / numbers.length;
  }

  console.log('La media es ' + acc);

}
calcAverage ();