import React, { Component } from "react";
import "./CarOption.css";
import image from "../assets/undraw-1.svg";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "pure-react-carousel/dist/react-carousel.es.css";

class CarOption extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
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
            slidesToShow: 2,
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
      nextArrow: (
        <div>
          <div className="next-slick-arrow">
            {" "}
            <i className="material-icons left ">chevron_right</i>{" "}
          </div>
        </div>
      ),
      prevArrow: (
        <div>
          <div className="prev-slick-arrow">
            {" "}
            <i className="material-icons left">chevron_left</i>{" "}
          </div>
        </div>
      ),
    };
    return (
      <section id="car-options" className="seecar">
        <div className="row rel">
          <div className="container">
            <h4 className="sect-title center">See Some Car Options</h4>

            <div className="App">
              <Slider {...settings}>
                <div>
                <div className="cars-options-wrapper">
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                  </div>
                </div>
                <div>
                <div className="cars-options-wrapper">
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                  </div>
                </div>
                <div>
                <div className="cars-options-wrapper">
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                  </div>
                </div>
                
              </Slider>
            </div>

            {/* <CarouselProvider
              naturalSlideHeight={125}
              naturalSlideWidth={100}
              totalSlides={2}
            >
              <Slider>
                <Slide index={0}>
                  <div className="cars-options-wrapper">
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div className="cars-options-wrapper">
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                  </div>
                </Slide>
                <Slide index={2}>
                  <div className="cars-options-wrapper">
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                    <div className="car-option-block">
                      <img
                        src={image}
                        alt="car"
                        className="car-block full-width"
                      />
                    </div>
                  </div>
                </Slide>
              </Slider>
              <ButtonBack>
                <div className="carousel-btn">Back</div>
              </ButtonBack>
              <ButtonNext>
                <div className="carousel-btn">Next</div>
              </ButtonNext>
            </CarouselProvider> */}

            {/* <div class="carousel carousel-slider visible-xs mbxs">
              <div class="carousel-item white-text" href="#one!">
                <div class="cars-options-wrapper">
                  <div class="car-option-block">
                    <img src={image} alt="car" class="car-block full-width" />
                  </div>
                </div>
              </div>
              <div class="carousel-item white-text" href="#two!">
                <div class="cars-options-wrapper">
                  <div class="car-option-block">
                    <img src={image} alt="car" class="car-block full-width" />
                  </div>
                </div>
              </div>
              <div class="carousel-item white-text" href="#three!">
                <div class="cars-options-wrapper">
                  <div class="car-option-block">
                    <img src={image} alt="car" class="car-block full-width" />
                  </div>
                </div>
              </div>
              <div class="carousel-item white-text" href="#four!">
                <div class="cars-options-wrapper">
                  <div class="car-option-block">
                    <img src={image} alt="car" class="car-block full-width" />
                  </div>
                </div>
              </div>
              <div class="carousel-item white-text" href="#five!">
                <div class="cars-options-wrapper">
                  <div class="car-option-block">
                    <img src={image} alt="car" class="car-block full-width" />
                  </div>
                </div>
              </div>
              <div class="carousel-item white-text" href="#six!">
                <div class="cars-options-wrapper">
                  <div class="car-option-block">
                    <img src={image} alt="car" class="car-block full-width" />
                  </div>
                </div>
              </div>
              <div class="carousel-item white-text" href="#seven!">
                <div class="cars-options-wrapper">
                  <div class="car-option-block">
                    <img src={image} alt="car" class="car-block full-width" />
                  </div>
                </div>
              </div>
              <div className="carousel-item white-text" href="#eight!">
                <div className="cars-options-wrapper">
                  <div className="car-option-block">
                    <img src={image} alt="car" className="car-block full-width" />
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="slider-navigation right-align hidden-xs">
              <button className="movePrevCarousel slider-nav-btn">
                <i className="material-icons left middle-indicator-text">
                  chevron_left
                </i>
              </button>
              <button className="moveNextCarousel slider-nav-btn">
                <i className="material-icons right middle-indicator-text">
                  chevron_right
                </i>
              </button>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default CarOption;