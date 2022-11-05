import React from "react";
import HeaderSection from "../sections/HeaderSection";

const HomeView = () => {
  window.top.document.title = "Fixxo | Home";

  return <>
      <HeaderSection />
  </>;
};

export default HomeView;
