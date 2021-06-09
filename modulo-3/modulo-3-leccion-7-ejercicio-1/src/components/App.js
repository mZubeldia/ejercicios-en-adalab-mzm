import "../styles/App.css";
import React, { useState } from "react";

const App = () => {
  //ejercicio 1, lección 3.7

  const [userName, setName] = useState("");
  const [userDescription, setDescription] = useState("");
  const [userLanguage, setLanguage] = useState("");

  const handleReset = () => {
    setName("");
    setDescription("");
    setLanguage("");
  };

  const handleInput = (ev) => {
    setName(ev.currentTarget.value);
  };

  const handleDescription = (ev) => {
    setDescription(ev.currentTarget.value);
  };

  const handleSelect = (ev) => {
    setLanguage(ev.currentTarget.value);
  };

  return (
    <>
      <main className="main">
        <form className="form">
          <button onClick={handleReset}>Reset</button>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            value={userName}
            onChange={handleInput}
            id="name"
          />
          <label htmlFor="description">Descripción:</label>
          <input
            name="description"
            className="form-textarea"
            type="textarea"
            value={userDescription}
            onChange={handleDescription}
            id="description"
          />
          <label htmlFor="language">Idioma:</label>
          <select
            name="language"
            value={userLanguage}
            onChange={handleSelect}
            id="description"
          >
            <option value="">...</option>
            <option value="Castellano">Castellano</option>
            <option value="Inglés">Inglés</option>
            <option value="Portugués">Portugués</option>
          </select>
        </form>
        <h2>Tu película es: {userName}</h2>
        <p>Su descripción es: {userDescription}</p>
        <p>El idioma seleccionado es: {userLanguage}</p>
      </main>
    </>
  );
};

export default App;
