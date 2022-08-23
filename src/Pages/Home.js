import React, { useState } from "react";
import NavBar from "../Component/HomePage/NavBar";
import Hero from "../Component/HomePage/Hero";
import Category from "../Component/HomePage/Categories";
import Ads from "../Component/HomePage/Ads";
import { Ad1, Ad2 } from "../Data/AdData";
import Carousel from "../Component/HomePage/Carasoul";
import Top from "../Component/HomePage/TopPicks";
import Footer from "../Component/HomePage/Footer";
import Cart from "../Component/PopUps/ShoppingCart";

const Home = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <NavBar pressBtn={() => setNav((prev) => !prev)} />
      <Cart toggle={nav} setToggle={() => setNav((prev) => !prev)} />
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
