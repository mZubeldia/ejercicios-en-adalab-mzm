import React from "react";

class Items extends React.Component {
  render() {
    {
      /* Pinto en el HTML los datos que me pasa el componente madre por PROPS */
    }
    return (
      <>
        <p>Nombre: {this.props.name}</p>
        <p>Descripción: {this.props.description}</p>
        <p>Cantidad: {this.props.quantity}</p>
        <p>Categoría: {this.props.category}</p>
        <p>Precio: {this.props.price}€</p>
      </>
    );
  }
}

export default Items;

Items.defaultProps = {
  description: "No hay descripción.",
};
