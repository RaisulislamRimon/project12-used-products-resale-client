import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdvertiseDetails = () => {
  const { advertiseId } = useParams();
  // console.log(advertiseId);
  const [advertiseDetails, setAdvertiseDetails] = useState([]);
  useEffect(() => {
    // fetch(`http://localhost:5000/advertise/${advertiseId}`)
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
        Advertise Id: <span>{advertiseId}</span>
      </h3>
      {/* <div>
        {advertiseDetails.map((advertise) => (
          <div key={advertise._id}>
            <h3>Advertise Title: {advertise.title}</h3>
            <h3>Advertise Price: {advertise.price}</h3>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default AdvertiseDetails;
