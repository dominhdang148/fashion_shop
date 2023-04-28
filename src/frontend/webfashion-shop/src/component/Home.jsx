import React from "react";
import Product from "./Product";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div class="card text-bg-dark text-while border-0">
        <img
          src="/acsets/bg4.jpg"
          class="card-img"
          alt="Background"
          height="900px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-4">NEW SEASON ARRIVALS</h5>
            <p class="card-text lead fs-2">
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
