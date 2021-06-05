import "./App.css";
import foto from "./images/foto.png";
//ejercicio 3 leccion 3.1

const data = {
  image:
    "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
  cardTitle: "Bob Dylan",
  cardDate: "May 24, 1941",
  cardDescription:
    "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
  button: {
    url: "https://en.wikipedia.org/wiki/Bob_Dylan",
    label: "Go to wikipedia",
  },
};

const articleTitle = (
  <div className="article-title-wrapper">
    <img className="art-profile-pic" src={foto} alt="unicornio" />
    <div className="article-title-text">
      <h1 className="article-title">{data.cardTitle}</h1>
      <h2 className="article-subt">{data.cardDate}</h2>
    </div>
  </div>
);
const articleDescription = (
  <div className="article-text-wrapper">
    <p>{data.cardDescription}</p>
  </div>
);
const articleFooter = (
  <div className="article-footer">
    <span className="more-info item-footer">Leer más...</span>
    <span className="likes-count item-footer">❤️</span>
  </div>
);

const appRoot = (
  <article className="article">
    {articleTitle} {articleDescription} {articleFooter}
  </article>
);

function App() {
  return appRoot;
}

export default App;
