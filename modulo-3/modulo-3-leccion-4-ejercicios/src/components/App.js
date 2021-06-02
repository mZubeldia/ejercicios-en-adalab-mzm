import React from "react";
import Component1 from "./Component1";
import OnionHater from "./OnionHater";
import Destiny from "./Destiny";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Component1 />
        <Destiny />

        <OnionHater />
      </div>
    );
  }
}

export default App;
