import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(20);

  const handleButton = () => {
    setNumber(number + 1);
  };

  const [gift, setGift] = useState(1);

  const handleButtonGift = () => {
    setGift(gift + 1);
  };

  //ejercicio 1, lección 3.6
  return (
    <div className="App">
      <p>"Hoy tengo {number} años de edad"</p>
      <button onClick={handleButton}>Hazme más viejo</button>
      {/*ejercicio 2*/}
      <p>"Tengo {gift} regalos"</p>
      <button onClick={handleButtonGift}>Dame regalos</button>
    </div>
  );
};

export default App;
