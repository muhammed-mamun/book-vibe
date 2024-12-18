import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Book from "./pages/Book/Book";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import ListedBooks from "./pages/ListedBooks/ListedBooks";
import PagesToRead from "./pages/PagesToRead/PagesToRead";
import Root from "./pages/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./books.json"),
      },
      {
        path: "/listedbooks",

        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("./books.json"),
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "books/:id",
        element: <Book></Book>,
        loader: ({ params }) =>
          fetch("./books.json")
            .then((response) => response.json())
            .then((data) => {
              const bookId = parseInt(params.id);
              const book = data.find((book) => book.bookId === bookId);
              return book;
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
              return null; // Return null in case of an error
            }),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
