import React from "react";

const Carousal = () => {
  return (
    <section>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./src/assets/2338623.jpg"
              className="d-block w-100"
              style={{ maxHeight: 500 }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./src/assets/4386916.jpg"
              className="d-block w-100"
              style={{ maxHeight: 500 }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./src/assets/2338623.jpg"
              className="d-block w-100"
              style={{ maxHeight: 500 }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousal;
