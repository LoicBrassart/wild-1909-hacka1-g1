import React from "react";
import "./MainPage.scss";
import Axios from "axios";
import MovieCard from "./MovieCard";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleScreamer: false,
      movies: null
    };
  }

  componentDidMount() {
    this.ApiCallHackloween();
    setTimeout(() => {
      this.setState({
        visibleScreamer: true
      });
      this.playSound();
    }, 4000);
    setTimeout(() => {
      this.setState({
        visibleScreamer: false
      });
    }, 6000);
  }

  playSound() {
    const scream = new Audio("/scream1.mp3");
    scream.play();
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
                id={movie.id}
                title={movie.title.replace(/_/g, " ")}
                poster={movie.posterUrl}
              />
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
        <img
          id="screamer-pic"
          className={this.state.visibleScreamer ? "" : "hidden"}
          src="https://media.giphy.com/media/hD5EEkQyiEY1O/giphy.gif"
          alt="the ring"
        />
      </div>
    );
  }
}

export default MainPage;
