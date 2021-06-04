import "../styles/App.css";
import React from "react";
//ejercicio 1

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pepino: "",
    };

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(ev) {
    let valueInput = ev.target.value;
    this.setState({
      pepino: [valueInput],
    });
  }

  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.handleKeyUp} />
        <p>{this.state.pepino}</p>
      </div>
    );
  }
}

export default Input;
