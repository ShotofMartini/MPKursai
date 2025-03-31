// components/EngineInfo.jsx
import React from "react";

function EngineInfo({ engine }) {
  return (
    <div className="engine-info">
      <h2>{engine.engine_name}</h2>
      <img src={engine.flickr_images[1]} alt={engine.engine_name} width="600" />
    </div>
  );
}

export default EngineInfo;
