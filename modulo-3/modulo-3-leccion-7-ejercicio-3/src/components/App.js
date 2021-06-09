import React, { useState } from "react";
import Form from "./Form";
import CardPreview from "./CardPreview";
import "../styles/App.css";

const App = () => {
  //ejercicio 3, lección 3.7
  const [name, setName] = useState("");
  const [language, setlanguage] = useState("");
  const [genres, setGenres] = useState("[]");

  const handleInput = (id, value) => {
    setName(value);
  };

  const handleSelect = (id, value) => {
    setLanguage(value);
  };

  const handleCheckbox = (id, value) => {
    setGenres(value);
    if (gender.includes(value)) {
      const newGenres = genres.filter((genre) => genre !== value);
      setGenres(newGenres);
    } else if (genres.length < 3) {
      const newGenres = [...genres, value];
      setGenres(newGenres);
    } else {
      alert("Solo puedes elegir 3 géneros");
    }
  };

  return (
    <main className="main">
      <Form />
      <CardPreview />
    </main>
  );
};

export default App;
