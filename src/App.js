import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
// import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/faq" component={FaqPage} />
          {/* <Route path="/contact" component={ContactPage} /> */}
          <Route component={ErrorPage} />
        </Switch>
      </>
    );
  }
}

export default App;
