'use strict';


const arr = [];

function get100Numbers (){

for (let i = 0; i <= 100; i++) {
arr.push(i);
console.log(arr); 
  }

}

//llama función getNumbers y revierte el orden
function getReversed100Numbers (){
get100Numbers () 
arr.reverse();
console.log(arr);
}

getReversed100Numbers ()
