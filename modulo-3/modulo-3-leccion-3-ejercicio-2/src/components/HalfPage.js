import "../styles/App.css";

//ejercicio 2, lección 3.3

import React from "react";

class HalfPage extends React.Component {
  render() {
    return (
      <>
        <section className="half-section">
          <h1>{this.props.title}</h1>
          {this.props.children}
        </section>
      </>
    );
  }
}

export default HalfPage;
