import React from "react";
import "./Faq.css";
import M from "materialize-css/dist/js/materialize.min.js";

class Faq extends React.Component {
  componentDidMount() {
    const faqTab = document.querySelector(".tabs");
    M.Tabs.init(faqTab, {});
  }
  render() {
    return (
      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s4">
                  <a href="#tab-one">
                    <div className="tab-click">
                      <div className="tab-icon-div">
                        <i className="material-icons black-text">
                          add_shopping_cart
                        </i>
                      </div>
                      <div className="tab-text hidden-xs">
                        <h6>BUYER</h6>
                        <p>check faq for buyers</p>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="tab col s4">
                  <a href="#tab-two">
                    <div className="tab-click">
                      <div className="tab-icon-div">
                        <i className="material-icons black-text">cake</i>
                      </div>
                      <div className="tab-text hidden-xs">
                        <h6>SELLER</h6>
                        <p>check faq for seller</p>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="tab col s4">
                  <a href="#tab-three">
                    <div className="tab-click">
                      <div className="tab-icon-div">
                        <i className="material-icons black-text">cast</i>
                      </div>
                      <div className="tab-text hidden-xs">
                        <h6>SPONSOR</h6>
                        <p>check faq for sponsor</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Faq;
