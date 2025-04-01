// // components/RocketInfo.jsx
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// const rocketsEndpoint = "https://api.spacexdata.com/v3/rockets";

// function RocketInfo({ rocket }) {

//   return (
//     <div className="rocket-info">
//       <h2>{rocket.rocket_name}</h2>
//       <img src={rocket.flickr_images[1]} alt={rocket.rocket_name} width="600" />
//       <p>{rocket.description}</p>
//       <p><strong>First Flight:</strong> {rocket.first_flight}</p>
//       <p><strong>Height:</strong> {rocket.height.meters} m</p>
//       <p><strong>Mass:</strong> {rocket.mass.kg} kg, (~{Math.round(rocket.mass.kg/1000)} t)</p>
//       <p><strong>More info:</strong> <a href={rocket.wikipedia} target="_blank">{rocket.wikipedia}</a></p>
//     </div>    
//   );
// }

// export default RocketInfo;


// components/RocketInfo.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const rocketsEndpoint = "https://api.spacexdata.com/v3/rockets/";

function RocketInfo() {
  const [rocket, setRocket] = useState();
  const params = useParams();

  useEffect(() => {
      const fetchRocket = async () => {
        try {
          const response = await fetch(rocketsEndpoint + params.id);
          const data = await response.json();
          setRocket(data);
          console.log(data)
        } catch (error) {
          console.error("Error fetching your cool rockets: ", error);
        }
      };
  
      fetchRocket();
    }, [params.id]);
  
    
  if (!rocket) return <p>Loading {params.id} data...</p>;
  
  console.log(params);
  return (
    <div className="rocket-info">
      <h2>{rocket.rocket_name}</h2>
       <img src={rocket.flickr_images[1]} alt={rocket.rocket_name} width="600" />
       <p>{rocket.description}</p>
       <p><strong>First Flight:</strong> {rocket.first_flight}</p>
       <p><strong>Height:</strong> {rocket.height.meters} m</p>
       <p><strong>Mass:</strong> {rocket.mass.kg} kg, (~{Math.round(rocket.mass.kg/1000)} t)</p>
       <p><strong>More info:</strong> <a href={rocket.wikipedia} target="_blank">{rocket.wikipedia}</a></p>
    </div>    
  );
}

export default RocketInfo;
