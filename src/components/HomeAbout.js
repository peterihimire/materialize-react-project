import React from "react";
import "./HomeAbout.css";
import pix from "../assets/lady-mask.png";

const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="col s12 m7 l5">
              <div className="hxs">
                <div className="home-about-text-container">
                  <div className="home-about-header">
                    <h3>
                      About PayMonthly<span>cars</span>
                    </h3>
                    <p>Our mission is simple</p>
                  </div>
                  <div className="home-about-text-content">
                    <p className="">
                      I had the best experience shopping with vasiti. Usability
                      of the website was great, very good customer service, an
                      all round great experience. I would definately be coming
                      back!
                    </p>
                    <p>
                      I had the best experience shopping with vasiti. Usability
                      of the website was great, very good customer service, an
                      all round great experience. I would definately be coming
                      back!
                    </p>
                    <p>
                      I had the best experience shopping with vasiti. Usability
                      of the website was great, very good customer service, an
                      all round great experience. I would definately be coming
                      back!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m5 offset-m0 l5 offset-l2">
              <div className="hxs">
                <div className="home-about-image-container">
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
