import React from 'react';
import Navbar from '../../layouts/admin/Navbar';
import Siderbar from '../../layouts/admin/Siderbar';
const Dashboard = () => {
    return (
        <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Siderbar />
        </div>
        <div id="layoutSidenav_content">
         
            Dashboard
          
        </div>
      </div>
    </div>
    );
};

export default Dashboard;