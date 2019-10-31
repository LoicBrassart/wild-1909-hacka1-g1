import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-poster-title">
        <Link to={`/movie/${this.props.id}`}>
          <img
            id={this.props.id}
            className="single-movie-poster"
            src={this.props.poster}
            alt={this.props.title}
          />
        </Link>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default MovieCard;
