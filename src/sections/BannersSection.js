import React from "react";
import image1 from "../assets/images/img1.svg";
import image2 from "../assets/images/img2.svg";

const BannersSection = () => {
  return (
    <section class="__banners container">
        <img src={image1} alt=""/>
        <img src={image2} alt=""/>
   </section>
  );
};

export default BannersSection;
