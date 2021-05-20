"use strict";

const selectElement = document.querySelector(".js-select");
const formElement = document.querySelector(".js-form");
const inputElementName = document.querySelector(".js-inputName");
const inputElementSurname = document.querySelector(".js-inputSurname");
const inputElementTel = document.querySelector(".js-inputTel");
const userList = [
  {
    name: "Juana",
    surname: "Flores",
    tel: 123456,
  },
  {
    name: "Paquita",
    surname: "Salas",
    tel: 666666,
  },
  {
    name: "Concha",
    surname: "Velasco",
    tel: 456789,
  },
  {
    name: "Pepa",
    surname: "Velasco",
    tel: 456789,
  },
];

console.log(userList);

function autoFill() { // rellena los input según la opción seleccionada por el user en el select
  //  for (const user in userList) {
    //  inputElementName.value = userList[user].name;
    //}
 userList[inputElementName] = inputElementName; // enlazar objeto con select.value
}

function handleSelect(ev) { // maneja el evento del select y guarda la opción marcada por el user
  const eventTarget = ev.currentTarget;
  console.log(selectElement.value);

  autoFill();
}

selectElement.addEventListener("click", handleSelect);




/*
autofill
const fillInputs = select.value -> guarda los valores de los select
select.value = userlist.name, userlist.surname, userlist.tel -> relaciona los valores de los select con los diferentes inputs y los asocia al objeto
const fillInputName = document.createTextNode('${userList.name}');
const fillInputSurname = document.createTextNode('${userList.surname}');
const fillInputTel = document.createTextNode('${userList.tel}');
*/