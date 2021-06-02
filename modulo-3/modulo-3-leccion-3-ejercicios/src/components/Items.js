import React from "react";

class Items extends React.Component {
  render() {
    const arrayList = items;

    return (
      <div>
        <h1>Pintar listados con React:</h1>
        {/* con este map iteramos el array de items */}
        {items.map((item) => {
          // cada return retorna un li
          return (
            <li>
              <h2>Nombre: {item.name}</h2>
              <p>Descripción: {item.description}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Categoría: {item.category}</p>
              <p>Precio: {item.price}</p>
            </li>
          );
          // el map retorna un array de li, es decir, un listado de HTML
        })}
      </div>
    );
  }
}

App.defaultProps = {
  description: "no hay descripción.",
};

export default Items;
