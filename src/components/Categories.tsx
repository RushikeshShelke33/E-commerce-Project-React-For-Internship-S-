import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <Navbar />
      <section className="products py-5 my-5 bg-light" id="products">
        <div className="container ">
          <div className="section_title text-center mb-5">
            <h1 className="text-capitalize">Categories</h1>
          </div>
          <div className="row mb-5">
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <Link to="/Products">
                    <img
                      src="./src/assets/5.jpg"
                      className="img img-fluid rounded"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="product-caption my-3">
                  <h4>
                    <Link to="/Products">xyz</Link>
                  </h4>
                </div>
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, ad!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div
                className="single_product shadow text-center p-1 mt-small-5
mb-small-5"
              >
                <div className="product_img">
                  <Link to="/Products">
                    <img
                      src="./src/assets/6.webp"
                      className="img img-fluid rounded"
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
                  <h4>
                    <Link to="/Products">xyz</Link>
                  </h4>
                </div>
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, ad!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <Link to="/Products">
                    <img
                      src="./src/assets/7.webp"
                      className="img img-fluid rounded"
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
                  <h4>
                    <Link to="/Products">xyz</Link>
                  </h4>
                </div>
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, ad!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <Link to="/Products">
                    <img
                      src="./src/assets/8.webp"
                      className="img img-fluid rounded"
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
                  <h4>
                    <Link to="/Products">xyz</Link>
                  </h4>
                </div>
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, ad!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div
                className="single_product shadow text-center p-1 mt-small-5
mb-small-5"
              >
                <div className="product_img">
                  <Link to="/Products">
                    <img
                      src="./src/assets/9.webp"
                      className="img img-fluid rounded"
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
                  <h4>
                    <Link to="/Products">xyz</Link>
                  </h4>
                </div>
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, ad!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="single_product shadow text-center p-1">
                <div className="product_img">
                  <Link to="/Products">
                    <img
                      src="./src/assets/1.jpg"
                      className="img img-fluid rounded"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="product-caption my-3">
                  <h4>
                    <Link to="/Products">xyz</Link>
                  </h4>
                </div>
                <div className="mt-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, ad!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <Footer />
    </>
  );
};

export default Categories;
