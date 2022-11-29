import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BuyNowModal from "../BuyNowModal/BuyNowModal";
import ShowBooksByCategoriesCard from "../ShowBooksByCategoriesCard/ShowBooksByCategoriesCard";

const ShowBooksByCategories = () => {
  const { category_name } = useParams();
  const books = useLoaderData();
  const [bookData, setBookData] = React.useState("");

  // console.log(bookData);

  return (
    <div className="min-h-screen">
      <div className="mt-10">
        <h2 className="text-3xl text-center">All {category_name}</h2>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {books.map((book) => (
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

export default ShowBooksByCategories;
