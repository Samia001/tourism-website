import React from "react";

const Banner = () => {
  return (
    <>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="
        col-lg-6
        pt-5 pt-lg-0
        order-2 order-lg-1
        d-flex
        flex-column
        justify-content-center
      "
            >
              <h1>Elegant and creative Travel solutions</h1>
              <h2>
                We are team of talented tour planners making your tour more
                enjoyable.
              </h2>
              <div className="d-flex">
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
                <a
                  href="https://youtu.be/ibuUmMhD2Pg"
                  target="_blank"
                  className="glightbox btn-watch-video"
                >
                  <i className="bi bi-play-circle" />
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img
                src="assets/img/hero-img.png"
                className="img-fluid animated"
                alt
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
    </>
  );
};

export default Banner;
