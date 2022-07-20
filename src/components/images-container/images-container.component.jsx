import React from "react";
import Card from "../card/card.component";

const ImagesContainer = ({
  cards,
  saveFavorite,
  removeFavorite,
  favoritPage,
}) => {
  return (
    <div className="images-container">
      {cards.map((card) => (
        <Card
          card={card}
          key={card.url}
          saveFavorite={saveFavorite}
          removeFavorite={removeFavorite}
          favoritPage={favoritPage}
        />
      ))}
    </div>
  );
};

export default ImagesContainer;