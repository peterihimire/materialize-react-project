import React from "react";
import "./About.css";
import pix from "../assets/three-on-mask.png";

const HomeAbout = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="col s12 m7 l5">
              <div className="about-text-container">
                <div className="about-header">
                  <h3>Our Vision</h3>
                </div>
                <div className="visible-xs">
                  <div className="about-image-container">
                    <img src={pix} alt="person" width="100%" />
                  </div>
                </div>
                <div className="about-text-content">
                  <p className="">
                    I had the best experience shopping with vasiti. Usability of
                    the website was great, very good customer service, an all
                    round great experience. I would definately be coming back! I
                    had the best experience shopping with vasiti. Usability of
                    the website was great, very good customer service, an all
                    round great experience. I would definately be coming back!
                  </p>
                  <p>
                    I had the best experience shopping with vasiti. Usability of
                    the website was great, very good customer service, an all
                    round great experience. I would definately be coming back! I
                    had the best experience shopping with vasiti. Usability of
                    the website was great, very good customer service, an all
                    round great experience. I would definately be coming back! I
                    had the best experience shopping with vasiti. Usability of
                    the website was great, very good customer service, an all
                    round great experience. I would definately be coming back!
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 m5 offset-m0 l5 offset-l2">
              <div className="hidden-xs">
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
