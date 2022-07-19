import React from "react";
import Card from "../card/card.component";

const ImagesContainer = ({ cards }) => {
  return (
    <div className="images-container">
      {cards.map((card) => (
        <Card card={card} key={card.date}/>
      ))}
    </div>
  );
};

export default ImagesContainer;