import "../App.css";
import foto from "../images/foto.png";
import React from "react";

class MediaCard extends React.Component {
  render() {
    return (
      <article className="article">
        <div className="article-title-wrapper">
          <img
            className="article-title-pic"
            src={foto}
            className="art-profile-pic"
            alt="unicornio"
          />
          <div className="article-title-text">
            <h1 className="article-title">Alex Fernández</h1>
            <h2 className="article-subt">Lunes 26 de junio</h2>
          </div>
        </div>
        <div className="article-text-wrapper">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            maxime, dolorem quo dolores tempore inventore dolorum est nulla
            omnis maiores reiciendis neque cupiditate error, voluptates pariatur
            unde non tempora quibusdam?
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
          <span className="likes-count item-footer">❤️</span>
        </div>
      </article>
    );
  }
}

export default MediaCard;
