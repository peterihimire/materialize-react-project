import React from "react";
import "./Faq.css";
import M from "materialize-css/dist/js/materialize.min.js";

class Faq extends React.Component {
  componentDidMount() {
    const faqTab = document.querySelector(".tabs");
    M.Tabs.init(faqTab, {});
    const tabCollapsible = document.querySelectorAll(".collapsible");
    M.Collapsible.init(tabCollapsible, {});
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
                          {/* add_shopping_cart */}cart
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

              <div className="col s12" id="tab-one">
                <div className="accordion">
                  <div className="collapsible-header-sm visible-xs">
                    <h6>BUYER</h6>
                    <p>check faq for buyers</p>
                  </div>
                  <ul className="collapsible">
                    <li className="active">
                      <div className="collapsible-header rel">
                        <i className="material-icons add-icon">add</i>
                        <i className="material-icons remove-icon">remove</i>
                        <span className="question">
                          How long does it take for me to eventually get the
                          car?
                        </span>
                      </div>

                      <div className="collapsible-body">
                        <p className="answer">
                          Yes you can, some penalties would apply for the
                          inconvenience, however you can at any point.
                        </p>
                      </div>
                    </li>
                    <li className="">
                      <div className="collapsible-header rel">
                        <i className="material-icons add-icon">add</i>
                        <i className="material-icons remove-icon">remove</i>
                        <span className="question">
                          How long does it take for me to eventually get the
                          car?
                        </span>
                      </div>

                      <div className="collapsible-body">
                        <p className="answer">
                          Yes you can, some penalties would apply for the
                          inconvenience, however you can at any point.
                        </p>
                      </div>
                    </li>
                    <li className="">
                      <div className="collapsible-header rel">
                        <i className="material-icons add-icon">add</i>
                        <i className="material-icons remove-icon">remove</i>
                        <span className="question">
                          How long does it take for me to eventually get the
                          car?
                        </span>
                      </div>

                      <div className="collapsible-body">
                        <p className="answer">
                          Yes you can, some penalties would apply for the
                          inconvenience, however you can at any point.
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="collapsible-header">
                        <i className="material-icons">filter_drama</i>This is
                        for the first tab, this shit makes sense when you start
                        to grab them.
                      </div>
                      <div className="collapsible-body">
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quo quam consectetur quos amet ipsum et
                          voluptatibus quis dolores placeat obcaecati.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col s12" id="tab-two">
                <div className="accordion">
                  <div className="collapsible-header-sm visible-xs">
                    <h6>BUYER</h6>
                    <p>check faq for buyers</p>
                  </div>
                  <ul className="collapsible">
                    <li className="active">
                      <div className="collapsible-header rel">
                        <i className="material-icons add-icon">add</i>
                        <i className="material-icons remove-icon">remove</i>
                        <span className="question">
                          This is for the second tab, guess it makes sense for
                          us?
                        </span>
                      </div>

                      <div className="collapsible-body">
                        <p className="answer">
                          Yes you can, some penalties would apply for the
                          inconvenience, however you can at any point.
                        </p>
                      </div>
                    </li>
                    <li className="">
                      <div className="collapsible-header rel">
                        <i className="material-icons add-icon">add</i>
                        <i className="material-icons remove-icon">remove</i>
                        <span className="question">
                          How long does it take for me to eventually get the
                          car?
                        </span>
                      </div>

                      <div className="collapsible-body">
                        <p className="answer">
                          Yes you can, some penalties would apply for the
                          inconvenience, however you can at any point.
                        </p>
                      </div>
                    </li>
                    <li className="">
                      <div className="collapsible-header rel">
                        <i className="material-icons add-icon">add</i>
                        <i className="material-icons remove-icon">remove</i>
                        <span className="question">
                          How long does it take for me to eventually get the
                          car?
                        </span>
                      </div>

                      <div className="collapsible-body">
                        <p className="answer">
                          Yes you can, some penalties would apply for the
                          inconvenience, however you can at any point.
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="collapsible-header">
                        <i className="material-icons">filter_drama</i>This is
                        for the second tab, ok...
                      </div>
                      <div className="collapsible-body">
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quo quam consectetur quos amet ipsum et
                          voluptatibus quis dolores placeat obcaecati.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col s12" id="tab-three">
                <div className="accordion">
                  <div className="collapsible-header-sm visible-xs">
                    <h6>BUYER</h6>
                    <p>check faq for buyers</p>
                  </div>
                  <ul className="collapsible">
                    <li className="active">
                      <div className="collapsible-header rel">
                        <i className="material-icons add-icon">add</i>
                        <i className="material-icons remove-icon">remove</i>
                        <span className="question">
                          This is for the third tab, I hope I make it someday,
                          cause I got alot of stories to tell?
                        </span>
                      </div>

                      <div className="collapsible-body">
                        <p className="answer">
                          Yes you can, some penalties would apply for the
                          inconvenience, however you can at any point.
                        </p>
                      </div>
                    </li>
                    <li className="">
                      <div className="collapsible-header rel">
                        <i className="material-icons add-icon">add</i>
                        <i className="material-icons remove-icon">remove</i>
                        <span className="question">
                          How long does it take for me to eventually get the
                          car?
                        </span>
                      </div>

                      <div className="collapsible-body">
                        <p className="answer">
                          Yes you can, some penalties would apply for the
                          inconvenience, however you can at any point.
                        </p>
                      </div>
                    </li>
                    <li className="">
                      <div className="collapsible-header rel">
                        <i className="material-icons add-icon">add</i>
                        <i className="material-icons remove-icon">remove</i>
                        <span className="question">
                          How long does it take for me to eventually get the
                          car?
                        </span>
                      </div>

                      <div className="collapsible-body">
                        <p className="answer">
                          Yes you can, some penalties would apply for the
                          inconvenience, however you can at any point.
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="collapsible-header">
                        <i className="material-icons">filter_drama</i>This is
                        for the third tab, I hope you can relate this shit.
                      </div>
                      <div className="collapsible-body">
                        <span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quo quam consectetur quos amet ipsum et
                          voluptatibus quis dolores placeat obcaecati.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Faq;
