import React from "react";

const BookCategoryCard = ({ category }) => {
  const { categories_name, img } = category;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="lg:w-96 h-64 lg:rounded" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{categories_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>

          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookCategoryCard;
