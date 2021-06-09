import React from 'react';


class OnionHater extends React.Component {
  render() 
  {
  const handleChange = (ev) => {
    if (ev.target.value.includes("cebolla")) {
      alert("ODIO LA CEBOLLA");
    } else {
        alert(ev.target.value + "no está mal")
    };
  
  
    return (
      <label>
      ¿Qué te gusta comer?
      <input type="text" placeholder="Tomate" onChage={handleChange}></input>
    </label>
    );
  }
}



export default OnionHater;