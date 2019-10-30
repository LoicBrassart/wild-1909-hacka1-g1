import React from "react";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="title">
        <h1 className="strong-title">LE SITE</h1>
        <h1>QUI FAIT PAS PEUR</h1>
      </div>

      <p>FILMS</p>
      <p>MA LISTE</p>
      <div className="search-bar">
        <input type="search" value="TU VAS CREUVER!!!" />
        <img className="search-png" src="search.png" alt="loupe" />
      </div>

      <img src="mask.png" />
    </div>
  );
}

export default NavBar;
