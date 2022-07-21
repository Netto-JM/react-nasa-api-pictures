import React, { useState, useEffect } from "react";



const Card = ({
  card,
  saveFavorite,
  removeFavorite,
  isTheFavoritesPage,
  isNewFavorite,
}) => {
  const [isAdded, setIsAdded] = useState(isTheFavoritesPage);
  const { copyright, date, explanation, hdurl, title, url } = card;

  useEffect(() => {
    if (!isTheFavoritesPage) {
      const isNotNewFavorite = !isNewFavorite(url);
      setIsAdded(isNotNewFavorite);
    }
  }, []);


  return (
    <div className="card">
      <a href={hdurl} title="View Full Image" target="_blank">
        <img
          src={url}
          alt="NASA Picture of the Day"
          className="card-img-top"
          loading="lazy"
        />
      </a>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {isAdded ? (
          <p
            className="clickable"
            onClick={() => {
              removeFavorite(url);
              setIsAdded(false);
            }}
          >
            Remove Favorite
          </p>
        ) : (
          <p
            className="clickable"
            onClick={() => {
              saveFavorite(url);
              setIsAdded(true);
            }}
          >
            Add to Favorites
          </p>
        )}
        <p className="card-text">{explanation}</p>
        <small className="text-muted">
          <strong>{date} </strong>
          <span>{copyright}</span>
        </small>
      </div>
    </div>
  );
};

export default Card;