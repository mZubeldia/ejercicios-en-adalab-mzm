'use strict';

const inputElementName = document.querySelector(".js-input");
const inputElementSurname = document.querySelector(".js-input2");
const pElement = document.querySelector(".js-p");
const formElement = document.querySelector(".form");
const inputObject = {};

function handleEvent(ev) {
  const eventTarget = ev.target;
}

function renderResult() {
  pElement.innerHTML = `Valor del input: ${inputElementName.value} ${inputElementSurname.value}`;

  // console.log(inputArray);
}

function setLocalStorage2() {
  //setItem recibe siempre dos parámetros en STRING, los que recibe y los que metes
  localStorage.setItem("localList2", JSON.stringify(inputObject));
}

function getLocalStorage2() {
  //hay que volver convertirlo de STRING a lo que sea que fuese en un principio, en este caso un formato JSON
  let list = JSON.parse(localStorage.getItem("localList2"));
  console.log(list);
}

function handleInput(ev) {
  //inputArray.push(ev.target.value);
  const inputName = ev.target.name;
  const inputValue = ev.target.value;
  console.log(inputName, inputValue);

  //inputObject.surname = inputValue;
  //inputObject['surname'] = inputValue;
  inputObject[inputName] = inputValue;
  console.log(inputObject);

  /*inputObject = {
    name: 'asf',
    surname: 'asdfsd'
  }*/
  renderResult();
  setLocalStorage2();
}

formElement.addEventListener("keyup", handleInput);

console.log("Ejercicio 4");
setLocalStorage2();