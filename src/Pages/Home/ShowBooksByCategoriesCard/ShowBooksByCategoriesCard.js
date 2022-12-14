import React, { useContext } from "react";
import { GoVerified, GoUnverified } from "react-icons/go";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const ShowBooksByCategoriesCard = ({ book, setBookData }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    book_name,
    description,
    book_img,
    book_writer,
    category_name,
    location,
    originalPrice,
    postTime,
    resalePrice,
    sellerName,
    yearOfPurchase,
  } = book;

  const handleBuyNow = (book) => {
    setBookData(book);
    // console.log(book);
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={book_img}
            alt="book"
            className="rounded-xl lg:w-full lg:h-96"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{book_name}</h2>
          <p>Writer: {book_writer}</p>
          <p>Category-name: {category_name}</p>
          <p title={description}>
            Description:{" "}
            {description
              ? description.length > 40
                ? description.substr(0, 40) + "..."
                : description
              : "No description"}
          </p>
          <p>Location : {location}</p>
          <p>Original Price : {originalPrice}</p>
          <p>
            Resale Price : <span className="text-red-500">${resalePrice}</span>
          </p>
          <div className="flex">
            <span>Seller Name : {sellerName}</span>
            <span className="flex justify-center items-center">
              {user?.emailVerified ? (
                <GoVerified className="ml-2 text-blue-700" />
              ) : (
                <GoUnverified className="ml-2 text-red-700" />
              )}
            </span>
          </div>
          <p>Years of use : {yearOfPurchase}</p>
          <p>Posted Time : {postTime}</p>
          {/* <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
          <label
            onClick={() => handleBuyNow(book)}
            htmlFor="my-modal-3"
            className="btn btn-primary"
          >
            Buy Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShowBooksByCategoriesCard;
