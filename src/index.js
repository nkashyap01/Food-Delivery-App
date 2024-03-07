import React, { lazy, Suspense } from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import AppLayout from "./App.js";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
// import Grocery from "./components/Grocery.js";
import { createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart.js";

const Grocery = lazy(() => import("./components/Grocery.js"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1> Loading.....</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },

      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
