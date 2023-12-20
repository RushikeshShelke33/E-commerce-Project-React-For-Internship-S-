import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ContactUS = () => {
  return (
    <>
      <Navbar />
      <section className="contact py-5 my-5" id="contact">
        <div className="container ">
          <div className="section_title text-center mb-5">
            <h1 className="text-capitalize">Contact Us</h1>
          </div>
          <div className="row mb-5">
            <div className="col-md-4 col-12">
              <div className="border border-success rounded shadow text-center p-3">
                <div className="mb-4">
                  <i className="fas fa-phone-alt fa-3x" />
                </div>
                <div>
                  <h3>Let's Talk</h3>
                  <p>
                    <b>Phone:</b> +91-123456789
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="border border-success rounded shadow text-center p-3">
                <div className="mb-4">
                  <i className="fas fa-envelope-open fa-3x" />
                </div>
                <div>
                  <h3>Drop a Line</h3>
                  <p>
                    <b>Email:</b> xyz@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="border border-success rounded shadow text-center p-3">
                <div className="mb-4">
                  <i className="far fa-life-ring fa-3x" />
                </div>
                <div>
                  <h3>24x7 Support</h3>
                  <p>
                    <b>Customer:</b> 1800 101 303
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-10 mx-auto mb-3 my-5 py-5 border shadow">
              <h3 className="text-center mb-3">Form</h3>
              <form action="contact.html" method="POST" id="form">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="msg"
                    id="msg"
                    className="form-control"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary
btn-block"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>{" "}
      <Footer />
    </>
  );
};

export default ContactUS;
