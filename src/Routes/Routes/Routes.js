import React from "react";
import { createBrowserRouter } from "react-router-dom";
import useSeller from "../../hooks/useSeller";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import AllSelers from "../../Pages/Dashboard/AllSelers/AllSelers";
import MyBuyers from "../../Pages/Dashboard/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import AdvertiseDetails from "../../Pages/Home/Advertise/AdvertiseDetails/AdvertiseDetails";
import Home from "../../Pages/Home/Home/Home";
import ShowBooksByCategories from "../../Pages/Home/ShowBooksByCategories/ShowBooksByCategories";
import Login from "../../Pages/Login/Login";
import Blogs from "../../Pages/Shared/Blogs/Blogs";
import NotFound from "../../Pages/Shared/NotFound/NotFound";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books/:category_name",
        element: (
          <PrivateRoute>
            <ShowBooksByCategories />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.category_name}`),
      },
      {
        path: "/advertise/:advertiseId",
        element: <AdvertiseDetails />,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/advertise/${params.advertiseId}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <h1 className="h-96 justify-center text-3xl flex items-center">
            Please choose the right option
          </h1>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerRoute>
            <AddAProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/my-buyers",
        element: (
          <SellerRoute>
            <MyBuyers />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/my-orders",
        element: (
          // <BuyerRoute>
          <MyOrders />
          // </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/payment/:myOrderId",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/my-orders/${params.myOrderId}`),
      },
      {
        path: "/dashboard/my-products",
        element: (
          // <SellerRoute>
          <MyProducts />
        ),
        // </SellerRoute>
      },
      {
        path: "/dashboard/all-sellers",
        element: (
          // <AdminRoute>
          <AllSelers />
          // </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
