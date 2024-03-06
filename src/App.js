import React, { Children } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header.js";
import { Provider } from "react-redux";


import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import appStore from "./utils/appStore.js";

const AppLayout = () => {
  
  return (
    <Provider store={appStore}> 
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </Provider>
  );
};

export default AppLayout;
