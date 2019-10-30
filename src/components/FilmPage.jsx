import React from "react";
import Axios from "axios";
import "./FilmPage.scss";

class FilmPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    Axios.get(
      `https://hackathon-wild-hackoween.herokuapp.com/movies/${this.props.id}`
    ).then(response => {
      this.setState({ movie: response.data.movie });
    });
  }

  render() {
    return (
      <figure className="film">
        <div className="film-div">
          <div id="card">
            <img src={this.state.movie.posterUrl} alt={this.state.title} />
          </div>
          <div className="card-info">
            <h1>{this.state.movie.title}</h1>
            <director>{this.state.movie.director}</director>
            <p>description</p>
            <button>i like this one</button>
          </div>
        </div>
      </figure>
    );
  }
}

export default FilmPage;
