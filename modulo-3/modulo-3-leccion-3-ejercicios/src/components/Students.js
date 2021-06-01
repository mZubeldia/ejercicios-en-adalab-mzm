import React from "react";

//ejercicio 1, lección 3.3

class Students extends React.Component {
  render() {
    const adalabers = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
      },
      {
        promo: "B",
        name: "María",
        age: 21,
      },
      {
        promo: "A",
        name: "Lucía",
        age: 22,
      },
    ];
    return (
      <>
        <h1>Listado de adalabers:</h1>
        {adalabers.map((adalaber) => {
          // cada return retorna un li
          return (
            <li>
              <h2>Nombre: {adalaber.name}</h2>
              <p>Promo: {adalaber.promo}</p>
              <p>Edad: {adalaber.age}</p>
            </li>
          );
          // el map retorna un array de li, es decir, un listado de HTML
        })}
      </>
    );
  }
}

export default Students;

/* probando filtrar las promos del array, ej 1.2, lección 3.3
        <h1>Listado adalabers de la promo A.</h1>
        {adalabers.filter((adalaber) => {
          return (
            <li>
              <h2>Nombre: {adalaber.name}</h2>:
            </li>
          );
        })}
*/
