import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import logoAlt from "../assets/logo-alt.svg";
// import x from "../assets/x.svg";
import "./Modally.css";

class Modally extends Component {
  componentDidMount() {
    // Modal
    const modalTrig = document.querySelector(".modal2");
    M.Modal.init(modalTrig, {});
  }
  render() {
    return (
      <>
        <div className="modal-section">
          <div className="container">
            <div className="modal-btn-div">
              <a href="#get" className=" modal-trigger  btn btn-bigger ">
                modal btn
              </a>
            </div>
          </div>
        </div>
        <div id="get" className="modal2">
          <div className="modal-content">
            <div className="row">
              <div className="container">
                <div className="col s12 m5">
                  <div className="modal-bg">
                    <a href="/">
                      <img src={logoAlt} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col s12 m7 rel">
                  <div className="modal-hud rel">
                    <img
                      src=""
                      alt="modal-close-btn"
                      className="modal-close "
                    />
                  </div>
                  <form>
                    <div className="col s12">
                      <div className="input-field col s12 m10 l7 pad0">
                        <input
                          type="email"
                          id="email"
                          value=""
                          name="email"
                          required
                        />
                        <label for="email">Email</label>
                      </div>
                    </div>
                    <div className="col s12">
                      <div className="input-field col s12 m10 l7 pad0">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value=""
                          required
                        />
                        <label for="password">Password</label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modally;
