import React from "react";
import Logo from "../assets/spacex_logo.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
      <img className = "web-logo" src={Logo} href="https://www.spacex.com/" />
      </div>

      <div className="rightSide">
        {/*HEADER */}
            
              <div id = "navigation">
                {/*<img src= {rockets[0].flickr_images[0]} alt = "SpaceX Rockets Sprite" />*/}
                <ul class="nav-links">
                  <li class="nav-item"><a href="/vehicles/falcon-9/" aria-label="Falcon 9 vehicle page">Falcon 9</a></li>
                  <li class="nav-item"><a href="/vehicles/falcon-heavy/" aria-label="Falcon Heavy vehicle page">Falcon Heavy</a></li>
                  <li class="nav-item"><a href="/vehicles/dragon/" aria-label="Dragon spacecraft page">Dragon</a></li>
                  <li class="nav-item"><a href="/vehicles/starship/" aria-label="Starship vehicle page">Starship</a></li>
                  <li class="nav-item"><a href="/humanspaceflight/" aria-label="Human Spaceflight page">Human Spaceflight</a></li>
                </ul>
                
              </div>
              {/*HEADER */}
      </div>
    </div>
  );
}

export default Navbar;