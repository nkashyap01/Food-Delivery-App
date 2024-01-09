import React, { Children } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
