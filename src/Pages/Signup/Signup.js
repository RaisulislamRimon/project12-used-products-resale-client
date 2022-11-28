import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
  const [checked, setChecked] = useState("user");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (email === "" || password === "") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "All fields are required",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must be at least 6 characters",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    // console.log(email, password, checked);
    const userInfo = {
      email,
      password,
      checked,
    };
    console.log(userInfo);
  };
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-center text-4xl font-bold mb-10">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs mx-auto mb-10">
            <div className="mb-5">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div>
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            {/* checkbox */}
            <div className="mt-3">
              <div className="form-control">
                <h3>Are you a - {checked} </h3>
                <label className="label cursor-pointer">
                  <span className="label-text">Buyer</span>
                  <input
                    type="radio"
                    name="userType"
                    value="buyer"
                    className="radio checked:bg-red-500"
                    onChange={() => {
                      setChecked("buyer");
                    }}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Seller</span>
                  <input
                    type="radio"
                    name="userType"
                    value="seller"
                    className="radio checked:bg-blue-500"
                    onChange={() => {
                      setChecked("seller");
                    }}
                  />
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-wide btn-primary mx-auto my-10 text-lg"
            >
              Sign Up
            </button>

            <div className="mx-auto btn mb-4">
              <p className="">Or, Sign up with Google</p>
              <div className="flex justify-around text-2xl text-center">
                <FaGoogle className="hover:cursor-pointer ml-3 text-lg" />
              </div>
            </div>
            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="link link-primary underline-offset-4"
              >
                Please log in now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;