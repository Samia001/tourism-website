import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <h3>BD Traveller's Point</h3>
                  <p>
                    subscribe to our newsletter to receive latest offers about
                    our tour planning and travellers
                  </p>
                </div>
              </div>
              <div className="row footer-newsletter justify-content-center">
                <div className="col-lg-6">
                  <form action method="post">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                    />
                    <input type="submit" defaultValue="Subscribe" />
                  </form>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="twitter">
                  <i className="bx bxl-twitter" />
                </a>
                <a href="#" className="facebook">
                  <i className="bx bxl-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="bx bxl-instagram" />
                </a>
                <a href="#" className="google-plus">
                  <i className="bx bxl-skype" />
                </a>
                <a href="#" className="linkedin">
                  <i className="bx bxl-linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div className="container footer-bottom clearfix">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>BD Traveller's Point</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Developed by{" "}
              <a href="#" target="_blank">
                Samia
              </a>
            </div>
          </div>
        </footer>
        {/* End Footer */}
      </div>
    </>
  );
};

export default Footer;
