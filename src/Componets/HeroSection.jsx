import React from "react";
import HeroImage from "./assets/api.jpg";

function HeroSection() {
  return (
    <div className="h-75 w-100">
      <img src={HeroImage} className=" heroImage img-fluid w-100 h-auto"></img>
    </div>
  );
}

export default HeroSection;
