import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";
import LoadingError from "../../Shared/Loading/LoadingError";
import ShowBooksByCategoriesCard from "../ShowBooksByCategoriesCard/ShowBooksByCategoriesCard";

const AllProducts = () => {
  const {
    isLoading,
    error,
    data: allBooks = [],
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:5000/all-books").then((res) => res.json()),
  });

  if (isLoading) return <Loading />;

  if (error) return <LoadingError />;
  return (
    <div>
      <h1 className="text-center text-3xl my-5 underline">All Products</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {allBooks.map((book) => (
          <ShowBooksByCategoriesCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
