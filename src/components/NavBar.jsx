import React from "react";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="NavBar">
      <ul className="NavbarComponents">
        <li>
          <img src="./fepapeur.png" />
        </li>
        <li>
          <img src="./films.png" />
        </li>
        <li>
          <img src="./liste.png" />
        </li>
        <container className="SearchBar">
          <li className="SearchInput">
            <input type="search" />
          </li>
          <li>
            <img src="./search.png" />
          </li>
        </container>
        <li>
          <img src="mask.png" />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
