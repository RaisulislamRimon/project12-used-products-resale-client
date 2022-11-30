import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const imageHostKey = process.env.REACT_APP_IMGBB_KEY;

const AddAProduct = () => {
  const [condition, setCondition] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [bookCategory, setBookCategory] = useState("");
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const bookWriter = form.bookWriter.value;
    console.log(selectedImage);

    const formData = new FormData();
    // const productImage book_img formData.selectedImage;
    // const productImage book_img selectedImage;
    formData.append("image", selectedImage);
    // console.log(selectedImage);

    const resalePrice = form.resalePrice.value;
    const originalPrice = form.originalPrice.value;
    const mobileNumber = form.mobileNumber.value;
    const location = form.location.value;
    const description = form.description.value;
    const yearOfPurchase = form.yearOfPurchase.value;

    if (
      productName &&
      bookWriter &&
      selectedImage &&
      resalePrice &&
      originalPrice &&
      mobileNumber &&
      location &&
      description &&
      yearOfPurchase
    ) {
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((imgData) => {
          if (imgData.success) {
            // console.log(imgData.data.url);
            const addedProductInfo = {
              email: user?.email,
              book_name: productName,
              book_writer: bookWriter,
              book_img: imgData?.data?.url,
              resalePrice: resalePrice,
              originalPrice: originalPrice,
              available: "unsold",
              mobileNumber,
              location,
              category_name: bookCategory,
              description,
              yearOfPurchase,
              condition,
              sellerName: user?.displayName,
              postTime: new Date().toDateString(),
            };
            fetch(
              `https://used-products-resale-server-kappa.vercel.app/add-product`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(addedProductInfo),
              }
            )
              .then((response) => response.json())
              .then((data) => {
                if (data.acknowledged) {
                  Swal.fire({
                    title: "Success!",
                    text: "Your product has been added!",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                  });
                  navigate("/dashboard/my-products");
                }
              });

            // console.log(addedProductInfo);
          }
        });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please fill up all the fields!",
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
    }
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
                <label htmlFor="productName" className="label">
                  <span className="label-text">Book Name</span>
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
                <label htmlFor="bookWriter" className="label">
                  <span className="label-text">Book Writer</span>
                </label>
                <input
                  type="text"
                  name="bookWriter"
                  id="bookWriter"
                  placeholder="book writer"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="book_img" className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <input
                  type="file"
                  name="image"
                  id="book_img"
                  onChange={(event) => {
                    // console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                  }}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="originalPrice" className="label">
                  <span className="label-text">Original Price</span>
                </label>
                <input
                  type="text"
                  name="originalPrice"
                  id="originalPrice"
                  placeholder="original price"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

              <div className="mt-3">
                <label htmlFor="resalePrice" className="label">
                  <span className="label-text">Resale Price</span>
                </label>
                <input
                  type="text"
                  name="resalePrice"
                  id="resalePrice"
                  placeholder="resale price"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>

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
                <label htmlFor="mobileNumber" className="label">
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

              {/* select category */}
              <div className="mt-3">
                <div className="form-control">
                  <h3>Select category : {bookCategory}</h3>
                  <label className="label cursor-pointer">
                    <span className="label-text">Novel Book</span>
                    <input
                      type="radio"
                      name="bookCategory"
                      value="novel-book"
                      className="radio checked:bg-red-500"
                      onChange={() => {
                        setBookCategory("novel-book");
                      }}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Story book</span>
                    <input
                      type="radio"
                      name="bookCategory"
                      value="story-book"
                      className="radio checked:bg-blue-500"
                      onChange={() => {
                        setBookCategory("story-book");
                      }}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Cook Book</span>
                    <input
                      type="radio"
                      name="bookCategory"
                      value="cook-book"
                      className="radio checked:bg-blue-500"
                      onChange={() => {
                        setBookCategory("cook-book");
                      }}
                    />
                  </label>
                </div>
              </div>

              <div className="mt-3">
                <label htmlFor="location" className="label">
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
                <label htmlFor="description" className="label">
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
                <label htmlFor="yearOfPurchase" className="label">
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
