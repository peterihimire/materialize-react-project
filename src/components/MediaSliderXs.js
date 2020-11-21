import React, { Component } from "react";
import image from "../assets/Screenshot.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ReactPlayer from "react-player/youtube";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

class MediaSliderXs extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      isOpen: false,
      isOpen2: false,
      isOpen3: false,
    };
    this.openModal = this.openModal.bind(this);
    this.openModal2 = this.openModal2.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  openModal2() {
    this.setState({ isOpen2: true });
  }
  openModal3 = () => {
    this.setState({ isOpen3: true });
  };
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
      autoplay: true,
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
          isOpen={this.state.isOpen}
          videoId="oDKQYqkmySA"
          onClose={() => this.setState({ isOpen: false })}
        />
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen2}
          videoId="qN_AA2FzweI"
          onClose={() => this.setState({ isOpen2: false })}
        />
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen3}
          videoId="qN_AA2FzweI"
          onClose={() => this.setState({ isOpen3: false })}
        />
        <div className="  visible-xs mbxs">
          <Slider ref={(c) => (this.slider = c)} {...settings2}>
            <div>
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
                  onClick={this.openModal}
                />
              </div>
            </div>
            <div>
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
                  onClick={this.openModal2}
                />
              </div>
            </div>
            <div>
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
                  onClick={this.openModal3}
                />
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
      </>
    );
  }
}
export default MediaSliderXs;
