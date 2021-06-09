import React from "react";
import "../styles/App.css";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.isHating = false; //declara el estado inicial del "isHating"
  }

  handleChange = (ev) => {
    if (ev.target.value.toLowerCase().includes("cebolla")) {
      //al cambiar el value a minúscula, a condición aplica sin importar cómo esté escrita
      this.isHating = true;
      this.forceUpdate();
    } else {
      this.isHating = false;
      this.forceUpdate();
    }
  };

  render() {
    //crear constante que guarde el estado en el que está el "isHating" para poder seguir aplicando la condición
    const classHate =
      this.isHating === true ? "form-textarea hate" : "form-textarea";
    return (
      <main className="main">
        <form className="form">
          <label className="form-label">
            ¿Qué te gusta comer?
            <input
              className={classHate}
              type="textarea"
              placeholder="Tomate"
              onChange={this.handleChange}
            ></input>
          </label>
        </form>
      </main>
    );
  }
}

export default OnionHater;
