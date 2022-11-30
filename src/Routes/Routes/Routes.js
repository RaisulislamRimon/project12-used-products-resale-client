import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import AdvertiseDetails from "../../Pages/Home/Advertise/AdvertiseDetails/AdvertiseDetails";
import Home from "../../Pages/Home/Home/Home";
import ShowBooksByCategories from "../../Pages/Home/ShowBooksByCategories/ShowBooksByCategories";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/Shared/NotFound/NotFound";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: <AddAProduct />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddAProduct />,
      },
      {
        path: "/dashboard/my-products",
        element: <MyProducts />,
      },
    ],
  },
]);

export default router;
