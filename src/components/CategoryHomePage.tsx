import React from "react";
import { Link } from "react-router-dom";

const CategoryHomePage = () => {
  return (
    <section className="shop_by_category py-5 my-5" id="shop_by_category">
      <div className="container-fluid">
        <div className="section_title text-center mb-5">
          <h1 className="text-capitalize">Shop By category</h1>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="card bg-dark text-white">
              <Link to="/Categories">
                <img
                  className="card-img img img-fluid"
                  src="../src/assets/1.jpg"
                  alt="Card image"
                />
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-small-5 mb-small-5">
            <div className="card bg-dark text-white">
              <Link to="/Categories">
                <img
                  className="card-img img img-fluid"
                  src="../src/assets/2.jpg"
                  alt="Card image"
                />
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card bg-dark text-white">
              <Link to="/Categories">
                <img
                  className="card-img img img-fluid"
                  src="../src/assets/3.jpg"
                  alt="Card image"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHomePage;
