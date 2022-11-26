import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="max-w-lg h-full rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl mb-7 font-bold">
              <div>Second Hand Products,</div>
              <div className="mt-4">Buy & Sell Now</div>
            </h1>
            <p className="py-6">
              Best places to buy and sell almost everything. This is a best
              place for buying and selling online assets. We are great with
              communication and have the best interest for both sellers and
              buyers.
            </p>
            <button className="btn btn-accent text-white">
              See All Categories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
