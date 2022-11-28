import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookCategoryCard from "../BookCategoryCard/BookCategoryCard";
import { useQuery } from "@tanstack/react-query";

// import booksCategories from "../../../../public/categories.json";

const BooksCategories = () => {
  // const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   fetch("http://localhost:5000/books-categories")
  //     .then((response) => {
  //       setLoading(true);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setCategories(data);
  //       setLoading(false);
  //     });
  // }, []);

  const {
    isLoading,
    error,
    data: categories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:5000/books-categories").then((res) => res.json()),
  });

  if (isLoading)
    return <div className="border w-1/2 mx-auto">{<Loading />}</div>;

  if (error)
    return (
      <div className="text-center my-10">
        {"An error has occurred: " + error.message}
      </div>
    );
  return (
    <div className="w-full  mx-auto">
      {/* {loading && <Loading />} */}
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
