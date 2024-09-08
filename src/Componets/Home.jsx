import React from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import AddLine from "./AddLine";

function Home() {
  return (
    <>
      <HeroSection />
      <AddLine />
      <Cart />
      <ProductList />
      <AboutUs />
    </>
  );
}

export default Home;
