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
          <div className=" col s12 m12 l3 footer-content-one">
            <div className="s12 m4  white-text">
              <h6>join our mailing list</h6>
              <form>
                <input />
                <button>subscribe</button>
              </form>
            </div>
          </div>
          <div className=" col s12 m12 l8 offset-l1 ">
            <div className=" col s6 m3  white-text">
              <h6>who we are</h6>
              <ul>
                <li>about</li>
                <li>sponsor</li>
              </ul>
            </div>
            <div className=" col s6 m3  white-text">
              <h6>our services</h6>
              <ul>
                <li>buy a car</li>
                <li>sell a car</li>
              </ul>
            </div>
            <div className=" col s6 m3  white-text">
              <h6>contact us</h6>
              <ul>
                <li>+234 806 0958 134</li>
                <li>peterihimire@gmail.com</li>
              </ul>
            </div>
            <div className=" col s6 m3  white-text">
              <h6>support</h6>
              <ul>
                <li>FAQs</li>
                <li>terms and conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
