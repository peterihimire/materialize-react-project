import React from "react";
import "./Footer.css";
import logoAlt from "../assets/logo-alt.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo center">
          <a href="/">
            <img src={logoAlt} alt="paymonthly logo-alt" />
          </a>
        </div>
        <hr />
        <div className="row">
          <div className=" col s12 m4 l4 footer-content-one">
            <div className="s12 m4">
              <h6>join our mailing list</h6>
              <form>
                <input />
                <button>subscribe</button>
              </form>
            </div>
          </div>
          <div className=" col s12 m8 l8 ">
            <div className=" col s6 m2">
              <h6>who we are</h6>
            </div>
            <div className=" col s6 m2">
              <h6>our services</h6>
            </div>
            <div className=" col s6 m2">
              <h6>contact us</h6>
            </div>
            <div className=" col s6 m2">
              <h6>support</h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
