import React from "react";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="NavBar">
      <h1>LE SITE QUI FAIT PAS PEUR</h1>

      <p>FILMS</p>
      <p>MA LISTE</p>
      <input type="search" value="TU VAS CREUVER!!!" />
      <img src="mask.png" />
    </div>
  );
}

export default NavBar;
