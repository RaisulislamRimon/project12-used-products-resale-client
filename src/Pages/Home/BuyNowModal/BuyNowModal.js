import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const BuyNowModal = () => {
  const { user } = useContext(AuthContext);
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
          {/* modal form */}
          <form className="grid grid-cols-1 gap-3 mt-10">
            <input
              defaultValue={user?.displayName}
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
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;
