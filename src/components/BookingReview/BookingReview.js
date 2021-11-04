import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router";

const BookingReview = () => {
  const { serviceId } = useParams();
  const [service, setSetService] = useState({});
  useEffect(() => {
    const url = `https://hidden-brushlands-98491.herokuapp.com/services/${serviceId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setSetService(data));
  }, []);

  const history = useHistory();
  const handleProceedToBooking = () => {
    history.push("/booking");
  };
  return (
    <>
      <main id="main">
        {/* ======= Breadcrumbs ======= */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Booking Details </h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Booking Details</li>
              </ol>
            </div>
          </div>
        </section>
        {/* End Breadcrumbs */}
        {/* ======= Booking Details Section ======= */}
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <img src={service.image} alt />
                    </div>
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Booking Information</h3>
                  <ul>
                    <li>
                      <strong>Location</strong>: {service.name}
                    </li>
                    <li>
                      <strong>Package</strong>: {service.packages}
                    </li>
                    <li>
                      <strong>Travel date</strong>: {service.date}
                    </li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>Descriptions</h2>
                  <p>{service.description}</p>
                </div>

                <div class="container">
                  <div class="row">
                    <div class="col text-center">
                      <button
                        onClick={handleProceedToBooking}
                        class="btn btn-outline-primary mt-5"
                      >
                        Proceed To Booking
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Booking Details Section */}
      </main>
      {/* End #main */}
    </>
  );
};

export default BookingReview;
