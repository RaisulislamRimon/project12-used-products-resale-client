import React from "react";
import { Link } from "react-router-dom";

const BookCategoryCard = ({ category }) => {
  const { categories_name, img, desc, _id } = category;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="lg:w-96 h-64 lg:rounded" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{categories_name}</h2>
          {/* <p>{desc}</p> */}
          <p>
            {`${desc.substring(0, 100)}...`}
            <br />
            <Link to="">Read more</Link>
          </p>
          {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}

          {/* <Link to={`/books-categories/${_id}`}> */}
          <Link to={`/books/${categories_name}`}>
            <button className="btn btn-primary">See All Books</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCategoryCard;
