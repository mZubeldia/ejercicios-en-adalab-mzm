import React from "react";
import RandomCat from "./RandomCat";
//import MediaCard from "./MediaCard";
import CatList from "./CatList";
import MediaList from "./MediaList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RandomCat />
        <MediaList name date likes heartEmoji />
        <CatList />
      </div>
    );
  }
}

export default App;
