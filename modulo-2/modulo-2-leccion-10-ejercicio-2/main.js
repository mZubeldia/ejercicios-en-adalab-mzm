'use strict';

/*
function getBreeds () {
  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then(response => response.json())
    .then(data => {
      console.log('Breeds data response: ', data);

      const ul = document.querySelector('ul');
      const breeds = data.message;
      let ulContent = '';

      for (const breed of breeds) {
        const breedContent = `<li>${breed}</li>`;
        ulContent += breedContent;
      }
      ul.innerHTML = ulContent;
    });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreeds);
*/
/*
const img = document.querySelector(".js-img");

function getBreeds (dogImg) {

  img.innerHTML = dogImg;

}

  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
.then((response) => response.json())
.then((data) => {
  console.log(data.message);
  getBreeds (dogImg);
});  


const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreeds);
*/

const btn = document.querySelector(".js-btn");

function getDog () {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
  .then(response => response.json())
  .then(data => {
    document.querySelector(".js-img").innerHTML += ` <img src= " ${data.message} " /> `;
  })
}
btn.addEventListener("click", getDog);