import React from "react";
import Axios from "axios";
import "./FilmPage.scss";

class FilmPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(
      `https://hackathon-wild-hackoween.herokuapp.com/movies/${id}`
    ).then(response => {
      this.setState({ movie: response.data.movie, loading: true });
    });
  }

  render() {
    return this.state.loading ? (
      <figure className="film">
        <div className="film-div">
          <div id="card">
            <img src={this.state.movie.posterUrl} alt={this.state.title} />
          </div>
          <div className="card-info">
            <h1>{this.state.movie.title.replace(/_/g, " ")}</h1>
            <director>{this.state.movie.director.replace(/_/g, " ")}</director>
            <p>description</p>
            <button>i like this one</button>
          </div>
        </div>
      </figure>
    ) : null;
  }
}

export default FilmPage;
