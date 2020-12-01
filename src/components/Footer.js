import React from "react";
import "./Footer.css";
import logoAlt from "../assets/logo-alt.svg";
import twIcon from "../assets/tw.svg";
import fbIcon from "../assets/fb.svg";
import inIcon from "../assets/in.svg";

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
        <div className="row footer-content-one">
          <div className=" col s12 m12 l3 ">
            <div className="s12 m4  white-text">
              <h6>join our mailing list</h6>
              <form>
                <input />
                <button className="btn btn-bigger">subscribe</button>
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
        <div className=" row footer-social">
          <div className="col s12 m4">
            <ul className="social-item center-sm">
              <li>
                <img src={twIcon} alt="twitter-icon" />{" "}
              </li>
              <li>
                {" "}
                <img src={fbIcon} alt="twitter-icon" />
              </li>
              <li>
                {" "}
                <img src={inIcon} alt="twitter-icon" />
              </li>
            </ul>
          </div>
          <div className="col s12 m8 center-sm">
            <p>paymonthly is an arm of procredita capital limited</p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            copyright paymonthly 2020 -{" "}
            <u>
              <a href="/">terms & conditions</a>
            </u>{" "}
            <u>
              <a href="/">privacy policy</a>
            </u>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
