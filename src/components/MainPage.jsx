import React from "react";
import "./MainPage.scss";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
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
