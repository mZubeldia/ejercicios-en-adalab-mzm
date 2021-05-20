"use strict";

const groups = [
  {
    id: '456qwer',
    isFav: true,
    name: 'Pegatina'
  },
  {
    id: '123jhfg',
    isFav: true,
    name: 'Camela'
  },
  {
    id: '234rfdsf',
    isFav: false,
    name: 'AC-DC'
  },
  {
    id: '234rxxy',
    isFav: true,
    name: 'Power-Girl'
  }
];

const ulElement = document.querySelector(".js-list");

const liElement = document.createElement("li");
const textElement = document.createTextNode("dayana");
liElement.appendChild(textElement);
ulElement.appendChild(liElement);

const paintElements = () => {
  for (const group of groups){
    const liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    const textElement = document.createTextNode(group.name);
    liElement.appendChild(textElement);
    //if group isFav === true
    if(group.isFav) {
      liElement.classList.add("red");
    } else {
      liElement.classList.add("blue");
    }
  }
}

paintElements ();


////// ej. 3 

const users = [
  {
    id: '123a',
    name: 'Julia',
    surname: 'López',
    phone: 123456
  },
  {
    id: '426y',
    name: 'Lorena',
    surname: 'Pérez',
    phone: 6789
  },
  {
    id: '5879p',
    name: 'Lucía',
    surname: 'Sánchez',
    phone: 45678
  },
];

const selectElement = document.querySelector(".js-select");
const inputName = document.querySelector(".js-name");
const inputSurname = document.querySelector(".js-surname");
const inputPhone = document.querySelector(".js-tel");

function paintOptions () { //crear option elements del select del HTML
  for (const user of users) {
    const optionElement = document.createElement("option"); //crea el option
    selectElement.appendChild(optionElement); //relaciona el option con el select
    const textElement = document.createTextNode(user.name); //crea el texto del option y lo relaciona con el name del array
    optionElement.appendChild(textElement); //relaciona el texto con el option del select
    optionElement.setAttribute("value", user.name) // añade atributo value a los option, este es el mismo que el name del array
    //optionElement.value = user.name; //otra opción para añadir value a los option

    optionElement.dataset.idPerson = user.id; //añade id a las options para uso de los programadores

  }
}

paintOptions ();

function handleSelect (ev) {
  //const selectValueTarget = ev.target.value; // guarda opción selecccionada
  const dataset = ev;

  const selectValue = selectElement.value; // tb guarda opción selecccionada
  const selectDataSetId = ev.target[0].dataset.idPerson;
  //console.log(`este es el ev target value ${selectValueTarget}`);
  console.log(`este es el id ${selectDataSetId}`);
  console.log(`este es el dataset ${dataset}`);

 // inputName.value = selectValue;
 for (const user of users) {
   if(selectValue === user.name) {
     inputName.value = selectValue;
     inputSurname.value = user.surname;
     inputPhone.value = user.phone;
   }
 }

}

selectElement.addEventListener("change", handleSelect);