import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [userType, setUserType] = useState("");
  console.log(user?.email);
  if (user?.email) {
    fetch(`http://localhost:5000/user-type-find?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserType(data?.checked);
      });
  }

  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <Outlet />

          <label
            htmlFor="dashboard-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Side Navbar
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {userType === "buyer" && (
              <li>
                <Link to="/my-orders">My Orders</Link>
              </li>
            )}
            {userType === "seller" && (
              <>
                <li>
                  <Link to="/dashboard/add-product">Add A product</Link>
                </li>
                <li>
                  <Link to="/my-products">My Products</Link>
                </li>
                <li>
                  <Link to="/my-buyers">My buyers</Link>
                </li>
              </>
            )}
            {userType === "admin" && (
              <>
                <li>
                  <Link to="/all-sellers">All sellers</Link>
                </li>
                <li>
                  <Link to="/all-buyers">All buyers</Link>
                </li>
                <li>
                  <Link to="/reported-items">Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
