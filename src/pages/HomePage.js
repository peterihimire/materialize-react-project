import React from "react";
import Banner from "../components/Banner";
import HomeAbout from "../components/HomeAbout";
import BuyCar from "../components/BuyCar";
import CarOption from "../components/CarOption";
import SellCar from "../components/SellCar";
import Media from "../components/Media";
import Partner from "../components/Partner";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Banner />
      <HomeAbout />
      <BuyCar />
      <CarOption />
      <SellCar />
      <Media />
      <Partner />
      <Footer />
    </>
  );
};

export default HomePage;
