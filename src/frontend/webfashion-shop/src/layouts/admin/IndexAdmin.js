import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Siderbar from "./Siderbar";

const IndexAdmin = () => {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <Siderbar />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default IndexAdmin;
