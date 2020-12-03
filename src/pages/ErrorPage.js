import React from "react";
import ErrorComp from "../components/ErrorComp";

const ErrorPage = (props) => {
  console.log(props);
  return <ErrorComp hestory={props} />;
};

export default ErrorPage;
