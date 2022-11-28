import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AdvertiseDetails from "../../Pages/Home/Advertise/AdvertiseDetails/AdvertiseDetails";
import Home from "../../Pages/Home/Home/Home";
import ShowBooksByCategories from "../../Pages/Home/ShowBooksByCategories/ShowBooksByCategories";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/Shared/NotFound/NotFound";
import Signup from "../../Pages/Signup/Signup";

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
        element: <ShowBooksByCategories />,
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
]);

export default router;
