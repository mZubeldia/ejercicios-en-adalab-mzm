import React from "react";
import MediaCard from "./MediaCard";

//ejercicio 5, lección 3.2
const MediaList = (props) => {
  return (
    <div>
      <ul>
        <li>
          <MediaCard name="Pepita Flores" date="01 de junio" likes="6" />
        </li>
        <li>
          <MediaCard
            name="Alex Fernández"
            date="Lunes 26 de junio"
            likes="150"
            heartEmoji="❤️"
          />
        </li>
        <li>
          <MediaCard
            name="Antonio García"
            date="17 febrero"
            likes="300"
            heartEmoji="❤️"
          />
        </li>
      </ul>
    </div>
  );
};

export default MediaList;
