import React, { useState } from "react";
import "./Media.css";
import image from "../assets/Screenshot.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MediaSliderXs from "./MediaSliderXs";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

const Media = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
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
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="oDKQYqkmySA"
        onClose={() => setOpen(false)}
      />
      <ModalVideo
        channel="youtube"
        isOpen={isOpen2}
        videoId="qN_AA2FzweI"
        onClose={() => setOpen2(false)}
      />
      <ModalVideo
        channel="youtube"
        isOpen={isOpen3}
        videoId="qN_AA2FzweI"
        onClose={() => setOpen3(false)}
      />
      <section className="media">
        <div className="container">
          <div className="media-heading-container">
            <h3 className="media-heading center">media</h3>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="col s12 hidden-xs">
                <Slider {...settings}>
                  <div className=" col s12">
                    <div class="col s12 m4">
                      <div class="vid-img">
                        <img
                          src={image}
                          alt="video 1"
                          width="100%"
                          onClick={() => setOpen(true)}
                        />
                      </div>
                    </div>

                    <div class="col s12 m4">
                      <div class="vid-img">
                        <img
                          src={image}
                          alt="video 1"
                          width="100%"
                          onClick={() => setOpen2(true)}
                        />
                      </div>
                    </div>

                    <div class="col s12 m4">
                      <div class="vid-img">
                        <img
                          src={image}
                          alt="video 1"
                          width="100%"
                          onClick={() => setOpen3(true)}
                        />
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <MediaSliderXs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
