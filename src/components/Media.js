import React from "react";
import "./Media.css";
import image from "../assets/Screenshot.png";
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
    <section className="media">
      <div className="container">
        <h4 className="media-heading center">media</h4>
        <div className="row">
          <div className="col s12">
            <div className="col s12 hidden-xs">
              <Slider {...settings}>
                <div className=" col s12">
                  <div class="col s12 m4">
                    <div class="video-container vid-frame hidden">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/qN_AA2FzweI?rel=0&amp;controls=0&amp;showinfo=0"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div class="vid-img">
                      <img
                        src={image}
                        alt="video 1"
                        style={{ width: "100%", margin: "0 1rem" }}
                        class="scale-up*"
                      />
                    </div>
                  </div>

                  <div class="col s12 m4">
                    <div class="video-container vid-frame hidden ">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/oDKQYqkmySA?rel=0&amp;controls=0&amp;showinfo=0"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div class="vid-img">
                      <img
                        src={image}
                        alt="video 3"
                        style={{ width: "100%", margin: "0 1rem" }}
                        class="scale-up*"
                      />
                    </div>
                  </div>

                  <div class="col s12 m4">
                    <div class="video-container vid-frame hidden ">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/oDKQYqkmySA?rel=0&amp;controls=0&amp;showinfo=0"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div class="vid-img">
                      <img
                        src={image}
                        alt="video 3"
                        style={{ width: "100%", margin: "0 1rem" }}
                        class="scale-up*"
                      />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
