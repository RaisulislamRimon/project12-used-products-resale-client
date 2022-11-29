import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // fetch(`http://localhost:5000/user-type-find/email=${user?.email}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     console.log(user?.checked);
  //     console.log(user?.email);
  //   });

  const handleLogOut = () => {
    logOut().then(() => {});
  };
  const menuItems = (
    <>
      <li>
        <Link to="/">Product categories</Link>
      </li>
      <li tabIndex={0}>
        <Link to="/" className="justify-between">
          Advertised items
        </Link>
      </li>
      <li>
        <Link to="/">All products</Link>
      </li>
      {user?.email && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Buy Sell Club
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <button onClick={() => handleLogOut()} className="btn">
              Log out
            </button>
          ) : (
            <Link to="/login" className="btn">
              Login/Signup
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
