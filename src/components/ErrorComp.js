import React from "react";

const Error = (props) => {
  console.log(props);
  console.log(props.hestory);
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1>404</h1>
            <h2>page not found</h2>
            <h3>
              The requested URL{" "}
              <span className="notfound">
                {props.hestory.history.location.pathname}
              </span>{" "}
              was not found.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
