import React from "react";
import Advertise from "../Advertise/Advertise/Advertise";
import Banner from "../Banner/Banner";
import BooksCategories from "../BooksCategories/BooksCategories";
import New from "../New/New";

const Home = () => {
  return (
    <div>
      <Banner />
      <Advertise />
      <BooksCategories />
      <New />
    </div>
  );
};

export default Home;
