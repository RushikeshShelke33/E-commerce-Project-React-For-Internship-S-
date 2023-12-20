import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Search = () => {
  return (
    <>
      <Navbar />
      <section className="search_section py-5 my-5" id="search_section">
        <div className="container">
          <div className="title text-center mb-5">
            <h2>
              <i className="far fa-file mr-2" />
              Search
            </h2>
          </div>
          <div className="row">
            {/* BEGIN RESULT */}
            <div className="col-md-10 mx-auto">
              {/* BEGIN SEARCH INPUT */}
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  defaultValue="xyz"
                />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button">
                    <i
                      className="fa
fa-search"
                    />
                  </button>
                </span>
              </div>
              {/* END SEARCH INPUT */}
              <small>Showing all results matching "xyz"</small>
              {/* BEGIN TABLE RESULT */}
              <div className="table-responsive mt-3">
                <table className="table table-hover">
                  <tbody className="border-bottom">
                    <tr>
                      <td className="number text-center">1</td>
                      <td className="image">
                        <img
                          src="../src/assets/8.webp"
                          width="100px"
                          className="img img-fluid"
                          alt=""
                        />
                      </td>
                      <td className="product">
                        <strong>Product 1</strong>
                        <br />
                        This is the product description.
                      </td>
                      <td className="rate text-right">
                        <span>
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i
                            className="fa
fa-star-half-o"
                          />
                        </span>
                      </td>
                      <td className="price text-right">₹350</td>
                    </tr>
                    <tr>
                      <td className="number text-center">2</td>
                      <td className="image">
                        <img
                          src="../src/assets/9.webp"
                          width="100px"
                          className="img img-fluid"
                          alt=""
                        />
                      </td>
                      <td className="product">
                        <strong>Product 1</strong>
                        <br />
                        This is the product description.
                      </td>
                      <td className="rate text-right">
                        <span>
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i
                            className="fa
fa-star-half-o"
                          />
                        </span>
                      </td>
                      <td className="price text-right">₹350</td>
                    </tr>
                    <tr>
                      <td className="number text-center">3</td>
                      <td className="image">
                        <img
                          src="../src/assets/7.webp"
                          width="100px"
                          className="img img-fluid"
                          alt=""
                        />
                      </td>
                      <td className="product">
                        <strong>Product 1</strong>
                        <br />
                        This is the product description.
                      </td>
                      <td className="rate text-right">
                        <span>
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i
                            className="fa
fa-star-half-o"
                          />
                        </span>
                      </td>
                      <td className="price text-right">₹350</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* END TABLE RESULT */}
            </div>
            {/* END RESULT */}
          </div>
        </div>
      </section>{" "}
      <Footer />
    </>
  );
};

export default Search;
