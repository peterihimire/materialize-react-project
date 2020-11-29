import React from "react";
import "./Footer.css";
import logoAlt from "../assets/logo-alt.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="footer-logo center">
              <a href="/">
                <img src={logoAlt} alt="paymonthly logo-alt" />
              </a>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
