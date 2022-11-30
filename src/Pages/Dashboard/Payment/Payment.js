import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { myOrderId } = useParams();
  const [info, setInfo] = useState([]);
  const [error, setError] = useState("");
  axios
    .get(`http://localhost:5000/my-orders/${myOrderId}`)
    .then(function (response) {
      // handle success
      console.log(response.data);
      setInfo(response.data);
    })
    .catch(function (error) {
      // handle error
      setError(error.message);
    });
  return (
    <div>
      <h1 className="text-3xl text-center my-4 underline">
        Payment ({info?.bookData?.book_name})
      </h1>

      {error && (
        <div className="text-2xl text-red-600 min-h-screen justify-center items-center">
          <h1>{error}</h1>
        </div>
      )}
    </div>
  );
};

export default Payment;
