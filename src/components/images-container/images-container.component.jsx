import React from "react";
import Card from "../card/card.component";

const ImagesContainer = (props) => {
  return (
    <div className="images-container">
      {props.cards.map((card) => (
        <Card
          card={card}
          key={card.url}
          saveFavorite={props.saveFavorite}
          removeFavorite={props.removeFavorite}
          isTheFavoritesPage={props.isTheFavoritesPage}
          isNewFavorite={props.isNewFavorite}
        />
      ))}
    </div>
  );
};

export default ImagesContainer;