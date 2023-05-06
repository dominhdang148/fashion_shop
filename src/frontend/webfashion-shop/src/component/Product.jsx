import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";


const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
    console.log("check car: ", product);
  };

  useEffect(() => {
      fetch(`http://127.0.0.1:8000/products/${id}/?format=json`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.name}</h4>
          <h1 className="display-5">{product.name}</h1>
        
          <h3 className="display-6 fw-bold my-4 px-4 py-2">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <Link to={"/cart"} className="btn btn-dark ms-2 px-3 py-2">
            Go to Cart
          </Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">{<ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
