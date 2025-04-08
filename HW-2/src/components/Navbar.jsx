import React, { useState } from "react";
import Logo from "../assets/space_x_logo.png";
import { Link } from "react-router-dom";
import App from "../App";

function Navbar({ rockets }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img className="web-logo" src={Logo} alt="Space X logo" />
      </Link>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li className="nav-item">
          <Link to="/" aria-label="Home">
            Home
          </Link>
        </li>

        {rockets.map(rocket => (
          <li key={rocket.rocket_id} className="nav-item">
            <Link to={`/${rocket.rocket_id}`} aria-label={`${rocket.rocket_name} vehicle page`}>
              {rocket.rocket_name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
}

export default Navbar;
