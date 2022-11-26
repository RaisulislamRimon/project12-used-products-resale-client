import React from "react";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import BooksCategories from "../BooksCategories/BooksCategories";

const Home = () => {
  return (
    <div>
      <Banner />
      <Advertise />
      <BooksCategories />
    </div>
  );
};

export default Home;
