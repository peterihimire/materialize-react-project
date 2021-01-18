import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import logoAlt from "../assets/logo-alt.svg";
import x from "../assets/x.svg";
import "./ModalLogin.css";

class ModalLogin extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);
    // If you want to work on instance of the Modal then you can use the below code snippet
    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }
  render() {
    return (
      <>
        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal-login"
          className="modal"
        >
          <div className="modal-content">
            <div className="row">
              <div className="container black-txt">
                <div className="col s12 m5">
                  <div className="modal-bg-div">
                    <a href="/" className="hidden-xs">
                      <img
                        src={logoAlt}
                        alt="Paymonthly Cars"
                        className="modal-logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col s12 m7 rel m-c">
                  <div className="close-div right-align-xs rel">
                    <a href="/" class="visible-xs">
                      <img
                        src="img/paymonthlycars-1.svg"
                        alt="Paymonthly Cars"
                        className="modal-logo"
                      />
                    </a>
                    <img
                      src={x}
                      alt="close modal"
                      className="modal-close cursor"
                    />
                  </div>
                  <form action="https://paymonthlycars.com/login" method="POST">
                    <input
                      type="hidden"
                      name="_token"
                      value="HpHEtnrja8LWLNitDIz0ir0kKFDsgBpx68UPxcXk"
                    />
                    <h4 className="modal-title sec-title">Login</h4>
                    <div className="row">
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
                    </div>

                    <div className="row mgd">
                      <div className="col s12">
                        <div>
                          <button type="submit" className="btn btn-bigger">
                            Login
                          </button>
                        </div>
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

export default ModalLogin;
