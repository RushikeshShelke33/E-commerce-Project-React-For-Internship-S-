import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <>
      <Navbar />

      <section className="products py-5 my-5" id="products">
        <div className="container ">
          <div className="section_title text-center mb-5">
            <h1 className="text-capitalize">Products</h1>
          </div>
          <div className="row">
            <div className="col-md-3 border-right mb-small-5">
              <h4 className="mb-5 border-bottom">Filters</h4>
              <div className="mb-5">
                <label>
                  <b>Category</b>
                </label>
                <ul className="list-group">
                  <li className="list-group-item">Category 1</li>
                  <li className="list-group-item">Category 2</li>
                  <li className="list-group-item">Category 3</li>
                  <li className="list-group-item">Category 4</li>
                  <li className="list-group-item">Category 5</li>
                </ul>
              </div>
              <div>
                <form>
                  <div className="form-group">
                    <label>
                      <b>Price</b>
                    </label>
                    <input
                      type="range"
                      min={100}
                      max={1000}
                      step={100}
                      className="form-control-range"
                    />
                  </div>
                </form>
                <div className="d-flex justify-content-between">
                  <label>₹100</label>
                  <label>₹1000</label>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row mb-5">
                <div className="col-md-4 col-12">
                  <div className="single_product shadow text-center p-1">
                    <div className="product_img">
                      <Link to="/ProductDetail">
                        <img
                          src="./src/assets/1.jpg"
                          className="img img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="product-caption my-3">
                      <div className="product-ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <h5>
                        <Link to="/ProductDetail">Dress with details</Link>
                      </h5>
                      <div className="price">
                        <b>
                          <span className="mr-1">₹</span>
                          <span>400</span>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div
                    className="single_product shadow text-center p-1 mt-small-5
  mb-small-5"
                  >
                    <div className="product_img">
                      <Link to="/ProductDetail">
                        <img
                          src="./src/assets/4.jpg"
                          className="img img-fluid"
                          alt=""
                        />
                      </Link>
                      <div className="new_product">
                        <span
                          className="badge py-2 px-3 badge-pill
  badge-danger"
                        >
                          New
                        </span>
                      </div>
                    </div>
                    <div className="product-caption my-3">
                      <div className="product-ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <h5>
                        <Link to="/ProductDetail">Dress with details</Link>
                      </h5>
                      <div className="price">
                        <b>
                          <span className="mr-1">₹</span>
                          <span>400</span>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="single_product shadow text-center p-1">
                    <div className="product_img">
                      <Link to="/ProductDetail">
                        <img
                          src="./src/assets/3.jpg"
                          className="img img-fluid"
                          alt=""
                        />
                      </Link>
                      <div className="new_product">
                        <span
                          className="badge py-2 px-3 badge-pill
  badge-danger"
                        >
                          New
                        </span>
                      </div>
                    </div>
                    <div className="product-caption my-3">
                      <div className="product-ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <h5>
                        <Link to="/ProductDetail">Dress with details</Link>
                      </h5>
                      <div className="price">
                        <b>
                          <span className="mr-1">₹</span>
                          <span>400</span>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-12">
                  <div className="single_product shadow text-center p-1">
                    <div className="product_img">
                      <Link to="/ProductDetail">
                        <img
                          src="./src/assets/2.jpg"
                          className="img img-fluid"
                          alt=""
                        />
                      </Link>
                      <div className="new_product">
                        <span
                          className="badge py-2 px-3 badge-pill
  badge-danger"
                        >
                          New
                        </span>
                      </div>
                    </div>
                    <div className="product-caption my-3">
                      <div className="product-ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <h5>
                        <Link to="/ProductDetail">Dress with details</Link>
                      </h5>
                      <div className="price">
                        <b>
                          <span className="mr-1">₹</span>
                          <span>400</span>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div
                    className="single_product shadow text-center p-1 mt-small-5
  mb-small-5"
                  >
                    <div className="product_img">
                      <Link to="/ProductDetail">
                        <img
                          src="./src/assets/3.jpg"
                          className="img img-fluid"
                          alt=""
                        />
                      </Link>
                      <div className="new_product">
                        <span
                          className="badge py-2 px-3 badge-pill
  badge-danger"
                        >
                          New
                        </span>
                      </div>
                    </div>
                    <div className="product-caption my-3">
                      <div className="product-ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <h5>
                        <Link to="/ProductDetail">Dress with details</Link>
                      </h5>
                      <div className="price">
                        <b>
                          <span className="mr-1">₹</span>
                          <span>400</span>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="single_product shadow text-center p-1">
                    <div className="product_img">
                      <Link to="/ProductDetail">
                        <img
                          src="./src/assets/4.jpg"
                          className="img img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="product-caption my-3">
                      <div className="product-ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <h5>
                        <Link to="/ProductDetail">Dress with details</Link>
                      </h5>
                      <div className="price">
                        <b>
                          <span className="mr-1">₹</span>
                          <span>400</span>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
