import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://hidden-brushlands-98491.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      {/* ======= Team Section ======= */}
      <section id="services" className="team section-bg">
        <div className="container">
          <div className="section-title">
            <span>Services</span>
            <h2>Services</h2>
            <p>Create a memorable adventure to be cherished forever.</p>
          </div>
          <div className="row">
            {services.map((service) => (
              <Service key={service.key} service={service}></Service>
            ))}
          </div>
        </div>
      </section>
      {/* End Team Section */}
    </>
  );
};

export default Services;
