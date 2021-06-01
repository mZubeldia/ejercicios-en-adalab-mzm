import "../styles/App.css";

//ejercicio 2, lección 3.3

import React from "react";

const HalfPage = (props) => {
  console.log(props);
  return (
    <section className="half-section">
      <h1>{props.title}</h1>
      <h2>{props.secondTitle}</h2>
      <p>{props.text}</p>
    </section>
  );
};

export default HalfPage;
