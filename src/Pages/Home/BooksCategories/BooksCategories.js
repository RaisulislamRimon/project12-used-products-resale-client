import React, { useEffect, useState } from "react";
// import booksCategories from "../../../../public/categories.json";

const BooksCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center my-10 underline">All categories</h1>
      <div>
        {categories.map((category) => (
          <h1>category</h1>
        ))}
      </div>
    </div>
  );
};

export default BooksCategories;
