'use strict';

/*
function getEmoji() {
  fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
    .then(response => response.json())
    .then(data => {
      document.querySelector('.js-result').innerHTML = data.result
    });
}
document.querySelector('.js-emoji').addEventListener("click", getEmoji);
*/

/*
//nombre animal aleatorio
function getAnimal() {
  fetch("https://api.rand.fun/animals/name")
  .then(response => response.json())
  .then(data => {
    document.querySelector(".js-result").innerHTML = data.result
  })
}
document.querySelector(".js-emoji").addEventListener("click", getAnimal);
*/

//número entero aleatorio
/*function getNumer () {
  fetch("https://api.rand.fun/number/integer")
  .then(response => response.json())
  .then(data => {
    document.querySelector(".js-result").innerHTML = data.result
  })
}
document.querySelector(".js-emoji").addEventListener("click", getNumer);
*/


//chihuahua aleatorio
function getDog () {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
  .then(response => response.json())
  .then(data => {
    document.querySelector(".js-result").innerHTML = data.message
  })
}
document.querySelector(".js-emoji").addEventListener("click", getDog);
