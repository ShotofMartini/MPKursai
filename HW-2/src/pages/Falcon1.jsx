import React from "react";
import RocketInfo from "../components/RocketInfo";

function Falcon1({ rocket }) {
  if (!rocket) return <p>Loading Falcon 1 data...</p>;

  return (
    <div>
      <RocketInfo rocket={rocket} />
    </div>
  );
}

export default Falcon1;
