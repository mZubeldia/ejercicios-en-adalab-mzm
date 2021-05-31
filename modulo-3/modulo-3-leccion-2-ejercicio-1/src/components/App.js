import React from "react";
import RandomCat from "./RandomCat";
import MediaCard from "./MediaCard";
import CatList from "./CatList";

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
        <CatList />
      </div>
    );
  }
}

export default App;
