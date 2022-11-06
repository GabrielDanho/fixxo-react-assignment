import React from "react";
import BannersSection from "../sections/BannersSection";
import CustomerSection from "../sections/CustomerSection";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";

const HomeView = () => {
  window.top.document.title = "Fixxo | Home";

  return <>
      <HeaderSection />
      <BannersSection />
      <CustomerSection />
      <FooterSection />
  </>;
};

export default HomeView;
