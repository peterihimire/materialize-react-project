import React, { Component } from "react";
import "./Navbar.css";
import "./Modal.css";
import logoAlt from "../assets/logo-alt.svg";
import logo from "../assets/logo.svg";
import x from "../assets/x.svg";
import menuIcon from "../assets/menu-icon.svg";
import M from "materialize-css/dist/js/materialize.min.js";
import { NavLink, Link } from "react-router-dom";
import Modally from "../components/Modally";

class Navbar extends Component {
  componentDidMount() {
    // sidenav
    const sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {});
    // Modal
    const modalTrigger = document.querySelector(".modal");
    M.Modal.init(modalTrigger, {});
    // // Modal2
    // const modalTrigger2 = document.querySelector(".modal2");
    // M.Modal.init(modalTrigger2, {});
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
                {/* <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navbar-single-link"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li> */}
              </ul>

              <ul className="hide-on-med-and-down right nav-links">
                <li className="nav-item nav-login-group">
                  <a href="#log-in" className="modal-trigger">
                    Log In
                  </a>
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
          {/* <li className="nav-item">
            <NavLink
              exact
              activeClassName="active-2"
              className="navbar-single-link-2"
              to="/contact"
            >
              contact
            </NavLink>
          </li> */}
          <li className="nav-item login-style">
            <a href="#log-in" className="modal-trigger sidenav-login">
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
        <div id="get-started" className="modal">
          <div className="modal-content">
            <div className="row">
              <div className="container black-txt">
                <div className="col s12 m5">
                  <div className="modal-bg-div">
                    <a href="/" className="hidden-xs">
                      <img
                        src={logoAlt}
                        alt="Paymonthly Cars"
                        className="modal-logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col s12 m7 rel m-c">
                  <div className="close-div right-align-xs rel">
                    <a href="/" class="visible-xs">
                      <img
                        src={logo}
                        alt="Paymonthly Cars"
                        className="modal-logo"
                      />
                    </a>
                    <img
                      src={x}
                      alt="close modal"
                      className="modal-close cursor"
                    />
                  </div>
                  <form action="https://paymonthlycars.com/login" method="POST">
                    <h4 className="modal-title sec-title">Join Us</h4>
                    <div className="row">
                      <div className="col s12">
                        <div className="input-field col s12 m10 l7 pad0">
                          <input
                            type="email"
                            id="email"
                            value=""
                            name="email"
                            required
                          />
                          <label for="email">Email</label>
                        </div>
                      </div>
                      <div className="col s12">
                        <div className="input-field col s12 m10 l7 pad0">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            value=""
                            required
                          />
                          <label for="password">Password</label>
                        </div>
                      </div>
                    </div>

                    <div className="row mgd">
                      <div className="col s12">
                        <div>
                          <button type="submit" className="btn btn-bigger">
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modally />
        {/* This is the modal for login button */}
        {/* <div id="log-in" className="modal2">
          <div className="modal-content">
            <div className="row">
              <div className="container black-txt">
                <div className="col s12 m5">
                  <div className="modal-bg-div">
                    <a href="/" className="hidden-xs">
                      <img
                        src={logoAlt}
                        alt="Paymonthly Cars"
                        className="modal-logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col s12 m7 rel m-c">
                  <div className="close-div right-align-xs rel">
                    <a href="/" class="visible-xs">
                      <img
                        src={logo}
                        alt="Paymonthly Cars"
                        className="modal-logo"
                      />
                    </a>
                    <img
                      src={x}
                      alt="close modal"
                      className="modal-close cursor"
                    />
                  </div>
                  <form action="https://paymonthlycars.com/login" method="POST">
                    <h4 className="modal-title sec-title">Login</h4>
                    <div className="row">
                      <div className="col s12">
                        <div className="input-field col s12 m6  pad0">
                          <input
                            type="email"
                            id="email"
                            value=""
                            name="email"
                            required
                          />
                          <label for="email">First Name</label>
                        </div>
                      </div>
                      <div className="col s12">
                        <div className="input-field col s12 m6  pad0">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            value=""
                            required
                          />
                          <label for="password">Last Name</label>
                        </div>
                      </div>
                    </div>

                    <div className="row mgd">
                      <div className="col s12">
                        <div>
                          <button type="submit" className="btn btn-bigger">
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}
export default Navbar;
