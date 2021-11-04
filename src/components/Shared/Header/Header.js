import React from "react";
import useAuth from "../../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <NavLink className="getstarted scrollto" to="/">
              BD Tour Guide
            </NavLink>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <NavLink className="nav-link scrollto active" to="/">
                  Home
                </NavLink>
              </li>

              <li>
                <HashLink
                  as={HashLink}
                  className="nav-link scrollto"
                  to="/home#contact"
                >
                  Contact
                </HashLink>
              </li>

              <li className="dropdown">
                <a href="#">
                  <span>Manage</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <NavLink className="nav-link scrollto " to="/my-orders">
                      My Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link scrollto " to="/add-service">
                      Add Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav-link scrollto "
                      to="/manage-services"
                    >
                      Manage Services
                    </NavLink>
                  </li>
                </ul>
              </li>

              {user.email && (
                <li>
                  <a className="nav-link scrollto">{user.displayName} </a>
                </li>
              )}
              <li>
                {user.email ? (
                  <button onClick={logOut} className="getstarted scrollto">
                    Log Out
                  </button>
                ) : (
                  <NavLink className="getstarted scrollto" to="/login">
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
