'use strict';

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const listElementsToShow = `<div class="dog-list">
    <ul>
        <li>${firstDogName}
        <img>${firstDogImage}</img>
        </li>
        <li>${secondDogName}
        <img>${secondDogImage}</img>
        </li>
        <li>${thirdDogName}
        <img>${thirdDogImage}</img>
        </li>
    </ul>

</div>`;

const list = document.querySelector(".lista");
list.innerHTML = listElementsToShow;
