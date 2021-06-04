import React from "react";
import Cuadrado from "./Cuadrado";
import Input from "./Input";
import SheepCounter from "./SheepCounter";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Input />
        <Cuadrado />
        <SheepCounter />
      </div>
    );
  }
}

export default App;
