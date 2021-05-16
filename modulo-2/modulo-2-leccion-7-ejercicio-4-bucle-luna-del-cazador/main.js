'use strict';

// última luna del cazador: 5 oct 2017

// luna del cazador: cada 3 años

// calcular 3 * 15 para que dé los 15 resultados  

function calclunaCazador () {

let lastLunaCazadorYear = 2017;


for (let i= 0; i <= 45 ; i =  i + 3) {
  console.log (`La siguiente Luna del cazador será el 5 de octubre de ${lastLunaCazadorYear + i}`);

}
}
calclunaCazador ();