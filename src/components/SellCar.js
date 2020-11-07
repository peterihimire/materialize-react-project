import React from "react";
import "./SellCar.css";
import image from "../assets/undraw-4.svg";

const SellCar = () => {
  return (
    <section className="sellcar">
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="col s12 m6">
              <div className="hxs">
                <div className="sellcar-text-container">
                  <div className="sellcar-header">
                    <h3>Sell A Car</h3>
                  </div>
                  <div className="sellcar-text-content">
                    <p className="">
                      I had the best experience shopping with vasiti. Usability
                      of the website was great, very good customer
                    </p>
                    <p>
                      I had the best experience shopping with vasiti. Usability
                      of the website was great, very good customer service, an
                      all round great experience. I would definately be coming
                      back!
                    </p>
                  </div>
                  <div>
                    <a href="/" className="btn">
                      register your interest
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="sellcar-img-container">
                <img src={image} className="" alt="car" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellCar;
