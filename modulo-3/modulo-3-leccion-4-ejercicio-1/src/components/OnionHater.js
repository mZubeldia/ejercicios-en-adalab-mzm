import React from "react";

class OnionHater extends React.Component {
  render() {
    const handleChange = (ev) => {
      if (ev.target.value.includes("cebolla")) {
        alert("ODIO LA CEBOLLA");
      } else if (ev.target.value.includes("tomate")) {
        alert("Me encanta el tomate");
      }
    };

    return (
      <form>
        <label>
          ¿Qué te gusta comer?
          <input
            type="text"
            placeholder="Tomate"
            onChange={handleChange}
          ></input>
        </label>
      </form>
    );
  }
}

export default OnionHater;
