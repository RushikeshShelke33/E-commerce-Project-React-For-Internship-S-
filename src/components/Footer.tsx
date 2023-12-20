import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width={40} height={32}>
              <use xlinkHref="#bootstrap" />
            </svg>
          </Link>
          <p className="text-body-secondary">RDS © 2023</p>
        </div>
        <div className="col mb-3">
          <h5>Quick Links</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                About
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                Offers &amp; Discounts
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                Get Coupon
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>New Products</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                Woman Cloth
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                Fashion Accessories
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                Man Accessories
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                Rubber made Toys
              </Link>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>Support</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                Frequently Asked Questions
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                Terms &amp; Conditions
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary">
                Report a Payment Issue
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
