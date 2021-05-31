import React from "react";
import RandomCat from "./RandomCat";
import MediaCard from "./MediaCard";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RandomCat />
        <MediaCard
          name="Alex Fernández"
          date="Lunes 26 de junio"
          likes="150"
          heartEmoji="❤️"
        />
      </div>
    );
  }
}

export default App;
