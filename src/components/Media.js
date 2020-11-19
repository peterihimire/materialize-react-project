import React, { useState } from "react";
import "./Media.css";
import image from "../assets/Screenshot.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ReactPlayer from "react-player/youtube";
import MediaSliderXs from "./MediaSliderXs";
import ModalVideo from "react-modal-video";
// @import 'node_modules/react-modal-video/scss/modal-video.scss';
import "react-modal-video/scss/modal-video.scss";

const Media = (props) => {
  const [isOpen, setOpen] = useState(false);
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
      <section className="media">
        <div className="container">
          <h4 className="media-heading center">media</h4>
          <div className="row">
            <div className="col s12">
              <div className="col s12 hidden-xs">
                <Slider {...settings}>
                  <div className=" col s12">
                    <div class="col s12 m4">
                      {/* <ReactPlayer
                      url="https://www.youtube.com/embed/oDKQYqkmySA?rel=0&amp;controls=0&amp;showinfo=0"
                      width="100%"
                      height="230px"
                      controls
                    /> */}
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
                      {/* <ReactPlayer
                      url="https://www.youtube.com/embed/oDKQYqkmySA?rel=0&amp;controls=0&amp;showinfo=0"
                      width="100%"
                      height="230px"
                      controls
                    /> */}
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
                      {/* <ReactPlayer
                      url="https://www.youtube.com/embed/oDKQYqkmySA?rel=0&amp;controls=0&amp;showinfo=0"
                      width="100%"
                      height="230px"
                      controls
                    /> */}
                      <div class="vid-img">
                        <img
                          src={image}
                          alt="video 1"
                          width="100%"
                          onClick={() => setOpen(true)}
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
