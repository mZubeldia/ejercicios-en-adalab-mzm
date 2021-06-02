import React from "react";
//ej 1, lección 4

const handleChange = (ev) => {
  if (ev.target.value.toLowerCase().includes("cebolla")) {
    alert("ODIO LA CEBOLLA");
  }
};

const input = (
  <label>
    ¿Qué te gusta comer?
    <input
      type="textarea"
      placeholdder="¿Qué te gusta comer?"
      onChange={handleChange}
    ></input>
  </label>
);

class OnionHater extends React.Component {
  render() {
    return input;
  }
}
export default OnionHater;
