import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import HomeAbout from "./components/HomeAbout";
import BuyCar from "./components/BuyCar";
import CarOption from "./components/CarOption";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <HomeAbout />
        <BuyCar />
        <CarOption />
      </div>
    );
  }
}

export default App;
