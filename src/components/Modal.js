import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

class Modal extends Component {
  componentDidMount() {
    // Modal
    const modalTrigger = document.querySelector(".modal");
    M.Modal.init(modalTrigger, {});
  }
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="row">
            <h3>This is a modal...</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
