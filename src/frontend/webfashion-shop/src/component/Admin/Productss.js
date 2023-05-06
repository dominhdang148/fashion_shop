import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import EditProducts from "./EditProducts";
import { getProduct } from "../../Services/repository";
import Table from "react-bootstrap/Table";

const Productss = () => {
  const [product, setProduct] = useState([]);

  console.log(product);

  useEffect(() => {
    getProduct().then((data) => {
      if (data)
        setProduct(data);
      else setProduct([]);
    });
  }, []);

  const handleDelete = (item) => {};

  return (
    <div className="sb-nav-fixed">
      <div id="layoutSidenav">
        <div id="layoutSidenav_content">
          <div>
          <button type="button" class="btn btn-info">Thêm sản phẩm</button>
            <div className="head-title">
              <h1>Các sản phẩm</h1>
              <div className="product-management-container">
                <Table striped responsive bordered>
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên</th>
                      <th>Mô tả</th>
                      <th>Chủ đề</th>
                      <th>Hàng tồn kho</th>
                      <th>Giá</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>

                  <tbody>
                    {product.length > 0 ? (
                      product.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <Link
                              to={`/admin/products/edit/${item.product_id}`}
                              className="text-blod"
                            >
                              {item.name}
                            </Link>
                          </td>
                          <td>{item.description}</td>
                          <td>{item.category.title}</td>
                          <td>{item.inventory}</td>
                          <td>{item.price}</td>
                          <td style={{ fontSize: "24px" , display: "flex"}}>
                            <button type="button" class="btn btn-info">
                              Sửa
                            </button>
                            <button type="button" class="btn btn-danger">
                              Xóa
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4}>
                          <h4 className="text-danger text-center">
                          Không có sản phẩm nào.
                          </h4>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productss;
