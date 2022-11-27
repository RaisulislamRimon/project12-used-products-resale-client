import React, { useEffect, useState } from "react";
import BookCategoryCard from "../BookCategoryCard/BookCategoryCard";
// import booksCategories from "../../../../public/categories.json";

const BooksCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/books-categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <div className="w-full  mx-auto">
      <h1 className="text-3xl text-center my-10 underline">All categories</h1>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <BookCategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default BooksCategories;
