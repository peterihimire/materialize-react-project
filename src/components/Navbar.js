import React, { Component } from "react";
import "./Navbar.css";
import logoAlt from "../assets/logo-alt.svg";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/menu-icon.svg";
import M from "materialize-css/dist/js/materialize.min.js";
import { NavLink, Link } from "react-router-dom";
// import Modal from "../components/Modal";

class Navbar extends Component {
  componentDidMount() {
    // sidenav
    const sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {});
    // Modal
    const modalTrigger = document.querySelector(".modal");
    M.Modal.init(modalTrigger, {});
  }

  render() {
    return (
      <>
        <div className="navbar">
          <nav className="trans-nav" role="navigation">
            <div className=" container nav-wrapper">
              <div className="logo-container ">
                <Link to="/" className="brand-logo left">
                  <img src={logo} alt="paymonthly" className="logo" />
                </Link>
              </div>

              <a
                href="/"
                className="sidenav-trigger right"
                data-target="mobile-nav"
              >
                {/* <i class="material-icons black-text">menu</i> */}
                <img src={menuIcon} alt="menu" className="menu-icon-img" />
              </a>

              <ul className="hide-on-med-and-down nav-center nav-links">
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navbar-single-link "
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navbar-single-link"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navbar-single-link"
                    to="/faq"
                  >
                    FAQs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navbar-single-link"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>

              <ul className="hide-on-med-and-down right nav-links">
                <li className="nav-item nav-login-group">
                  <a href="/">Log In</a>
                  <span>
                    <a
                      href="#get-started"
                      className=" modal-trigger  btn nav-btn "
                    >
                      Get Started
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <ul className="sidenav" id="mobile-nav">
          <div className="sidenav-logo">
            <Link to="/">
              <img src={logoAlt} alt="paymonthly-logo" />
            </Link>
          </div>

          <li className="nav-item ">
            <NavLink
              exact
              activeClassName="active-2"
              className="navbar-single-link-2"
              to="/"
            >
              home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active-2"
              className="navbar-single-link-2"
              to="/about"
            >
              about
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active-2"
              className="navbar-single-link-2"
              to="/faq"
            >
              FAQs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active-2"
              className="navbar-single-link-2"
              to="/contact"
            >
              contact
            </NavLink>
          </li>
          <li className="nav-item login-style">
            <a href="/" className="sidenav-login">
              log in
            </a>
          </li>
          <li className="nav-item signup-style ">
            <a href="#get-started" className=" modal-trigger sidenav-signup ">
              get started
            </a>
          </li>

          <div className="sidenav-footer ">
            <div className="sidenav-footer-container center">
              {/* <div class="sidenav-social-icons">
                <a href="/" target="_blank">
                  {" "}
                  <img src={logo} alt="ing" />
                </a>
                <a href="/" target="_blank">
                  {" "}
                  <img src={logo} alt="ing" />
                </a>
                <a href="/" target="_blank">
                  {" "}
                  <img src={logo} alt="ing" />
                </a>
                <a href="/" target="_blank">
                  {" "}
                  <img src={logo} alt="ing" />
                </a>
              </div> */}
              <div className="white-txt bold-txt">
                <p>©COPYRIGHT PAYMONTHLYCARS.COM 2020</p>
              </div>
            </div>
          </div>
        </ul>
        {/* This is the modal for get-started button */}
        <div className="modal" id="get-started">
          <div className="modal-content">
            <div className="row">
              <h3>This is a modal...</h3>
            </div>
          </div>
        </div>
        {/* <Modal id="get-started" /> */}
      </>
    );
  }
}
export default Navbar;
