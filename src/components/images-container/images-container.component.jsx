import React from "react";
import Card from "../card/card.component";

const ImagesContainer = ({ cards }) => {
  return (
    <div className="images-container">
      <Card/>
      {cards.map((card, index) => (
        <Card card={card} key={card.date}/>
      ))}
    </div>
  );
};

export default ImagesContainer;
