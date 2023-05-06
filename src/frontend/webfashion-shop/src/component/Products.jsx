import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";

function Products() {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([data]);
 
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/products/`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        //setFilter(data.json());
        console.log(data.results);
      })
      
      .catch((error) => {
        console.error(error);
      });
      
  }, []);

  
  const filterProduct = (cat) => {
    //const updateList = data.filter((x) => x.category.title === cat);
    const updateList = data.filter((x) => x.category.title.toLowerCase() === cat.toLowerCase());
    setFilter(updateList);
  console.log(updateList);

  };
  // lọc danh sách sản phẩm theo danh mục Men's Clothing
  const filterMenClothing = () => {
    filterProduct("men's clothing");
  };

  // lọc danh sách sản phẩm theo danh mục Women's Clothing
  const filterWomenClothing = () => {
    filterProduct("women's clothing");
  };


  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={filterMenClothing}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={filterWomenClothing}
          >
            Women's Clothing
          </button>

        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.product_id}>
                  <img
                    src={product.name}
                    className="card-img-top"
                    alt={product.name}
                    height="250px"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.name && product.name.substring(0, 22)}...
                    </h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      Card subtitle
                    </h6>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <Link
                      to={`/products/${product.product_id}`}
                      className="btn btn-outline-dark"
                    >
                      By now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <Navbar />
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {/* {loading ? <Loading /> : <ShowProducts />} */}
          {<ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;
