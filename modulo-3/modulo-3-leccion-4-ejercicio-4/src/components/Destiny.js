import CityImage from "./CityImage";
import React from "react";

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.userCity = "..."; //declara el estado inicial del "userCity"
  }
  handleSelect = (ev) => {
    this.userCity = ev.target.value; //declara userCity con el valor del value del Select
    alert(`El destino seleccionado es ${ev.target.value}`);
    this.forceUpdate();
  };
  render() {
    return (
      <>
        <form>
          <label>Elige tu destino ideal: </label>
          <select name="destination" onChange={this.handleSelect}>
            <option value="">...</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Sydney">Sydney</option>
            <option value="Praga">Praga</option>
            <option value="Boston">Boston</option>
            <option value="Tokyo">Tokyo</option>
          </select>
        </form>
        <CityImage city={this.userCity} />
      </>
    );
  }
}

export default Destiny;
