import React from "react";
//ejercicio 1 3.3

class App extends React.Component {
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
          return (
            <li>
              <h2>Nombre: {adalaber.name}</h2>
              <p>Promo: {adalaber.promo}</p>
              <p>Edad: {adalaber.age}</p>
            </li>
          );
        })}
      </>
    );
  }
}

export default App;
