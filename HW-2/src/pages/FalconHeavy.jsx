import React from "react";
import RocketInfo from "../components/RocketInfo";

function FalconHeavy({ rocket }) {
  if (!rocket) return <p>Loading Falcon 9 data...</p>;

  return (
    <div>
      <RocketInfo rocket={rocket} />
    </div>
  );
}

export default FalconHeavy;
