import React, { Component } from "react";
import image from "../assets/undraw-1.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class CarSliderXs extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings2 = {
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 500,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            arrows: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 500,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="  visible-xs mbxs">
        <Slider ref={(c) => (this.slider = c)} {...settings2}>
          <div>
            <div className="cars-options-wrapper">
              <div className="car-option-block">
                <img src={image} alt="car" className="car-block full-width" />
              </div>
            </div>
          </div>
          <div>
            <div className="cars-options-wrapper">
              <div className="car-option-block">
                <img src={image} alt="car" className="car-block full-width" />
              </div>
            </div>
          </div>
          <div>
            <div className="cars-options-wrapper">
              <div className="car-option-block">
                <img src={image} alt="car" className="car-block full-width" />
              </div>
            </div>
          </div>
        </Slider>
        <div className="r-slick-container" style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            <i className="material-icons left">chevron_left</i>
          </button>
          <button className="button" onClick={this.next}>
            <i className="material-icons right">chevron_right</i>
          </button>
        </div>
      </div>
    );
  }
}
export default CarSliderXs;
