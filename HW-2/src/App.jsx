import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import RocketInfo from "./components/RocketInfo";
import Starship from "./assets/starship-logo.png";
import Mechazilla from "./assets/mechazilla.png";

const rocketsEndpoint = "https://api.spacexdata.com/v3/rockets";

function App() {
  const [rockets, setRockets] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  console.log(rockets);

  useEffect(() => {
    const fetchRockets = async () => {
      setisLoading(true);

      try {
        const response = await fetch(rocketsEndpoint);
        const data = await response.json();
        setTimeout(() => {
          setRockets(data);
          setisLoading(false);
        }, 3500);
      } catch (error) {
        console.error("Error fetching your cool rockets: ", error);
      }
      setisLoading(false);
    };

    fetchRockets();
  }, []);

  if (isLoading || rockets.length === 0)
    return (
      <div>
        <div className="launch-setup">
          <img className="tower" src={Mechazilla} />
          <div className="starship-with-flames">
            <img className="starship" src={Starship} />
            <div className="flames">
              <div className="flame"></div>
              <div className="flame"></div>
              <div className="flame"></div>
            </div>
          </div>
        </div>

        <p className="launching-text">Launching data...</p>
      </div>
    );

  return (
    <>
      <Navbar rockets={rockets} />
      <Routes>
        <Route path="/" element={<Home rockets={rockets} />} />
        <Route path="/:id" element={<RocketInfo />} />
      </Routes>
    </>
  );
}

export default App;
