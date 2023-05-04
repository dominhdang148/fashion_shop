import React from "react";
import Navbar from "../../layouts/admin/Navbar";
import Siderbar from "../../layouts/admin/Siderbar";
import EditProducts from "./EditProducts";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Siderbar />
        </div>
        <div id="layoutSidenav_content">
          <div>
            <div className="ggg">
            <Link to="/admin/products/editproducts">
                  <button type="button" class="btn btn-info m-2">
                Thêm mới
              </button>
            </Link>
            
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <img
                      src="/acsets/bg.jpg"
                      class="img-thumbnail"
                      alt="..."
                    ></img>
                  </td>
                  <td>Otto</td>
                  <td>20$</td>
                  <td>
                    <button type="button" class="btn btn-info m-2">
                      Sửa
                    </button>
                    <button type="button" class="btn btn-danger">
                      Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>
                    <button type="button" class="btn btn-info m-2">
                      Sửa
                    </button>
                    <button type="button" class="btn btn-danger">
                      Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                  <td>
                    <button type="button" class="btn btn-info m-2">
                      Sửa
                    </button>
                    <button type="button" class="btn btn-danger">
                      Xóa
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
