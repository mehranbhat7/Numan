import React from "react";
import Navbar from "../Navbar";
import Slider from "../Slider";
import MovingText from "../Movingtext";
import Services from "../Services";
import Currency from "../Currency";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <MovingText />
      <Services />
      <Currency />
    </div>
  );
};

export default Home;
