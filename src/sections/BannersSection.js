import React from "react";
import image1 from "../assets/images/img1.svg";
import image2 from "../assets/images/img2.svg";

const BannersSection = () => {
  return (
    <section class="container banner-section">
      <div className="row">

        <div className="col banner-section-background-one">
          <div className="row">
            <div className="col">
              <img></img>
            </div>
            <div className="col">
              <h1>Pamela Reif's Top Picks</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>

        <div className="col banner-section-background-two">
          <div className="row">
            <div className="row">
              <div className="col">
                <img></img>
              </div>
              <div className="col">
                <h1>Let's Be Conscious</h1>
                <button>SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default BannersSection;
