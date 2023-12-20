import React from "react";
import { Link } from "react-router-dom";

const ProductHomepage = () => {
  return (
    <section className="products py-5 my-5 bg-light" id="products">
      <div className="container ">
        <div className="section_title text-center mb-5">
          <h1 className="text-capitalize">Latest Products</h1>
        </div>
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

                <div className="new_product">
                  <span className="badge py-2 px-3 badge-pill badge-danger">
                    New
                  </span>
                </div>
              </div>
              <div className="product-caption my-3">
                <div className="product-ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="far fa-star low-star" />
                  <i className="far fa-star low-star" />
                </div>
                <h4>
                  <Link to="/ProductDetail">Dress with details</Link>
                </h4>
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
            <div className="single_product shadow text-center p-1 mt-small-5 mb-small-5">
              <div className="product_img">
                <Link to="/ProductDetail">
                  <img
                    src="./src/assets/2.jpg"
                    className="img img-fluid"
                    alt=""
                  />
                </Link>

                <div className="new_product">
                  <span className="badge py-2 px-3 badge-pill badge-danger">
                    New
                  </span>
                </div>
              </div>
              <div className="product-caption my-3">
                <div className="product-ratting">
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star low-star" />
                  <i className="far fa-star low-star" />
                </div>
                <h4>
                  <Link to="/ProductDetail">Dress with details</Link>
                </h4>
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
                    src="../src/assets/1.jpg"
                    className="img img-fluid"
                    alt=""
                  />
                </Link>

                <div className="new_product">
                  <span className="badge py-2 px-3 badge-pill badge-danger">
                    New
                  </span>
                </div>
              </div>
              <div className="product-caption my-3">
                <div className="product-ratting">
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star low-star" />
                  <i className="far fa-star low-star" />
                </div>
                <h4>
                  <Link to="/ProductDetail">Dress with details</Link>
                </h4>
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
                    src="../src/assets/3.jpg"
                    className="img img-fluid"
                    alt=""
                  />
                </Link>

                <div className="new_product">
                  <span className="badge py-2 px-3 badge-pill badge-danger">
                    New
                  </span>
                </div>
              </div>
              <div className="product-caption my-3">
                <div className="product-ratting">
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star low-star" />
                  <i className="far fa-star low-star" />
                </div>
                <h4>
                  <Link to="/ProductDetail">Dress with details</Link>
                </h4>
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
            <div className="single_product shadow text-center p-1 mt-small-5 mb-small-5">
              <div className="product_img">
                <Link to="/ProductDetail">
                  <img
                    src="../src/assets/3.jpg"
                    className="img img-fluid"
                    alt=""
                  />
                </Link>

                <div className="new_product">
                  <span className="badge py-2 px-3 badge-pill badge-danger">
                    New
                  </span>
                </div>
              </div>
              <div className="product-caption my-3">
                <div className="product-ratting">
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star low-star" />
                  <i className="far fa-star low-star" />
                </div>
                <h4>
                  <Link to="/ProductDetail">Dress with details</Link>
                </h4>
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
                    src="../src/assets/4.jpg"
                    className="img img-fluid"
                    alt=""
                  />
                </Link>

                <div className="new_product">
                  <span className="badge py-2 px-3 badge-pill badge-danger">
                    New
                  </span>
                </div>
              </div>
              <div className="product-caption my-3">
                <div className="product-ratting">
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star" />
                  <i className="far fa-star low-star" />
                  <i className="far fa-star low-star" />
                </div>
                <h4>
                  <Link to="/ProductDetail">Dress with details</Link>
                </h4>
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
    </section>
  );
};

export default ProductHomepage;
