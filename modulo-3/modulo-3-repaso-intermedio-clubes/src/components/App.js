import data from "../data/clubs.json";
import ClubList from "./ClubList";
//import App from "../styles/App.scss";

function App() {
  return (
    <main className="main">
      <ClubList data={data} />
    </main>
  );
}

export default App;
