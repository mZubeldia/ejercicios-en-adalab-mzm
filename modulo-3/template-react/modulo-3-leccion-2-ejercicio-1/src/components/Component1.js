import "../styles/App.css";
import foto from "../images/foto.png";
import React from "react";

const Component1 = (props) => {
  console.log(props);
  return (
    <article className="article">
      <img class="art-profile-pic" src={foto}></img>
      <h1>Este es el Componente 1</h1>
      <p>Holi</p>
    </article>
  );
};

export default Component1;
