import React from "react";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, user, logOut } = useAuth();
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <span> Google Sign In</span>
            <h2> Google Sign In</h2>
            <p>Please, sign in using Google Sign In</p>
          </div>
          <div className="row">
            {/* <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <button onClick={signInUsingGoogle} className="btn btn-warning">
                  Google Sign In
                </button>
              </div>
            </div> */}
            <div className="col-lg-5 mt-5 mt-lg-0 d-flex align-items-stretch">
              <div className="info">
                <div className="text-center">
                  <button
                    className="btn btn-outline-primary "
                    onClick={signInUsingGoogle}
                    type="submit"
                  >
                    Google Sign In
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form className="php-email-form">
                <div className="form-group mt-3">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="name">Your Password</label>
                  <input
                    type="password"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>

                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Sign In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
