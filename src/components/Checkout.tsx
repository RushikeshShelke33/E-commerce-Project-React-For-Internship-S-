import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <Navbar />

      <section className="Checkout py-5 my-5" id="Checkout">
        <div className="container ">
          <div className="section_title text-center mb-5">
            <h1 className="text-capitalize">Checkout</h1>
          </div>
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-8">
              {/* Card */}
              <div className="card bg_checkout_1 pb-5">
                <div className="card-body">
                  <h5 className="mb-5">Billing details</h5>
                  {/* Grid row */}
                  <div className="row">
                    {/* Grid column */}
                    <div className="col-lg-6">
                      {/* First name */}
                      <div className="form-group mb-0 mb-lg-4">
                        <label htmlFor="firstName">First name</label>
                        <input
                          type="text"
                          id="firstName"
                          className="form-control mb-0
mb-lg-2"
                        />
                      </div>
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
                    <div className="col-lg-6">
                      {/* Last name */}
                      <div className="form-group md-outline">
                        <label htmlFor="lastName">Last name</label>
                        <input
                          type="text"
                          id="lastName"
                          className="form-control"
                        />
                      </div>
                    </div>
                    {/* Grid column */}
                  </div>
                  {/* Grid row */}
                  {/* Phone */}
                  <div className="form-group">
                    <label htmlFor="form18">Phone</label>
                    <input type="number" id="form18" className="form-control" />
                  </div>
                  {/* Email address */}
                  <div className="form-group">
                    <label htmlFor="form19">Email address</label>
                    <input type="email" id="form19" className="form-control" />
                  </div>
                  {/* Country */}
                  <div className="d-flex flex-wrap">
                    <div className="w-100">
                      <label>Country</label>
                      <select className="custom-select form-group">
                        <option value="" selected>
                          Choose your option
                        </option>
                        <option value={1}>Option 1</option>
                        <option value={2}>Option 2</option>
                        <option value={3}>Option 3</option>
                      </select>
                    </div>
                  </div>
                  {/* Address Part 1 */}
                  <div className="form-group">
                    <label htmlFor="form14">Address Line 1</label>
                    <input
                      type="text"
                      id="form14"
                      placeholder="House number and
street name"
                      className="form-control"
                    />
                  </div>
                  {/* Address Part 2 */}
                  <div className="form-group">
                    <label htmlFor="form15">Address Line 2</label>
                    <input
                      type="text"
                      id="form15"
                      placeholder="Apartment, suite, unit
etc. (optional)"
                      className="form-control"
                    />
                  </div>
                  {/* Postcode / ZIP */}
                  <div className="form-group">
                    <label htmlFor="form16">Postcode / ZIP</label>
                    <input type="text" id="form16" className="form-control" />
                  </div>
                  {/* Town / City */}
                  <div className="form-group">
                    <label htmlFor="form17">Town / City</label>
                    <input type="text" id="form17" className="form-control" />
                  </div>
                  {/* Additional information */}
                  <div className="form-group">
                    <label htmlFor="form76">Additional information</label>
                    <textarea
                      id="form76"
                      className="md-textarea form-control"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  {/* <button class="btn btn-success"><i class="fa fa-check"></i>
Purchase</button> */}
                  <div className="text-center">
                    <Link to="/OrderConfirmation" className="btn btn-primary">
                      <i className="fa fa-check mr-2" />
                      Purchase
                    </Link>
                  </div>
                </div>
              </div>
              {/* Card */}
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-4 bg_checkout_1 h-25 rounded">
              {/* Card */}
              <div className="mb-3">
                <div className="pt-4">
                  <h5 className="mb-3">Order summary</h5>
                  <ul className="list-group list-group-flush">
                    <li
                      className="list-group-item d-flex justify-content-between
align-items-center border-0 px-0 pb-2"
                    >
                      <span>Product name 1</span>
                      <span>x2</span>
                      <span>₹25.98</span>
                    </li>
                    <li
                      className="list-group-item d-flex justify-content-between
align-items-center border-0 px-0 pb-2"
                    >
                      <span>Product name 2</span>
                      <span>x2</span>
                      <span>₹25.98</span>
                    </li>
                    <li
                      className="list-group-item d-flex justify-content-between
align-items-center border-top px-0 mb-3"
                    >
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>₹53.98</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Card */}
            </div>
            {/*Grid column*/}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
