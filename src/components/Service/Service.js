import React from "react";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { _id, name, date, image, description, packages } = service;
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div className="member">
        <img src={image} alt />
        <h4>{name}</h4>
        <span>{packages}</span>
        <span>{date}</span>
        <p>{description}</p>
        <div>
          <Link to={`/booking/${_id}`}>
            <button className="btn btn-outline-success">
              Book {name.toLowerCase()}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
