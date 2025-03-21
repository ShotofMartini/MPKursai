import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import FalconHeavy from "./pages/FalconHeavy.jsx";
import Falcon9 from "./pages/Falcon9.jsx";
import Starship from "./pages/Starship.jsx";
import { Routes, Route } from "react-router-dom";
const rocketsEndpoint = "https://api.spacexdata.com/v3/rockets";

function App() {
  const [rockets, setRockets] = useState();
  console.log(rockets);
  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch(rocketsEndpoint);
      const data = await response.json();
      //console.log(data);
      setRockets(data);
    };

    fetchRockets();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/falcon-9" element={<Falcon9 />} />
        <Route path="/falcon-heavy" element={<FalconHeavy />} />
        <Route path="/starship" element={<Starship />} />
      </Routes>
    </>
  );
}

export default App
