import React from "react";
import "./MovieCard.css";

function MovieCard(props) {
  return (
    <div className="movie-poster-title">
      <img
        className="single-movie-poster"
        src={props.poster}
        alt={props.title}
      />
      <h2>{props.title}</h2>
    </div>
  );
}

export default MovieCard;
