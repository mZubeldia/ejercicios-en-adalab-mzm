import React from "react";
import RandomCat from "./RandomCat";
import MediaCard from "./MediaCard";
import CatList from "./CatList";
import MediaList from "./MediaList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RandomCat />
        <MediaList />
        <CatList width="400" height="200" />
        <MediaCard name date likes heartEmoji />
      </div>
    );
  }
}

export default App;
