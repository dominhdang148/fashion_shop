import React from "react";
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';

import Navbar from "../../layouts/admin/Navbar";
import Siderbar from "../../layouts/admin/Siderbar";


const MasterLayout = () => {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Siderbar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            Danh sách tài khoản
          </main>
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;
