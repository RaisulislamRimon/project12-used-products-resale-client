import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CheckoutForm from "../Checkout/Checkout";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const { myOrderId } = useParams();
  const data = useLoaderData();
  const [orderInfo, setOrderInfo] = useState(data);
  console.log(orderInfo);
  const [error, setError] = useState("");
  // fetch(`http://localhost:5000/my-orders/${myOrderId}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     // setInfo(data);
  //     console.log(data);
  //     setInfo(data);
  //   });
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/my-orders/${myOrderId}`)
  //     .then(function (response) {
  //       // handle success
  //       console.log(response.data);
  //       setInfo(response.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       setError(error.message);
  //     });
  // }, [myOrderId]);
  console.log("info state : ", orderInfo);
  return (
    <div>
      <h1 className="text-3xl text-center my-4 underline">
        Payment ({orderInfo?.bookData?.book_name})
      </h1>

      {error && (
        <div className="text-2xl text-red-600 min-h-screen justify-center items-center">
          <h1>{error}</h1>
        </div>
      )}

      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm info={orderInfo} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
