import React from "react";

const ShowBooksByCategoriesCard = ({ book }) => {
  const {
    _id,
    book_name,
    book_img,
    book_writer,
    category_name,
    location,
    originalPrice,
    postTime,
    resalePrice,
    sellerName,
  } = book;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={book_img}
            alt="Shoes"
            className="rounded-xl lg:w-full lg:h-96"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{book_name}</h2>
          <p>Writer: {book_writer}</p>
          <p>Category-name: {category_name}</p>
          <p>Location : {location}</p>
          <p>Original Price : {originalPrice}</p>
          <p>
            Resale Price : <span className="text-red-500">${resalePrice}</span>
          </p>
          <p>Seller Name : {sellerName}</p>
          <p>Posted Time : {postTime}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBooksByCategoriesCard;
