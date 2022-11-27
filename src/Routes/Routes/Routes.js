import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import ShowBooksByCategories from "../../Pages/Home/ShowBooksByCategories/ShowBooksByCategories";
import NotFound from "../../Pages/Shared/NotFound/NotFound";

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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
