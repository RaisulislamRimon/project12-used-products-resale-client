import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            // src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            src="https://images.pexels.com/photos/5883535/pexels-photo-5883535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="max-w-lg h-full rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl mb-7 font-bold">
              <div>Second Hand Books,</div>
              <div className="mt-4">Buy & Sell Now</div>
            </h1>
            <p className="py-6">
              Best places to buy and sell almost every kinds of books. This is
              the best place for buying and selling second hands books. We are
              great with communication and have the best interest for both
              sellers and buyers.
            </p>
            <Link to="/products-categories">
              <button className="btn btn-accent hover:text-white">
                See All Books Categories
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
