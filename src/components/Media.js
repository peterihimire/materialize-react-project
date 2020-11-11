import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Media = (props) => {
  const settings = {
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
    <section>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="col s12 hidden-xs">
              <Slider ref={(c) => (this.slider = c)} {...settings}>
                <div className=" col s12"></div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
