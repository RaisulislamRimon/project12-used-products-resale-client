import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const BuyNowModal = ({ bookData, setBookData }) => {
  const { user } = useContext(AuthContext);
  const { book_name, book_writer } = bookData;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const meetingLocation = form.meetingLocation.value;
    setBookData(bookData);
    console.log(bookData, name, email, phone, meetingLocation);
    const orderInfo = { bookData, name, email, phone, meetingLocation };
    console.log(orderInfo);

    fetch(`http://localhost:5000/buy-now`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          fetch(`http://localhost:5000/buy-now/${bookData._id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(orderInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                Swal.fire(
                  "Good job!",
                  "You clicked on the buy now!",
                  "success"
                );
              }
            });
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{book_name}</h3>
          <p className="py-4">Book writer : {book_writer}</p>

          {/* modal form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              defaultValue={
                user?.displayName === null ? user?.email : user?.displayName
              }
              disabled
              type="text"
              name="name"
              placeholder="Your Name"
              className="input w-full input-bordered "
            />
            <input
              defaultValue={user?.email}
              disabled
              type="email"
              name="email"
              placeholder="Email address"
              className="input w-full input-bordered "
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input w-full input-bordered "
            />
            <input
              type="text"
              name="meetingLocation"
              placeholder="Meeting Location"
              className="input w-full input-bordered "
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary w-full "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;
