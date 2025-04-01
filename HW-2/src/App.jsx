import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
// import Falcon1 from "./pages/Falcon1.jsx";
// import Falcon9 from "./pages/Falcon9.jsx";
// import FalconHeavy from "./pages/FalconHeavy.jsx";
//import Starship from "./pages/Starship.jsx";
import { Routes, Route } from "react-router-dom";
import RocketInfo from "./components/RocketInfo";

//const rocketsEndpoint = "https://api.spacexdata.com/v3/rockets";

function App() {
  const [rockets, setRockets] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  console.log(rockets);

  // useEffect(() => {
  //   const fetchRockets = async () => {
  //     setisLoading(true);
  //     try {
  //       const response = await fetch(rocketsEndpoint);
  //       const data = await response.json();
  //       setRockets(data);
  //     } catch (error) {
  //       console.error("Error fetching your cool rockets: ", error);
  //     }
  //     setisLoading(false);
  //   };

  //   fetchRockets();
  // }, []);

  //const getRocketById = id => rockets.find(rocket => rocket.rocket_id === id); //need explaining??

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/falcon-1" element={<Falcon1 rocket={getRocketById("falcon1")} />} />
        <Route path="/falcon-9" element={<Falcon9 rocket={getRocketById("falcon9")} />} />
        <Route path="/falcon-heavy" element={<FalconHeavy rocket={getRocketById("falconheavy")} />} />
        <Route path="/starship" element={<Starship rocket={getRocketById("starship")} />} /> */}
        <Route path="/:id" element={<RocketInfo />} />
      </Routes>
    </>
  );
}

export default App;
