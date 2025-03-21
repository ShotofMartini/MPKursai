import React from "react";
import Logo from "../assets/space_x_logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to = "/" >
          <img className = "web-logo" src={Logo} href="https://www.spacex.com/" alt="Space X logo"/>
        </Link>
      </div>

      <div className="rightSide">
        <div id = "navigation">
          <ul class="nav-links">
            <li class="nav-item"><a href="/" aria-label="Home">Home</a></li>
            <li class="nav-item"><a href="/falcon-9/" aria-label="Falcon 9 vehicle page">Falcon 9</a></li>
            <li class="nav-item"><a href="/falcon-heavy/" aria-label="Falcon Heavy vehicle page">Falcon Heavy</a></li>
            <li class="nav-item"><a href="/starship/" aria-label="Starship vehicle page">Starship</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
