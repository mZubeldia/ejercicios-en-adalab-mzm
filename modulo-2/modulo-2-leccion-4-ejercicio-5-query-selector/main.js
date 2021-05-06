'use strict';

function getEl (a) {
const selector = document.querySelector(a);
selector.innerHTML = `Hola`;

}

const btnEl = getEl('.btn');
