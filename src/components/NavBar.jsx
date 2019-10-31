import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  sixFunction() {
    const newSearch = this.state.search + "6";
    this.setState({ search: newSearch });
  }

  dieInsect() {
    this.setState({ search: "DIE INSECT" });
  }

  normalFunction() {
    const newSearch = document.getElementById("search").value;
    this.setState({ search: newSearch });
  }

  handleChange() {
    let dice = Math.floor(Math.random() * Math.floor(4));
    switch (dice) {
      case 1:
        this.sixFunction();
        break;
      case 2:
        this.dieInsect();
        break;
      case 3:
        this.normalFunction();
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <div className="NavBar">
        <div className="title">
          <h1 className="strong-title">LE SITE</h1>
          <h1>QUI FAIT PAS PEUR</h1>
        </div>
        <Link to="/">
          <p>FILMS</p>
        </Link>
        <p>MA LISTE</p>
        <div className="search-bar" onChange={() => this.handleChange()}>
          <input id="search" type="search" value={this.state.search} />
          <img className="search-png" src="/search.png" alt="loupe" />
        </div>

        <img src="/mask.png" />
      </div>
    );
  }
}

export default NavBar;
