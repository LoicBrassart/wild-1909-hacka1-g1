import React from "react";
import "./MainPage.scss";
import Axios from "axios";
import MovieCard from "./MovieCard";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      visibleScreamer: false
    };
  }

  componentDidMount() {
    this.ApiCallHackloween();
    setTimeout(() => {
      this.setState({
        visibleScreamer: true
      });
    }, 4000);
    setTimeout(() => {
      this.setState({
        visibleScreamer: false
      });
    }, 6350);
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
        <video
          className="video"
          src="background-video.mp4"
          loop
          muted
          autoPlay
        ></video>
        <div className="movie-poster-list">
          {this.state.movies.map(movie => (
            <MovieCard
              title={movie.title.replace(/_/g, " ")}
              poster={movie.posterUrl}
            />
          ))}
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
