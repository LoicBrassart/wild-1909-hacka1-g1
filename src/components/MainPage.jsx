import React from "react";
import "./MainPage.scss";
import Axios from "axios";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.ApiCallHackloween();
  }

  ApiCallHackloween() {
    Axios.get("https://hackathon-wild-hackoween.herokuapp.com/movies").then(
      responce => {
        const movies = responce.data;
        this.setState({ movies });
      }
    );
  }

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
      </div>
    );
  }
}

export default MainPage;
