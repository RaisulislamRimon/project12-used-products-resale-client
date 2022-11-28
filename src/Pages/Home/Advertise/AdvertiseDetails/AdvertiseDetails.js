import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdvertiseDetails = () => {
  const advertiseId = useParams();
  const [advertiseDetails, setAdvertiseDetails] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/advertise/${advertiseId}`)
      .then((res) => res.json())
      .then((data) => {
        setAdvertiseDetails(data);
        console.log(data);
      });
  }, [advertiseId]);
  return (
    <div>
      <h2>Advertise Details</h2>
      <h3>
        {/* Advertise Id: <span>{advertiseDetails.advertiseId}</span> */}
        Advertise Id: <span>{advertiseDetails._id}</span>
      </h3>
    </div>
  );
};

export default AdvertiseDetails;
