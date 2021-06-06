import React from "react";
import Items from "./Items";

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
    //  description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15,
  },
  {
    name: "Agua mineral",
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5,
  },
];

class App extends React.Component {
  render() {
    const arrayItems = items.map((item, index) => {
      {
        /* recorro array items y retorno los valores del objecto almacenarlos en un array. 
        Llamo a mi componente Item y le paso las props que le voy a asignar, para que él lo pinte con etiquetas HTML */
      }
      return (
        <li>
          <Items
            key={index}
            name={item.name}
            description={item.description}
            quantity={item.quantity}
            category={item.category}
            price={item.price}
          />
        </li>
      );
    });
    {
      /* retorno el nuevo array para pintarlo en el HTML  */
    }
    return <ul className="item-list">{arrayItems}</ul>;
  }
}

export default App;
