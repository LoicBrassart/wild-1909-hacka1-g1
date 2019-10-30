import React from "react";
import "./MainPage.scss";
import Axios from "axios";
import MovieCard from "./MovieCard";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null
    };
  }

  componentDidMount() {
    this.ApiCallHackloween();
  }

  ApiCallHackloween = () => {
    Axios.get("https://hackathon-wild-hackoween.herokuapp.com/movies").then(
      response => {
        const movies = response.data.movies;
        this.setState({ movies });
      }
    );
  };

  render() {
    return (
      <div className="main">
        <div className="video">
          <video src="background-video.mp4" loop muted autoPlay></video>
        </div>
        <div className="movie-poster-list">
          {this.state.movies ? (
            this.state.movies.map(movie => (
              <MovieCard
                title={movie.title.replace(/_/g, " ")}
                poster={movie.posterUrl}
              />
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    );
  }
}

export default MainPage;
