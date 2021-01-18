import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

function App() {
  const { headingText } = styles;

  return (
    <div className="container">
      <h2 style={headingText} className="flow-text">
        Modal React Demo
      </h2>
      <p className="flow-text">
        Learn how to use Materialize CSS framework in ReactJS
      </p>
      <Modal />
    </div>
  );
}

const styles = {
  headingText: {
    fontSize: 50,
    fontWeight: 300
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
