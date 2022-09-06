import React from "react";

import Hero from "../Component/HomePage/Hero";
import Category from "../Component/HomePage/Categories";
import Ads from "../Component/HomePage/Ads";
import { Ad1, Ad2 } from "../Data/AdData";
import Carousel from "../Component/HomePage/Carasoul";
import Top from "../Component/HomePage/TopPicks";
import Footer from "../Component/HomePage/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Ads {...Ad1} />
      <Carousel />
      <Ads {...Ad2} />
      <Top />
      <Footer />
    </>
  );
};

export default Home;
