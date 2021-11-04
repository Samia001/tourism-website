import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../images/404.png";

const NotFound = () => {
  return (
    <div>
      <img style={{ width: "100%" }} src={notfound} alt="" />
      <Link to="/">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <button className="btn btn-danger btn-lg px-5 py-3">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
