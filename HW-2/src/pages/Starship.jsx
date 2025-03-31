import React from "react";
import RocketInfo from "../components/RocketInfo";
//import EngineInfo from "../components/RocketInfo";

function Starship({ rocket }) {
  if (!rocket) return <p>Loading Falcon 9 data...</p>;
  //if (!engine) return <p>Loading engine data...</p>;

  return (
    <div>
      <RocketInfo rocket={rocket} />
      {/*<EngineInfo engine={engine} />*/}
    </div>
  );
}

export default Starship;
