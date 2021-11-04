import React from "react";

const FeaturedServices = () => {
  return (
    <>
      {/* ======= Featured Services Section ======= */}
      <section id="featured-services" className="featured-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-laptop" />
                </div>
                <h4 className="title">
                  <a href>Travel Expertise</a>
                </h4>
                <p className="description">
                  Travel expertise on everything from where to go, stay, and
                  what to do, so you can easily find the best vacation for you.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-card-checklist" />
                </div>
                <h4 className="title">
                  <a href>Unbiased Reviews</a>
                </h4>
                <p className="description">
                  We shares honest reviews and undoctored photos so you know
                  exactly what you’ll get before you check in.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-clipboard-data" />
                </div>
                <h4 className="title">
                  <a href>In-Depth</a>
                </h4>
                <p className="description">
                  Everything you need to know to plan your perfect vacation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Featured Services Section */}
    </>
  );
};

export default FeaturedServices;
