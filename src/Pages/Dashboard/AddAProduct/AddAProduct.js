import React, { useState } from "react";

const AddAProduct = () => {
  const [condition, setCondition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
  };
  return (
    <div>
      <div>
        <div className="mt-10">
          <h2 className="text-center text-4xl font-bold mb-10">
            Add A Product
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full max-w-xs mx-auto mb-10">
              <div className="mb-5">
                <label htmlFor="email" className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="productName"
                  id="productName"
                  placeholder="product name"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="name" className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="price"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              {/* <div>
                <label htmlFor="password" className="label">
                  <span className="label-text">condition type</span>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="input input-bordered w-full max-w-xs"
                />
              </div> */}

              {/* checkbox */}
              <div className="mt-3">
                <div className="form-control">
                  <h3>Condition Type : {condition}</h3>
                  <label className="label cursor-pointer">
                    <span className="label-text">Excellent</span>
                    <input
                      type="radio"
                      name="conditionType"
                      value="excellent"
                      className="radio checked:bg-red-500"
                      onChange={() => {
                        setCondition("excellent");
                      }}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Good</span>
                    <input
                      type="radio"
                      name="conditionType"
                      value="good"
                      className="radio checked:bg-blue-500"
                      onChange={() => {
                        setCondition("good");
                      }}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Fair</span>
                    <input
                      type="radio"
                      name="conditionType"
                      value="fair"
                      className="radio checked:bg-blue-500"
                      onChange={() => {
                        setCondition("fair");
                      }}
                    />
                  </label>
                </div>
              </div>

              <div className="mt-3">
                <label htmlFor="password" className="label">
                  <span className="label-text">Mobile Number</span>
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  id="mobileNumber"
                  placeholder="mobile number"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className="mt-3">
                <label htmlFor="password" className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="location"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className="mt-3">
                <label htmlFor="password" className="label">
                  <span className="label-text">Product Category</span>
                </label>
                <input
                  type="text"
                  name="productCategory"
                  id="productCategory"
                  placeholder="product category"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className="mt-3">
                <label htmlFor="password" className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="description"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className="mt-3">
                <label htmlFor="password" className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="price"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className="mt-3">
                <label htmlFor="password" className="label">
                  <span className="label-text">Year of purchase</span>
                </label>
                <input
                  type="text"
                  name="yearOfPurchase"
                  id="yearOfPurchase"
                  placeholder="yearOfPurchase"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <button
                type="submit"
                className="btn btn-wide btn-primary mx-auto my-10 text-lg"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAProduct;
