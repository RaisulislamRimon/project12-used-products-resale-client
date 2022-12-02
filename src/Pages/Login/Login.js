import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  // const [checked, setChecked] = useState("user");
  const { providerLogin, signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

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
      // checked,
    };
    console.log(userInfo);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have successfully logged in",
          showConfirmButton: false,
          timer: 2000,
        });
        const currentUser = {
          email: result?.user?.email,
        };
        form.reset();
        // navigate(from, { replace: true });
        fetch("https://used-products-resale-server-kappa.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("club")}`,
          },
          body: JSON.stringify(currentUser),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            localStorage.setItem("club", data?.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.code && error.code,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        fetch("https://used-products-resale-server-kappa.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("club")}`,
          },
          body: JSON.stringify(result?.user?.email),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            localStorage.setItem("club", data?.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Please try again",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <div>
      <div className="mt-10">
        <h2 className="text-center text-4xl font-bold mb-10">Login</h2>
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

            <button
              type="submit"
              className="btn btn-wide btn-primary mx-auto my-10 text-lg"
            >
              Login
            </button>

            <div onClick={handleGoogleSignIn} className="mx-auto btn mb-4">
              <p className="">Or, Sign in with Google</p>
              <div className="flex justify-around text-2xl text-center">
                <FaGoogle className="hover:cursor-pointer ml-3 text-lg" />
              </div>
            </div>
            <p>
              New to this Buy Sell Club?{" "}
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
