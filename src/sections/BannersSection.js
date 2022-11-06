import React from "react";
import img1 from "../images/img1.svg";
import img2 from "../images/img2.svg";

const BannersSection = () => {
  return (
    <section class="__banners container">
        <img src={img1} alt=""/>
        <img src={img2} alt=""/>
   </section>
  );
};

export default BannersSection;
