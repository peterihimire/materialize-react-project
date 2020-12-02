import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/about' component={About} />
          <Route path='/faq' component={Faq} />
        </Switch>
      </>
    );
  }
}

export default App;
