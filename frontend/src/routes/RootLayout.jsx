import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="bg-gray-200">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
