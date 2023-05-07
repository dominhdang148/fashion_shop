import React from "react";
import { Link } from "react-router-dom";

const Siderbar = () => {
  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <Link className="nav-link" to="/admin/dashboard">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </Link>
          
          <Link className="nav-link" to="/admin/products">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Products
          </Link>
          <Link className="nav-link" to="/admin/user">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            User
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Siderbar;
