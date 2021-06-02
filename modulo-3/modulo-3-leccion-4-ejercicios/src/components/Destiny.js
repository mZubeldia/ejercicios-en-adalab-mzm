import React from "react";
//ejercicio 2, lección 3.4
class Destiny extends React.Component {
  render() {
    const handleSelect = (ev) => {
      alert(`Tu destino es viajar a ${ev.target.value}`);
    };
    return (
      <select onChange={handleSelect} name="select">
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sydney">Sydney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokyo">Tokyo</option>
      </select>
    );
  }
}

export default Destiny;
