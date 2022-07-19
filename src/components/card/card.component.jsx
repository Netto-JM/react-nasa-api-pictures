import React from "react";

const Card = ({ card }) => {
  const { copyright, date, explanation, hdurl, title, url } = card;
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
        <p className="clickable">Add to Favorites</p>
        <p className="card-text">{explanation}</p>
        <small className="text-muted">
          <strong>{date} </strong>
          <span>{copyright}</span>
        </small>
      </div>
    </div>
  );
}

export default Card;