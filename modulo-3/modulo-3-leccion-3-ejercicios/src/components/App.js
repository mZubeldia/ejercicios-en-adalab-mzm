import React from "react";
import HalfPage from "./HalfPage";
import Button from "./Button";
import Students from "./Students";

class App extends React.Component {
  render() {
    return (
      <>
        <main className="main">
          <HalfPage title="Esto es un h1" text="Estoy a la izquierda" />
          <HalfPage secondTitle="Esto es un h2" text="Estoy a la derecha" />
        </main>
        <Button />
        <Students />
      </>
    );
  }
}

export default App;
