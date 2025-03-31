import React, { useState } from "react";
import Logo from "../assets/space_x_logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
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
        <li className="nav-item">
          <Link to="/falcon-1" aria-label="Falcon 1 vehicle page">
            Falcon 1
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/falcon-9" aria-label="Falcon 9 vehicle page">
            Falcon 9
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/falcon-heavy" aria-label="Falcon Heavy vehicle page">
            Falcon Heavy
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/starship" aria-label="Starship vehicle page">
            Starship
          </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
}

export default Navbar;
