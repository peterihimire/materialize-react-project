import React from "react";
import "./About.css";
import pix from "../assets/undraw-5.svg";

const HomeAbout = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="col s12 m5">
              <div className="hxs">
                <div className="about-text-container">
                  <div className="about-header">
                    <h3>Our Vision</h3>
                  </div>
                  <div className="about-text-content">
                    <p className="">
                      I had the best experience shopping with vasiti. Usability
                      of the website was great, very good customer service, an
                      all round great experience. I would definately be coming
                      back! I had the best experience shopping with vasiti.
                      Usability of the website was great, very good customer
                      service, an all round great experience. I would definately
                      be coming back!
                    </p>
                    <p>
                      I had the best experience shopping with vasiti. Usability
                      of the website was great, very good customer service, an
                      all round great experience. I would definately be coming
                      back! I had the best experience shopping with vasiti.
                      Usability of the website was great, very good customer
                      service, an all round great experience. I would definately
                      be coming back! I had the best experience shopping with
                      vasiti. Usability of the website was great, very good
                      customer service, an all round great experience. I would
                      definately be coming back!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m5 offset-m2">
              <div className="hxs">
                <div className="about-image-container">
                  <img src={pix} alt="person" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
