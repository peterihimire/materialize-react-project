import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import HomeAbout from "./components/HomeAbout";
import BuyCar from "./components/BuyCar";
import CarOption from "./components/CarOption";
import SellCar from "./components/SellCar";
import Media from "./components/Media";
import Partner from "./components/Partner";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <HomeAbout />
        <BuyCar />
        <CarOption />
        <SellCar />
        <Media />
        <Partner />
      </div>
    );
  }
}

export default App;
