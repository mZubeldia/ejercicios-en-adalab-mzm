import React from "react";
import Items from "./Items";
//import HalfPage from "./HalfPage";
//import Button from "./Button";
//import Students from "./Students";

class App extends React.Component {
  render() {
    const items = [
      {
        name: "Cereales con chocolate",
        description: "Cereales rellenos de chocolate",
        quantity: 2,
        category: "Cereales",
        price: 5,
      },
      {
        name: "Hamburguesa con queso",
        description: "Hamburguesa rica y saludable",
        quantity: 1,
        category: "Fast-food",
        price: 15,
      },
      {
        name: "Agua mineral",

        quantity: 2,
        category: "Bebida",
        price: 5,
      },
    ];
    const result = items.map((item) => {
      return;
    });
  }
}

export default App;

/*
        name={items.name}
        description={items.description}
        quantity={items.quantity}
        category={items.category}
        price={items.price}
*/

/*
ejercicios 1,2
        <main className="main">
          <HalfPage>
            <h1>Esto es un h1</h1>
            <p>Estoy a la izquierda</p>
          </HalfPage>
          <HalfPage>
            <h2>Esto es un h2</h2>
            <p>Estoy a la derecha</p>
          </HalfPage>
        </main>
        <Button />
        <Students />
*/
