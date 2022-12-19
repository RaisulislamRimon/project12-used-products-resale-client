import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import LoadingError from "../../Shared/Loading/LoadingError";
import BuyNowModal from "../BuyNowModal/BuyNowModal";
import ShowBooksByCategoriesCard from "../ShowBooksByCategoriesCard/ShowBooksByCategoriesCard";

const AllProducts = () => {
  const [bookData, setBookData] = React.useState("");
  const {
    isLoading,
    error,
    data: allBooks = [],
  } = useQuery({
    queryKey: ["all-books"],
    queryFn: () =>
      fetch(
        "https://used-products-resale-server-kappa.vercel.app/all-books"
      ).then((res) => res.json()),
  });

  if (isLoading) return <Loading />;

  if (error) return <LoadingError />;
  return (
    <div>
      <h1 className="text-center text-3xl my-5 underline">All Products</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {allBooks.map((book, i) => (
          <ShowBooksByCategoriesCard
            key={book._id}
            book={book}
            bookData={bookData}
            setBookData={setBookData}
          />
        ))}
      </div>
      {/* modal opening button */}
      <BuyNowModal bookData={bookData} setBookData={setBookData} />
    </div>
  );
};

export default AllProducts;
