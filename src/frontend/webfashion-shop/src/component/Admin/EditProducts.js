import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { getProductById } from "../../Services/repository";
// import { isEmptyOrSpaces } from "../../utils/Utils";
// import { useSelector } from "react-redux";
// import config from "../../config";

const EditProducts = () => {
  const initialState = {
      product_id: 0,
      name: "",
      description: "",
      inventory: "",
      image: "",
      price: 0,
      category: 0,
    },
    [product, setProduct] = useState(initialState);
  console.log(product)
  let { id } = useParams();
  id = id ?? 0;

  useEffect(() => {
    getProductById(id).then((data) => {
      if (data)
        setProduct({
          ...data,
        });
      else setProduct(initialState);
    });
    // getCategories().then(data => {
    //     if (data)
    //         setCategories(data);
    //     else
    //         setCategories([]);
    // });
  }, []);

  const handleSubmit = () => {};

  return (
    <>
      <div className="sb-nav-fixed">
        <div id="layoutSidenav">
          <div id="layoutSidenav_content">
            <div>
              <div className="head-title" style={{ padding: "40px" }}>
                <Form
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                >
                  <Form.Control type="hidden" name="id" value={product.id} />
                  <div className="row mb-3" style={{ marginBottom: "30px" }}>
                    <Form.Label className="col-sm-2 col-form-label">
                      Tên sản phẩm
                    </Form.Label>
                    <div className="col-sm-10">
                      <Form.Control
                        type="text"
                        name="name"
                        title="name"
                        required
                        value={product.name || ""}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="row mb-3" style={{ marginBottom: "30px" }}>
                    <Form.Label className="col-sm-2 col-form-label">
                      Mô tả
                    </Form.Label>
                    <div className="col-sm-10">
                      <Form.Control
                        as="textarea"
                        type="text"
                        name="description"
                        title="description"
                        required
                        value={product.description || ""}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="row mb-3" style={{ marginBottom: "30px" }}>
                    <Form.Label className="col-sm-2 col-form-label">
                      Category
                    </Form.Label>
                    <div className="col-sm-10">
                      <Form.Select
                        name="categoryId"
                        title="categoryId"
                        required
                        value={product.category_id}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            category: e.target.value,
                          })
                        }
                      >
                        <option value="">-- Choose Category --</option>
                        {/* {categories.length > 0 && categories.map((item, index) =>
                                    <option key={index} value={item.id}>{item.name}</option>)} */}
                      </Form.Select>
                    </div>
                  </div>
                  <div className="row mb-3" style={{ marginBottom: "30px" }}>
                    <Form.Label className="col-sm-2 col-form-label">
                      Hàng tồn kho
                    </Form.Label>
                    <div className="col-sm-10">
                      <Form.Control
                        type="text"
                        name="inventory"
                        title="inventory"
                        required
                        value={product.inventory || ""}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            inventory: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="row mb-3" style={{ marginBottom: "30px" }}>
                    <Form.Label className="col-sm-2 col-form-label">
                      Giá
                    </Form.Label>
                    <div className="col-sm-10">
                      <Form.Control
                        type="text"
                        name="price"
                        title="price"
                        required
                        value={product.price || ""}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            price: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ marginRight: "20px" }}
                    >
                      Lưu
                    </Button>
                    <Link to="/admin/product" className="btn btn-danger ms-2">
                      Hủy và quay lại
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProducts;
