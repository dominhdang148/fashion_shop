import React from "react";
import Product from "./Product";
import Products from "./Products";
import Navbar from "../component/Navbar";

function Home() {
  return (
    <div className="hero">
      
      <div class="card text-bg-dark text-while border-0">
        <img
          src="/acsets/bg4.jpg"
          className="card-img"
          alt="Background"
          height="900px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-4">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;
