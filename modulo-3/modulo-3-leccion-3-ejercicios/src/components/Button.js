import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        className={`btn btn-${this.props.styling}`}
        type="button"
        name="button"
      >
        {this.props.label}
      </button>
    );
  }
}

// Así definimos las defaultProps
Button.defaultProps = {
  styling: "success", // from Bootstrap classes: primary, secondary, success, info, warning, danger, link
  label: "Aceptar",
};

export default Button;
