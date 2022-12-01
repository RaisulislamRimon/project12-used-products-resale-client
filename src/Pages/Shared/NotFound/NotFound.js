import React from "react";
import { MdReportGmailerrorred } from "react-icons/md";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <div>
        <MdReportGmailerrorred className="text-5xl text-center text-red-600 w-full my-10" />
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
          This page is not available right now{" "}
          <span className="text-red-600">!</span>
        </h1>
        <img
          src="https://i.ibb.co/8K6ZXxm/not-found.png"
          className="w-2/4 mx-auto my-10"
          alt="notFoundImage"
        />
        <Link to="/">
          <p className="md:text-2xl text-center my-10 hover:text-blue-600 border border-warning p-5 md:w-1/3 mx-auto rounded-xl">
            Go to Homepage
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
