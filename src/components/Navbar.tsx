import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="./2227.jpg" alt="" height="30" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/HomePage"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Categories">
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUS">
                  About US
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-disabled="true"
                  to="/ContactUS"
                >
                  Contact US
                </Link>
              </li>
            </ul>
            <form className="d-flex me-2" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Link
                className="btn btn-outline-success"
                type="submit"
                to="/Search"
              >
                Search
              </Link>
            </form>
            <Link className="btn btn-outline-primary" type="button" to="/Cart">
              <i className="bi bi-cart"></i>Cart
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
