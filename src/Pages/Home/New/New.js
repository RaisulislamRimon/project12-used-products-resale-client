import React from "react";
import { Link } from "react-router-dom";

const New = () => {
  return (
    <div>
      <div className="mt-20">
        <div className="card lg:card-side ">
          <div className="card-body lg:w-1/3">
            <h2 className="card-title md:text-2xl lg:text-5xl mb-7">
              Online Buy Sell Club <br /> For Your Reading & Learning
            </h2>
            <p className="">
              This is the best online reading & learning platform. Here you can
              buy and sell all kinds of books. If you want to sell your sencond
              hand book, you can always sell it here. We have a lot of customers
              all over the world.
            </p>
            <Link to="/all-products" className="">
              <button className="btn btn-primary text-white text-sm">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
