import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-center text-4xl font-bold mb-10">Login</h2>
        <form>
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

            <button
              type="submit"
              className="btn btn-wide btn-primary mx-auto my-10 text-lg"
            >
              Login
            </button>

            <div className="mx-auto btn mb-4">
              <p className="">Or, Sign in with Google</p>
              <div className="flex justify-around text-2xl text-center">
                <FaGoogle className="hover:cursor-pointer ml-3 text-lg" />
              </div>
            </div>
            <p>
              New to this website?{" "}
              <Link
                to="/register"
                className="link link-primary underline-offset-4"
              >
                Register a New Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
