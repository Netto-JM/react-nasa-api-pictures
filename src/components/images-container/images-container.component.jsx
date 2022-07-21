import React from "react";
import Card from "../card/card.component";

const ImagesContainer = ({
  cards,
  saveFavorite,
  removeFavorite,
  isTheFavoritesPage,
  isNewFavorite,
}) => {
  return (
    <div className="images-container">
      {cards.map((card) => (
        <Card
          card={card}
          key={card.url}
          saveFavorite={saveFavorite}
          removeFavorite={removeFavorite}
          isTheFavoritesPage={isTheFavoritesPage}
          isNewFavorite={isNewFavorite}
        />
      ))}
    </div>
  );
};

export default ImagesContainer;