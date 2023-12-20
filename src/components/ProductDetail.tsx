import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <>
      <Navbar />

      <section className="product_detail py-5 my-5" id="product_detail">
        <div className="container ">
          <div className="section_title text-center mb-5">
            <h1 className="text-capitalize">product detail</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide shadow
rounded"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={0}
                        className="active"
                      >
                        <img
                          src="./src/assets/1.jpg"
                          className="d-block w-50
img img-fluid rounded"
                          width="15px"
                          alt="image"
                        />
                      </li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={1}
                      >
                        <img
                          src="./src/assets/3.jpg"
                          className="d-block w-50
img img-fluid rounded"
                          width="15px"
                          alt="image"
                        />
                      </li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={2}
                      >
                        <img
                          src="./src/assets/2.jpg"
                          className="d-block w-50
img img-fluid rounded"
                          width="15px"
                          alt="image"
                        />
                      </li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="./src/assets/1.jpg"
                          className="d-block w-100 img img-fluid rounded"
                          alt="image"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="./src/assets/3.jpg"
                          className="d-block w-100 img img-fluid rounded"
                          alt="image"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="./src/assets/2.jpg"
                          className="d-block w-100 img img-fluid rounded"
                          alt="image"
                        />
                      </div>
                    </div>
                    {/* <a class="carousel-control-prev"
href="#carouselExampleIndicators" role="button" data-slide="prev">
<span class="carousel-control-prev-icon"
aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators"
role="button" data-slide="next">
<span class="carousel-control-next-icon"
aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="title mb-4">
                    <h3>Blue denim shirt</h3>
                  </div>
                  <div className="category mb-4">
                    <span className="bg-light-gray p-2">
                      <Link to="/Categories">SHIRT</Link>
                    </span>
                  </div>
                  <div className="rating d-flex text-danger mb-4">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                  </div>
                  <div className="price mb-4">
                    <b>
                      <span className="mr-1">₹</span>
                      <span>400</span>
                    </b>
                  </div>
                  <div className="desc ">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum nemo aliquid ipsum dolore amet, nesciunt asperiores
                      sequi mollitia iste recusandae. Dolor eveniet unde
                      possimus quod magnam, nobis quisquam totam, quaerat
                      temporibus iusto tenetur ipsam aperiam. Quasi dolores
                      recusandae aperiam. Aliquam consectetur suscipit eligendi
                      temporibus quae, ducimus accusantium adipisci. Ea maiores
                      eum saepe. Obcaecati explicabo sapiente nihil officia
                      eligendi nesciunt, nisi repellendus autem. Fuga aspernatur
                      quam consequatur dignissimos, error corrupti. Doloremque
                      reiciendis quasi, aut eius beatae id sint quis minus
                      culpa.
                    </p>
                  </div>
                  <div className="qty_section border-top pt-2 mb-4">
                    <label>Quantitiy</label>
                    <div>
                      <div className="mb-0 w-100">
                        <input
                          className="quantity text-center"
                          min={0}
                          max={10}
                          name="quantity"
                          defaultValue={1}
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="buy">
                    <Link to="/Cart" className="btn btn-primary shadow">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------related products starts here---------- */}
          <section className="related_products py-5 my-5" id="related_products">
            <div className="title">
              <h3>Related Products</h3>
            </div>
            <div className="row mt-5">
              <div className="col-md-4 col-6">
                <div className="border border-dark rounded shadow text-center p-3">
                  <div className="mb-4">
                    <img
                      src="./src/assets/1.jpg"
                      className="img img-fluid"
                      alt="image"
                    />
                  </div>
                  <div>
                    <a href="javascript:;">
                      <h5>Green Dress with details</h5>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="border border-dark rounded shadow text-center p-3">
                  <div className="mb-4">
                    <img
                      src="./src/assets/3.jpg"
                      className="img img-fluid"
                      alt="image"
                    />
                  </div>
                  <div>
                    <a href="javascript:;">
                      <h5>Green Dress with details</h5>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="border border-dark rounded shadow text-center p-3">
                  <div className="mb-4">
                    <img
                      src="./src/assets/2.jpg"
                      className="img img-fluid"
                      alt="image"
                    />
                  </div>
                  <div>
                    <a href="javascript:;">
                      <h5>Green Dress with details</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ----------------related products ends here---------- */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;
