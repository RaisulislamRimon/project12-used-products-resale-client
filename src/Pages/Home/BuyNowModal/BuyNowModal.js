import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const BuyNowModal = ({ bookData, setBookData }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { book_name, book_writer } = bookData;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.form;
    setBookData(bookData);
    console.log(bookData);
    
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
