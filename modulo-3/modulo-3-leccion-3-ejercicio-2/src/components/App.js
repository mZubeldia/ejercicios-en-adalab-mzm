import React from "react";
import HalfPage from "./HalfPage";

class App extends React.Component {
  render() {
    return (
      <main className="main">
        <HalfPage title="Soy el title en props">
          <h2>Yo soy un h2</h2>
          <p>Yo soy texto random</p>
        </HalfPage>
        <HalfPage title="Yo soy la otra mitad">
          <p>Y yo más texto random pasado por children</p>
        </HalfPage>
      </main>
    );
  }
}

export default App;
