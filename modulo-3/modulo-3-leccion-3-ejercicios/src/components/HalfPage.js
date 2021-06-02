import "../styles/App.css";

//ejercicio 2, lección 3.3

import React from "react";

const HalfPage = (props) => {
  console.log(props);
  return <section className="half-section">{props.children}</section>;
};

export default HalfPage;
