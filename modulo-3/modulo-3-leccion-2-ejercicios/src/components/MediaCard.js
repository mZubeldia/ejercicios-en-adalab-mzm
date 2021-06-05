import "../App.css";
import foto from "../images/foto.png";
import React from "react";

/* //lección 2.3 ejercicio 1 y 2
class MediaCard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <article className="article">
        <div className="article-title-wrapper">
          <img src={foto} className="art-profile-pic" alt="unicornio" />
          <div className="article-title-text">
            <h1 className="article-title">{this.props.name}</h1>
            <h2 className="article-subt">{this.props.date}</h2>
          </div>
        </div>
        <div className="article-text-wrapper">
          <p className="textClassName">
            Párrafo1 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Expedita maxime, dolorem quo dolores tempore inventore dolorum est
            nulla omnis maiores reiciendis neque cupiditate error, voluptates
            pariatur unde non tempora quibusdam?
          </p>
          <p>
            Sequi rem facere deserunt, quos incidunt mollitia odit asperiores,
            non id alias eaque. Eos impedit ad sint laboriosam id soluta
            repudiandae autem expedita quod. Officia reiciendis officiis totam
            reprehenderit enim. Natus blanditiis eius a dicta laboriosam
            reprehenderit asperiores ullam, laudantium, cupiditate nam eaque,
            assumenda quos omnis autem eligendi veritatis dolorem inventore
            voluptate sit sed? Esse, doloremque sunt. Ipsa, sint unde.
          </p>
        </div>
        <div className="article-footer">
          <span className="more-info item-footer">Leer más...</span>
          <span className="likes-count item-footer">
            {this.props.likes} {this.props.heartEmoji}
          </span>
        </div>
      </article>
    );
  }
}


*/
//lección 2.3 ejercicio 3
//Convierte el componente MediaCard del ejercicio anterior en un componente funcional.

const MediaCard = (props) => {
  console.log(props);
  return (
    <article className="article">
      <div className="article-title-wrapper">
        <img src={foto} className="art-profile-pic" alt="unicornio" />
        <div className="article-title-text">
          <h1 className="article-title">{props.name}</h1>
          <h2 className="article-subt">{props.date}</h2>
        </div>
      </div>
      <div className="article-text-wrapper">
        <p className="textClassName">
          Párrafo1 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Expedita maxime, dolorem quo dolores tempore inventore dolorum est
          nulla omnis maiores reiciendis neque cupiditate error, voluptates
          pariatur unde non tempora quibusdam?
        </p>
        <p>
          Sequi rem facere deserunt, quos incidunt mollitia odit asperiores, non
          id alias eaque. Eos impedit ad sint laboriosam id soluta repudiandae
          autem expedita quod. Officia reiciendis officiis totam reprehenderit
          enim. Natus blanditiis eius a dicta laboriosam reprehenderit
          asperiores ullam, laudantium, cupiditate nam eaque, assumenda quos
          omnis autem eligendi veritatis dolorem inventore voluptate sit sed?
          Esse, doloremque sunt. Ipsa, sint unde.
        </p>
      </div>
      <div className="article-footer">
        <span className="more-info item-footer">Leer más...</span>
        <span className="likes-count item-footer">
          {props.likes} {props.heartEmoji}
        </span>
      </div>
    </article>
  );
};

export default MediaCard;
